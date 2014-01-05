import io.cayla.mvvm.dom { DomNode, DomEvent }
import ceylon.collection { LinkedList }
import io.cayla.mvvm.diff { Diff, Change, removed, added, same }
import io.cayla.mvvm.view { BindingContext }
shared object binders {
    
    shared object enter satisfies Binder<Anything()> {
        shared actual void init(Anything() val, BindingContext context) {
            void f(DomEvent event) {
                assert(exists v = event.target.getValue());
                if (event.keyCode == 13) {
                    val();
                }
            }
            context.node.addEventHandler("keyup", f);
        }
        shared actual void update(DomNode node, Anything() val) {
        }
    }
    
    shared Binder<Anything(Source)|Anything()> click<Source = Object>() given Source satisfies Object {
        object impl satisfies Binder<Anything(Source)|Anything()> {
            shared actual void init(Anything(Source)|Anything() val, BindingContext context) {
                if (is Anything(Source) val) {
                    if (exists s = context.resolve<Source>()) {
                        context.node.addEventHandler("click", (DomEvent event) => val(s));
                    } else {
                        // THIS IS NOT  TYPE SAFE
                    }
                }
                else if (is Anything() val) {
                    context.node.addEventHandler("click", (DomEvent event) => val());
                }
            }
            
            shared actual void update(DomNode node, Anything(Source)|Anything() val) {
            }
        }
        return impl;
    }

    shared object checked satisfies Binder<Property<Boolean>> {
        shared actual void init(Property<Boolean> property, BindingContext context) {
            void f(DomEvent event) {
                value target = event.target;
                value checked = target.isChecked();
                assert (exists checked);
                property.setValue(checked);
            }
            context.node.addEventHandler("click", f);
            property.subscribe((Boolean prop) => context.node.setChecked(prop));
            if (property.getValue()) {
                context.node.setAttribute("checked", "");
            }
        }
        shared actual void update(DomNode node, Property<Boolean> property) {
        }
    }
    
    shared Binder<Observable<Boolean>> css(String className) {
        object impl satisfies Binder<Observable<Boolean>> {
            shared actual void init(Observable<Boolean> val, BindingContext context) {
                void g(Boolean p) {
                    if (p) {
                        context.node.addClass(className);
                    } else {
                        context.node.removeClass(className);
                    }
                }
                val.subscribe(g);
                g(val.getValue());
            }
            shared actual void update(DomNode node, Observable<Boolean> val) {
            }
        }
        return impl;
    }
    
    shared Binder<Observable<Boolean>> visible() {
        object impl satisfies Binder<Observable<Boolean>> {
            shared actual void init(Observable<Boolean> val, BindingContext context) {
                void g(Boolean p) {
                    context.node.visible = p;
                }
                val.subscribe(g);
                g(val.getValue());
            }
            shared actual void update(DomNode node, Observable<Boolean> val) {
            }
        }
        return impl;
    }

    shared object text satisfies Binder<Observable<Object>> {
        shared actual void init(Observable<Object> property, BindingContext context) {
            void g(Object p) {
                for (child in context.node.getChildren()) {
                    child.detach();
                }
                value init = property.getValue();
                context.node.addText(init.string);
            }
            property.subscribe(g);
            for (child in context.node.getChildren()) {
                child.detach();
            }
            value init = property.getValue();
            context.node.addText(init.string);
        }
        shared actual void update(DomNode node, Observable<Object> property) {
        }
    }

    shared object val satisfies Binder<Property<String>> {
        shared actual void init(Property<String> property, BindingContext context) {
            void f(DomEvent event) {
                assert(exists v = event.target.getValue());
                property.setValue(v);
                /*
                if (exists handler, event.keyCode == 13) {
                    handler();
                }
                 */
            }
            context.node.addEventHandler("keyup", f);
            void g(String p) {
                context.node.setValue(property.getValue());
            }
            property.subscribe(g);
            context.node.setValue(property.getValue());
        }
        shared actual void update(DomNode node, Property<String> property) {
        }
    }
    
    shared Binder<Observable<Value>> with<Value>() given Value satisfies Object {
        object impl satisfies Binder<Observable<Value>> {
            shared actual void init(Observable<Value> val, BindingContext context) {
                value v = val.getValue();
                context.child(v);
                context.createChildren = false;
            }
            shared actual void update(DomNode node, Observable<Value> val) {
            }
        }
        return impl;
    }
    
    shared Binder<Observable<List<Value>>> foreach<Value>() given Value satisfies Object {
        object impl satisfies Binder<Observable<List<Value>>> {
            
            LinkedList<Value> values = LinkedList<Value>();
            LinkedList<BindingContext> contexts = LinkedList<BindingContext>();
            
            void notify(DomNode node, BindingContext context)(List<Value> list) {
                variable Integer index = 0;
                value diff = Diff([*values], list);
                while (true) {
                    value next = diff.next();
                    if (is [Value, Change] next) {
                        switch (next[1]) 
                        case (removed) {
                            values.remove(index);
                            assert(exists removedContext = contexts.remove(index));
                            removedContext.destroy();
                        }
                        case (added) {
                            value v = next[0];
                            BindingContext childContext = context.child(v);
                            values.add(v);
                            contexts.add(childContext);
                        }
                        case (same) {
                            index++;
                        }
                    } else {
                        break;
                    }
                }
            }

            shared actual void init(Observable<List<Value>> val, BindingContext context) {
                context.createChildren = false;
                value a = notify(context.node, context);
                val.subscribe(notify(context.node, context));
                a(val.getValue());
            }
            
            shared actual void update(DomNode node, Observable<List<Value>> val) {
            }
        }
        return impl;
    }
}
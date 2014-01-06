import io.cayla.mvvm.dom { DomEvent }
import ceylon.collection { LinkedList }
import io.cayla.mvvm.diff { Diff, Change, removed, added, same }
import io.cayla.mvvm { ModelContext, Property, Observable }
shared object binders {
    
    shared object enter satisfies Binder<Anything()> {
        shared actual void init(Anything() val, BindingContext context) {
            void f(DomEvent event) {
                assert(exists v = event.target.getValue());
                if (event.keyCode == 13) {
                    val();
                }
            }
            context.view.node.addEventHandler("keyup", f);
        }
    }
    
    shared Binder<Anything(Source)|Anything()> click<Source = Object>() given Source satisfies Object {
        object impl satisfies Binder<Anything(Source)|Anything()> {
            shared actual void init(Anything(Source)|Anything() val, BindingContext context) {
                if (is Anything(Source) val) {
                    if (exists s = context.model.resolve<Source>()) {
                        context.view.node.addEventHandler("click", (DomEvent event) => val(s));
                    } else {
                        // THIS IS NOT  TYPE SAFE
                    }
                }
                else if (is Anything() val) {
                    context.view.node.addEventHandler("click", (DomEvent event) => val());
                }
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
            context.view.node.addEventHandler("click", f);
            property.subscribe((Boolean prop) => context.view.node.setChecked(prop));
            if (property.getValue()) {
                context.view.node.setAttribute("checked", "");
            }
        }
    }
    
    shared Binder<Observable<Boolean>> css(String className) {
        object impl satisfies Binder<Observable<Boolean>> {
            shared actual void init(Observable<Boolean> val, BindingContext context) {
                void g(Boolean p) {
                    if (p) {
                        context.view.node.addClass(className);
                    } else {
                        context.view.node.removeClass(className);
                    }
                }
                val.subscribe(g);
                g(val.getValue());
            }
        }
        return impl;
    }
    
    shared Binder<Observable<Boolean>> visible() {
        object impl satisfies Binder<Observable<Boolean>> {
            shared actual void init(Observable<Boolean> val, BindingContext context) {
                void g(Boolean p) {
                    context.view.node.visible = p;
                }
                val.subscribe(g);
                g(val.getValue());
            }
        }
        return impl;
    }

    shared object text satisfies Binder<Observable<Object>> {
        shared actual void init(Observable<Object> property, BindingContext context) {
            void g(Object p) {
                for (child in context.view.node.getChildren()) {
                    child.detach();
                }
                value init = property.getValue();
                context.view.node.addText(init.string);
            }
            property.subscribe(g);
            for (child in context.view.node.getChildren()) {
                child.detach();
            }
            value init = property.getValue();
            context.view.node.addText(init.string);
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
            context.view.node.addEventHandler("keyup", f);
            void g(String p) {
                context.view.node.setValue(property.getValue());
            }
            property.subscribe(g);
            context.view.node.setValue(property.getValue());
        }
    }
    
    shared Binder<Observable<Value>> with<Value>() given Value satisfies Object {
        object impl satisfies Binder<Observable<Value>> {
            shared actual void init(Observable<Value> val, BindingContext context) {
                value v = val.getValue();
                context.view.bind(context.model.createChild(v));
                context.view.createContent = false;
            }
        }
        return impl;
    }
    
    shared Binder<Observable<List<Value>>> foreach<Value>() given Value satisfies Object {
        object impl satisfies Binder<Observable<List<Value>>> {
            
            LinkedList<Value> values = LinkedList<Value>();
            LinkedList<ModelContext> contexts = LinkedList<ModelContext>();
            
            void notify(BindingContext context)(List<Value> list) {
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
                            ModelContext childModel = context.model.createChild(v);
                            context.view.bind(childModel);
                            values.add(v);
                            contexts.add(childModel);
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
                context.view.createContent = false;
                value a = notify(context);
                val.subscribe(notify(context));
                a(val.getValue());
            }
        }
        return impl;
    }
}
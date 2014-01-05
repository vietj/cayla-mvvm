import io.cayla.mvvm.dom { DomNode, make = element }

class ElementBindingContext(shared ModelContext model, shared actual DomNode node, shared actual Element element, ElementBindingContext? parent = null) 
        satisfies BindingContext  {
    
    shared actual variable Boolean createChildren = true;
    
    shared actual void destroy() {
        model.destroy();
    }
    
    shared actual BindingContext child(Object child) {
        value ret = ModelContext(child, model);
        ElementBindingContext wrapper = ElementBindingContext(ret, node, element, parent);
        wrapper.initChildren();
        return wrapper;
    }

    shared actual Value? resolve<Value>()
            given Value satisfies Object => model.resolve<Value>();
    
    shared void register(DomNode node) {
        model.register(node);
    }

    shared void init() {
        node.setId(element.id);
        for (attr in element.attrs) {
            node.setAttribute(attr.key, attr.item);
        }
        for (className in element.classNames) {
            node.addClass(className);
        }
        if (is Binding[] bindings = element.bindings) {
            for (binding in bindings) {
                binding.init(this);
            }
        } else if (is Binding binding = element.bindings) {
            binding.init(this);
        }
        if (createChildren) {
            initChildren();
        }
    }

    void initChildren() {
        for (child in element.content) {
            switch (child)
            case (is String) {
                node.addText(child);
            }
            case (is Element) {
                DomNode foo = make(child.name);
                register(foo);
                ElementBindingContext childContext = ElementBindingContext(model, foo, child, this);
                childContext.init();
                node.addChild(foo);
            }
        }
    }
}
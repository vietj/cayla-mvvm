import io.cayla.mvvm.dom { DomNode, make = element }
import io.cayla.mvvm { ModelContext }
import io.cayla.mvvm.binding { Binding, BindingContext }

class ElementViewContext(shared ModelContextImpl modelContext, shared actual DomNode node, shared actual Element template, ElementViewContext? parent = null) 
        satisfies ViewContext  {
    
    shared actual variable Boolean createContent = true;
    
    shared actual void bind(ModelContext model) {
        assert(is ModelContextImpl model);
        ElementViewContext wrapper = ElementViewContext(model, node, template, parent);
        wrapper.initChildren();
    }

    shared void register(DomNode node) {
        modelContext.register(node);
    }

    shared void init() {
        value bindingContext = BindingContext(modelContext, this);
        node.setId(template.id);
        for (attr in template.attrs) {
            node.setAttribute(attr.key, attr.item);
        }
        for (className in template.classNames) {
            node.addClass(className);
        }
        if (is Binding[] bindings = template.bindings) {
            for (binding in bindings) {
                binding.init(bindingContext);
            }
        } else if (is Binding binding = template.bindings) {
            binding.init(bindingContext);
        }
        if (createContent) {
            initChildren();
        }
    }

    void initChildren() {
        for (child in template.content) {
            switch (child)
            case (is String) {
                node.addText(child);
            }
            case (is Element) {
                DomNode foo = make(child.name);
                register(foo);
                ElementViewContext childContext = ElementViewContext(modelContext, foo, child, this);
                childContext.init();
                node.addChild(foo);
            }
        }
    }

}
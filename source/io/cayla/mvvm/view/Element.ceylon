import io.cayla.mvvm.dom { DomNode, element }

shared alias Bindings => Binding|<Binding[]>;

shared abstract class Element(
    shared String? id,
    shared String name, 
    shared String[] classNames,
    shared Bindings bindings, 
    shared {<String|Element>*} content) {
    
    shared default {<String->String>*} attrs = {};
    
    shared DomNode bind(Object o) {
        DomNode node = element(name);
        ModelContext root = ModelContext(o, null);
        ElementBindingContext wrapper = ElementBindingContext(root, node, this);
        wrapper.init();
        return node;
    }
}
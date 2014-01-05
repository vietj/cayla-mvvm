
import io.cayla.mvvm.dom { DomNode }
import ceylon.collection { LinkedList }

class ModelContext(shared Object o, shared ModelContext? parent = null) {
    
    shared LinkedList<DomNode> nodes = LinkedList<DomNode>();

    shared void destroy() {
        for (node in nodes.reversed) {
            node.detach();
        }
    }

    shared void register(DomNode node) {
        nodes.add(node);
    }

    shared Value? resolve<Value>()
            given Value satisfies Object {
        if (is Value o) {
            return o;
        } else if (exists parent) {
            return parent.resolve<Value>();
        } else {
            return null;
        }
    }

}
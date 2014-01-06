
import io.cayla.mvvm.dom { DomNode }
import ceylon.collection { LinkedList }
import io.cayla.mvvm { ModelContext }

class ModelContextImpl(shared Object o, shared ModelContext? parent = null) satisfies ModelContext {
    
    shared LinkedList<DomNode> nodes = LinkedList<DomNode>();
    
    shared actual void destroy() {
        for (node in nodes.reversed) {
            node.detach();
        }
    }
    
    shared actual ModelContext createChild(Object child) {
        return ModelContextImpl(child, this);
    }
    
    shared void register(DomNode node) {
        nodes.add(node);
    }
    
    "Resolve a value against this binding context, the value can either be the current object or be resolved in an ancestor context."
    shared actual Value? resolve<Value>() given Value satisfies Object {
        if (is Value o) {
            return o;
        } else if (exists parent) {
            return parent.resolve<Value>();
        } else {
            return null;
        }
    }
    
}
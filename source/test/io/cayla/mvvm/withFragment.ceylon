import io.cayla.mvvm.dom { DomNode }
shared void withFragment(void callback(DomNode fragment)) {
    DomNode bodyNode;
    dynamic {
        dynamic bodies = document.getElementsByTagName("body");
        dynamic body = bodies[0];
        bodyNode = DomNode(body);
    }
    DomNode fragmentNode = bodyNode.addElement("div");
    try {
        callback(fragmentNode);
    } finally {
        fragmentNode.detach();
    }
    
}
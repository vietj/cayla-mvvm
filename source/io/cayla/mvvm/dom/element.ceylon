shared DomNode element(String name) {
    dynamic {
        dynamic peer = document.createElement(name);
        value node = DomNode(peer);
        peer.ref = node;
        return node;
    }
}

shared DomNode text(String cdata) {
    dynamic {
        dynamic peer = document.createTextNode(cdata);
        value node = DomNode(peer);
        peer.ref = node;
        return node;
    }
}
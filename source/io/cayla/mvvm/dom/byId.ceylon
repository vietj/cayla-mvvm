shared DomNode byId(String id) {
    dynamic {
        dynamic peer = document.getElementById(id);
        if (exists peer) {
            return wrap(peer);
        } else {
            throw Exception("handle me gracefully");
        }
    }
}
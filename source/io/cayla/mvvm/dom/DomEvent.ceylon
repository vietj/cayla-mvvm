shared class DomEvent(shared DomNode target, dynamic peer) {
    
    shared Integer keyCode {
        dynamic {
            return peer.keyCode;
        }
    }
    
    shared void preventDefault() {
        dynamic {
            peer.preventDefault();
        }
    }
}
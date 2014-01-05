import ceylon.collection { LinkedList }

DomNode wrap(dynamic nodePeer) {
    dynamic {
        dynamic ref = nodePeer.ref;
        if (isUndefined(ref)) {
            value node = DomNode(nodePeer);
            nodePeer.ref = node;
            return node;
        } else {
            return ref;
        }
    }
}

Boolean _matchesSelector(dynamic nodePeer, String selector) {
    dynamic {
        dynamic parentPeer = nodePeer.parentNode;
        if (parentPeer exists && parentPeer.nodeType == 1) {
            dynamic selectedPeers = parentPeer.querySelectorAll(selector);
            dynamic length = selectedPeers.length;
            for (i in 0:length) {
                dynamic selectedPeer = selectedPeers.item(i);
                if (selectedPeer == nodePeer) {
                    return true;
                }
            }
        }
        return false;
    }
}

shared {DomNode*} querySelectorAll(String selector) {
    dynamic {
        LinkedList<DomNode> selected = LinkedList<DomNode>();
        dynamic nodePeers = document.querySelectorAll(selector);
        dynamic length = nodePeers.length;
        for (i in 0:length) {
            dynamic nodePeer = nodePeers.item(i);
            selected.add(wrap(nodePeer));
        } 
        return selected;       
    }
}

shared class DomNode(variable dynamic peer) {
    
    shared DomNode addText(String cdata) {
        return addChild(text(cdata));
    }
    
    shared {DomNode*} getChildren() {
        LinkedList<DomNode> children = LinkedList<DomNode>();
        dynamic {
            dynamic childNodes = peer.childNodes;
            dynamic length = childNodes.length;
            for (i in 0:length) {
                dynamic childPeer = childNodes.item(i);
                children.add(childPeer.ref);
            }
        }
        return children;
    }
    
    shared DomNode addChild(DomNode node) {
        dynamic {
            dynamic nodePeer = node.peer;
            nodePeer.ref = null;
            dynamic childPeer = peer.appendChild(nodePeer);
            childPeer.ref = node;
            node.peer = childPeer;
            return node;
        }
    }

    shared DomNode insertBefore(DomNode node, DomNode? nextSibling = null) {
        dynamic {
            dynamic nodePeer = node.peer;
            nodePeer.ref = null;
            dynamic nextSiblingPeer;
            if (exists nextSibling) {
                nextSiblingPeer = nextSibling.peer;
            } else {
                nextSiblingPeer = null;
            }
            dynamic childPeer = peer.insertBefore(nodePeer, nextSiblingPeer);
            childPeer.ref = node;
            node.peer = childPeer;
            return node;
        }
    }

    shared DomNode addElement(String name) {
       return addChild(element(name));
    }
    
    shared void setId(String? id) {
        dynamic {
            peer.id = id;
        }
    }
    
    shared String? getAttribute(String name) {
        dynamic {
            return peer.getAttribute(name);
        }
    }

    shared void setAttribute(String name, String val) {
        dynamic {
            peer.setAttribute(name, val);
        }
    }
    
    shared void removeAttribute(String name) {
        dynamic {
            peer.removeAttribute(name);
        }
    }

    // Input specific
    shared String? getValue() {
        dynamic {
            return peer.\ivalue;
        }
    }
    
    // Input specific
    shared void setValue(String val) {
        dynamic {
            peer.\ivalue = val;
        }
    }
    
    // Text node specific
    shared String getNodeValue() {
        dynamic {
            return peer.nodeValue;
        }
    }

            // Text node specific
    shared void setNodeValue(String val) {
        dynamic {
            peer.nodeValue = val;
        }
    }

    // Checkbox specific
    shared Boolean? isChecked() {
        dynamic {
            return peer.checked;
        }
    }
    
    // Checkbox specific
    shared void setChecked(Boolean checked) {
        dynamic {
            peer.checked = checked;
        }
    }

    shared void addClass(String name) {
        dynamic {
            peer.classList.add(name);
        }
    }
    
    shared void removeClass(String name) {
        dynamic {
            peer.classList.remove(name);
        }
    }
    
    shared Boolean hasClass(String name) {
        dynamic {
            if (peer.classList.contains(name)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    shared Boolean visible {
        dynamic {
            dynamic current = peer.style.display;
            return current != "none";
        }
    }
    
    assign visible {
        dynamic {
            dynamic current = peer.style.display;
            Boolean currentlyVisible = current != "none";
            if (visible && !currentlyVisible) {
                peer.style.display = "";
            }
            else if (!visible && currentlyVisible) {
                peer.style.display = "none";
            }
        }
    }
    
    shared Boolean matchesSelector(String selector) {
        dynamic {
            return _matchesSelector(peer, selector);
        }
    }
    
    shared void addEventHandler(String type, Anything(DomEvent) handler, String? selector = null) {
        void f(dynamic eventPeer) {
            dynamic {

                // Determine if we match the selector
                Boolean matched;
                if (exists selector) {
                    variable dynamic nodePeer = eventPeer.target;
                    while (true) {
                        if (nodePeer.nodeType == 1) {
                            if (_matchesSelector(nodePeer, selector)) {
                                matched = true;
                                break;
                            } else {
                                dynamic parentPeer = nodePeer.parentNode;
                                if (exists parentPeer) {
                                    nodePeer = parentPeer;
                                } else {
                                    matched = false;
                                    break;
                                }
                            }
                        } else {
                            matched = false;
                            break;
                        }
                    }
                } else {
                    matched = true;
                }
                
                //
                if (matched) {
                    DomNode target = wrap(eventPeer.target);
                    DomEvent event = DomEvent(target, eventPeer);
                    handler(event);
                }
            }
        }
        dynamic {
            peer.addEventListener(type, f, false);
        }
    }
    
    // Properly simulate click
    // See http://stackoverflow.com/questions/6157929/how-to-simulate-mouse-click-using-javascript
    shared void click() {
        dynamic {
            dynamic event = peer.ownerDocument.createEvent("MouseEvents");
            event.initMouseEvent(
                "click",
                true,
                true,
                peer.ownerDocument.defaultView,
                1,
                0,
                0,
                0,
                0,
                false,
                false,
                false,
                false,
                0,
                null                
            );
            peer.dispatchEvent(event);
        }
    }
    
    shared void dispatchEvent(String type) {
        dynamic {
            dynamic event = Event(type, true, true);
            peer.dispatchEvent(event);
        }
    }
    
    shared void detach() {
        dynamic {
            dynamic old = peer;
            peer = peer.parentNode.removeChild(peer);
            old.peer = null;
            peer.ref = this;
        }
    }
}
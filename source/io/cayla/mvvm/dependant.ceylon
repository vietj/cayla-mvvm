import ceylon.collection { HashSet, LinkedList }

class Frame() {
    shared HashSet<Observable<Object>> observables = HashSet<Observable<Object>>();
}

object dependant {
    
    value stack = LinkedList<Frame>();
    
    shared void begin() {
        stack.add(Frame());
    }

    shared void report(Observable<Object> observable) {
        if (exists last = stack.last) {
            last.observables.add(observable);
        }
    }
    
    shared Set<Observable<Object>> end() {
        assert(exists ret = stack.removeLast());
        return ret.observables;
    }
    
}
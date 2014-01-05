import ceylon.collection { LinkedList }
class Subscribers<Value>() given Value satisfies Object {
    
    value subscribers = LinkedList<Anything(Value)>();
    
    shared void notify(Value source) {
        if (!subscribers.empty) {
            log.debug("Subscribers ``this``: start notifying changes");
            for (subscriber in subscribers) {
                log.debug("Subscribers ``this``: nofifying subscriber ``subscriber``");
                subscriber(source);
            }
            log.debug("Subscribers ``this``: end notifying changes");
        } else {
            log.debug("Subscribers ``this``: no subscribers to notify");
        }
    }
    
    shared Subscription subscribe(Anything(Value) subscriber) {
        subscribers.add(subscriber);
        object subscription satisfies Subscription {
            shared actual void dispose() {
                subscribers.removeElement(subscriber);
            }
        }
        return subscription;
    }
    
}
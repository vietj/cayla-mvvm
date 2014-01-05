shared class Property<Value>(variable Value val)
        satisfies Observable<Value> 
        given Value satisfies Object {
    
    value subscribers = Subscribers<Value>();
    shared actual Subscription subscribe(Anything(Value) subscriber) => subscribers.subscribe(subscriber);
    
    shared actual Value getValue() {
        dependant.report(this);
        return val;
    }
    
    shared void setValue(Value val) {
        this.val = val;
        subscribers.notify(val);
    }
}
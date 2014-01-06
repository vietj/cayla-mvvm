

"A property defines a read/write access to a value. A property is also an observable and can be watched for notification changes."
shared class Property<Value>(variable Value val)
        satisfies Observable<Value> 
        given Value satisfies Object {
    
    value subscribers = Subscribers<Value>();
    shared actual Subscription subscribe(Anything(Value) subscriber) => subscribers.subscribe(subscriber);
    
    shared actual Value getValue() {
        dependant.report(this);
        return val;
    }
    
    "Update the property value, this will cause subscribers to be notified after the value has been updated."
    shared void setValue(Value val) {
        this.val = val;
        subscribers.notify(val);
    }
}
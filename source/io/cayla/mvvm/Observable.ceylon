import io.cayla.mvvm.binding { Binding, Binder, BindingContext }

"""An observable value can be evaluated and watched for change notifications.
   """
shared interface Observable<out Value> given Value satisfies Object {
    
    "Returns the most recent value that can be observed. When dependency tracking is active, this method invocation creates
     an implicit dependency on this observable."
    shared formal Value getValue();
    
    "Allows a subscriber to be notified when the observed value changes over time."
    shared formal Subscription subscribe(Anything(Value) subscriber);
    
    "Binds a binder to this observable."
    shared Binding bind(Binder<Value> handler) {
        object impl extends Binding() {
            shared actual void init(BindingContext context) {
                Value v = getValue();
                handler.init(v, context);
            }
        }
        return impl;
    }
}
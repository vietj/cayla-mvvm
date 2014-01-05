import io.cayla.mvvm.view { Binding, BindingContext }
shared interface Observable<out Value> given Value satisfies Object {
    
    shared formal Value getValue();
    
    shared formal Subscription subscribe(Anything(Value) subscriber);
    
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
import io.cayla.mvvm.dom { DomNode }
import io.cayla.mvvm.view { BindingContext }
shared interface Binder<in Value> {
    
    shared formal void init(Value val, BindingContext context);
    
    shared formal void update(DomNode node, Value val);
    
}
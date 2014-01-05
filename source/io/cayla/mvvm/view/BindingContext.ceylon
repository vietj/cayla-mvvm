import io.cayla.mvvm.dom { DomNode }
shared interface BindingContext {
    
    shared formal Value? resolve<Value>() given Value satisfies Object;
    
    shared formal Element element;
    
    shared formal DomNode node;
    
    shared formal BindingContext child(Object child);
    
    shared formal void destroy();
    
    shared formal variable Boolean createChildren;
}

"The model context provides interaction with the model bound to a view"
shared interface ModelContext {
    
    "Resolve a value against this binding context, the value can either be the current object or be resolved in an ancestor context."
    shared formal Value? resolve<Value>() given Value satisfies Object;

    "Create a child context associated with the child model"
    shared formal ModelContext createChild(Object childModel);
    
    "Destroy this context"
    shared formal void destroy();
    
}
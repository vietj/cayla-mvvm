shared class ClassExpression<Type>() satisfies Expression<Type, Type> given Type satisfies Object {
    
    shared actual Type traverse(Type source) {
        return source;
    }
}

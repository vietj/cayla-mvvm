import ceylon.language.meta.model { Method }

shared Expression<Callable<Anything, Arguments>, Source> method<Source,Arguments>(Method<Source,Anything,Arguments> method)
        given Source satisfies Object
        given Arguments satisfies Anything[] {
    return ClassExpression<Source>().method(method);
}

shared class MethodExpression<out Container, Source, in Arguments>(
    Method<Container,Anything,Arguments> m,
    Expression<Container, Source> parent)
        satisfies Expression<Callable<Anything, Arguments>, Source>
        given Container satisfies Object
        given Source satisfies Object
        given Arguments satisfies Anything[] {
    
    shared actual Callable<Anything, Arguments> traverse(Source source) {
        Container t = parent.traverse(source);
        return m.bind(t);
    }
}

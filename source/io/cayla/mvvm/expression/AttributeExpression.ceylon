import ceylon.language.meta.model { Attribute }

shared Expression<Value,Source> attribute<Value,Source>(Attribute<Source,Value> attr)
        given Value satisfies Object
        given Source satisfies Object {
    return ClassExpression<Source>().attribute(attr);
}

shared class AttributeExpression<Value, Source>(Value(Source) f)
        satisfies Expression<Value, Source>
        given Value satisfies Object
        given Source satisfies Object {
    
    shared actual Value traverse(Source source) {
        return f(source);
    }
}

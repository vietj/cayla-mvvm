import ceylon.language.meta.model { Attribute, Method }
import io.cayla.mvvm.binding { Binding, Binder, BindingContext }

shared interface Expression<out Type, Source>
        given Type satisfies Object
        given Source satisfies Object {
    
    shared formal Type traverse(Source source);
    
    shared AttributeExpression<Value,Source> attribute<Value>(Attribute<Type,Value> attribute) given Value satisfies Object {
        Value f(Source source) {
            Type t = traverse(source);
            value binding = attribute.bind(t);
            Value p = binding.get();
            return p;
        }
        return AttributeExpression<Value,Source>(f);
    }
    
    shared MethodExpression<Type,Source,Arguments> method<Arguments>(Method<Type,Anything,Arguments> method) given Arguments satisfies Anything[] {
        return MethodExpression<Type,Source,Arguments>(method, this);
    }

    shared Binding bindTo(Binder<Type> handler) {
        object impl extends Binding() {
            shared actual void init(BindingContext context) {
                if (exists s = context.model.resolve<Source>()) {
                    Type f = traverse(s);
                    handler.init(f, context);
                }
            }
        }
        return impl;
    }
}

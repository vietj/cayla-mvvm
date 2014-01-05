(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-version":"1.0.0","$mod-deps":["ceylon.collection\/1.0.0","ceylon.test\/1.0.0","cayla.mvc\/1.0.0","ceylon.language\/1.0.0"],"cayla.mvc2":{"val":{"$tp":[{"$nm":"Model","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"},"$an":{"shared":[]},"$nm":"val","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"cayla.mvc","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"},"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"}}},"Binding":{"$tp":[{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$an":{"shared":[]},"$nm":"Binding","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"$pkg-shared":"1","css":{"$tp":[{"$nm":"Model","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"},"$an":{"shared":[]},"$nm":"css","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"className","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"cayla.mvc","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"}}},"testsuite":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"testsuite","$mt":"mthd"},"bindExpression":{"$tp":[{"$nm":"Model","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$pk":"cayla.mvc2"},"$an":{"shared":[]},"$nm":"bindExpression","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Model","$mt":"tpm"}],"$nm":"Expression","$md":"cayla.mvc","$pk":"cayla.mvc.expression"},"$nm":"expression","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"},"$nm":"handler","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$pk":"cayla.mvc2"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"checked":{"$tp":[{"$nm":"Model","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"},"$an":{"shared":[]},"$nm":"checked","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"cayla.mvc","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"}}},"run":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Run the module `cayla.mvc2`."]},"$nm":"run","$mt":"mthd"},"enter":{"$tp":[{"$nm":"Model","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$tp":[{"comp":"u","$ts":[{"$nm":"Model"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$nm":"Model","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Model"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$nm":"Model","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"},"$an":{"shared":[]},"$nm":"enter","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$tp":[{"comp":"u","$ts":[{"$nm":"Model"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$nm":"Model","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Model"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$nm":"Model","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$tp":[{"comp":"u","$ts":[{"$nm":"Model"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$nm":"Model","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Model"},{"$nm":"Nothing","$pk":"cayla.mvc2"}],"$mt":"tpm"},{"$nm":"Model","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"}}},"text":{"$tp":[{"$nm":"Model","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"},"$an":{"shared":[]},"$nm":"text","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Model","$mt":"tpm"}],"$nm":"BindingHandler","$pk":"cayla.mvc2"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"cayla.mvc","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"}}},"BindingHandler":{"$tp":[{"$nm":"Value","variance":"in"},{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$an":{"shared":[]},"$nm":"BindingHandler","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"},{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"}},"$mod-bin":"6.0","cayla.mvc2.view":{"Div":{"$tp":[{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Element","$pk":"cayla.mvc2.view"},"$an":{"shared":[]},"$nm":"Div","$ps":[{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"attr"},"content":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"$pkg-shared":"1","CheckBox":{"$tp":[{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Element","$pk":"cayla.mvc2.view"},"$an":{"shared":[]},"$nm":"CheckBox","$ps":[{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"attr"},"content":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Ul":{"$tp":[{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Element","$pk":"cayla.mvc2.view"},"$an":{"shared":[]},"$nm":"Ul","$ps":[{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"attr"},"content":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Element":{"$tp":[{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$pk":"cayla.mvc2.view"},"$an":{"shared":[],"abstract":[]},"$nm":"Element","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"attrs","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"},"content":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"attrs","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"}]],"$mt":"mthd"},"bind":{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"bind","$ps":[[{"$t":{"$nm":"Model"},"$nm":"model","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"TextField":{"$tp":[{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Element","$pk":"cayla.mvc2.view"},"$an":{"shared":[]},"$nm":"TextField","$ps":[{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"attr"},"content":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Li":{"$tp":[{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Element","$pk":"cayla.mvc2.view"},"$an":{"shared":[]},"$nm":"Li","$ps":[{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc2"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"bindings","$mt":"attr"},"content":{"$t":{"$tp":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"View","$mt":"tpm","$pk":"cayla.mvc2.view"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"View":{"$tp":[{"$nm":"Model","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"View","of":[{"$tp":[{"$nm":"Model","$mt":"tpm"}],"$nm":"Element","$pk":"cayla.mvc2.view"},{"$tp":[{"$nm":"Model","$mt":"tpm"},{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Flow","$pk":"cayla.mvc2.view"}],"$mt":"cls","abstract":"1"},"ForEach":{"$tp":[{"$nm":"Parent","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Child","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$tp":[{"$nm":"Parent","$mt":"tpm"},{"$nm":"Child","$mt":"tpm"}],"$nm":"Flow","$pk":"cayla.mvc2.view"},"$an":{"shared":[]},"$nm":"ForEach","$ps":[{"$t":{"$tp":[{"$tp":[{"$tp":[{"$nm":"Child","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Parent","$mt":"tpm"}],"$nm":"Expression","$md":"cayla.mvc","$pk":"cayla.mvc.expression"},"$nm":"observable","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm"}],"$nm":"Element","$pk":"cayla.mvc2.view"},"$nm":"view","$mt":"prm"}],"$at":{"view":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm"}],"$nm":"Element","$pk":"cayla.mvc2.view"},"$nm":"view","$mt":"attr"},"values":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"values","$mt":"attr"},"observable":{"$t":{"$tp":[{"$tp":[{"$tp":[{"$nm":"Child","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Parent","$mt":"tpm"}],"$nm":"Expression","$md":"cayla.mvc","$pk":"cayla.mvc.expression"},"$nm":"observable","$mt":"attr"},"contexts":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc.dom"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"contexts","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"Parent"},"$nm":"parent","$mt":"prm"},{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"parentNode","$mt":"prm"}]],"$mt":"mthd"},"notify":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"notify","$ps":[[{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"}],[{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"list","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"Flow":{"$tp":[{"$nm":"Parent","variance":"in","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Child","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$tp":[{"$nm":"Parent","$mt":"tpm"}],"$nm":"View","$pk":"cayla.mvc2.view"},"$an":{"shared":[],"abstract":[]},"$nm":"Flow","$ps":[{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm"}],"$nm":"View","$pk":"cayla.mvc2.view"},"$nm":"view","$mt":"prm"}],"$at":{"view":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm"}],"$nm":"View","$pk":"cayla.mvc2.view"},"$nm":"view","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"Parent"},"$nm":"parent","$mt":"prm"},{"$t":{"$nm":"DomNode","$md":"cayla.mvc","$pk":"cayla.mvc.dom"},"$nm":"parentNode","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"}},"$mod-name":"cayla.mvc2","cayla.mvc2.test":{"$pkg-shared":"1","Group":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Group","$ps":[{"$def":"1","$t":{"$tp":[{"$nm":"User","$mt":"tpm","$pk":"cayla.mvc2.test"}],"$nm":"ObservableList","$md":"cayla.mvc","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"users","$mt":"prm"}],"$at":{"users":{"$t":{"$tp":[{"$nm":"User","$mt":"tpm","$pk":"cayla.mvc2.test"}],"$nm":"ObservableList","$md":"cayla.mvc","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"users","$mt":"attr"}},"$mt":"cls"},"User":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"User","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name_","$mt":"prm"},{"$def":"1","$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"male_","$mt":"prm"}],"$at":{"name":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"cayla.mvc","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"},"male":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"cayla.mvc","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"male","$mt":"attr"},"name_":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name_","$mt":"attr"},"male_":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"male_","$mt":"attr"}},"$mt":"cls"},"userNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"User","$mt":"tpm","$pk":"cayla.mvc2.test"}],"$nm":"AttributeExpression","$md":"cayla.mvc","$pk":"cayla.mvc.expression"},"$nm":"userNameExpr","$mt":"attr"},"testCss":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testCss","$mt":"mthd"},"testVal":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testVal","$mt":"mthd"},"maleExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"User","$mt":"tpm","$pk":"cayla.mvc2.test"}],"$nm":"AttributeExpression","$md":"cayla.mvc","$pk":"cayla.mvc.expression"},"$nm":"maleExpr","$mt":"attr"},"testText":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testText","$mt":"mthd"},"usersExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"User","$mt":"tpm","$pk":"cayla.mvc2.test"}],"$nm":"ObservableList","$mt":"tpm","$md":"cayla.mvc","$pk":"cayla.mvc"},{"$nm":"Group","$mt":"tpm","$pk":"cayla.mvc2.test"}],"$nm":"Expression","$md":"cayla.mvc","$pk":"cayla.mvc.expression"},"$nm":"usersExpr","$mt":"attr"},"testChecked":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testChecked","$mt":"mthd"},"testForEach":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testForEach","$mt":"mthd"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl134189=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl134189.$addmod$($$$cl134189,'ceylon.language/1.0.0');
exports.$pkg$ans$cayla$mvc2$view=function(){return[$$$cl134189.shared()];};

//ClassDef Div at elements.ceylon (3:0-7:0)
function Div$view(bindings$134190, content$134191, $$targs$$,$$div){
    $init$Div$view();
    if ($$div===undefined)$$div=new Div$view.$$;
    $$$cl134189.set_type_args($$div,$$targs$$);
    $$div.bindings$134190_=bindings$134190;
    $$div.content$134191_=content$134191;
    Element$view($$$cl134189.String("div",3),$$$cl134189.getEmpty(),$$div.bindings$134190,$$div.content$134191,{Model:$$div.$$targs$$.Model},$$div);
    return $$div;
}
Div$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view,a:{Model:'Model'}},$ps:[{$nm:'bindings',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}}],$tp:{Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Div']};};
exports.Div$view=Div$view;
function $init$Div$view(){
    if (Div$view.$$===undefined){
        $$$cl134189.initTypeProto(Div$view,'cayla.mvc2.view::Div',$init$Element$view());
        (function($$div){
            $$$cl134189.defineAttr($$div,'bindings$134190',function(){return this.bindings$134190_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:Div$view,d:['cayla.mvc2.view','Div','$at','bindings']};});
            $$$cl134189.defineAttr($$div,'content$134191',function(){return this.content$134191_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:Div$view,d:['cayla.mvc2.view','Div','$at','content']};});
        })(Div$view.$$.prototype);
    }
    return Div$view;
}
exports.$init$Div$view=$init$Div$view;
$init$Div$view();

//ClassDef TextField at elements.ceylon (9:0-13:0)
function TextField$view(bindings$134192, content$134193, $$targs$$,$$textField){
    $init$TextField$view();
    if ($$textField===undefined)$$textField=new TextField$view.$$;
    $$$cl134189.set_type_args($$textField,$$targs$$);
    $$textField.bindings$134192_=bindings$134192;
    $$textField.content$134193_=content$134193;
    Element$view($$$cl134189.String("input",5),[$$$cl134189.Entry($$$cl134189.String("type",4),$$$cl134189.String("text",4),{Item:{t:$$$cl134189.String},Key:{t:$$$cl134189.String}})].reifyCeylonType({Element:{t:$$$cl134189.Entry,a:{Item:{t:$$$cl134189.String},Key:{t:$$$cl134189.String}}},Absent:{t:$$$cl134189.Nothing}}),$$textField.bindings$134192,$$textField.content$134193,{Model:$$textField.$$targs$$.Model},$$textField);
    return $$textField;
}
TextField$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view,a:{Model:'Model'}},$ps:[{$nm:'bindings',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}}],$tp:{Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','TextField']};};
exports.TextField$view=TextField$view;
function $init$TextField$view(){
    if (TextField$view.$$===undefined){
        $$$cl134189.initTypeProto(TextField$view,'cayla.mvc2.view::TextField',$init$Element$view());
        (function($$textField){
            $$$cl134189.defineAttr($$textField,'bindings$134192',function(){return this.bindings$134192_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:TextField$view,d:['cayla.mvc2.view','TextField','$at','bindings']};});
            $$$cl134189.defineAttr($$textField,'content$134193',function(){return this.content$134193_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:TextField$view,d:['cayla.mvc2.view','TextField','$at','content']};});
        })(TextField$view.$$.prototype);
    }
    return TextField$view;
}
exports.$init$TextField$view=$init$TextField$view;
$init$TextField$view();

//ClassDef CheckBox at elements.ceylon (15:0-19:0)
function CheckBox$view(bindings$134194, content$134195, $$targs$$,$$checkBox){
    $init$CheckBox$view();
    if ($$checkBox===undefined)$$checkBox=new CheckBox$view.$$;
    $$$cl134189.set_type_args($$checkBox,$$targs$$);
    $$checkBox.bindings$134194_=bindings$134194;
    $$checkBox.content$134195_=content$134195;
    Element$view($$$cl134189.String("input",5),[$$$cl134189.Entry($$$cl134189.String("type",4),$$$cl134189.String("checkbox",8),{Item:{t:$$$cl134189.String},Key:{t:$$$cl134189.String}})].reifyCeylonType({Element:{t:$$$cl134189.Entry,a:{Item:{t:$$$cl134189.String},Key:{t:$$$cl134189.String}}},Absent:{t:$$$cl134189.Nothing}}),$$checkBox.bindings$134194,$$checkBox.content$134195,{Model:$$checkBox.$$targs$$.Model},$$checkBox);
    return $$checkBox;
}
CheckBox$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view,a:{Model:'Model'}},$ps:[{$nm:'bindings',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}}],$tp:{Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','CheckBox']};};
exports.CheckBox$view=CheckBox$view;
function $init$CheckBox$view(){
    if (CheckBox$view.$$===undefined){
        $$$cl134189.initTypeProto(CheckBox$view,'cayla.mvc2.view::CheckBox',$init$Element$view());
        (function($$checkBox){
            $$$cl134189.defineAttr($$checkBox,'bindings$134194',function(){return this.bindings$134194_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:CheckBox$view,d:['cayla.mvc2.view','CheckBox','$at','bindings']};});
            $$$cl134189.defineAttr($$checkBox,'content$134195',function(){return this.content$134195_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:CheckBox$view,d:['cayla.mvc2.view','CheckBox','$at','content']};});
        })(CheckBox$view.$$.prototype);
    }
    return CheckBox$view;
}
exports.$init$CheckBox$view=$init$CheckBox$view;
$init$CheckBox$view();

//ClassDef Ul at elements.ceylon (21:0-25:0)
function Ul$view(bindings$134196, content$134197, $$targs$$,$$ul){
    $init$Ul$view();
    if ($$ul===undefined)$$ul=new Ul$view.$$;
    $$$cl134189.set_type_args($$ul,$$targs$$);
    $$ul.bindings$134196_=bindings$134196;
    $$ul.content$134197_=content$134197;
    Element$view($$$cl134189.String("ul",2),$$$cl134189.getEmpty(),$$ul.bindings$134196,$$ul.content$134197,{Model:$$ul.$$targs$$.Model},$$ul);
    return $$ul;
}
Ul$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view,a:{Model:'Model'}},$ps:[{$nm:'bindings',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}}],$tp:{Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Ul']};};
exports.Ul$view=Ul$view;
function $init$Ul$view(){
    if (Ul$view.$$===undefined){
        $$$cl134189.initTypeProto(Ul$view,'cayla.mvc2.view::Ul',$init$Element$view());
        (function($$ul){
            $$$cl134189.defineAttr($$ul,'bindings$134196',function(){return this.bindings$134196_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:Ul$view,d:['cayla.mvc2.view','Ul','$at','bindings']};});
            $$$cl134189.defineAttr($$ul,'content$134197',function(){return this.content$134197_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:Ul$view,d:['cayla.mvc2.view','Ul','$at','content']};});
        })(Ul$view.$$.prototype);
    }
    return Ul$view;
}
exports.$init$Ul$view=$init$Ul$view;
$init$Ul$view();

//ClassDef Li at elements.ceylon (27:0-31:0)
function Li$view(bindings$134198, content$134199, $$targs$$,$$li){
    $init$Li$view();
    if ($$li===undefined)$$li=new Li$view.$$;
    $$$cl134189.set_type_args($$li,$$targs$$);
    $$li.bindings$134198_=bindings$134198;
    $$li.content$134199_=content$134199;
    Element$view($$$cl134189.String("li",2),$$$cl134189.getEmpty(),$$li.bindings$134198,$$li.content$134199,{Model:$$li.$$targs$$.Model},$$li);
    return $$li;
}
Li$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view,a:{Model:'Model'}},$ps:[{$nm:'bindings',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[];}}],$tp:{Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Li']};};
exports.Li$view=Li$view;
function $init$Li$view(){
    if (Li$view.$$===undefined){
        $$$cl134189.initTypeProto(Li$view,'cayla.mvc2.view::Li',$init$Element$view());
        (function($$li){
            $$$cl134189.defineAttr($$li,'bindings$134198',function(){return this.bindings$134198_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:Li$view,d:['cayla.mvc2.view','Li','$at','bindings']};});
            $$$cl134189.defineAttr($$li,'content$134199',function(){return this.content$134199_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:Li$view,d:['cayla.mvc2.view','Li','$at','content']};});
        })(Li$view.$$.prototype);
    }
    return Li$view;
}
exports.$init$Li$view=$init$Li$view;
$init$Li$view();

//ClassDef View at View.ceylon (1:0-4:0)
function View$view($$targs$$,$$view){
    $init$View$view();
    if ($$view===undefined)$$$cl134189.throwexc($$$cl134189.InvocationException$meta$model($$$cl134189.String("Cannot instantiate abstract class")),'?','?')
    $$$cl134189.set_type_args($$view,$$targs$$);
    return $$view;
}
View$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},$ps:[],$tp:{Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},of:[{t:Element$view,a:{Model:'Model'}},{t:Flow$view,a:{Parent:'Model',Child:{t:$$$cl134189.$Object}}}],$an:function(){return[$$$cl134189.shared(),$$$cl134189.abstract()];},d:['cayla.mvc2.view','View']};};
exports.View$view=View$view;
function $init$View$view(){
    if (View$view.$$===undefined){
        $$$cl134189.initTypeProto(View$view,'cayla.mvc2.view::View',$$$cl134189.Basic);
    }
    return View$view;
}
exports.$init$View$view=$init$View$view;
$init$View$view();
var $$$cm134200=require('cayla/mvc/1.0.0/cayla.mvc-1.0.0');
$$$cl134189.$addmod$($$$cm134200,'cayla.mvc/1.0.0');
var $$$cc134201=require('ceylon/collection/1.0.0/ceylon.collection-1.0.0');
$$$cl134189.$addmod$($$$cc134201,'ceylon.collection/1.0.0');

//ClassDef ForEach at ForEach.ceylon (7:0-49:0)
function ForEach$view(observable$134202, view$134203, $$targs$$,$$forEach){
    $init$ForEach$view();
    if ($$forEach===undefined)$$forEach=new ForEach$view.$$;
    $$$cl134189.set_type_args($$forEach,$$targs$$);
    $$forEach.observable$134202_=observable$134202;
    $$forEach.view$134203_=view$134203;
    Flow$view($$forEach.view$134203,{Parent:$$forEach.$$targs$$.Parent,Child:$$forEach.$$targs$$.Child},$$forEach);
    
    //AttributeDecl values at ForEach.ceylon (12:4-12:50)
    $$forEach.values$134204_=$$$cc134201.LinkedList(undefined,{Element:$$forEach.$$targs$$.Child});
    $$forEach.$prop$getValues$134204={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc134201.LinkedList,a:{Element:'Child'}},$cont:ForEach$view,d:['cayla.mvc2.view','ForEach','$at','values']};}};
    $$forEach.$prop$getValues$134204.get=function(){return values$134204};
    
    //AttributeDecl contexts at ForEach.ceylon (13:4-13:56)
    $$forEach.contexts$134205_=$$$cc134201.LinkedList(undefined,{Element:{t:$$$cm134200.DomNode$dom}});
    $$forEach.$prop$getContexts$134205={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc134201.LinkedList,a:{Element:{t:$$$cm134200.DomNode$dom}}},$cont:ForEach$view,d:['cayla.mvc2.view','ForEach','$at','contexts']};}};
    $$forEach.$prop$getContexts$134205.get=function(){return contexts$134205};
    return $$forEach;
}
ForEach$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Flow$view,a:{Parent:'Parent',Child:'Child'}},$ps:[{$nm:'observable',$mt:'prm',$t:{t:$$$cm134200.Expression$expression,a:{Type:{t:$$$cm134200.Observable,a:{Value:{t:$$$cl134189.List,a:{Element:'Child'}}}},Source:'Parent'}},$an:function(){return[];}},{$nm:'view',$mt:'prm',$t:{t:Element$view,a:{Model:'Child'}},$an:function(){return[];}}],$tp:{Parent:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]},Child:{'var':'out','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','ForEach']};};
exports.ForEach$view=ForEach$view;
function $init$ForEach$view(){
    if (ForEach$view.$$===undefined){
        $$$cl134189.initTypeProto(ForEach$view,'cayla.mvc2.view::ForEach',$init$Flow$view());
        (function($$forEach){
            
            //AttributeDecl values at ForEach.ceylon (12:4-12:50)
            $$$cl134189.defineAttr($$forEach,'values$134204',function(){return this.values$134204_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc134201.LinkedList,a:{Element:'Child'}},$cont:ForEach$view,d:['cayla.mvc2.view','ForEach','$at','values']};});
            
            //AttributeDecl contexts at ForEach.ceylon (13:4-13:56)
            $$$cl134189.defineAttr($$forEach,'contexts$134205',function(){return this.contexts$134205_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc134201.LinkedList,a:{Element:{t:$$$cm134200.DomNode$dom}}},$cont:ForEach$view,d:['cayla.mvc2.view','ForEach','$at','contexts']};});
            
            //MethodDef init at ForEach.ceylon (15:4-20:4)
            $$forEach.init=function init(parent$134206,parentNode$134207){
                var $$forEach=this;
                
                //AttributeDecl a at ForEach.ceylon (16:8-16:36)
                var a$134208=$$$cl134189.$JsCallable($$forEach.notify$134209(parentNode$134207),[{$nm:'p2',$mt:'prm',$t:{t:$$$cl134189.List,a:{Element:'Child'}}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cl134189.List,a:{Element:$$forEach.$$targs$$.Child}}]}});
                
                //AttributeDecl abc at ForEach.ceylon (17:8-17:65)
                var abc$134210=$$forEach.observable$134202.traverse(parent$134206);
                abc$134210.subscribe($$$cl134189.$JsCallable($$forEach.notify$134209(parentNode$134207),[{$nm:'p2',$mt:'prm',$t:{t:$$$cl134189.List,a:{Element:'Child'}}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cl134189.List,a:{Element:$$forEach.$$targs$$.Child}}]}}));
                a$134208(abc$134210.$get());
            };$$forEach.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'parent',$mt:'prm',$t:'Parent',$an:function(){return[];}},{$nm:'parentNode',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}}],$cont:ForEach$view,$an:function(){return[$$$cl134189.shared(),$$$cl134189.actual()];},d:['cayla.mvc2.view','ForEach','$m','init']};};
            
            //MethodDef notify at ForEach.ceylon (22:4-48:4)
            $$forEach.notify$134209=function notify$134209(node$134211){
                var $$forEach=this;
                return function(list$134212){
                    
                    //AttributeDecl index at ForEach.ceylon (23:8-23:34)
                    var index$134213=(0);
                    function setIndex$134213(index$134214){return index$134213=index$134214;};
                    
                    //AttributeDecl diff at ForEach.ceylon (24:8-24:42)
                    var diff$134215=$$$cm134200.Diff$lcs($$forEach.values$134204.sequence,list$134212,{E:$$forEach.$$targs$$.Child});
                    while(true){
                        
                        //AttributeDecl next at ForEach.ceylon (26:12-26:36)
                        var next$134216=diff$134215.next();
                        var next$134217;
                        if($$$cl134189.isOfType((next$134217=next$134216),{t:'T', l:[$$forEach.$$targs$$.Child,{t:$$$cm134200.Change$lcs}]})){
                            //Switch statement at ForEach.ceylon (28:16-43:16)
                            var case$134218=next$134217.$get((1));
                            if (case$134218===$$$cm134200.getRemoved$lcs()) {
                                $$forEach.values$134204.remove(index$134213);
                                //assert at ForEach.ceylon (31:20-31:74)
                                var removedContext$134219;
                                if (!((removedContext$134219=$$forEach.contexts$134205.remove(index$134213))!==null)) {throw $$$cl134189.wrapexc($$$cl134189.AssertionException("Assertion failed: \'exists removedContext = contexts.remove(index)\' at ForEach.ceylon (31:26-31:73)"),'31:20-31:74','ForEach.ceylon'); }
                                removedContext$134219.detach();
                            }else if (case$134218===$$$cm134200.getAdded$lcs()) {
                                
                                //AttributeDecl v at ForEach.ceylon (35:20-35:37)
                                var v$134220=next$134217.$get((0));
                                
                                //AttributeDecl childNode at ForEach.ceylon (36:20-36:52)
                                var childNode$134221=$$forEach.view$134203.$bind(v$134220);
                                node$134211.addChild(childNode$134221);
                                $$forEach.values$134204.add(v$134220);
                                $$forEach.contexts$134205.add(childNode$134221);
                            }else if (case$134218===$$$cm134200.getSame$lcs()) {
                                (oldindex$134222=index$134213,index$134213=oldindex$134222.successor,oldindex$134222);
                                var oldindex$134222;
                            }//End switch statement at ForEach.ceylon (28:16-43:16)
                        }else {
                            break;
                        }
                    }
                }
            };$$forEach.notify$134209.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}}],$cont:ForEach$view,d:['cayla.mvc2.view','ForEach','$m','notify']};};
            $$$cl134189.defineAttr($$forEach,'observable$134202',function(){return this.observable$134202_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.Expression$expression,a:{Type:{t:$$$cm134200.Observable,a:{Value:{t:$$$cl134189.List,a:{Element:'Child'}}}},Source:'Parent'}},$cont:ForEach$view,d:['cayla.mvc2.view','ForEach','$at','observable']};});
            $$$cl134189.defineAttr($$forEach,'view$134203',function(){return this.view$134203_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Element$view,a:{Model:'Child'}},$cont:ForEach$view,d:['cayla.mvc2.view','ForEach','$at','view']};});
        })(ForEach$view.$$.prototype);
    }
    return ForEach$view;
}
exports.$init$ForEach$view=$init$ForEach$view;
$init$ForEach$view();

//ClassDef Flow at Flow.ceylon (3:0-10:0)
function Flow$view(view$134223, $$targs$$,$$flow){
    $init$Flow$view();
    if ($$flow===undefined)$$$cl134189.throwexc($$$cl134189.InvocationException$meta$model($$$cl134189.String("Cannot instantiate abstract class")),'?','?')
    $$$cl134189.set_type_args($$flow,$$targs$$);
    $$flow.view$134223_=view$134223;
    View$view({Model:$$flow.$$targs$$.Parent},$$flow);
    return $$flow;
}
Flow$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:View$view,a:{Model:'Parent'}},$ps:[{$nm:'view',$mt:'prm',$t:{t:View$view,a:{Model:'Child'}},$an:function(){return[];}}],$tp:{Parent:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]},Child:{'var':'out','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared(),$$$cl134189.abstract()];},d:['cayla.mvc2.view','Flow']};};
exports.Flow$view=Flow$view;
function $init$Flow$view(){
    if (Flow$view.$$===undefined){
        $$$cl134189.initTypeProto(Flow$view,'cayla.mvc2.view::Flow',$init$View$view());
        (function($$flow){
            $$flow.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'parent',$mt:'prm',$t:'Parent',$an:function(){return[];}},{$nm:'parentNode',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}}],$cont:Flow$view,$an:function(){return[$$$cl134189.shared(),$$$cl134189.formal()];},d:['cayla.mvc2.view','Flow','$m','init']};}};$$$cl134189.defineAttr($$flow,'view$134223',function(){return this.view$134223_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:View$view,a:{Model:'Child'}},$cont:Flow$view,d:['cayla.mvc2.view','Flow','$at','view']};});
        })(Flow$view.$$.prototype);
    }
    return Flow$view;
}
exports.$init$Flow$view=$init$Flow$view;
$init$Flow$view();

//ClassDef Element at Element.ceylon (5:0-50:0)
function Element$view(name, attrs, bindings, content, $$targs$$,$$element){
    $init$Element$view();
    if ($$element===undefined)$$$cl134189.throwexc($$$cl134189.InvocationException$meta$model($$$cl134189.String("Cannot instantiate abstract class")),'?','?')
    $$$cl134189.set_type_args($$element,$$targs$$);
    $$element.name_=name;
    $$element.attrs_=attrs;
    $$element.bindings_=bindings;
    $$element.content_=content;
    View$view({Model:$$element.$$targs$$.Model},$$element);
    return $$element;
}
Element$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:View$view,a:{Model:'Model'}},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl134189.String},$an:function(){return[$$$cl134189.shared()];}},{$nm:'attrs',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:$$$cl134189.Entry,a:{Item:{t:$$$cl134189.String},Key:{t:$$$cl134189.String}}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[$$$cl134189.shared()];}},{$nm:'bindings',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[$$$cl134189.shared()];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$an:function(){return[$$$cl134189.shared()];}}],$tp:{Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared(),$$$cl134189.abstract()];},d:['cayla.mvc2.view','Element']};};
exports.Element$view=Element$view;
function $init$Element$view(){
    if (Element$view.$$===undefined){
        $$$cl134189.initTypeProto(Element$view,'cayla.mvc2.view::Element',$init$View$view());
        (function($$element){
            
            //MethodDef bind at Element.ceylon (13:4-15:4)
            $$element.$bind=function $bind(model$134224){
                var $$element=this;
                return $$element.init(model$134224);
            };$$element.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.DomNode$dom},$ps:[{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}}],$cont:Element$view,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Element','$m','bind']};};
            
            //MethodDef init at Element.ceylon (17:4-48:4)
            $$element.init=function init(model$134225){
                var $$element=this;
                
                //AttributeDecl node at Element.ceylon (19:8-19:36)
                var node$134226=$$$cm134200.element$dom($$element.name);
                //'for' statement at Element.ceylon (21:9-23:9)
                var it$134227 = $$element.attrs.iterator();
                var attr$134228;while ((attr$134228=it$134227.next())!==$$$cl134189.getFinished()){
                    node$134226.setAttribute(attr$134228.key,attr$134228.item);
                }
                //'for' statement at Element.ceylon (31:8-33:8)
                var it$134229 = $$element.bindings.iterator();
                var binding$134230;while ((binding$134230=it$134229.next())!==$$$cl134189.getFinished()){
                    binding$134230.init(node$134226,model$134225);
                }
                //'for' statement at Element.ceylon (36:8-45:8)
                var it$134231 = $$element.content.iterator();
                var c$134232;while ((c$134232=it$134231.next())!==$$$cl134189.getFinished()){
                    //Switch statement at Element.ceylon (37:12-44:12)
                    var case$134233=c$134232;
                    if ($$$cl134189.isOfType(c$134232,{t:Element$view,a:{Model:$$element.$$targs$$.Model}})) {
                        
                        //AttributeDecl child at Element.ceylon (39:16-39:45)
                        var child$134234=case$134233.init(model$134225);
                        node$134226.addChild(child$134234);
                    }else if ($$$cl134189.isOfType(c$134232,{t:Flow$view,a:{Parent:$$element.$$targs$$.Model,Child:{t:$$$cl134189.$Object}}})) {
                        case$134233.init(model$134225,node$134226);
                    }//End switch statement at Element.ceylon (37:12-44:12)
                }
                return node$134226;
            };$$element.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.DomNode$dom},$ps:[{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}}],$cont:Element$view,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Element','$m','init']};};
            $$$cl134189.defineAttr($$element,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.String},$cont:Element$view,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Element','$at','name']};});
            $$$cl134189.defineAttr($$element,'attrs',function(){return this.attrs_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:$$$cl134189.Entry,a:{Item:{t:$$$cl134189.String},Key:{t:$$$cl134189.String}}},Absent:{t:$$$cl134189.Null}}},$cont:Element$view,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Element','$at','attrs']};});
            $$$cl134189.defineAttr($$element,'bindings',function(){return this.bindings_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:Binding,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:Element$view,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Element','$at','bindings']};});
            $$$cl134189.defineAttr($$element,'content',function(){return this.content_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Iterable,a:{Element:{t:View$view,a:{Model:'Model'}},Absent:{t:$$$cl134189.Null}}},$cont:Element$view,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.view','Element','$at','content']};});
        })(Element$view.$$.prototype);
    }
    return Element$view;
}
exports.$init$Element$view=$init$Element$view;
$init$Element$view();
var $$$ct134235=require('ceylon/test/1.0.0/ceylon.test-1.0.0');
$$$cl134189.$addmod$($$$ct134235,'ceylon.test/1.0.0');

//MethodDef testsuite at testsuite.ceylon (3:0-6:0)
function testsuite(){
    
    //AttributeDecl runner at testsuite.ceylon (4:4-4:91)
    var runner$134236=$$$ct134235.createTestRunner($$$cl134189.Tuple($$$cl134189.getModules$meta().find('cayla.mvc2','1.0.0').findPackage('cayla.mvc2.test'),$$$cl134189.getEmpty(),{Rest:{t:$$$cl134189.Empty},Element:{t:$$$cl134189.Package$meta$declaration},First:{t:$$$cl134189.Package$meta$declaration}}),$$$cl134189.Tuple($$$ct134235.SimpleLoggingListener(),$$$cl134189.getEmpty(),{Rest:{t:$$$cl134189.Empty},Element:{t:$$$ct134235.SimpleLoggingListener},First:{t:$$$ct134235.SimpleLoggingListener}}));
    runner$134236.run();
}
exports.testsuite=testsuite;
testsuite.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[],$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','testsuite']};};

//ClassDef User at testHandlers.ceylon (9:0-12:0)
function User$test(name_, male_, $$user){
    $init$User$test();
    if ($$user===undefined)$$user=new User$test.$$;
    $$user.name__=name_;
    if(male_===undefined){male_=true;}
    $$user.male__=male_;
    
    //AttributeDecl name at testHandlers.ceylon (10:4-10:58)
    $$user.name$134237_=$$$cm134200.property($$user.name_,{Value:{t:$$$cl134189.String}});
    $$user.$prop$getName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},$cont:User$test,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.test','User','$at','name']};}};
    $$user.$prop$getName.get=function(){return name};
    
    //AttributeDecl male at testHandlers.ceylon (11:4-11:60)
    $$user.male$134238_=$$$cm134200.property($$user.male_,{Value:{t:$$$cl134189.$Boolean}});
    $$user.$prop$getMale={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},$cont:User$test,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.test','User','$at','male']};}};
    $$user.$prop$getMale.get=function(){return male};
    return $$user;
}
User$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},$ps:[{$nm:'name_',$mt:'prm',$t:{t:$$$cl134189.String},$an:function(){return[$$$cl134189.shared()];}},{$nm:'male_',$mt:'prm',$def:1,$t:{t:$$$cl134189.$Boolean},$an:function(){return[$$$cl134189.shared()];}}],d:['cayla.mvc2.test','User']};};
function $init$User$test(){
    if (User$test.$$===undefined){
        $$$cl134189.initTypeProto(User$test,'cayla.mvc2.test::User',$$$cl134189.Basic);
        (function($$user){
            
            //AttributeDecl name at testHandlers.ceylon (10:4-10:58)
            $$$cl134189.defineAttr($$user,'name',function(){return this.name$134237_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},$cont:User$test,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.test','User','$at','name']};});
            
            //AttributeDecl male at testHandlers.ceylon (11:4-11:60)
            $$$cl134189.defineAttr($$user,'male',function(){return this.male$134238_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},$cont:User$test,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.test','User','$at','male']};});
            $$$cl134189.defineAttr($$user,'name_',function(){return this.name__;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.String},$cont:User$test,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.test','User','$at','name_']};});
            $$$cl134189.defineAttr($$user,'male_',function(){return this.male__;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.$Boolean},$cont:User$test,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.test','User','$at','male_']};});
        })(User$test.$$.prototype);
    }
    return User$test;
}
exports.$init$User$test=$init$User$test;
$init$User$test();

//ClassDef Group at testHandlers.ceylon (14:0-15:0)
function Group$test(users, $$group){
    $init$Group$test();
    if ($$group===undefined)$$group=new Group$test.$$;
    if(users===undefined){users=$$$cm134200.ObservableList({Value:{t:User$test}});}
    $$group.users_=users;
    return $$group;
}
Group$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},$ps:[{$nm:'users',$mt:'prm',$def:1,$t:{t:$$$cm134200.ObservableList,a:{Value:{t:User$test}}},$an:function(){return[$$$cl134189.shared()];}}],d:['cayla.mvc2.test','Group']};};
function $init$Group$test(){
    if (Group$test.$$===undefined){
        $$$cl134189.initTypeProto(Group$test,'cayla.mvc2.test::Group',$$$cl134189.Basic);
        (function($$group){
            $$$cl134189.defineAttr($$group,'users',function(){return this.users_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.ObservableList,a:{Value:{t:User$test}}},$cont:Group$test,$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2.test','Group','$at','users']};});
        })(Group$test.$$.prototype);
    }
    return Group$test;
}
exports.$init$Group$test=$init$Group$test;
$init$Group$test();

//AttributeDecl userNameExpr at testHandlers.ceylon (17:0-17:103)
var userNameExpr$134239$test;function $valinit$userNameExpr$134239$test(){if (userNameExpr$134239$test===undefined)userNameExpr$134239$test=$$$cm134200.ClassExpression$expression({Type:{t:User$test}}).property($$$cl134189.$init$AppliedAttribute$meta$model()('name',User$test.$$.prototype.$prop$getName,{Container:{t:User$test},Set:{t:$$$cl134189.Nothing},Get:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}}}),{Value:{t:$$$cl134189.String}});return userNameExpr$134239$test;};$valinit$userNameExpr$134239$test();
function getUserNameExpr$test(){return $valinit$userNameExpr$134239$test();}
exports.getUserNameExpr$test=getUserNameExpr$test;
var $prop$getUserNameExpr$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.AttributeExpression$expression,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Source:{t:User$test}}},d:['cayla.mvc2.test','userNameExpr']};}};
exports.$prop$getUserNameExpr$test=$prop$getUserNameExpr$test;
$prop$getUserNameExpr$test.get=getUserNameExpr$test;
getUserNameExpr$test.$$metamodel$$=$prop$getUserNameExpr$test.$$metamodel$$;

//AttributeDecl maleExpr at testHandlers.ceylon (18:0-18:100)
var maleExpr$134240$test;function $valinit$maleExpr$134240$test(){if (maleExpr$134240$test===undefined)maleExpr$134240$test=$$$cm134200.ClassExpression$expression({Type:{t:User$test}}).property($$$cl134189.$init$AppliedAttribute$meta$model()('male',User$test.$$.prototype.$prop$getMale,{Container:{t:User$test},Set:{t:$$$cl134189.Nothing},Get:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}}}),{Value:{t:$$$cl134189.$Boolean}});return maleExpr$134240$test;};$valinit$maleExpr$134240$test();
function getMaleExpr$test(){return $valinit$maleExpr$134240$test();}
exports.getMaleExpr$test=getMaleExpr$test;
var $prop$getMaleExpr$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.AttributeExpression$expression,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Source:{t:User$test}}},d:['cayla.mvc2.test','maleExpr']};}};
exports.$prop$getMaleExpr$test=$prop$getMaleExpr$test;
$prop$getMaleExpr$test.get=getMaleExpr$test;
getMaleExpr$test.$$metamodel$$=$prop$getMaleExpr$test.$$metamodel$$;

//AttributeDecl usersExpr at testHandlers.ceylon (19:0-19:100)
var usersExpr$134241$test;function $valinit$usersExpr$134241$test(){if (usersExpr$134241$test===undefined)usersExpr$134241$test=$$$cm134200.ClassExpression$expression({Type:{t:Group$test}}).attribute($$$cl134189.$init$AppliedAttribute$meta$model()('users',Group$test.$$.prototype.$prop$getUsers,{Container:{t:Group$test},Set:{t:$$$cl134189.Nothing},Get:{t:$$$cm134200.ObservableList,a:{Value:{t:User$test}}}}),{Value:{t:$$$cm134200.ObservableList,a:{Value:{t:User$test}}}});return usersExpr$134241$test;};$valinit$usersExpr$134241$test();
function getUsersExpr$test(){return $valinit$usersExpr$134241$test();}
var $prop$getUsersExpr$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cm134200.Expression$expression,a:{Type:{t:$$$cm134200.ObservableList,a:{Value:{t:User$test}}},Source:{t:Group$test}}},d:['cayla.mvc2.test','usersExpr']};}};
exports.$prop$getUsersExpr$test=$prop$getUsersExpr$test;
$prop$getUsersExpr$test.get=function(){return usersExpr$134241$test};

//MethodDef testText at testHandlers.ceylon (21:0-37:0)
function testText$test(){
    $$$cm134200.withFragment$test($$$cl134189.$JsCallable((function (fragment$134242){
        
        //AttributeDecl element at testHandlers.ceylon (23:8-25:9)
        var element$134243=(bindings$134244=[bindExpression(getUserNameExpr$test(),text({Model:{t:User$test}}),{Model:{t:User$test},Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}}})].reifyCeylonType({Element:{t:Binding,a:{Model:{t:User$test}}},Absent:{t:$$$cl134189.Nothing}}),Div$view(bindings$134244,$$$cl134189.getEmpty(),{Model:{t:User$test}}));
        var bindings$134244;
        
        //AttributeDecl user at testHandlers.ceylon (26:8-26:34)
        var user$134245=User$test($$$cl134189.String("julien",6));
        
        //AttributeDecl node at testHandlers.ceylon (27:8-27:41)
        var node$134246=element$134243.$bind(user$134245);
        
        //AttributeDecl added at testHandlers.ceylon (28:8-28:47)
        var added$134247=fragment$134242.addChild(node$134246);
        $$$ct134235.assertEquals((1),added$134247.getChildren().size);
        //assert at testHandlers.ceylon (30:8-30:56)
        var first$134248;
        if (!((first$134248=added$134247.getChildren().first)!==null)) {throw $$$cl134189.wrapexc($$$cl134189.AssertionException("Assertion failed: \'exists first = added.getChildren().first\' at testHandlers.ceylon (30:14-30:55)"),'30:8-30:56','testHandlers.ceylon'); }
        $$$ct134235.assertEquals($$$cl134189.String("julien",6),first$134248.getNodeValue());
        user$134245.name.set($$$cl134189.String("whatever",8));
        $$$ct134235.assertEquals((1),added$134247.getChildren().size);
        //assert at testHandlers.ceylon (34:8-34:57)
        var second$134249;
        if (!((second$134249=added$134247.getChildren().first)!==null)) {throw $$$cl134189.wrapexc($$$cl134189.AssertionException("Assertion failed: \'exists second = added.getChildren().first\' at testHandlers.ceylon (34:14-34:56)"),'34:8-34:57','testHandlers.ceylon'); }
        $$$ct134235.assertEquals($$$cl134189.String("whatever",8),second$134249.getNodeValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cm134200.DomNode$dom}]}}));
}
exports.testText$test=testText$test;
testText$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[],$an:function(){return[$$$cl134189.shared(),$$$ct134235.test()];},d:['cayla.mvc2.test','testText']};};

//MethodDef testVal at testHandlers.ceylon (39:0-51:0)
function testVal$test(){
    $$$cm134200.withFragment$test($$$cl134189.$JsCallable((function (fragment$134250){
        
        //AttributeDecl element at testHandlers.ceylon (41:8-43:9)
        var element$134251=(bindings$134252=[bindExpression(getUserNameExpr$test(),val({Model:{t:User$test}}),{Model:{t:User$test},Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}}})].reifyCeylonType({Element:{t:Binding,a:{Model:{t:User$test}}},Absent:{t:$$$cl134189.Nothing}}),TextField$view(bindings$134252,$$$cl134189.getEmpty(),{Model:{t:User$test}}));
        var bindings$134252;
        
        //AttributeDecl user at testHandlers.ceylon (44:8-44:34)
        var user$134253=User$test($$$cl134189.String("julien",6));
        
        //AttributeDecl node at testHandlers.ceylon (45:8-45:41)
        var node$134254=element$134251.$bind(user$134253);
        
        //AttributeDecl added at testHandlers.ceylon (46:8-46:47)
        var added$134255=fragment$134250.addChild(node$134254);
        $$$ct134235.assertEquals($$$cl134189.String("julien",6),added$134255.getValue());
        user$134253.name.set($$$cl134189.String("whatever",8));
        $$$ct134235.assertEquals($$$cl134189.String("whatever",8),added$134255.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cm134200.DomNode$dom}]}}));
}
exports.testVal$test=testVal$test;
testVal$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[],$an:function(){return[$$$cl134189.shared(),$$$ct134235.test()];},d:['cayla.mvc2.test','testVal']};};

//MethodDef testCss at testHandlers.ceylon (53:0-64:0)
function testCss$test(){
    $$$cm134200.withFragment$test($$$cl134189.$JsCallable((function (fragment$134256){
        
        //AttributeDecl element at testHandlers.ceylon (55:8-57:9)
        var element$134257=(bindings$134258=[bindExpression(getMaleExpr$test(),css($$$cl134189.String("foo",3),{Model:{t:User$test}}),{Model:{t:User$test},Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}}})].reifyCeylonType({Element:{t:Binding,a:{Model:{t:User$test}}},Absent:{t:$$$cl134189.Nothing}}),Div$view(bindings$134258,$$$cl134189.getEmpty(),{Model:{t:User$test}}));
        var bindings$134258;
        
        //AttributeDecl julien at testHandlers.ceylon (58:8-58:42)
        var julien$134259=User$test($$$cl134189.String("julien",6),true);
        
        //AttributeDecl node at testHandlers.ceylon (59:8-59:43)
        var node$134260=element$134257.$bind(julien$134259);
        $$$ct134235.assertTrue(node$134260.hasClass($$$cl134189.String("foo",3)));
        julien$134259.male.set(false);
        $$$ct134235.assertFalse(node$134260.hasClass($$$cl134189.String("foo",3)));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cm134200.DomNode$dom}]}}));
}
exports.testCss$test=testCss$test;
testCss$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[],$an:function(){return[$$$cl134189.shared(),$$$ct134235.test()];},d:['cayla.mvc2.test','testCss']};};

//MethodDef testChecked at testHandlers.ceylon (66:0-77:0)
function testChecked$test(){
    $$$cm134200.withFragment$test($$$cl134189.$JsCallable((function (fragment$134261){
        
        //AttributeDecl element at testHandlers.ceylon (68:8-70:9)
        var element$134262=(bindings$134263=[bindExpression(getMaleExpr$test(),checked({Model:{t:User$test}}),{Model:{t:User$test},Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}}})].reifyCeylonType({Element:{t:Binding,a:{Model:{t:User$test}}},Absent:{t:$$$cl134189.Nothing}}),CheckBox$view(bindings$134263,$$$cl134189.getEmpty(),{Model:{t:User$test}}));
        var bindings$134263;
        
        //AttributeDecl julien at testHandlers.ceylon (71:8-71:42)
        var julien$134264=User$test($$$cl134189.String("julien",6),true);
        
        //AttributeDecl node at testHandlers.ceylon (72:8-72:43)
        var node$134265=element$134262.$bind(julien$134264);
        $$$ct134235.assertEquals(true,node$134265.isChecked());
        julien$134264.male.set(false);
        $$$ct134235.assertEquals(false,node$134265.isChecked());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cm134200.DomNode$dom}]}}));
}
exports.testChecked$test=testChecked$test;
testChecked$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[],$an:function(){return[$$$cl134189.shared(),$$$ct134235.test()];},d:['cayla.mvc2.test','testChecked']};};

//MethodDef testForEach at testFlows.ceylon (7:0-42:0)
function testForEach$test(){
    $$$cm134200.withFragment$test($$$cl134189.$JsCallable((function (fragment$134266){
        
        //AttributeDecl group at testFlows.ceylon (9:8-9:29)
        var group$134267=Group$test();
        
        //AttributeDecl foo at testFlows.ceylon (10:8-10:30)
        var foo$134268=User$test($$$cl134189.String("foo",3));
        group$134267.users.add(foo$134268);
        
        //AttributeDecl bar at testFlows.ceylon (12:8-12:30)
        var bar$134269=User$test($$$cl134189.String("bar",3));
        group$134267.users.add(bar$134269);
        
        //AttributeDecl element at testFlows.ceylon (14:8-25:9)
        var element$134270=(bindings$134271=$$$cl134189.getEmpty(),content$134272=[(observable$134273=getUsersExpr$test(),view$134274=(bindings$134275=$$$cl134189.getEmpty(),content$134276=[(bindings$134277=[bindExpression(getUserNameExpr$test(),val({Model:{t:User$test}}),{Model:{t:User$test},Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}}})].reifyCeylonType({Element:{t:Binding,a:{Model:{t:User$test}}},Absent:{t:$$$cl134189.Nothing}}),TextField$view(bindings$134277,$$$cl134189.getEmpty(),{Model:{t:User$test}}))].reifyCeylonType({Element:{t:TextField$view,a:{Model:{t:User$test}}},Absent:{t:$$$cl134189.Null}}),Li$view(bindings$134275,content$134276,{Model:{t:User$test}})),ForEach$view(observable$134273,view$134274,{Parent:{t:Group$test},Child:{t:User$test}}))].reifyCeylonType({Element:{t:ForEach$view,a:{Parent:{t:Group$test},Child:{t:User$test}}},Absent:{t:$$$cl134189.Null}}),Ul$view(bindings$134271,content$134272,{Model:{t:Group$test}}));
        var bindings$134271,content$134272,observable$134273,view$134274,bindings$134275,content$134276,bindings$134277;
        
        //AttributeDecl node at testFlows.ceylon (26:8-26:42)
        var node$134278=element$134270.$bind(group$134267);
        
        //AttributeDecl added at testFlows.ceylon (27:8-27:47)
        var added$134279=fragment$134266.addChild(node$134278);
        //assert at testFlows.ceylon (28:8-28:56)
        var fooLi$134280;
        if (!((fooLi$134280=added$134279.getChildren().first)!==null)) {throw $$$cl134189.wrapexc($$$cl134189.AssertionException("Assertion failed: \'exists fooLi = added.getChildren().first\' at testFlows.ceylon (28:14-28:55)"),'28:8-28:56','testFlows.ceylon'); }
        $$$ct134235.assertEquals((1),fooLi$134280.getChildren().size);
        //assert at testFlows.ceylon (30:8-30:59)
        var fooInput$134281;
        if (!((fooInput$134281=fooLi$134280.getChildren().first)!==null)) {throw $$$cl134189.wrapexc($$$cl134189.AssertionException("Assertion failed: \'exists fooInput = fooLi.getChildren().first\' at testFlows.ceylon (30:14-30:58)"),'30:8-30:59','testFlows.ceylon'); }
        fooInput$134281.setValue($$$cl134189.String("foo_changed",11));
        fooInput$134281.dispatchEvent($$$cl134189.String("keyup",5));
        $$$ct134235.assertEquals($$$cl134189.String("foo_changed",11),foo$134268.name.$get());
        
        //AttributeDecl juu at testFlows.ceylon (34:8-34:30)
        var juu$134282=User$test($$$cl134189.String("juu",3));
        group$134267.users.add(juu$134282);
        $$$ct134235.assertEquals((3),added$134279.getChildren().size);
        group$134267.users.remove(bar$134269);
        $$$ct134235.assertEquals((2),added$134279.getChildren().size);
        group$134267.users.clear();
        $$$ct134235.assertEquals((0),added$134279.getChildren().size);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cm134200.DomNode$dom}]}}));
}
exports.testForEach$test=testForEach$test;
testForEach$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[],$an:function(){return[$$$cl134189.shared(),$$$ct134235.test()];},d:['cayla.mvc2.test','testForEach']};};
exports.$pkg$ans$cayla$mvc2$test=function(){return[$$$cl134189.shared()];};

//MethodDef run at run.ceylon (1:0-4:0)
function run(){
}
exports.run=run;
run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[],$an:function(){return[$$$cl134189.doc($$$cl134189.String("Run the module `cayla.mvc2`.",28)),$$$cl134189.shared()];},d:['cayla.mvc2','run']};};
exports.$pkg$ans$cayla$mvc2=function(){return[$$$cl134189.shared()];};
exports.$mod$ans$=[];
exports.$mod$imps=function(){return{
'ceylon.collection/1.0.0':[],
'ceylon.test/1.0.0':[],
'cayla.mvc/1.0.0':function(){return[$$$cl134189.shared()];}
};};

//MethodDef checked at bindingHandlers.ceylon (4:0-21:0)
function checked($$$mptypes){
    
    //ObjectDef impl at bindingHandlers.ceylon (5:4-19:4)
    function impl$134283($$targs$$){
        var $$impl$134283=new impl$134283.$$;
        $$impl$134283.$$targs$$=$$targs$$;
        BindingHandler({Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Model:$$$mptypes.Model},$$impl$134283);
        $$$cl134189.add_type_arg($$impl$134283,'Value',{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}});
        return $$impl$134283;
    };impl$134283.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},satisfies:[{t:BindingHandler,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Model:'Model'}}],d:['cayla.mvc2','checked','$o','impl']};};
    function $init$impl$134283(){
        if (impl$134283.$$===undefined){
            $$$cl134189.initTypeProto(impl$134283,'cayla.mvc2::checked.impl',$$$cl134189.Basic,$init$BindingHandler());
            (function($$impl$134283){
                
                //MethodDef init at bindingHandlers.ceylon (6:8-18:8)
                $$impl$134283.init=function init(node$134284,model$134285,val$134286){
                    var $$impl$134283=this;
                    
                    //MethodDef f at bindingHandlers.ceylon (7:12-12:12)
                    function f$134287(event$134288){
                        
                        //AttributeDecl target at bindingHandlers.ceylon (8:16-8:43)
                        var target$134289=event$134288.target;
                        
                        //AttributeDecl checked at bindingHandlers.ceylon (9:16-9:50)
                        var checked$134290=target$134289.isChecked();
                        //assert at bindingHandlers.ceylon (10:16-10:39)
                        var checked$134291;
                        if (!((checked$134291=checked$134290)!==null)) {throw $$$cl134189.wrapexc($$$cl134189.AssertionException("Assertion failed: \'exists checked\' at bindingHandlers.ceylon (10:23-10:38)"),'10:16-10:39','bindingHandlers.ceylon'); }
                        val$134286.set(checked$134291);
                    };f$134287.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:$$$cm134200.DomEvent$dom},$an:function(){return[];}}],d:['cayla.mvc2','checked','$o','impl','$m','init','$m','f']};};
                    node$134284.addEventHandler($$$cl134189.String("click",5),$$$cl134189.$JsCallable(f$134287,[{$nm:'event',$mt:'prm',$t:{t:$$$cm134200.DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cm134200.DomEvent$dom}]}}));
                    val$134286.subscribe($$$cl134189.$JsCallable((function (prop$134292){
                        return node$134284.setChecked(prop$134292);
                    }),[{$nm:'prop',$mt:'prm',$t:{t:$$$cl134189.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cl134189.$Boolean}]}}));
                    if(val$134286.$get()){
                        node$134284.setAttribute($$$cl134189.String("checked",7),$$$cl134189.String("",0));
                    }
                };$$impl$134283.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}},{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},$an:function(){return[];}}],$cont:impl$134283,$an:function(){return[$$$cl134189.shared(),$$$cl134189.actual()];},d:['cayla.mvc2','checked','$o','impl','$m','init']};};
            })(impl$134283.$$.prototype);
        }
        return impl$134283;
    }
    $init$impl$134283();
    var impl$134293;
    function getImpl$134293(){
        if (impl$134293===undefined){impl$134293=$init$impl$134283()({Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Model:$$$mptypes.Model});impl$134293.$$metamodel$$=getImpl$134293.$$metamodel$$;}
        return impl$134293;
    }
    getImpl$134293.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$134283},d:['cayla.mvc2','checked','$o','impl']};};
    $prop$getImpl$134293={get:getImpl$134293,$$metamodel$$:getImpl$134293.$$metamodel$$};
    return getImpl$134293();
}
exports.checked=checked;
checked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:BindingHandler,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Model:'Model'}},$ps:[],$tp:{Model:{'satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','checked']};};

//MethodDef enter at bindingHandlers.ceylon (23:0-38:0)
function enter($$$mptypes){
    
    //ObjectDef impl at bindingHandlers.ceylon (24:4-36:4)
    function impl$134294($$targs$$){
        var $$impl$134294=new impl$134294.$$;
        $$impl$134294.$$targs$$=$$targs$$;
        BindingHandler({Value:{t:$$$cl134189.Callable,a:{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:'T', l:[$$$mptypes.Model]}]}}},Model:$$$mptypes.Model},$$impl$134294);
        $$$cl134189.add_type_arg($$impl$134294,'Value',{t:$$$cl134189.Callable,a:{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:'T', l:[$$$mptypes.Model]}]}}});
        return $$impl$134294;
    };impl$134294.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},satisfies:[{t:BindingHandler,a:{Value:{t:$$$cl134189.Callable,a:{Return:{t:$$$cl134189.Anything},Arguments:{t:'T',l:[{$t:{t:'T',l:[{$t:'Model'}]}}]}}},Model:'Model'}}],d:['cayla.mvc2','enter','$o','impl']};};
    function $init$impl$134294(){
        if (impl$134294.$$===undefined){
            $$$cl134189.initTypeProto(impl$134294,'cayla.mvc2::enter.impl',$$$cl134189.Basic,$init$BindingHandler());
            (function($$impl$134294){
                
                //MethodDef init at bindingHandlers.ceylon (25:8-35:8)
                $$impl$134294.init=function init(node$134295,model$134296,val$134297){
                    var $$impl$134294=this;
                    
                    //MethodDef f at bindingHandlers.ceylon (26:12-32:12)
                    function f$134298(event$134299){
                        $$$cl134189.print($$$cl134189.StringBuilder().appendAll([$$$cl134189.String("got event ",10),event$134299.keyCode.string]).string);
                        //assert at bindingHandlers.ceylon (28:16-28:58)
                        var v$134300;
                        if (!((v$134300=event$134299.target.getValue())!==null)) {throw $$$cl134189.wrapexc($$$cl134189.AssertionException("Assertion failed: \'exists v = event.target.getValue()\' at bindingHandlers.ceylon (28:22-28:57)"),'28:16-28:58','bindingHandlers.ceylon'); }
                        if(event$134299.keyCode.equals((13))){
                            val$134297($$$cl134189.Tuple(model$134296,$$$cl134189.getEmpty(),{Rest:{t:$$$cl134189.Empty},Element:$$$mptypes.Model,First:$$$mptypes.Model}));
                        }
                    };f$134298.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:$$$cm134200.DomEvent$dom},$an:function(){return[];}}],d:['cayla.mvc2','enter','$o','impl','$m','init','$m','f']};};
                    node$134295.addEventHandler($$$cl134189.String("keyup",5),$$$cl134189.$JsCallable(f$134298,[{$nm:'event',$mt:'prm',$t:{t:$$$cm134200.DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cm134200.DomEvent$dom}]}}));
                    $$$cl134189.print($$$cl134189.String("added handler",13));
                };$$impl$134294.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}},{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl134189.Callable,a:{Return:{t:$$$cl134189.Anything},Arguments:{t:'T',l:[{$t:{t:'T',l:[{$t:'Model'}]}}]}}},$an:function(){return[];}}],$cont:impl$134294,$an:function(){return[$$$cl134189.shared(),$$$cl134189.actual()];},d:['cayla.mvc2','enter','$o','impl','$m','init']};};
            })(impl$134294.$$.prototype);
        }
        return impl$134294;
    }
    $init$impl$134294();
    var impl$134301;
    function getImpl$134301(){
        if (impl$134301===undefined){impl$134301=$init$impl$134294()({Value:{t:$$$cl134189.Callable,a:{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:'T', l:[$$$mptypes.Model]}]}}},Model:$$$mptypes.Model});impl$134301.$$metamodel$$=getImpl$134301.$$metamodel$$;}
        return impl$134301;
    }
    getImpl$134301.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$134294},d:['cayla.mvc2','enter','$o','impl']};};
    $prop$getImpl$134301={get:getImpl$134301,$$metamodel$$:getImpl$134301.$$metamodel$$};
    return getImpl$134301();
}
exports.enter=enter;
enter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:BindingHandler,a:{Value:{t:$$$cl134189.Callable,a:{Return:{t:$$$cl134189.Anything},Arguments:{t:'T',l:[{$t:{t:'T',l:[{$t:'Model'}]}}]}}},Model:'Model'}},$ps:[],$tp:{Model:{'satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','enter']};};

//MethodDef css at bindingHandlers.ceylon (40:0-55:0)
function css(className$134302,$$$mptypes){
    
    //ObjectDef impl at bindingHandlers.ceylon (41:4-53:4)
    function impl$134303($$targs$$){
        var $$impl$134303=new impl$134303.$$;
        $$impl$134303.$$targs$$=$$targs$$;
        BindingHandler({Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Model:$$$mptypes.Model},$$impl$134303);
        $$$cl134189.add_type_arg($$impl$134303,'Value',{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}});
        return $$impl$134303;
    };impl$134303.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},satisfies:[{t:BindingHandler,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Model:'Model'}}],d:['cayla.mvc2','css','$o','impl']};};
    function $init$impl$134303(){
        if (impl$134303.$$===undefined){
            $$$cl134189.initTypeProto(impl$134303,'cayla.mvc2::css.impl',$$$cl134189.Basic,$init$BindingHandler());
            (function($$impl$134303){
                
                //MethodDef init at bindingHandlers.ceylon (42:8-52:8)
                $$impl$134303.init=function init(node$134304,model$134305,val$134306){
                    var $$impl$134303=this;
                    
                    //MethodDef g at bindingHandlers.ceylon (43:12-49:12)
                    function g$134307(p$134308){
                        if(p$134308){
                            node$134304.addClass(className$134302);
                        }else {
                            node$134304.removeClass(className$134302);
                        }
                    };g$134307.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl134189.$Boolean},$an:function(){return[];}}],d:['cayla.mvc2','css','$o','impl','$m','init','$m','g']};};
                    val$134306.subscribe($$$cl134189.$JsCallable(g$134307,[{$nm:'p',$mt:'prm',$t:{t:$$$cl134189.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cl134189.$Boolean}]}}));
                    g$134307(val$134306.$get());
                };$$impl$134303.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}},{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},$an:function(){return[];}}],$cont:impl$134303,$an:function(){return[$$$cl134189.shared(),$$$cl134189.actual()];},d:['cayla.mvc2','css','$o','impl','$m','init']};};
            })(impl$134303.$$.prototype);
        }
        return impl$134303;
    }
    $init$impl$134303();
    var impl$134309;
    function getImpl$134309(){
        if (impl$134309===undefined){impl$134309=$init$impl$134303()({Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Model:$$$mptypes.Model});impl$134309.$$metamodel$$=getImpl$134309.$$metamodel$$;}
        return impl$134309;
    }
    getImpl$134309.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$134303},d:['cayla.mvc2','css','$o','impl']};};
    $prop$getImpl$134309={get:getImpl$134309,$$metamodel$$:getImpl$134309.$$metamodel$$};
    return getImpl$134309();
}
exports.css=css;
css.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:BindingHandler,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.$Boolean}}},Model:'Model'}},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl134189.String},$an:function(){return[];}}],$tp:{Model:{'satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','css']};};

//MethodDef text at bindingHandlers.ceylon (57:0-76:0)
function text($$$mptypes){
    
    //ObjectDef impl at bindingHandlers.ceylon (58:4-74:4)
    function impl$134310($$targs$$){
        var $$impl$134310=new impl$134310.$$;
        $$impl$134310.$$targs$$=$$targs$$;
        BindingHandler({Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Model:$$$mptypes.Model},$$impl$134310);
        $$$cl134189.add_type_arg($$impl$134310,'Value',{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}});
        return $$impl$134310;
    };impl$134310.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},satisfies:[{t:BindingHandler,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Model:'Model'}}],d:['cayla.mvc2','text','$o','impl']};};
    function $init$impl$134310(){
        if (impl$134310.$$===undefined){
            $$$cl134189.initTypeProto(impl$134310,'cayla.mvc2::text.impl',$$$cl134189.Basic,$init$BindingHandler());
            (function($$impl$134310){
                
                //MethodDef init at bindingHandlers.ceylon (59:8-73:8)
                $$impl$134310.init=function init(node$134311,model$134312,val$134313){
                    var $$impl$134310=this;
                    
                    //MethodDef g at bindingHandlers.ceylon (60:12-66:12)
                    function g$134314(p$134315){
                        //'for' statement at bindingHandlers.ceylon (61:16-63:16)
                        var it$134316 = node$134311.getChildren().iterator();
                        var child$134317;while ((child$134317=it$134316.next())!==$$$cl134189.getFinished()){
                            child$134317.detach();
                        }
                        
                        //AttributeDecl init at bindingHandlers.ceylon (64:16-64:38)
                        var init$134318=val$134313.$get();
                        node$134311.addText(init$134318);
                    };g$134314.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl134189.String},$an:function(){return[];}}],d:['cayla.mvc2','text','$o','impl','$m','init','$m','g']};};
                    val$134313.subscribe($$$cl134189.$JsCallable(g$134314,[{$nm:'p',$mt:'prm',$t:{t:$$$cl134189.String},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cl134189.String}]}}));
                    //'for' statement at bindingHandlers.ceylon (68:12-70:12)
                    var it$134319 = node$134311.getChildren().iterator();
                    var child$134320;while ((child$134320=it$134319.next())!==$$$cl134189.getFinished()){
                        child$134320.detach();
                    }
                    
                    //AttributeDecl init at bindingHandlers.ceylon (71:12-71:34)
                    var init$134321=val$134313.$get();
                    node$134311.addText(init$134321);
                };$$impl$134310.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}},{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},$an:function(){return[];}}],$cont:impl$134310,$an:function(){return[$$$cl134189.shared(),$$$cl134189.actual()];},d:['cayla.mvc2','text','$o','impl','$m','init']};};
            })(impl$134310.$$.prototype);
        }
        return impl$134310;
    }
    $init$impl$134310();
    var impl$134322;
    function getImpl$134322(){
        if (impl$134322===undefined){impl$134322=$init$impl$134310()({Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Model:$$$mptypes.Model});impl$134322.$$metamodel$$=getImpl$134322.$$metamodel$$;}
        return impl$134322;
    }
    getImpl$134322.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$134310},d:['cayla.mvc2','text','$o','impl']};};
    $prop$getImpl$134322={get:getImpl$134322,$$metamodel$$:getImpl$134322.$$metamodel$$};
    return getImpl$134322();
}
exports.text=text;
text.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:BindingHandler,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Model:'Model'}},$ps:[],$tp:{Model:{'satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','text']};};

//MethodDef val at bindingHandlers.ceylon (78:0-99:0)
function val($$$mptypes){
    
    //ObjectDef impl at bindingHandlers.ceylon (79:4-97:4)
    function impl$134323($$targs$$){
        var $$impl$134323=new impl$134323.$$;
        $$impl$134323.$$targs$$=$$targs$$;
        BindingHandler({Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Model:$$$mptypes.Model},$$impl$134323);
        $$$cl134189.add_type_arg($$impl$134323,'Value',{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}});
        return $$impl$134323;
    };impl$134323.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},satisfies:[{t:BindingHandler,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Model:'Model'}}],d:['cayla.mvc2','val','$o','impl']};};
    function $init$impl$134323(){
        if (impl$134323.$$===undefined){
            $$$cl134189.initTypeProto(impl$134323,'cayla.mvc2::val.impl',$$$cl134189.Basic,$init$BindingHandler());
            (function($$impl$134323){
                
                //MethodDef init at bindingHandlers.ceylon (80:8-96:8)
                $$impl$134323.init=function init(node$134324,model$134325,val$134326){
                    var $$impl$134323=this;
                    
                    //MethodDef f at bindingHandlers.ceylon (81:12-89:12)
                    function f$134327(event$134328){
                        //assert at bindingHandlers.ceylon (82:16-82:58)
                        var v$134329;
                        if (!((v$134329=event$134328.target.getValue())!==null)) {throw $$$cl134189.wrapexc($$$cl134189.AssertionException("Assertion failed: \'exists v = event.target.getValue()\' at bindingHandlers.ceylon (82:22-82:57)"),'82:16-82:58','bindingHandlers.ceylon'); }
                        val$134326.set(v$134329);
                    };f$134327.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:$$$cm134200.DomEvent$dom},$an:function(){return[];}}],d:['cayla.mvc2','val','$o','impl','$m','init','$m','f']};};
                    node$134324.addEventHandler($$$cl134189.String("keyup",5),$$$cl134189.$JsCallable(f$134327,[{$nm:'event',$mt:'prm',$t:{t:$$$cm134200.DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cm134200.DomEvent$dom}]}}));
                    
                    //MethodDef g at bindingHandlers.ceylon (91:12-93:12)
                    function g$134330(p$134331){
                        node$134324.setValue(val$134326.$get());
                    };g$134330.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl134189.String},$an:function(){return[];}}],d:['cayla.mvc2','val','$o','impl','$m','init','$m','g']};};
                    val$134326.subscribe($$$cl134189.$JsCallable(g$134330,[{$nm:'p',$mt:'prm',$t:{t:$$$cl134189.String},$an:function(){return[];}}],{Return:{t:$$$cl134189.Anything},Arguments:{t:'T', l:[{t:$$$cl134189.String}]}}));
                    node$134324.setValue(val$134326.$get());
                };$$impl$134323.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}},{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},$an:function(){return[];}}],$cont:impl$134323,$an:function(){return[$$$cl134189.shared(),$$$cl134189.actual()];},d:['cayla.mvc2','val','$o','impl','$m','init']};};
            })(impl$134323.$$.prototype);
        }
        return impl$134323;
    }
    $init$impl$134323();
    var impl$134332;
    function getImpl$134332(){
        if (impl$134332===undefined){impl$134332=$init$impl$134323()({Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Model:$$$mptypes.Model});impl$134332.$$metamodel$$=getImpl$134332.$$metamodel$$;}
        return impl$134332;
    }
    getImpl$134332.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$134323},d:['cayla.mvc2','val','$o','impl']};};
    $prop$getImpl$134332={get:getImpl$134332,$$metamodel$$:getImpl$134332.$$metamodel$$};
    return getImpl$134332();
}
exports.val=val;
val.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:BindingHandler,a:{Value:{t:$$$cm134200.Property,a:{Value:{t:$$$cl134189.String}}},Model:'Model'}},$ps:[],$tp:{Model:{'satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','val']};};

//InterfaceDef BindingHandler at BindingHandler.ceylon (3:0-7:0)
function BindingHandler($$targs$$,$$bindingHandler){
    $$$cl134189.set_type_args($$bindingHandler,$$targs$$);
}
BindingHandler.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'in'},Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','BindingHandler']};};
exports.BindingHandler=BindingHandler;
function $init$BindingHandler(){
    if (BindingHandler.$$===undefined){
        $$$cl134189.initTypeProtoI(BindingHandler,'cayla.mvc2::BindingHandler');
        (function($$bindingHandler){
            $$bindingHandler.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}},{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:BindingHandler,$an:function(){return[$$$cl134189.shared(),$$$cl134189.formal()];},d:['cayla.mvc2','BindingHandler','$m','init']};}};
        })(BindingHandler.$$.prototype);
    }
    return BindingHandler;
}
exports.$init$BindingHandler=$init$BindingHandler;
$init$BindingHandler();

//InterfaceDef Binding at Binding.ceylon (5:0-9:0)
function Binding($$targs$$,$$binding){
    $$$cl134189.set_type_args($$binding,$$targs$$);
}
Binding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Model:{'var':'in','satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','Binding']};};
exports.Binding=Binding;
function $init$Binding(){
    if (Binding.$$===undefined){
        $$$cl134189.initTypeProtoI(Binding,'cayla.mvc2::Binding');
        (function($$binding){
            $$binding.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}},{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}}],$cont:Binding,$an:function(){return[$$$cl134189.shared(),$$$cl134189.formal()];},d:['cayla.mvc2','Binding','$m','init']};}};
        })(Binding.$$.prototype);
    }
    return Binding;
}
exports.$init$Binding=$init$Binding;
$init$Binding();

//MethodDef bindExpression at Binding.ceylon (11:0-21:0)
function bindExpression(expression$134333,handler$134334,$$$mptypes){
    
    //ObjectDef impl at Binding.ceylon (14:4-19:4)
    function impl$134335($$targs$$){
        var $$impl$134335=new impl$134335.$$;
        $$impl$134335.$$targs$$=$$targs$$;
        Binding({Model:$$$mptypes.Model},$$impl$134335);
        return $$impl$134335;
    };impl$134335.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl134189.Basic},satisfies:[{t:Binding,a:{Model:'Model'}}],d:['cayla.mvc2','bindExpression','$o','impl']};};
    function $init$impl$134335(){
        if (impl$134335.$$===undefined){
            $$$cl134189.initTypeProto(impl$134335,'cayla.mvc2::bindExpression.impl',$$$cl134189.Basic,$init$Binding());
            (function($$impl$134335){
                
                //MethodDef init at Binding.ceylon (15:8-18:8)
                $$impl$134335.init=function init(node$134336,model$134337){
                    var $$impl$134335=this;
                    
                    //AttributeDecl v at Binding.ceylon (16:12-16:48)
                    var v$134338=expression$134333.traverse(model$134337);
                    handler$134334.init(node$134336,model$134337,v$134338);
                };$$impl$134335.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl134189.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cm134200.DomNode$dom},$an:function(){return[];}},{$nm:'model',$mt:'prm',$t:'Model',$an:function(){return[];}}],$cont:impl$134335,$an:function(){return[$$$cl134189.shared(),$$$cl134189.actual()];},d:['cayla.mvc2','bindExpression','$o','impl','$m','init']};};
            })(impl$134335.$$.prototype);
        }
        return impl$134335;
    }
    $init$impl$134335();
    var impl$134339;
    function getImpl$134339(){
        if (impl$134339===undefined){impl$134339=$init$impl$134335()({Model:$$$mptypes.Model});impl$134339.$$metamodel$$=getImpl$134339.$$metamodel$$;}
        return impl$134339;
    }
    getImpl$134339.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$134335},d:['cayla.mvc2','bindExpression','$o','impl']};};
    $prop$getImpl$134339={get:getImpl$134339,$$metamodel$$:getImpl$134339.$$metamodel$$};
    return getImpl$134339();
}
exports.bindExpression=bindExpression;
bindExpression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binding,a:{Model:'Model'}},$ps:[{$nm:'expression',$mt:'prm',$t:{t:$$$cm134200.Expression$expression,a:{Type:'Value',Source:'Model'}},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:BindingHandler,a:{Value:'Value',Model:'Model'}},$an:function(){return[];}}],$tp:{Model:{'satisfies':[{t:$$$cl134189.$Object}]},Value:{'satisfies':[{t:$$$cl134189.$Object}]}},$an:function(){return[$$$cl134189.shared()];},d:['cayla.mvc2','bindExpression']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

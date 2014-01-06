(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"io.cayla.mvvm.view":{"A":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"A","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"href","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"href":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"href","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"ElementViewContext":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"ElementViewContext","satisfies":[{"$nm":"ViewContext","$pk":"io.cayla.mvvm.view"}],"$ps":[{"$t":{"$nm":"ModelContextImpl","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"modelContext","$mt":"prm"},{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[],"actual":[]},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[],"actual":[]},"$nm":"template","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ElementViewContext","$pk":"io.cayla.mvvm.view"}]},"$nm":"parent","$mt":"prm"}],"$at":{"template":{"$t":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[],"actual":[]},"$nm":"template","$mt":"attr"},"node":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[],"actual":[]},"$nm":"node","$mt":"attr"},"parent":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ElementViewContext","$pk":"io.cayla.mvvm.view"}]},"$nm":"parent","$mt":"attr"},"createContent":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"createContent","var":"1","$mt":"attr"},"modelContext":{"$t":{"$nm":"ModelContextImpl","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"modelContext","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"init","$mt":"mthd"},"bind":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"bind","$ps":[[{"$t":{"$nm":"ModelContext","$pk":"io.cayla.mvvm"},"$nm":"model","$mt":"prm"}]],"$mt":"mthd"},"initChildren":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"initChildren","$mt":"mthd"},"register":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"register","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"ViewContext":{"$an":{"shared":[],"doc":["The view context provides interaction with the DOM as defined by the template.\n"]},"$nm":"ViewContext","$at":{"template":{"$t":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"formal":[],"shared":[],"doc":["The template as defined associated with this context"]},"$nm":"template","$mt":"attr"},"node":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"formal":[],"shared":[],"doc":["The dom node instance of the template"]},"$nm":"node","$mt":"attr"},"createContent":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[],"variable":[]},"$nm":"createContent","var":"1","$mt":"attr"}},"$m":{"bind":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"bind","$ps":[[{"$t":{"$nm":"ModelContext","$pk":"io.cayla.mvvm"},"$nm":"model","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"InputText":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"InputText","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"attr"}},"$mt":"cls"},"Element":{"super":{"$nm":"View","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[],"abstract":[]},"$nm":"Element","$ps":[{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"id","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"classNames","$mt":"prm"},{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"default":[]},"$nm":"attrs","$mt":"attr"}},"$m":{"apply":{"$t":{"$nm":"ViewContext","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[],"actual":[],"doc":["Apply the current template element to the model"]},"$nm":"apply","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"model","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"Label":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Label","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"H1":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"H1","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"ModelContextImpl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"ModelContextImpl","satisfies":[{"$nm":"ModelContext","$pk":"io.cayla.mvvm"}],"$ps":[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"o","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ModelContext","$pk":"io.cayla.mvvm"}]},"$an":{"shared":[]},"$nm":"parent","$mt":"prm"}],"$at":{"parent":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ModelContext","$pk":"io.cayla.mvvm"}]},"$an":{"shared":[]},"$nm":"parent","$mt":"attr"},"nodes":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"io.cayla.mvvm.dom"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$an":{"shared":[]},"$nm":"nodes","$mt":"attr"},"o":{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"o","$mt":"attr"}},"$m":{"createChild":{"$t":{"$nm":"ModelContext","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[]},"$nm":"createChild","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"child","$mt":"prm"}]],"$mt":"mthd"},"resolve":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"shared":[],"actual":[],"doc":["Resolve a value against this binding context, the value can either be the current object or be resolved in an ancestor context."]},"$nm":"resolve","$mt":"mthd"},"destroy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"destroy","$mt":"mthd"},"register":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"register","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"Section":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Section","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Span":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Span","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Strong":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Strong","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"View":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"View","$m":{"apply":{"$t":{"$nm":"ViewContext","$pk":"io.cayla.mvvm.view"},"$an":{"formal":[],"shared":[],"doc":["Apply the current template element to the model"]},"$nm":"apply","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"model","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"Bindings":{"$an":{"shared":[]},"$nm":"Bindings","$alias":{"comp":"u","$ts":[{"$nm":"Binding","$pk":"io.cayla.mvvm.binding"},{"$tp":[{"$nm":"Binding","$mt":"tpm","$pk":"io.cayla.mvvm.binding"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]},"$mt":"als"},"Div":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Div","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"P":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"P","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"$pkg-shared":"1","Input":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Input","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Header":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Header","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Button":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Button","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"CheckBox":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"CheckBox","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"Ul":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Ul","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Footer":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Footer","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Li":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Li","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"}},"$mod-version":"0.1.0","$mod-deps":["ceylon.collection\/1.0.0","ceylon.language\/1.0.0"],"io.cayla.mvvm":{"Frame":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Frame","$at":{"observables":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"HashSet","$md":"ceylon.collection","$pk":"ceylon.collection"},"$an":{"shared":[]},"$nm":"observables","$mt":"attr"}},"$mt":"cls"},"computed":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"ComputedObservable","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"computed","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"compute","$mt":"prm"}]],"$mt":"mthd"},"log":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"log","$m":{"debug":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"debug","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"message","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"Observable":{"$tp":[{"$nm":"Value","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$an":{"shared":[],"doc":["An observable value can be evaluated and watched for change notifications.\n"]},"$nm":"Observable","$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"formal":[],"shared":[],"doc":["Returns the most recent value that can be observed. When dependency tracking is active, this method invocation creates\nan implicit dependency on this observable."]},"$nm":"getValue","$mt":"mthd"},"bind":{"$t":{"$nm":"Binding","$pk":"io.cayla.mvvm.binding"},"$an":{"shared":[],"doc":["Binds a binder to this observable."]},"$nm":"bind","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"},"$nm":"handler","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Binding","$pk":"io.cayla.mvvm.binding"},"$nm":"impl","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"formal":[],"shared":[],"doc":["Allows a subscriber to be notified when the observed value changes over time."]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"ModelContext":{"$an":{"shared":[],"doc":["The model context provides interaction with the model bound to a view"]},"$nm":"ModelContext","$m":{"resolve":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"formal":[],"shared":[],"doc":["Resolve a value against this binding context, the value can either be the current object or be resolved in an ancestor context."]},"$nm":"resolve","$mt":"mthd"},"createChild":{"$t":{"$nm":"ModelContext","$pk":"io.cayla.mvvm"},"$an":{"formal":[],"shared":[],"doc":["Create a child context associated with the child model"]},"$nm":"createChild","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"childModel","$mt":"prm"}]],"$mt":"mthd"},"destroy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[],"doc":["Destroy this context"]},"$nm":"destroy","$mt":"mthd"}},"$mt":"ifc"},"$pkg-shared":"1","ObservableList":{"$tp":[{"$nm":"Element","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["An observable list that wraps a Ceylon mutable list. The observed list provides notifications for changes of the list itself, changes made to\nthe elements themselves are not related to this observable object.\n\nWhen dependency tracking is active, accessing the list in read mode creates an implicit dependency on this observable.\nWhen the list is modified, subscribers of this observable will be notified.\n\nKeep in mind that the updating directly the underlying list will not broadcast any update. Likewise reading the underlying list\nwill not affect dependency tracking.\n"]},"$nm":"ObservableList","satisfies":[{"$tp":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"MutableList","$md":"ceylon.collection","$pk":"ceylon.collection"}],"$ps":[{"$def":"1","$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"MutableList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$an":{"doc":["The mutable list"]},"$nm":"list","$mt":"prm"}],"$at":{"rest":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"rest","$mt":"gttr"},"subscribers":{"$t":{"$tp":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Subscribers","$pk":"io.cayla.mvvm"},"$nm":"subscribers","$mt":"attr"},"clone":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"clone","$mt":"gttr"},"lastIndex":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[],"actual":[]},"$nm":"lastIndex","$mt":"gttr"},"list":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"MutableList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$an":{"doc":["The mutable list"]},"$nm":"list","$mt":"attr"},"hash":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"hash","$mt":"gttr"},"reversed":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"reversed","$mt":"gttr"}},"$m":{"add":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"add","$ps":[[{"$t":{"$nm":"Element"},"$nm":"element","$mt":"prm"}]],"$mt":"mthd"},"spanFrom":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"spanFrom","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"}]],"$mt":"mthd"},"set":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"set","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"},{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"clear":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"clear","$mt":"mthd"},"insert":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"insert","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"},{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"remove":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element"}]},"$an":{"shared":[],"actual":[]},"$nm":"remove","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"}]],"$mt":"mthd"},"spanTo":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"spanTo","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"to","$mt":"prm"}]],"$mt":"mthd"},"getValue":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"addAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"addAll","$ps":[[{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"values","$mt":"prm"}]],"$mt":"mthd"},"equals":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"equals","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"that","$mt":"prm"}]],"$mt":"mthd"},"get":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element"}]},"$an":{"shared":[],"actual":[]},"$nm":"get","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"}]],"$mt":"mthd"},"segment":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"segment","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"length","$mt":"prm"}]],"$mt":"mthd"},"removeElement":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"removeElement","$ps":[[{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"span":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"span","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"to","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"ComputedObservable":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["A computed observable turns a closure into an observable of the value produced by the function. The computed\nobservable can depend on one or more other observables and it will automatically update whenever any of these\ndependencies change.\n"]},"$nm":"ComputedObservable","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"io.cayla.mvvm"}],"$ps":[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"closure","$mt":"prm"}],"$at":{"evaluation":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"evaluation","var":"1","$mt":"attr"},"subscribers":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Subscribers","$pk":"io.cayla.mvvm"},"$nm":"subscribers","$mt":"attr"},"evaluating":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"evaluating","var":"1","$mt":"attr"},"closure":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"closure","$mt":"attr"},"dependencies":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"},{"$nm":"Subscription","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"HashMap","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"dependencies","$mt":"attr"}},"$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"evaluate":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$nm":"evaluate","$m":{"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"update","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"o","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"cls"},"dependant":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"dependant","$at":{"stack":{"$t":{"$tp":[{"$nm":"Frame","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"stack","$mt":"attr"}},"$m":{"report":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"report","$ps":[[{"$t":{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"observable","$mt":"prm"}]],"$mt":"mthd"},"end":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Set","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"end","$mt":"mthd"},"begin":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"begin","$mt":"mthd"}},"$mt":"obj"},"Subscription":{"$an":{"shared":[],"doc":["A subscription, it can be disposed to terminate the effect of the subscriptio."]},"$nm":"Subscription","$m":{"dispose":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[],"doc":["Dispose the subscription"]},"$nm":"dispose","$mt":"mthd"}},"$mt":"ifc"},"Subscribers":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Subscribers","$at":{"subscribers":{"$t":{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"subscribers","$mt":"attr"}},"$m":{"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd","$o":{"subscription":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscription","satisfies":[{"$nm":"Subscription","$pk":"io.cayla.mvvm"}],"$m":{"dispose":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"dispose","$mt":"mthd"}},"$mt":"obj"}}},"notify":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"notify","$ps":[[{"$t":{"$nm":"Value"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"Property":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["A property defines a read\/write access to a value. A property is also an observable and can be watched for notification changes."]},"$nm":"Property","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"io.cayla.mvvm"}],"$ps":[{"$t":{"$nm":"Value"},"$an":{"variable":[]},"$nm":"val","$mt":"prm"}],"$at":{"val":{"$t":{"$nm":"Value"},"$an":{"variable":[]},"$nm":"val","var":"1","$mt":"attr"},"subscribers":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Subscribers","$pk":"io.cayla.mvvm"},"$nm":"subscribers","$mt":"attr"}},"$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"setValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Update the property value, this will cause subscribers to be notified after the value has been updated."]},"$nm":"setValue","$ps":[[{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"CyclicDependencyException":{"super":{"$nm":"Exception","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"CyclicDependencyException","$mt":"cls"}},"io.cayla.mvvm.diff":{"$pkg-shared":"1","same":{"super":{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},"$an":{"shared":[],"doc":["Same change"]},"$nm":"same","$mt":"obj"},"removed":{"super":{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},"$an":{"shared":[],"doc":["Removed change"]},"$nm":"removed","$mt":"obj"},"Diff":{"$tp":[{"$nm":"E","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Diff two series of elements\n"]},"$nm":"Diff","satisfies":[{"$tp":[{"$tp":[{"comp":"u","$ts":[{"$nm":"E"},{"comp":"u","$ts":[{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.diff"}]}],"$mt":"tpm"},{"$nm":"E","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.diff"}],"$mt":"tpm"},{"$nm":"Change","$mt":"tpm","$pk":"io.cayla.mvvm.diff"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterator","$md":"ceylon.language","$pk":"ceylon.language"}],"$ps":[{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements1","$mt":"prm"},{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements2","$mt":"prm"}],"$at":{"opt":{"$t":{"$nm":"Matrix","$pk":"io.cayla.mvvm.diff"},"$nm":"opt","$mt":"attr"},"i":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"variable":[]},"$nm":"i","var":"1","$mt":"attr"},"j":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"variable":[]},"$nm":"j","var":"1","$mt":"attr"},"elements2":{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements2","$mt":"attr"},"elements1":{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements1","$mt":"attr"},"m":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"m","$mt":"attr"},"n":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"n","$mt":"attr"}},"$m":{"next":{"$t":{"comp":"u","$ts":[{"$tp":[{"comp":"u","$ts":[{"$nm":"E"},{"comp":"u","$ts":[{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.diff"}]}],"$mt":"tpm"},{"$nm":"E","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.diff"}],"$mt":"tpm"},{"$nm":"Change","$mt":"tpm","$pk":"io.cayla.mvvm.diff"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Finished","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[],"actual":[]},"$nm":"next","$mt":"mthd"}},"$mt":"cls","$c":{"Matrix":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Matrix","$ps":[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"width","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"height","$mt":"prm"}],"$at":{"string":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"string","$mt":"gttr"},"width":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"width","$mt":"attr"},"state":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Array","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"state","$mt":"attr"},"height":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"height","$mt":"attr"}},"$m":{"set":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"set","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"x","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"y","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"e","$mt":"prm"}]],"$mt":"mthd"},"get":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"get","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"x","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"y","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}}},"added":{"super":{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},"$an":{"shared":[],"doc":["Added change"]},"$nm":"added","$mt":"obj"},"Change":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["A change"],"abstract":[]},"$nm":"Change","of":[{"$nm":"removed","$pk":"io.cayla.mvvm.diff"},{"$nm":"same","$pk":"io.cayla.mvvm.diff"},{"$nm":"added","$pk":"io.cayla.mvvm.diff"}],"$mt":"cls","abstract":"1"}},"$mod-bin":"6.0","io.cayla.mvvm.dom":{"$pkg-shared":"1","DomNode":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"DomNode","$ps":[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"variable":[]},"$nm":"peer","$mt":"prm"}],"$at":{"visible":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"visible","var":"1","$mt":"gttr"},"peer":{"$t":{"$nm":"unknown","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"peer","var":"1","$mt":"attr"}},"$m":{"dispatchEvent":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"dispatchEvent","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"type","$mt":"prm"}]],"$mt":"mthd"},"removeClass":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addText":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"addText","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"cdata","$mt":"prm"}]],"$mt":"mthd"},"hasClass":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"hasClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"isChecked":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"isChecked","$mt":"mthd"},"click":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"click","$mt":"mthd"},"insertBefore":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"insertBefore","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"}]},"$nm":"nextSibling","$mt":"prm"}]],"$mt":"mthd"},"getNodeValue":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"getNodeValue","$mt":"mthd"},"setNodeValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setNodeValue","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"getChildren":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"io.cayla.mvvm.dom"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"getChildren","$mt":"mthd"},"getValue":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"getValue","$mt":"mthd"},"setAttribute":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"getAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"matchesSelector":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"matchesSelector","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"setValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setValue","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"setChecked":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setChecked","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"checked","$mt":"prm"}]],"$mt":"mthd"},"setId":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setId","$ps":[[{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"}]],"$mt":"mthd"},"detach":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"detach","$mt":"mthd"},"addElement":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"addElement","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"removeAttribute":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addChild":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"addChild","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"},"addClass":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"addClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addEventHandler":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"addEventHandler","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"type","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"DomEvent","$pk":"io.cayla.mvvm.dom"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.dom"}],"$mt":"tpm"},{"$nm":"DomEvent","$mt":"tpm","$pk":"io.cayla.mvvm.dom"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"handler","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"selector","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"eventPeer","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"cls"},"DomContext":{"$an":{"shared":[]},"$nm":"DomContext","$mt":"ifc"},"querySelectorAll":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"io.cayla.mvvm.dom"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"querySelectorAll","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"_matchesSelector":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_matchesSelector","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"nodePeer","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"text":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"text","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"cdata","$mt":"prm"}]],"$mt":"mthd"},"byId":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"byId","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"id","$mt":"prm"}]],"$mt":"mthd"},"wrap":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"wrap","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"nodePeer","$mt":"prm"}]],"$mt":"mthd"},"element":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"element","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"DomEvent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"DomEvent","$ps":[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"target","$mt":"prm"},{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"peer","$mt":"prm"}],"$at":{"keyCode":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"keyCode","$mt":"gttr"},"peer":{"$t":{"$nm":"unknown","$pk":"io.cayla.mvvm"},"$nm":"peer","$mt":"attr"},"target":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"target","$mt":"attr"}},"$m":{"preventDefault":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"preventDefault","$mt":"mthd"}},"$mt":"cls"}},"$mod-name":"io.cayla.mvvm","io.cayla.mvvm.expression":{"$pkg-shared":"1","method":{"$tp":[{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Arguments","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"},"$an":{"shared":[]},"$nm":"method","$ps":[[{"$t":{"$tp":[{"$nm":"Source","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"method","$mt":"prm"}]],"$mt":"mthd"},"Expression":{"$tp":[{"$nm":"Type","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$an":{"shared":[]},"$nm":"Expression","$m":{"traverse":{"$t":{"$nm":"Type"},"$an":{"formal":[],"shared":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"},"method":{"$tp":[{"$nm":"Arguments","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"MethodExpression","$pk":"io.cayla.mvvm.expression"},"$an":{"shared":[]},"$nm":"method","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"method","$mt":"prm"}]],"$mt":"mthd"},"attribute":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"AttributeExpression","$pk":"io.cayla.mvvm.expression"},"$an":{"shared":[]},"$nm":"attribute","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Nothing","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language.meta.model"}],"$nm":"Attribute","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"attribute","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Value"},"$nm":"f","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"bindTo":{"$t":{"$nm":"Binding","$pk":"io.cayla.mvvm.binding"},"$an":{"shared":[]},"$nm":"bindTo","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"},"$nm":"handler","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Binding","$pk":"io.cayla.mvvm.binding"},"$nm":"impl","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}}},"$mt":"ifc"},"ClassExpression":{"$tp":[{"$nm":"Type","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ClassExpression","satisfies":[{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Type","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"}],"$m":{"traverse":{"$t":{"$nm":"Type"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Type"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"attribute":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"},"$an":{"shared":[]},"$nm":"attribute","$ps":[[{"$t":{"$tp":[{"$nm":"Source","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Nothing","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language.meta.model"}],"$nm":"Attribute","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"attr","$mt":"prm"}]],"$mt":"mthd"},"MethodExpression":{"$tp":[{"$nm":"Container","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Arguments","variance":"in","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"MethodExpression","satisfies":[{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"}],"$ps":[{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"m","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"},"$nm":"parent","$mt":"prm"}],"$at":{"parent":{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"},"$nm":"parent","$mt":"attr"},"m":{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"m","$mt":"attr"}},"$m":{"traverse":{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"AttributeExpression":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"AttributeExpression","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"}],"$ps":[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.expression"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$mt":"prm"}],"$at":{"f":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.expression"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$mt":"attr"}},"$m":{"traverse":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}},"io.cayla.mvvm.binding":{"Binding":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"Binding","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"$pkg-shared":"1","Binder":{"$tp":[{"$nm":"Value","variance":"in"}],"$an":{"shared":[]},"$nm":"Binder","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"binders":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"binders","$m":{"with":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"},"$an":{"shared":[]},"$nm":"with","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"foreach":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"},"$an":{"shared":[]},"$nm":"foreach","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$at":{"values":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"values","$mt":"attr"},"contexts":{"$t":{"$tp":[{"$nm":"ModelContext","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"contexts","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"notify":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"notify","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}],[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"list","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"css":{"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"},"$an":{"shared":[]},"$nm":"css","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"className","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"}}},"visible":{"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"},"$an":{"shared":[]},"$nm":"visible","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"}}},"click":{"$tp":[{"$def":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.binding"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}],"$mt":"tpm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"},"$an":{"shared":[]},"$nm":"click","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.binding"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}],"$mt":"tpm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.binding"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}}},"$mt":"obj","$o":{"val":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"val","satisfies":[{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"io.cayla.mvvm.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"},"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"},"checked":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"checked","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"io.cayla.mvvm.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"},"enter":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"enter","satisfies":[{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"io.cayla.mvvm.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"},"text":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"text","satisfies":[{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm.binding"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.binding"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"obj"}}},"BindingContext":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["The binding context binds the model context and the view context"]},"$nm":"BindingContext","$ps":[{"$t":{"$nm":"ModelContext","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"model","$mt":"prm"},{"$t":{"$nm":"ViewContext","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"view","$mt":"prm"}],"$at":{"view":{"$t":{"$nm":"ViewContext","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"view","$mt":"attr"},"model":{"$t":{"$nm":"ModelContext","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"model","$mt":"attr"}},"$mt":"cls"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl20381=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl20381.$addmod$($$$cl20381,'ceylon.language/1.0.0');
exports.$pkg$ans$io$cayla$mvvm$view=function(){return[$$$cl20381.shared()];};

//ClassDef Section at elements.ceylon (1:0-7:0)
function Section$view(id$20647, classNames$20648, bindings$20649, content$20650, $$section){
    $init$Section$view();
    if ($$section===undefined)$$section=new Section$view.$$;
    if(id$20647===undefined){id$20647=null;}
    $$section.id$20647_=id$20647;
    if(classNames$20648===undefined){classNames$20648=$$$cl20381.getEmpty();}
    $$section.classNames$20648_=classNames$20648;
    if(bindings$20649===undefined){bindings$20649=$$$cl20381.getEmpty();}
    $$section.bindings$20649_=bindings$20649;
    if(content$20650===undefined){content$20650=$$$cl20381.getEmpty();}
    $$section.content$20650_=content$20650;
    Element$view($$section.id$20647,$$$cl20381.String("section",7),$$section.classNames$20648,$$section.bindings$20649,$$section.content$20650,$$section);
    return $$section;
}
Section$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Section']};};
exports.Section$view=Section$view;
function $init$Section$view(){
    if (Section$view.$$===undefined){
        $$$cl20381.initTypeProto(Section$view,'io.cayla.mvvm.view::Section',$init$Element$view());
        (function($$section){
            $$$cl20381.defineAttr($$section,'id$20647',function(){return this.id$20647_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Section$view,d:['io.cayla.mvvm.view','Section','$at','id']};});
            $$$cl20381.defineAttr($$section,'classNames$20648',function(){return this.classNames$20648_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Section$view,d:['io.cayla.mvvm.view','Section','$at','classNames']};});
            $$$cl20381.defineAttr($$section,'bindings$20649',function(){return this.bindings$20649_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Section$view,d:['io.cayla.mvvm.view','Section','$at','bindings']};});
            $$$cl20381.defineAttr($$section,'content$20650',function(){return this.content$20650_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Section$view,d:['io.cayla.mvvm.view','Section','$at','content']};});
        })(Section$view.$$.prototype);
    }
    return Section$view;
}
exports.$init$Section$view=$init$Section$view;
$init$Section$view();

//ClassDef Header at elements.ceylon (9:0-15:0)
function Header$view(id$20651, classNames$20652, bindings$20653, content$20654, $$header){
    $init$Header$view();
    if ($$header===undefined)$$header=new Header$view.$$;
    if(id$20651===undefined){id$20651=null;}
    $$header.id$20651_=id$20651;
    if(classNames$20652===undefined){classNames$20652=$$$cl20381.getEmpty();}
    $$header.classNames$20652_=classNames$20652;
    if(bindings$20653===undefined){bindings$20653=$$$cl20381.getEmpty();}
    $$header.bindings$20653_=bindings$20653;
    if(content$20654===undefined){content$20654=$$$cl20381.getEmpty();}
    $$header.content$20654_=content$20654;
    Element$view($$header.id$20651,$$$cl20381.String("header",6),$$header.classNames$20652,$$header.bindings$20653,$$header.content$20654,$$header);
    return $$header;
}
Header$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Header']};};
exports.Header$view=Header$view;
function $init$Header$view(){
    if (Header$view.$$===undefined){
        $$$cl20381.initTypeProto(Header$view,'io.cayla.mvvm.view::Header',$init$Element$view());
        (function($$header){
            $$$cl20381.defineAttr($$header,'id$20651',function(){return this.id$20651_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Header$view,d:['io.cayla.mvvm.view','Header','$at','id']};});
            $$$cl20381.defineAttr($$header,'classNames$20652',function(){return this.classNames$20652_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Header$view,d:['io.cayla.mvvm.view','Header','$at','classNames']};});
            $$$cl20381.defineAttr($$header,'bindings$20653',function(){return this.bindings$20653_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Header$view,d:['io.cayla.mvvm.view','Header','$at','bindings']};});
            $$$cl20381.defineAttr($$header,'content$20654',function(){return this.content$20654_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Header$view,d:['io.cayla.mvvm.view','Header','$at','content']};});
        })(Header$view.$$.prototype);
    }
    return Header$view;
}
exports.$init$Header$view=$init$Header$view;
$init$Header$view();

//ClassDef Footer at elements.ceylon (17:0-23:0)
function Footer$view(id$20655, classNames$20656, bindings$20657, content$20658, $$footer){
    $init$Footer$view();
    if ($$footer===undefined)$$footer=new Footer$view.$$;
    if(id$20655===undefined){id$20655=null;}
    $$footer.id$20655_=id$20655;
    if(classNames$20656===undefined){classNames$20656=$$$cl20381.getEmpty();}
    $$footer.classNames$20656_=classNames$20656;
    if(bindings$20657===undefined){bindings$20657=$$$cl20381.getEmpty();}
    $$footer.bindings$20657_=bindings$20657;
    if(content$20658===undefined){content$20658=$$$cl20381.getEmpty();}
    $$footer.content$20658_=content$20658;
    Element$view($$footer.id$20655,$$$cl20381.String("footer",6),$$footer.classNames$20656,$$footer.bindings$20657,$$footer.content$20658,$$footer);
    return $$footer;
}
Footer$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Footer']};};
exports.Footer$view=Footer$view;
function $init$Footer$view(){
    if (Footer$view.$$===undefined){
        $$$cl20381.initTypeProto(Footer$view,'io.cayla.mvvm.view::Footer',$init$Element$view());
        (function($$footer){
            $$$cl20381.defineAttr($$footer,'id$20655',function(){return this.id$20655_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Footer$view,d:['io.cayla.mvvm.view','Footer','$at','id']};});
            $$$cl20381.defineAttr($$footer,'classNames$20656',function(){return this.classNames$20656_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Footer$view,d:['io.cayla.mvvm.view','Footer','$at','classNames']};});
            $$$cl20381.defineAttr($$footer,'bindings$20657',function(){return this.bindings$20657_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Footer$view,d:['io.cayla.mvvm.view','Footer','$at','bindings']};});
            $$$cl20381.defineAttr($$footer,'content$20658',function(){return this.content$20658_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Footer$view,d:['io.cayla.mvvm.view','Footer','$at','content']};});
        })(Footer$view.$$.prototype);
    }
    return Footer$view;
}
exports.$init$Footer$view=$init$Footer$view;
$init$Footer$view();

//ClassDef H1 at elements.ceylon (25:0-31:0)
function H1$view(id$20659, classNames$20660, bindings$20661, content$20662, $$h1){
    $init$H1$view();
    if ($$h1===undefined)$$h1=new H1$view.$$;
    if(id$20659===undefined){id$20659=null;}
    $$h1.id$20659_=id$20659;
    if(classNames$20660===undefined){classNames$20660=$$$cl20381.getEmpty();}
    $$h1.classNames$20660_=classNames$20660;
    if(bindings$20661===undefined){bindings$20661=$$$cl20381.getEmpty();}
    $$h1.bindings$20661_=bindings$20661;
    if(content$20662===undefined){content$20662=$$$cl20381.getEmpty();}
    $$h1.content$20662_=content$20662;
    Element$view($$h1.id$20659,$$$cl20381.String("h1",2),$$h1.classNames$20660,$$h1.bindings$20661,$$h1.content$20662,$$h1);
    return $$h1;
}
H1$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','H1']};};
exports.H1$view=H1$view;
function $init$H1$view(){
    if (H1$view.$$===undefined){
        $$$cl20381.initTypeProto(H1$view,'io.cayla.mvvm.view::H1',$init$Element$view());
        (function($$h1){
            $$$cl20381.defineAttr($$h1,'id$20659',function(){return this.id$20659_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:H1$view,d:['io.cayla.mvvm.view','H1','$at','id']};});
            $$$cl20381.defineAttr($$h1,'classNames$20660',function(){return this.classNames$20660_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:H1$view,d:['io.cayla.mvvm.view','H1','$at','classNames']};});
            $$$cl20381.defineAttr($$h1,'bindings$20661',function(){return this.bindings$20661_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:H1$view,d:['io.cayla.mvvm.view','H1','$at','bindings']};});
            $$$cl20381.defineAttr($$h1,'content$20662',function(){return this.content$20662_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:H1$view,d:['io.cayla.mvvm.view','H1','$at','content']};});
        })(H1$view.$$.prototype);
    }
    return H1$view;
}
exports.$init$H1$view=$init$H1$view;
$init$H1$view();

//ClassDef Div at elements.ceylon (33:0-39:0)
function Div$view(id$20663, classNames$20664, bindings$20665, content$20666, $$div){
    $init$Div$view();
    if ($$div===undefined)$$div=new Div$view.$$;
    if(id$20663===undefined){id$20663=null;}
    $$div.id$20663_=id$20663;
    if(classNames$20664===undefined){classNames$20664=$$$cl20381.getEmpty();}
    $$div.classNames$20664_=classNames$20664;
    if(bindings$20665===undefined){bindings$20665=$$$cl20381.getEmpty();}
    $$div.bindings$20665_=bindings$20665;
    if(content$20666===undefined){content$20666=$$$cl20381.getEmpty();}
    $$div.content$20666_=content$20666;
    Element$view($$div.id$20663,$$$cl20381.String("div",3),$$div.classNames$20664,$$div.bindings$20665,$$div.content$20666,$$div);
    return $$div;
}
Div$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Div']};};
exports.Div$view=Div$view;
function $init$Div$view(){
    if (Div$view.$$===undefined){
        $$$cl20381.initTypeProto(Div$view,'io.cayla.mvvm.view::Div',$init$Element$view());
        (function($$div){
            $$$cl20381.defineAttr($$div,'id$20663',function(){return this.id$20663_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Div$view,d:['io.cayla.mvvm.view','Div','$at','id']};});
            $$$cl20381.defineAttr($$div,'classNames$20664',function(){return this.classNames$20664_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Div$view,d:['io.cayla.mvvm.view','Div','$at','classNames']};});
            $$$cl20381.defineAttr($$div,'bindings$20665',function(){return this.bindings$20665_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Div$view,d:['io.cayla.mvvm.view','Div','$at','bindings']};});
            $$$cl20381.defineAttr($$div,'content$20666',function(){return this.content$20666_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Div$view,d:['io.cayla.mvvm.view','Div','$at','content']};});
        })(Div$view.$$.prototype);
    }
    return Div$view;
}
exports.$init$Div$view=$init$Div$view;
$init$Div$view();

//ClassDef P at elements.ceylon (41:0-47:0)
function P$view(id$20667, classNames$20668, bindings$20669, content$20670, $$p){
    $init$P$view();
    if ($$p===undefined)$$p=new P$view.$$;
    if(id$20667===undefined){id$20667=null;}
    $$p.id$20667_=id$20667;
    if(classNames$20668===undefined){classNames$20668=$$$cl20381.getEmpty();}
    $$p.classNames$20668_=classNames$20668;
    if(bindings$20669===undefined){bindings$20669=$$$cl20381.getEmpty();}
    $$p.bindings$20669_=bindings$20669;
    if(content$20670===undefined){content$20670=$$$cl20381.getEmpty();}
    $$p.content$20670_=content$20670;
    Element$view($$p.id$20667,$$$cl20381.String("p",1),$$p.classNames$20668,$$p.bindings$20669,$$p.content$20670,$$p);
    return $$p;
}
P$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','P']};};
exports.P$view=P$view;
function $init$P$view(){
    if (P$view.$$===undefined){
        $$$cl20381.initTypeProto(P$view,'io.cayla.mvvm.view::P',$init$Element$view());
        (function($$p){
            $$$cl20381.defineAttr($$p,'id$20667',function(){return this.id$20667_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:P$view,d:['io.cayla.mvvm.view','P','$at','id']};});
            $$$cl20381.defineAttr($$p,'classNames$20668',function(){return this.classNames$20668_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:P$view,d:['io.cayla.mvvm.view','P','$at','classNames']};});
            $$$cl20381.defineAttr($$p,'bindings$20669',function(){return this.bindings$20669_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:P$view,d:['io.cayla.mvvm.view','P','$at','bindings']};});
            $$$cl20381.defineAttr($$p,'content$20670',function(){return this.content$20670_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:P$view,d:['io.cayla.mvvm.view','P','$at','content']};});
        })(P$view.$$.prototype);
    }
    return P$view;
}
exports.$init$P$view=$init$P$view;
$init$P$view();

//ClassDef Span at elements.ceylon (49:0-55:0)
function Span$view(id$20671, classNames$20672, bindings$20673, content$20674, $$span){
    $init$Span$view();
    if ($$span===undefined)$$span=new Span$view.$$;
    if(id$20671===undefined){id$20671=null;}
    $$span.id$20671_=id$20671;
    if(classNames$20672===undefined){classNames$20672=$$$cl20381.getEmpty();}
    $$span.classNames$20672_=classNames$20672;
    if(bindings$20673===undefined){bindings$20673=$$$cl20381.getEmpty();}
    $$span.bindings$20673_=bindings$20673;
    if(content$20674===undefined){content$20674=$$$cl20381.getEmpty();}
    $$span.content$20674_=content$20674;
    Element$view($$span.id$20671,$$$cl20381.String("span",4),$$span.classNames$20672,$$span.bindings$20673,$$span.content$20674,$$span);
    return $$span;
}
Span$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Span']};};
exports.Span$view=Span$view;
function $init$Span$view(){
    if (Span$view.$$===undefined){
        $$$cl20381.initTypeProto(Span$view,'io.cayla.mvvm.view::Span',$init$Element$view());
        (function($$span){
            $$$cl20381.defineAttr($$span,'id$20671',function(){return this.id$20671_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Span$view,d:['io.cayla.mvvm.view','Span','$at','id']};});
            $$$cl20381.defineAttr($$span,'classNames$20672',function(){return this.classNames$20672_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Span$view,d:['io.cayla.mvvm.view','Span','$at','classNames']};});
            $$$cl20381.defineAttr($$span,'bindings$20673',function(){return this.bindings$20673_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Span$view,d:['io.cayla.mvvm.view','Span','$at','bindings']};});
            $$$cl20381.defineAttr($$span,'content$20674',function(){return this.content$20674_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Span$view,d:['io.cayla.mvvm.view','Span','$at','content']};});
        })(Span$view.$$.prototype);
    }
    return Span$view;
}
exports.$init$Span$view=$init$Span$view;
$init$Span$view();

//ClassDef Strong at elements.ceylon (57:0-63:0)
function Strong$view(id$20675, classNames$20676, bindings$20677, content$20678, $$strong){
    $init$Strong$view();
    if ($$strong===undefined)$$strong=new Strong$view.$$;
    if(id$20675===undefined){id$20675=null;}
    $$strong.id$20675_=id$20675;
    if(classNames$20676===undefined){classNames$20676=$$$cl20381.getEmpty();}
    $$strong.classNames$20676_=classNames$20676;
    if(bindings$20677===undefined){bindings$20677=$$$cl20381.getEmpty();}
    $$strong.bindings$20677_=bindings$20677;
    if(content$20678===undefined){content$20678=$$$cl20381.getEmpty();}
    $$strong.content$20678_=content$20678;
    Element$view($$strong.id$20675,$$$cl20381.String("strong",6),$$strong.classNames$20676,$$strong.bindings$20677,$$strong.content$20678,$$strong);
    return $$strong;
}
Strong$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Strong']};};
exports.Strong$view=Strong$view;
function $init$Strong$view(){
    if (Strong$view.$$===undefined){
        $$$cl20381.initTypeProto(Strong$view,'io.cayla.mvvm.view::Strong',$init$Element$view());
        (function($$strong){
            $$$cl20381.defineAttr($$strong,'id$20675',function(){return this.id$20675_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Strong$view,d:['io.cayla.mvvm.view','Strong','$at','id']};});
            $$$cl20381.defineAttr($$strong,'classNames$20676',function(){return this.classNames$20676_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Strong$view,d:['io.cayla.mvvm.view','Strong','$at','classNames']};});
            $$$cl20381.defineAttr($$strong,'bindings$20677',function(){return this.bindings$20677_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Strong$view,d:['io.cayla.mvvm.view','Strong','$at','bindings']};});
            $$$cl20381.defineAttr($$strong,'content$20678',function(){return this.content$20678_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Strong$view,d:['io.cayla.mvvm.view','Strong','$at','content']};});
        })(Strong$view.$$.prototype);
    }
    return Strong$view;
}
exports.$init$Strong$view=$init$Strong$view;
$init$Strong$view();

//ClassDef Input at elements.ceylon (65:0-72:0)
function Input$view(name$20679, id$20680, classNames$20681, bindings$20682, content$20683, $$input){
    $init$Input$view();
    if ($$input===undefined)$$input=new Input$view.$$;
    if(name$20679===undefined){name$20679=null;}
    $$input.name$20679_=name$20679;
    if(id$20680===undefined){id$20680=null;}
    $$input.id$20680_=id$20680;
    if(classNames$20681===undefined){classNames$20681=$$$cl20381.getEmpty();}
    $$input.classNames$20681_=classNames$20681;
    if(bindings$20682===undefined){bindings$20682=$$$cl20381.getEmpty();}
    $$input.bindings$20682_=bindings$20682;
    if(content$20683===undefined){content$20683=$$$cl20381.getEmpty();}
    $$input.content$20683_=content$20683;
    Element$view($$input.id$20680,$$$cl20381.String("input",5),$$input.classNames$20681,$$input.bindings$20682,$$input.content$20683,$$input);
    return $$input;
}
Input$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Input']};};
exports.Input$view=Input$view;
function $init$Input$view(){
    if (Input$view.$$===undefined){
        $$$cl20381.initTypeProto(Input$view,'io.cayla.mvvm.view::Input',$init$Element$view());
        (function($$input){
            $$$cl20381.defineAttr($$input,'name$20679',function(){return this.name$20679_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','name']};});
            $$$cl20381.defineAttr($$input,'id$20680',function(){return this.id$20680_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','id']};});
            $$$cl20381.defineAttr($$input,'classNames$20681',function(){return this.classNames$20681_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','classNames']};});
            $$$cl20381.defineAttr($$input,'bindings$20682',function(){return this.bindings$20682_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','bindings']};});
            $$$cl20381.defineAttr($$input,'content$20683',function(){return this.content$20683_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','content']};});
        })(Input$view.$$.prototype);
    }
    return Input$view;
}
exports.$init$Input$view=$init$Input$view;
$init$Input$view();

//ClassDef InputText at elements.ceylon (74:0-82:0)
function InputText$view(name$20684, id$20685, classNames$20686, bindings$20687, content$20688, $$inputText){
    $init$InputText$view();
    if ($$inputText===undefined)$$inputText=new InputText$view.$$;
    $$inputText.name$20684_=name$20684;
    if(id$20685===undefined){id$20685=null;}
    $$inputText.id$20685_=id$20685;
    if(classNames$20686===undefined){classNames$20686=$$$cl20381.getEmpty();}
    $$inputText.classNames$20686_=classNames$20686;
    if(bindings$20687===undefined){bindings$20687=$$$cl20381.getEmpty();}
    $$inputText.bindings$20687_=bindings$20687;
    if(content$20688===undefined){content$20688=$$$cl20381.getEmpty();}
    $$inputText.content$20688_=content$20688;
    Element$view($$inputText.id$20685,$$$cl20381.String("input",5),$$inputText.classNames$20686,$$inputText.bindings$20687,$$inputText.content$20688,$$inputText);
    
    //AttributeDecl attrs at elements.ceylon (81:4-81:84)
    $$inputText.attrs$20689_=[$$$cl20381.Entry($$$cl20381.String("name",4),$$inputText.name$20684,{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}),$$$cl20381.Entry($$$cl20381.String("type",4),$$$cl20381.String("text",4),{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}})].reifyCeylonType({Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Nothing}});
    $$inputText.$prop$getAttrs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Null}}},$cont:InputText$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual(),$$$cl20381.$default()];},d:['io.cayla.mvvm.view','InputText','$at','attrs']};}};
    $$inputText.$prop$getAttrs.get=function(){return attrs};
    return $$inputText;
}
InputText$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','InputText']};};
exports.InputText$view=InputText$view;
function $init$InputText$view(){
    if (InputText$view.$$===undefined){
        $$$cl20381.initTypeProto(InputText$view,'io.cayla.mvvm.view::InputText',$init$Element$view());
        (function($$inputText){
            
            //AttributeDecl attrs at elements.ceylon (81:4-81:84)
            $$$cl20381.defineAttr($$inputText,'attrs',function(){return this.attrs$20689_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Null}}},$cont:InputText$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual(),$$$cl20381.$default()];},d:['io.cayla.mvvm.view','InputText','$at','attrs']};});
            $$$cl20381.defineAttr($$inputText,'name$20684',function(){return this.name$20684_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.String},$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','name']};});
            $$$cl20381.defineAttr($$inputText,'id$20685',function(){return this.id$20685_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','id']};});
            $$$cl20381.defineAttr($$inputText,'classNames$20686',function(){return this.classNames$20686_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','classNames']};});
            $$$cl20381.defineAttr($$inputText,'bindings$20687',function(){return this.bindings$20687_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','bindings']};});
            $$$cl20381.defineAttr($$inputText,'content$20688',function(){return this.content$20688_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','content']};});
        })(InputText$view.$$.prototype);
    }
    return InputText$view;
}
exports.$init$InputText$view=$init$InputText$view;
$init$InputText$view();

//ClassDef Button at elements.ceylon (84:0-98:0)
function Button$view(name$20690, id$20691, classNames$20692, bindings$20693, content$20694, $$button){
    $init$Button$view();
    if ($$button===undefined)$$button=new Button$view.$$;
    if(name$20690===undefined){name$20690=null;}
    $$button.name$20690_=name$20690;
    if(id$20691===undefined){id$20691=null;}
    $$button.id$20691_=id$20691;
    if(classNames$20692===undefined){classNames$20692=$$$cl20381.getEmpty();}
    $$button.classNames$20692_=classNames$20692;
    if(bindings$20693===undefined){bindings$20693=$$$cl20381.getEmpty();}
    $$button.bindings$20693_=bindings$20693;
    if(content$20694===undefined){content$20694=$$$cl20381.getEmpty();}
    $$button.content$20694_=content$20694;
    Element$view($$button.id$20691,$$$cl20381.String("button",6),$$button.classNames$20692,$$button.bindings$20693,$$button.content$20694,$$button);
    return $$button;
}
Button$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Button']};};
exports.Button$view=Button$view;
function $init$Button$view(){
    if (Button$view.$$===undefined){
        $$$cl20381.initTypeProto(Button$view,'io.cayla.mvvm.view::Button',$init$Element$view());
        (function($$button){
            
            //AttributeGetterDef attrs at elements.ceylon (91:4-97:4)
            $$$cl20381.defineAttr($$button,'attrs',function(){
                var $$button=this;
                var name$20695;
                if((name$20695=$$button.name$20690)!==null){
                    return [$$$cl20381.Entry($$$cl20381.String("name",4),name$20695,{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}})].reifyCeylonType({Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Nothing}});
                }else {
                    return $$$cl20381.getEmpty();
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Null}}},$cont:Button$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual(),$$$cl20381.$default()];},d:['io.cayla.mvvm.view','Button','$at','attrs']};});$$$cl20381.defineAttr($$button,'name$20690',function(){return this.name$20690_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','name']};});
            $$$cl20381.defineAttr($$button,'id$20691',function(){return this.id$20691_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','id']};});
            $$$cl20381.defineAttr($$button,'classNames$20692',function(){return this.classNames$20692_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','classNames']};});
            $$$cl20381.defineAttr($$button,'bindings$20693',function(){return this.bindings$20693_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','bindings']};});
            $$$cl20381.defineAttr($$button,'content$20694',function(){return this.content$20694_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','content']};});
        })(Button$view.$$.prototype);
    }
    return Button$view;
}
exports.$init$Button$view=$init$Button$view;
$init$Button$view();

//ClassDef A at elements.ceylon (100:0-114:0)
function A$view(id$20696, classNames$20697, bindings$20698, href$20699, content$20700, $$a){
    $init$A$view();
    if ($$a===undefined)$$a=new A$view.$$;
    if(id$20696===undefined){id$20696=null;}
    $$a.id$20696_=id$20696;
    if(classNames$20697===undefined){classNames$20697=$$$cl20381.getEmpty();}
    $$a.classNames$20697_=classNames$20697;
    if(bindings$20698===undefined){bindings$20698=$$$cl20381.getEmpty();}
    $$a.bindings$20698_=bindings$20698;
    if(href$20699===undefined){href$20699=null;}
    $$a.href$20699_=href$20699;
    if(content$20700===undefined){content$20700=$$$cl20381.getEmpty();}
    $$a.content$20700_=content$20700;
    Element$view($$a.id$20696,$$$cl20381.String("a",1),$$a.classNames$20697,$$a.bindings$20698,$$a.content$20700,$$a);
    return $$a;
}
A$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'href',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','A']};};
exports.A$view=A$view;
function $init$A$view(){
    if (A$view.$$===undefined){
        $$$cl20381.initTypeProto(A$view,'io.cayla.mvvm.view::A',$init$Element$view());
        (function($$a){
            
            //AttributeGetterDef attrs at elements.ceylon (107:8-113:8)
            $$$cl20381.defineAttr($$a,'attrs',function(){
                var $$a=this;
                var href$20701;
                if((href$20701=$$a.href$20699)!==null){
                    return [$$$cl20381.Entry($$$cl20381.String("href",4),href$20701,{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}})].reifyCeylonType({Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Nothing}});
                }else {
                    return $$$cl20381.getEmpty();
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Null}}},$cont:A$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual(),$$$cl20381.$default()];},d:['io.cayla.mvvm.view','A','$at','attrs']};});$$$cl20381.defineAttr($$a,'id$20696',function(){return this.id$20696_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:A$view,d:['io.cayla.mvvm.view','A','$at','id']};});
            $$$cl20381.defineAttr($$a,'classNames$20697',function(){return this.classNames$20697_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:A$view,d:['io.cayla.mvvm.view','A','$at','classNames']};});
            $$$cl20381.defineAttr($$a,'bindings$20698',function(){return this.bindings$20698_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:A$view,d:['io.cayla.mvvm.view','A','$at','bindings']};});
            $$$cl20381.defineAttr($$a,'href$20699',function(){return this.href$20699_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:A$view,d:['io.cayla.mvvm.view','A','$at','href']};});
            $$$cl20381.defineAttr($$a,'content$20700',function(){return this.content$20700_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:A$view,d:['io.cayla.mvvm.view','A','$at','content']};});
        })(A$view.$$.prototype);
    }
    return A$view;
}
exports.$init$A$view=$init$A$view;
$init$A$view();

//ClassDef CheckBox at elements.ceylon (116:0-130:0)
function CheckBox$view(name$20702, id$20703, classNames$20704, bindings$20705, content$20706, $$checkBox){
    $init$CheckBox$view();
    if ($$checkBox===undefined)$$checkBox=new CheckBox$view.$$;
    if(name$20702===undefined){name$20702=null;}
    $$checkBox.name$20702_=name$20702;
    if(id$20703===undefined){id$20703=null;}
    $$checkBox.id$20703_=id$20703;
    if(classNames$20704===undefined){classNames$20704=$$$cl20381.getEmpty();}
    $$checkBox.classNames$20704_=classNames$20704;
    if(bindings$20705===undefined){bindings$20705=$$$cl20381.getEmpty();}
    $$checkBox.bindings$20705_=bindings$20705;
    if(content$20706===undefined){content$20706=$$$cl20381.getEmpty();}
    $$checkBox.content$20706_=content$20706;
    Element$view($$checkBox.id$20703,$$$cl20381.String("input",5),$$checkBox.classNames$20704,$$checkBox.bindings$20705,$$checkBox.content$20706,$$checkBox);
    return $$checkBox;
}
CheckBox$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','CheckBox']};};
exports.CheckBox$view=CheckBox$view;
function $init$CheckBox$view(){
    if (CheckBox$view.$$===undefined){
        $$$cl20381.initTypeProto(CheckBox$view,'io.cayla.mvvm.view::CheckBox',$init$Element$view());
        (function($$checkBox){
            
            //AttributeGetterDef attrs at elements.ceylon (123:4-129:4)
            $$$cl20381.defineAttr($$checkBox,'attrs',function(){
                var $$checkBox=this;
                var name$20707;
                if((name$20707=$$checkBox.name$20702)!==null){
                    return [$$$cl20381.Entry($$$cl20381.String("name",4),name$20707,{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}),$$$cl20381.Entry($$$cl20381.String("type",4),$$$cl20381.String("checkbox",8),{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}})].reifyCeylonType({Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Nothing}});
                }else {
                    return [$$$cl20381.Entry($$$cl20381.String("type",4),$$$cl20381.String("checkbox",8),{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}})].reifyCeylonType({Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Nothing}});
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Null}}},$cont:CheckBox$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual(),$$$cl20381.$default()];},d:['io.cayla.mvvm.view','CheckBox','$at','attrs']};});$$$cl20381.defineAttr($$checkBox,'name$20702',function(){return this.name$20702_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','name']};});
            $$$cl20381.defineAttr($$checkBox,'id$20703',function(){return this.id$20703_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','id']};});
            $$$cl20381.defineAttr($$checkBox,'classNames$20704',function(){return this.classNames$20704_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','classNames']};});
            $$$cl20381.defineAttr($$checkBox,'bindings$20705',function(){return this.bindings$20705_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','bindings']};});
            $$$cl20381.defineAttr($$checkBox,'content$20706',function(){return this.content$20706_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','content']};});
        })(CheckBox$view.$$.prototype);
    }
    return CheckBox$view;
}
exports.$init$CheckBox$view=$init$CheckBox$view;
$init$CheckBox$view();

//ClassDef Ul at elements.ceylon (132:0-138:0)
function Ul$view(id$20708, classNames$20709, bindings$20710, content$20711, $$ul){
    $init$Ul$view();
    if ($$ul===undefined)$$ul=new Ul$view.$$;
    if(id$20708===undefined){id$20708=null;}
    $$ul.id$20708_=id$20708;
    if(classNames$20709===undefined){classNames$20709=$$$cl20381.getEmpty();}
    $$ul.classNames$20709_=classNames$20709;
    if(bindings$20710===undefined){bindings$20710=$$$cl20381.getEmpty();}
    $$ul.bindings$20710_=bindings$20710;
    if(content$20711===undefined){content$20711=$$$cl20381.getEmpty();}
    $$ul.content$20711_=content$20711;
    Element$view($$ul.id$20708,$$$cl20381.String("ul",2),$$ul.classNames$20709,$$ul.bindings$20710,$$ul.content$20711,$$ul);
    return $$ul;
}
Ul$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Ul']};};
exports.Ul$view=Ul$view;
function $init$Ul$view(){
    if (Ul$view.$$===undefined){
        $$$cl20381.initTypeProto(Ul$view,'io.cayla.mvvm.view::Ul',$init$Element$view());
        (function($$ul){
            $$$cl20381.defineAttr($$ul,'id$20708',function(){return this.id$20708_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Ul$view,d:['io.cayla.mvvm.view','Ul','$at','id']};});
            $$$cl20381.defineAttr($$ul,'classNames$20709',function(){return this.classNames$20709_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Ul$view,d:['io.cayla.mvvm.view','Ul','$at','classNames']};});
            $$$cl20381.defineAttr($$ul,'bindings$20710',function(){return this.bindings$20710_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Ul$view,d:['io.cayla.mvvm.view','Ul','$at','bindings']};});
            $$$cl20381.defineAttr($$ul,'content$20711',function(){return this.content$20711_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Ul$view,d:['io.cayla.mvvm.view','Ul','$at','content']};});
        })(Ul$view.$$.prototype);
    }
    return Ul$view;
}
exports.$init$Ul$view=$init$Ul$view;
$init$Ul$view();

//ClassDef Li at elements.ceylon (140:0-146:0)
function Li$view(id$20712, classNames$20713, bindings$20714, content$20715, $$li){
    $init$Li$view();
    if ($$li===undefined)$$li=new Li$view.$$;
    if(id$20712===undefined){id$20712=null;}
    $$li.id$20712_=id$20712;
    if(classNames$20713===undefined){classNames$20713=$$$cl20381.getEmpty();}
    $$li.classNames$20713_=classNames$20713;
    if(bindings$20714===undefined){bindings$20714=$$$cl20381.getEmpty();}
    $$li.bindings$20714_=bindings$20714;
    if(content$20715===undefined){content$20715=$$$cl20381.getEmpty();}
    $$li.content$20715_=content$20715;
    Element$view($$li.id$20712,$$$cl20381.String("li",2),$$li.classNames$20713,$$li.bindings$20714,$$li.content$20715,$$li);
    return $$li;
}
Li$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Li']};};
exports.Li$view=Li$view;
function $init$Li$view(){
    if (Li$view.$$===undefined){
        $$$cl20381.initTypeProto(Li$view,'io.cayla.mvvm.view::Li',$init$Element$view());
        (function($$li){
            $$$cl20381.defineAttr($$li,'id$20712',function(){return this.id$20712_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Li$view,d:['io.cayla.mvvm.view','Li','$at','id']};});
            $$$cl20381.defineAttr($$li,'classNames$20713',function(){return this.classNames$20713_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Li$view,d:['io.cayla.mvvm.view','Li','$at','classNames']};});
            $$$cl20381.defineAttr($$li,'bindings$20714',function(){return this.bindings$20714_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Li$view,d:['io.cayla.mvvm.view','Li','$at','bindings']};});
            $$$cl20381.defineAttr($$li,'content$20715',function(){return this.content$20715_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Li$view,d:['io.cayla.mvvm.view','Li','$at','content']};});
        })(Li$view.$$.prototype);
    }
    return Li$view;
}
exports.$init$Li$view=$init$Li$view;
$init$Li$view();

//ClassDef Label at elements.ceylon (148:0-154:0)
function Label$view(id$20716, classNames$20717, bindings$20718, content$20719, $$label){
    $init$Label$view();
    if ($$label===undefined)$$label=new Label$view.$$;
    if(id$20716===undefined){id$20716=null;}
    $$label.id$20716_=id$20716;
    if(classNames$20717===undefined){classNames$20717=$$$cl20381.getEmpty();}
    $$label.classNames$20717_=classNames$20717;
    if(bindings$20718===undefined){bindings$20718=$$$cl20381.getEmpty();}
    $$label.bindings$20718_=bindings$20718;
    if(content$20719===undefined){content$20719=$$$cl20381.getEmpty();}
    $$label.content$20719_=content$20719;
    Element$view($$label.id$20716,$$$cl20381.String("label",5),$$label.classNames$20717,$$label.bindings$20718,$$label.content$20719,$$label);
    return $$label;
}
Label$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Label']};};
exports.Label$view=Label$view;
function $init$Label$view(){
    if (Label$view.$$===undefined){
        $$$cl20381.initTypeProto(Label$view,'io.cayla.mvvm.view::Label',$init$Element$view());
        (function($$label){
            $$$cl20381.defineAttr($$label,'id$20716',function(){return this.id$20716_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Label$view,d:['io.cayla.mvvm.view','Label','$at','id']};});
            $$$cl20381.defineAttr($$label,'classNames$20717',function(){return this.classNames$20717_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Label$view,d:['io.cayla.mvvm.view','Label','$at','classNames']};});
            $$$cl20381.defineAttr($$label,'bindings$20718',function(){return this.bindings$20718_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Label$view,d:['io.cayla.mvvm.view','Label','$at','bindings']};});
            $$$cl20381.defineAttr($$label,'content$20719',function(){return this.content$20719_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Label$view,d:['io.cayla.mvvm.view','Label','$at','content']};});
        })(Label$view.$$.prototype);
    }
    return Label$view;
}
exports.$init$Label$view=$init$Label$view;
$init$Label$view();

//InterfaceDef ViewContext at ViewContext.ceylon (4:0-17:0)
function ViewContext$view($$viewContext){
}
ViewContext$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl20381.doc($$$cl20381.String("The view context provides interaction with the DOM as defined by the template.\n",79)),$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ViewContext']};};
exports.ViewContext$view=ViewContext$view;
function $init$ViewContext$view(){
    if (ViewContext$view.$$===undefined){
        $$$cl20381.initTypeProtoI(ViewContext$view,'io.cayla.mvvm.view::ViewContext');
        (function($$viewContext){
            
            //AttributeDecl template at ViewContext.ceylon (8:4-9:34)
            $$viewContext.$prop$getTemplate={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Element$view},$cont:ViewContext$view,$an:function(){return[$$$cl20381.doc($$$cl20381.String("The template as defined associated with this context",52)),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm.view','ViewContext','$at','template']};}};
            
            //AttributeDecl node at ViewContext.ceylon (11:4-12:30)
            $$viewContext.$prop$getNode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:ViewContext$view,$an:function(){return[$$$cl20381.doc($$$cl20381.String("The dom node instance of the template",37)),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm.view','ViewContext','$at','node']};}};
            
            //AttributeDecl createContent at ViewContext.ceylon (14:4-14:48)
            $$viewContext.$prop$getCreateContent={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$cont:ViewContext$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.formal(),$$$cl20381.variable()];},d:['io.cayla.mvvm.view','ViewContext','$at','createContent']};}};
            $$viewContext.$bind={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'model',$mt:'prm',$t:{t:ModelContext},$an:function(){return[];}}],$cont:ViewContext$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm.view','ViewContext','$m','bind']};}};
        })(ViewContext$view.$$.prototype);
    }
    return ViewContext$view;
}
exports.$init$ViewContext$view=$init$ViewContext$view;
$init$ViewContext$view();

//ClassDef View at View.ceylon (1:0-6:0)
function View$view($$view){
    $init$View$view();
    if ($$view===undefined)$$$cl20381.throwexc($$$cl20381.InvocationException$meta$model($$$cl20381.String("Cannot instantiate abstract class")),'?','?')
    return $$view;
}
View$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$cl20381.abstract()];},d:['io.cayla.mvvm.view','View']};};
exports.View$view=View$view;
function $init$View$view(){
    if (View$view.$$===undefined){
        $$$cl20381.initTypeProto(View$view,'io.cayla.mvvm.view::View',$$$cl20381.Basic);
        (function($$view){
            $$view.$apply={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ViewContext$view},$ps:[{$nm:'model',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],$cont:View$view,$an:function(){return[$$$cl20381.doc("Apply the current template element to the model"),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm.view','View','$m','apply']};}};
        })(View$view.$$.prototype);
    }
    return View$view;
}
exports.$init$View$view=$init$View$view;
$init$View$view();
var $$$cc20402=require('ceylon/collection/1.0.0/ceylon.collection-1.0.0');
$$$cl20381.$addmod$($$$cc20402,'ceylon.collection/1.0.0');

//ClassDef ModelContextImpl at ModelContextImpl.ceylon (6:0-35:0)
function ModelContextImpl$view(o, parent, $$modelContextImpl){
    $init$ModelContextImpl$view();
    if ($$modelContextImpl===undefined)$$modelContextImpl=new ModelContextImpl$view.$$;
    $$modelContextImpl.o_=o;
    if(parent===undefined){parent=null;}
    $$modelContextImpl.parent_=parent;
    ModelContext($$modelContextImpl);
    
    //AttributeDecl nodes at ModelContextImpl.ceylon (8:4-8:60)
    $$modelContextImpl.nodes$20720_=$$$cc20402.LinkedList(undefined,{Element:{t:DomNode$dom}});
    $$modelContextImpl.$prop$getNodes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:{t:DomNode$dom}}},$cont:ModelContextImpl$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ModelContextImpl','$at','nodes']};}};
    $$modelContextImpl.$prop$getNodes.get=function(){return nodes};
    return $$modelContextImpl;
}
ModelContextImpl$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'o',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[$$$cl20381.shared()];}},{$nm:'parent',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:ModelContext}]},$an:function(){return[$$$cl20381.shared()];}}],satisfies:[{t:ModelContext}],d:['io.cayla.mvvm.view','ModelContextImpl']};};
function $init$ModelContextImpl$view(){
    if (ModelContextImpl$view.$$===undefined){
        $$$cl20381.initTypeProto(ModelContextImpl$view,'io.cayla.mvvm.view::ModelContextImpl',$$$cl20381.Basic,$init$ModelContext());
        (function($$modelContextImpl){
            
            //AttributeDecl nodes at ModelContextImpl.ceylon (8:4-8:60)
            $$$cl20381.defineAttr($$modelContextImpl,'nodes',function(){return this.nodes$20720_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:{t:DomNode$dom}}},$cont:ModelContextImpl$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ModelContextImpl','$at','nodes']};});
            
            //MethodDef destroy at ModelContextImpl.ceylon (10:4-14:4)
            $$modelContextImpl.destroy=function destroy(){
                var $$modelContextImpl=this;
                //'for' statement at ModelContextImpl.ceylon (11:8-13:8)
                var it$20721 = $$modelContextImpl.nodes.reversed.iterator();
                var node$20722;while ((node$20722=it$20721.next())!==$$$cl20381.getFinished()){
                    node$20722.detach();
                }
            };$$modelContextImpl.destroy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:ModelContextImpl$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.view','ModelContextImpl','$m','destroy']};};
            
            //MethodDef createChild at ModelContextImpl.ceylon (16:4-18:4)
            $$modelContextImpl.createChild=function createChild(child$20723){
                var $$modelContextImpl=this;
                return ModelContextImpl$view(child$20723,$$modelContextImpl);
            };$$modelContextImpl.createChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ModelContext},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],$cont:ModelContextImpl$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.view','ModelContextImpl','$m','createChild']};};
            
            //MethodDef register at ModelContextImpl.ceylon (20:4-22:4)
            $$modelContextImpl.register=function register(node$20724){
                var $$modelContextImpl=this;
                $$modelContextImpl.nodes.add(node$20724);
            };$$modelContextImpl.register.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:ModelContextImpl$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ModelContextImpl','$m','register']};};
            
            //MethodDef resolve at ModelContextImpl.ceylon (24:4-33:4)
            $$modelContextImpl.resolve=function resolve($$$mptypes){
                var $$modelContextImpl=this;
                var o$20725;
                if($$$cl20381.isOfType((o$20725=$$modelContextImpl.o),$$$mptypes.Value)){
                    return o$20725;
                }else {
                    var parent$20726;
                    if((parent$20726=$$modelContextImpl.parent)!==null){
                        return parent$20726.resolve({Value:$$$mptypes.Value});
                    }else {
                        return null;
                    }
                }
            };$$modelContextImpl.resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},'Value']},$ps:[],$cont:ModelContextImpl$view,$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.doc($$$cl20381.String("Resolve a value against this binding context, the value can either be the current object or be resolved in an ancestor context.",127)),$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.view','ModelContextImpl','$m','resolve']};};
            $$$cl20381.defineAttr($$modelContextImpl,'o',function(){return this.o_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Object},$cont:ModelContextImpl$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ModelContextImpl','$at','o']};});
            $$$cl20381.defineAttr($$modelContextImpl,'parent',function(){return this.parent_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:ModelContext}]},$cont:ModelContextImpl$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ModelContextImpl','$at','parent']};});
        })(ModelContextImpl$view.$$.prototype);
    }
    return ModelContextImpl$view;
}
exports.$init$ModelContextImpl$view=$init$ModelContextImpl$view;
$init$ModelContextImpl$view();

//ClassDef ElementViewContext at ElementViewContext.ceylon (5:0-57:0)
function ElementViewContext$view(modelContext, node, template, parent$20727, $$elementViewContext){
    $init$ElementViewContext$view();
    if ($$elementViewContext===undefined)$$elementViewContext=new ElementViewContext$view.$$;
    $$elementViewContext.modelContext_=modelContext;
    $$elementViewContext.node_=node;
    $$elementViewContext.template_=template;
    if(parent$20727===undefined){parent$20727=null;}
    $$elementViewContext.parent$20727_=parent$20727;
    ViewContext$view($$elementViewContext);
    
    //AttributeDecl createContent at ElementViewContext.ceylon (8:4-8:55)
    $$elementViewContext.createContent$20728_=true;
    $$elementViewContext.$prop$getCreateContent={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$cont:ElementViewContext$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual(),$$$cl20381.variable()];},d:['io.cayla.mvvm.view','ElementViewContext','$at','createContent']};}};
    $$elementViewContext.$prop$getCreateContent.get=function(){return createContent};
    return $$elementViewContext;
}
ElementViewContext$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'modelContext',$mt:'prm',$t:{t:ModelContextImpl$view},$an:function(){return[$$$cl20381.shared()];}},{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];}},{$nm:'template',$mt:'prm',$t:{t:Element$view},$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];}},{$nm:'parent',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:ElementViewContext$view}]},$an:function(){return[];}}],satisfies:[{t:ViewContext$view}],d:['io.cayla.mvvm.view','ElementViewContext']};};
function $init$ElementViewContext$view(){
    if (ElementViewContext$view.$$===undefined){
        $$$cl20381.initTypeProto(ElementViewContext$view,'io.cayla.mvvm.view::ElementViewContext',$$$cl20381.Basic,$init$ViewContext$view());
        (function($$elementViewContext){
            
            //AttributeDecl createContent at ElementViewContext.ceylon (8:4-8:55)
            $$$cl20381.defineAttr($$elementViewContext,'createContent',function(){return this.createContent$20728_;},function(createContent$20729){return this.createContent$20728_=createContent$20729;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$cont:ElementViewContext$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual(),$$$cl20381.variable()];},d:['io.cayla.mvvm.view','ElementViewContext','$at','createContent']};});
            
            //MethodDef bind at ElementViewContext.ceylon (10:4-14:4)
            $$elementViewContext.$bind=function $bind(model$20730){
                var $$elementViewContext=this;
                //assert at ElementViewContext.ceylon (11:8-11:41)
                var model$20731;
                if (!($$$cl20381.isOfType((model$20731=model$20730),{t:ModelContextImpl$view}))) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'is ModelContextImpl model\' at ElementViewContext.ceylon (11:14-11:40)"),'11:8-11:41','ElementViewContext.ceylon'); }
                
                //AttributeDecl wrapper at ElementViewContext.ceylon (12:8-12:86)
                var wrapper$20732=ElementViewContext$view(model$20731,$$elementViewContext.node,$$elementViewContext.template,$$elementViewContext.parent$20727);
                wrapper$20732.initChildren$20733();
            };$$elementViewContext.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'model',$mt:'prm',$t:{t:ModelContext},$an:function(){return[];}}],$cont:ElementViewContext$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.view','ElementViewContext','$m','bind']};};
            
            //MethodDef register at ElementViewContext.ceylon (16:4-18:4)
            $$elementViewContext.register=function register(node$20734){
                var $$elementViewContext=this;
                $$elementViewContext.modelContext.register(node$20734);
            };$$elementViewContext.register.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:ElementViewContext$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ElementViewContext','$m','register']};};
            
            //MethodDef init at ElementViewContext.ceylon (20:4-39:4)
            $$elementViewContext.init=function init(){
                var $$elementViewContext=this;
                
                //AttributeDecl bindingContext at ElementViewContext.ceylon (21:8-21:65)
                var bindingContext$20735=BindingContext$binding($$elementViewContext.modelContext,$$elementViewContext);
                $$elementViewContext.node.setId($$elementViewContext.template.id);
                //'for' statement at ElementViewContext.ceylon (23:8-25:8)
                var it$20736 = $$elementViewContext.template.attrs.iterator();
                var attr$20737;while ((attr$20737=it$20736.next())!==$$$cl20381.getFinished()){
                    $$elementViewContext.node.setAttribute(attr$20737.key,attr$20737.item);
                }
                //'for' statement at ElementViewContext.ceylon (26:8-28:8)
                var it$20738 = $$elementViewContext.template.classNames.iterator();
                var className$20739;while ((className$20739=it$20738.next())!==$$$cl20381.getFinished()){
                    $$elementViewContext.node.addClass(className$20739);
                }
                var bindings$20740;
                if($$$cl20381.isOfType((bindings$20740=$$elementViewContext.template.bindings),{t:$$$cl20381.Sequential,a:{Element:{t:Binding$binding}}})){
                    //'for' statement at ElementViewContext.ceylon (30:12-32:12)
                    var it$20741 = bindings$20740.iterator();
                    var binding$20742;while ((binding$20742=it$20741.next())!==$$$cl20381.getFinished()){
                        binding$20742.init(bindingContext$20735);
                    }
                }else {
                    var binding$20743;
                    if($$$cl20381.isOfType((binding$20743=$$elementViewContext.template.bindings),{t:Binding$binding})){
                        binding$20743.init(bindingContext$20735);
                    }
                }
                if($$elementViewContext.createContent){
                    $$elementViewContext.initChildren$20733();
                }
            };$$elementViewContext.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:ElementViewContext$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ElementViewContext','$m','init']};};
            
            //MethodDef initChildren at ElementViewContext.ceylon (41:4-55:4)
            $$elementViewContext.initChildren$20733=function initChildren$20733(){
                var $$elementViewContext=this;
                //'for' statement at ElementViewContext.ceylon (42:8-54:8)
                var it$20744 = $$elementViewContext.template.content.iterator();
                var child$20745;while ((child$20745=it$20744.next())!==$$$cl20381.getFinished()){
                    //Switch statement at ElementViewContext.ceylon (43:12-53:12)
                    var case$20746=child$20745;
                    if ($$$cl20381.isOfType(child$20745,{t:$$$cl20381.String})) {
                        $$elementViewContext.node.addText(case$20746);
                    }else if ($$$cl20381.isOfType(child$20745,{t:Element$view})) {
                        
                        //AttributeDecl foo at ElementViewContext.ceylon (48:16-48:46)
                        var foo$20747=element$dom(case$20746.name);
                        $$elementViewContext.register(foo$20747);
                        
                        //AttributeDecl childContext at ElementViewContext.ceylon (50:16-50:100)
                        var childContext$20748=ElementViewContext$view($$elementViewContext.modelContext,foo$20747,case$20746,$$elementViewContext);
                        childContext$20748.init();
                        $$elementViewContext.node.addChild(foo$20747);
                    }//End switch statement at ElementViewContext.ceylon (43:12-53:12)
                }
            };$$elementViewContext.initChildren$20733.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:ElementViewContext$view,d:['io.cayla.mvvm.view','ElementViewContext','$m','initChildren']};};
            $$$cl20381.defineAttr($$elementViewContext,'modelContext',function(){return this.modelContext_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ModelContextImpl$view},$cont:ElementViewContext$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','ElementViewContext','$at','modelContext']};});
            $$$cl20381.defineAttr($$elementViewContext,'node',function(){return this.node_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:ElementViewContext$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.view','ElementViewContext','$at','node']};});
            $$$cl20381.defineAttr($$elementViewContext,'template',function(){return this.template_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Element$view},$cont:ElementViewContext$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.view','ElementViewContext','$at','template']};});
            $$$cl20381.defineAttr($$elementViewContext,'parent$20727',function(){return this.parent$20727_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:ElementViewContext$view}]},$cont:ElementViewContext$view,d:['io.cayla.mvvm.view','ElementViewContext','$at','parent']};});
        })(ElementViewContext$view.$$.prototype);
    }
    return ElementViewContext$view;
}
exports.$init$ElementViewContext$view=$init$ElementViewContext$view;
$init$ElementViewContext$view();

//TypeAliasDecl Bindings at Element.ceylon (4:0-4:44)
function Bindings$view(){var tmpvar$20749={t:'u', l:[{t:Binding$binding},{t:$$$cl20381.Sequential,a:{Element:{t:Binding$binding}}}]};tmpvar$20749.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Bindings']};};return tmpvar$20749;}
exports.Bindings$view=Bindings$view;

//ClassDef Element at Element.ceylon (6:0-23:0)
function Element$view(id, name, classNames, bindings, content, $$element){
    $init$Element$view();
    if ($$element===undefined)$$$cl20381.throwexc($$$cl20381.InvocationException$meta$model($$$cl20381.String("Cannot instantiate abstract class")),'?','?')
    $$element.id_=id;
    $$element.name_=name;
    $$element.classNames_=classNames;
    $$element.bindings_=bindings;
    $$element.content_=content;
    View$view($$element);
    
    //AttributeDecl attrs at Element.ceylon (13:4-13:49)
    $$element.attrs$20750_=$$$cl20381.getEmpty();
    $$element.$prop$getAttrs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Null}}},$cont:Element$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.$default()];},d:['io.cayla.mvvm.view','Element','$at','attrs']};}};
    $$element.$prop$getAttrs.get=function(){return attrs};
    return $$element;
}
Element$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:View$view},$ps:[{$nm:'id',$mt:'prm',$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[$$$cl20381.shared()];}},{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[$$$cl20381.shared()];}},{$nm:'classNames',$mt:'prm',$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$an:function(){return[$$$cl20381.shared()];}},{$nm:'bindings',$mt:'prm',$t:Bindings$view(),$an:function(){return[$$$cl20381.shared()];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$an:function(){return[$$$cl20381.shared()];}}],$an:function(){return[$$$cl20381.shared(),$$$cl20381.abstract()];},d:['io.cayla.mvvm.view','Element']};};
exports.Element$view=Element$view;
function $init$Element$view(){
    if (Element$view.$$===undefined){
        $$$cl20381.initTypeProto(Element$view,'io.cayla.mvvm.view::Element',$init$View$view());
        (function($$element){
            
            //AttributeDecl attrs at Element.ceylon (13:4-13:49)
            $$$cl20381.defineAttr($$element,'attrs',function(){return this.attrs$20750_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:$$$cl20381.Entry,a:{Item:{t:$$$cl20381.String},Key:{t:$$$cl20381.String}}},Absent:{t:$$$cl20381.Null}}},$cont:Element$view,$an:function(){return[$$$cl20381.shared(),$$$cl20381.$default()];},d:['io.cayla.mvvm.view','Element','$at','attrs']};});
            
            //MethodDef apply at Element.ceylon (15:4-22:4)
            $$element.$apply=function $apply(model$20751){
                var $$element=this;
                
                //AttributeDecl node at Element.ceylon (17:8-17:36)
                var node$20752=element$dom($$element.name);
                
                //AttributeDecl modelContext at Element.ceylon (18:8-18:69)
                var modelContext$20753=ModelContextImpl$view(model$20751,null);
                
                //AttributeDecl viewContext at Element.ceylon (19:8-19:85)
                var viewContext$20754=ElementViewContext$view(modelContext$20753,node$20752,$$element);
                viewContext$20754.init();
                return viewContext$20754;
            };$$element.$apply.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ViewContext$view},$ps:[{$nm:'model',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],$cont:Element$view,$an:function(){return[$$$cl20381.doc($$$cl20381.String("Apply the current template element to the model",47)),$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.view','Element','$m','apply']};};
            $$$cl20381.defineAttr($$element,'id',function(){return this.id_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$cont:Element$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Element','$at','id']};});
            $$$cl20381.defineAttr($$element,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.String},$cont:Element$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Element','$at','name']};});
            $$$cl20381.defineAttr($$element,'classNames',function(){return this.classNames_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.String}}},$cont:Element$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Element','$at','classNames']};});
            $$$cl20381.defineAttr($$element,'bindings',function(){return this.bindings_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Element$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Element','$at','bindings']};});
            $$$cl20381.defineAttr($$element,'content',function(){return this.content_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:'u', l:[{t:$$$cl20381.String},{t:Element$view}]},Absent:{t:$$$cl20381.Null}}},$cont:Element$view,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.view','Element','$at','content']};});
        })(Element$view.$$.prototype);
    }
    return Element$view;
}
exports.$init$Element$view=$init$Element$view;
$init$Element$view();
exports.$pkg$ans$io$cayla$mvvm$todo=function(){return[$$$cl20381.shared()];};
exports.$pkg$ans$io$cayla$mvvm=function(){return[$$$cl20381.shared()];};
exports.$mod$ans$=[];
exports.$mod$imps=function(){return{
'ceylon.collection/1.0.0':function(){return[$$$cl20381.shared()];}
};};

//ObjectDef log at log.ceylon (1:0-11:0)
function log$20755(){
    var $$log=new log$20755.$$;
    return $$log;
};log$20755.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','log']};};
function $init$log$20755(){
    if (log$20755.$$===undefined){
        $$$cl20381.initTypeProto(log$20755,'io.cayla.mvvm::log',$$$cl20381.Basic);
        (function($$log){
            
            //MethodDef debug at log.ceylon (2:4-10:4)
            $$log.debug=function debug(message$20756){
                var $$log=this;
                /*Begin dynamic block*/
                if((typeof isUndefined==='undefined'||isUndefined===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: isUndefined")),'4:16-4:26','log.ceylon'):isUndefined)((typeof console==='undefined'||console===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: console")),'4:28-4:34','log.ceylon'):console).debug)){
                    $$$cl20381.print($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("[DEBUG] ",8),message$20756.string]).string);
                }else {
                    (typeof console==='undefined'||console===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: console")),'7:16-7:22','log.ceylon'):console).debug(message$20756.valueOf());
                }/*End dynamic block*/
            };$$log.debug.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:log$20755,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','log','$m','debug']};};
        })(log$20755.$$.prototype);
    }
    return log$20755;
}
exports.$init$log$20755=$init$log$20755;
$init$log$20755();
var log$20757;
function getLog(){
    if (log$20757===undefined){log$20757=$init$log$20755()();log$20757.$$metamodel$$=getLog.$$metamodel$$;}
    return log$20757;
}
exports.getLog=getLog;
getLog.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:log$20755},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','log']};};
$prop$getLog={get:getLog,$$metamodel$$:getLog.$$metamodel$$};
exports.$prop$getLog=$prop$getLog;
exports.$pkg$ans$io$cayla$mvvm$expression=function(){return[$$$cl20381.shared()];};

//MethodDef method at MethodExpression.ceylon (3:0-7:0)
function method$expression(method$20758,$$$mptypes){
    return ClassExpression$expression({Type:$$$mptypes.Source}).method(method$20758,{Arguments:$$$mptypes.Arguments});
}
exports.method$expression=method$expression;
method$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:'Arguments'}},Source:'Source'}},$ps:[{$nm:'method',$mt:'prm',$t:{t:$$$cl20381.Method$meta$model,a:{Container:'Source',Type:{t:$$$cl20381.Anything},Arguments:'Arguments'}},$an:function(){return[];}}],$tp:{Source:{'satisfies':[{t:$$$cl20381.$Object}]},Arguments:{'satisfies':[{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.Anything}}}]}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','method']};};

//ClassDef MethodExpression at MethodExpression.ceylon (9:0-21:0)
function MethodExpression$expression(m$20759, parent$20760, $$targs$$,$$methodExpression){
    $init$MethodExpression$expression();
    if ($$methodExpression===undefined)$$methodExpression=new MethodExpression$expression.$$;
    $$$cl20381.set_type_args($$methodExpression,$$targs$$);
    $$methodExpression.m$20759_=m$20759;
    $$methodExpression.parent$20760_=parent$20760;
    Expression$expression($$methodExpression.$$targs$$===undefined?$$targs$$:{Type:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:$$methodExpression.$$targs$$.Arguments}},Source:$$methodExpression.$$targs$$.Source},$$methodExpression);
    $$$cl20381.add_type_arg($$methodExpression,'Type',{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:$$methodExpression.$$targs$$.Arguments}});
    return $$methodExpression;
}
MethodExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'m',$mt:'prm',$t:{t:$$$cl20381.Method$meta$model,a:{Container:'Container',Type:{t:$$$cl20381.Anything},Arguments:'Arguments'}},$an:function(){return[];}},{$nm:'parent',$mt:'prm',$t:{t:Expression$expression,a:{Type:'Container',Source:'Source'}},$an:function(){return[];}}],$tp:{Container:{'var':'out','satisfies':[{t:$$$cl20381.$Object}]},Source:{'satisfies':[{t:$$$cl20381.$Object}]},Arguments:{'var':'in','satisfies':[{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.Anything}}}]}},satisfies:[{t:Expression$expression,a:{Type:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:'Arguments'}},Source:'Source'}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','MethodExpression']};};
exports.MethodExpression$expression=MethodExpression$expression;
function $init$MethodExpression$expression(){
    if (MethodExpression$expression.$$===undefined){
        $$$cl20381.initTypeProto(MethodExpression$expression,'io.cayla.mvvm.expression::MethodExpression',$$$cl20381.Basic,$init$Expression$expression());
        (function($$methodExpression){
            
            //MethodDef traverse at MethodExpression.ceylon (17:4-20:4)
            $$methodExpression.traverse=function traverse(source$20761){
                var $$methodExpression=this;
                
                //AttributeDecl t at MethodExpression.ceylon (18:8-18:45)
                var t$20762=$$methodExpression.parent$20760.traverse(source$20761);
                return $$methodExpression.m$20759.$bind(t$20762);
            };$$methodExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:'Arguments'}},$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:MethodExpression$expression,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.expression','MethodExpression','$m','traverse']};};
            $$$cl20381.defineAttr($$methodExpression,'m$20759',function(){return this.m$20759_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Method$meta$model,a:{Container:'Container',Type:{t:$$$cl20381.Anything},Arguments:'Arguments'}},$cont:MethodExpression$expression,d:['io.cayla.mvvm.expression','MethodExpression','$at','m']};});
            $$$cl20381.defineAttr($$methodExpression,'parent$20760',function(){return this.parent$20760_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:'Container',Source:'Source'}},$cont:MethodExpression$expression,d:['io.cayla.mvvm.expression','MethodExpression','$at','parent']};});
        })(MethodExpression$expression.$$.prototype);
    }
    return MethodExpression$expression;
}
exports.$init$MethodExpression$expression=$init$MethodExpression$expression;
$init$MethodExpression$expression();

//InterfaceDef Expression at Expression.ceylon (4:0-35:0)
function Expression$expression($$targs$$,$$expression){
    $$$cl20381.set_type_args($$expression,$$targs$$);
}
Expression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Type:{'var':'out','satisfies':[{t:$$$cl20381.$Object}]},Source:{'satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','Expression']};};
exports.Expression$expression=Expression$expression;
function $init$Expression$expression(){
    if (Expression$expression.$$===undefined){
        $$$cl20381.initTypeProtoI(Expression$expression,'io.cayla.mvvm.expression::Expression');
        (function($$expression){
            $$expression.traverse={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Type',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:Expression$expression,$an:function(){return[$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm.expression','Expression','$m','traverse']};}};
            //MethodDef attribute at Expression.ceylon (10:4-18:4)
            $$expression.attribute=function attribute(attribute$20763,$$$mptypes){
                var $$expression=this;
                
                //MethodDef f at Expression.ceylon (11:8-16:8)
                function f$20764(source$20765){
                    
                    //AttributeDecl t at Expression.ceylon (12:12-12:37)
                    var t$20766=$$expression.traverse(source$20765);
                    
                    //AttributeDecl binding at Expression.ceylon (13:12-13:45)
                    var binding$20767=attribute$20763.$bind(t$20766);
                    
                    //AttributeDecl p at Expression.ceylon (14:12-14:35)
                    var p$20768=binding$20767.$get();
                    return p$20768;
                };f$20764.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],d:['io.cayla.mvvm.expression','Expression','$m','attribute','$m','f']};};
                return AttributeExpression$expression($$$cl20381.$JsCallable(f$20764,[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],{Return:$$$mptypes.Value,Arguments:{t:'T', l:[$$expression.$$targs$$.Source]}}),{Value:$$$mptypes.Value,Source:$$expression.$$targs$$.Source});
            };$$expression.attribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:AttributeExpression$expression,a:{Value:'Value',Source:'Source'}},$ps:[{$nm:'attribute',$mt:'prm',$t:{t:$$$cl20381.Attribute$meta$model,a:{Container:'Type',Set:{t:$$$cl20381.Nothing},Get:'Value'}},$an:function(){return[];}}],$cont:Expression$expression,$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','Expression','$m','attribute']};};
            
            //MethodDef method at Expression.ceylon (20:4-22:4)
            $$expression.method=function method(method$20769,$$$mptypes){
                var $$expression=this;
                return MethodExpression$expression(method$20769,$$expression,{Container:$$expression.$$targs$$.Type,Arguments:$$$mptypes.Arguments,Source:$$expression.$$targs$$.Source});
            };$$expression.method.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:MethodExpression$expression,a:{Container:'Type',Arguments:'Arguments',Source:'Source'}},$ps:[{$nm:'method',$mt:'prm',$t:{t:$$$cl20381.Method$meta$model,a:{Container:'Type',Type:{t:$$$cl20381.Anything},Arguments:'Arguments'}},$an:function(){return[];}}],$cont:Expression$expression,$tp:{Arguments:{'satisfies':[{t:$$$cl20381.Sequential,a:{Element:{t:$$$cl20381.Anything}}}]}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','Expression','$m','method']};};
            
            //MethodDef bindTo at Expression.ceylon (24:4-34:4)
            $$expression.bindTo=function bindTo(handler$20770){
                var $$expression=this;
                
                //ObjectDef impl at Expression.ceylon (25:8-32:8)
                function impl$20771(){
                    var $$impl$20771=new impl$20771.$$;
                    Binding$binding($$impl$20771);
                    return $$impl$20771;
                };impl$20771.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Binding$binding},d:['io.cayla.mvvm.expression','Expression','$m','bindTo','$o','impl']};};
                function $init$impl$20771(){
                    if (impl$20771.$$===undefined){
                        $$$cl20381.initTypeProto(impl$20771,'io.cayla.mvvm.expression::Expression.bindTo.impl',$init$Binding$binding());
                        (function($$impl$20771){
                            
                            //MethodDef init at Expression.ceylon (26:12-31:12)
                            $$impl$20771.init=function init(context$20772){
                                var $$impl$20771=this;
                                var s$20773;
                                if((s$20773=context$20772.model.resolve({Value:$$expression.$$targs$$.Source}))!==null){
                                    
                                    //AttributeDecl f at Expression.ceylon (28:20-28:40)
                                    var f$20774=$$expression.traverse(s$20773);
                                    handler$20770.init(f$20774,context$20772);
                                }
                            };$$impl$20771.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:impl$20771,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.expression','Expression','$m','bindTo','$o','impl','$m','init']};};
                        })(impl$20771.$$.prototype);
                    }
                    return impl$20771;
                }
                $init$impl$20771();
                var impl$20775;
                function getImpl$20775(){
                    if (impl$20775===undefined){impl$20775=$init$impl$20771()();impl$20775.$$metamodel$$=getImpl$20775.$$metamodel$$;}
                    return impl$20775;
                }
                getImpl$20775.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$20771},d:['io.cayla.mvvm.expression','Expression','$m','bindTo','$o','impl']};};
                $prop$getImpl$20775={get:getImpl$20775,$$metamodel$$:getImpl$20775.$$metamodel$$};
                return getImpl$20775();
            };$$expression.bindTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binding$binding},$ps:[{$nm:'handler',$mt:'prm',$t:{t:Binder$binding,a:{Value:'Type'}},$an:function(){return[];}}],$cont:Expression$expression,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','Expression','$m','bindTo']};};
        })(Expression$expression.$$.prototype);
    }
    return Expression$expression;
}
exports.$init$Expression$expression=$init$Expression$expression;
$init$Expression$expression();

//ClassDef ClassExpression at ClassExpression.ceylon (1:0-6:0)
function ClassExpression$expression($$targs$$,$$classExpression){
    $init$ClassExpression$expression();
    if ($$classExpression===undefined)$$classExpression=new ClassExpression$expression.$$;
    $$$cl20381.set_type_args($$classExpression,$$targs$$);
    Expression$expression($$classExpression.$$targs$$===undefined?$$targs$$:{Type:$$classExpression.$$targs$$.Type,Source:$$classExpression.$$targs$$.Type},$$classExpression);
    return $$classExpression;
}
ClassExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],$tp:{Type:{'satisfies':[{t:$$$cl20381.$Object}]}},satisfies:[{t:Expression$expression,a:{Type:'Type',Source:'Type'}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','ClassExpression']};};
exports.ClassExpression$expression=ClassExpression$expression;
function $init$ClassExpression$expression(){
    if (ClassExpression$expression.$$===undefined){
        $$$cl20381.initTypeProto(ClassExpression$expression,'io.cayla.mvvm.expression::ClassExpression',$$$cl20381.Basic,$init$Expression$expression());
        (function($$classExpression){
            
            //MethodDef traverse at ClassExpression.ceylon (3:4-5:4)
            $$classExpression.traverse=function traverse(source$20776){
                var $$classExpression=this;
                return source$20776;
            };$$classExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Type',$ps:[{$nm:'source',$mt:'prm',$t:'Type',$an:function(){return[];}}],$cont:ClassExpression$expression,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.expression','ClassExpression','$m','traverse']};};
        })(ClassExpression$expression.$$.prototype);
    }
    return ClassExpression$expression;
}
exports.$init$ClassExpression$expression=$init$ClassExpression$expression;
$init$ClassExpression$expression();

//MethodDef attribute at AttributeExpression.ceylon (3:0-7:0)
function attribute$expression(attr$20777,$$$mptypes){
    return ClassExpression$expression({Type:$$$mptypes.Source}).attribute(attr$20777,{Value:$$$mptypes.Value});
}
exports.attribute$expression=attribute$expression;
attribute$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:'Value',Source:'Source'}},$ps:[{$nm:'attr',$mt:'prm',$t:{t:$$$cl20381.Attribute$meta$model,a:{Container:'Source',Set:{t:$$$cl20381.Nothing},Get:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]},Source:{'satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','attribute']};};

//ClassDef AttributeExpression at AttributeExpression.ceylon (9:0-17:0)
function AttributeExpression$expression(f$20778, $$targs$$,$$attributeExpression){
    $init$AttributeExpression$expression();
    if ($$attributeExpression===undefined)$$attributeExpression=new AttributeExpression$expression.$$;
    $$$cl20381.set_type_args($$attributeExpression,$$targs$$);
    $$attributeExpression.f$20778_=f$20778;
    Expression$expression($$attributeExpression.$$targs$$===undefined?$$targs$$:{Type:$$attributeExpression.$$targs$$.Value,Source:$$attributeExpression.$$targs$$.Source},$$attributeExpression);
    return $$attributeExpression;
}
AttributeExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'f',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:'Value',Arguments:{t:'T',l:[{$t:'Source'}]}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]},Source:{'satisfies':[{t:$$$cl20381.$Object}]}},satisfies:[{t:Expression$expression,a:{Type:'Value',Source:'Source'}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.expression','AttributeExpression']};};
exports.AttributeExpression$expression=AttributeExpression$expression;
function $init$AttributeExpression$expression(){
    if (AttributeExpression$expression.$$===undefined){
        $$$cl20381.initTypeProto(AttributeExpression$expression,'io.cayla.mvvm.expression::AttributeExpression',$$$cl20381.Basic,$init$Expression$expression());
        (function($$attributeExpression){
            
            //MethodDef traverse at AttributeExpression.ceylon (14:4-16:4)
            $$attributeExpression.traverse=function traverse(source$20779){
                var $$attributeExpression=this;
                return $$attributeExpression.f$20778(source$20779);
            };$$attributeExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:AttributeExpression$expression,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.expression','AttributeExpression','$m','traverse']};};
            $$$cl20381.defineAttr($$attributeExpression,'f$20778',function(){return this.f$20778_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Callable,a:{Return:'Value',Arguments:{t:'T',l:[{$t:'Source'}]}}},$cont:AttributeExpression$expression,d:['io.cayla.mvvm.expression','AttributeExpression','$at','f']};});
        })(AttributeExpression$expression.$$.prototype);
    }
    return AttributeExpression$expression;
}
exports.$init$AttributeExpression$expression=$init$AttributeExpression$expression;
$init$AttributeExpression$expression();
exports.$pkg$ans$io$cayla$mvvm$dom=function(){return[$$$cl20381.shared()];};

//MethodDef element at element.ceylon (1:0-8:0)
function element$dom(name$20780){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at element.ceylon (3:8-3:51)
    var peer$20781=(typeof document==='undefined'||document===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: document")),'3:23-3:30','element.ceylon'):document).createElement(name$20780.valueOf());
    
    //AttributeDecl node at element.ceylon (4:8-4:34)
    var node$20782=DomNode$dom(peer$20781);
    peer$20781.ref=node$20782;
    return node$20782;
    /*End dynamic block*/
}
exports.element$dom=element$dom;
element$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','element']};};

//MethodDef text at element.ceylon (10:0-17:0)
function text$dom(cdata$20783){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at element.ceylon (12:8-12:53)
    var peer$20784=(typeof document==='undefined'||document===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: document")),'12:23-12:30','element.ceylon'):document).createTextNode(cdata$20783.valueOf());
    
    //AttributeDecl node at element.ceylon (13:8-13:34)
    var node$20785=DomNode$dom(peer$20784);
    peer$20784.ref=node$20785;
    return node$20785;
    /*End dynamic block*/
}
exports.text$dom=text$dom;
text$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'cdata',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','text']};};

//MethodDef byId at byId.ceylon (1:0-10:0)
function byId$dom(id$20786){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at byId.ceylon (3:8-3:50)
    var peer$20787=(typeof document==='undefined'||document===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: document")),'3:23-3:30','byId.ceylon'):document).getElementById(id$20786.valueOf());
    var peer$20788;
    if((peer$20788=peer$20787)!==null){
        return (tmpvar$20789=wrap$dom(peer$20788),$$$cl20381.isOfType(tmpvar$20789,{t:$$$cl20381.Anything})?tmpvar$20789:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'5:19-5:28','byId.ceylon'));
    }else {
        throw $$$cl20381.wrapexc($$$cl20381.Exception($$$cl20381.String("handle me gracefully",20)),'7:12-7:51','io/cayla/mvvm/dom/byId.ceylon');
    }/*End dynamic block*/
}
exports.byId$dom=byId$dom;
byId$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'id',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','byId']};};

//MethodDef wrap at DomNode.ceylon (3:0-14:0)
function wrap$dom(nodePeer$20790){
    /*Begin dynamic block*/
    
    //AttributeDecl ref at DomNode.ceylon (5:8-5:34)
    var ref$20791=nodePeer$20790.ref;
    if((typeof isUndefined==='undefined'||isUndefined===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: isUndefined")),'6:12-6:22','DomNode.ceylon'):isUndefined)(ref$20791)){
        
        //AttributeDecl node at DomNode.ceylon (7:12-7:42)
        var node$20792=DomNode$dom(nodePeer$20790);
        nodePeer$20790.ref=node$20792;
        return node$20792;
    }else {
        return (tmpvar$20793=ref$20791,$$$cl20381.isOfType(tmpvar$20793,{t:$$$cl20381.Anything})?tmpvar$20793:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'11:19-11:21','DomNode.ceylon'));
    }/*End dynamic block*/
};wrap$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'nodePeer',$mt:'prm',$t:{t:$$$cl20381.Anything},$an:function(){return[];}}],d:['io.cayla.mvvm.dom','wrap']};};

//MethodDef _matchesSelector at DomNode.ceylon (16:0-31:0)
function _matchesSelector$dom(nodePeer$20794,selector$20795){
    /*Begin dynamic block*/
    
    //AttributeDecl parentPeer at DomNode.ceylon (18:8-18:48)
    var parentPeer$20796=nodePeer$20794.parentNode;
    if(($$$cl20381.exists(parentPeer$20796)&&(tmpvar$20797=parentPeer$20796.nodeType,tmpvar$20798=(1),(tmpvar$20797.equals&&tmpvar$20797.equals(tmpvar$20798))||tmpvar$20797===tmpvar$20798))){
        
        //AttributeDecl selectedPeers at DomNode.ceylon (20:12-20:73)
        var selectedPeers$20799=parentPeer$20796.querySelectorAll(selector$20795.valueOf());
        
        //AttributeDecl length at DomNode.ceylon (21:12-21:49)
        var length$20800=selectedPeers$20799.length;
        //'for' statement at DomNode.ceylon (22:12-27:12)
        var it$20801 = (function(){var tmpvar$20803=length$20800;
        if (tmpvar$20803>0){
        var tmpvar$20804=(0);
        var tmpvar$20805=tmpvar$20804;
        for (var i=1; i<tmpvar$20803; i++){tmpvar$20805=tmpvar$20805.successor;}
        return $$$cl20381.Range(tmpvar$20804,tmpvar$20805,{})
        }else return $$$cl20381.getEmpty();}()).iterator();
        var i$20802;while ((i$20802=it$20801.next())!==$$$cl20381.getFinished()){
            
            //AttributeDecl selectedPeer at DomNode.ceylon (23:16-23:60)
            var selectedPeer$20806=selectedPeers$20799.item(i$20802);
            if((tmpvar$20807=selectedPeer$20806,tmpvar$20808=nodePeer$20794,(tmpvar$20807.equals&&tmpvar$20807.equals(tmpvar$20808))||tmpvar$20807===tmpvar$20808)){
                return true;
            }
        }
    }return false;
    /*End dynamic block*/
};_matchesSelector$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$ps:[{$nm:'nodePeer',$mt:'prm',$t:{t:$$$cl20381.Anything},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],d:['io.cayla.mvvm.dom','_matchesSelector']};};

//MethodDef querySelectorAll at DomNode.ceylon (33:0-44:0)
function querySelectorAll$dom(selector$20809){
    /*Begin dynamic block*/
    
    //AttributeDecl selected at DomNode.ceylon (35:8-35:60)
    var selected$20810=$$$cc20402.LinkedList(undefined,{Element:{t:DomNode$dom}});
    
    //AttributeDecl nodePeers at DomNode.ceylon (36:8-36:63)
    var nodePeers$20811=(typeof document==='undefined'||document===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: document")),'36:28-36:35','DomNode.ceylon'):document).querySelectorAll(selector$20809.valueOf());
    
    //AttributeDecl length at DomNode.ceylon (37:8-37:41)
    var length$20812=nodePeers$20811.length;
    //'for' statement at DomNode.ceylon (38:8-41:8)
    var it$20813 = (function(){var tmpvar$20815=length$20812;
    if (tmpvar$20815>0){
    var tmpvar$20816=(0);
    var tmpvar$20817=tmpvar$20816;
    for (var i=1; i<tmpvar$20815; i++){tmpvar$20817=tmpvar$20817.successor;}
    return $$$cl20381.Range(tmpvar$20816,tmpvar$20817,{})
    }else return $$$cl20381.getEmpty();}()).iterator();
    var i$20814;while ((i$20814=it$20813.next())!==$$$cl20381.getFinished()){
        
        //AttributeDecl nodePeer at DomNode.ceylon (39:12-39:48)
        var nodePeer$20818=nodePeers$20811.item(i$20814);
        selected$20810.add((tmpvar$20819=wrap$dom(nodePeer$20818),$$$cl20381.isOfType(tmpvar$20819,{/*NO PARENT*/t:$$$cl20381.Anything})?tmpvar$20819:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'40:25-40:38','DomNode.ceylon')));
    }return selected$20810;
    /*End dynamic block*/
}
exports.querySelectorAll$dom=querySelectorAll$dom;
querySelectorAll$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:DomNode$dom},Absent:{t:$$$cl20381.Null}}},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','querySelectorAll']};};

//ClassDef DomNode at DomNode.ceylon (46:0-296:0)
function DomNode$dom(peer$20820, $$domNode){
    $init$DomNode$dom();
    if ($$domNode===undefined)$$domNode=new DomNode$dom.$$;
    $$domNode.peer$20820_=peer$20820;
    return $$domNode;
}
DomNode$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'peer',$mt:'prm',$t:{t:$$$cl20381.Anything},$an:function(){return[$$$cl20381.variable(),$$$cl20381.shared(),$$$cl20381.actual()];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode']};};
exports.DomNode$dom=DomNode$dom;
function $init$DomNode$dom(){
    if (DomNode$dom.$$===undefined){
        $$$cl20381.initTypeProto(DomNode$dom,'io.cayla.mvvm.dom::DomNode',$$$cl20381.Basic);
        (function($$domNode){
            
            //MethodDef addText at DomNode.ceylon (48:4-50:4)
            $$domNode.addText=function addText(cdata$20821){
                var $$domNode=this;
                return $$domNode.addChild(text$dom(cdata$20821));
            };$$domNode.addText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'cdata',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addText']};};
            
            //MethodDef getChildren at DomNode.ceylon (52:4-63:4)
            $$domNode.getChildren=function getChildren(){
                var $$domNode=this;
                
                //AttributeDecl children at DomNode.ceylon (53:8-53:60)
                var children$20822=$$$cc20402.LinkedList(undefined,{Element:{t:DomNode$dom}});
                /*Begin dynamic block*/
                
                //AttributeDecl childNodes at DomNode.ceylon (55:12-55:48)
                var childNodes$20823=$$domNode.peer$20820.childNodes;
                
                //AttributeDecl length at DomNode.ceylon (56:12-56:46)
                var length$20824=childNodes$20823.length;
                //'for' statement at DomNode.ceylon (57:12-60:12)
                var it$20825 = (function(){var tmpvar$20827=length$20824;
                if (tmpvar$20827>0){
                var tmpvar$20828=(0);
                var tmpvar$20829=tmpvar$20828;
                for (var i=1; i<tmpvar$20827; i++){tmpvar$20829=tmpvar$20829.successor;}
                return $$$cl20381.Range(tmpvar$20828,tmpvar$20829,{})
                }else return $$$cl20381.getEmpty();}()).iterator();
                var i$20826;while ((i$20826=it$20825.next())!==$$$cl20381.getFinished()){
                    
                    //AttributeDecl childPeer at DomNode.ceylon (58:16-58:54)
                    var childPeer$20830=childNodes$20823.item(i$20826);
                    children$20822.add((tmpvar$20831=childPeer$20830.ref,$$$cl20381.isOfType(tmpvar$20831,{/*NO PARENT*/t:$$$cl20381.Anything})?tmpvar$20831:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'59:29-59:41','DomNode.ceylon')));
                }/*End dynamic block*/
                return children$20822;
            };$$domNode.getChildren.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Iterable,a:{Element:{t:DomNode$dom},Absent:{t:$$$cl20381.Null}}},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','getChildren']};};
            
            //MethodDef addChild at DomNode.ceylon (65:4-74:4)
            $$domNode.addChild=function addChild(node$20832){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl nodePeer at DomNode.ceylon (67:12-67:40)
                var nodePeer$20833=node$20832.peer$20820;
                nodePeer$20833.ref=null;
                
                //AttributeDecl childPeer at DomNode.ceylon (69:12-69:58)
                var childPeer$20834=$$domNode.peer$20820.appendChild(nodePeer$20833);
                childPeer$20834.ref=node$20832;
                node$20832.peer$20820=childPeer$20834;
                return node$20832;
                /*End dynamic block*/
            };$$domNode.addChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addChild']};};
            
            //MethodDef insertBefore at DomNode.ceylon (76:4-91:4)
            $$domNode.insertBefore$defs$nextSibling=function(node$20835,nextSibling$20836){var $$domNode=this;
            return null;};
            $$domNode.insertBefore=function insertBefore(node$20835,nextSibling$20836){
                var $$domNode=this;
                if(nextSibling$20836===undefined){nextSibling$20836=$$domNode.insertBefore$defs$nextSibling(node$20835,nextSibling$20836);}
                /*Begin dynamic block*/
                
                //AttributeDecl nodePeer at DomNode.ceylon (78:12-78:40)
                var nodePeer$20837=node$20835.peer$20820;
                nodePeer$20837.ref=null;
                
                //AttributeDecl nextSiblingPeer at DomNode.ceylon (80:12-80:35)
                var nextSiblingPeer$20838;
                var nextSibling$20839;
                if((nextSibling$20839=nextSibling$20836)!==null){
                    nextSiblingPeer$20838=nextSibling$20839.peer$20820;
                }else {
                    nextSiblingPeer$20838=null;
                }
                //AttributeDecl childPeer at DomNode.ceylon (86:12-86:76)
                var childPeer$20840=$$domNode.peer$20820.insertBefore(nodePeer$20837,nextSiblingPeer$20838);
                childPeer$20840.ref=node$20835;
                node$20835.peer$20820=childPeer$20840;
                return node$20835;
                /*End dynamic block*/
            };$$domNode.insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'nextSibling',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:DomNode$dom}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','insertBefore']};};
            
            //MethodDef addElement at DomNode.ceylon (93:4-95:4)
            $$domNode.addElement=function addElement(name$20841){
                var $$domNode=this;
                return $$domNode.addChild(element$dom(name$20841));
            };$$domNode.addElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addElement']};};
            
            //MethodDef setId at DomNode.ceylon (97:4-101:4)
            $$domNode.setId=function setId(id$20842){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$20820.id=id$20842;
                /*End dynamic block*/
            };$$domNode.setId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'id',$mt:'prm',$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setId']};};
            
            //MethodDef getAttribute at DomNode.ceylon (103:4-107:4)
            $$domNode.getAttribute=function getAttribute(name$20843){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$20844=$$domNode.peer$20820.getAttribute(name$20843.valueOf()),$$$cl20381.isOfType(tmpvar$20844,{t:$$$cl20381.Anything})?tmpvar$20844:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'105:19-105:41','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','getAttribute']};};
            
            //MethodDef setAttribute at DomNode.ceylon (109:4-113:4)
            $$domNode.setAttribute=function setAttribute(name$20845,val$20846){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$20820.setAttribute(name$20845.valueOf(),val$20846.valueOf());
                /*End dynamic block*/
            };$$domNode.setAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setAttribute']};};
            
            //MethodDef removeAttribute at DomNode.ceylon (115:4-119:4)
            $$domNode.removeAttribute=function removeAttribute(name$20847){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$20820.removeAttribute(name$20847.valueOf());
                /*End dynamic block*/
            };$$domNode.removeAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','removeAttribute']};};
            
            //MethodDef getValue at DomNode.ceylon (122:4-126:4)
            $$domNode.getValue=function getValue(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$20848=$$domNode.peer$20820.value,$$$cl20381.isOfType(tmpvar$20848,{t:$$$cl20381.Anything})?tmpvar$20848:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'124:19-124:28','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','getValue']};};
            
            //MethodDef setValue at DomNode.ceylon (129:4-133:4)
            $$domNode.setValue=function setValue(val$20849){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$20820.value=val$20849.valueOf();
                /*End dynamic block*/
            };$$domNode.setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setValue']};};
            
            //MethodDef getNodeValue at DomNode.ceylon (136:4-140:4)
            $$domNode.getNodeValue=function getNodeValue(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$20850=$$domNode.peer$20820.nodeValue,$$$cl20381.isOfType(tmpvar$20850,{t:$$$cl20381.Anything})?tmpvar$20850:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'138:19-138:32','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.String},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','getNodeValue']};};
            
            //MethodDef setNodeValue at DomNode.ceylon (143:4-147:4)
            $$domNode.setNodeValue=function setNodeValue(val$20851){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$20820.nodeValue=val$20851.valueOf();
                /*End dynamic block*/
            };$$domNode.setNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setNodeValue']};};
            
            //MethodDef isChecked at DomNode.ceylon (150:4-154:4)
            $$domNode.isChecked=function isChecked(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$20852=$$domNode.peer$20820.checked,$$$cl20381.isOfType(tmpvar$20852,{t:$$$cl20381.Anything})?tmpvar$20852:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'152:19-152:30','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.isChecked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.$Boolean}]},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','isChecked']};};
            
            //MethodDef setChecked at DomNode.ceylon (157:4-161:4)
            $$domNode.setChecked=function setChecked(checked$20853){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$20820.checked=checked$20853;
                /*End dynamic block*/
            };$$domNode.setChecked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'checked',$mt:'prm',$t:{t:$$$cl20381.$Boolean},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setChecked']};};
            
            //MethodDef addClass at DomNode.ceylon (163:4-167:4)
            $$domNode.addClass=function addClass(name$20854){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$20820.classList.add(name$20854.valueOf());
                /*End dynamic block*/
            };$$domNode.addClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addClass']};};
            
            //MethodDef removeClass at DomNode.ceylon (169:4-173:4)
            $$domNode.removeClass=function removeClass(name$20855){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$20820.classList.remove(name$20855.valueOf());
                /*End dynamic block*/
            };$$domNode.removeClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','removeClass']};};
            
            //MethodDef hasClass at DomNode.ceylon (175:4-183:4)
            $$domNode.hasClass=function hasClass(name$20856){
                var $$domNode=this;
                /*Begin dynamic block*/
                if($$domNode.peer$20820.classList.contains(name$20856.valueOf())){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$domNode.hasClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','hasClass']};};
            
            //AttributeGetterDef visible at DomNode.ceylon (185:4-190:4)
            $$$cl20381.defineAttr($$domNode,'visible',function(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl current at DomNode.ceylon (187:12-187:48)
                var current$20857=$$domNode.peer$20820.style.display;
                $prop$getCurrent$20857={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},d:['io.cayla.mvvm.dom','DomNode','$at','visible','$at','current']};}};
                $prop$getCurrent$20857.get=function(){return current$20857};
                return (tmpvar$20858=current$20857,tmpvar$20859=$$$cl20381.String("none",4),(tmpvar$20858.equals&&!tmpvar$20858.equals(tmpvar$20859))||tmpvar$20858!==tmpvar$20859);
                /*End dynamic block*/
            },function(visible$20860){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl current at DomNode.ceylon (194:12-194:48)
                var current$20861=$$domNode.peer$20820.style.display;
                $prop$getCurrent$20861={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},d:['io.cayla.mvvm.dom','DomNode','$at','visible','$at','current']};}};
                $prop$getCurrent$20861.get=function(){return current$20861};
                
                //AttributeDecl currentlyVisible at DomNode.ceylon (195:12-195:56)
                var currentlyVisible$20862=(tmpvar$20863=current$20861,tmpvar$20864=$$$cl20381.String("none",4),(tmpvar$20863.equals&&!tmpvar$20863.equals(tmpvar$20864))||tmpvar$20863!==tmpvar$20864);
                $prop$getCurrentlyVisible$20862={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},d:['io.cayla.mvvm.dom','DomNode','$at','visible','$at','currentlyVisible']};}};
                $prop$getCurrentlyVisible$20862.get=function(){return currentlyVisible$20862};
                if((visible$20860&&(!currentlyVisible$20862))){
                    $$domNode.peer$20820.style.display=$$$cl20381.String("",0).valueOf();
                }else {
                    if(((!visible$20860)&&currentlyVisible$20862)){
                        $$domNode.peer$20820.style.display=$$$cl20381.String("none",4).valueOf();
                    }
                }/*End dynamic block*/
            },function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$at','visible']};});
            //MethodDef matchesSelector at DomNode.ceylon (205:4-209:4)
            $$domNode.matchesSelector=function matchesSelector(selector$20865){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$20866=_matchesSelector$dom($$domNode.peer$20820,selector$20865),$$$cl20381.isOfType(tmpvar$20866,{t:$$$cl20381.Anything})?tmpvar$20866:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'207:19-207:50','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.matchesSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','matchesSelector']};};
            
            //MethodDef addEventHandler at DomNode.ceylon (211:4-253:4)
            $$domNode.addEventHandler$defs$selector=function(type$20867,handler$20868,selector$20869){var $$domNode=this;
            return null;};
            $$domNode.addEventHandler=function addEventHandler(type$20867,handler$20868,selector$20869){
                var $$domNode=this;
                if(selector$20869===undefined){selector$20869=$$domNode.addEventHandler$defs$selector(type$20867,handler$20868,selector$20869);}
                
                //MethodDef f at DomNode.ceylon (212:8-249:8)
                function f$20870(eventPeer$20871){
                    /*Begin dynamic block*/
                    
                    //AttributeDecl matched at DomNode.ceylon (216:16-216:31)
                    var matched$20872;
                    var selector$20873;
                    if((selector$20873=selector$20869)!==null){
                        
                        //AttributeDecl nodePeer at DomNode.ceylon (218:20-218:64)
                        var nodePeer$20874=eventPeer$20871.target;
                        function setNodePeer$20874(nodePeer$20875){return nodePeer$20874=nodePeer$20875;};
                        while(true){
                            if((tmpvar$20876=nodePeer$20874.nodeType,tmpvar$20877=(1),(tmpvar$20876.equals&&tmpvar$20876.equals(tmpvar$20877))||tmpvar$20876===tmpvar$20877)){
                                if(_matchesSelector$dom(nodePeer$20874,selector$20873)){
                                    matched$20872=true;
                                    break;
                                }else {
                                    
                                    //AttributeDecl parentPeer at DomNode.ceylon (225:32-225:72)
                                    var parentPeer$20878=nodePeer$20874.parentNode;
                                    var parentPeer$20879;
                                    if((parentPeer$20879=parentPeer$20878)!==null){
                                        nodePeer$20874=parentPeer$20879;
                                    }else {
                                        matched$20872=false;
                                        break;
                                    }
                                }
                            }else {
                                matched$20872=false;
                                break;
                            }
                        }
                    }else {
                        matched$20872=true;
                    }if(matched$20872){
                        
                        //AttributeDecl target at DomNode.ceylon (244:20-244:59)
                        var target$20880=(tmpvar$20881=wrap$dom(eventPeer$20871.target),$$$cl20381.isOfType(tmpvar$20881,{t:DomNode$dom})?tmpvar$20881:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'244:37-244:58','DomNode.ceylon'));
                        
                        //AttributeDecl event at DomNode.ceylon (245:20-245:64)
                        var event$20882=DomEvent$dom(target$20880,eventPeer$20871);
                        handler$20868(event$20882);
                    }/*End dynamic block*/
                };f$20870.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'eventPeer',$mt:'prm',$t:{t:$$$cl20381.Anything},$an:function(){return[];}}],d:['io.cayla.mvvm.dom','DomNode','$m','addEventHandler','$m','f']};};
                /*Begin dynamic block*/
                $$domNode.peer$20820.addEventListener(type$20867.valueOf(),f$20870,false);
                /*End dynamic block*/
            };$$domNode.addEventHandler.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:{t:DomEvent$dom}}]}}},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.String}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addEventHandler']};};
            
            //MethodDef click at DomNode.ceylon (257:4-279:4)
            $$domNode.click=function click(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl event at DomNode.ceylon (259:12-259:73)
                var event$20883=$$domNode.peer$20820.ownerDocument.createEvent($$$cl20381.String("MouseEvents",11).valueOf());
                event$20883.initMouseEvent($$$cl20381.String("click",5).valueOf(),true,true,$$domNode.peer$20820.ownerDocument.defaultView,(1),(0),(0),(0),(0),false,false,false,false,(0),null);
                $$domNode.peer$20820.dispatchEvent(event$20883);
                /*End dynamic block*/
            };$$domNode.click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','click']};};
            
            //MethodDef dispatchEvent at DomNode.ceylon (281:4-286:4)
            $$domNode.dispatchEvent=function dispatchEvent(type$20884){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl event at DomNode.ceylon (283:12-283:51)
                var event$20885=(tmpvar$20886=type$20884.valueOf(),tmpvar$20887=true,tmpvar$20888=true,tmpvar$20889=(typeof Event==='undefined'?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined type Event")),'283:28-283:32','DomNode.ceylon'):Event),tmpvar$20889.$$===undefined?new tmpvar$20889(tmpvar$20886, tmpvar$20887, tmpvar$20888):tmpvar$20889(tmpvar$20886, tmpvar$20887, tmpvar$20888));
                $$domNode.peer$20820.dispatchEvent(event$20885);
                /*End dynamic block*/
            };$$domNode.dispatchEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','dispatchEvent']};};
            
            //MethodDef detach at DomNode.ceylon (288:4-295:4)
            $$domNode.detach=function detach(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl old at DomNode.ceylon (290:12-290:30)
                var old$20890=$$domNode.peer$20820;
                $$domNode.peer$20820=$$domNode.peer$20820.parentNode.removeChild($$domNode.peer$20820);old$20890.peer=null;
                $$domNode.peer$20820.ref=$$domNode;
                /*End dynamic block*/
            };$$domNode.detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','detach']};};
            $$$cl20381.defineAttr($$domNode,'peer$20820',function(){return this.peer$20820_;},function(DomNode$20891){return this.peer$20820_=DomNode$20891;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$cont:DomNode$dom,$an:function(){return[$$$cl20381.variable(),$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.dom','DomNode','$at','peer']};});
        })(DomNode$dom.$$.prototype);
    }
    return DomNode$dom;
}
exports.$init$DomNode$dom=$init$DomNode$dom;
$init$DomNode$dom();

//ClassDef DomEvent at DomEvent.ceylon (1:0-14:0)
function DomEvent$dom(target, peer$20892, $$domEvent){
    $init$DomEvent$dom();
    if ($$domEvent===undefined)$$domEvent=new DomEvent$dom.$$;
    $$domEvent.target_=target;
    $$domEvent.peer$20892_=peer$20892;
    return $$domEvent;
}
DomEvent$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'target',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[$$$cl20381.shared()];}},{$nm:'peer',$mt:'prm',$t:{t:$$$cl20381.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomEvent']};};
exports.DomEvent$dom=DomEvent$dom;
function $init$DomEvent$dom(){
    if (DomEvent$dom.$$===undefined){
        $$$cl20381.initTypeProto(DomEvent$dom,'io.cayla.mvvm.dom::DomEvent',$$$cl20381.Basic);
        (function($$domEvent){
            
            //AttributeGetterDef keyCode at DomEvent.ceylon (3:4-7:4)
            $$$cl20381.defineAttr($$domEvent,'keyCode',function(){
                var $$domEvent=this;
                /*Begin dynamic block*/
                return (tmpvar$20893=$$domEvent.peer$20892.keyCode,$$$cl20381.isOfType(tmpvar$20893,{t:$$$cl20381.Anything})?tmpvar$20893:$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("dynamic objects cannot be used here")),'5:19-5:30','DomEvent.ceylon'));
                /*End dynamic block*/
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:DomEvent$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomEvent','$at','keyCode']};});
            //MethodDef preventDefault at DomEvent.ceylon (9:4-13:4)
            $$domEvent.preventDefault=function preventDefault(){
                var $$domEvent=this;
                /*Begin dynamic block*/
                $$domEvent.peer$20892.preventDefault();
                /*End dynamic block*/
            };$$domEvent.preventDefault.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:DomEvent$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomEvent','$m','preventDefault']};};
            $$$cl20381.defineAttr($$domEvent,'target',function(){return this.target_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:DomEvent$dom,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomEvent','$at','target']};});
            $$$cl20381.defineAttr($$domEvent,'peer$20892',function(){return this.peer$20892_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$cont:DomEvent$dom,d:['io.cayla.mvvm.dom','DomEvent','$at','peer']};});
        })(DomEvent$dom.$$.prototype);
    }
    return DomEvent$dom;
}
exports.$init$DomEvent$dom=$init$DomEvent$dom;
$init$DomEvent$dom();

//InterfaceDef DomContext at DomContext.ceylon (1:0-2:0)
function DomContext$dom($$domContext){
}
DomContext$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.dom','DomContext']};};
exports.DomContext$dom=DomContext$dom;
function $init$DomContext$dom(){
    if (DomContext$dom.$$===undefined){
        $$$cl20381.initTypeProtoI(DomContext$dom,'io.cayla.mvvm.dom::DomContext');
    }
    return DomContext$dom;
}
exports.$init$DomContext$dom=$init$DomContext$dom;
$init$DomContext$dom();
exports.$pkg$ans$io$cayla$mvvm$diff=function(){return[$$$cl20381.shared()];};

//ClassDef Diff at Diff.ceylon (2:0-69:0)
function Diff$diff(elements1$20894, elements2$20895, $$targs$$,$$diff){
    $init$Diff$diff();
    if ($$diff===undefined)$$diff=new Diff$diff.$$;
    $$$cl20381.set_type_args($$diff,$$targs$$);
    $$diff.elements1$20894_=elements1$20894;
    $$diff.elements2$20895_=elements2$20895;
    $$$cl20381.Iterator($$diff.$$targs$$===undefined?$$targs$$:{Element:{t:'T', l:[$$diff.$$targs$$.E,{t:Change$diff}]}},$$diff);
    $$$cl20381.add_type_arg($$diff,'Element',{t:'T', l:[$$diff.$$targs$$.E,{t:Change$diff}]});
    
    //AttributeDecl m at Diff.ceylon (8:4-8:28)
    $$diff.m$20896_=$$diff.elements1$20894.size;
    $$diff.$prop$getM$20896={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','m']};}};
    $$diff.$prop$getM$20896.get=function(){return m$20896};
    
    //AttributeDecl n at Diff.ceylon (9:4-9:28)
    $$diff.n$20897_=$$diff.elements2$20895.size;
    $$diff.$prop$getN$20897={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','n']};}};
    $$diff.$prop$getN$20897.get=function(){return n$20897};
    
    //AttributeDecl opt at Diff.ceylon (28:4-28:62)
    $$diff.opt$20898_=$$diff.Matrix$Diff($$diff.elements1$20894.size.plus((1)),$$diff.elements2$20895.size.plus((1)));
    $$diff.$prop$getOpt$20898={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Diff$diff.Matrix$Diff},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','opt']};}};
    $$diff.$prop$getOpt$20898.get=function(){return opt$20898};
    if(($$diff.m$20896.compare((0)).equals($$$cl20381.getLarger())&&$$diff.n$20897.compare((0)).equals($$$cl20381.getLarger()))){
        //'for' statement at Diff.ceylon (30:8-36:8)
        var it$20899 = $$$cl20381.Range($$diff.m$20896.minus((1)),(0),{Element:{t:$$$cl20381.Integer}}).iterator();
        var i$20900;while ((i$20900=it$20899.next())!==$$$cl20381.getFinished()){
            //'for' statement at Diff.ceylon (31:12-35:12)
            var it$20901 = $$$cl20381.Range($$diff.n$20897.minus((1)),(0),{Element:{t:$$$cl20381.Integer}}).iterator();
            var j$20902;while ((j$20902=it$20901.next())!==$$$cl20381.getFinished()){
                //assert at Diff.ceylon (32:16-32:47)
                var x$20903;
                if (!((x$20903=$$diff.elements1$20894.$get(i$20900))!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists x = elements1[i]\' at Diff.ceylon (32:22-32:46)"),'32:16-32:47','Diff.ceylon'); }
                //assert at Diff.ceylon (33:16-33:47)
                var y$20904;
                if (!((y$20904=$$diff.elements2$20895.$get(j$20902))!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists y = elements2[j]\' at Diff.ceylon (33:22-33:46)"),'33:16-33:47','Diff.ceylon'); }
                $$diff.opt$20898.set(i$20900,j$20902,(opt$20905=(x$20903.equals(y$20904)?$$diff.opt$20898.$get(i$20900.plus((1)),j$20902.plus((1))).plus((1)):null),opt$20905!==null?opt$20905:$$$cl20381.max([$$diff.opt$20898.$get(i$20900.plus((1)),j$20902),$$diff.opt$20898.$get(i$20900,j$20902.plus((1)))].reifyCeylonType({Element:{t:$$$cl20381.Integer},Absent:{t:$$$cl20381.Nothing}}),{Value:{t:$$$cl20381.Integer},Absent:{t:$$$cl20381.Nothing}})));
                var opt$20905;
            }
        }
    }
    
    //AttributeDecl i at Diff.ceylon (39:4-39:26)
    $$diff.i$20906_=(0);
    $$diff.$prop$getI$20906={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Diff$diff,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm.diff','Diff','$at','i']};}};
    $$diff.$prop$getI$20906.get=function(){return i$20906};
    
    //AttributeDecl j at Diff.ceylon (40:4-40:26)
    $$diff.j$20907_=(0);
    $$diff.$prop$getJ$20907={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Diff$diff,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm.diff','Diff','$at','j']};}};
    $$diff.$prop$getJ$20907.get=function(){return j$20907};
    return $$diff;
}
Diff$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'elements1',$mt:'prm',$t:{t:$$$cl20381.List,a:{Element:'E'}},$an:function(){return[];}},{$nm:'elements2',$mt:'prm',$t:{t:$$$cl20381.List,a:{Element:'E'}},$an:function(){return[];}}],$tp:{E:{'satisfies':[{t:$$$cl20381.$Object}]}},satisfies:[{t:$$$cl20381.Iterator,a:{Element:{t:'T',l:[{$t:'E'},{$t:{t:Change$diff}}]}}}],$an:function(){return[$$$cl20381.doc($$$cl20381.String("Diff two series of elements\n",28)),$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','Diff']};};
exports.Diff$diff=Diff$diff;
function $init$Diff$diff(){
    if (Diff$diff.$$===undefined){
        $$$cl20381.initTypeProto(Diff$diff,'io.cayla.mvvm.diff::Diff',$$$cl20381.Basic,$$$cl20381.Iterator);
        (function($$diff){
            
            //AttributeDecl m at Diff.ceylon (8:4-8:28)
            $$$cl20381.defineAttr($$diff,'m$20896',function(){return this.m$20896_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','m']};});
            
            //AttributeDecl n at Diff.ceylon (9:4-9:28)
            $$$cl20381.defineAttr($$diff,'n$20897',function(){return this.n$20897_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','n']};});
            
            //ClassDef Matrix at Diff.ceylon (11:4-25:4)
            function Matrix$Diff(width$20908, height$20909, $$matrix$20910){
                $init$Matrix$Diff();
                if ($$matrix$20910===undefined)$$matrix$20910=new this.Matrix$Diff.$$;
                $$matrix$20910.$$outer=this;
                $$matrix$20910.width$20908_=width$20908;
                $$matrix$20910.height$20909_=height$20909;
                
                //AttributeDecl state at Diff.ceylon (13:8-13:52)
                $$matrix$20910.state$20911_=$$$cl20381.arrayOfSize($$matrix$20910.width$20908.times($$matrix$20910.height$20909),(0),{Element:{t:$$$cl20381.Integer}});
                $$matrix$20910.$prop$getState$20911={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Array,a:{Element:{t:$$$cl20381.Integer}}},$cont:Matrix$Diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','state']};}};
                $$matrix$20910.$prop$getState$20911.get=function(){return state$20911};
                
                //AttributeDecl string at Diff.ceylon (24:8-24:51)
                $$matrix$20910.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.String},$cont:Matrix$Diff,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','string']};}};
                $$matrix$20910.$prop$getString.get=function(){return string};
                return $$matrix$20910;
            }
            Matrix$Diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'width',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}},{$nm:'height',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix']};};
            function $init$Matrix$Diff(){
                if (Matrix$Diff.$$===undefined){
                    $$$cl20381.initTypeProto(Matrix$Diff,'io.cayla.mvvm.diff::Diff.Matrix',$$$cl20381.Basic);
                    Diff$diff.Matrix$Diff=Matrix$Diff;
                    (function($$matrix$20910){
                        
                        //AttributeDecl state at Diff.ceylon (13:8-13:52)
                        $$$cl20381.defineAttr($$matrix$20910,'state$20911',function(){return this.state$20911_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Array,a:{Element:{t:$$$cl20381.Integer}}},$cont:Matrix$Diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','state']};});
                        
                        //MethodDef set at Diff.ceylon (15:8-17:8)
                        $$matrix$20910.set=function set(x$20912,y$20913,e$20914){
                            var $$matrix$20910=this;
                            $$matrix$20910.state$20911.set(x$20912.plus(y$20913.times($$matrix$20910.$$outer.m$20896.plus((1)))),e$20914);
                        };$$matrix$20910.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}},{$nm:'e',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:Matrix$Diff,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$m','set']};};
                        
                        //MethodDef get at Diff.ceylon (19:8-22:8)
                        $$matrix$20910.$get=function $get(x$20915,y$20916){
                            var $$matrix$20910=this;
                            //assert at Diff.ceylon (20:12-20:53)
                            var e$20917;
                            if (!((e$20917=$$matrix$20910.state$20911.$get(x$20915.plus(y$20916.times($$matrix$20910.$$outer.m$20896.plus((1))))))!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists e = state[x + y * (m + 1)]\' at Diff.ceylon (20:18-20:52)"),'20:12-20:53','Diff.ceylon'); }
                            return e$20917;
                        };$$matrix$20910.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:Matrix$Diff,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$m','get']};};
                        
                        //AttributeDecl string at Diff.ceylon (24:8-24:51)
                        $$$cl20381.defineAttr($$matrix$20910,'string',function(){
                            var $$matrix$20910=this;
                            return $$matrix$20910.state$20911.string;
                        },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.String},$cont:Matrix$Diff,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','string']};});
                        $$$cl20381.defineAttr($$matrix$20910,'width$20908',function(){return this.width$20908_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Matrix$Diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','width']};});
                        $$$cl20381.defineAttr($$matrix$20910,'height$20909',function(){return this.height$20909_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Matrix$Diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','height']};});
                    })(Matrix$Diff.$$.prototype);
                }
                return Matrix$Diff;
            }
            $$diff.$init$Matrix$Diff=$init$Matrix$Diff;
            $init$Matrix$Diff();
            $$diff.Matrix$Diff=Matrix$Diff;
            
            //AttributeDecl opt at Diff.ceylon (28:4-28:62)
            $$$cl20381.defineAttr($$diff,'opt$20898',function(){return this.opt$20898_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Diff$diff.Matrix$Diff},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','opt']};});
            
            //AttributeDecl i at Diff.ceylon (39:4-39:26)
            $$$cl20381.defineAttr($$diff,'i$20906',function(){return this.i$20906_;},function(i$20918){return this.i$20906_=i$20918;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Diff$diff,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm.diff','Diff','$at','i']};});
            
            //AttributeDecl j at Diff.ceylon (40:4-40:26)
            $$$cl20381.defineAttr($$diff,'j$20907',function(){return this.j$20907_;},function(j$20919){return this.j$20907_=j$20919;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Diff$diff,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm.diff','Diff','$at','j']};});
            
            //MethodDef next at Diff.ceylon (42:4-68:4)
            $$diff.next=function next(){
                var $$diff=this;
                if(($$diff.i$20906.compare($$diff.m$20896).equals($$$cl20381.getSmaller())&&$$diff.j$20907.compare($$diff.n$20897).equals($$$cl20381.getSmaller()))){
                    //assert at Diff.ceylon (44:12-44:44)
                    var e1$20920;
                    if (!((e1$20920=$$diff.elements1$20894.$get($$diff.i$20906))!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists e1 = elements1[i]\' at Diff.ceylon (44:18-44:43)"),'44:12-44:44','Diff.ceylon'); }
                    //assert at Diff.ceylon (45:12-45:44)
                    var e2$20921;
                    if (!((e2$20921=$$diff.elements2$20895.$get($$diff.j$20907))!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists e2 = elements2[j]\' at Diff.ceylon (45:18-45:43)"),'45:12-45:44','Diff.ceylon'); }
                    if(e1$20920.equals(e2$20921)){
                        (oldi$20922=$$diff.i$20906,$$diff.i$20906=oldi$20922.successor,oldi$20922);
                        var oldi$20922;
                        (oldj$20923=$$diff.j$20907,$$diff.j$20907=oldj$20923.successor,oldj$20923);
                        var oldj$20923;
                        return $$$cl20381.Tuple(e1$20920,$$$cl20381.Tuple(getSame$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                    }else {
                        if(($$diff.opt$20898.$get($$diff.i$20906.plus((1)),$$diff.j$20907).compare($$diff.opt$20898.$get($$diff.i$20906,$$diff.j$20907.plus((1))))!==$$$cl20381.getSmaller())){
                            (oldi$20924=$$diff.i$20906,$$diff.i$20906=oldi$20924.successor,oldi$20924);
                            var oldi$20924;
                            return $$$cl20381.Tuple(e1$20920,$$$cl20381.Tuple(getRemoved$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                        }else {
                            (oldj$20925=$$diff.j$20907,$$diff.j$20907=oldj$20925.successor,oldj$20925);
                            var oldj$20925;
                            return $$$cl20381.Tuple(e2$20921,$$$cl20381.Tuple(getAdded$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                        }
                    }
                }else {
                    if($$diff.i$20906.compare($$diff.m$20896).equals($$$cl20381.getSmaller())){
                        //assert at Diff.ceylon (58:12-58:44)
                        var e1$20926;
                        if (!((e1$20926=$$diff.elements1$20894.$get($$diff.i$20906))!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists e1 = elements1[i]\' at Diff.ceylon (58:18-58:43)"),'58:12-58:44','Diff.ceylon'); }
                        (oldi$20927=$$diff.i$20906,$$diff.i$20906=oldi$20927.successor,oldi$20927);
                        var oldi$20927;
                        return $$$cl20381.Tuple(e1$20926,$$$cl20381.Tuple(getRemoved$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                    }else {
                        if($$diff.j$20907.compare($$diff.n$20897).equals($$$cl20381.getSmaller())){
                            //assert at Diff.ceylon (62:12-62:44)
                            var e2$20928;
                            if (!((e2$20928=$$diff.elements2$20895.$get($$diff.j$20907))!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists e2 = elements2[j]\' at Diff.ceylon (62:18-62:43)"),'62:12-62:44','Diff.ceylon'); }
                            (oldj$20929=$$diff.j$20907,$$diff.j$20907=oldj$20929.successor,oldj$20929);
                            var oldj$20929;
                            return $$$cl20381.Tuple(e2$20928,$$$cl20381.Tuple(getAdded$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                        }else {
                            return $$$cl20381.getFinished();
                        }
                    }
                }
            };$$diff.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:'T',l:[{$t:'E'},{$t:{t:Change$diff}}]},{t:$$$cl20381.Finished}]},$ps:[],$cont:Diff$diff,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.diff','Diff','$m','next']};};
            $$$cl20381.defineAttr($$diff,'elements1$20894',function(){return this.elements1$20894_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'E'}},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','elements1']};});
            $$$cl20381.defineAttr($$diff,'elements2$20895',function(){return this.elements2$20895_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'E'}},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','elements2']};});
        })(Diff$diff.$$.prototype);
    }
    return Diff$diff;
}
exports.$init$Diff$diff=$init$Diff$diff;
$init$Diff$diff();

//ClassDef Change at Change.ceylon (1:0-3:0)
function Change$diff($$change){
    $init$Change$diff();
    if ($$change===undefined)$$$cl20381.throwexc($$$cl20381.InvocationException$meta$model($$$cl20381.String("Cannot instantiate abstract class")),'?','?')
    return $$change;
}
Change$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],of:[{t:removed$20930$diff},{t:same$20931$diff},{t:added$20932$diff}],$an:function(){return[$$$cl20381.doc($$$cl20381.String("A change",8)),$$$cl20381.shared(),$$$cl20381.abstract()];},d:['io.cayla.mvvm.diff','Change']};};
exports.Change$diff=Change$diff;
function $init$Change$diff(){
    if (Change$diff.$$===undefined){
        $$$cl20381.initTypeProto(Change$diff,'io.cayla.mvvm.diff::Change',$$$cl20381.Basic);
    }
    return Change$diff;
}
exports.$init$Change$diff=$init$Change$diff;
$init$Change$diff();

//ObjectDef removed at Change.ceylon (4:0-6:0)
function removed$20930$diff(){
    var $$removed=new removed$20930$diff.$$;
    Change$diff($$removed);
    return $$removed;
};removed$20930$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$diff},$an:function(){return[$$$cl20381.doc("Removed change"),$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','removed']};};
function $init$removed$20930$diff(){
    if (removed$20930$diff.$$===undefined){
        $$$cl20381.initTypeProto(removed$20930$diff,'io.cayla.mvvm.diff::removed',$init$Change$diff());
    }
    return removed$20930$diff;
}
exports.$init$removed$20930$diff=$init$removed$20930$diff;
$init$removed$20930$diff();
var removed$20933$diff;
function getRemoved$diff(){
    if (removed$20933$diff===undefined){removed$20933$diff=$init$removed$20930$diff()();removed$20933$diff.$$metamodel$$=getRemoved$diff.$$metamodel$$;}
    return removed$20933$diff;
}
exports.getRemoved$diff=getRemoved$diff;
getRemoved$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:removed$20930$diff},$an:function(){return[$$$cl20381.doc($$$cl20381.String("Removed change",14)),$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','removed']};};
$prop$getRemoved$diff={get:getRemoved$diff,$$metamodel$$:getRemoved$diff.$$metamodel$$};
exports.$prop$getRemoved$diff=$prop$getRemoved$diff;

//ObjectDef same at Change.ceylon (7:0-9:0)
function same$20931$diff(){
    var $$same=new same$20931$diff.$$;
    Change$diff($$same);
    return $$same;
};same$20931$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$diff},$an:function(){return[$$$cl20381.doc("Same change"),$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','same']};};
function $init$same$20931$diff(){
    if (same$20931$diff.$$===undefined){
        $$$cl20381.initTypeProto(same$20931$diff,'io.cayla.mvvm.diff::same',$init$Change$diff());
    }
    return same$20931$diff;
}
exports.$init$same$20931$diff=$init$same$20931$diff;
$init$same$20931$diff();
var same$20934$diff;
function getSame$diff(){
    if (same$20934$diff===undefined){same$20934$diff=$init$same$20931$diff()();same$20934$diff.$$metamodel$$=getSame$diff.$$metamodel$$;}
    return same$20934$diff;
}
exports.getSame$diff=getSame$diff;
getSame$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:same$20931$diff},$an:function(){return[$$$cl20381.doc($$$cl20381.String("Same change",11)),$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','same']};};
$prop$getSame$diff={get:getSame$diff,$$metamodel$$:getSame$diff.$$metamodel$$};
exports.$prop$getSame$diff=$prop$getSame$diff;

//ObjectDef added at Change.ceylon (10:0-12:0)
function added$20932$diff(){
    var $$added=new added$20932$diff.$$;
    Change$diff($$added);
    return $$added;
};added$20932$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$diff},$an:function(){return[$$$cl20381.doc("Added change"),$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','added']};};
function $init$added$20932$diff(){
    if (added$20932$diff.$$===undefined){
        $$$cl20381.initTypeProto(added$20932$diff,'io.cayla.mvvm.diff::added',$init$Change$diff());
    }
    return added$20932$diff;
}
exports.$init$added$20932$diff=$init$added$20932$diff;
$init$added$20932$diff();
var added$20935$diff;
function getAdded$diff(){
    if (added$20935$diff===undefined){added$20935$diff=$init$added$20932$diff()();added$20935$diff.$$metamodel$$=getAdded$diff.$$metamodel$$;}
    return added$20935$diff;
}
exports.getAdded$diff=getAdded$diff;
getAdded$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:added$20932$diff},$an:function(){return[$$$cl20381.doc($$$cl20381.String("Added change",12)),$$$cl20381.shared()];},d:['io.cayla.mvvm.diff','added']};};
$prop$getAdded$diff={get:getAdded$diff,$$metamodel$$:getAdded$diff.$$metamodel$$};
exports.$prop$getAdded$diff=$prop$getAdded$diff;

//ClassDef Frame at dependant.ceylon (3:0-5:0)
function Frame($$frame){
    $init$Frame();
    if ($$frame===undefined)$$frame=new Frame.$$;
    
    //AttributeDecl observables at dependant.ceylon (4:4-4:82)
    $$frame.observables$20936_=$$$cc20402.HashSet(undefined,{Element:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}});
    $$frame.$prop$getObservables={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.HashSet,a:{Element:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}}},$cont:Frame,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','Frame','$at','observables']};}};
    $$frame.$prop$getObservables.get=function(){return observables};
    return $$frame;
}
Frame.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],d:['io.cayla.mvvm','Frame']};};
function $init$Frame(){
    if (Frame.$$===undefined){
        $$$cl20381.initTypeProto(Frame,'io.cayla.mvvm::Frame',$$$cl20381.Basic);
        (function($$frame){
            
            //AttributeDecl observables at dependant.ceylon (4:4-4:82)
            $$$cl20381.defineAttr($$frame,'observables',function(){return this.observables$20936_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.HashSet,a:{Element:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}}},$cont:Frame,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','Frame','$at','observables']};});
        })(Frame.$$.prototype);
    }
    return Frame;
}
exports.$init$Frame=$init$Frame;
$init$Frame();

//ObjectDef dependant at dependant.ceylon (7:0-26:0)
function dependant$20937(){
    var $$dependant=new dependant$20937.$$;
    
    //AttributeDecl stack at dependant.ceylon (9:4-9:37)
    $$dependant.stack$20938_=$$$cc20402.LinkedList(undefined,{Element:{t:Frame}});
    $$dependant.$prop$getStack$20938={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:{t:Frame}}},$cont:dependant$20937,d:['io.cayla.mvvm','dependant','$at','stack']};}};
    $$dependant.$prop$getStack$20938.get=function(){return stack$20938};
    return $$dependant;
};dependant$20937.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},d:['io.cayla.mvvm','dependant']};};
function $init$dependant$20937(){
    if (dependant$20937.$$===undefined){
        $$$cl20381.initTypeProto(dependant$20937,'io.cayla.mvvm::dependant',$$$cl20381.Basic);
        (function($$dependant){
            
            //AttributeDecl stack at dependant.ceylon (9:4-9:37)
            $$$cl20381.defineAttr($$dependant,'stack$20938',function(){return this.stack$20938_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:{t:Frame}}},$cont:dependant$20937,d:['io.cayla.mvvm','dependant','$at','stack']};});
            
            //MethodDef begin at dependant.ceylon (11:4-13:4)
            $$dependant.begin=function begin(){
                var $$dependant=this;
                $$dependant.stack$20938.add(Frame());
            };$$dependant.begin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:dependant$20937,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','dependant','$m','begin']};};
            
            //MethodDef report at dependant.ceylon (15:4-19:4)
            $$dependant.report=function report(observable$20939){
                var $$dependant=this;
                var last$20940;
                if((last$20940=$$dependant.stack$20938.last)!==null){
                    last$20940.observables.add(observable$20939);
                }
            };$$dependant.report.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'observable',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}},$an:function(){return[];}}],$cont:dependant$20937,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','dependant','$m','report']};};
            
            //MethodDef end at dependant.ceylon (21:4-24:4)
            $$dependant.end=function end(){
                var $$dependant=this;
                //assert at dependant.ceylon (22:8-22:47)
                var ret$20941;
                if (!((ret$20941=$$dependant.stack$20938.removeLast())!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists ret = stack.removeLast()\' at dependant.ceylon (22:14-22:46)"),'22:8-22:47','dependant.ceylon'); }
                return ret$20941.observables;
            };$$dependant.end.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Set,a:{Element:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}}},$ps:[],$cont:dependant$20937,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','dependant','$m','end']};};
        })(dependant$20937.$$.prototype);
    }
    return dependant$20937;
}
exports.$init$dependant$20937=$init$dependant$20937;
$init$dependant$20937();
var dependant$20942;
function getDependant(){
    if (dependant$20942===undefined){dependant$20942=$init$dependant$20937()();dependant$20942.$$metamodel$$=getDependant.$$metamodel$$;}
    return dependant$20942;
}
getDependant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dependant$20937},d:['io.cayla.mvvm','dependant']};};
$prop$getDependant={get:getDependant,$$metamodel$$:getDependant.$$metamodel$$};
exports.$prop$getDependant=$prop$getDependant;
exports.$pkg$ans$io$cayla$mvvm$binding=function(){return[$$$cl20381.shared()];};

//ObjectDef binders at binders.ceylon (5:0-175:0)
function binders$20943$binding(){
    var $$binders=new binders$20943$binding.$$;
    
    //ObjectDef enter at binders.ceylon (7:4-17:4)
    $$binders.enter$20944_=$$binders.enter$20945();
    
    //ObjectDef checked at binders.ceylon (37:4-51:4)
    $$binders.checked$20946_=$$binders.checked$20947();
    
    //ObjectDef text at binders.ceylon (83:4-99:4)
    $$binders.text$20948_=$$binders.text$20949();
    
    //ObjectDef val at binders.ceylon (101:4-119:4)
    $$binders.val$20950_=$$binders.val$20951();
    return $$binders;
};binders$20943$binding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders']};};
function $init$binders$20943$binding(){
    if (binders$20943$binding.$$===undefined){
        $$$cl20381.initTypeProto(binders$20943$binding,'io.cayla.mvvm.binding::binders',$$$cl20381.Basic);
        (function($$binders){
            
            //ObjectDef enter at binders.ceylon (7:4-17:4)
            function enter$20945($$targs$$){
                var $$enter$binders=new this.enter$20945.$$;
                $$enter$binders.$$outer=this;
                $$enter$binders.$$targs$$=$$targs$$;
                Binder$binding({Value:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}}},$$enter$binders);
                $$$cl20381.add_type_arg($$enter$binders,'Value',{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}});
                return $$enter$binders;
            };enter$20945.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$cont:binders$20943$binding,satisfies:[{t:Binder$binding,a:{Value:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}}}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','enter']};};
            function $init$enter$20945(){
                if (enter$20945.$$===undefined){
                    $$$cl20381.initTypeProto(enter$20945,'io.cayla.mvvm.binding::binders.enter',$$$cl20381.Basic,$init$Binder$binding());
                    binders$20943$binding.enter$20945=enter$20945;
                    (function($$enter$binders){
                        
                        //MethodDef init at binders.ceylon (8:8-16:8)
                        $$enter$binders.init=function init(val$20952,context$20953){
                            var $$enter$binders=this;
                            
                            //MethodDef f at binders.ceylon (9:12-14:12)
                            function f$20954(event$20955){
                                //assert at binders.ceylon (10:16-10:58)
                                var v$20956;
                                if (!((v$20956=event$20955.target.getValue())!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists v = event.target.getValue()\' at binders.ceylon (10:22-10:57)"),'10:16-10:58','binders.ceylon'); }
                                if(event$20955.keyCode.equals((13))){
                                    val$20952();
                                }
                            };f$20954.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['io.cayla.mvvm.binding','binders','$o','enter','$m','init','$m','f']};};
                            context$20953.view.node.addEventHandler($$$cl20381.String("keyup",5),$$$cl20381.$JsCallable(f$20954,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                        };$$enter$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:enter$20945,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$o','enter','$m','init']};};
                    })(enter$20945.$$.prototype);
                }
                return enter$20945;
            }
            $$binders.$init$enter$20945=$init$enter$20945;
            $init$enter$20945();
            $$$cl20381.defineAttr($$binders,'enter',function(){return this.enter$20944_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding.enter$20945},$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','enter']};});
            $$binders.enter$20945=enter$20945;$$binders.enter$20945.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding.enter$20945},$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','enter']};};
            
            //MethodDef click at binders.ceylon (19:4-35:4)
            $$binders.click=function click($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (20:8-33:8)
                function impl$20957($$targs$$){
                    var $$impl$20957=new impl$20957.$$;
                    $$impl$20957.$$targs$$=$$targs$$;
                    Binder$binding({Value:{t:'u', l:[{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}},{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}}]}},$$impl$20957);
                    return $$impl$20957;
                };impl$20957.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},satisfies:[{t:Binder$binding,a:{Value:{t:'u', l:[{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}}]}}}],d:['io.cayla.mvvm.binding','binders','$m','click','$o','impl']};};
                function $init$impl$20957(){
                    if (impl$20957.$$===undefined){
                        $$$cl20381.initTypeProto(impl$20957,'io.cayla.mvvm.binding::binders.click.impl',$$$cl20381.Basic,$init$Binder$binding());
                        (function($$impl$20957){
                            
                            //MethodDef init at binders.ceylon (21:12-32:12)
                            $$impl$20957.init=function init(val$20958,context$20959){
                                var $$impl$20957=this;
                                var val$20960;
                                if($$$cl20381.isOfType((val$20960=val$20958),{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}})){
                                    var s$20961;
                                    if((s$20961=context$20959.model.resolve({Value:$$$mptypes.Source}))!==null){
                                        context$20959.view.node.addEventHandler($$$cl20381.String("click",5),$$$cl20381.$JsCallable((function (event$20962){
                                            return val$20960(s$20961);
                                        }),[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                                    }else {}
                                }else {
                                    var val$20963;
                                    if($$$cl20381.isOfType((val$20963=val$20958),{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}})){
                                        context$20959.view.node.addEventHandler($$$cl20381.String("click",5),$$$cl20381.$JsCallable((function (event$20964){
                                            return val$20963();
                                        }),[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                                    }
                                }
                            };$$impl$20957.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}}]},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:impl$20957,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$m','click','$o','impl','$m','init']};};
                        })(impl$20957.$$.prototype);
                    }
                    return impl$20957;
                }
                $init$impl$20957();
                var impl$20965;
                function getImpl$20965(){
                    if (impl$20965===undefined){impl$20965=$init$impl$20957()({Value:{t:'u', l:[{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}},{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}}]}});impl$20965.$$metamodel$$=getImpl$20965.$$metamodel$$;}
                    return impl$20965;
                }
                getImpl$20965.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$20957},d:['io.cayla.mvvm.binding','binders','$m','click','$o','impl']};};
                $prop$getImpl$20965={get:getImpl$20965,$$metamodel$$:getImpl$20965.$$metamodel$$};
                return getImpl$20965();
            };$$binders.click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder$binding,a:{Value:{t:'u', l:[{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}}]}}},$ps:[],$cont:binders$20943$binding,$tp:{Source:{'satisfies':[{t:$$$cl20381.$Object}],'def':{t:$$$cl20381.$Object}}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$m','click']};};
            
            //ObjectDef checked at binders.ceylon (37:4-51:4)
            function checked$20947($$targs$$){
                var $$checked$binders=new this.checked$20947.$$;
                $$checked$binders.$$outer=this;
                $$checked$binders.$$targs$$=$$targs$$;
                Binder$binding({Value:{t:Property,a:{Value:{t:$$$cl20381.$Boolean}}}},$$checked$binders);
                $$$cl20381.add_type_arg($$checked$binders,'Value',{t:Property,a:{Value:{t:$$$cl20381.$Boolean}}});
                return $$checked$binders;
            };checked$20947.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$cont:binders$20943$binding,satisfies:[{t:Binder$binding,a:{Value:{t:Property,a:{Value:{t:$$$cl20381.$Boolean}}}}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','checked']};};
            function $init$checked$20947(){
                if (checked$20947.$$===undefined){
                    $$$cl20381.initTypeProto(checked$20947,'io.cayla.mvvm.binding::binders.checked',$$$cl20381.Basic,$init$Binder$binding());
                    binders$20943$binding.checked$20947=checked$20947;
                    (function($$checked$binders){
                        
                        //MethodDef init at binders.ceylon (38:8-50:8)
                        $$checked$binders.init=function init(property$20966,context$20967){
                            var $$checked$binders=this;
                            
                            //MethodDef f at binders.ceylon (39:12-44:12)
                            function f$20968(event$20969){
                                
                                //AttributeDecl target at binders.ceylon (40:16-40:43)
                                var target$20970=event$20969.target;
                                
                                //AttributeDecl checked at binders.ceylon (41:16-41:50)
                                var checked$20971=target$20970.isChecked();
                                //assert at binders.ceylon (42:16-42:39)
                                var checked$20972;
                                if (!((checked$20972=checked$20971)!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists checked\' at binders.ceylon (42:23-42:38)"),'42:16-42:39','binders.ceylon'); }
                                property$20966.setValue(checked$20972);
                            };f$20968.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['io.cayla.mvvm.binding','binders','$o','checked','$m','init','$m','f']};};
                            context$20967.view.node.addEventHandler($$$cl20381.String("click",5),$$$cl20381.$JsCallable(f$20968,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                            property$20966.subscribe($$$cl20381.$JsCallable((function (prop$20973){
                                return context$20967.view.node.setChecked(prop$20973);
                            }),[{$nm:'prop',$mt:'prm',$t:{t:$$$cl20381.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.$Boolean}]}}));
                            if(property$20966.getValue()){
                                context$20967.view.node.setAttribute($$$cl20381.String("checked",7),$$$cl20381.String("",0));
                            }
                        };$$checked$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl20381.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:checked$20947,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$o','checked','$m','init']};};
                    })(checked$20947.$$.prototype);
                }
                return checked$20947;
            }
            $$binders.$init$checked$20947=$init$checked$20947;
            $init$checked$20947();
            $$$cl20381.defineAttr($$binders,'checked',function(){return this.checked$20946_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding.checked$20947},$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','checked']};});
            $$binders.checked$20947=checked$20947;$$binders.checked$20947.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding.checked$20947},$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','checked']};};
            
            //MethodDef css at binders.ceylon (53:4-68:4)
            $$binders.css=function css(className$20974){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (54:8-66:8)
                function impl$20975($$targs$$){
                    var $$impl$20975=new impl$20975.$$;
                    $$impl$20975.$$targs$$=$$targs$$;
                    Binder$binding({Value:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}}},$$impl$20975);
                    $$$cl20381.add_type_arg($$impl$20975,'Value',{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}});
                    return $$impl$20975;
                };impl$20975.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},satisfies:[{t:Binder$binding,a:{Value:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}}],d:['io.cayla.mvvm.binding','binders','$m','css','$o','impl']};};
                function $init$impl$20975(){
                    if (impl$20975.$$===undefined){
                        $$$cl20381.initTypeProto(impl$20975,'io.cayla.mvvm.binding::binders.css.impl',$$$cl20381.Basic,$init$Binder$binding());
                        (function($$impl$20975){
                            
                            //MethodDef init at binders.ceylon (55:12-65:12)
                            $$impl$20975.init=function init(val$20976,context$20977){
                                var $$impl$20975=this;
                                
                                //MethodDef g at binders.ceylon (56:16-62:16)
                                function g$20978(p$20979){
                                    if(p$20979){
                                        context$20977.view.node.addClass(className$20974);
                                    }else {
                                        context$20977.view.node.removeClass(className$20974);
                                    }
                                };g$20978.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl20381.$Boolean},$an:function(){return[];}}],d:['io.cayla.mvvm.binding','binders','$m','css','$o','impl','$m','init','$m','g']};};
                                val$20976.subscribe($$$cl20381.$JsCallable(g$20978,[{$nm:'p',$mt:'prm',$t:{t:$$$cl20381.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.$Boolean}]}}));
                                g$20978(val$20976.getValue());
                            };$$impl$20975.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:impl$20975,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$m','css','$o','impl','$m','init']};};
                        })(impl$20975.$$.prototype);
                    }
                    return impl$20975;
                }
                $init$impl$20975();
                var impl$20980;
                function getImpl$20980(){
                    if (impl$20980===undefined){impl$20980=$init$impl$20975()({Value:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}}});impl$20980.$$metamodel$$=getImpl$20980.$$metamodel$$;}
                    return impl$20980;
                }
                getImpl$20980.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$20975},d:['io.cayla.mvvm.binding','binders','$m','css','$o','impl']};};
                $prop$getImpl$20980={get:getImpl$20980,$$metamodel$$:getImpl$20980.$$metamodel$$};
                return getImpl$20980();
            };$$binders.css.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder$binding,a:{Value:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$m','css']};};
            
            //MethodDef visible at binders.ceylon (70:4-81:4)
            $$binders.visible=function visible(){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (71:8-79:8)
                function impl$20981($$targs$$){
                    var $$impl$20981=new impl$20981.$$;
                    $$impl$20981.$$targs$$=$$targs$$;
                    Binder$binding({Value:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}}},$$impl$20981);
                    $$$cl20381.add_type_arg($$impl$20981,'Value',{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}});
                    return $$impl$20981;
                };impl$20981.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},satisfies:[{t:Binder$binding,a:{Value:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}}],d:['io.cayla.mvvm.binding','binders','$m','visible','$o','impl']};};
                function $init$impl$20981(){
                    if (impl$20981.$$===undefined){
                        $$$cl20381.initTypeProto(impl$20981,'io.cayla.mvvm.binding::binders.visible.impl',$$$cl20381.Basic,$init$Binder$binding());
                        (function($$impl$20981){
                            
                            //MethodDef init at binders.ceylon (72:12-78:12)
                            $$impl$20981.init=function init(val$20982,context$20983){
                                var $$impl$20981=this;
                                
                                //MethodDef g at binders.ceylon (73:16-75:16)
                                function g$20984(p$20985){
                                    (tmp$20986=context$20983.view.node,tmp$20986.visible=p$20985,tmp$20986.visible);
                                    var tmp$20986;
                                };g$20984.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl20381.$Boolean},$an:function(){return[];}}],d:['io.cayla.mvvm.binding','binders','$m','visible','$o','impl','$m','init','$m','g']};};
                                val$20982.subscribe($$$cl20381.$JsCallable(g$20984,[{$nm:'p',$mt:'prm',$t:{t:$$$cl20381.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.$Boolean}]}}));
                                g$20984(val$20982.getValue());
                            };$$impl$20981.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:impl$20981,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$m','visible','$o','impl','$m','init']};};
                        })(impl$20981.$$.prototype);
                    }
                    return impl$20981;
                }
                $init$impl$20981();
                var impl$20987;
                function getImpl$20987(){
                    if (impl$20987===undefined){impl$20987=$init$impl$20981()({Value:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}}});impl$20987.$$metamodel$$=getImpl$20987.$$metamodel$$;}
                    return impl$20987;
                }
                getImpl$20987.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$20981},d:['io.cayla.mvvm.binding','binders','$m','visible','$o','impl']};};
                $prop$getImpl$20987={get:getImpl$20987,$$metamodel$$:getImpl$20987.$$metamodel$$};
                return getImpl$20987();
            };$$binders.visible.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder$binding,a:{Value:{t:Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}},$ps:[],$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$m','visible']};};
            
            //ObjectDef text at binders.ceylon (83:4-99:4)
            function text$20949($$targs$$){
                var $$text$binders=new this.text$20949.$$;
                $$text$binders.$$outer=this;
                $$text$binders.$$targs$$=$$targs$$;
                Binder$binding({Value:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}},$$text$binders);
                $$$cl20381.add_type_arg($$text$binders,'Value',{t:Observable,a:{Value:{t:$$$cl20381.$Object}}});
                return $$text$binders;
            };text$20949.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$cont:binders$20943$binding,satisfies:[{t:Binder$binding,a:{Value:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','text']};};
            function $init$text$20949(){
                if (text$20949.$$===undefined){
                    $$$cl20381.initTypeProto(text$20949,'io.cayla.mvvm.binding::binders.text',$$$cl20381.Basic,$init$Binder$binding());
                    binders$20943$binding.text$20949=text$20949;
                    (function($$text$binders){
                        
                        //MethodDef init at binders.ceylon (84:8-98:8)
                        $$text$binders.init=function init(property$20988,context$20989){
                            var $$text$binders=this;
                            
                            //MethodDef g at binders.ceylon (85:12-91:12)
                            function g$20990(p$20991){
                                //'for' statement at binders.ceylon (86:16-88:16)
                                var it$20992 = context$20989.view.node.getChildren().iterator();
                                var child$20993;while ((child$20993=it$20992.next())!==$$$cl20381.getFinished()){
                                    child$20993.detach();
                                }
                                
                                //AttributeDecl init at binders.ceylon (89:16-89:48)
                                var init$20994=property$20988.getValue();
                                context$20989.view.node.addText(init$20994.string);
                            };g$20990.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],d:['io.cayla.mvvm.binding','binders','$o','text','$m','init','$m','g']};};
                            property$20988.subscribe($$$cl20381.$JsCallable(g$20990,[{$nm:'p',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.$Object}]}}));
                            //'for' statement at binders.ceylon (93:12-95:12)
                            var it$20995 = context$20989.view.node.getChildren().iterator();
                            var child$20996;while ((child$20996=it$20995.next())!==$$$cl20381.getFinished()){
                                child$20996.detach();
                            }
                            
                            //AttributeDecl init at binders.ceylon (96:12-96:44)
                            var init$20997=property$20988.getValue();
                            context$20989.view.node.addText(init$20997.string);
                        };$$text$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:text$20949,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$o','text','$m','init']};};
                    })(text$20949.$$.prototype);
                }
                return text$20949;
            }
            $$binders.$init$text$20949=$init$text$20949;
            $init$text$20949();
            $$$cl20381.defineAttr($$binders,'text',function(){return this.text$20948_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding.text$20949},$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','text']};});
            $$binders.text$20949=text$20949;$$binders.text$20949.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding.text$20949},$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','text']};};
            
            //ObjectDef val at binders.ceylon (101:4-119:4)
            function val$20951($$targs$$){
                var $$val$binders=new this.val$20951.$$;
                $$val$binders.$$outer=this;
                $$val$binders.$$targs$$=$$targs$$;
                Binder$binding({Value:{t:Property,a:{Value:{t:$$$cl20381.String}}}},$$val$binders);
                $$$cl20381.add_type_arg($$val$binders,'Value',{t:Property,a:{Value:{t:$$$cl20381.String}}});
                return $$val$binders;
            };val$20951.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$cont:binders$20943$binding,satisfies:[{t:Binder$binding,a:{Value:{t:Property,a:{Value:{t:$$$cl20381.String}}}}}],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','val']};};
            function $init$val$20951(){
                if (val$20951.$$===undefined){
                    $$$cl20381.initTypeProto(val$20951,'io.cayla.mvvm.binding::binders.val',$$$cl20381.Basic,$init$Binder$binding());
                    binders$20943$binding.val$20951=val$20951;
                    (function($$val$binders){
                        
                        //MethodDef init at binders.ceylon (102:8-118:8)
                        $$val$binders.init=function init(property$20998,context$20999){
                            var $$val$binders=this;
                            
                            //MethodDef f at binders.ceylon (103:12-111:12)
                            function f$21000(event$21001){
                                //assert at binders.ceylon (104:16-104:58)
                                var v$21002;
                                if (!((v$21002=event$21001.target.getValue())!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists v = event.target.getValue()\' at binders.ceylon (104:22-104:57)"),'104:16-104:58','binders.ceylon'); }
                                property$20998.setValue(v$21002);
                            };f$21000.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['io.cayla.mvvm.binding','binders','$o','val','$m','init','$m','f']};};
                            context$20999.view.node.addEventHandler($$$cl20381.String("keyup",5),$$$cl20381.$JsCallable(f$21000,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                            
                            //MethodDef g at binders.ceylon (113:12-115:12)
                            function g$21003(p$21004){
                                context$20999.view.node.setValue(property$20998.getValue());
                            };g$21003.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],d:['io.cayla.mvvm.binding','binders','$o','val','$m','init','$m','g']};};
                            property$20998.subscribe($$$cl20381.$JsCallable(g$21003,[{$nm:'p',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.String}]}}));
                            context$20999.view.node.setValue(property$20998.getValue());
                        };$$val$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl20381.String}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:val$20951,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$o','val','$m','init']};};
                    })(val$20951.$$.prototype);
                }
                return val$20951;
            }
            $$binders.$init$val$20951=$init$val$20951;
            $init$val$20951();
            $$$cl20381.defineAttr($$binders,'val',function(){return this.val$20950_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding.val$20951},$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','val']};});
            $$binders.val$20951=val$20951;$$binders.val$20951.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding.val$20951},$cont:binders$20943$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$o','val']};};
            
            //MethodDef with at binders.ceylon (121:4-130:4)
            $$binders.$with=function $with($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (122:8-128:8)
                function impl$21005($$targs$$){
                    var $$impl$21005=new impl$21005.$$;
                    $$impl$21005.$$targs$$=$$targs$$;
                    Binder$binding({Value:{t:Observable,a:{Value:$$$mptypes.Value}}},$$impl$21005);
                    $$$cl20381.add_type_arg($$impl$21005,'Value',{t:Observable,a:{Value:$$$mptypes.Value}});
                    return $$impl$21005;
                };impl$21005.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},satisfies:[{t:Binder$binding,a:{Value:{t:Observable,a:{Value:'Value'}}}}],d:['io.cayla.mvvm.binding','binders','$m','with','$o','impl']};};
                function $init$impl$21005(){
                    if (impl$21005.$$===undefined){
                        $$$cl20381.initTypeProto(impl$21005,'io.cayla.mvvm.binding::binders.with.impl',$$$cl20381.Basic,$init$Binder$binding());
                        (function($$impl$21005){
                            
                            //MethodDef init at binders.ceylon (123:12-127:12)
                            $$impl$21005.init=function init(val$21006,context$21007){
                                var $$impl$21005=this;
                                
                                //AttributeDecl v at binders.ceylon (124:16-124:40)
                                var v$21008=val$21006.getValue();
                                context$21007.view.$bind(context$21007.model.createChild(v$21008));
                                (tmp$21009=context$21007.view,tmp$21009.createContent=false,tmp$21009.createContent);
                                var tmp$21009;
                            };$$impl$21005.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:'Value'}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:impl$21005,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$m','with','$o','impl','$m','init']};};
                        })(impl$21005.$$.prototype);
                    }
                    return impl$21005;
                }
                $init$impl$21005();
                var impl$21010;
                function getImpl$21010(){
                    if (impl$21010===undefined){impl$21010=$init$impl$21005()({Value:{t:Observable,a:{Value:$$$mptypes.Value}}});impl$21010.$$metamodel$$=getImpl$21010.$$metamodel$$;}
                    return impl$21010;
                }
                getImpl$21010.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$21005},d:['io.cayla.mvvm.binding','binders','$m','with','$o','impl']};};
                $prop$getImpl$21010={get:getImpl$21010,$$metamodel$$:getImpl$21010.$$metamodel$$};
                return getImpl$21010();
            };$$binders.$with.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder$binding,a:{Value:{t:Observable,a:{Value:'Value'}}}},$ps:[],$cont:binders$20943$binding,$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$m','with']};};
            
            //MethodDef foreach at binders.ceylon (132:4-174:4)
            $$binders.foreach=function foreach($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (133:8-172:8)
                function impl$21011($$targs$$){
                    var $$impl$21011=new impl$21011.$$;
                    $$impl$21011.$$targs$$=$$targs$$;
                    Binder$binding({Value:{t:Observable,a:{Value:{t:$$$cl20381.List,a:{Element:$$$mptypes.Value}}}}},$$impl$21011);
                    $$$cl20381.add_type_arg($$impl$21011,'Value',{t:Observable,a:{Value:{t:$$$cl20381.List,a:{Element:$$$mptypes.Value}}}});
                    
                    //AttributeDecl values at binders.ceylon (135:12-135:58)
                    $$impl$21011.values$21012_=$$$cc20402.LinkedList(undefined,{Element:$$$mptypes.Value});
                    $$impl$21011.$prop$getValues$21012={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:'Value'}},$cont:impl$21011,d:['io.cayla.mvvm.binding','binders','$m','foreach','$o','impl','$at','values']};}};
                    $$impl$21011.$prop$getValues$21012.get=function(){return values$21012};
                    
                    //AttributeDecl contexts at binders.ceylon (136:12-136:74)
                    $$impl$21011.contexts$21013_=$$$cc20402.LinkedList(undefined,{Element:{t:ModelContext}});
                    $$impl$21011.$prop$getContexts$21013={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:{t:ModelContext}}},$cont:impl$21011,d:['io.cayla.mvvm.binding','binders','$m','foreach','$o','impl','$at','contexts']};}};
                    $$impl$21011.$prop$getContexts$21013.get=function(){return contexts$21013};
                    return $$impl$21011;
                };impl$21011.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},satisfies:[{t:Binder$binding,a:{Value:{t:Observable,a:{Value:{t:$$$cl20381.List,a:{Element:'Value'}}}}}}],d:['io.cayla.mvvm.binding','binders','$m','foreach','$o','impl']};};
                function $init$impl$21011(){
                    if (impl$21011.$$===undefined){
                        $$$cl20381.initTypeProto(impl$21011,'io.cayla.mvvm.binding::binders.foreach.impl',$$$cl20381.Basic,$init$Binder$binding());
                        (function($$impl$21011){
                            
                            //AttributeDecl values at binders.ceylon (135:12-135:58)
                            $$$cl20381.defineAttr($$impl$21011,'values$21012',function(){return this.values$21012_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:'Value'}},$cont:impl$21011,d:['io.cayla.mvvm.binding','binders','$m','foreach','$o','impl','$at','values']};});
                            
                            //AttributeDecl contexts at binders.ceylon (136:12-136:74)
                            $$$cl20381.defineAttr($$impl$21011,'contexts$21013',function(){return this.contexts$21013_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:{t:ModelContext}}},$cont:impl$21011,d:['io.cayla.mvvm.binding','binders','$m','foreach','$o','impl','$at','contexts']};});
                            
                            //MethodDef notify at binders.ceylon (138:12-164:12)
                            $$impl$21011.notify$21014=function notify$21014(context$21015){
                                var $$impl$21011=this;
                                return function(list$21016){
                                    
                                    //AttributeDecl index at binders.ceylon (139:16-139:42)
                                    var index$21017=(0);
                                    function setIndex$21017(index$21018){return index$21017=index$21018;};
                                    
                                    //AttributeDecl diff at binders.ceylon (140:16-140:50)
                                    var diff$21019=Diff$diff($$impl$21011.values$21012.sequence,list$21016,{E:$$$mptypes.Value});
                                    while(true){
                                        
                                        //AttributeDecl next at binders.ceylon (142:20-142:44)
                                        var next$21020=diff$21019.next();
                                        var next$21021;
                                        if($$$cl20381.isOfType((next$21021=next$21020),{t:'T', l:[$$$mptypes.Value,{t:Change$diff}]})){
                                            //Switch statement at binders.ceylon (144:24-159:24)
                                            var case$21022=next$21021.$get((1));
                                            if (case$21022===getRemoved$diff()) {
                                                $$impl$21011.values$21012.remove(index$21017);
                                                //assert at binders.ceylon (147:28-147:82)
                                                var removedContext$21023;
                                                if (!((removedContext$21023=$$impl$21011.contexts$21013.remove(index$21017))!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists removedContext = contexts.remove(index)\' at binders.ceylon (147:34-147:81)"),'147:28-147:82','binders.ceylon'); }
                                                removedContext$21023.destroy();
                                            }else if (case$21022===getAdded$diff()) {
                                                
                                                //AttributeDecl v at binders.ceylon (151:28-151:45)
                                                var v$21024=next$21021.$get((0));
                                                
                                                //AttributeDecl childModel at binders.ceylon (152:28-152:82)
                                                var childModel$21025=context$21015.model.createChild(v$21024);
                                                context$21015.view.$bind(childModel$21025);
                                                $$impl$21011.values$21012.add(v$21024);
                                                $$impl$21011.contexts$21013.add(childModel$21025);
                                            }else if (case$21022===getSame$diff()) {
                                                (oldindex$21026=index$21017,index$21017=oldindex$21026.successor,oldindex$21026);
                                                var oldindex$21026;
                                            }//End switch statement at binders.ceylon (144:24-159:24)
                                        }else {
                                            break;
                                        }
                                    }
                                }
                            };$$impl$21011.notify$21014.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:impl$21011,d:['io.cayla.mvvm.binding','binders','$m','foreach','$o','impl','$m','notify']};};
                            
                            //MethodDef init at binders.ceylon (166:12-171:12)
                            $$impl$21011.init=function init(val$21027,context$21028){
                                var $$impl$21011=this;
                                (tmp$21029=context$21028.view,tmp$21029.createContent=false,tmp$21029.createContent);
                                var tmp$21029;
                                
                                //AttributeDecl a at binders.ceylon (168:16-168:41)
                                var a$21030=$$$cl20381.$JsCallable($$impl$21011.notify$21014(context$21028),[{$nm:'p2',$mt:'prm',$t:{t:$$$cl20381.List,a:{Element:'Value'}}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.List,a:{Element:$$$mptypes.Value}}]}});
                                val$21027.subscribe($$$cl20381.$JsCallable($$impl$21011.notify$21014(context$21028),[{$nm:'p2',$mt:'prm',$t:{t:$$$cl20381.List,a:{Element:'Value'}}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.List,a:{Element:$$$mptypes.Value}}]}}));
                                a$21030(val$21027.getValue());
                            };$$impl$21011.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl20381.List,a:{Element:'Value'}}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:impl$21011,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm.binding','binders','$m','foreach','$o','impl','$m','init']};};
                        })(impl$21011.$$.prototype);
                    }
                    return impl$21011;
                }
                $init$impl$21011();
                var impl$21031;
                function getImpl$21031(){
                    if (impl$21031===undefined){impl$21031=$init$impl$21011()({Value:{t:Observable,a:{Value:{t:$$$cl20381.List,a:{Element:$$$mptypes.Value}}}}});impl$21031.$$metamodel$$=getImpl$21031.$$metamodel$$;}
                    return impl$21031;
                }
                getImpl$21031.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$21011},d:['io.cayla.mvvm.binding','binders','$m','foreach','$o','impl']};};
                $prop$getImpl$21031={get:getImpl$21031,$$metamodel$$:getImpl$21031.$$metamodel$$};
                return getImpl$21031();
            };$$binders.foreach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder$binding,a:{Value:{t:Observable,a:{Value:{t:$$$cl20381.List,a:{Element:'Value'}}}}}},$ps:[],$cont:binders$20943$binding,$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders','$m','foreach']};};
        })(binders$20943$binding.$$.prototype);
    }
    return binders$20943$binding;
}
exports.$init$binders$20943$binding=$init$binders$20943$binding;
$init$binders$20943$binding();
var binders$21032$binding;
function getBinders$binding(){
    if (binders$21032$binding===undefined){binders$21032$binding=$init$binders$20943$binding()();binders$21032$binding.$$metamodel$$=getBinders$binding.$$metamodel$$;}
    return binders$21032$binding;
}
exports.getBinders$binding=getBinders$binding;
getBinders$binding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$20943$binding},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','binders']};};
$prop$getBinders$binding={get:getBinders$binding,$$metamodel$$:getBinders$binding.$$metamodel$$};
exports.$prop$getBinders$binding=$prop$getBinders$binding;

//ClassDef BindingContext at BindingContext.ceylon (4:0-7:0)
function BindingContext$binding(model, view, $$bindingContext){
    $init$BindingContext$binding();
    if ($$bindingContext===undefined)$$bindingContext=new BindingContext$binding.$$;
    $$bindingContext.model_=model;
    $$bindingContext.view_=view;
    return $$bindingContext;
}
BindingContext$binding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'model',$mt:'prm',$t:{t:ModelContext},$an:function(){return[$$$cl20381.shared()];}},{$nm:'view',$mt:'prm',$t:{t:ViewContext$view},$an:function(){return[$$$cl20381.shared()];}}],$an:function(){return[$$$cl20381.doc($$$cl20381.String("The binding context binds the model context and the view context",64)),$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','BindingContext']};};
exports.BindingContext$binding=BindingContext$binding;
function $init$BindingContext$binding(){
    if (BindingContext$binding.$$===undefined){
        $$$cl20381.initTypeProto(BindingContext$binding,'io.cayla.mvvm.binding::BindingContext',$$$cl20381.Basic);
        (function($$bindingContext){
            $$$cl20381.defineAttr($$bindingContext,'model',function(){return this.model_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ModelContext},$cont:BindingContext$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','BindingContext','$at','model']};});
            $$$cl20381.defineAttr($$bindingContext,'view',function(){return this.view_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ViewContext$view},$cont:BindingContext$binding,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','BindingContext','$at','view']};});
        })(BindingContext$binding.$$.prototype);
    }
    return BindingContext$binding;
}
exports.$init$BindingContext$binding=$init$BindingContext$binding;
$init$BindingContext$binding();

//ClassDef Binding at Binding.ceylon (1:0-5:0)
function Binding$binding($$binding){
    $init$Binding$binding();
    if ($$binding===undefined)$$$cl20381.throwexc($$$cl20381.InvocationException$meta$model($$$cl20381.String("Cannot instantiate abstract class")),'?','?')
    return $$binding;
}
Binding$binding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$cl20381.abstract()];},d:['io.cayla.mvvm.binding','Binding']};};
exports.Binding$binding=Binding$binding;
function $init$Binding$binding(){
    if (Binding$binding.$$===undefined){
        $$$cl20381.initTypeProto(Binding$binding,'io.cayla.mvvm.binding::Binding',$$$cl20381.Basic);
        (function($$binding){
            $$binding.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:Binding$binding,$an:function(){return[$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm.binding','Binding','$m','init']};}};
        })(Binding$binding.$$.prototype);
    }
    return Binding$binding;
}
exports.$init$Binding$binding=$init$Binding$binding;
$init$Binding$binding();

//InterfaceDef Binder at Binder.ceylon (1:0-5:0)
function Binder$binding($$targs$$,$$binder){
    $$$cl20381.set_type_args($$binder,$$targs$$);
}
Binder$binding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'in'}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm.binding','Binder']};};
exports.Binder$binding=Binder$binding;
function $init$Binder$binding(){
    if (Binder$binding.$$===undefined){
        $$$cl20381.initTypeProtoI(Binder$binding,'io.cayla.mvvm.binding::Binder');
        (function($$binder){
            $$binder.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:Binder$binding,$an:function(){return[$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm.binding','Binder','$m','init']};}};
        })(Binder$binding.$$.prototype);
    }
    return Binder$binding;
}
exports.$init$Binder$binding=$init$Binder$binding;
$init$Binder$binding();

//InterfaceDef Subscription at Subscription.ceylon (2:0-8:0)
function Subscription($$subscription){
}
Subscription.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl20381.doc($$$cl20381.String("A subscription, it can be disposed to terminate the effect of the subscriptio.",78)),$$$cl20381.shared()];},d:['io.cayla.mvvm','Subscription']};};
exports.Subscription=Subscription;
function $init$Subscription(){
    if (Subscription.$$===undefined){
        $$$cl20381.initTypeProtoI(Subscription,'io.cayla.mvvm::Subscription');
        (function($$subscription){
            $$subscription.dispose={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:Subscription,$an:function(){return[$$$cl20381.doc("Dispose the subscription"),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm','Subscription','$m','dispose']};}};
        })(Subscription.$$.prototype);
    }
    return Subscription;
}
exports.$init$Subscription=$init$Subscription;
$init$Subscription();

//ClassDef Subscribers at Subscribers.ceylon (2:0-29:0)
function Subscribers($$targs$$,$$subscribers){
    $init$Subscribers();
    if ($$subscribers===undefined)$$subscribers=new Subscribers.$$;
    $$$cl20381.set_type_args($$subscribers,$$targs$$);
    
    //AttributeDecl subscribers at Subscribers.ceylon (4:4-4:53)
    $$subscribers.subscribers$21033_=$$$cc20402.LinkedList(undefined,{Element:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}}});
    $$subscribers.$prop$getSubscribers$21033={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}}}},$cont:Subscribers,d:['io.cayla.mvvm','Subscribers','$at','subscribers']};}};
    $$subscribers.$prop$getSubscribers$21033.get=function(){return subscribers$21033};
    return $$subscribers;
}
Subscribers.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},d:['io.cayla.mvvm','Subscribers']};};
function $init$Subscribers(){
    if (Subscribers.$$===undefined){
        $$$cl20381.initTypeProto(Subscribers,'io.cayla.mvvm::Subscribers',$$$cl20381.Basic);
        (function($$subscribers){
            
            //AttributeDecl subscribers at Subscribers.ceylon (4:4-4:53)
            $$$cl20381.defineAttr($$subscribers,'subscribers$21033',function(){return this.subscribers$21033_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.LinkedList,a:{Element:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}}}},$cont:Subscribers,d:['io.cayla.mvvm','Subscribers','$at','subscribers']};});
            
            //MethodDef notify at Subscribers.ceylon (6:4-17:4)
            $$subscribers.notify=function notify(source$21034){
                var $$subscribers=this;
                if((!$$subscribers.subscribers$21033.empty)){
                    getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Subscribers ",12),$$subscribers.string,$$$cl20381.String(": start notifying changes",25)]).string);
                    //'for' statement at Subscribers.ceylon (9:12-12:12)
                    var it$21035 = $$subscribers.subscribers$21033.iterator();
                    var subscriber$21036;while ((subscriber$21036=it$21035.next())!==$$$cl20381.getFinished()){
                        getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Subscribers ",12),$$subscribers.string,$$$cl20381.String(": nofifying subscriber ",23),subscriber$21036.string]).string);
                        subscriber$21036(source$21034);
                    }
                    getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Subscribers ",12),$$subscribers.string,$$$cl20381.String(": end notifying changes",23)]).string);
                }else {
                    getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Subscribers ",12),$$subscribers.string,$$$cl20381.String(": no subscribers to notify",26)]).string);
                }
            };$$subscribers.notify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'source',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:Subscribers,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','Subscribers','$m','notify']};};
            
            //MethodDef subscribe at Subscribers.ceylon (19:4-27:4)
            $$subscribers.subscribe=function subscribe(subscriber$21037){
                var $$subscribers=this;
                $$subscribers.subscribers$21033.add($$$cl20381.$JsCallable(subscriber$21037,[],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}));
                
                //ObjectDef subscription at Subscribers.ceylon (21:8-25:8)
                function subscription$21038(){
                    var $$subscription$21038=new subscription$21038.$$;
                    Subscription($$subscription$21038);
                    return $$subscription$21038;
                };subscription$21038.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},satisfies:[{t:Subscription}],d:['io.cayla.mvvm','Subscribers','$m','subscribe','$o','subscription']};};
                function $init$subscription$21038(){
                    if (subscription$21038.$$===undefined){
                        $$$cl20381.initTypeProto(subscription$21038,'io.cayla.mvvm::Subscribers.subscribe.subscription',$$$cl20381.Basic,$init$Subscription());
                        (function($$subscription$21038){
                            
                            //MethodDef dispose at Subscribers.ceylon (22:12-24:12)
                            $$subscription$21038.dispose=function dispose(){
                                var $$subscription$21038=this;
                                $$subscribers.subscribers$21033.removeElement($$$cl20381.$JsCallable(subscriber$21037,[],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}));
                            };$$subscription$21038.dispose.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:subscription$21038,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','Subscribers','$m','subscribe','$o','subscription','$m','dispose']};};
                        })(subscription$21038.$$.prototype);
                    }
                    return subscription$21038;
                }
                $init$subscription$21038();
                var subscription$21039;
                function getSubscription$21039(){
                    if (subscription$21039===undefined){subscription$21039=$init$subscription$21038()();subscription$21039.$$metamodel$$=getSubscription$21039.$$metamodel$$;}
                    return subscription$21039;
                }
                getSubscription$21039.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:subscription$21038},d:['io.cayla.mvvm','Subscribers','$m','subscribe','$o','subscription']};};
                $prop$getSubscription$21039={get:getSubscription$21039,$$metamodel$$:getSubscription$21039.$$metamodel$$};
                return getSubscription$21039();
            };$$subscribers.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Subscribers,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','Subscribers','$m','subscribe']};};
        })(Subscribers.$$.prototype);
    }
    return Subscribers;
}
exports.$init$Subscribers=$init$Subscribers;
$init$Subscribers();

//ClassDef Property at Property.ceylon (3:0-21:0)
function Property(val$21040, $$targs$$,$$property){
    $init$Property();
    if ($$property===undefined)$$property=new Property.$$;
    $$$cl20381.set_type_args($$property,$$targs$$);
    $$property.val$21040_=val$21040;
    Observable($$property.$$targs$$===undefined?$$targs$$:{Value:$$property.$$targs$$.Value},$$property);
    
    //AttributeDecl subscribers at Property.ceylon (8:4-8:44)
    $$property.subscribers$21041_=Subscribers({Value:$$property.$$targs$$.Value});
    $$property.$prop$getSubscribers$21041={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:Property,d:['io.cayla.mvvm','Property','$at','subscribers']};}};
    $$property.$prop$getSubscribers$21041.get=function(){return subscribers$21041};
    return $$property;
}
Property.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[$$$cl20381.variable()];}}],$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},satisfies:[{t:Observable,a:{Value:'Value'}}],$an:function(){return[$$$cl20381.doc($$$cl20381.String("A property defines a read/write access to a value. A property is also an observable and can be watched for notification changes.",128)),$$$cl20381.shared()];},d:['io.cayla.mvvm','Property']};};
exports.Property=Property;
function $init$Property(){
    if (Property.$$===undefined){
        $$$cl20381.initTypeProto(Property,'io.cayla.mvvm::Property',$$$cl20381.Basic,$init$Observable());
        (function($$property){
            
            //AttributeDecl subscribers at Property.ceylon (8:4-8:44)
            $$$cl20381.defineAttr($$property,'subscribers$21041',function(){return this.subscribers$21041_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:Property,d:['io.cayla.mvvm','Property','$at','subscribers']};});
            
            //MethodDecl subscribe at Property.ceylon (9:4-9:105)
            $$property.subscribe=function (subscriber$21042){
                var $$property=this;
                return $$property.subscribers$21041.subscribe($$$cl20381.$JsCallable(subscriber$21042,[],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[$$property.$$targs$$.Value]}}));
            };
            $$property.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Property,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','Property','$m','subscribe']};};
            
            //MethodDef getValue at Property.ceylon (11:4-14:4)
            $$property.getValue=function getValue(){
                var $$property=this;
                getDependant().report($$property);
                return $$property.val$21040;
            };$$property.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:Property,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','Property','$m','getValue']};};
            
            //MethodDef setValue at Property.ceylon (16:4-20:4)
            $$property.setValue=function setValue(val$21043){
                var $$property=this;
                ($$property.val$21040=val$21043);
                $$property.subscribers$21041.notify(val$21043);
            };$$property.setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:Property,$an:function(){return[$$$cl20381.doc($$$cl20381.String("Update the property value, this will cause subscribers to be notified after the value has been updated.",103)),$$$cl20381.shared()];},d:['io.cayla.mvvm','Property','$m','setValue']};};
            $$$cl20381.defineAttr($$property,'val$21040',function(){return this.val$21040_;},function(Property$21044){return this.val$21040_=Property$21044;},function(){return{mod:$$METAMODEL$$,$t:'Value',$cont:Property,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm','Property','$at','val']};});
        })(Property.$$.prototype);
    }
    return Property;
}
exports.$init$Property=$init$Property;
$init$Property();

//ClassDef ObservableList at ObservableList.ceylon (3:0-116:0)
function ObservableList(list$21045, $$targs$$,$$observableList){
    $init$ObservableList();
    if ($$observableList===undefined)$$observableList=new ObservableList.$$;
    $$$cl20381.set_type_args($$observableList,$$targs$$);
    if(list$21045===undefined){list$21045=$$$cc20402.LinkedList(undefined,{Element:$$observableList.$$targs$$.Element});}
    $$observableList.list$21045_=list$21045;
    Observable($$observableList.$$targs$$===undefined?$$targs$$:{Value:{t:$$$cl20381.List,a:{Element:$$observableList.$$targs$$.Element}}},$$observableList);
    $$$cl20381.add_type_arg($$observableList,'Value',{t:$$$cl20381.List,a:{Element:$$observableList.$$targs$$.Element}});
    $$$cc20402.MutableList($$observableList.$$targs$$===undefined?$$targs$$:{Element:$$observableList.$$targs$$.Element},$$observableList);
    
    //AttributeDecl subscribers at ObservableList.ceylon (18:4-18:52)
    $$observableList.subscribers$21046_=Subscribers({Value:{t:$$$cl20381.List,a:{Element:$$observableList.$$targs$$.Element}}});
    $$observableList.$prop$getSubscribers$21046={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:{t:$$$cl20381.List,a:{Element:'Element'}}}},$cont:ObservableList,d:['io.cayla.mvvm','ObservableList','$at','subscribers']};}};
    $$observableList.$prop$getSubscribers$21046.get=function(){return subscribers$21046};
    return $$observableList;
}
ObservableList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'list',$mt:'prm',$def:1,$t:{t:$$$cc20402.MutableList,a:{Element:'Element'}},$an:function(){return[$$$cl20381.doc("The mutable list")];}}],$tp:{Element:{'satisfies':[{t:$$$cl20381.$Object}]}},satisfies:[{t:Observable,a:{Value:{t:$$$cl20381.List,a:{Element:'Element'}}}},{t:$$$cc20402.MutableList,a:{Element:'Element'}}],$an:function(){return[$$$cl20381.doc($$$cl20381.String("An observable list that wraps a Ceylon mutable list. The observed list provides notifications for changes of the list itself, changes made to\nthe elements themselves are not related to this observable object.\n\nWhen dependency tracking is active, accessing the list in read mode creates an implicit dependency on this observable.\nWhen the list is modified, subscribers of this observable will be notified.\n\nKeep in mind that the updating directly the underlying list will not broadcast any update. Likewise reading the underlying list\nwill not affect dependency tracking.\n",571)),$$$cl20381.shared()];},d:['io.cayla.mvvm','ObservableList']};};
exports.ObservableList=ObservableList;
function $init$ObservableList(){
    if (ObservableList.$$===undefined){
        $$$cl20381.initTypeProto(ObservableList,'io.cayla.mvvm::ObservableList',$$$cl20381.Basic,$init$Observable(),$$$cc20402.MutableList);
        (function($$observableList){
            
            //AttributeDecl subscribers at ObservableList.ceylon (18:4-18:52)
            $$$cl20381.defineAttr($$observableList,'subscribers$21046',function(){return this.subscribers$21046_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:{t:$$$cl20381.List,a:{Element:'Element'}}}},$cont:ObservableList,d:['io.cayla.mvvm','ObservableList','$at','subscribers']};});
            
            //MethodDecl subscribe at ObservableList.ceylon (20:4-20:113)
            $$observableList.subscribe=function (subscriber$21047){
                var $$observableList=this;
                return $$observableList.subscribers$21046.subscribe($$$cl20381.$JsCallable(subscriber$21047,[],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.List,a:{Element:$$observableList.$$targs$$.Element}}]}}));
            };
            $$observableList.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:{t:$$$cl20381.List,a:{Element:'Element'}}}]}}},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','subscribe']};};
            
            //MethodDef equals at ObservableList.ceylon (22:4-25:4)
            $$observableList.equals=function equals(that$21048){
                var $$observableList=this;
                return $$observableList.getT$all()['ceylon.language::Identifiable'].$$.prototype.equals.call(this,that$21048);
            };$$observableList.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual(),$$$cl20381.$default()];},d:['io.cayla.mvvm','ObservableList','$m','equals']};};
            
            //AttributeGetterDef hash at ObservableList.ceylon (27:4-30:4)
            $$$cl20381.defineAttr($$observableList,'hash',function(){
                var $$observableList=this;
                return $$$cl20381.attrGetter($$observableList.getT$all()['ceylon.language::Identifiable'],'hash').call(this);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$at','hash']};});
            //AttributeGetterDef clone at ObservableList.ceylon (32:4-35:4)
            $$$cl20381.defineAttr($$observableList,'clone',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$21045.clone;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$at','clone']};});
            //MethodDef get at ObservableList.ceylon (37:4-40:4)
            $$observableList.$get=function $get(index$21049){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$21045.$get(index$21049);
            };$$observableList.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','get']};};
            
            //AttributeGetterDef lastIndex at ObservableList.ceylon (42:4-45:4)
            $$$cl20381.defineAttr($$observableList,'lastIndex',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$21045.lastIndex;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},{t:$$$cl20381.Integer}]},$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$at','lastIndex']};});
            //AttributeGetterDef rest at ObservableList.ceylon (47:4-50:4)
            $$$cl20381.defineAttr($$observableList,'rest',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$21045.rest;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$at','rest']};});
            //AttributeGetterDef reversed at ObservableList.ceylon (52:4-55:4)
            $$$cl20381.defineAttr($$observableList,'reversed',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$21045.reversed;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$at','reversed']};});
            //MethodDef segment at ObservableList.ceylon (57:4-60:4)
            $$observableList.segment=function segment(from$21050,length$21051){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$21045.segment(from$21050,length$21051);
            };$$observableList.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','segment']};};
            
            //MethodDef span at ObservableList.ceylon (62:4-65:4)
            $$observableList.span=function span(from$21052,to$21053){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.span(from$21052,to$21053);
            };$$observableList.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','span']};};
            
            //MethodDef spanFrom at ObservableList.ceylon (67:4-70:4)
            $$observableList.spanFrom=function spanFrom(from$21054){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.spanFrom(from$21054);
            };$$observableList.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','spanFrom']};};
            
            //MethodDef spanTo at ObservableList.ceylon (72:4-75:4)
            $$observableList.spanTo=function spanTo(to$21055){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.spanTo(to$21055);
            };$$observableList.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','spanTo']};};
            
            //MethodDef set at ObservableList.ceylon (77:4-80:4)
            $$observableList.set=function set(index$21056,val$21057){
                var $$observableList=this;
                $$observableList.list$21045.set(index$21056,val$21057);
                $$observableList.subscribers$21046.notify($$observableList.list$21045);
            };$$observableList.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','set']};};
            
            //MethodDef insert at ObservableList.ceylon (82:4-85:4)
            $$observableList.insert=function insert(index$21058,val$21059){
                var $$observableList=this;
                $$observableList.list$21045.insert(index$21058,val$21059);
                $$observableList.subscribers$21046.notify($$observableList.list$21045);
            };$$observableList.insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','insert']};};
            
            //MethodDef addAll at ObservableList.ceylon (87:4-90:4)
            $$observableList.addAll=function addAll(values$21060){
                var $$observableList=this;
                $$observableList.list$21045.addAll(values$21060);
                $$observableList.subscribers$21046.notify($$observableList.list$21045);
            };$$observableList.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl20381.Iterable,a:{Element:'Element',Absent:{t:$$$cl20381.Null}}},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','addAll']};};
            
            //MethodDef removeElement at ObservableList.ceylon (92:4-95:4)
            $$observableList.removeElement=function removeElement(val$21061){
                var $$observableList=this;
                $$observableList.list$21045.removeElement(val$21061);
                $$observableList.subscribers$21046.notify($$observableList.list$21045);
            };$$observableList.removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','removeElement']};};
            
            //MethodDef clear at ObservableList.ceylon (97:4-100:4)
            $$observableList.clear=function clear(){
                var $$observableList=this;
                $$observableList.list$21045.clear();
                $$observableList.subscribers$21046.notify($$observableList.list$21045);
            };$$observableList.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','clear']};};
            
            //MethodDef add at ObservableList.ceylon (102:4-105:4)
            $$observableList.add=function add(element$21062){
                var $$observableList=this;
                $$observableList.list$21045.add(element$21062);
                $$observableList.subscribers$21046.notify($$observableList.list$21045);
            };$$observableList.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','add']};};
            
            //MethodDef remove at ObservableList.ceylon (107:4-111:4)
            $$observableList.remove=function remove(index$21063){
                var $$observableList=this;
                
                //AttributeDecl ret at ObservableList.ceylon (108:8-108:38)
                var ret$21064=$$observableList.list$21045.remove(index$21063);
                $$observableList.subscribers$21046.notify($$observableList.list$21045);
                return ret$21064;
            };$$observableList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','remove']};};
            
            //MethodDef getValue at ObservableList.ceylon (113:4-115:4)
            $$observableList.getValue=function getValue(){
                var $$observableList=this;
                return $$observableList;
            };$$observableList.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:'Element'}},$ps:[],$cont:ObservableList,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ObservableList','$m','getValue']};};
            $$$cl20381.defineAttr($$observableList,'list$21045',function(){return this.list$21045_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.MutableList,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl20381.doc("The mutable list")];},d:['io.cayla.mvvm','ObservableList','$at','list']};});
        })(ObservableList.$$.prototype);
    }
    return ObservableList;
}
exports.$init$ObservableList=$init$ObservableList;
$init$ObservableList();

//InterfaceDef Observable at Observable.ceylon (3:0-24:0)
function Observable($$targs$$,$$observable){
    $$$cl20381.set_type_args($$observable,$$targs$$);
}
Observable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'out','satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.doc($$$cl20381.String("An observable value can be evaluated and watched for change notifications.\n",75)),$$$cl20381.shared()];},d:['io.cayla.mvvm','Observable']};};
exports.Observable=Observable;
function $init$Observable(){
    if (Observable.$$===undefined){
        $$$cl20381.initTypeProtoI(Observable,'io.cayla.mvvm::Observable');
        (function($$observable){
            $$observable.getValue={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:Observable,$an:function(){return[$$$cl20381.doc("Returns the most recent value that can be observed. When dependency tracking is active, this method invocation creates\nan implicit dependency on this observable."),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm','Observable','$m','getValue']};}};$$observable.subscribe={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Observable,$an:function(){return[$$$cl20381.doc("Allows a subscriber to be notified when the observed value changes over time."),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm','Observable','$m','subscribe']};}};
            //MethodDef bind at Observable.ceylon (14:4-23:4)
            $$observable.$bind=function $bind(handler$21065){
                var $$observable=this;
                
                //ObjectDef impl at Observable.ceylon (16:8-21:8)
                function impl$21066(){
                    var $$impl$21066=new impl$21066.$$;
                    Binding$binding($$impl$21066);
                    return $$impl$21066;
                };impl$21066.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Binding$binding},d:['io.cayla.mvvm','Observable','$m','bind','$o','impl']};};
                function $init$impl$21066(){
                    if (impl$21066.$$===undefined){
                        $$$cl20381.initTypeProto(impl$21066,'io.cayla.mvvm::Observable.bind.impl',$init$Binding$binding());
                        (function($$impl$21066){
                            
                            //MethodDef init at Observable.ceylon (17:12-20:12)
                            $$impl$21066.init=function init(context$21067){
                                var $$impl$21066=this;
                                
                                //AttributeDecl v at Observable.ceylon (18:16-18:36)
                                var v$21068=$$observable.getValue();
                                handler$21065.init(v$21068,context$21067);
                            };$$impl$21066.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$binding},$an:function(){return[];}}],$cont:impl$21066,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','Observable','$m','bind','$o','impl','$m','init']};};
                        })(impl$21066.$$.prototype);
                    }
                    return impl$21066;
                }
                $init$impl$21066();
                var impl$21069;
                function getImpl$21069(){
                    if (impl$21069===undefined){impl$21069=$init$impl$21066()();impl$21069.$$metamodel$$=getImpl$21069.$$metamodel$$;}
                    return impl$21069;
                }
                getImpl$21069.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$21066},d:['io.cayla.mvvm','Observable','$m','bind','$o','impl']};};
                $prop$getImpl$21069={get:getImpl$21069,$$metamodel$$:getImpl$21069.$$metamodel$$};
                return getImpl$21069();
            };$$observable.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binding$binding},$ps:[{$nm:'handler',$mt:'prm',$t:{t:Binder$binding,a:{Value:'Value'}},$an:function(){return[];}}],$cont:Observable,$an:function(){return[$$$cl20381.doc($$$cl20381.String("Binds a binder to this observable.",34)),$$$cl20381.shared()];},d:['io.cayla.mvvm','Observable','$m','bind']};};
        })(Observable.$$.prototype);
    }
    return Observable;
}
exports.$init$Observable=$init$Observable;
$init$Observable();

//InterfaceDef ModelContext at ModelContext.ceylon (2:0-14:0)
function ModelContext($$modelContext){
}
ModelContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl20381.doc($$$cl20381.String("The model context provides interaction with the model bound to a view",69)),$$$cl20381.shared()];},d:['io.cayla.mvvm','ModelContext']};};
exports.ModelContext=ModelContext;
function $init$ModelContext(){
    if (ModelContext.$$===undefined){
        $$$cl20381.initTypeProtoI(ModelContext,'io.cayla.mvvm::ModelContext');
        (function($$modelContext){
            $$modelContext.resolve={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},'Value']},$ps:[],$cont:ModelContext,$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.doc("Resolve a value against this binding context, the value can either be the current object or be resolved in an ancestor context."),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm','ModelContext','$m','resolve']};}};$$modelContext.createChild={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ModelContext},$ps:[{$nm:'childModel',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],$cont:ModelContext,$an:function(){return[$$$cl20381.doc("Create a child context associated with the child model"),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm','ModelContext','$m','createChild']};}};$$modelContext.destroy={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:ModelContext,$an:function(){return[$$$cl20381.doc("Destroy this context"),$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.mvvm','ModelContext','$m','destroy']};}};
        })(ModelContext.$$.prototype);
    }
    return ModelContext;
}
exports.$init$ModelContext=$init$ModelContext;
$init$ModelContext();

//ClassDef CyclicDependencyException at CyclicDependencyException.ceylon (1:0-2:0)
function CyclicDependencyException($$cyclicDependencyException){
    $init$CyclicDependencyException();
    if ($$cyclicDependencyException===undefined)$$cyclicDependencyException=new CyclicDependencyException.$$;
    $$$cl20381.Exception(undefined,undefined,$$cyclicDependencyException);
    return $$cyclicDependencyException;
}
CyclicDependencyException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Exception},$ps:[],$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','CyclicDependencyException']};};
exports.CyclicDependencyException=CyclicDependencyException;
function $init$CyclicDependencyException(){
    if (CyclicDependencyException.$$===undefined){
        $$$cl20381.initTypeProto(CyclicDependencyException,'io.cayla.mvvm::CyclicDependencyException',$$$cl20381.Exception);
    }
    return CyclicDependencyException;
}
exports.$init$CyclicDependencyException=$init$CyclicDependencyException;
$init$CyclicDependencyException();

//MethodDecl computed at ComputedObservable.ceylon (2:0-4:38)
var computed=function (compute$21070,$$$mptypes){
    return ComputedObservable($$$cl20381.$JsCallable(compute$21070,[],{Return:$$$mptypes.Value,Arguments:{t:$$$cl20381.Empty}}),{Value:$$$mptypes.Value});
};
computed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ComputedObservable,a:{Value:'Value'}},$ps:[{$nm:'compute',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:'Value',Arguments:{t:$$$cl20381.Empty}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.mvvm','computed']};};
exports.computed=computed;

//ClassDef ComputedObservable at ComputedObservable.ceylon (6:0-79:0)
function ComputedObservable(closure$21071, $$targs$$,$$computedObservable){
    $init$ComputedObservable();
    if ($$computedObservable===undefined)$$computedObservable=new ComputedObservable.$$;
    $$$cl20381.set_type_args($$computedObservable,$$targs$$);
    $$computedObservable.closure$21071_=closure$21071;
    Observable($$computedObservable.$$targs$$===undefined?$$targs$$:{Value:$$computedObservable.$$targs$$.Value},$$computedObservable);
    
    //AttributeDecl subscribers at ComputedObservable.ceylon (12:4-12:44)
    $$computedObservable.subscribers$21072_=Subscribers({Value:$$computedObservable.$$targs$$.Value});
    $$computedObservable.$prop$getSubscribers$21072={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','subscribers']};}};
    $$computedObservable.$prop$getSubscribers$21072.get=function(){return subscribers$21072};
    
    //AttributeDecl evaluation at ComputedObservable.ceylon (13:4-13:37)
    $$computedObservable.evaluation$21073_=null;
    $$computedObservable.$prop$getEvaluation$21073={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},'Value']},$cont:ComputedObservable,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm','ComputedObservable','$at','evaluation']};}};
    $$computedObservable.$prop$getEvaluation$21073.get=function(){return evaluation$21073};
    
    //AttributeDecl evaluating at ComputedObservable.ceylon (14:4-14:39)
    $$computedObservable.evaluating$21074_=false;
    $$computedObservable.$prop$getEvaluating$21074={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$cont:ComputedObservable,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm','ComputedObservable','$at','evaluating']};}};
    $$computedObservable.$prop$getEvaluating$21074.get=function(){return evaluating$21074};
    
    //AttributeDecl dependencies at ComputedObservable.ceylon (15:4-15:68)
    $$computedObservable.dependencies$21075_=$$$cc20402.HashMap(undefined,{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}});
    $$computedObservable.$prop$getDependencies$21075={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.HashMap,a:{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','dependencies']};}};
    $$computedObservable.$prop$getDependencies$21075.get=function(){return dependencies$21075};
    return $$computedObservable;
}
ComputedObservable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'closure',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:'Value',Arguments:{t:$$$cl20381.Empty}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl20381.$Object}]}},satisfies:[{t:Observable,a:{Value:'Value'}}],$an:function(){return[$$$cl20381.doc($$$cl20381.String("A computed observable turns a closure into an observable of the value produced by the function. The computed\nobservable can depend on one or more other observables and it will automatically update whenever any of these\ndependencies change.\n",240)),$$$cl20381.shared()];},d:['io.cayla.mvvm','ComputedObservable']};};
exports.ComputedObservable=ComputedObservable;
function $init$ComputedObservable(){
    if (ComputedObservable.$$===undefined){
        $$$cl20381.initTypeProto(ComputedObservable,'io.cayla.mvvm::ComputedObservable',$$$cl20381.Basic,$init$Observable());
        (function($$computedObservable){
            
            //AttributeDecl subscribers at ComputedObservable.ceylon (12:4-12:44)
            $$$cl20381.defineAttr($$computedObservable,'subscribers$21072',function(){return this.subscribers$21072_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','subscribers']};});
            
            //AttributeDecl evaluation at ComputedObservable.ceylon (13:4-13:37)
            $$$cl20381.defineAttr($$computedObservable,'evaluation$21073',function(){return this.evaluation$21073_;},function(evaluation$21076){return this.evaluation$21073_=evaluation$21076;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},'Value']},$cont:ComputedObservable,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm','ComputedObservable','$at','evaluation']};});
            
            //AttributeDecl evaluating at ComputedObservable.ceylon (14:4-14:39)
            $$$cl20381.defineAttr($$computedObservable,'evaluating$21074',function(){return this.evaluating$21074_;},function(evaluating$21077){return this.evaluating$21074_=evaluating$21077;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$cont:ComputedObservable,$an:function(){return[$$$cl20381.variable()];},d:['io.cayla.mvvm','ComputedObservable','$at','evaluating']};});
            
            //AttributeDecl dependencies at ComputedObservable.ceylon (15:4-15:68)
            $$$cl20381.defineAttr($$computedObservable,'dependencies$21075',function(){return this.dependencies$21075_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc20402.HashMap,a:{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','dependencies']};});
            
            //MethodDecl subscribe at ComputedObservable.ceylon (16:4-16:105)
            $$computedObservable.subscribe=function (subscriber$21078){
                var $$computedObservable=this;
                return $$computedObservable.subscribers$21072.subscribe($$$cl20381.$JsCallable(subscriber$21078,[],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[$$computedObservable.$$targs$$.Value]}}));
            };
            $$computedObservable.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl20381.Callable,a:{Return:{t:$$$cl20381.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:ComputedObservable,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ComputedObservable','$m','subscribe']};};
            
            //MethodDef evaluate at ComputedObservable.ceylon (18:4-62:4)
            $$computedObservable.evaluate$21079=function evaluate$21079(){
                var $$computedObservable=this;
                if($$computedObservable.evaluating$21074){
                    return null;
                }else {
                    getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Computed ",9),$$computedObservable.string,$$$cl20381.String(":  starting evaluation",22)]).string);
                    $$computedObservable.evaluating$21074=true;
                    
                    //AttributeDecl e at ComputedObservable.ceylon (24:12-24:19)
                    var e$21080;
                    
                    //AttributeDecl observed at ComputedObservable.ceylon (25:12-25:44)
                    var observed$21081;
                    try{
                        getDependant().begin();
                        e$21080=$$computedObservable.closure$21071();
                    }finally{
                        observed$21081=getDependant().end();
                        $$computedObservable.evaluating$21074=false;
                        getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Computed ",9),$$computedObservable.string,$$$cl20381.String(": stopping evaluation",21)]).string);
                    }
                    //'for' statement at ComputedObservable.ceylon (35:12-41:12)
                    var it$21082 = $$$cc20402.HashMap($$computedObservable.dependencies$21075,{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl20381.$Object}}}}).iterator();
                    var item$21083;while ((item$21083=it$21082.next())!==$$$cl20381.getFinished()){
                        var dependency$21084=item$21083.key;
                        var subscription$21085=item$21083.item;
                        if((!observed$21081.contains(dependency$21084))){
                            getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Computed ",9),$$computedObservable.string,$$$cl20381.String(": disposing subscription ",25),subscription$21085.string]).string);
                            $$computedObservable.dependencies$21075.remove(dependency$21084);
                            subscription$21085.dispose();
                        }
                    }
                    //'for' statement at ComputedObservable.ceylon (42:12-59:12)
                    var it$21086 = observed$21081.iterator();
                    var o$21087;while ((o$21087=it$21086.next())!==$$$cl20381.getFinished()){
                        var dependency$21088;
                        if((dependency$21088=$$computedObservable.dependencies$21075.$get(o$21087))!==null){}else {
                            
                            //MethodDef update at ComputedObservable.ceylon (46:20-54:20)
                            function update$21089(o$21090){
                                
                                //AttributeDecl e at ComputedObservable.ceylon (47:24-47:45)
                                var e$21091=$$computedObservable.evaluate$21079();
                                var e$21092;
                                if((e$21092=e$21091)!==null){
                                    $$computedObservable.evaluation$21073=e$21092;
                                    $$computedObservable.subscribers$21072.notify(e$21092);
                                }else {}
                            };update$21089.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],d:['io.cayla.mvvm','ComputedObservable','$m','evaluate','$m','update']};};
                            
                            //AttributeDecl subscription at ComputedObservable.ceylon (55:20-55:60)
                            var subscription$21093=o$21087.subscribe($$$cl20381.$JsCallable(update$21089,[{$nm:'o',$mt:'prm',$t:{t:$$$cl20381.$Object},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.$Object}]}}));
                            getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Computed ",9),$$computedObservable.string,$$$cl20381.String(": subscribed ",13),subscription$21093.string,$$$cl20381.String(" to ",4),o$21087.string]).string);
                            $$computedObservable.dependencies$21075.put(o$21087,subscription$21093);
                        }
                    }
                    return e$21080;
                }
            };$$computedObservable.evaluate$21079.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl20381.Null},'Value']},$ps:[],$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$m','evaluate']};};
            
            //MethodDef getValue at ComputedObservable.ceylon (64:4-78:4)
            $$computedObservable.getValue=function getValue(){
                var $$computedObservable=this;
                getDependant().report($$computedObservable);
                var e$21094;
                if((e$21094=$$computedObservable.evaluation$21073)!==null){
                    getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("Computed ",9),$$computedObservable.string,$$$cl20381.String(": returning cached evaluation ",30),e$21094.string]).string);
                    return e$21094;
                }else {
                    
                    //AttributeDecl e at ComputedObservable.ceylon (70:12-70:33)
                    var e$21095=$$computedObservable.evaluate$21079();
                    var e$21096;
                    if((e$21096=e$21095)!==null){
                        $$computedObservable.evaluation$21073=e$21096;
                        return e$21096;
                    }else {
                        throw $$$cl20381.wrapexc(CyclicDependencyException(),'75:16-75:49','io/cayla/mvvm/ComputedObservable.ceylon');
                    }
                }
            };$$computedObservable.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:ComputedObservable,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.mvvm','ComputedObservable','$m','getValue']};};
            $$$cl20381.defineAttr($$computedObservable,'closure$21071',function(){return this.closure$21071_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Callable,a:{Return:'Value',Arguments:{t:$$$cl20381.Empty}}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','closure']};});
        })(ComputedObservable.$$.prototype);
    }
    return ComputedObservable;
}
exports.$init$ComputedObservable=$init$ComputedObservable;
$init$ComputedObservable();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

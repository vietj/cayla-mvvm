(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"io.cayla.mvvm.view":{"Binding":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"Binding","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"A":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"A","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"href","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"href":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"href","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"InputText":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"InputText","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"attr"}},"$mt":"cls"},"Element":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"Element","$ps":[{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"id","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"classNames","$mt":"prm"},{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"default":[]},"$nm":"attrs","$mt":"attr"}},"$m":{"bind":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"bind","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"o","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"Label":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Label","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"H1":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"H1","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"BindingContext":{"$an":{"shared":[]},"$nm":"BindingContext","$at":{"node":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"formal":[],"shared":[]},"$nm":"node","$mt":"attr"},"createChildren":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[],"variable":[]},"$nm":"createChildren","var":"1","$mt":"attr"},"element":{"$t":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"formal":[],"shared":[]},"$nm":"element","$mt":"attr"}},"$m":{"resolve":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"formal":[],"shared":[]},"$nm":"resolve","$mt":"mthd"},"destroy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"destroy","$mt":"mthd"},"child":{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$an":{"formal":[],"shared":[]},"$nm":"child","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"child","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"Section":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Section","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Span":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Span","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Strong":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Strong","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Bindings":{"$an":{"shared":[]},"$nm":"Bindings","$alias":{"comp":"u","$ts":[{"$nm":"Binding","$pk":"io.cayla.mvvm.view"},{"$tp":[{"$nm":"Binding","$mt":"tpm","$pk":"io.cayla.mvvm.view"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]},"$mt":"als"},"Div":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Div","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"P":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"P","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"ModelContext":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"ModelContext","$ps":[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"o","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ModelContext","$pk":"io.cayla.mvvm.view"}]},"$an":{"shared":[]},"$nm":"parent","$mt":"prm"}],"$at":{"parent":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ModelContext","$pk":"io.cayla.mvvm.view"}]},"$an":{"shared":[]},"$nm":"parent","$mt":"attr"},"nodes":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"io.cayla.mvvm.dom"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$an":{"shared":[]},"$nm":"nodes","$mt":"attr"},"o":{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"o","$mt":"attr"}},"$m":{"resolve":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"shared":[]},"$nm":"resolve","$mt":"mthd"},"destroy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"destroy","$mt":"mthd"},"register":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"register","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"$pkg-shared":"1","Input":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Input","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Header":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Header","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Button":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Button","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"CheckBox":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"CheckBox","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"Ul":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Ul","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Footer":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Footer","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Li":{"super":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"Li","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"io.cayla.mvvm.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"io.cayla.mvvm.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"ElementBindingContext":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"ElementBindingContext","satisfies":[{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"}],"$ps":[{"$t":{"$nm":"ModelContext","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"model","$mt":"prm"},{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[],"actual":[]},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[],"actual":[]},"$nm":"element","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ElementBindingContext","$pk":"io.cayla.mvvm.view"}]},"$nm":"parent","$mt":"prm"}],"$at":{"node":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[],"actual":[]},"$nm":"node","$mt":"attr"},"parent":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ElementBindingContext","$pk":"io.cayla.mvvm.view"}]},"$nm":"parent","$mt":"attr"},"model":{"$t":{"$nm":"ModelContext","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"model","$mt":"attr"},"createChildren":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"createChildren","var":"1","$mt":"attr"},"element":{"$t":{"$nm":"Element","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[],"actual":[]},"$nm":"element","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"init","$mt":"mthd"},"resolve":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"shared":[],"actual":[]},"$nm":"resolve","$mt":"mthd"},"initChildren":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"initChildren","$mt":"mthd"},"destroy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"destroy","$mt":"mthd"},"child":{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[],"actual":[]},"$nm":"child","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"child","$mt":"prm"}]],"$mt":"mthd"},"register":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"register","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}},"$mod-version":"0.1.0","$mod-deps":["ceylon.collection\/1.0.0","ceylon.language\/1.0.0"],"io.cayla.mvvm":{"Frame":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Frame","$at":{"observables":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"HashSet","$md":"ceylon.collection","$pk":"ceylon.collection"},"$an":{"shared":[]},"$nm":"observables","$mt":"attr"}},"$mt":"cls"},"computed":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"ComputedObservable","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"computed","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"compute","$mt":"prm"}]],"$mt":"mthd"},"log":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"log","$m":{"debug":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"debug","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"message","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"binders":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"binders","$m":{"with":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"with","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"foreach":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"foreach","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$at":{"values":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"values","$mt":"attr"},"contexts":{"$t":{"$tp":[{"$nm":"BindingContext","$mt":"tpm","$pk":"io.cayla.mvvm.view"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"contexts","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"notify":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"notify","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}],[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"list","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"css":{"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"css","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"className","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"visible":{"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"visible","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"click":{"$tp":[{"$def":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}],"$mt":"tpm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"click","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}],"$mt":"tpm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}}},"$mt":"obj","$o":{"val":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"val","satisfies":[{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"io.cayla.mvvm.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"},"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"checked":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"checked","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"io.cayla.mvvm.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"enter":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"enter","satisfies":[{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"io.cayla.mvvm.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"text":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"text","satisfies":[{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"property","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"Observable":{"$tp":[{"$nm":"Value","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$an":{"shared":[]},"$nm":"Observable","$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"formal":[],"shared":[]},"$nm":"getValue","$mt":"mthd"},"bind":{"$t":{"$nm":"Binding","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"bind","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"},"$nm":"handler","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Binding","$pk":"io.cayla.mvvm.view"},"$nm":"impl","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"formal":[],"shared":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"$pkg-shared":"1","Binder":{"$tp":[{"$nm":"Value","variance":"in"}],"$an":{"shared":[]},"$nm":"Binder","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"ObservableList":{"$tp":[{"$nm":"Element","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ObservableList","satisfies":[{"$tp":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"MutableList","$md":"ceylon.collection","$pk":"ceylon.collection"}],"$at":{"rest":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"rest","$mt":"gttr"},"subscribers":{"$t":{"$tp":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Subscribers","$pk":"io.cayla.mvvm"},"$nm":"subscribers","$mt":"attr"},"clone":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"clone","$mt":"gttr"},"lastIndex":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[],"actual":[]},"$nm":"lastIndex","$mt":"gttr"},"list":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"list","$mt":"attr"},"hash":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"hash","$mt":"gttr"},"reversed":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"reversed","$mt":"gttr"}},"$m":{"add":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"add","$ps":[[{"$t":{"$nm":"Element"},"$nm":"element","$mt":"prm"}]],"$mt":"mthd"},"spanFrom":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"spanFrom","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"}]],"$mt":"mthd"},"set":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"set","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"},{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"clear":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"clear","$mt":"mthd"},"insert":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"insert","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"},{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"remove":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element"}]},"$an":{"shared":[],"actual":[]},"$nm":"remove","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"}]],"$mt":"mthd"},"spanTo":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"spanTo","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"to","$mt":"prm"}]],"$mt":"mthd"},"getValue":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"addAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"addAll","$ps":[[{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"values","$mt":"prm"}]],"$mt":"mthd"},"equals":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"equals","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"that","$mt":"prm"}]],"$mt":"mthd"},"get":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element"}]},"$an":{"shared":[],"actual":[]},"$nm":"get","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"}]],"$mt":"mthd"},"segment":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"segment","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"length","$mt":"prm"}]],"$mt":"mthd"},"removeElement":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"removeElement","$ps":[[{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"span":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"span","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"to","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"ComputedObservable":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ComputedObservable","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"io.cayla.mvvm"}],"$ps":[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"compute","$mt":"prm"}],"$at":{"compute":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"compute","$mt":"attr"},"evaluation":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"evaluation","var":"1","$mt":"attr"},"subscribers":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Subscribers","$pk":"io.cayla.mvvm"},"$nm":"subscribers","$mt":"attr"},"evaluating":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"evaluating","var":"1","$mt":"attr"},"dependencies":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"},{"$nm":"Subscription","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"HashMap","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"dependencies","$mt":"attr"}},"$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"evaluate":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$nm":"evaluate","$m":{"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"update","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"o","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"cls"},"dependant":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"dependant","$at":{"stack":{"$t":{"$tp":[{"$nm":"Frame","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"stack","$mt":"attr"}},"$m":{"report":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"report","$ps":[[{"$t":{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"io.cayla.mvvm"},"$nm":"observable","$mt":"prm"}]],"$mt":"mthd"},"end":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"io.cayla.mvvm"}],"$nm":"Set","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"end","$mt":"mthd"},"begin":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"begin","$mt":"mthd"}},"$mt":"obj"},"Subscription":{"$an":{"shared":[]},"$nm":"Subscription","$m":{"dispose":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"dispose","$mt":"mthd"}},"$mt":"ifc"},"Subscribers":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Subscribers","$at":{"subscribers":{"$t":{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"subscribers","$mt":"attr"}},"$m":{"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd","$o":{"subscription":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscription","satisfies":[{"$nm":"Subscription","$pk":"io.cayla.mvvm"}],"$m":{"dispose":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"dispose","$mt":"mthd"}},"$mt":"obj"}}},"notify":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"notify","$ps":[[{"$t":{"$nm":"Value"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"Property":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"Property","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"io.cayla.mvvm"}],"$ps":[{"$t":{"$nm":"Value"},"$an":{"variable":[]},"$nm":"val","$mt":"prm"}],"$at":{"val":{"$t":{"$nm":"Value"},"$an":{"variable":[]},"$nm":"val","var":"1","$mt":"attr"},"subscribers":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Subscribers","$pk":"io.cayla.mvvm"},"$nm":"subscribers","$mt":"attr"}},"$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"io.cayla.mvvm"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"setValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setValue","$ps":[[{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"CyclicDependencyException":{"super":{"$nm":"Exception","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"CyclicDependencyException","$mt":"cls"}},"io.cayla.mvvm.diff":{"$pkg-shared":"1","same":{"super":{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},"$an":{"shared":[],"doc":["Same change"]},"$nm":"same","$mt":"obj"},"removed":{"super":{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},"$an":{"shared":[],"doc":["Removed change"]},"$nm":"removed","$mt":"obj"},"Diff":{"$tp":[{"$nm":"E","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Diff two series of elements\n"]},"$nm":"Diff","satisfies":[{"$tp":[{"$tp":[{"comp":"u","$ts":[{"$nm":"E"},{"comp":"u","$ts":[{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.diff"}]}],"$mt":"tpm"},{"$nm":"E","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.diff"}],"$mt":"tpm"},{"$nm":"Change","$mt":"tpm","$pk":"io.cayla.mvvm.diff"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterator","$md":"ceylon.language","$pk":"ceylon.language"}],"$ps":[{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements1","$mt":"prm"},{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements2","$mt":"prm"}],"$at":{"opt":{"$t":{"$nm":"Matrix","$pk":"io.cayla.mvvm.diff"},"$nm":"opt","$mt":"attr"},"i":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"variable":[]},"$nm":"i","var":"1","$mt":"attr"},"j":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"variable":[]},"$nm":"j","var":"1","$mt":"attr"},"elements2":{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements2","$mt":"attr"},"elements1":{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements1","$mt":"attr"},"m":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"m","$mt":"attr"},"n":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"n","$mt":"attr"}},"$m":{"next":{"$t":{"comp":"u","$ts":[{"$tp":[{"comp":"u","$ts":[{"$nm":"E"},{"comp":"u","$ts":[{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.diff"}]}],"$mt":"tpm"},{"$nm":"E","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.diff"}],"$mt":"tpm"},{"$nm":"Change","$mt":"tpm","$pk":"io.cayla.mvvm.diff"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Finished","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[],"actual":[]},"$nm":"next","$mt":"mthd"}},"$mt":"cls","$c":{"Matrix":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Matrix","$ps":[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"width","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"height","$mt":"prm"}],"$at":{"string":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"string","$mt":"gttr"},"width":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"width","$mt":"attr"},"state":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Array","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"state","$mt":"attr"},"height":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"height","$mt":"attr"}},"$m":{"set":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"set","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"x","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"y","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"e","$mt":"prm"}]],"$mt":"mthd"},"get":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"get","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"x","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"y","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}}},"added":{"super":{"$nm":"Change","$pk":"io.cayla.mvvm.diff"},"$an":{"shared":[],"doc":["Added change"]},"$nm":"added","$mt":"obj"},"Change":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["A change"],"abstract":[]},"$nm":"Change","of":[{"$nm":"removed","$pk":"io.cayla.mvvm.diff"},{"$nm":"same","$pk":"io.cayla.mvvm.diff"},{"$nm":"added","$pk":"io.cayla.mvvm.diff"}],"$mt":"cls","abstract":"1"}},"$mod-bin":"6.0","io.cayla.mvvm.dom":{"$pkg-shared":"1","DomNode":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"DomNode","$ps":[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"variable":[]},"$nm":"peer","$mt":"prm"}],"$at":{"visible":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"visible","var":"1","$mt":"gttr"},"peer":{"$t":{"$nm":"unknown","$pk":"io.cayla.mvvm"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"peer","var":"1","$mt":"attr"}},"$m":{"dispatchEvent":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"dispatchEvent","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"type","$mt":"prm"}]],"$mt":"mthd"},"removeClass":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addText":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"addText","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"cdata","$mt":"prm"}]],"$mt":"mthd"},"hasClass":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"hasClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"isChecked":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"isChecked","$mt":"mthd"},"click":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"click","$mt":"mthd"},"insertBefore":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"insertBefore","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"}]},"$nm":"nextSibling","$mt":"prm"}]],"$mt":"mthd"},"getNodeValue":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"getNodeValue","$mt":"mthd"},"setNodeValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setNodeValue","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"getChildren":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"io.cayla.mvvm.dom"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"getChildren","$mt":"mthd"},"getValue":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"getValue","$mt":"mthd"},"setAttribute":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"getAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"matchesSelector":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"matchesSelector","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"setValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setValue","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"setChecked":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setChecked","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"checked","$mt":"prm"}]],"$mt":"mthd"},"setId":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setId","$ps":[[{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"}]],"$mt":"mthd"},"detach":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"detach","$mt":"mthd"},"addElement":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"addElement","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"removeAttribute":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addChild":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"addChild","$ps":[[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"},"addClass":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"addClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addEventHandler":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"addEventHandler","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"type","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"DomEvent","$pk":"io.cayla.mvvm.dom"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.dom"}],"$mt":"tpm"},{"$nm":"DomEvent","$mt":"tpm","$pk":"io.cayla.mvvm.dom"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"handler","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"selector","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"eventPeer","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"cls"},"DomContext":{"$an":{"shared":[]},"$nm":"DomContext","$mt":"ifc"},"querySelectorAll":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"io.cayla.mvvm.dom"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"querySelectorAll","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"_matchesSelector":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_matchesSelector","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"nodePeer","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"text":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"text","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"cdata","$mt":"prm"}]],"$mt":"mthd"},"byId":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"byId","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"id","$mt":"prm"}]],"$mt":"mthd"},"wrap":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$nm":"wrap","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"nodePeer","$mt":"prm"}]],"$mt":"mthd"},"element":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"element","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"DomEvent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"DomEvent","$ps":[{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"target","$mt":"prm"},{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"peer","$mt":"prm"}],"$at":{"keyCode":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"keyCode","$mt":"gttr"},"peer":{"$t":{"$nm":"unknown","$pk":"io.cayla.mvvm"},"$nm":"peer","$mt":"attr"},"target":{"$t":{"$nm":"DomNode","$pk":"io.cayla.mvvm.dom"},"$an":{"shared":[]},"$nm":"target","$mt":"attr"}},"$m":{"preventDefault":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"preventDefault","$mt":"mthd"}},"$mt":"cls"}},"$mod-name":"io.cayla.mvvm","io.cayla.mvvm.expression":{"$pkg-shared":"1","method":{"$tp":[{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Arguments","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"},"$an":{"shared":[]},"$nm":"method","$ps":[[{"$t":{"$tp":[{"$nm":"Source","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"method","$mt":"prm"}]],"$mt":"mthd"},"Expression":{"$tp":[{"$nm":"Type","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$an":{"shared":[]},"$nm":"Expression","$m":{"traverse":{"$t":{"$nm":"Type"},"$an":{"formal":[],"shared":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"},"method":{"$tp":[{"$nm":"Arguments","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"MethodExpression","$pk":"io.cayla.mvvm.expression"},"$an":{"shared":[]},"$nm":"method","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"method","$mt":"prm"}]],"$mt":"mthd"},"attribute":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"AttributeExpression","$pk":"io.cayla.mvvm.expression"},"$an":{"shared":[]},"$nm":"attribute","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Nothing","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language.meta.model"}],"$nm":"Attribute","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"attribute","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Value"},"$nm":"f","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"bindTo":{"$t":{"$nm":"Binding","$pk":"io.cayla.mvvm.view"},"$an":{"shared":[]},"$nm":"bindTo","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"}],"$nm":"Binder","$pk":"io.cayla.mvvm"},"$nm":"handler","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Binding","$pk":"io.cayla.mvvm.view"},"$nm":"impl","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"io.cayla.mvvm.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}}},"$mt":"ifc"},"ClassExpression":{"$tp":[{"$nm":"Type","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ClassExpression","satisfies":[{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Type","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"}],"$m":{"traverse":{"$t":{"$nm":"Type"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Type"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"attribute":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"},"$an":{"shared":[]},"$nm":"attribute","$ps":[[{"$t":{"$tp":[{"$nm":"Source","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Nothing","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language.meta.model"}],"$nm":"Attribute","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"attr","$mt":"prm"}]],"$mt":"mthd"},"MethodExpression":{"$tp":[{"$nm":"Container","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Arguments","variance":"in","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"MethodExpression","satisfies":[{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"}],"$ps":[{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"m","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"},"$nm":"parent","$mt":"prm"}],"$at":{"parent":{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"},"$nm":"parent","$mt":"attr"},"m":{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"m","$mt":"attr"}},"$m":{"traverse":{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"AttributeExpression":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"AttributeExpression","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"io.cayla.mvvm.expression"}],"$ps":[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.expression"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$mt":"prm"}],"$at":{"f":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"io.cayla.mvvm.expression"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$mt":"attr"}},"$m":{"traverse":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl734=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl734.$addmod$($$$cl734,'ceylon.language/1.0.0');
exports.$pkg$ans$io$cayla$mvvm$view=function(){return[$$$cl734.shared()];};

//ClassDef Section at elements.ceylon (1:0-7:0)
function Section$view(id$1000, classNames$1001, bindings$1002, content$1003, $$section){
    $init$Section$view();
    if ($$section===undefined)$$section=new Section$view.$$;
    if(id$1000===undefined){id$1000=null;}
    $$section.id$1000_=id$1000;
    if(classNames$1001===undefined){classNames$1001=$$$cl734.getEmpty();}
    $$section.classNames$1001_=classNames$1001;
    if(bindings$1002===undefined){bindings$1002=$$$cl734.getEmpty();}
    $$section.bindings$1002_=bindings$1002;
    if(content$1003===undefined){content$1003=$$$cl734.getEmpty();}
    $$section.content$1003_=content$1003;
    Element$view($$section.id$1000,$$$cl734.String("section",7),$$section.classNames$1001,$$section.bindings$1002,$$section.content$1003,$$section);
    return $$section;
}
Section$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Section']};};
exports.Section$view=Section$view;
function $init$Section$view(){
    if (Section$view.$$===undefined){
        $$$cl734.initTypeProto(Section$view,'io.cayla.mvvm.view::Section',$init$Element$view());
        (function($$section){
            $$$cl734.defineAttr($$section,'id$1000',function(){return this.id$1000_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Section$view,d:['io.cayla.mvvm.view','Section','$at','id']};});
            $$$cl734.defineAttr($$section,'classNames$1001',function(){return this.classNames$1001_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Section$view,d:['io.cayla.mvvm.view','Section','$at','classNames']};});
            $$$cl734.defineAttr($$section,'bindings$1002',function(){return this.bindings$1002_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Section$view,d:['io.cayla.mvvm.view','Section','$at','bindings']};});
            $$$cl734.defineAttr($$section,'content$1003',function(){return this.content$1003_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Section$view,d:['io.cayla.mvvm.view','Section','$at','content']};});
        })(Section$view.$$.prototype);
    }
    return Section$view;
}
exports.$init$Section$view=$init$Section$view;
$init$Section$view();

//ClassDef Header at elements.ceylon (9:0-15:0)
function Header$view(id$1004, classNames$1005, bindings$1006, content$1007, $$header){
    $init$Header$view();
    if ($$header===undefined)$$header=new Header$view.$$;
    if(id$1004===undefined){id$1004=null;}
    $$header.id$1004_=id$1004;
    if(classNames$1005===undefined){classNames$1005=$$$cl734.getEmpty();}
    $$header.classNames$1005_=classNames$1005;
    if(bindings$1006===undefined){bindings$1006=$$$cl734.getEmpty();}
    $$header.bindings$1006_=bindings$1006;
    if(content$1007===undefined){content$1007=$$$cl734.getEmpty();}
    $$header.content$1007_=content$1007;
    Element$view($$header.id$1004,$$$cl734.String("header",6),$$header.classNames$1005,$$header.bindings$1006,$$header.content$1007,$$header);
    return $$header;
}
Header$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Header']};};
exports.Header$view=Header$view;
function $init$Header$view(){
    if (Header$view.$$===undefined){
        $$$cl734.initTypeProto(Header$view,'io.cayla.mvvm.view::Header',$init$Element$view());
        (function($$header){
            $$$cl734.defineAttr($$header,'id$1004',function(){return this.id$1004_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Header$view,d:['io.cayla.mvvm.view','Header','$at','id']};});
            $$$cl734.defineAttr($$header,'classNames$1005',function(){return this.classNames$1005_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Header$view,d:['io.cayla.mvvm.view','Header','$at','classNames']};});
            $$$cl734.defineAttr($$header,'bindings$1006',function(){return this.bindings$1006_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Header$view,d:['io.cayla.mvvm.view','Header','$at','bindings']};});
            $$$cl734.defineAttr($$header,'content$1007',function(){return this.content$1007_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Header$view,d:['io.cayla.mvvm.view','Header','$at','content']};});
        })(Header$view.$$.prototype);
    }
    return Header$view;
}
exports.$init$Header$view=$init$Header$view;
$init$Header$view();

//ClassDef Footer at elements.ceylon (17:0-23:0)
function Footer$view(id$1008, classNames$1009, bindings$1010, content$1011, $$footer){
    $init$Footer$view();
    if ($$footer===undefined)$$footer=new Footer$view.$$;
    if(id$1008===undefined){id$1008=null;}
    $$footer.id$1008_=id$1008;
    if(classNames$1009===undefined){classNames$1009=$$$cl734.getEmpty();}
    $$footer.classNames$1009_=classNames$1009;
    if(bindings$1010===undefined){bindings$1010=$$$cl734.getEmpty();}
    $$footer.bindings$1010_=bindings$1010;
    if(content$1011===undefined){content$1011=$$$cl734.getEmpty();}
    $$footer.content$1011_=content$1011;
    Element$view($$footer.id$1008,$$$cl734.String("footer",6),$$footer.classNames$1009,$$footer.bindings$1010,$$footer.content$1011,$$footer);
    return $$footer;
}
Footer$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Footer']};};
exports.Footer$view=Footer$view;
function $init$Footer$view(){
    if (Footer$view.$$===undefined){
        $$$cl734.initTypeProto(Footer$view,'io.cayla.mvvm.view::Footer',$init$Element$view());
        (function($$footer){
            $$$cl734.defineAttr($$footer,'id$1008',function(){return this.id$1008_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Footer$view,d:['io.cayla.mvvm.view','Footer','$at','id']};});
            $$$cl734.defineAttr($$footer,'classNames$1009',function(){return this.classNames$1009_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Footer$view,d:['io.cayla.mvvm.view','Footer','$at','classNames']};});
            $$$cl734.defineAttr($$footer,'bindings$1010',function(){return this.bindings$1010_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Footer$view,d:['io.cayla.mvvm.view','Footer','$at','bindings']};});
            $$$cl734.defineAttr($$footer,'content$1011',function(){return this.content$1011_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Footer$view,d:['io.cayla.mvvm.view','Footer','$at','content']};});
        })(Footer$view.$$.prototype);
    }
    return Footer$view;
}
exports.$init$Footer$view=$init$Footer$view;
$init$Footer$view();

//ClassDef H1 at elements.ceylon (25:0-31:0)
function H1$view(id$1012, classNames$1013, bindings$1014, content$1015, $$h1){
    $init$H1$view();
    if ($$h1===undefined)$$h1=new H1$view.$$;
    if(id$1012===undefined){id$1012=null;}
    $$h1.id$1012_=id$1012;
    if(classNames$1013===undefined){classNames$1013=$$$cl734.getEmpty();}
    $$h1.classNames$1013_=classNames$1013;
    if(bindings$1014===undefined){bindings$1014=$$$cl734.getEmpty();}
    $$h1.bindings$1014_=bindings$1014;
    if(content$1015===undefined){content$1015=$$$cl734.getEmpty();}
    $$h1.content$1015_=content$1015;
    Element$view($$h1.id$1012,$$$cl734.String("h1",2),$$h1.classNames$1013,$$h1.bindings$1014,$$h1.content$1015,$$h1);
    return $$h1;
}
H1$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','H1']};};
exports.H1$view=H1$view;
function $init$H1$view(){
    if (H1$view.$$===undefined){
        $$$cl734.initTypeProto(H1$view,'io.cayla.mvvm.view::H1',$init$Element$view());
        (function($$h1){
            $$$cl734.defineAttr($$h1,'id$1012',function(){return this.id$1012_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:H1$view,d:['io.cayla.mvvm.view','H1','$at','id']};});
            $$$cl734.defineAttr($$h1,'classNames$1013',function(){return this.classNames$1013_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:H1$view,d:['io.cayla.mvvm.view','H1','$at','classNames']};});
            $$$cl734.defineAttr($$h1,'bindings$1014',function(){return this.bindings$1014_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:H1$view,d:['io.cayla.mvvm.view','H1','$at','bindings']};});
            $$$cl734.defineAttr($$h1,'content$1015',function(){return this.content$1015_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:H1$view,d:['io.cayla.mvvm.view','H1','$at','content']};});
        })(H1$view.$$.prototype);
    }
    return H1$view;
}
exports.$init$H1$view=$init$H1$view;
$init$H1$view();

//ClassDef Div at elements.ceylon (33:0-39:0)
function Div$view(id$1016, classNames$1017, bindings$1018, content$1019, $$div){
    $init$Div$view();
    if ($$div===undefined)$$div=new Div$view.$$;
    if(id$1016===undefined){id$1016=null;}
    $$div.id$1016_=id$1016;
    if(classNames$1017===undefined){classNames$1017=$$$cl734.getEmpty();}
    $$div.classNames$1017_=classNames$1017;
    if(bindings$1018===undefined){bindings$1018=$$$cl734.getEmpty();}
    $$div.bindings$1018_=bindings$1018;
    if(content$1019===undefined){content$1019=$$$cl734.getEmpty();}
    $$div.content$1019_=content$1019;
    Element$view($$div.id$1016,$$$cl734.String("div",3),$$div.classNames$1017,$$div.bindings$1018,$$div.content$1019,$$div);
    return $$div;
}
Div$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Div']};};
exports.Div$view=Div$view;
function $init$Div$view(){
    if (Div$view.$$===undefined){
        $$$cl734.initTypeProto(Div$view,'io.cayla.mvvm.view::Div',$init$Element$view());
        (function($$div){
            $$$cl734.defineAttr($$div,'id$1016',function(){return this.id$1016_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Div$view,d:['io.cayla.mvvm.view','Div','$at','id']};});
            $$$cl734.defineAttr($$div,'classNames$1017',function(){return this.classNames$1017_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Div$view,d:['io.cayla.mvvm.view','Div','$at','classNames']};});
            $$$cl734.defineAttr($$div,'bindings$1018',function(){return this.bindings$1018_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Div$view,d:['io.cayla.mvvm.view','Div','$at','bindings']};});
            $$$cl734.defineAttr($$div,'content$1019',function(){return this.content$1019_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Div$view,d:['io.cayla.mvvm.view','Div','$at','content']};});
        })(Div$view.$$.prototype);
    }
    return Div$view;
}
exports.$init$Div$view=$init$Div$view;
$init$Div$view();

//ClassDef P at elements.ceylon (41:0-47:0)
function P$view(id$1020, classNames$1021, bindings$1022, content$1023, $$p){
    $init$P$view();
    if ($$p===undefined)$$p=new P$view.$$;
    if(id$1020===undefined){id$1020=null;}
    $$p.id$1020_=id$1020;
    if(classNames$1021===undefined){classNames$1021=$$$cl734.getEmpty();}
    $$p.classNames$1021_=classNames$1021;
    if(bindings$1022===undefined){bindings$1022=$$$cl734.getEmpty();}
    $$p.bindings$1022_=bindings$1022;
    if(content$1023===undefined){content$1023=$$$cl734.getEmpty();}
    $$p.content$1023_=content$1023;
    Element$view($$p.id$1020,$$$cl734.String("p",1),$$p.classNames$1021,$$p.bindings$1022,$$p.content$1023,$$p);
    return $$p;
}
P$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','P']};};
exports.P$view=P$view;
function $init$P$view(){
    if (P$view.$$===undefined){
        $$$cl734.initTypeProto(P$view,'io.cayla.mvvm.view::P',$init$Element$view());
        (function($$p){
            $$$cl734.defineAttr($$p,'id$1020',function(){return this.id$1020_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:P$view,d:['io.cayla.mvvm.view','P','$at','id']};});
            $$$cl734.defineAttr($$p,'classNames$1021',function(){return this.classNames$1021_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:P$view,d:['io.cayla.mvvm.view','P','$at','classNames']};});
            $$$cl734.defineAttr($$p,'bindings$1022',function(){return this.bindings$1022_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:P$view,d:['io.cayla.mvvm.view','P','$at','bindings']};});
            $$$cl734.defineAttr($$p,'content$1023',function(){return this.content$1023_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:P$view,d:['io.cayla.mvvm.view','P','$at','content']};});
        })(P$view.$$.prototype);
    }
    return P$view;
}
exports.$init$P$view=$init$P$view;
$init$P$view();

//ClassDef Span at elements.ceylon (49:0-55:0)
function Span$view(id$1024, classNames$1025, bindings$1026, content$1027, $$span){
    $init$Span$view();
    if ($$span===undefined)$$span=new Span$view.$$;
    if(id$1024===undefined){id$1024=null;}
    $$span.id$1024_=id$1024;
    if(classNames$1025===undefined){classNames$1025=$$$cl734.getEmpty();}
    $$span.classNames$1025_=classNames$1025;
    if(bindings$1026===undefined){bindings$1026=$$$cl734.getEmpty();}
    $$span.bindings$1026_=bindings$1026;
    if(content$1027===undefined){content$1027=$$$cl734.getEmpty();}
    $$span.content$1027_=content$1027;
    Element$view($$span.id$1024,$$$cl734.String("span",4),$$span.classNames$1025,$$span.bindings$1026,$$span.content$1027,$$span);
    return $$span;
}
Span$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Span']};};
exports.Span$view=Span$view;
function $init$Span$view(){
    if (Span$view.$$===undefined){
        $$$cl734.initTypeProto(Span$view,'io.cayla.mvvm.view::Span',$init$Element$view());
        (function($$span){
            $$$cl734.defineAttr($$span,'id$1024',function(){return this.id$1024_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Span$view,d:['io.cayla.mvvm.view','Span','$at','id']};});
            $$$cl734.defineAttr($$span,'classNames$1025',function(){return this.classNames$1025_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Span$view,d:['io.cayla.mvvm.view','Span','$at','classNames']};});
            $$$cl734.defineAttr($$span,'bindings$1026',function(){return this.bindings$1026_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Span$view,d:['io.cayla.mvvm.view','Span','$at','bindings']};});
            $$$cl734.defineAttr($$span,'content$1027',function(){return this.content$1027_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Span$view,d:['io.cayla.mvvm.view','Span','$at','content']};});
        })(Span$view.$$.prototype);
    }
    return Span$view;
}
exports.$init$Span$view=$init$Span$view;
$init$Span$view();

//ClassDef Strong at elements.ceylon (57:0-63:0)
function Strong$view(id$1028, classNames$1029, bindings$1030, content$1031, $$strong){
    $init$Strong$view();
    if ($$strong===undefined)$$strong=new Strong$view.$$;
    if(id$1028===undefined){id$1028=null;}
    $$strong.id$1028_=id$1028;
    if(classNames$1029===undefined){classNames$1029=$$$cl734.getEmpty();}
    $$strong.classNames$1029_=classNames$1029;
    if(bindings$1030===undefined){bindings$1030=$$$cl734.getEmpty();}
    $$strong.bindings$1030_=bindings$1030;
    if(content$1031===undefined){content$1031=$$$cl734.getEmpty();}
    $$strong.content$1031_=content$1031;
    Element$view($$strong.id$1028,$$$cl734.String("strong",6),$$strong.classNames$1029,$$strong.bindings$1030,$$strong.content$1031,$$strong);
    return $$strong;
}
Strong$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Strong']};};
exports.Strong$view=Strong$view;
function $init$Strong$view(){
    if (Strong$view.$$===undefined){
        $$$cl734.initTypeProto(Strong$view,'io.cayla.mvvm.view::Strong',$init$Element$view());
        (function($$strong){
            $$$cl734.defineAttr($$strong,'id$1028',function(){return this.id$1028_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Strong$view,d:['io.cayla.mvvm.view','Strong','$at','id']};});
            $$$cl734.defineAttr($$strong,'classNames$1029',function(){return this.classNames$1029_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Strong$view,d:['io.cayla.mvvm.view','Strong','$at','classNames']};});
            $$$cl734.defineAttr($$strong,'bindings$1030',function(){return this.bindings$1030_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Strong$view,d:['io.cayla.mvvm.view','Strong','$at','bindings']};});
            $$$cl734.defineAttr($$strong,'content$1031',function(){return this.content$1031_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Strong$view,d:['io.cayla.mvvm.view','Strong','$at','content']};});
        })(Strong$view.$$.prototype);
    }
    return Strong$view;
}
exports.$init$Strong$view=$init$Strong$view;
$init$Strong$view();

//ClassDef Input at elements.ceylon (65:0-72:0)
function Input$view(name$1032, id$1033, classNames$1034, bindings$1035, content$1036, $$input){
    $init$Input$view();
    if ($$input===undefined)$$input=new Input$view.$$;
    if(name$1032===undefined){name$1032=null;}
    $$input.name$1032_=name$1032;
    if(id$1033===undefined){id$1033=null;}
    $$input.id$1033_=id$1033;
    if(classNames$1034===undefined){classNames$1034=$$$cl734.getEmpty();}
    $$input.classNames$1034_=classNames$1034;
    if(bindings$1035===undefined){bindings$1035=$$$cl734.getEmpty();}
    $$input.bindings$1035_=bindings$1035;
    if(content$1036===undefined){content$1036=$$$cl734.getEmpty();}
    $$input.content$1036_=content$1036;
    Element$view($$input.id$1033,$$$cl734.String("input",5),$$input.classNames$1034,$$input.bindings$1035,$$input.content$1036,$$input);
    return $$input;
}
Input$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Input']};};
exports.Input$view=Input$view;
function $init$Input$view(){
    if (Input$view.$$===undefined){
        $$$cl734.initTypeProto(Input$view,'io.cayla.mvvm.view::Input',$init$Element$view());
        (function($$input){
            $$$cl734.defineAttr($$input,'name$1032',function(){return this.name$1032_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','name']};});
            $$$cl734.defineAttr($$input,'id$1033',function(){return this.id$1033_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','id']};});
            $$$cl734.defineAttr($$input,'classNames$1034',function(){return this.classNames$1034_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','classNames']};});
            $$$cl734.defineAttr($$input,'bindings$1035',function(){return this.bindings$1035_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','bindings']};});
            $$$cl734.defineAttr($$input,'content$1036',function(){return this.content$1036_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Input$view,d:['io.cayla.mvvm.view','Input','$at','content']};});
        })(Input$view.$$.prototype);
    }
    return Input$view;
}
exports.$init$Input$view=$init$Input$view;
$init$Input$view();

//ClassDef InputText at elements.ceylon (74:0-82:0)
function InputText$view(name$1037, id$1038, classNames$1039, bindings$1040, content$1041, $$inputText){
    $init$InputText$view();
    if ($$inputText===undefined)$$inputText=new InputText$view.$$;
    $$inputText.name$1037_=name$1037;
    if(id$1038===undefined){id$1038=null;}
    $$inputText.id$1038_=id$1038;
    if(classNames$1039===undefined){classNames$1039=$$$cl734.getEmpty();}
    $$inputText.classNames$1039_=classNames$1039;
    if(bindings$1040===undefined){bindings$1040=$$$cl734.getEmpty();}
    $$inputText.bindings$1040_=bindings$1040;
    if(content$1041===undefined){content$1041=$$$cl734.getEmpty();}
    $$inputText.content$1041_=content$1041;
    Element$view($$inputText.id$1038,$$$cl734.String("input",5),$$inputText.classNames$1039,$$inputText.bindings$1040,$$inputText.content$1041,$$inputText);
    
    //AttributeDecl attrs at elements.ceylon (81:4-81:84)
    $$inputText.attrs$1042_=[$$$cl734.Entry($$$cl734.String("name",4),$$inputText.name$1037,{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}),$$$cl734.Entry($$$cl734.String("type",4),$$$cl734.String("text",4),{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}})].reifyCeylonType({Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Nothing}});
    $$inputText.$prop$getAttrs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Null}}},$cont:InputText$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual(),$$$cl734.$default()];},d:['io.cayla.mvvm.view','InputText','$at','attrs']};}};
    $$inputText.$prop$getAttrs.get=function(){return attrs};
    return $$inputText;
}
InputText$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','InputText']};};
exports.InputText$view=InputText$view;
function $init$InputText$view(){
    if (InputText$view.$$===undefined){
        $$$cl734.initTypeProto(InputText$view,'io.cayla.mvvm.view::InputText',$init$Element$view());
        (function($$inputText){
            
            //AttributeDecl attrs at elements.ceylon (81:4-81:84)
            $$$cl734.defineAttr($$inputText,'attrs',function(){return this.attrs$1042_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Null}}},$cont:InputText$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual(),$$$cl734.$default()];},d:['io.cayla.mvvm.view','InputText','$at','attrs']};});
            $$$cl734.defineAttr($$inputText,'name$1037',function(){return this.name$1037_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.String},$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','name']};});
            $$$cl734.defineAttr($$inputText,'id$1038',function(){return this.id$1038_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','id']};});
            $$$cl734.defineAttr($$inputText,'classNames$1039',function(){return this.classNames$1039_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','classNames']};});
            $$$cl734.defineAttr($$inputText,'bindings$1040',function(){return this.bindings$1040_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','bindings']};});
            $$$cl734.defineAttr($$inputText,'content$1041',function(){return this.content$1041_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:InputText$view,d:['io.cayla.mvvm.view','InputText','$at','content']};});
        })(InputText$view.$$.prototype);
    }
    return InputText$view;
}
exports.$init$InputText$view=$init$InputText$view;
$init$InputText$view();

//ClassDef Button at elements.ceylon (84:0-98:0)
function Button$view(name$1043, id$1044, classNames$1045, bindings$1046, content$1047, $$button){
    $init$Button$view();
    if ($$button===undefined)$$button=new Button$view.$$;
    if(name$1043===undefined){name$1043=null;}
    $$button.name$1043_=name$1043;
    if(id$1044===undefined){id$1044=null;}
    $$button.id$1044_=id$1044;
    if(classNames$1045===undefined){classNames$1045=$$$cl734.getEmpty();}
    $$button.classNames$1045_=classNames$1045;
    if(bindings$1046===undefined){bindings$1046=$$$cl734.getEmpty();}
    $$button.bindings$1046_=bindings$1046;
    if(content$1047===undefined){content$1047=$$$cl734.getEmpty();}
    $$button.content$1047_=content$1047;
    Element$view($$button.id$1044,$$$cl734.String("button",6),$$button.classNames$1045,$$button.bindings$1046,$$button.content$1047,$$button);
    return $$button;
}
Button$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Button']};};
exports.Button$view=Button$view;
function $init$Button$view(){
    if (Button$view.$$===undefined){
        $$$cl734.initTypeProto(Button$view,'io.cayla.mvvm.view::Button',$init$Element$view());
        (function($$button){
            
            //AttributeGetterDef attrs at elements.ceylon (91:4-97:4)
            $$$cl734.defineAttr($$button,'attrs',function(){
                var $$button=this;
                var name$1048;
                if((name$1048=$$button.name$1043)!==null){
                    return [$$$cl734.Entry($$$cl734.String("name",4),name$1048,{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}})].reifyCeylonType({Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Nothing}});
                }else {
                    return $$$cl734.getEmpty();
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Null}}},$cont:Button$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual(),$$$cl734.$default()];},d:['io.cayla.mvvm.view','Button','$at','attrs']};});$$$cl734.defineAttr($$button,'name$1043',function(){return this.name$1043_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','name']};});
            $$$cl734.defineAttr($$button,'id$1044',function(){return this.id$1044_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','id']};});
            $$$cl734.defineAttr($$button,'classNames$1045',function(){return this.classNames$1045_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','classNames']};});
            $$$cl734.defineAttr($$button,'bindings$1046',function(){return this.bindings$1046_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','bindings']};});
            $$$cl734.defineAttr($$button,'content$1047',function(){return this.content$1047_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Button$view,d:['io.cayla.mvvm.view','Button','$at','content']};});
        })(Button$view.$$.prototype);
    }
    return Button$view;
}
exports.$init$Button$view=$init$Button$view;
$init$Button$view();

//ClassDef A at elements.ceylon (100:0-114:0)
function A$view(id$1049, classNames$1050, bindings$1051, href$1052, content$1053, $$a){
    $init$A$view();
    if ($$a===undefined)$$a=new A$view.$$;
    if(id$1049===undefined){id$1049=null;}
    $$a.id$1049_=id$1049;
    if(classNames$1050===undefined){classNames$1050=$$$cl734.getEmpty();}
    $$a.classNames$1050_=classNames$1050;
    if(bindings$1051===undefined){bindings$1051=$$$cl734.getEmpty();}
    $$a.bindings$1051_=bindings$1051;
    if(href$1052===undefined){href$1052=null;}
    $$a.href$1052_=href$1052;
    if(content$1053===undefined){content$1053=$$$cl734.getEmpty();}
    $$a.content$1053_=content$1053;
    Element$view($$a.id$1049,$$$cl734.String("a",1),$$a.classNames$1050,$$a.bindings$1051,$$a.content$1053,$$a);
    return $$a;
}
A$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'href',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','A']};};
exports.A$view=A$view;
function $init$A$view(){
    if (A$view.$$===undefined){
        $$$cl734.initTypeProto(A$view,'io.cayla.mvvm.view::A',$init$Element$view());
        (function($$a){
            
            //AttributeGetterDef attrs at elements.ceylon (107:8-113:8)
            $$$cl734.defineAttr($$a,'attrs',function(){
                var $$a=this;
                var href$1054;
                if((href$1054=$$a.href$1052)!==null){
                    return [$$$cl734.Entry($$$cl734.String("href",4),href$1054,{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}})].reifyCeylonType({Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Nothing}});
                }else {
                    return $$$cl734.getEmpty();
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Null}}},$cont:A$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual(),$$$cl734.$default()];},d:['io.cayla.mvvm.view','A','$at','attrs']};});$$$cl734.defineAttr($$a,'id$1049',function(){return this.id$1049_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:A$view,d:['io.cayla.mvvm.view','A','$at','id']};});
            $$$cl734.defineAttr($$a,'classNames$1050',function(){return this.classNames$1050_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:A$view,d:['io.cayla.mvvm.view','A','$at','classNames']};});
            $$$cl734.defineAttr($$a,'bindings$1051',function(){return this.bindings$1051_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:A$view,d:['io.cayla.mvvm.view','A','$at','bindings']};});
            $$$cl734.defineAttr($$a,'href$1052',function(){return this.href$1052_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:A$view,d:['io.cayla.mvvm.view','A','$at','href']};});
            $$$cl734.defineAttr($$a,'content$1053',function(){return this.content$1053_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:A$view,d:['io.cayla.mvvm.view','A','$at','content']};});
        })(A$view.$$.prototype);
    }
    return A$view;
}
exports.$init$A$view=$init$A$view;
$init$A$view();

//ClassDef CheckBox at elements.ceylon (116:0-130:0)
function CheckBox$view(name$1055, id$1056, classNames$1057, bindings$1058, content$1059, $$checkBox){
    $init$CheckBox$view();
    if ($$checkBox===undefined)$$checkBox=new CheckBox$view.$$;
    if(name$1055===undefined){name$1055=null;}
    $$checkBox.name$1055_=name$1055;
    if(id$1056===undefined){id$1056=null;}
    $$checkBox.id$1056_=id$1056;
    if(classNames$1057===undefined){classNames$1057=$$$cl734.getEmpty();}
    $$checkBox.classNames$1057_=classNames$1057;
    if(bindings$1058===undefined){bindings$1058=$$$cl734.getEmpty();}
    $$checkBox.bindings$1058_=bindings$1058;
    if(content$1059===undefined){content$1059=$$$cl734.getEmpty();}
    $$checkBox.content$1059_=content$1059;
    Element$view($$checkBox.id$1056,$$$cl734.String("input",5),$$checkBox.classNames$1057,$$checkBox.bindings$1058,$$checkBox.content$1059,$$checkBox);
    return $$checkBox;
}
CheckBox$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','CheckBox']};};
exports.CheckBox$view=CheckBox$view;
function $init$CheckBox$view(){
    if (CheckBox$view.$$===undefined){
        $$$cl734.initTypeProto(CheckBox$view,'io.cayla.mvvm.view::CheckBox',$init$Element$view());
        (function($$checkBox){
            
            //AttributeGetterDef attrs at elements.ceylon (123:4-129:4)
            $$$cl734.defineAttr($$checkBox,'attrs',function(){
                var $$checkBox=this;
                var name$1060;
                if((name$1060=$$checkBox.name$1055)!==null){
                    return [$$$cl734.Entry($$$cl734.String("name",4),name$1060,{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}),$$$cl734.Entry($$$cl734.String("type",4),$$$cl734.String("checkbox",8),{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}})].reifyCeylonType({Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Nothing}});
                }else {
                    return [$$$cl734.Entry($$$cl734.String("type",4),$$$cl734.String("checkbox",8),{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}})].reifyCeylonType({Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Nothing}});
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Null}}},$cont:CheckBox$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual(),$$$cl734.$default()];},d:['io.cayla.mvvm.view','CheckBox','$at','attrs']};});$$$cl734.defineAttr($$checkBox,'name$1055',function(){return this.name$1055_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','name']};});
            $$$cl734.defineAttr($$checkBox,'id$1056',function(){return this.id$1056_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','id']};});
            $$$cl734.defineAttr($$checkBox,'classNames$1057',function(){return this.classNames$1057_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','classNames']};});
            $$$cl734.defineAttr($$checkBox,'bindings$1058',function(){return this.bindings$1058_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','bindings']};});
            $$$cl734.defineAttr($$checkBox,'content$1059',function(){return this.content$1059_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:CheckBox$view,d:['io.cayla.mvvm.view','CheckBox','$at','content']};});
        })(CheckBox$view.$$.prototype);
    }
    return CheckBox$view;
}
exports.$init$CheckBox$view=$init$CheckBox$view;
$init$CheckBox$view();

//ClassDef Ul at elements.ceylon (132:0-138:0)
function Ul$view(id$1061, classNames$1062, bindings$1063, content$1064, $$ul){
    $init$Ul$view();
    if ($$ul===undefined)$$ul=new Ul$view.$$;
    if(id$1061===undefined){id$1061=null;}
    $$ul.id$1061_=id$1061;
    if(classNames$1062===undefined){classNames$1062=$$$cl734.getEmpty();}
    $$ul.classNames$1062_=classNames$1062;
    if(bindings$1063===undefined){bindings$1063=$$$cl734.getEmpty();}
    $$ul.bindings$1063_=bindings$1063;
    if(content$1064===undefined){content$1064=$$$cl734.getEmpty();}
    $$ul.content$1064_=content$1064;
    Element$view($$ul.id$1061,$$$cl734.String("ul",2),$$ul.classNames$1062,$$ul.bindings$1063,$$ul.content$1064,$$ul);
    return $$ul;
}
Ul$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Ul']};};
exports.Ul$view=Ul$view;
function $init$Ul$view(){
    if (Ul$view.$$===undefined){
        $$$cl734.initTypeProto(Ul$view,'io.cayla.mvvm.view::Ul',$init$Element$view());
        (function($$ul){
            $$$cl734.defineAttr($$ul,'id$1061',function(){return this.id$1061_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Ul$view,d:['io.cayla.mvvm.view','Ul','$at','id']};});
            $$$cl734.defineAttr($$ul,'classNames$1062',function(){return this.classNames$1062_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Ul$view,d:['io.cayla.mvvm.view','Ul','$at','classNames']};});
            $$$cl734.defineAttr($$ul,'bindings$1063',function(){return this.bindings$1063_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Ul$view,d:['io.cayla.mvvm.view','Ul','$at','bindings']};});
            $$$cl734.defineAttr($$ul,'content$1064',function(){return this.content$1064_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Ul$view,d:['io.cayla.mvvm.view','Ul','$at','content']};});
        })(Ul$view.$$.prototype);
    }
    return Ul$view;
}
exports.$init$Ul$view=$init$Ul$view;
$init$Ul$view();

//ClassDef Li at elements.ceylon (140:0-146:0)
function Li$view(id$1065, classNames$1066, bindings$1067, content$1068, $$li){
    $init$Li$view();
    if ($$li===undefined)$$li=new Li$view.$$;
    if(id$1065===undefined){id$1065=null;}
    $$li.id$1065_=id$1065;
    if(classNames$1066===undefined){classNames$1066=$$$cl734.getEmpty();}
    $$li.classNames$1066_=classNames$1066;
    if(bindings$1067===undefined){bindings$1067=$$$cl734.getEmpty();}
    $$li.bindings$1067_=bindings$1067;
    if(content$1068===undefined){content$1068=$$$cl734.getEmpty();}
    $$li.content$1068_=content$1068;
    Element$view($$li.id$1065,$$$cl734.String("li",2),$$li.classNames$1066,$$li.bindings$1067,$$li.content$1068,$$li);
    return $$li;
}
Li$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Li']};};
exports.Li$view=Li$view;
function $init$Li$view(){
    if (Li$view.$$===undefined){
        $$$cl734.initTypeProto(Li$view,'io.cayla.mvvm.view::Li',$init$Element$view());
        (function($$li){
            $$$cl734.defineAttr($$li,'id$1065',function(){return this.id$1065_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Li$view,d:['io.cayla.mvvm.view','Li','$at','id']};});
            $$$cl734.defineAttr($$li,'classNames$1066',function(){return this.classNames$1066_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Li$view,d:['io.cayla.mvvm.view','Li','$at','classNames']};});
            $$$cl734.defineAttr($$li,'bindings$1067',function(){return this.bindings$1067_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Li$view,d:['io.cayla.mvvm.view','Li','$at','bindings']};});
            $$$cl734.defineAttr($$li,'content$1068',function(){return this.content$1068_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Li$view,d:['io.cayla.mvvm.view','Li','$at','content']};});
        })(Li$view.$$.prototype);
    }
    return Li$view;
}
exports.$init$Li$view=$init$Li$view;
$init$Li$view();

//ClassDef Label at elements.ceylon (148:0-154:0)
function Label$view(id$1069, classNames$1070, bindings$1071, content$1072, $$label){
    $init$Label$view();
    if ($$label===undefined)$$label=new Label$view.$$;
    if(id$1069===undefined){id$1069=null;}
    $$label.id$1069_=id$1069;
    if(classNames$1070===undefined){classNames$1070=$$$cl734.getEmpty();}
    $$label.classNames$1070_=classNames$1070;
    if(bindings$1071===undefined){bindings$1071=$$$cl734.getEmpty();}
    $$label.bindings$1071_=bindings$1071;
    if(content$1072===undefined){content$1072=$$$cl734.getEmpty();}
    $$label.content$1072_=content$1072;
    Element$view($$label.id$1069,$$$cl734.String("label",5),$$label.classNames$1070,$$label.bindings$1071,$$label.content$1072,$$label);
    return $$label;
}
Label$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Label']};};
exports.Label$view=Label$view;
function $init$Label$view(){
    if (Label$view.$$===undefined){
        $$$cl734.initTypeProto(Label$view,'io.cayla.mvvm.view::Label',$init$Element$view());
        (function($$label){
            $$$cl734.defineAttr($$label,'id$1069',function(){return this.id$1069_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Label$view,d:['io.cayla.mvvm.view','Label','$at','id']};});
            $$$cl734.defineAttr($$label,'classNames$1070',function(){return this.classNames$1070_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Label$view,d:['io.cayla.mvvm.view','Label','$at','classNames']};});
            $$$cl734.defineAttr($$label,'bindings$1071',function(){return this.bindings$1071_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Label$view,d:['io.cayla.mvvm.view','Label','$at','bindings']};});
            $$$cl734.defineAttr($$label,'content$1072',function(){return this.content$1072_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Label$view,d:['io.cayla.mvvm.view','Label','$at','content']};});
        })(Label$view.$$.prototype);
    }
    return Label$view;
}
exports.$init$Label$view=$init$Label$view;
$init$Label$view();
var $$$cc755=require('ceylon/collection/1.0.0/ceylon.collection-1.0.0');
$$$cl734.$addmod$($$$cc755,'ceylon.collection/1.0.0');

//ClassDef ModelContext at ModelContext.ceylon (5:0-30:0)
function ModelContext$view(o, parent, $$modelContext){
    $init$ModelContext$view();
    if ($$modelContext===undefined)$$modelContext=new ModelContext$view.$$;
    $$modelContext.o_=o;
    if(parent===undefined){parent=null;}
    $$modelContext.parent_=parent;
    
    //AttributeDecl nodes at ModelContext.ceylon (7:4-7:60)
    $$modelContext.nodes$1073_=$$$cc755.LinkedList(undefined,{Element:{t:DomNode$dom}});
    $$modelContext.$prop$getNodes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:{t:DomNode$dom}}},$cont:ModelContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ModelContext','$at','nodes']};}};
    $$modelContext.$prop$getNodes.get=function(){return nodes};
    return $$modelContext;
}
ModelContext$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'o',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[$$$cl734.shared()];}},{$nm:'parent',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:ModelContext$view}]},$an:function(){return[$$$cl734.shared()];}}],d:['io.cayla.mvvm.view','ModelContext']};};
function $init$ModelContext$view(){
    if (ModelContext$view.$$===undefined){
        $$$cl734.initTypeProto(ModelContext$view,'io.cayla.mvvm.view::ModelContext',$$$cl734.Basic);
        (function($$modelContext){
            
            //AttributeDecl nodes at ModelContext.ceylon (7:4-7:60)
            $$$cl734.defineAttr($$modelContext,'nodes',function(){return this.nodes$1073_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:{t:DomNode$dom}}},$cont:ModelContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ModelContext','$at','nodes']};});
            
            //MethodDef destroy at ModelContext.ceylon (9:4-13:4)
            $$modelContext.destroy=function destroy(){
                var $$modelContext=this;
                //'for' statement at ModelContext.ceylon (10:8-12:8)
                var it$1074 = $$modelContext.nodes.reversed.iterator();
                var node$1075;while ((node$1075=it$1074.next())!==$$$cl734.getFinished()){
                    node$1075.detach();
                }
            };$$modelContext.destroy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:ModelContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ModelContext','$m','destroy']};};
            
            //MethodDef register at ModelContext.ceylon (15:4-17:4)
            $$modelContext.register=function register(node$1076){
                var $$modelContext=this;
                $$modelContext.nodes.add(node$1076);
            };$$modelContext.register.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:ModelContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ModelContext','$m','register']};};
            
            //MethodDef resolve at ModelContext.ceylon (19:4-28:4)
            $$modelContext.resolve=function resolve($$$mptypes){
                var $$modelContext=this;
                var o$1077;
                if($$$cl734.isOfType((o$1077=$$modelContext.o),$$$mptypes.Value)){
                    return o$1077;
                }else {
                    var parent$1078;
                    if((parent$1078=$$modelContext.parent)!==null){
                        return parent$1078.resolve({Value:$$$mptypes.Value});
                    }else {
                        return null;
                    }
                }
            };$$modelContext.resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},'Value']},$ps:[],$cont:ModelContext$view,$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ModelContext','$m','resolve']};};
            $$$cl734.defineAttr($$modelContext,'o',function(){return this.o_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Object},$cont:ModelContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ModelContext','$at','o']};});
            $$$cl734.defineAttr($$modelContext,'parent',function(){return this.parent_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:ModelContext$view}]},$cont:ModelContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ModelContext','$at','parent']};});
        })(ModelContext$view.$$.prototype);
    }
    return ModelContext$view;
}
exports.$init$ModelContext$view=$init$ModelContext$view;
$init$ModelContext$view();

//ClassDef ElementBindingContext at ElementBindingContext.ceylon (3:0-61:0)
function ElementBindingContext$view(model, node, element, parent$1079, $$elementBindingContext){
    $init$ElementBindingContext$view();
    if ($$elementBindingContext===undefined)$$elementBindingContext=new ElementBindingContext$view.$$;
    $$elementBindingContext.model_=model;
    $$elementBindingContext.node_=node;
    $$elementBindingContext.element_=element;
    if(parent$1079===undefined){parent$1079=null;}
    $$elementBindingContext.parent$1079_=parent$1079;
    BindingContext$view($$elementBindingContext);
    
    //AttributeDecl createChildren at ElementBindingContext.ceylon (6:4-6:56)
    $$elementBindingContext.createChildren$1080_=true;
    $$elementBindingContext.$prop$getCreateChildren={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual(),$$$cl734.variable()];},d:['io.cayla.mvvm.view','ElementBindingContext','$at','createChildren']};}};
    $$elementBindingContext.$prop$getCreateChildren.get=function(){return createChildren};
    return $$elementBindingContext;
}
ElementBindingContext$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'model',$mt:'prm',$t:{t:ModelContext$view},$an:function(){return[$$$cl734.shared()];}},{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];}},{$nm:'element',$mt:'prm',$t:{t:Element$view},$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];}},{$nm:'parent',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:ElementBindingContext$view}]},$an:function(){return[];}}],satisfies:[{t:BindingContext$view}],d:['io.cayla.mvvm.view','ElementBindingContext']};};
function $init$ElementBindingContext$view(){
    if (ElementBindingContext$view.$$===undefined){
        $$$cl734.initTypeProto(ElementBindingContext$view,'io.cayla.mvvm.view::ElementBindingContext',$$$cl734.Basic,$init$BindingContext$view());
        (function($$elementBindingContext){
            
            //AttributeDecl createChildren at ElementBindingContext.ceylon (6:4-6:56)
            $$$cl734.defineAttr($$elementBindingContext,'createChildren',function(){return this.createChildren$1080_;},function(createChildren$1081){return this.createChildren$1080_=createChildren$1081;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual(),$$$cl734.variable()];},d:['io.cayla.mvvm.view','ElementBindingContext','$at','createChildren']};});
            
            //MethodDef destroy at ElementBindingContext.ceylon (8:4-10:4)
            $$elementBindingContext.destroy=function destroy(){
                var $$elementBindingContext=this;
                $$elementBindingContext.model.destroy();
            };$$elementBindingContext.destroy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.view','ElementBindingContext','$m','destroy']};};
            
            //MethodDef child at ElementBindingContext.ceylon (12:4-17:4)
            $$elementBindingContext.child=function child(child$1082){
                var $$elementBindingContext=this;
                
                //AttributeDecl ret at ElementBindingContext.ceylon (13:8-13:46)
                var ret$1083=ModelContext$view(child$1082,$$elementBindingContext.model);
                
                //AttributeDecl wrapper at ElementBindingContext.ceylon (14:8-14:89)
                var wrapper$1084=ElementBindingContext$view(ret$1083,$$elementBindingContext.node,$$elementBindingContext.element,$$elementBindingContext.parent$1079);
                wrapper$1084.initChildren$1085();
                return wrapper$1084;
            };$$elementBindingContext.child.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:BindingContext$view},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[];}}],$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.view','ElementBindingContext','$m','child']};};
            
            //MethodDecl resolve at ElementBindingContext.ceylon (19:4-20:66)
            $$elementBindingContext.resolve=function ($$$mptypes){
                var $$elementBindingContext=this;
                return $$elementBindingContext.model.resolve({Value:$$$mptypes.Value});
            };
            $$elementBindingContext.resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},'Value']},$ps:[],$cont:ElementBindingContext$view,$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.view','ElementBindingContext','$m','resolve']};};
            
            //MethodDef register at ElementBindingContext.ceylon (22:4-24:4)
            $$elementBindingContext.register=function register(node$1086){
                var $$elementBindingContext=this;
                $$elementBindingContext.model.register(node$1086);
            };$$elementBindingContext.register.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ElementBindingContext','$m','register']};};
            
            //MethodDef init at ElementBindingContext.ceylon (26:4-44:4)
            $$elementBindingContext.init=function init(){
                var $$elementBindingContext=this;
                $$elementBindingContext.node.setId($$elementBindingContext.element.id);
                //'for' statement at ElementBindingContext.ceylon (28:8-30:8)
                var it$1087 = $$elementBindingContext.element.attrs.iterator();
                var attr$1088;while ((attr$1088=it$1087.next())!==$$$cl734.getFinished()){
                    $$elementBindingContext.node.setAttribute(attr$1088.key,attr$1088.item);
                }
                //'for' statement at ElementBindingContext.ceylon (31:8-33:8)
                var it$1089 = $$elementBindingContext.element.classNames.iterator();
                var className$1090;while ((className$1090=it$1089.next())!==$$$cl734.getFinished()){
                    $$elementBindingContext.node.addClass(className$1090);
                }
                var bindings$1091;
                if($$$cl734.isOfType((bindings$1091=$$elementBindingContext.element.bindings),{t:$$$cl734.Sequential,a:{Element:{t:Binding$view}}})){
                    //'for' statement at ElementBindingContext.ceylon (35:12-37:12)
                    var it$1092 = bindings$1091.iterator();
                    var binding$1093;while ((binding$1093=it$1092.next())!==$$$cl734.getFinished()){
                        binding$1093.init($$elementBindingContext);
                    }
                }else {
                    var binding$1094;
                    if($$$cl734.isOfType((binding$1094=$$elementBindingContext.element.bindings),{t:Binding$view})){
                        binding$1094.init($$elementBindingContext);
                    }
                }
                if($$elementBindingContext.createChildren){
                    $$elementBindingContext.initChildren$1085();
                }
            };$$elementBindingContext.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ElementBindingContext','$m','init']};};
            
            //MethodDef initChildren at ElementBindingContext.ceylon (46:4-60:4)
            $$elementBindingContext.initChildren$1085=function initChildren$1085(){
                var $$elementBindingContext=this;
                //'for' statement at ElementBindingContext.ceylon (47:8-59:8)
                var it$1095 = $$elementBindingContext.element.content.iterator();
                var child$1096;while ((child$1096=it$1095.next())!==$$$cl734.getFinished()){
                    //Switch statement at ElementBindingContext.ceylon (48:12-58:12)
                    var case$1097=child$1096;
                    if ($$$cl734.isOfType(child$1096,{t:$$$cl734.String})) {
                        $$elementBindingContext.node.addText(case$1097);
                    }else if ($$$cl734.isOfType(child$1096,{t:Element$view})) {
                        
                        //AttributeDecl foo at ElementBindingContext.ceylon (53:16-53:46)
                        var foo$1098=element$dom(case$1097.name);
                        $$elementBindingContext.register(foo$1098);
                        
                        //AttributeDecl childContext at ElementBindingContext.ceylon (55:16-55:99)
                        var childContext$1099=ElementBindingContext$view($$elementBindingContext.model,foo$1098,case$1097,$$elementBindingContext);
                        childContext$1099.init();
                        $$elementBindingContext.node.addChild(foo$1098);
                    }//End switch statement at ElementBindingContext.ceylon (48:12-58:12)
                }
            };$$elementBindingContext.initChildren$1085.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:ElementBindingContext$view,d:['io.cayla.mvvm.view','ElementBindingContext','$m','initChildren']};};
            $$$cl734.defineAttr($$elementBindingContext,'model',function(){return this.model_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ModelContext$view},$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','ElementBindingContext','$at','model']};});
            $$$cl734.defineAttr($$elementBindingContext,'node',function(){return this.node_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.view','ElementBindingContext','$at','node']};});
            $$$cl734.defineAttr($$elementBindingContext,'element',function(){return this.element_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Element$view},$cont:ElementBindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.view','ElementBindingContext','$at','element']};});
            $$$cl734.defineAttr($$elementBindingContext,'parent$1079',function(){return this.parent$1079_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:ElementBindingContext$view}]},$cont:ElementBindingContext$view,d:['io.cayla.mvvm.view','ElementBindingContext','$at','parent']};});
        })(ElementBindingContext$view.$$.prototype);
    }
    return ElementBindingContext$view;
}
exports.$init$ElementBindingContext$view=$init$ElementBindingContext$view;
$init$ElementBindingContext$view();

//TypeAliasDecl Bindings at Element.ceylon (3:0-3:44)
function Bindings$view(){var tmpvar$1100={t:'u', l:[{t:Binding$view},{t:$$$cl734.Sequential,a:{Element:{t:Binding$view}}}]};tmpvar$1100.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Bindings']};};return tmpvar$1100;}
exports.Bindings$view=Bindings$view;

//ClassDef Element at Element.ceylon (5:0-21:0)
function Element$view(id, name, classNames, bindings, content, $$element){
    $init$Element$view();
    if ($$element===undefined)$$$cl734.throwexc($$$cl734.InvocationException$meta$model($$$cl734.String("Cannot instantiate abstract class")),'?','?')
    $$element.id_=id;
    $$element.name_=name;
    $$element.classNames_=classNames;
    $$element.bindings_=bindings;
    $$element.content_=content;
    
    //AttributeDecl attrs at Element.ceylon (12:4-12:49)
    $$element.attrs$1101_=$$$cl734.getEmpty();
    $$element.$prop$getAttrs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Null}}},$cont:Element$view,$an:function(){return[$$$cl734.shared(),$$$cl734.$default()];},d:['io.cayla.mvvm.view','Element','$at','attrs']};}};
    $$element.$prop$getAttrs.get=function(){return attrs};
    return $$element;
}
Element$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'id',$mt:'prm',$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[$$$cl734.shared()];}},{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[$$$cl734.shared()];}},{$nm:'classNames',$mt:'prm',$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$an:function(){return[$$$cl734.shared()];}},{$nm:'bindings',$mt:'prm',$t:Bindings$view(),$an:function(){return[$$$cl734.shared()];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$an:function(){return[$$$cl734.shared()];}}],$an:function(){return[$$$cl734.shared(),$$$cl734.abstract()];},d:['io.cayla.mvvm.view','Element']};};
exports.Element$view=Element$view;
function $init$Element$view(){
    if (Element$view.$$===undefined){
        $$$cl734.initTypeProto(Element$view,'io.cayla.mvvm.view::Element',$$$cl734.Basic);
        (function($$element){
            
            //AttributeDecl attrs at Element.ceylon (12:4-12:49)
            $$$cl734.defineAttr($$element,'attrs',function(){return this.attrs$1101_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:$$$cl734.Entry,a:{Item:{t:$$$cl734.String},Key:{t:$$$cl734.String}}},Absent:{t:$$$cl734.Null}}},$cont:Element$view,$an:function(){return[$$$cl734.shared(),$$$cl734.$default()];},d:['io.cayla.mvvm.view','Element','$at','attrs']};});
            
            //MethodDef bind at Element.ceylon (14:4-20:4)
            $$element.$bind=function $bind(o$1102){
                var $$element=this;
                
                //AttributeDecl node at Element.ceylon (15:8-15:36)
                var node$1103=element$dom($$element.name);
                
                //AttributeDecl root at Element.ceylon (16:8-16:49)
                var root$1104=ModelContext$view(o$1102,null);
                
                //AttributeDecl wrapper at Element.ceylon (17:8-17:79)
                var wrapper$1105=ElementBindingContext$view(root$1104,node$1103,$$element);
                wrapper$1105.init();
                return node$1103;
            };$$element.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'o',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[];}}],$cont:Element$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Element','$m','bind']};};
            $$$cl734.defineAttr($$element,'id',function(){return this.id_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$cont:Element$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Element','$at','id']};});
            $$$cl734.defineAttr($$element,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.String},$cont:Element$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Element','$at','name']};});
            $$$cl734.defineAttr($$element,'classNames',function(){return this.classNames_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.String}}},$cont:Element$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Element','$at','classNames']};});
            $$$cl734.defineAttr($$element,'bindings',function(){return this.bindings_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Element$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Element','$at','bindings']};});
            $$$cl734.defineAttr($$element,'content',function(){return this.content_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:'u', l:[{t:$$$cl734.String},{t:Element$view}]},Absent:{t:$$$cl734.Null}}},$cont:Element$view,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','Element','$at','content']};});
        })(Element$view.$$.prototype);
    }
    return Element$view;
}
exports.$init$Element$view=$init$Element$view;
$init$Element$view();

//InterfaceDef BindingContext at BindingContext.ceylon (2:0-15:0)
function BindingContext$view($$bindingContext){
}
BindingContext$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.view','BindingContext']};};
exports.BindingContext$view=BindingContext$view;
function $init$BindingContext$view(){
    if (BindingContext$view.$$===undefined){
        $$$cl734.initTypeProtoI(BindingContext$view,'io.cayla.mvvm.view::BindingContext');
        (function($$bindingContext){
            $$bindingContext.resolve={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},'Value']},$ps:[],$cont:BindingContext$view,$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm.view','BindingContext','$m','resolve']};}};
            //AttributeDecl element at BindingContext.ceylon (6:4-6:33)
            $$bindingContext.$prop$getElement={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Element$view},$cont:BindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm.view','BindingContext','$at','element']};}};
            
            //AttributeDecl node at BindingContext.ceylon (8:4-8:30)
            $$bindingContext.$prop$getNode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:BindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm.view','BindingContext','$at','node']};}};
            $$bindingContext.child={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:BindingContext$view},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[];}}],$cont:BindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm.view','BindingContext','$m','child']};}};$$bindingContext.destroy={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:BindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm.view','BindingContext','$m','destroy']};}};
            //AttributeDecl createChildren at BindingContext.ceylon (14:4-14:49)
            $$bindingContext.$prop$getCreateChildren={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$cont:BindingContext$view,$an:function(){return[$$$cl734.shared(),$$$cl734.formal(),$$$cl734.variable()];},d:['io.cayla.mvvm.view','BindingContext','$at','createChildren']};}};
        })(BindingContext$view.$$.prototype);
    }
    return BindingContext$view;
}
exports.$init$BindingContext$view=$init$BindingContext$view;
$init$BindingContext$view();

//ClassDef Binding at Binding.ceylon (2:0-6:0)
function Binding$view($$binding){
    $init$Binding$view();
    if ($$binding===undefined)$$$cl734.throwexc($$$cl734.InvocationException$meta$model($$$cl734.String("Cannot instantiate abstract class")),'?','?')
    return $$binding;
}
Binding$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],$an:function(){return[$$$cl734.shared(),$$$cl734.abstract()];},d:['io.cayla.mvvm.view','Binding']};};
exports.Binding$view=Binding$view;
function $init$Binding$view(){
    if (Binding$view.$$===undefined){
        $$$cl734.initTypeProto(Binding$view,'io.cayla.mvvm.view::Binding',$$$cl734.Basic);
        (function($$binding){
            $$binding.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:Binding$view,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm.view','Binding','$m','init']};}};
        })(Binding$view.$$.prototype);
    }
    return Binding$view;
}
exports.$init$Binding$view=$init$Binding$view;
$init$Binding$view();
exports.$pkg$ans$io$cayla$mvvm$todo=function(){return[$$$cl734.shared()];};
exports.$pkg$ans$io$cayla$mvvm=function(){return[$$$cl734.shared()];};
exports.$mod$ans$=[];
exports.$mod$imps=function(){return{
'ceylon.collection/1.0.0':function(){return[$$$cl734.shared()];}
};};

//ObjectDef log at log.ceylon (1:0-11:0)
function log$1106(){
    var $$log=new log$1106.$$;
    return $$log;
};log$1106.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','log']};};
function $init$log$1106(){
    if (log$1106.$$===undefined){
        $$$cl734.initTypeProto(log$1106,'io.cayla.mvvm::log',$$$cl734.Basic);
        (function($$log){
            
            //MethodDef debug at log.ceylon (2:4-10:4)
            $$log.debug=function debug(message$1107){
                var $$log=this;
                /*Begin dynamic block*/
                if((typeof isUndefined==='undefined'||isUndefined===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: isUndefined")),'4:16-4:26','log.ceylon'):isUndefined)((typeof console==='undefined'||console===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: console")),'4:28-4:34','log.ceylon'):console).debug)){
                    $$$cl734.print($$$cl734.StringBuilder().appendAll([$$$cl734.String("[DEBUG] ",8),message$1107.string]).string);
                }else {
                    (typeof console==='undefined'||console===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: console")),'7:16-7:22','log.ceylon'):console).debug(message$1107.valueOf());
                }/*End dynamic block*/
            };$$log.debug.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:log$1106,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','log','$m','debug']};};
        })(log$1106.$$.prototype);
    }
    return log$1106;
}
exports.$init$log$1106=$init$log$1106;
$init$log$1106();
var log$1108;
function getLog(){
    if (log$1108===undefined){log$1108=$init$log$1106()();log$1108.$$metamodel$$=getLog.$$metamodel$$;}
    return log$1108;
}
exports.getLog=getLog;
getLog.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:log$1106},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','log']};};
$prop$getLog={get:getLog,$$metamodel$$:getLog.$$metamodel$$};
exports.$prop$getLog=$prop$getLog;
exports.$pkg$ans$io$cayla$mvvm$expression=function(){return[$$$cl734.shared()];};

//MethodDef method at MethodExpression.ceylon (3:0-7:0)
function method$expression(method$1109,$$$mptypes){
    return ClassExpression$expression({Type:$$$mptypes.Source}).method(method$1109,{Arguments:$$$mptypes.Arguments});
}
exports.method$expression=method$expression;
method$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:'Arguments'}},Source:'Source'}},$ps:[{$nm:'method',$mt:'prm',$t:{t:$$$cl734.Method$meta$model,a:{Container:'Source',Type:{t:$$$cl734.Anything},Arguments:'Arguments'}},$an:function(){return[];}}],$tp:{Source:{'satisfies':[{t:$$$cl734.$Object}]},Arguments:{'satisfies':[{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.Anything}}}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','method']};};

//ClassDef MethodExpression at MethodExpression.ceylon (9:0-21:0)
function MethodExpression$expression(m$1110, parent$1111, $$targs$$,$$methodExpression){
    $init$MethodExpression$expression();
    if ($$methodExpression===undefined)$$methodExpression=new MethodExpression$expression.$$;
    $$$cl734.set_type_args($$methodExpression,$$targs$$);
    $$methodExpression.m$1110_=m$1110;
    $$methodExpression.parent$1111_=parent$1111;
    Expression$expression($$methodExpression.$$targs$$===undefined?$$targs$$:{Type:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:$$methodExpression.$$targs$$.Arguments}},Source:$$methodExpression.$$targs$$.Source},$$methodExpression);
    $$$cl734.add_type_arg($$methodExpression,'Type',{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:$$methodExpression.$$targs$$.Arguments}});
    return $$methodExpression;
}
MethodExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'m',$mt:'prm',$t:{t:$$$cl734.Method$meta$model,a:{Container:'Container',Type:{t:$$$cl734.Anything},Arguments:'Arguments'}},$an:function(){return[];}},{$nm:'parent',$mt:'prm',$t:{t:Expression$expression,a:{Type:'Container',Source:'Source'}},$an:function(){return[];}}],$tp:{Container:{'var':'out','satisfies':[{t:$$$cl734.$Object}]},Source:{'satisfies':[{t:$$$cl734.$Object}]},Arguments:{'var':'in','satisfies':[{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.Anything}}}]}},satisfies:[{t:Expression$expression,a:{Type:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:'Arguments'}},Source:'Source'}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','MethodExpression']};};
exports.MethodExpression$expression=MethodExpression$expression;
function $init$MethodExpression$expression(){
    if (MethodExpression$expression.$$===undefined){
        $$$cl734.initTypeProto(MethodExpression$expression,'io.cayla.mvvm.expression::MethodExpression',$$$cl734.Basic,$init$Expression$expression());
        (function($$methodExpression){
            
            //MethodDef traverse at MethodExpression.ceylon (17:4-20:4)
            $$methodExpression.traverse=function traverse(source$1112){
                var $$methodExpression=this;
                
                //AttributeDecl t at MethodExpression.ceylon (18:8-18:45)
                var t$1113=$$methodExpression.parent$1111.traverse(source$1112);
                return $$methodExpression.m$1110.$bind(t$1113);
            };$$methodExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:'Arguments'}},$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:MethodExpression$expression,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.expression','MethodExpression','$m','traverse']};};
            $$$cl734.defineAttr($$methodExpression,'m$1110',function(){return this.m$1110_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Method$meta$model,a:{Container:'Container',Type:{t:$$$cl734.Anything},Arguments:'Arguments'}},$cont:MethodExpression$expression,d:['io.cayla.mvvm.expression','MethodExpression','$at','m']};});
            $$$cl734.defineAttr($$methodExpression,'parent$1111',function(){return this.parent$1111_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:'Container',Source:'Source'}},$cont:MethodExpression$expression,d:['io.cayla.mvvm.expression','MethodExpression','$at','parent']};});
        })(MethodExpression$expression.$$.prototype);
    }
    return MethodExpression$expression;
}
exports.$init$MethodExpression$expression=$init$MethodExpression$expression;
$init$MethodExpression$expression();

//InterfaceDef Expression at Expression.ceylon (5:0-36:0)
function Expression$expression($$targs$$,$$expression){
    $$$cl734.set_type_args($$expression,$$targs$$);
}
Expression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Type:{'var':'out','satisfies':[{t:$$$cl734.$Object}]},Source:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','Expression']};};
exports.Expression$expression=Expression$expression;
function $init$Expression$expression(){
    if (Expression$expression.$$===undefined){
        $$$cl734.initTypeProtoI(Expression$expression,'io.cayla.mvvm.expression::Expression');
        (function($$expression){
            $$expression.traverse={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Type',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:Expression$expression,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm.expression','Expression','$m','traverse']};}};
            //MethodDef attribute at Expression.ceylon (11:4-19:4)
            $$expression.attribute=function attribute(attribute$1114,$$$mptypes){
                var $$expression=this;
                
                //MethodDef f at Expression.ceylon (12:8-17:8)
                function f$1115(source$1116){
                    
                    //AttributeDecl t at Expression.ceylon (13:12-13:37)
                    var t$1117=$$expression.traverse(source$1116);
                    
                    //AttributeDecl binding at Expression.ceylon (14:12-14:45)
                    var binding$1118=attribute$1114.$bind(t$1117);
                    
                    //AttributeDecl p at Expression.ceylon (15:12-15:35)
                    var p$1119=binding$1118.$get();
                    return p$1119;
                };f$1115.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],d:['io.cayla.mvvm.expression','Expression','$m','attribute','$m','f']};};
                return AttributeExpression$expression($$$cl734.$JsCallable(f$1115,[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],{Return:$$$mptypes.Value,Arguments:{t:'T', l:[$$expression.$$targs$$.Source]}}),{Value:$$$mptypes.Value,Source:$$expression.$$targs$$.Source});
            };$$expression.attribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:AttributeExpression$expression,a:{Value:'Value',Source:'Source'}},$ps:[{$nm:'attribute',$mt:'prm',$t:{t:$$$cl734.Attribute$meta$model,a:{Container:'Type',Set:{t:$$$cl734.Nothing},Get:'Value'}},$an:function(){return[];}}],$cont:Expression$expression,$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','Expression','$m','attribute']};};
            
            //MethodDef method at Expression.ceylon (21:4-23:4)
            $$expression.method=function method(method$1120,$$$mptypes){
                var $$expression=this;
                return MethodExpression$expression(method$1120,$$expression,{Container:$$expression.$$targs$$.Type,Arguments:$$$mptypes.Arguments,Source:$$expression.$$targs$$.Source});
            };$$expression.method.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:MethodExpression$expression,a:{Container:'Type',Arguments:'Arguments',Source:'Source'}},$ps:[{$nm:'method',$mt:'prm',$t:{t:$$$cl734.Method$meta$model,a:{Container:'Type',Type:{t:$$$cl734.Anything},Arguments:'Arguments'}},$an:function(){return[];}}],$cont:Expression$expression,$tp:{Arguments:{'satisfies':[{t:$$$cl734.Sequential,a:{Element:{t:$$$cl734.Anything}}}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','Expression','$m','method']};};
            
            //MethodDef bindTo at Expression.ceylon (25:4-35:4)
            $$expression.bindTo=function bindTo(handler$1121){
                var $$expression=this;
                
                //ObjectDef impl at Expression.ceylon (26:8-33:8)
                function impl$1122(){
                    var $$impl$1122=new impl$1122.$$;
                    Binding$view($$impl$1122);
                    return $$impl$1122;
                };impl$1122.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Binding$view},d:['io.cayla.mvvm.expression','Expression','$m','bindTo','$o','impl']};};
                function $init$impl$1122(){
                    if (impl$1122.$$===undefined){
                        $$$cl734.initTypeProto(impl$1122,'io.cayla.mvvm.expression::Expression.bindTo.impl',$init$Binding$view());
                        (function($$impl$1122){
                            
                            //MethodDef init at Expression.ceylon (27:12-32:12)
                            $$impl$1122.init=function init(context$1123){
                                var $$impl$1122=this;
                                var s$1124;
                                if((s$1124=context$1123.resolve({Value:$$expression.$$targs$$.Source}))!==null){
                                    
                                    //AttributeDecl f at Expression.ceylon (29:20-29:40)
                                    var f$1125=$$expression.traverse(s$1124);
                                    handler$1121.init(f$1125,context$1123);
                                }
                            };$$impl$1122.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$1122,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.expression','Expression','$m','bindTo','$o','impl','$m','init']};};
                        })(impl$1122.$$.prototype);
                    }
                    return impl$1122;
                }
                $init$impl$1122();
                var impl$1126;
                function getImpl$1126(){
                    if (impl$1126===undefined){impl$1126=$init$impl$1122()();impl$1126.$$metamodel$$=getImpl$1126.$$metamodel$$;}
                    return impl$1126;
                }
                getImpl$1126.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$1122},d:['io.cayla.mvvm.expression','Expression','$m','bindTo','$o','impl']};};
                $prop$getImpl$1126={get:getImpl$1126,$$metamodel$$:getImpl$1126.$$metamodel$$};
                return getImpl$1126();
            };$$expression.bindTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binding$view},$ps:[{$nm:'handler',$mt:'prm',$t:{t:Binder,a:{Value:'Type'}},$an:function(){return[];}}],$cont:Expression$expression,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','Expression','$m','bindTo']};};
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
    $$$cl734.set_type_args($$classExpression,$$targs$$);
    Expression$expression($$classExpression.$$targs$$===undefined?$$targs$$:{Type:$$classExpression.$$targs$$.Type,Source:$$classExpression.$$targs$$.Type},$$classExpression);
    return $$classExpression;
}
ClassExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],$tp:{Type:{'satisfies':[{t:$$$cl734.$Object}]}},satisfies:[{t:Expression$expression,a:{Type:'Type',Source:'Type'}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','ClassExpression']};};
exports.ClassExpression$expression=ClassExpression$expression;
function $init$ClassExpression$expression(){
    if (ClassExpression$expression.$$===undefined){
        $$$cl734.initTypeProto(ClassExpression$expression,'io.cayla.mvvm.expression::ClassExpression',$$$cl734.Basic,$init$Expression$expression());
        (function($$classExpression){
            
            //MethodDef traverse at ClassExpression.ceylon (3:4-5:4)
            $$classExpression.traverse=function traverse(source$1127){
                var $$classExpression=this;
                return source$1127;
            };$$classExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Type',$ps:[{$nm:'source',$mt:'prm',$t:'Type',$an:function(){return[];}}],$cont:ClassExpression$expression,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.expression','ClassExpression','$m','traverse']};};
        })(ClassExpression$expression.$$.prototype);
    }
    return ClassExpression$expression;
}
exports.$init$ClassExpression$expression=$init$ClassExpression$expression;
$init$ClassExpression$expression();

//MethodDef attribute at AttributeExpression.ceylon (3:0-7:0)
function attribute$expression(attr$1128,$$$mptypes){
    return ClassExpression$expression({Type:$$$mptypes.Source}).attribute(attr$1128,{Value:$$$mptypes.Value});
}
exports.attribute$expression=attribute$expression;
attribute$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:'Value',Source:'Source'}},$ps:[{$nm:'attr',$mt:'prm',$t:{t:$$$cl734.Attribute$meta$model,a:{Container:'Source',Set:{t:$$$cl734.Nothing},Get:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]},Source:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','attribute']};};

//ClassDef AttributeExpression at AttributeExpression.ceylon (9:0-17:0)
function AttributeExpression$expression(f$1129, $$targs$$,$$attributeExpression){
    $init$AttributeExpression$expression();
    if ($$attributeExpression===undefined)$$attributeExpression=new AttributeExpression$expression.$$;
    $$$cl734.set_type_args($$attributeExpression,$$targs$$);
    $$attributeExpression.f$1129_=f$1129;
    Expression$expression($$attributeExpression.$$targs$$===undefined?$$targs$$:{Type:$$attributeExpression.$$targs$$.Value,Source:$$attributeExpression.$$targs$$.Source},$$attributeExpression);
    return $$attributeExpression;
}
AttributeExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'f',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:'Value',Arguments:{t:'T',l:[{$t:'Source'}]}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]},Source:{'satisfies':[{t:$$$cl734.$Object}]}},satisfies:[{t:Expression$expression,a:{Type:'Value',Source:'Source'}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.expression','AttributeExpression']};};
exports.AttributeExpression$expression=AttributeExpression$expression;
function $init$AttributeExpression$expression(){
    if (AttributeExpression$expression.$$===undefined){
        $$$cl734.initTypeProto(AttributeExpression$expression,'io.cayla.mvvm.expression::AttributeExpression',$$$cl734.Basic,$init$Expression$expression());
        (function($$attributeExpression){
            
            //MethodDef traverse at AttributeExpression.ceylon (14:4-16:4)
            $$attributeExpression.traverse=function traverse(source$1130){
                var $$attributeExpression=this;
                return $$attributeExpression.f$1129(source$1130);
            };$$attributeExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:AttributeExpression$expression,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.expression','AttributeExpression','$m','traverse']};};
            $$$cl734.defineAttr($$attributeExpression,'f$1129',function(){return this.f$1129_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Callable,a:{Return:'Value',Arguments:{t:'T',l:[{$t:'Source'}]}}},$cont:AttributeExpression$expression,d:['io.cayla.mvvm.expression','AttributeExpression','$at','f']};});
        })(AttributeExpression$expression.$$.prototype);
    }
    return AttributeExpression$expression;
}
exports.$init$AttributeExpression$expression=$init$AttributeExpression$expression;
$init$AttributeExpression$expression();
exports.$pkg$ans$io$cayla$mvvm$dom=function(){return[$$$cl734.shared()];};

//MethodDef element at element.ceylon (1:0-8:0)
function element$dom(name$1131){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at element.ceylon (3:8-3:51)
    var peer$1132=(typeof document==='undefined'||document===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: document")),'3:23-3:30','element.ceylon'):document).createElement(name$1131.valueOf());
    
    //AttributeDecl node at element.ceylon (4:8-4:34)
    var node$1133=DomNode$dom(peer$1132);
    peer$1132.ref=node$1133;
    return node$1133;
    /*End dynamic block*/
}
exports.element$dom=element$dom;
element$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','element']};};

//MethodDef text at element.ceylon (10:0-17:0)
function text$dom(cdata$1134){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at element.ceylon (12:8-12:53)
    var peer$1135=(typeof document==='undefined'||document===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: document")),'12:23-12:30','element.ceylon'):document).createTextNode(cdata$1134.valueOf());
    
    //AttributeDecl node at element.ceylon (13:8-13:34)
    var node$1136=DomNode$dom(peer$1135);
    peer$1135.ref=node$1136;
    return node$1136;
    /*End dynamic block*/
}
exports.text$dom=text$dom;
text$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'cdata',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','text']};};

//MethodDef byId at byId.ceylon (1:0-10:0)
function byId$dom(id$1137){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at byId.ceylon (3:8-3:50)
    var peer$1138=(typeof document==='undefined'||document===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: document")),'3:23-3:30','byId.ceylon'):document).getElementById(id$1137.valueOf());
    var peer$1139;
    if((peer$1139=peer$1138)!==null){
        return (tmpvar$1140=wrap$dom(peer$1139),$$$cl734.isOfType(tmpvar$1140,{t:$$$cl734.Anything})?tmpvar$1140:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'5:19-5:28','byId.ceylon'));
    }else {
        throw $$$cl734.wrapexc($$$cl734.Exception($$$cl734.String("handle me gracefully",20)),'7:12-7:51','io/cayla/mvvm/dom/byId.ceylon');
    }/*End dynamic block*/
}
exports.byId$dom=byId$dom;
byId$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'id',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','byId']};};

//MethodDef wrap at DomNode.ceylon (3:0-14:0)
function wrap$dom(nodePeer$1141){
    /*Begin dynamic block*/
    
    //AttributeDecl ref at DomNode.ceylon (5:8-5:34)
    var ref$1142=nodePeer$1141.ref;
    if((typeof isUndefined==='undefined'||isUndefined===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: isUndefined")),'6:12-6:22','DomNode.ceylon'):isUndefined)(ref$1142)){
        
        //AttributeDecl node at DomNode.ceylon (7:12-7:42)
        var node$1143=DomNode$dom(nodePeer$1141);
        nodePeer$1141.ref=node$1143;
        return node$1143;
    }else {
        return (tmpvar$1144=ref$1142,$$$cl734.isOfType(tmpvar$1144,{t:$$$cl734.Anything})?tmpvar$1144:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'11:19-11:21','DomNode.ceylon'));
    }/*End dynamic block*/
};wrap$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'nodePeer',$mt:'prm',$t:{t:$$$cl734.Anything},$an:function(){return[];}}],d:['io.cayla.mvvm.dom','wrap']};};

//MethodDef _matchesSelector at DomNode.ceylon (16:0-31:0)
function _matchesSelector$dom(nodePeer$1145,selector$1146){
    /*Begin dynamic block*/
    
    //AttributeDecl parentPeer at DomNode.ceylon (18:8-18:48)
    var parentPeer$1147=nodePeer$1145.parentNode;
    if(($$$cl734.exists(parentPeer$1147)&&(tmpvar$1148=parentPeer$1147.nodeType,tmpvar$1149=(1),(tmpvar$1148.equals&&tmpvar$1148.equals(tmpvar$1149))||tmpvar$1148===tmpvar$1149))){
        
        //AttributeDecl selectedPeers at DomNode.ceylon (20:12-20:73)
        var selectedPeers$1150=parentPeer$1147.querySelectorAll(selector$1146.valueOf());
        
        //AttributeDecl length at DomNode.ceylon (21:12-21:49)
        var length$1151=selectedPeers$1150.length;
        //'for' statement at DomNode.ceylon (22:12-27:12)
        var it$1152 = (function(){var tmpvar$1154=length$1151;
        if (tmpvar$1154>0){
        var tmpvar$1155=(0);
        var tmpvar$1156=tmpvar$1155;
        for (var i=1; i<tmpvar$1154; i++){tmpvar$1156=tmpvar$1156.successor;}
        return $$$cl734.Range(tmpvar$1155,tmpvar$1156,{})
        }else return $$$cl734.getEmpty();}()).iterator();
        var i$1153;while ((i$1153=it$1152.next())!==$$$cl734.getFinished()){
            
            //AttributeDecl selectedPeer at DomNode.ceylon (23:16-23:60)
            var selectedPeer$1157=selectedPeers$1150.item(i$1153);
            if((tmpvar$1158=selectedPeer$1157,tmpvar$1159=nodePeer$1145,(tmpvar$1158.equals&&tmpvar$1158.equals(tmpvar$1159))||tmpvar$1158===tmpvar$1159)){
                return true;
            }
        }
    }return false;
    /*End dynamic block*/
};_matchesSelector$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$ps:[{$nm:'nodePeer',$mt:'prm',$t:{t:$$$cl734.Anything},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],d:['io.cayla.mvvm.dom','_matchesSelector']};};

//MethodDef querySelectorAll at DomNode.ceylon (33:0-44:0)
function querySelectorAll$dom(selector$1160){
    /*Begin dynamic block*/
    
    //AttributeDecl selected at DomNode.ceylon (35:8-35:60)
    var selected$1161=$$$cc755.LinkedList(undefined,{Element:{t:DomNode$dom}});
    
    //AttributeDecl nodePeers at DomNode.ceylon (36:8-36:63)
    var nodePeers$1162=(typeof document==='undefined'||document===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: document")),'36:28-36:35','DomNode.ceylon'):document).querySelectorAll(selector$1160.valueOf());
    
    //AttributeDecl length at DomNode.ceylon (37:8-37:41)
    var length$1163=nodePeers$1162.length;
    //'for' statement at DomNode.ceylon (38:8-41:8)
    var it$1164 = (function(){var tmpvar$1166=length$1163;
    if (tmpvar$1166>0){
    var tmpvar$1167=(0);
    var tmpvar$1168=tmpvar$1167;
    for (var i=1; i<tmpvar$1166; i++){tmpvar$1168=tmpvar$1168.successor;}
    return $$$cl734.Range(tmpvar$1167,tmpvar$1168,{})
    }else return $$$cl734.getEmpty();}()).iterator();
    var i$1165;while ((i$1165=it$1164.next())!==$$$cl734.getFinished()){
        
        //AttributeDecl nodePeer at DomNode.ceylon (39:12-39:48)
        var nodePeer$1169=nodePeers$1162.item(i$1165);
        selected$1161.add((tmpvar$1170=wrap$dom(nodePeer$1169),$$$cl734.isOfType(tmpvar$1170,{/*NO PARENT*/t:$$$cl734.Anything})?tmpvar$1170:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'40:25-40:38','DomNode.ceylon')));
    }return selected$1161;
    /*End dynamic block*/
}
exports.querySelectorAll$dom=querySelectorAll$dom;
querySelectorAll$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:DomNode$dom},Absent:{t:$$$cl734.Null}}},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','querySelectorAll']};};

//ClassDef DomNode at DomNode.ceylon (46:0-296:0)
function DomNode$dom(peer$1171, $$domNode){
    $init$DomNode$dom();
    if ($$domNode===undefined)$$domNode=new DomNode$dom.$$;
    $$domNode.peer$1171_=peer$1171;
    return $$domNode;
}
DomNode$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'peer',$mt:'prm',$t:{t:$$$cl734.Anything},$an:function(){return[$$$cl734.variable(),$$$cl734.shared(),$$$cl734.actual()];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode']};};
exports.DomNode$dom=DomNode$dom;
function $init$DomNode$dom(){
    if (DomNode$dom.$$===undefined){
        $$$cl734.initTypeProto(DomNode$dom,'io.cayla.mvvm.dom::DomNode',$$$cl734.Basic);
        (function($$domNode){
            
            //MethodDef addText at DomNode.ceylon (48:4-50:4)
            $$domNode.addText=function addText(cdata$1172){
                var $$domNode=this;
                return $$domNode.addChild(text$dom(cdata$1172));
            };$$domNode.addText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'cdata',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addText']};};
            
            //MethodDef getChildren at DomNode.ceylon (52:4-63:4)
            $$domNode.getChildren=function getChildren(){
                var $$domNode=this;
                
                //AttributeDecl children at DomNode.ceylon (53:8-53:60)
                var children$1173=$$$cc755.LinkedList(undefined,{Element:{t:DomNode$dom}});
                /*Begin dynamic block*/
                
                //AttributeDecl childNodes at DomNode.ceylon (55:12-55:48)
                var childNodes$1174=$$domNode.peer$1171.childNodes;
                
                //AttributeDecl length at DomNode.ceylon (56:12-56:46)
                var length$1175=childNodes$1174.length;
                //'for' statement at DomNode.ceylon (57:12-60:12)
                var it$1176 = (function(){var tmpvar$1178=length$1175;
                if (tmpvar$1178>0){
                var tmpvar$1179=(0);
                var tmpvar$1180=tmpvar$1179;
                for (var i=1; i<tmpvar$1178; i++){tmpvar$1180=tmpvar$1180.successor;}
                return $$$cl734.Range(tmpvar$1179,tmpvar$1180,{})
                }else return $$$cl734.getEmpty();}()).iterator();
                var i$1177;while ((i$1177=it$1176.next())!==$$$cl734.getFinished()){
                    
                    //AttributeDecl childPeer at DomNode.ceylon (58:16-58:54)
                    var childPeer$1181=childNodes$1174.item(i$1177);
                    children$1173.add((tmpvar$1182=childPeer$1181.ref,$$$cl734.isOfType(tmpvar$1182,{/*NO PARENT*/t:$$$cl734.Anything})?tmpvar$1182:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'59:29-59:41','DomNode.ceylon')));
                }/*End dynamic block*/
                return children$1173;
            };$$domNode.getChildren.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Iterable,a:{Element:{t:DomNode$dom},Absent:{t:$$$cl734.Null}}},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','getChildren']};};
            
            //MethodDef addChild at DomNode.ceylon (65:4-74:4)
            $$domNode.addChild=function addChild(node$1183){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl nodePeer at DomNode.ceylon (67:12-67:40)
                var nodePeer$1184=node$1183.peer$1171;
                nodePeer$1184.ref=null;
                
                //AttributeDecl childPeer at DomNode.ceylon (69:12-69:58)
                var childPeer$1185=$$domNode.peer$1171.appendChild(nodePeer$1184);
                childPeer$1185.ref=node$1183;
                node$1183.peer$1171=childPeer$1185;
                return node$1183;
                /*End dynamic block*/
            };$$domNode.addChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addChild']};};
            
            //MethodDef insertBefore at DomNode.ceylon (76:4-91:4)
            $$domNode.insertBefore$defs$nextSibling=function(node$1186,nextSibling$1187){var $$domNode=this;
            return null;};
            $$domNode.insertBefore=function insertBefore(node$1186,nextSibling$1187){
                var $$domNode=this;
                if(nextSibling$1187===undefined){nextSibling$1187=$$domNode.insertBefore$defs$nextSibling(node$1186,nextSibling$1187);}
                /*Begin dynamic block*/
                
                //AttributeDecl nodePeer at DomNode.ceylon (78:12-78:40)
                var nodePeer$1188=node$1186.peer$1171;
                nodePeer$1188.ref=null;
                
                //AttributeDecl nextSiblingPeer at DomNode.ceylon (80:12-80:35)
                var nextSiblingPeer$1189;
                var nextSibling$1190;
                if((nextSibling$1190=nextSibling$1187)!==null){
                    nextSiblingPeer$1189=nextSibling$1190.peer$1171;
                }else {
                    nextSiblingPeer$1189=null;
                }
                //AttributeDecl childPeer at DomNode.ceylon (86:12-86:76)
                var childPeer$1191=$$domNode.peer$1171.insertBefore(nodePeer$1188,nextSiblingPeer$1189);
                childPeer$1191.ref=node$1186;
                node$1186.peer$1171=childPeer$1191;
                return node$1186;
                /*End dynamic block*/
            };$$domNode.insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'nextSibling',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:DomNode$dom}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','insertBefore']};};
            
            //MethodDef addElement at DomNode.ceylon (93:4-95:4)
            $$domNode.addElement=function addElement(name$1192){
                var $$domNode=this;
                return $$domNode.addChild(element$dom(name$1192));
            };$$domNode.addElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addElement']};};
            
            //MethodDef setId at DomNode.ceylon (97:4-101:4)
            $$domNode.setId=function setId(id$1193){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$1171.id=id$1193;
                /*End dynamic block*/
            };$$domNode.setId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'id',$mt:'prm',$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setId']};};
            
            //MethodDef getAttribute at DomNode.ceylon (103:4-107:4)
            $$domNode.getAttribute=function getAttribute(name$1194){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$1195=$$domNode.peer$1171.getAttribute(name$1194.valueOf()),$$$cl734.isOfType(tmpvar$1195,{t:$$$cl734.Anything})?tmpvar$1195:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'105:19-105:41','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','getAttribute']};};
            
            //MethodDef setAttribute at DomNode.ceylon (109:4-113:4)
            $$domNode.setAttribute=function setAttribute(name$1196,val$1197){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$1171.setAttribute(name$1196.valueOf(),val$1197.valueOf());
                /*End dynamic block*/
            };$$domNode.setAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setAttribute']};};
            
            //MethodDef removeAttribute at DomNode.ceylon (115:4-119:4)
            $$domNode.removeAttribute=function removeAttribute(name$1198){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$1171.removeAttribute(name$1198.valueOf());
                /*End dynamic block*/
            };$$domNode.removeAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','removeAttribute']};};
            
            //MethodDef getValue at DomNode.ceylon (122:4-126:4)
            $$domNode.getValue=function getValue(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$1199=$$domNode.peer$1171.value,$$$cl734.isOfType(tmpvar$1199,{t:$$$cl734.Anything})?tmpvar$1199:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'124:19-124:28','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','getValue']};};
            
            //MethodDef setValue at DomNode.ceylon (129:4-133:4)
            $$domNode.setValue=function setValue(val$1200){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$1171.value=val$1200.valueOf();
                /*End dynamic block*/
            };$$domNode.setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setValue']};};
            
            //MethodDef getNodeValue at DomNode.ceylon (136:4-140:4)
            $$domNode.getNodeValue=function getNodeValue(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$1201=$$domNode.peer$1171.nodeValue,$$$cl734.isOfType(tmpvar$1201,{t:$$$cl734.Anything})?tmpvar$1201:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'138:19-138:32','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.String},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','getNodeValue']};};
            
            //MethodDef setNodeValue at DomNode.ceylon (143:4-147:4)
            $$domNode.setNodeValue=function setNodeValue(val$1202){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$1171.nodeValue=val$1202.valueOf();
                /*End dynamic block*/
            };$$domNode.setNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setNodeValue']};};
            
            //MethodDef isChecked at DomNode.ceylon (150:4-154:4)
            $$domNode.isChecked=function isChecked(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$1203=$$domNode.peer$1171.checked,$$$cl734.isOfType(tmpvar$1203,{t:$$$cl734.Anything})?tmpvar$1203:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'152:19-152:30','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.isChecked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.$Boolean}]},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','isChecked']};};
            
            //MethodDef setChecked at DomNode.ceylon (157:4-161:4)
            $$domNode.setChecked=function setChecked(checked$1204){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$1171.checked=checked$1204;
                /*End dynamic block*/
            };$$domNode.setChecked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'checked',$mt:'prm',$t:{t:$$$cl734.$Boolean},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','setChecked']};};
            
            //MethodDef addClass at DomNode.ceylon (163:4-167:4)
            $$domNode.addClass=function addClass(name$1205){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$1171.classList.add(name$1205.valueOf());
                /*End dynamic block*/
            };$$domNode.addClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addClass']};};
            
            //MethodDef removeClass at DomNode.ceylon (169:4-173:4)
            $$domNode.removeClass=function removeClass(name$1206){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$1171.classList.remove(name$1206.valueOf());
                /*End dynamic block*/
            };$$domNode.removeClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','removeClass']};};
            
            //MethodDef hasClass at DomNode.ceylon (175:4-183:4)
            $$domNode.hasClass=function hasClass(name$1207){
                var $$domNode=this;
                /*Begin dynamic block*/
                if($$domNode.peer$1171.classList.contains(name$1207.valueOf())){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$domNode.hasClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','hasClass']};};
            
            //AttributeGetterDef visible at DomNode.ceylon (185:4-190:4)
            $$$cl734.defineAttr($$domNode,'visible',function(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl current at DomNode.ceylon (187:12-187:48)
                var current$1208=$$domNode.peer$1171.style.display;
                $prop$getCurrent$1208={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},d:['io.cayla.mvvm.dom','DomNode','$at','visible','$at','current']};}};
                $prop$getCurrent$1208.get=function(){return current$1208};
                return (tmpvar$1209=current$1208,tmpvar$1210=$$$cl734.String("none",4),(tmpvar$1209.equals&&!tmpvar$1209.equals(tmpvar$1210))||tmpvar$1209!==tmpvar$1210);
                /*End dynamic block*/
            },function(visible$1211){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl current at DomNode.ceylon (194:12-194:48)
                var current$1212=$$domNode.peer$1171.style.display;
                $prop$getCurrent$1212={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},d:['io.cayla.mvvm.dom','DomNode','$at','visible','$at','current']};}};
                $prop$getCurrent$1212.get=function(){return current$1212};
                
                //AttributeDecl currentlyVisible at DomNode.ceylon (195:12-195:56)
                var currentlyVisible$1213=(tmpvar$1214=current$1212,tmpvar$1215=$$$cl734.String("none",4),(tmpvar$1214.equals&&!tmpvar$1214.equals(tmpvar$1215))||tmpvar$1214!==tmpvar$1215);
                $prop$getCurrentlyVisible$1213={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},d:['io.cayla.mvvm.dom','DomNode','$at','visible','$at','currentlyVisible']};}};
                $prop$getCurrentlyVisible$1213.get=function(){return currentlyVisible$1213};
                if((visible$1211&&(!currentlyVisible$1213))){
                    $$domNode.peer$1171.style.display=$$$cl734.String("",0).valueOf();
                }else {
                    if(((!visible$1211)&&currentlyVisible$1213)){
                        $$domNode.peer$1171.style.display=$$$cl734.String("none",4).valueOf();
                    }
                }/*End dynamic block*/
            },function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$at','visible']};});
            //MethodDef matchesSelector at DomNode.ceylon (205:4-209:4)
            $$domNode.matchesSelector=function matchesSelector(selector$1216){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$1217=_matchesSelector$dom($$domNode.peer$1171,selector$1216),$$$cl734.isOfType(tmpvar$1217,{t:$$$cl734.Anything})?tmpvar$1217:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'207:19-207:50','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.matchesSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','matchesSelector']};};
            
            //MethodDef addEventHandler at DomNode.ceylon (211:4-253:4)
            $$domNode.addEventHandler$defs$selector=function(type$1218,handler$1219,selector$1220){var $$domNode=this;
            return null;};
            $$domNode.addEventHandler=function addEventHandler(type$1218,handler$1219,selector$1220){
                var $$domNode=this;
                if(selector$1220===undefined){selector$1220=$$domNode.addEventHandler$defs$selector(type$1218,handler$1219,selector$1220);}
                
                //MethodDef f at DomNode.ceylon (212:8-249:8)
                function f$1221(eventPeer$1222){
                    /*Begin dynamic block*/
                    
                    //AttributeDecl matched at DomNode.ceylon (216:16-216:31)
                    var matched$1223;
                    var selector$1224;
                    if((selector$1224=selector$1220)!==null){
                        
                        //AttributeDecl nodePeer at DomNode.ceylon (218:20-218:64)
                        var nodePeer$1225=eventPeer$1222.target;
                        function setNodePeer$1225(nodePeer$1226){return nodePeer$1225=nodePeer$1226;};
                        while(true){
                            if((tmpvar$1227=nodePeer$1225.nodeType,tmpvar$1228=(1),(tmpvar$1227.equals&&tmpvar$1227.equals(tmpvar$1228))||tmpvar$1227===tmpvar$1228)){
                                if(_matchesSelector$dom(nodePeer$1225,selector$1224)){
                                    matched$1223=true;
                                    break;
                                }else {
                                    
                                    //AttributeDecl parentPeer at DomNode.ceylon (225:32-225:72)
                                    var parentPeer$1229=nodePeer$1225.parentNode;
                                    var parentPeer$1230;
                                    if((parentPeer$1230=parentPeer$1229)!==null){
                                        nodePeer$1225=parentPeer$1230;
                                    }else {
                                        matched$1223=false;
                                        break;
                                    }
                                }
                            }else {
                                matched$1223=false;
                                break;
                            }
                        }
                    }else {
                        matched$1223=true;
                    }if(matched$1223){
                        
                        //AttributeDecl target at DomNode.ceylon (244:20-244:59)
                        var target$1231=(tmpvar$1232=wrap$dom(eventPeer$1222.target),$$$cl734.isOfType(tmpvar$1232,{t:DomNode$dom})?tmpvar$1232:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'244:37-244:58','DomNode.ceylon'));
                        
                        //AttributeDecl event at DomNode.ceylon (245:20-245:64)
                        var event$1233=DomEvent$dom(target$1231,eventPeer$1222);
                        handler$1219(event$1233);
                    }/*End dynamic block*/
                };f$1221.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'eventPeer',$mt:'prm',$t:{t:$$$cl734.Anything},$an:function(){return[];}}],d:['io.cayla.mvvm.dom','DomNode','$m','addEventHandler','$m','f']};};
                /*Begin dynamic block*/
                $$domNode.peer$1171.addEventListener(type$1218.valueOf(),f$1221,false);
                /*End dynamic block*/
            };$$domNode.addEventHandler.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:{t:DomEvent$dom}}]}}},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.String}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','addEventHandler']};};
            
            //MethodDef click at DomNode.ceylon (257:4-279:4)
            $$domNode.click=function click(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl event at DomNode.ceylon (259:12-259:73)
                var event$1234=$$domNode.peer$1171.ownerDocument.createEvent($$$cl734.String("MouseEvents",11).valueOf());
                event$1234.initMouseEvent($$$cl734.String("click",5).valueOf(),true,true,$$domNode.peer$1171.ownerDocument.defaultView,(1),(0),(0),(0),(0),false,false,false,false,(0),null);
                $$domNode.peer$1171.dispatchEvent(event$1234);
                /*End dynamic block*/
            };$$domNode.click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','click']};};
            
            //MethodDef dispatchEvent at DomNode.ceylon (281:4-286:4)
            $$domNode.dispatchEvent=function dispatchEvent(type$1235){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl event at DomNode.ceylon (283:12-283:51)
                var event$1236=(tmpvar$1237=type$1235.valueOf(),tmpvar$1238=true,tmpvar$1239=true,tmpvar$1240=(typeof Event==='undefined'?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined type Event")),'283:28-283:32','DomNode.ceylon'):Event),tmpvar$1240.$$===undefined?new tmpvar$1240(tmpvar$1237, tmpvar$1238, tmpvar$1239):tmpvar$1240(tmpvar$1237, tmpvar$1238, tmpvar$1239));
                $$domNode.peer$1171.dispatchEvent(event$1236);
                /*End dynamic block*/
            };$$domNode.dispatchEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','dispatchEvent']};};
            
            //MethodDef detach at DomNode.ceylon (288:4-295:4)
            $$domNode.detach=function detach(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl old at DomNode.ceylon (290:12-290:30)
                var old$1241=$$domNode.peer$1171;
                $$domNode.peer$1171=$$domNode.peer$1171.parentNode.removeChild($$domNode.peer$1171);old$1241.peer=null;
                $$domNode.peer$1171.ref=$$domNode;
                /*End dynamic block*/
            };$$domNode.detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomNode','$m','detach']};};
            $$$cl734.defineAttr($$domNode,'peer$1171',function(){return this.peer$1171_;},function(DomNode$1242){return this.peer$1171_=DomNode$1242;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$cont:DomNode$dom,$an:function(){return[$$$cl734.variable(),$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.dom','DomNode','$at','peer']};});
        })(DomNode$dom.$$.prototype);
    }
    return DomNode$dom;
}
exports.$init$DomNode$dom=$init$DomNode$dom;
$init$DomNode$dom();

//ClassDef DomEvent at DomEvent.ceylon (1:0-14:0)
function DomEvent$dom(target, peer$1243, $$domEvent){
    $init$DomEvent$dom();
    if ($$domEvent===undefined)$$domEvent=new DomEvent$dom.$$;
    $$domEvent.target_=target;
    $$domEvent.peer$1243_=peer$1243;
    return $$domEvent;
}
DomEvent$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'target',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[$$$cl734.shared()];}},{$nm:'peer',$mt:'prm',$t:{t:$$$cl734.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomEvent']};};
exports.DomEvent$dom=DomEvent$dom;
function $init$DomEvent$dom(){
    if (DomEvent$dom.$$===undefined){
        $$$cl734.initTypeProto(DomEvent$dom,'io.cayla.mvvm.dom::DomEvent',$$$cl734.Basic);
        (function($$domEvent){
            
            //AttributeGetterDef keyCode at DomEvent.ceylon (3:4-7:4)
            $$$cl734.defineAttr($$domEvent,'keyCode',function(){
                var $$domEvent=this;
                /*Begin dynamic block*/
                return (tmpvar$1244=$$domEvent.peer$1243.keyCode,$$$cl734.isOfType(tmpvar$1244,{t:$$$cl734.Anything})?tmpvar$1244:$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("dynamic objects cannot be used here")),'5:19-5:30','DomEvent.ceylon'));
                /*End dynamic block*/
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:DomEvent$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomEvent','$at','keyCode']};});
            //MethodDef preventDefault at DomEvent.ceylon (9:4-13:4)
            $$domEvent.preventDefault=function preventDefault(){
                var $$domEvent=this;
                /*Begin dynamic block*/
                $$domEvent.peer$1243.preventDefault();
                /*End dynamic block*/
            };$$domEvent.preventDefault.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:DomEvent$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomEvent','$m','preventDefault']};};
            $$$cl734.defineAttr($$domEvent,'target',function(){return this.target_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:DomEvent$dom,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomEvent','$at','target']};});
            $$$cl734.defineAttr($$domEvent,'peer$1243',function(){return this.peer$1243_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$cont:DomEvent$dom,d:['io.cayla.mvvm.dom','DomEvent','$at','peer']};});
        })(DomEvent$dom.$$.prototype);
    }
    return DomEvent$dom;
}
exports.$init$DomEvent$dom=$init$DomEvent$dom;
$init$DomEvent$dom();

//InterfaceDef DomContext at DomContext.ceylon (1:0-2:0)
function DomContext$dom($$domContext){
}
DomContext$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.dom','DomContext']};};
exports.DomContext$dom=DomContext$dom;
function $init$DomContext$dom(){
    if (DomContext$dom.$$===undefined){
        $$$cl734.initTypeProtoI(DomContext$dom,'io.cayla.mvvm.dom::DomContext');
    }
    return DomContext$dom;
}
exports.$init$DomContext$dom=$init$DomContext$dom;
$init$DomContext$dom();
exports.$pkg$ans$io$cayla$mvvm$diff=function(){return[$$$cl734.shared()];};

//ClassDef Diff at Diff.ceylon (2:0-69:0)
function Diff$diff(elements1$1245, elements2$1246, $$targs$$,$$diff){
    $init$Diff$diff();
    if ($$diff===undefined)$$diff=new Diff$diff.$$;
    $$$cl734.set_type_args($$diff,$$targs$$);
    $$diff.elements1$1245_=elements1$1245;
    $$diff.elements2$1246_=elements2$1246;
    $$$cl734.Iterator($$diff.$$targs$$===undefined?$$targs$$:{Element:{t:'T', l:[$$diff.$$targs$$.E,{t:Change$diff}]}},$$diff);
    $$$cl734.add_type_arg($$diff,'Element',{t:'T', l:[$$diff.$$targs$$.E,{t:Change$diff}]});
    
    //AttributeDecl m at Diff.ceylon (8:4-8:28)
    $$diff.m$1247_=$$diff.elements1$1245.size;
    $$diff.$prop$getM$1247={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','m']};}};
    $$diff.$prop$getM$1247.get=function(){return m$1247};
    
    //AttributeDecl n at Diff.ceylon (9:4-9:28)
    $$diff.n$1248_=$$diff.elements2$1246.size;
    $$diff.$prop$getN$1248={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','n']};}};
    $$diff.$prop$getN$1248.get=function(){return n$1248};
    
    //AttributeDecl opt at Diff.ceylon (28:4-28:62)
    $$diff.opt$1249_=$$diff.Matrix$Diff($$diff.elements1$1245.size.plus((1)),$$diff.elements2$1246.size.plus((1)));
    $$diff.$prop$getOpt$1249={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Diff$diff.Matrix$Diff},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','opt']};}};
    $$diff.$prop$getOpt$1249.get=function(){return opt$1249};
    if(($$diff.m$1247.compare((0)).equals($$$cl734.getLarger())&&$$diff.n$1248.compare((0)).equals($$$cl734.getLarger()))){
        //'for' statement at Diff.ceylon (30:8-36:8)
        var it$1250 = $$$cl734.Range($$diff.m$1247.minus((1)),(0),{Element:{t:$$$cl734.Integer}}).iterator();
        var i$1251;while ((i$1251=it$1250.next())!==$$$cl734.getFinished()){
            //'for' statement at Diff.ceylon (31:12-35:12)
            var it$1252 = $$$cl734.Range($$diff.n$1248.minus((1)),(0),{Element:{t:$$$cl734.Integer}}).iterator();
            var j$1253;while ((j$1253=it$1252.next())!==$$$cl734.getFinished()){
                //assert at Diff.ceylon (32:16-32:47)
                var x$1254;
                if (!((x$1254=$$diff.elements1$1245.$get(i$1251))!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists x = elements1[i]\' at Diff.ceylon (32:22-32:46)"),'32:16-32:47','Diff.ceylon'); }
                //assert at Diff.ceylon (33:16-33:47)
                var y$1255;
                if (!((y$1255=$$diff.elements2$1246.$get(j$1253))!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists y = elements2[j]\' at Diff.ceylon (33:22-33:46)"),'33:16-33:47','Diff.ceylon'); }
                $$diff.opt$1249.set(i$1251,j$1253,(opt$1256=(x$1254.equals(y$1255)?$$diff.opt$1249.$get(i$1251.plus((1)),j$1253.plus((1))).plus((1)):null),opt$1256!==null?opt$1256:$$$cl734.max([$$diff.opt$1249.$get(i$1251.plus((1)),j$1253),$$diff.opt$1249.$get(i$1251,j$1253.plus((1)))].reifyCeylonType({Element:{t:$$$cl734.Integer},Absent:{t:$$$cl734.Nothing}}),{Value:{t:$$$cl734.Integer},Absent:{t:$$$cl734.Nothing}})));
                var opt$1256;
            }
        }
    }
    
    //AttributeDecl i at Diff.ceylon (39:4-39:26)
    $$diff.i$1257_=(0);
    $$diff.$prop$getI$1257={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Diff$diff,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm.diff','Diff','$at','i']};}};
    $$diff.$prop$getI$1257.get=function(){return i$1257};
    
    //AttributeDecl j at Diff.ceylon (40:4-40:26)
    $$diff.j$1258_=(0);
    $$diff.$prop$getJ$1258={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Diff$diff,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm.diff','Diff','$at','j']};}};
    $$diff.$prop$getJ$1258.get=function(){return j$1258};
    return $$diff;
}
Diff$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'elements1',$mt:'prm',$t:{t:$$$cl734.List,a:{Element:'E'}},$an:function(){return[];}},{$nm:'elements2',$mt:'prm',$t:{t:$$$cl734.List,a:{Element:'E'}},$an:function(){return[];}}],$tp:{E:{'satisfies':[{t:$$$cl734.$Object}]}},satisfies:[{t:$$$cl734.Iterator,a:{Element:{t:'T',l:[{$t:'E'},{$t:{t:Change$diff}}]}}}],$an:function(){return[$$$cl734.doc($$$cl734.String("Diff two series of elements\n",28)),$$$cl734.shared()];},d:['io.cayla.mvvm.diff','Diff']};};
exports.Diff$diff=Diff$diff;
function $init$Diff$diff(){
    if (Diff$diff.$$===undefined){
        $$$cl734.initTypeProto(Diff$diff,'io.cayla.mvvm.diff::Diff',$$$cl734.Basic,$$$cl734.Iterator);
        (function($$diff){
            
            //AttributeDecl m at Diff.ceylon (8:4-8:28)
            $$$cl734.defineAttr($$diff,'m$1247',function(){return this.m$1247_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','m']};});
            
            //AttributeDecl n at Diff.ceylon (9:4-9:28)
            $$$cl734.defineAttr($$diff,'n$1248',function(){return this.n$1248_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','n']};});
            
            //ClassDef Matrix at Diff.ceylon (11:4-25:4)
            function Matrix$Diff(width$1259, height$1260, $$matrix$1261){
                $init$Matrix$Diff();
                if ($$matrix$1261===undefined)$$matrix$1261=new this.Matrix$Diff.$$;
                $$matrix$1261.$$outer=this;
                $$matrix$1261.width$1259_=width$1259;
                $$matrix$1261.height$1260_=height$1260;
                
                //AttributeDecl state at Diff.ceylon (13:8-13:52)
                $$matrix$1261.state$1262_=$$$cl734.arrayOfSize($$matrix$1261.width$1259.times($$matrix$1261.height$1260),(0),{Element:{t:$$$cl734.Integer}});
                $$matrix$1261.$prop$getState$1262={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Array,a:{Element:{t:$$$cl734.Integer}}},$cont:Matrix$Diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','state']};}};
                $$matrix$1261.$prop$getState$1262.get=function(){return state$1262};
                
                //AttributeDecl string at Diff.ceylon (24:8-24:51)
                $$matrix$1261.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.String},$cont:Matrix$Diff,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','string']};}};
                $$matrix$1261.$prop$getString.get=function(){return string};
                return $$matrix$1261;
            }
            Matrix$Diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'width',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}},{$nm:'height',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix']};};
            function $init$Matrix$Diff(){
                if (Matrix$Diff.$$===undefined){
                    $$$cl734.initTypeProto(Matrix$Diff,'io.cayla.mvvm.diff::Diff.Matrix',$$$cl734.Basic);
                    Diff$diff.Matrix$Diff=Matrix$Diff;
                    (function($$matrix$1261){
                        
                        //AttributeDecl state at Diff.ceylon (13:8-13:52)
                        $$$cl734.defineAttr($$matrix$1261,'state$1262',function(){return this.state$1262_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Array,a:{Element:{t:$$$cl734.Integer}}},$cont:Matrix$Diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','state']};});
                        
                        //MethodDef set at Diff.ceylon (15:8-17:8)
                        $$matrix$1261.set=function set(x$1263,y$1264,e$1265){
                            var $$matrix$1261=this;
                            $$matrix$1261.state$1262.set(x$1263.plus(y$1264.times($$matrix$1261.$$outer.m$1247.plus((1)))),e$1265);
                        };$$matrix$1261.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}},{$nm:'e',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:Matrix$Diff,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$m','set']};};
                        
                        //MethodDef get at Diff.ceylon (19:8-22:8)
                        $$matrix$1261.$get=function $get(x$1266,y$1267){
                            var $$matrix$1261=this;
                            //assert at Diff.ceylon (20:12-20:53)
                            var e$1268;
                            if (!((e$1268=$$matrix$1261.state$1262.$get(x$1266.plus(y$1267.times($$matrix$1261.$$outer.m$1247.plus((1))))))!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists e = state[x + y * (m + 1)]\' at Diff.ceylon (20:18-20:52)"),'20:12-20:53','Diff.ceylon'); }
                            return e$1268;
                        };$$matrix$1261.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:Matrix$Diff,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$m','get']};};
                        
                        //AttributeDecl string at Diff.ceylon (24:8-24:51)
                        $$$cl734.defineAttr($$matrix$1261,'string',function(){
                            var $$matrix$1261=this;
                            return $$matrix$1261.state$1262.string;
                        },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.String},$cont:Matrix$Diff,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','string']};});
                        $$$cl734.defineAttr($$matrix$1261,'width$1259',function(){return this.width$1259_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Matrix$Diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','width']};});
                        $$$cl734.defineAttr($$matrix$1261,'height$1260',function(){return this.height$1260_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Matrix$Diff,d:['io.cayla.mvvm.diff','Diff','$c','Matrix','$at','height']};});
                    })(Matrix$Diff.$$.prototype);
                }
                return Matrix$Diff;
            }
            $$diff.$init$Matrix$Diff=$init$Matrix$Diff;
            $init$Matrix$Diff();
            $$diff.Matrix$Diff=Matrix$Diff;
            
            //AttributeDecl opt at Diff.ceylon (28:4-28:62)
            $$$cl734.defineAttr($$diff,'opt$1249',function(){return this.opt$1249_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Diff$diff.Matrix$Diff},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','opt']};});
            
            //AttributeDecl i at Diff.ceylon (39:4-39:26)
            $$$cl734.defineAttr($$diff,'i$1257',function(){return this.i$1257_;},function(i$1269){return this.i$1257_=i$1269;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Diff$diff,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm.diff','Diff','$at','i']};});
            
            //AttributeDecl j at Diff.ceylon (40:4-40:26)
            $$$cl734.defineAttr($$diff,'j$1258',function(){return this.j$1258_;},function(j$1270){return this.j$1258_=j$1270;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Diff$diff,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm.diff','Diff','$at','j']};});
            
            //MethodDef next at Diff.ceylon (42:4-68:4)
            $$diff.next=function next(){
                var $$diff=this;
                if(($$diff.i$1257.compare($$diff.m$1247).equals($$$cl734.getSmaller())&&$$diff.j$1258.compare($$diff.n$1248).equals($$$cl734.getSmaller()))){
                    //assert at Diff.ceylon (44:12-44:44)
                    var e1$1271;
                    if (!((e1$1271=$$diff.elements1$1245.$get($$diff.i$1257))!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists e1 = elements1[i]\' at Diff.ceylon (44:18-44:43)"),'44:12-44:44','Diff.ceylon'); }
                    //assert at Diff.ceylon (45:12-45:44)
                    var e2$1272;
                    if (!((e2$1272=$$diff.elements2$1246.$get($$diff.j$1258))!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists e2 = elements2[j]\' at Diff.ceylon (45:18-45:43)"),'45:12-45:44','Diff.ceylon'); }
                    if(e1$1271.equals(e2$1272)){
                        (oldi$1273=$$diff.i$1257,$$diff.i$1257=oldi$1273.successor,oldi$1273);
                        var oldi$1273;
                        (oldj$1274=$$diff.j$1258,$$diff.j$1258=oldj$1274.successor,oldj$1274);
                        var oldj$1274;
                        return $$$cl734.Tuple(e1$1271,$$$cl734.Tuple(getSame$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                    }else {
                        if(($$diff.opt$1249.$get($$diff.i$1257.plus((1)),$$diff.j$1258).compare($$diff.opt$1249.$get($$diff.i$1257,$$diff.j$1258.plus((1))))!==$$$cl734.getSmaller())){
                            (oldi$1275=$$diff.i$1257,$$diff.i$1257=oldi$1275.successor,oldi$1275);
                            var oldi$1275;
                            return $$$cl734.Tuple(e1$1271,$$$cl734.Tuple(getRemoved$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                        }else {
                            (oldj$1276=$$diff.j$1258,$$diff.j$1258=oldj$1276.successor,oldj$1276);
                            var oldj$1276;
                            return $$$cl734.Tuple(e2$1272,$$$cl734.Tuple(getAdded$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                        }
                    }
                }else {
                    if($$diff.i$1257.compare($$diff.m$1247).equals($$$cl734.getSmaller())){
                        //assert at Diff.ceylon (58:12-58:44)
                        var e1$1277;
                        if (!((e1$1277=$$diff.elements1$1245.$get($$diff.i$1257))!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists e1 = elements1[i]\' at Diff.ceylon (58:18-58:43)"),'58:12-58:44','Diff.ceylon'); }
                        (oldi$1278=$$diff.i$1257,$$diff.i$1257=oldi$1278.successor,oldi$1278);
                        var oldi$1278;
                        return $$$cl734.Tuple(e1$1277,$$$cl734.Tuple(getRemoved$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                    }else {
                        if($$diff.j$1258.compare($$diff.n$1248).equals($$$cl734.getSmaller())){
                            //assert at Diff.ceylon (62:12-62:44)
                            var e2$1279;
                            if (!((e2$1279=$$diff.elements2$1246.$get($$diff.j$1258))!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists e2 = elements2[j]\' at Diff.ceylon (62:18-62:43)"),'62:12-62:44','Diff.ceylon'); }
                            (oldj$1280=$$diff.j$1258,$$diff.j$1258=oldj$1280.successor,oldj$1280);
                            var oldj$1280;
                            return $$$cl734.Tuple(e2$1279,$$$cl734.Tuple(getAdded$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:Change$diff},First:{t:Change$diff}}),{Rest:{t:'T', l:[{t:Change$diff}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$diff}]},First:$$diff.$$targs$$.E});
                        }else {
                            return $$$cl734.getFinished();
                        }
                    }
                }
            };$$diff.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:'T',l:[{$t:'E'},{$t:{t:Change$diff}}]},{t:$$$cl734.Finished}]},$ps:[],$cont:Diff$diff,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm.diff','Diff','$m','next']};};
            $$$cl734.defineAttr($$diff,'elements1$1245',function(){return this.elements1$1245_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'E'}},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','elements1']};});
            $$$cl734.defineAttr($$diff,'elements2$1246',function(){return this.elements2$1246_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'E'}},$cont:Diff$diff,d:['io.cayla.mvvm.diff','Diff','$at','elements2']};});
        })(Diff$diff.$$.prototype);
    }
    return Diff$diff;
}
exports.$init$Diff$diff=$init$Diff$diff;
$init$Diff$diff();

//ClassDef Change at Change.ceylon (1:0-3:0)
function Change$diff($$change){
    $init$Change$diff();
    if ($$change===undefined)$$$cl734.throwexc($$$cl734.InvocationException$meta$model($$$cl734.String("Cannot instantiate abstract class")),'?','?')
    return $$change;
}
Change$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],of:[{t:removed$1281$diff},{t:same$1282$diff},{t:added$1283$diff}],$an:function(){return[$$$cl734.doc($$$cl734.String("A change",8)),$$$cl734.shared(),$$$cl734.abstract()];},d:['io.cayla.mvvm.diff','Change']};};
exports.Change$diff=Change$diff;
function $init$Change$diff(){
    if (Change$diff.$$===undefined){
        $$$cl734.initTypeProto(Change$diff,'io.cayla.mvvm.diff::Change',$$$cl734.Basic);
    }
    return Change$diff;
}
exports.$init$Change$diff=$init$Change$diff;
$init$Change$diff();

//ObjectDef removed at Change.ceylon (4:0-6:0)
function removed$1281$diff(){
    var $$removed=new removed$1281$diff.$$;
    Change$diff($$removed);
    return $$removed;
};removed$1281$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$diff},$an:function(){return[$$$cl734.doc("Removed change"),$$$cl734.shared()];},d:['io.cayla.mvvm.diff','removed']};};
function $init$removed$1281$diff(){
    if (removed$1281$diff.$$===undefined){
        $$$cl734.initTypeProto(removed$1281$diff,'io.cayla.mvvm.diff::removed',$init$Change$diff());
    }
    return removed$1281$diff;
}
exports.$init$removed$1281$diff=$init$removed$1281$diff;
$init$removed$1281$diff();
var removed$1284$diff;
function getRemoved$diff(){
    if (removed$1284$diff===undefined){removed$1284$diff=$init$removed$1281$diff()();removed$1284$diff.$$metamodel$$=getRemoved$diff.$$metamodel$$;}
    return removed$1284$diff;
}
exports.getRemoved$diff=getRemoved$diff;
getRemoved$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:removed$1281$diff},$an:function(){return[$$$cl734.doc($$$cl734.String("Removed change",14)),$$$cl734.shared()];},d:['io.cayla.mvvm.diff','removed']};};
$prop$getRemoved$diff={get:getRemoved$diff,$$metamodel$$:getRemoved$diff.$$metamodel$$};
exports.$prop$getRemoved$diff=$prop$getRemoved$diff;

//ObjectDef same at Change.ceylon (7:0-9:0)
function same$1282$diff(){
    var $$same=new same$1282$diff.$$;
    Change$diff($$same);
    return $$same;
};same$1282$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$diff},$an:function(){return[$$$cl734.doc("Same change"),$$$cl734.shared()];},d:['io.cayla.mvvm.diff','same']};};
function $init$same$1282$diff(){
    if (same$1282$diff.$$===undefined){
        $$$cl734.initTypeProto(same$1282$diff,'io.cayla.mvvm.diff::same',$init$Change$diff());
    }
    return same$1282$diff;
}
exports.$init$same$1282$diff=$init$same$1282$diff;
$init$same$1282$diff();
var same$1285$diff;
function getSame$diff(){
    if (same$1285$diff===undefined){same$1285$diff=$init$same$1282$diff()();same$1285$diff.$$metamodel$$=getSame$diff.$$metamodel$$;}
    return same$1285$diff;
}
exports.getSame$diff=getSame$diff;
getSame$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:same$1282$diff},$an:function(){return[$$$cl734.doc($$$cl734.String("Same change",11)),$$$cl734.shared()];},d:['io.cayla.mvvm.diff','same']};};
$prop$getSame$diff={get:getSame$diff,$$metamodel$$:getSame$diff.$$metamodel$$};
exports.$prop$getSame$diff=$prop$getSame$diff;

//ObjectDef added at Change.ceylon (10:0-12:0)
function added$1283$diff(){
    var $$added=new added$1283$diff.$$;
    Change$diff($$added);
    return $$added;
};added$1283$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$diff},$an:function(){return[$$$cl734.doc("Added change"),$$$cl734.shared()];},d:['io.cayla.mvvm.diff','added']};};
function $init$added$1283$diff(){
    if (added$1283$diff.$$===undefined){
        $$$cl734.initTypeProto(added$1283$diff,'io.cayla.mvvm.diff::added',$init$Change$diff());
    }
    return added$1283$diff;
}
exports.$init$added$1283$diff=$init$added$1283$diff;
$init$added$1283$diff();
var added$1286$diff;
function getAdded$diff(){
    if (added$1286$diff===undefined){added$1286$diff=$init$added$1283$diff()();added$1286$diff.$$metamodel$$=getAdded$diff.$$metamodel$$;}
    return added$1286$diff;
}
exports.getAdded$diff=getAdded$diff;
getAdded$diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:added$1283$diff},$an:function(){return[$$$cl734.doc($$$cl734.String("Added change",12)),$$$cl734.shared()];},d:['io.cayla.mvvm.diff','added']};};
$prop$getAdded$diff={get:getAdded$diff,$$metamodel$$:getAdded$diff.$$metamodel$$};
exports.$prop$getAdded$diff=$prop$getAdded$diff;

//ClassDef Frame at dependant.ceylon (3:0-5:0)
function Frame($$frame){
    $init$Frame();
    if ($$frame===undefined)$$frame=new Frame.$$;
    
    //AttributeDecl observables at dependant.ceylon (4:4-4:82)
    $$frame.observables$1287_=$$$cc755.HashSet(undefined,{Element:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}});
    $$frame.$prop$getObservables={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.HashSet,a:{Element:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}}},$cont:Frame,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Frame','$at','observables']};}};
    $$frame.$prop$getObservables.get=function(){return observables};
    return $$frame;
}
Frame.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],d:['io.cayla.mvvm','Frame']};};
function $init$Frame(){
    if (Frame.$$===undefined){
        $$$cl734.initTypeProto(Frame,'io.cayla.mvvm::Frame',$$$cl734.Basic);
        (function($$frame){
            
            //AttributeDecl observables at dependant.ceylon (4:4-4:82)
            $$$cl734.defineAttr($$frame,'observables',function(){return this.observables$1287_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.HashSet,a:{Element:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}}},$cont:Frame,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Frame','$at','observables']};});
        })(Frame.$$.prototype);
    }
    return Frame;
}
exports.$init$Frame=$init$Frame;
$init$Frame();

//ObjectDef dependant at dependant.ceylon (7:0-26:0)
function dependant$1288(){
    var $$dependant=new dependant$1288.$$;
    
    //AttributeDecl stack at dependant.ceylon (9:4-9:37)
    $$dependant.stack$1289_=$$$cc755.LinkedList(undefined,{Element:{t:Frame}});
    $$dependant.$prop$getStack$1289={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:{t:Frame}}},$cont:dependant$1288,d:['io.cayla.mvvm','dependant','$at','stack']};}};
    $$dependant.$prop$getStack$1289.get=function(){return stack$1289};
    return $$dependant;
};dependant$1288.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},d:['io.cayla.mvvm','dependant']};};
function $init$dependant$1288(){
    if (dependant$1288.$$===undefined){
        $$$cl734.initTypeProto(dependant$1288,'io.cayla.mvvm::dependant',$$$cl734.Basic);
        (function($$dependant){
            
            //AttributeDecl stack at dependant.ceylon (9:4-9:37)
            $$$cl734.defineAttr($$dependant,'stack$1289',function(){return this.stack$1289_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:{t:Frame}}},$cont:dependant$1288,d:['io.cayla.mvvm','dependant','$at','stack']};});
            
            //MethodDef begin at dependant.ceylon (11:4-13:4)
            $$dependant.begin=function begin(){
                var $$dependant=this;
                $$dependant.stack$1289.add(Frame());
            };$$dependant.begin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:dependant$1288,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','dependant','$m','begin']};};
            
            //MethodDef report at dependant.ceylon (15:4-19:4)
            $$dependant.report=function report(observable$1290){
                var $$dependant=this;
                var last$1291;
                if((last$1291=$$dependant.stack$1289.last)!==null){
                    last$1291.observables.add(observable$1290);
                }
            };$$dependant.report.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'observable',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.$Object}}},$an:function(){return[];}}],$cont:dependant$1288,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','dependant','$m','report']};};
            
            //MethodDef end at dependant.ceylon (21:4-24:4)
            $$dependant.end=function end(){
                var $$dependant=this;
                //assert at dependant.ceylon (22:8-22:47)
                var ret$1292;
                if (!((ret$1292=$$dependant.stack$1289.removeLast())!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists ret = stack.removeLast()\' at dependant.ceylon (22:14-22:46)"),'22:8-22:47','dependant.ceylon'); }
                return ret$1292.observables;
            };$$dependant.end.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Set,a:{Element:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}}},$ps:[],$cont:dependant$1288,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','dependant','$m','end']};};
        })(dependant$1288.$$.prototype);
    }
    return dependant$1288;
}
exports.$init$dependant$1288=$init$dependant$1288;
$init$dependant$1288();
var dependant$1293;
function getDependant(){
    if (dependant$1293===undefined){dependant$1293=$init$dependant$1288()();dependant$1293.$$metamodel$$=getDependant.$$metamodel$$;}
    return dependant$1293;
}
getDependant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dependant$1288},d:['io.cayla.mvvm','dependant']};};
$prop$getDependant={get:getDependant,$$metamodel$$:getDependant.$$metamodel$$};
exports.$prop$getDependant=$prop$getDependant;

//ObjectDef binders at binders.ceylon (5:0-194:0)
function binders$1294(){
    var $$binders=new binders$1294.$$;
    
    //ObjectDef enter at binders.ceylon (7:4-19:4)
    $$binders.enter$1295_=$$binders.enter$1296();
    
    //ObjectDef checked at binders.ceylon (42:4-58:4)
    $$binders.checked$1297_=$$binders.checked$1298();
    
    //ObjectDef text at binders.ceylon (94:4-112:4)
    $$binders.text$1299_=$$binders.text$1300();
    
    //ObjectDef val at binders.ceylon (114:4-134:4)
    $$binders.val$1301_=$$binders.val$1302();
    return $$binders;
};binders$1294.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders']};};
function $init$binders$1294(){
    if (binders$1294.$$===undefined){
        $$$cl734.initTypeProto(binders$1294,'io.cayla.mvvm::binders',$$$cl734.Basic);
        (function($$binders){
            
            //ObjectDef enter at binders.ceylon (7:4-19:4)
            function enter$1296($$targs$$){
                var $$enter$binders=new this.enter$1296.$$;
                $$enter$binders.$$outer=this;
                $$enter$binders.$$targs$$=$$targs$$;
                Binder({Value:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}}},$$enter$binders);
                $$$cl734.add_type_arg($$enter$binders,'Value',{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}});
                return $$enter$binders;
            };enter$1296.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$cont:binders$1294,satisfies:[{t:Binder,a:{Value:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}}}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','enter']};};
            function $init$enter$1296(){
                if (enter$1296.$$===undefined){
                    $$$cl734.initTypeProto(enter$1296,'io.cayla.mvvm::binders.enter',$$$cl734.Basic,$init$Binder());
                    binders$1294.enter$1296=enter$1296;
                    (function($$enter$binders){
                        
                        //MethodDef init at binders.ceylon (8:8-16:8)
                        $$enter$binders.init=function init(val$1303,context$1304){
                            var $$enter$binders=this;
                            
                            //MethodDef f at binders.ceylon (9:12-14:12)
                            function f$1305(event$1306){
                                //assert at binders.ceylon (10:16-10:58)
                                var v$1307;
                                if (!((v$1307=event$1306.target.getValue())!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists v = event.target.getValue()\' at binders.ceylon (10:22-10:57)"),'10:16-10:58','binders.ceylon'); }
                                if(event$1306.keyCode.equals((13))){
                                    val$1303();
                                }
                            };f$1305.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['io.cayla.mvvm','binders','$o','enter','$m','init','$m','f']};};
                            context$1304.node.addEventHandler($$$cl734.String("keyup",5),$$$cl734.$JsCallable(f$1305,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                        };$$enter$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:enter$1296,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$o','enter','$m','init']};};
                        
                        //MethodDef update at binders.ceylon (17:8-18:8)
                        $$enter$binders.update=function update(node$1308,val$1309){
                            var $$enter$binders=this;
                        };$$enter$binders.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}},$an:function(){return[];}}],$cont:enter$1296,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$o','enter','$m','update']};};
                    })(enter$1296.$$.prototype);
                }
                return enter$1296;
            }
            $$binders.$init$enter$1296=$init$enter$1296;
            $init$enter$1296();
            $$$cl734.defineAttr($$binders,'enter',function(){return this.enter$1295_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294.enter$1296},$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','enter']};});
            $$binders.enter$1296=enter$1296;$$binders.enter$1296.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294.enter$1296},$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','enter']};};
            
            //MethodDef click at binders.ceylon (21:4-40:4)
            $$binders.click=function click($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (22:8-38:8)
                function impl$1310($$targs$$){
                    var $$impl$1310=new impl$1310.$$;
                    $$impl$1310.$$targs$$=$$targs$$;
                    Binder({Value:{t:'u', l:[{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}},{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}}]}},$$impl$1310);
                    return $$impl$1310;
                };impl$1310.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},satisfies:[{t:Binder,a:{Value:{t:'u', l:[{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}}]}}}],d:['io.cayla.mvvm','binders','$m','click','$o','impl']};};
                function $init$impl$1310(){
                    if (impl$1310.$$===undefined){
                        $$$cl734.initTypeProto(impl$1310,'io.cayla.mvvm::binders.click.impl',$$$cl734.Basic,$init$Binder());
                        (function($$impl$1310){
                            
                            //MethodDef init at binders.ceylon (23:12-34:12)
                            $$impl$1310.init=function init(val$1311,context$1312){
                                var $$impl$1310=this;
                                var val$1313;
                                if($$$cl734.isOfType((val$1313=val$1311),{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}})){
                                    var s$1314;
                                    if((s$1314=context$1312.resolve({Value:$$$mptypes.Source}))!==null){
                                        context$1312.node.addEventHandler($$$cl734.String("click",5),$$$cl734.$JsCallable((function (event$1315){
                                            return val$1313(s$1314);
                                        }),[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                                    }else {}
                                }else {
                                    var val$1316;
                                    if($$$cl734.isOfType((val$1316=val$1311),{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}})){
                                        context$1312.node.addEventHandler($$$cl734.String("click",5),$$$cl734.$JsCallable((function (event$1317){
                                            return val$1316();
                                        }),[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                                    }
                                }
                            };$$impl$1310.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}}]},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$1310,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','click','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (36:12-37:12)
                            $$impl$1310.update=function update(node$1318,val$1319){
                                var $$impl$1310=this;
                            };$$impl$1310.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}}]},$an:function(){return[];}}],$cont:impl$1310,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','click','$o','impl','$m','update']};};
                        })(impl$1310.$$.prototype);
                    }
                    return impl$1310;
                }
                $init$impl$1310();
                var impl$1320;
                function getImpl$1320(){
                    if (impl$1320===undefined){impl$1320=$init$impl$1310()({Value:{t:'u', l:[{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}},{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}}]}});impl$1320.$$metamodel$$=getImpl$1320.$$metamodel$$;}
                    return impl$1320;
                }
                getImpl$1320.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$1310},d:['io.cayla.mvvm','binders','$m','click','$o','impl']};};
                $prop$getImpl$1320={get:getImpl$1320,$$metamodel$$:getImpl$1320.$$metamodel$$};
                return getImpl$1320();
            };$$binders.click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:'u', l:[{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}}]}}},$ps:[],$cont:binders$1294,$tp:{Source:{'satisfies':[{t:$$$cl734.$Object}],'def':{t:$$$cl734.$Object}}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$m','click']};};
            
            //ObjectDef checked at binders.ceylon (42:4-58:4)
            function checked$1298($$targs$$){
                var $$checked$binders=new this.checked$1298.$$;
                $$checked$binders.$$outer=this;
                $$checked$binders.$$targs$$=$$targs$$;
                Binder({Value:{t:Property,a:{Value:{t:$$$cl734.$Boolean}}}},$$checked$binders);
                $$$cl734.add_type_arg($$checked$binders,'Value',{t:Property,a:{Value:{t:$$$cl734.$Boolean}}});
                return $$checked$binders;
            };checked$1298.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$cont:binders$1294,satisfies:[{t:Binder,a:{Value:{t:Property,a:{Value:{t:$$$cl734.$Boolean}}}}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','checked']};};
            function $init$checked$1298(){
                if (checked$1298.$$===undefined){
                    $$$cl734.initTypeProto(checked$1298,'io.cayla.mvvm::binders.checked',$$$cl734.Basic,$init$Binder());
                    binders$1294.checked$1298=checked$1298;
                    (function($$checked$binders){
                        
                        //MethodDef init at binders.ceylon (43:8-55:8)
                        $$checked$binders.init=function init(property$1321,context$1322){
                            var $$checked$binders=this;
                            
                            //MethodDef f at binders.ceylon (44:12-49:12)
                            function f$1323(event$1324){
                                
                                //AttributeDecl target at binders.ceylon (45:16-45:43)
                                var target$1325=event$1324.target;
                                
                                //AttributeDecl checked at binders.ceylon (46:16-46:50)
                                var checked$1326=target$1325.isChecked();
                                //assert at binders.ceylon (47:16-47:39)
                                var checked$1327;
                                if (!((checked$1327=checked$1326)!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists checked\' at binders.ceylon (47:23-47:38)"),'47:16-47:39','binders.ceylon'); }
                                property$1321.setValue(checked$1327);
                            };f$1323.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['io.cayla.mvvm','binders','$o','checked','$m','init','$m','f']};};
                            context$1322.node.addEventHandler($$$cl734.String("click",5),$$$cl734.$JsCallable(f$1323,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                            property$1321.subscribe($$$cl734.$JsCallable((function (prop$1328){
                                return context$1322.node.setChecked(prop$1328);
                            }),[{$nm:'prop',$mt:'prm',$t:{t:$$$cl734.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.$Boolean}]}}));
                            if(property$1321.getValue()){
                                context$1322.node.setAttribute($$$cl734.String("checked",7),$$$cl734.String("",0));
                            }
                        };$$checked$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl734.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:checked$1298,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$o','checked','$m','init']};};
                        
                        //MethodDef update at binders.ceylon (56:8-57:8)
                        $$checked$binders.update=function update(node$1329,property$1330){
                            var $$checked$binders=this;
                        };$$checked$binders.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl734.$Boolean}}},$an:function(){return[];}}],$cont:checked$1298,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$o','checked','$m','update']};};
                    })(checked$1298.$$.prototype);
                }
                return checked$1298;
            }
            $$binders.$init$checked$1298=$init$checked$1298;
            $init$checked$1298();
            $$$cl734.defineAttr($$binders,'checked',function(){return this.checked$1297_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294.checked$1298},$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','checked']};});
            $$binders.checked$1298=checked$1298;$$binders.checked$1298.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294.checked$1298},$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','checked']};};
            
            //MethodDef css at binders.ceylon (60:4-77:4)
            $$binders.css=function css(className$1331){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (61:8-75:8)
                function impl$1332($$targs$$){
                    var $$impl$1332=new impl$1332.$$;
                    $$impl$1332.$$targs$$=$$targs$$;
                    Binder({Value:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}}},$$impl$1332);
                    $$$cl734.add_type_arg($$impl$1332,'Value',{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}});
                    return $$impl$1332;
                };impl$1332.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}}}}],d:['io.cayla.mvvm','binders','$m','css','$o','impl']};};
                function $init$impl$1332(){
                    if (impl$1332.$$===undefined){
                        $$$cl734.initTypeProto(impl$1332,'io.cayla.mvvm::binders.css.impl',$$$cl734.Basic,$init$Binder());
                        (function($$impl$1332){
                            
                            //MethodDef init at binders.ceylon (62:12-72:12)
                            $$impl$1332.init=function init(val$1333,context$1334){
                                var $$impl$1332=this;
                                
                                //MethodDef g at binders.ceylon (63:16-69:16)
                                function g$1335(p$1336){
                                    if(p$1336){
                                        context$1334.node.addClass(className$1331);
                                    }else {
                                        context$1334.node.removeClass(className$1331);
                                    }
                                };g$1335.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl734.$Boolean},$an:function(){return[];}}],d:['io.cayla.mvvm','binders','$m','css','$o','impl','$m','init','$m','g']};};
                                val$1333.subscribe($$$cl734.$JsCallable(g$1335,[{$nm:'p',$mt:'prm',$t:{t:$$$cl734.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.$Boolean}]}}));
                                g$1335(val$1333.getValue());
                            };$$impl$1332.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$1332,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','css','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (73:12-74:12)
                            $$impl$1332.update=function update(node$1337,val$1338){
                                var $$impl$1332=this;
                            };$$impl$1332.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}},$an:function(){return[];}}],$cont:impl$1332,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','css','$o','impl','$m','update']};};
                        })(impl$1332.$$.prototype);
                    }
                    return impl$1332;
                }
                $init$impl$1332();
                var impl$1339;
                function getImpl$1339(){
                    if (impl$1339===undefined){impl$1339=$init$impl$1332()({Value:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}}});impl$1339.$$metamodel$$=getImpl$1339.$$metamodel$$;}
                    return impl$1339;
                }
                getImpl$1339.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$1332},d:['io.cayla.mvvm','binders','$m','css','$o','impl']};};
                $prop$getImpl$1339={get:getImpl$1339,$$metamodel$$:getImpl$1339.$$metamodel$$};
                return getImpl$1339();
            };$$binders.css.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}}}},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$m','css']};};
            
            //MethodDef visible at binders.ceylon (79:4-92:4)
            $$binders.visible=function visible(){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (80:8-90:8)
                function impl$1340($$targs$$){
                    var $$impl$1340=new impl$1340.$$;
                    $$impl$1340.$$targs$$=$$targs$$;
                    Binder({Value:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}}},$$impl$1340);
                    $$$cl734.add_type_arg($$impl$1340,'Value',{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}});
                    return $$impl$1340;
                };impl$1340.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}}}}],d:['io.cayla.mvvm','binders','$m','visible','$o','impl']};};
                function $init$impl$1340(){
                    if (impl$1340.$$===undefined){
                        $$$cl734.initTypeProto(impl$1340,'io.cayla.mvvm::binders.visible.impl',$$$cl734.Basic,$init$Binder());
                        (function($$impl$1340){
                            
                            //MethodDef init at binders.ceylon (81:12-87:12)
                            $$impl$1340.init=function init(val$1341,context$1342){
                                var $$impl$1340=this;
                                
                                //MethodDef g at binders.ceylon (82:16-84:16)
                                function g$1343(p$1344){
                                    (tmp$1345=context$1342.node,tmp$1345.visible=p$1344,tmp$1345.visible);
                                    var tmp$1345;
                                };g$1343.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl734.$Boolean},$an:function(){return[];}}],d:['io.cayla.mvvm','binders','$m','visible','$o','impl','$m','init','$m','g']};};
                                val$1341.subscribe($$$cl734.$JsCallable(g$1343,[{$nm:'p',$mt:'prm',$t:{t:$$$cl734.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.$Boolean}]}}));
                                g$1343(val$1341.getValue());
                            };$$impl$1340.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$1340,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','visible','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (88:12-89:12)
                            $$impl$1340.update=function update(node$1346,val$1347){
                                var $$impl$1340=this;
                            };$$impl$1340.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}},$an:function(){return[];}}],$cont:impl$1340,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','visible','$o','impl','$m','update']};};
                        })(impl$1340.$$.prototype);
                    }
                    return impl$1340;
                }
                $init$impl$1340();
                var impl$1348;
                function getImpl$1348(){
                    if (impl$1348===undefined){impl$1348=$init$impl$1340()({Value:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}}});impl$1348.$$metamodel$$=getImpl$1348.$$metamodel$$;}
                    return impl$1348;
                }
                getImpl$1348.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$1340},d:['io.cayla.mvvm','binders','$m','visible','$o','impl']};};
                $prop$getImpl$1348={get:getImpl$1348,$$metamodel$$:getImpl$1348.$$metamodel$$};
                return getImpl$1348();
            };$$binders.visible.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl734.$Boolean}}}}},$ps:[],$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$m','visible']};};
            
            //ObjectDef text at binders.ceylon (94:4-112:4)
            function text$1300($$targs$$){
                var $$text$binders=new this.text$1300.$$;
                $$text$binders.$$outer=this;
                $$text$binders.$$targs$$=$$targs$$;
                Binder({Value:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}},$$text$binders);
                $$$cl734.add_type_arg($$text$binders,'Value',{t:Observable,a:{Value:{t:$$$cl734.$Object}}});
                return $$text$binders;
            };text$1300.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$cont:binders$1294,satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','text']};};
            function $init$text$1300(){
                if (text$1300.$$===undefined){
                    $$$cl734.initTypeProto(text$1300,'io.cayla.mvvm::binders.text',$$$cl734.Basic,$init$Binder());
                    binders$1294.text$1300=text$1300;
                    (function($$text$binders){
                        
                        //MethodDef init at binders.ceylon (95:8-109:8)
                        $$text$binders.init=function init(property$1349,context$1350){
                            var $$text$binders=this;
                            
                            //MethodDef g at binders.ceylon (96:12-102:12)
                            function g$1351(p$1352){
                                //'for' statement at binders.ceylon (97:16-99:16)
                                var it$1353 = context$1350.node.getChildren().iterator();
                                var child$1354;while ((child$1354=it$1353.next())!==$$$cl734.getFinished()){
                                    child$1354.detach();
                                }
                                
                                //AttributeDecl init at binders.ceylon (100:16-100:48)
                                var init$1355=property$1349.getValue();
                                context$1350.node.addText(init$1355.string);
                            };g$1351.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[];}}],d:['io.cayla.mvvm','binders','$o','text','$m','init','$m','g']};};
                            property$1349.subscribe($$$cl734.$JsCallable(g$1351,[{$nm:'p',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.$Object}]}}));
                            //'for' statement at binders.ceylon (104:12-106:12)
                            var it$1356 = context$1350.node.getChildren().iterator();
                            var child$1357;while ((child$1357=it$1356.next())!==$$$cl734.getFinished()){
                                child$1357.detach();
                            }
                            
                            //AttributeDecl init at binders.ceylon (107:12-107:44)
                            var init$1358=property$1349.getValue();
                            context$1350.node.addText(init$1358.string);
                        };$$text$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.$Object}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:text$1300,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$o','text','$m','init']};};
                        
                        //MethodDef update at binders.ceylon (110:8-111:8)
                        $$text$binders.update=function update(node$1359,property$1360){
                            var $$text$binders=this;
                        };$$text$binders.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'property',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.$Object}}},$an:function(){return[];}}],$cont:text$1300,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$o','text','$m','update']};};
                    })(text$1300.$$.prototype);
                }
                return text$1300;
            }
            $$binders.$init$text$1300=$init$text$1300;
            $init$text$1300();
            $$$cl734.defineAttr($$binders,'text',function(){return this.text$1299_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294.text$1300},$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','text']};});
            $$binders.text$1300=text$1300;$$binders.text$1300.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294.text$1300},$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','text']};};
            
            //ObjectDef val at binders.ceylon (114:4-134:4)
            function val$1302($$targs$$){
                var $$val$binders=new this.val$1302.$$;
                $$val$binders.$$outer=this;
                $$val$binders.$$targs$$=$$targs$$;
                Binder({Value:{t:Property,a:{Value:{t:$$$cl734.String}}}},$$val$binders);
                $$$cl734.add_type_arg($$val$binders,'Value',{t:Property,a:{Value:{t:$$$cl734.String}}});
                return $$val$binders;
            };val$1302.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$cont:binders$1294,satisfies:[{t:Binder,a:{Value:{t:Property,a:{Value:{t:$$$cl734.String}}}}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','val']};};
            function $init$val$1302(){
                if (val$1302.$$===undefined){
                    $$$cl734.initTypeProto(val$1302,'io.cayla.mvvm::binders.val',$$$cl734.Basic,$init$Binder());
                    binders$1294.val$1302=val$1302;
                    (function($$val$binders){
                        
                        //MethodDef init at binders.ceylon (115:8-131:8)
                        $$val$binders.init=function init(property$1361,context$1362){
                            var $$val$binders=this;
                            
                            //MethodDef f at binders.ceylon (116:12-124:12)
                            function f$1363(event$1364){
                                //assert at binders.ceylon (117:16-117:58)
                                var v$1365;
                                if (!((v$1365=event$1364.target.getValue())!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists v = event.target.getValue()\' at binders.ceylon (117:22-117:57)"),'117:16-117:58','binders.ceylon'); }
                                property$1361.setValue(v$1365);
                            };f$1363.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['io.cayla.mvvm','binders','$o','val','$m','init','$m','f']};};
                            context$1362.node.addEventHandler($$$cl734.String("keyup",5),$$$cl734.$JsCallable(f$1363,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                            
                            //MethodDef g at binders.ceylon (126:12-128:12)
                            function g$1366(p$1367){
                                context$1362.node.setValue(property$1361.getValue());
                            };g$1366.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],d:['io.cayla.mvvm','binders','$o','val','$m','init','$m','g']};};
                            property$1361.subscribe($$$cl734.$JsCallable(g$1366,[{$nm:'p',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.String}]}}));
                            context$1362.node.setValue(property$1361.getValue());
                        };$$val$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl734.String}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:val$1302,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$o','val','$m','init']};};
                        
                        //MethodDef update at binders.ceylon (132:8-133:8)
                        $$val$binders.update=function update(node$1368,property$1369){
                            var $$val$binders=this;
                        };$$val$binders.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl734.String}}},$an:function(){return[];}}],$cont:val$1302,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$o','val','$m','update']};};
                    })(val$1302.$$.prototype);
                }
                return val$1302;
            }
            $$binders.$init$val$1302=$init$val$1302;
            $init$val$1302();
            $$$cl734.defineAttr($$binders,'val',function(){return this.val$1301_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294.val$1302},$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','val']};});
            $$binders.val$1302=val$1302;$$binders.val$1302.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294.val$1302},$cont:binders$1294,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$o','val']};};
            
            //MethodDef with at binders.ceylon (136:4-147:4)
            $$binders.$with=function $with($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (137:8-145:8)
                function impl$1370($$targs$$){
                    var $$impl$1370=new impl$1370.$$;
                    $$impl$1370.$$targs$$=$$targs$$;
                    Binder({Value:{t:Observable,a:{Value:$$$mptypes.Value}}},$$impl$1370);
                    $$$cl734.add_type_arg($$impl$1370,'Value',{t:Observable,a:{Value:$$$mptypes.Value}});
                    return $$impl$1370;
                };impl$1370.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:'Value'}}}}],d:['io.cayla.mvvm','binders','$m','with','$o','impl']};};
                function $init$impl$1370(){
                    if (impl$1370.$$===undefined){
                        $$$cl734.initTypeProto(impl$1370,'io.cayla.mvvm::binders.with.impl',$$$cl734.Basic,$init$Binder());
                        (function($$impl$1370){
                            
                            //MethodDef init at binders.ceylon (138:12-142:12)
                            $$impl$1370.init=function init(val$1371,context$1372){
                                var $$impl$1370=this;
                                
                                //AttributeDecl v at binders.ceylon (139:16-139:40)
                                var v$1373=val$1371.getValue();
                                context$1372.child(v$1373);
                                (tmp$1374=context$1372,tmp$1374.createChildren=false,tmp$1374.createChildren);
                                var tmp$1374;
                            };$$impl$1370.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:'Value'}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$1370,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','with','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (143:12-144:12)
                            $$impl$1370.update=function update(node$1375,val$1376){
                                var $$impl$1370=this;
                            };$$impl$1370.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:'Value'}},$an:function(){return[];}}],$cont:impl$1370,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','with','$o','impl','$m','update']};};
                        })(impl$1370.$$.prototype);
                    }
                    return impl$1370;
                }
                $init$impl$1370();
                var impl$1377;
                function getImpl$1377(){
                    if (impl$1377===undefined){impl$1377=$init$impl$1370()({Value:{t:Observable,a:{Value:$$$mptypes.Value}}});impl$1377.$$metamodel$$=getImpl$1377.$$metamodel$$;}
                    return impl$1377;
                }
                getImpl$1377.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$1370},d:['io.cayla.mvvm','binders','$m','with','$o','impl']};};
                $prop$getImpl$1377={get:getImpl$1377,$$metamodel$$:getImpl$1377.$$metamodel$$};
                return getImpl$1377();
            };$$binders.$with.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:Observable,a:{Value:'Value'}}}},$ps:[],$cont:binders$1294,$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$m','with']};};
            
            //MethodDef foreach at binders.ceylon (149:4-193:4)
            $$binders.foreach=function foreach($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (150:8-191:8)
                function impl$1378($$targs$$){
                    var $$impl$1378=new impl$1378.$$;
                    $$impl$1378.$$targs$$=$$targs$$;
                    Binder({Value:{t:Observable,a:{Value:{t:$$$cl734.List,a:{Element:$$$mptypes.Value}}}}},$$impl$1378);
                    $$$cl734.add_type_arg($$impl$1378,'Value',{t:Observable,a:{Value:{t:$$$cl734.List,a:{Element:$$$mptypes.Value}}}});
                    
                    //AttributeDecl values at binders.ceylon (152:12-152:58)
                    $$impl$1378.values$1379_=$$$cc755.LinkedList(undefined,{Element:$$$mptypes.Value});
                    $$impl$1378.$prop$getValues$1379={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:'Value'}},$cont:impl$1378,d:['io.cayla.mvvm','binders','$m','foreach','$o','impl','$at','values']};}};
                    $$impl$1378.$prop$getValues$1379.get=function(){return values$1379};
                    
                    //AttributeDecl contexts at binders.ceylon (153:12-153:78)
                    $$impl$1378.contexts$1380_=$$$cc755.LinkedList(undefined,{Element:{t:BindingContext$view}});
                    $$impl$1378.$prop$getContexts$1380={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:{t:BindingContext$view}}},$cont:impl$1378,d:['io.cayla.mvvm','binders','$m','foreach','$o','impl','$at','contexts']};}};
                    $$impl$1378.$prop$getContexts$1380.get=function(){return contexts$1380};
                    return $$impl$1378;
                };impl$1378.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl734.List,a:{Element:'Value'}}}}}}],d:['io.cayla.mvvm','binders','$m','foreach','$o','impl']};};
                function $init$impl$1378(){
                    if (impl$1378.$$===undefined){
                        $$$cl734.initTypeProto(impl$1378,'io.cayla.mvvm::binders.foreach.impl',$$$cl734.Basic,$init$Binder());
                        (function($$impl$1378){
                            
                            //AttributeDecl values at binders.ceylon (152:12-152:58)
                            $$$cl734.defineAttr($$impl$1378,'values$1379',function(){return this.values$1379_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:'Value'}},$cont:impl$1378,d:['io.cayla.mvvm','binders','$m','foreach','$o','impl','$at','values']};});
                            
                            //AttributeDecl contexts at binders.ceylon (153:12-153:78)
                            $$$cl734.defineAttr($$impl$1378,'contexts$1380',function(){return this.contexts$1380_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:{t:BindingContext$view}}},$cont:impl$1378,d:['io.cayla.mvvm','binders','$m','foreach','$o','impl','$at','contexts']};});
                            
                            //MethodDef notify at binders.ceylon (155:12-180:12)
                            $$impl$1378.notify$1381=function notify$1381(node$1382,context$1383){
                                var $$impl$1378=this;
                                return function(list$1384){
                                    
                                    //AttributeDecl index at binders.ceylon (156:16-156:42)
                                    var index$1385=(0);
                                    function setIndex$1385(index$1386){return index$1385=index$1386;};
                                    
                                    //AttributeDecl diff at binders.ceylon (157:16-157:50)
                                    var diff$1387=Diff$diff($$impl$1378.values$1379.sequence,list$1384,{E:$$$mptypes.Value});
                                    while(true){
                                        
                                        //AttributeDecl next at binders.ceylon (159:20-159:44)
                                        var next$1388=diff$1387.next();
                                        var next$1389;
                                        if($$$cl734.isOfType((next$1389=next$1388),{t:'T', l:[$$$mptypes.Value,{t:Change$diff}]})){
                                            //Switch statement at binders.ceylon (161:24-175:24)
                                            var case$1390=next$1389.$get((1));
                                            if (case$1390===getRemoved$diff()) {
                                                $$impl$1378.values$1379.remove(index$1385);
                                                //assert at binders.ceylon (164:28-164:82)
                                                var removedContext$1391;
                                                if (!((removedContext$1391=$$impl$1378.contexts$1380.remove(index$1385))!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists removedContext = contexts.remove(index)\' at binders.ceylon (164:34-164:81)"),'164:28-164:82','binders.ceylon'); }
                                                removedContext$1391.destroy();
                                            }else if (case$1390===getAdded$diff()) {
                                                
                                                //AttributeDecl v at binders.ceylon (168:28-168:45)
                                                var v$1392=next$1389.$get((0));
                                                
                                                //AttributeDecl childContext at binders.ceylon (169:28-169:74)
                                                var childContext$1393=context$1383.child(v$1392);
                                                $$impl$1378.values$1379.add(v$1392);
                                                $$impl$1378.contexts$1380.add(childContext$1393);
                                            }else if (case$1390===getSame$diff()) {
                                                (oldindex$1394=index$1385,index$1385=oldindex$1394.successor,oldindex$1394);
                                                var oldindex$1394;
                                            }//End switch statement at binders.ceylon (161:24-175:24)
                                        }else {
                                            break;
                                        }
                                    }
                                }
                            };$$impl$1378.notify$1381.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$1378,d:['io.cayla.mvvm','binders','$m','foreach','$o','impl','$m','notify']};};
                            
                            //MethodDef init at binders.ceylon (182:12-187:12)
                            $$impl$1378.init=function init(val$1395,context$1396){
                                var $$impl$1378=this;
                                (tmp$1397=context$1396,tmp$1397.createChildren=false,tmp$1397.createChildren);
                                var tmp$1397;
                                
                                //AttributeDecl a at binders.ceylon (184:16-184:55)
                                var a$1398=$$$cl734.$JsCallable($$impl$1378.notify$1381(context$1396.node,context$1396),[{$nm:'p2',$mt:'prm',$t:{t:$$$cl734.List,a:{Element:'Value'}}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.List,a:{Element:$$$mptypes.Value}}]}});
                                val$1395.subscribe($$$cl734.$JsCallable($$impl$1378.notify$1381(context$1396.node,context$1396),[{$nm:'p2',$mt:'prm',$t:{t:$$$cl734.List,a:{Element:'Value'}}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.List,a:{Element:$$$mptypes.Value}}]}}));
                                a$1398(val$1395.getValue());
                            };$$impl$1378.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.List,a:{Element:'Value'}}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$1378,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','foreach','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (189:12-190:12)
                            $$impl$1378.update=function update(node$1399,val$1400){
                                var $$impl$1378=this;
                            };$$impl$1378.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl734.List,a:{Element:'Value'}}}},$an:function(){return[];}}],$cont:impl$1378,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','binders','$m','foreach','$o','impl','$m','update']};};
                        })(impl$1378.$$.prototype);
                    }
                    return impl$1378;
                }
                $init$impl$1378();
                var impl$1401;
                function getImpl$1401(){
                    if (impl$1401===undefined){impl$1401=$init$impl$1378()({Value:{t:Observable,a:{Value:{t:$$$cl734.List,a:{Element:$$$mptypes.Value}}}}});impl$1401.$$metamodel$$=getImpl$1401.$$metamodel$$;}
                    return impl$1401;
                }
                getImpl$1401.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$1378},d:['io.cayla.mvvm','binders','$m','foreach','$o','impl']};};
                $prop$getImpl$1401={get:getImpl$1401,$$metamodel$$:getImpl$1401.$$metamodel$$};
                return getImpl$1401();
            };$$binders.foreach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl734.List,a:{Element:'Value'}}}}}},$ps:[],$cont:binders$1294,$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders','$m','foreach']};};
        })(binders$1294.$$.prototype);
    }
    return binders$1294;
}
exports.$init$binders$1294=$init$binders$1294;
$init$binders$1294();
var binders$1402;
function getBinders(){
    if (binders$1402===undefined){binders$1402=$init$binders$1294()();binders$1402.$$metamodel$$=getBinders.$$metamodel$$;}
    return binders$1402;
}
exports.getBinders=getBinders;
getBinders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$1294},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','binders']};};
$prop$getBinders={get:getBinders,$$metamodel$$:getBinders.$$metamodel$$};
exports.$prop$getBinders=$prop$getBinders;

//InterfaceDef Subscription at Subscription.ceylon (1:0-5:0)
function Subscription($$subscription){
}
Subscription.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Subscription']};};
exports.Subscription=Subscription;
function $init$Subscription(){
    if (Subscription.$$===undefined){
        $$$cl734.initTypeProtoI(Subscription,'io.cayla.mvvm::Subscription');
        (function($$subscription){
            $$subscription.dispose={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:Subscription,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm','Subscription','$m','dispose']};}};
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
    $$$cl734.set_type_args($$subscribers,$$targs$$);
    
    //AttributeDecl subscribers at Subscribers.ceylon (4:4-4:53)
    $$subscribers.subscribers$1403_=$$$cc755.LinkedList(undefined,{Element:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}}});
    $$subscribers.$prop$getSubscribers$1403={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}}}},$cont:Subscribers,d:['io.cayla.mvvm','Subscribers','$at','subscribers']};}};
    $$subscribers.$prop$getSubscribers$1403.get=function(){return subscribers$1403};
    return $$subscribers;
}
Subscribers.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},d:['io.cayla.mvvm','Subscribers']};};
function $init$Subscribers(){
    if (Subscribers.$$===undefined){
        $$$cl734.initTypeProto(Subscribers,'io.cayla.mvvm::Subscribers',$$$cl734.Basic);
        (function($$subscribers){
            
            //AttributeDecl subscribers at Subscribers.ceylon (4:4-4:53)
            $$$cl734.defineAttr($$subscribers,'subscribers$1403',function(){return this.subscribers$1403_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}}}},$cont:Subscribers,d:['io.cayla.mvvm','Subscribers','$at','subscribers']};});
            
            //MethodDef notify at Subscribers.ceylon (6:4-17:4)
            $$subscribers.notify=function notify(source$1404){
                var $$subscribers=this;
                if((!$$subscribers.subscribers$1403.empty)){
                    getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Subscribers ",12),$$subscribers.string,$$$cl734.String(": start notifying changes",25)]).string);
                    //'for' statement at Subscribers.ceylon (9:12-12:12)
                    var it$1405 = $$subscribers.subscribers$1403.iterator();
                    var subscriber$1406;while ((subscriber$1406=it$1405.next())!==$$$cl734.getFinished()){
                        getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Subscribers ",12),$$subscribers.string,$$$cl734.String(": nofifying subscriber ",23),subscriber$1406.string]).string);
                        subscriber$1406(source$1404);
                    }
                    getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Subscribers ",12),$$subscribers.string,$$$cl734.String(": end notifying changes",23)]).string);
                }else {
                    getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Subscribers ",12),$$subscribers.string,$$$cl734.String(": no subscribers to notify",26)]).string);
                }
            };$$subscribers.notify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'source',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:Subscribers,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Subscribers','$m','notify']};};
            
            //MethodDef subscribe at Subscribers.ceylon (19:4-27:4)
            $$subscribers.subscribe=function subscribe(subscriber$1407){
                var $$subscribers=this;
                $$subscribers.subscribers$1403.add($$$cl734.$JsCallable(subscriber$1407,[],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}));
                
                //ObjectDef subscription at Subscribers.ceylon (21:8-25:8)
                function subscription$1408(){
                    var $$subscription$1408=new subscription$1408.$$;
                    Subscription($$subscription$1408);
                    return $$subscription$1408;
                };subscription$1408.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},satisfies:[{t:Subscription}],d:['io.cayla.mvvm','Subscribers','$m','subscribe','$o','subscription']};};
                function $init$subscription$1408(){
                    if (subscription$1408.$$===undefined){
                        $$$cl734.initTypeProto(subscription$1408,'io.cayla.mvvm::Subscribers.subscribe.subscription',$$$cl734.Basic,$init$Subscription());
                        (function($$subscription$1408){
                            
                            //MethodDef dispose at Subscribers.ceylon (22:12-24:12)
                            $$subscription$1408.dispose=function dispose(){
                                var $$subscription$1408=this;
                                $$subscribers.subscribers$1403.removeElement($$$cl734.$JsCallable(subscriber$1407,[],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}));
                            };$$subscription$1408.dispose.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:subscription$1408,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','Subscribers','$m','subscribe','$o','subscription','$m','dispose']};};
                        })(subscription$1408.$$.prototype);
                    }
                    return subscription$1408;
                }
                $init$subscription$1408();
                var subscription$1409;
                function getSubscription$1409(){
                    if (subscription$1409===undefined){subscription$1409=$init$subscription$1408()();subscription$1409.$$metamodel$$=getSubscription$1409.$$metamodel$$;}
                    return subscription$1409;
                }
                getSubscription$1409.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:subscription$1408},d:['io.cayla.mvvm','Subscribers','$m','subscribe','$o','subscription']};};
                $prop$getSubscription$1409={get:getSubscription$1409,$$metamodel$$:getSubscription$1409.$$metamodel$$};
                return getSubscription$1409();
            };$$subscribers.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Subscribers,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Subscribers','$m','subscribe']};};
        })(Subscribers.$$.prototype);
    }
    return Subscribers;
}
exports.$init$Subscribers=$init$Subscribers;
$init$Subscribers();

//ClassDef Property at Property.ceylon (1:0-17:0)
function Property(val$1410, $$targs$$,$$property){
    $init$Property();
    if ($$property===undefined)$$property=new Property.$$;
    $$$cl734.set_type_args($$property,$$targs$$);
    $$property.val$1410_=val$1410;
    Observable($$property.$$targs$$===undefined?$$targs$$:{Value:$$property.$$targs$$.Value},$$property);
    
    //AttributeDecl subscribers at Property.ceylon (5:4-5:44)
    $$property.subscribers$1411_=Subscribers({Value:$$property.$$targs$$.Value});
    $$property.$prop$getSubscribers$1411={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:Property,d:['io.cayla.mvvm','Property','$at','subscribers']};}};
    $$property.$prop$getSubscribers$1411.get=function(){return subscribers$1411};
    return $$property;
}
Property.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[$$$cl734.variable()];}}],$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},satisfies:[{t:Observable,a:{Value:'Value'}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Property']};};
exports.Property=Property;
function $init$Property(){
    if (Property.$$===undefined){
        $$$cl734.initTypeProto(Property,'io.cayla.mvvm::Property',$$$cl734.Basic,$init$Observable());
        (function($$property){
            
            //AttributeDecl subscribers at Property.ceylon (5:4-5:44)
            $$$cl734.defineAttr($$property,'subscribers$1411',function(){return this.subscribers$1411_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:Property,d:['io.cayla.mvvm','Property','$at','subscribers']};});
            
            //MethodDecl subscribe at Property.ceylon (6:4-6:105)
            $$property.subscribe=function (subscriber$1412){
                var $$property=this;
                return $$property.subscribers$1411.subscribe($$$cl734.$JsCallable(subscriber$1412,[],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[$$property.$$targs$$.Value]}}));
            };
            $$property.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Property,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','Property','$m','subscribe']};};
            
            //MethodDef getValue at Property.ceylon (8:4-11:4)
            $$property.getValue=function getValue(){
                var $$property=this;
                getDependant().report($$property);
                return $$property.val$1410;
            };$$property.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:Property,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','Property','$m','getValue']};};
            
            //MethodDef setValue at Property.ceylon (13:4-16:4)
            $$property.setValue=function setValue(val$1413){
                var $$property=this;
                ($$property.val$1410=val$1413);
                $$property.subscribers$1411.notify(val$1413);
            };$$property.setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:Property,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Property','$m','setValue']};};
            $$$cl734.defineAttr($$property,'val$1410',function(){return this.val$1410_;},function(Property$1414){return this.val$1410_=Property$1414;},function(){return{mod:$$METAMODEL$$,$t:'Value',$cont:Property,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm','Property','$at','val']};});
        })(Property.$$.prototype);
    }
    return Property;
}
exports.$init$Property=$init$Property;
$init$Property();

//ClassDef ObservableList at ObservableList.ceylon (2:0-105:0)
function ObservableList($$targs$$,$$observableList){
    $init$ObservableList();
    if ($$observableList===undefined)$$observableList=new ObservableList.$$;
    $$$cl734.set_type_args($$observableList,$$targs$$);
    Observable($$observableList.$$targs$$===undefined?$$targs$$:{Value:{t:$$$cl734.List,a:{Element:$$observableList.$$targs$$.Element}}},$$observableList);
    $$$cl734.add_type_arg($$observableList,'Value',{t:$$$cl734.List,a:{Element:$$observableList.$$targs$$.Element}});
    $$$cc755.MutableList($$observableList.$$targs$$===undefined?$$targs$$:{Element:$$observableList.$$targs$$.Element},$$observableList);
    
    //AttributeDecl subscribers at ObservableList.ceylon (6:4-6:52)
    $$observableList.subscribers$1415_=Subscribers({Value:{t:$$$cl734.List,a:{Element:$$observableList.$$targs$$.Element}}});
    $$observableList.$prop$getSubscribers$1415={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:{t:$$$cl734.List,a:{Element:'Element'}}}},$cont:ObservableList,d:['io.cayla.mvvm','ObservableList','$at','subscribers']};}};
    $$observableList.$prop$getSubscribers$1415.get=function(){return subscribers$1415};
    
    //AttributeDecl list at ObservableList.ceylon (7:4-7:38)
    $$observableList.list$1416_=$$$cc755.LinkedList(undefined,{Element:$$observableList.$$targs$$.Element});
    $$observableList.$prop$getList$1416={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:'Element'}},$cont:ObservableList,d:['io.cayla.mvvm','ObservableList','$at','list']};}};
    $$observableList.$prop$getList$1416.get=function(){return list$1416};
    return $$observableList;
}
ObservableList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],$tp:{Element:{'satisfies':[{t:$$$cl734.$Object}]}},satisfies:[{t:Observable,a:{Value:{t:$$$cl734.List,a:{Element:'Element'}}}},{t:$$$cc755.MutableList,a:{Element:'Element'}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','ObservableList']};};
exports.ObservableList=ObservableList;
function $init$ObservableList(){
    if (ObservableList.$$===undefined){
        $$$cl734.initTypeProto(ObservableList,'io.cayla.mvvm::ObservableList',$$$cl734.Basic,$init$Observable(),$$$cc755.MutableList);
        (function($$observableList){
            
            //AttributeDecl subscribers at ObservableList.ceylon (6:4-6:52)
            $$$cl734.defineAttr($$observableList,'subscribers$1415',function(){return this.subscribers$1415_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:{t:$$$cl734.List,a:{Element:'Element'}}}},$cont:ObservableList,d:['io.cayla.mvvm','ObservableList','$at','subscribers']};});
            
            //AttributeDecl list at ObservableList.ceylon (7:4-7:38)
            $$$cl734.defineAttr($$observableList,'list$1416',function(){return this.list$1416_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.LinkedList,a:{Element:'Element'}},$cont:ObservableList,d:['io.cayla.mvvm','ObservableList','$at','list']};});
            
            //MethodDecl subscribe at ObservableList.ceylon (9:4-9:113)
            $$observableList.subscribe=function (subscriber$1417){
                var $$observableList=this;
                return $$observableList.subscribers$1415.subscribe($$$cl734.$JsCallable(subscriber$1417,[],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.List,a:{Element:$$observableList.$$targs$$.Element}}]}}));
            };
            $$observableList.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:{t:$$$cl734.List,a:{Element:'Element'}}}]}}},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','subscribe']};};
            
            //MethodDef equals at ObservableList.ceylon (11:4-14:4)
            $$observableList.equals=function equals(that$1418){
                var $$observableList=this;
                return $$observableList.getT$all()['ceylon.language::Identifiable'].$$.prototype.equals.call(this,that$1418);
            };$$observableList.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual(),$$$cl734.$default()];},d:['io.cayla.mvvm','ObservableList','$m','equals']};};
            
            //AttributeGetterDef hash at ObservableList.ceylon (16:4-19:4)
            $$$cl734.defineAttr($$observableList,'hash',function(){
                var $$observableList=this;
                return $$$cl734.attrGetter($$observableList.getT$all()['ceylon.language::Identifiable'],'hash').call(this);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$at','hash']};});
            //AttributeGetterDef clone at ObservableList.ceylon (21:4-24:4)
            $$$cl734.defineAttr($$observableList,'clone',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$1416.clone;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$at','clone']};});
            //MethodDef get at ObservableList.ceylon (26:4-29:4)
            $$observableList.$get=function $get(index$1419){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$1416.$get(index$1419);
            };$$observableList.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','get']};};
            
            //AttributeGetterDef lastIndex at ObservableList.ceylon (31:4-34:4)
            $$$cl734.defineAttr($$observableList,'lastIndex',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$1416.lastIndex;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},{t:$$$cl734.Integer}]},$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$at','lastIndex']};});
            //AttributeGetterDef rest at ObservableList.ceylon (36:4-39:4)
            $$$cl734.defineAttr($$observableList,'rest',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$1416.rest;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$at','rest']};});
            //AttributeGetterDef reversed at ObservableList.ceylon (41:4-44:4)
            $$$cl734.defineAttr($$observableList,'reversed',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$1416.reversed;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$at','reversed']};});
            //MethodDef segment at ObservableList.ceylon (46:4-49:4)
            $$observableList.segment=function segment(from$1420,length$1421){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$1416.segment(from$1420,length$1421);
            };$$observableList.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','segment']};};
            
            //MethodDef span at ObservableList.ceylon (51:4-54:4)
            $$observableList.span=function span(from$1422,to$1423){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.span(from$1422,to$1423);
            };$$observableList.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','span']};};
            
            //MethodDef spanFrom at ObservableList.ceylon (56:4-59:4)
            $$observableList.spanFrom=function spanFrom(from$1424){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.spanFrom(from$1424);
            };$$observableList.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','spanFrom']};};
            
            //MethodDef spanTo at ObservableList.ceylon (61:4-64:4)
            $$observableList.spanTo=function spanTo(to$1425){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.spanTo(to$1425);
            };$$observableList.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','spanTo']};};
            
            //MethodDef set at ObservableList.ceylon (66:4-69:4)
            $$observableList.set=function set(index$1426,val$1427){
                var $$observableList=this;
                $$observableList.list$1416.set(index$1426,val$1427);
                $$observableList.subscribers$1415.notify($$observableList.list$1416);
            };$$observableList.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','set']};};
            
            //MethodDef insert at ObservableList.ceylon (71:4-74:4)
            $$observableList.insert=function insert(index$1428,val$1429){
                var $$observableList=this;
                $$observableList.list$1416.insert(index$1428,val$1429);
                $$observableList.subscribers$1415.notify($$observableList.list$1416);
            };$$observableList.insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','insert']};};
            
            //MethodDef addAll at ObservableList.ceylon (76:4-79:4)
            $$observableList.addAll=function addAll(values$1430){
                var $$observableList=this;
                $$observableList.list$1416.addAll(values$1430);
                $$observableList.subscribers$1415.notify($$observableList.list$1416);
            };$$observableList.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl734.Iterable,a:{Element:'Element',Absent:{t:$$$cl734.Null}}},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','addAll']};};
            
            //MethodDef removeElement at ObservableList.ceylon (81:4-84:4)
            $$observableList.removeElement=function removeElement(val$1431){
                var $$observableList=this;
                $$observableList.list$1416.removeElement(val$1431);
                $$observableList.subscribers$1415.notify($$observableList.list$1416);
            };$$observableList.removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','removeElement']};};
            
            //MethodDef clear at ObservableList.ceylon (86:4-89:4)
            $$observableList.clear=function clear(){
                var $$observableList=this;
                $$observableList.list$1416.clear();
                $$observableList.subscribers$1415.notify($$observableList.list$1416);
            };$$observableList.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','clear']};};
            
            //MethodDef add at ObservableList.ceylon (91:4-94:4)
            $$observableList.add=function add(element$1432){
                var $$observableList=this;
                $$observableList.list$1416.add(element$1432);
                $$observableList.subscribers$1415.notify($$observableList.list$1416);
            };$$observableList.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','add']};};
            
            //MethodDef remove at ObservableList.ceylon (96:4-100:4)
            $$observableList.remove=function remove(index$1433){
                var $$observableList=this;
                
                //AttributeDecl ret at ObservableList.ceylon (97:8-97:38)
                var ret$1434=$$observableList.list$1416.remove(index$1433);
                $$observableList.subscribers$1415.notify($$observableList.list$1416);
                return ret$1434;
            };$$observableList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','remove']};};
            
            //MethodDef getValue at ObservableList.ceylon (102:4-104:4)
            $$observableList.getValue=function getValue(){
                var $$observableList=this;
                return $$observableList;
            };$$observableList.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:'Element'}},$ps:[],$cont:ObservableList,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ObservableList','$m','getValue']};};
        })(ObservableList.$$.prototype);
    }
    return ObservableList;
}
exports.$init$ObservableList=$init$ObservableList;
$init$ObservableList();

//InterfaceDef Observable at Observable.ceylon (2:0-17:0)
function Observable($$targs$$,$$observable){
    $$$cl734.set_type_args($$observable,$$targs$$);
}
Observable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'out','satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Observable']};};
exports.Observable=Observable;
function $init$Observable(){
    if (Observable.$$===undefined){
        $$$cl734.initTypeProtoI(Observable,'io.cayla.mvvm::Observable');
        (function($$observable){
            $$observable.getValue={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:Observable,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm','Observable','$m','getValue']};}};$$observable.subscribe={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Observable,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm','Observable','$m','subscribe']};}};
            //MethodDef bind at Observable.ceylon (8:4-16:4)
            $$observable.$bind=function $bind(handler$1435){
                var $$observable=this;
                
                //ObjectDef impl at Observable.ceylon (9:8-14:8)
                function impl$1436(){
                    var $$impl$1436=new impl$1436.$$;
                    Binding$view($$impl$1436);
                    return $$impl$1436;
                };impl$1436.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Binding$view},d:['io.cayla.mvvm','Observable','$m','bind','$o','impl']};};
                function $init$impl$1436(){
                    if (impl$1436.$$===undefined){
                        $$$cl734.initTypeProto(impl$1436,'io.cayla.mvvm::Observable.bind.impl',$init$Binding$view());
                        (function($$impl$1436){
                            
                            //MethodDef init at Observable.ceylon (10:12-13:12)
                            $$impl$1436.init=function init(context$1437){
                                var $$impl$1436=this;
                                
                                //AttributeDecl v at Observable.ceylon (11:16-11:36)
                                var v$1438=$$observable.getValue();
                                handler$1435.init(v$1438,context$1437);
                            };$$impl$1436.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$1436,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','Observable','$m','bind','$o','impl','$m','init']};};
                        })(impl$1436.$$.prototype);
                    }
                    return impl$1436;
                }
                $init$impl$1436();
                var impl$1439;
                function getImpl$1439(){
                    if (impl$1439===undefined){impl$1439=$init$impl$1436()();impl$1439.$$metamodel$$=getImpl$1439.$$metamodel$$;}
                    return impl$1439;
                }
                getImpl$1439.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$1436},d:['io.cayla.mvvm','Observable','$m','bind','$o','impl']};};
                $prop$getImpl$1439={get:getImpl$1439,$$metamodel$$:getImpl$1439.$$metamodel$$};
                return getImpl$1439();
            };$$observable.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binding$view},$ps:[{$nm:'handler',$mt:'prm',$t:{t:Binder,a:{Value:'Value'}},$an:function(){return[];}}],$cont:Observable,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Observable','$m','bind']};};
        })(Observable.$$.prototype);
    }
    return Observable;
}
exports.$init$Observable=$init$Observable;
$init$Observable();

//ClassDef CyclicDependencyException at CyclicDependencyException.ceylon (1:0-2:0)
function CyclicDependencyException($$cyclicDependencyException){
    $init$CyclicDependencyException();
    if ($$cyclicDependencyException===undefined)$$cyclicDependencyException=new CyclicDependencyException.$$;
    $$$cl734.Exception(undefined,undefined,$$cyclicDependencyException);
    return $$cyclicDependencyException;
}
CyclicDependencyException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Exception},$ps:[],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','CyclicDependencyException']};};
exports.CyclicDependencyException=CyclicDependencyException;
function $init$CyclicDependencyException(){
    if (CyclicDependencyException.$$===undefined){
        $$$cl734.initTypeProto(CyclicDependencyException,'io.cayla.mvvm::CyclicDependencyException',$$$cl734.Exception);
    }
    return CyclicDependencyException;
}
exports.$init$CyclicDependencyException=$init$CyclicDependencyException;
$init$CyclicDependencyException();

//MethodDecl computed at ComputedObservable.ceylon (2:0-4:38)
var computed=function (compute$1440,$$$mptypes){
    return ComputedObservable($$$cl734.$JsCallable(compute$1440,[],{Return:$$$mptypes.Value,Arguments:{t:$$$cl734.Empty}}),{Value:$$$mptypes.Value});
};
computed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ComputedObservable,a:{Value:'Value'}},$ps:[{$nm:'compute',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:'Value',Arguments:{t:$$$cl734.Empty}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','computed']};};
exports.computed=computed;

//ClassDef ComputedObservable at ComputedObservable.ceylon (6:0-75:0)
function ComputedObservable(compute$1441, $$targs$$,$$computedObservable){
    $init$ComputedObservable();
    if ($$computedObservable===undefined)$$computedObservable=new ComputedObservable.$$;
    $$$cl734.set_type_args($$computedObservable,$$targs$$);
    $$computedObservable.compute$1441_=compute$1441;
    Observable($$computedObservable.$$targs$$===undefined?$$targs$$:{Value:$$computedObservable.$$targs$$.Value},$$computedObservable);
    
    //AttributeDecl subscribers at ComputedObservable.ceylon (8:4-8:44)
    $$computedObservable.subscribers$1442_=Subscribers({Value:$$computedObservable.$$targs$$.Value});
    $$computedObservable.$prop$getSubscribers$1442={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','subscribers']};}};
    $$computedObservable.$prop$getSubscribers$1442.get=function(){return subscribers$1442};
    
    //AttributeDecl evaluation at ComputedObservable.ceylon (9:4-9:37)
    $$computedObservable.evaluation$1443_=null;
    $$computedObservable.$prop$getEvaluation$1443={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},'Value']},$cont:ComputedObservable,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm','ComputedObservable','$at','evaluation']};}};
    $$computedObservable.$prop$getEvaluation$1443.get=function(){return evaluation$1443};
    
    //AttributeDecl evaluating at ComputedObservable.ceylon (10:4-10:39)
    $$computedObservable.evaluating$1444_=false;
    $$computedObservable.$prop$getEvaluating$1444={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$cont:ComputedObservable,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm','ComputedObservable','$at','evaluating']};}};
    $$computedObservable.$prop$getEvaluating$1444.get=function(){return evaluating$1444};
    
    //AttributeDecl dependencies at ComputedObservable.ceylon (11:4-11:68)
    $$computedObservable.dependencies$1445_=$$$cc755.HashMap(undefined,{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}});
    $$computedObservable.$prop$getDependencies$1445={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.HashMap,a:{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','dependencies']};}};
    $$computedObservable.$prop$getDependencies$1445.get=function(){return dependencies$1445};
    return $$computedObservable;
}
ComputedObservable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'compute',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:'Value',Arguments:{t:$$$cl734.Empty}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl734.$Object}]}},satisfies:[{t:Observable,a:{Value:'Value'}}],$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','ComputedObservable']};};
exports.ComputedObservable=ComputedObservable;
function $init$ComputedObservable(){
    if (ComputedObservable.$$===undefined){
        $$$cl734.initTypeProto(ComputedObservable,'io.cayla.mvvm::ComputedObservable',$$$cl734.Basic,$init$Observable());
        (function($$computedObservable){
            
            //AttributeDecl subscribers at ComputedObservable.ceylon (8:4-8:44)
            $$$cl734.defineAttr($$computedObservable,'subscribers$1442',function(){return this.subscribers$1442_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','subscribers']};});
            
            //AttributeDecl evaluation at ComputedObservable.ceylon (9:4-9:37)
            $$$cl734.defineAttr($$computedObservable,'evaluation$1443',function(){return this.evaluation$1443_;},function(evaluation$1446){return this.evaluation$1443_=evaluation$1446;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},'Value']},$cont:ComputedObservable,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm','ComputedObservable','$at','evaluation']};});
            
            //AttributeDecl evaluating at ComputedObservable.ceylon (10:4-10:39)
            $$$cl734.defineAttr($$computedObservable,'evaluating$1444',function(){return this.evaluating$1444_;},function(evaluating$1447){return this.evaluating$1444_=evaluating$1447;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$cont:ComputedObservable,$an:function(){return[$$$cl734.variable()];},d:['io.cayla.mvvm','ComputedObservable','$at','evaluating']};});
            
            //AttributeDecl dependencies at ComputedObservable.ceylon (11:4-11:68)
            $$$cl734.defineAttr($$computedObservable,'dependencies$1445',function(){return this.dependencies$1445_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc755.HashMap,a:{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','dependencies']};});
            
            //MethodDecl subscribe at ComputedObservable.ceylon (12:4-12:105)
            $$computedObservable.subscribe=function (subscriber$1448){
                var $$computedObservable=this;
                return $$computedObservable.subscribers$1442.subscribe($$$cl734.$JsCallable(subscriber$1448,[],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[$$computedObservable.$$targs$$.Value]}}));
            };
            $$computedObservable.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl734.Callable,a:{Return:{t:$$$cl734.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:ComputedObservable,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ComputedObservable','$m','subscribe']};};
            
            //MethodDef evaluate at ComputedObservable.ceylon (14:4-58:4)
            $$computedObservable.evaluate$1449=function evaluate$1449(){
                var $$computedObservable=this;
                if($$computedObservable.evaluating$1444){
                    return null;
                }else {
                    getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Computed ",9),$$computedObservable.string,$$$cl734.String(":  starting evaluation",22)]).string);
                    $$computedObservable.evaluating$1444=true;
                    
                    //AttributeDecl e at ComputedObservable.ceylon (20:12-20:19)
                    var e$1450;
                    
                    //AttributeDecl observed at ComputedObservable.ceylon (21:12-21:44)
                    var observed$1451;
                    try{
                        getDependant().begin();
                        e$1450=$$computedObservable.compute$1441();
                    }finally{
                        observed$1451=getDependant().end();
                        $$computedObservable.evaluating$1444=false;
                        getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Computed ",9),$$computedObservable.string,$$$cl734.String(": stopping evaluation",21)]).string);
                    }
                    //'for' statement at ComputedObservable.ceylon (31:12-37:12)
                    var it$1452 = $$$cc755.HashMap($$computedObservable.dependencies$1445,{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl734.$Object}}}}).iterator();
                    var item$1453;while ((item$1453=it$1452.next())!==$$$cl734.getFinished()){
                        var dependency$1454=item$1453.key;
                        var subscription$1455=item$1453.item;
                        if((!observed$1451.contains(dependency$1454))){
                            getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Computed ",9),$$computedObservable.string,$$$cl734.String(": disposing subscription ",25),subscription$1455.string]).string);
                            $$computedObservable.dependencies$1445.remove(dependency$1454);
                            subscription$1455.dispose();
                        }
                    }
                    //'for' statement at ComputedObservable.ceylon (38:12-55:12)
                    var it$1456 = observed$1451.iterator();
                    var o$1457;while ((o$1457=it$1456.next())!==$$$cl734.getFinished()){
                        var dependency$1458;
                        if((dependency$1458=$$computedObservable.dependencies$1445.$get(o$1457))!==null){}else {
                            
                            //MethodDef update at ComputedObservable.ceylon (42:20-50:20)
                            function update$1459(o$1460){
                                
                                //AttributeDecl e at ComputedObservable.ceylon (43:24-43:45)
                                var e$1461=$$computedObservable.evaluate$1449();
                                var e$1462;
                                if((e$1462=e$1461)!==null){
                                    $$computedObservable.evaluation$1443=e$1462;
                                    $$computedObservable.subscribers$1442.notify(e$1462);
                                }else {}
                            };update$1459.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[];}}],d:['io.cayla.mvvm','ComputedObservable','$m','evaluate','$m','update']};};
                            
                            //AttributeDecl subscription at ComputedObservable.ceylon (51:20-51:60)
                            var subscription$1463=o$1457.subscribe($$$cl734.$JsCallable(update$1459,[{$nm:'o',$mt:'prm',$t:{t:$$$cl734.$Object},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.$Object}]}}));
                            getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Computed ",9),$$computedObservable.string,$$$cl734.String(": subscribed ",13),subscription$1463.string,$$$cl734.String(" to ",4),o$1457.string]).string);
                            $$computedObservable.dependencies$1445.put(o$1457,subscription$1463);
                        }
                    }
                    return e$1450;
                }
            };$$computedObservable.evaluate$1449.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl734.Null},'Value']},$ps:[],$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$m','evaluate']};};
            
            //MethodDef getValue at ComputedObservable.ceylon (60:4-74:4)
            $$computedObservable.getValue=function getValue(){
                var $$computedObservable=this;
                getDependant().report($$computedObservable);
                var e$1464;
                if((e$1464=$$computedObservable.evaluation$1443)!==null){
                    getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("Computed ",9),$$computedObservable.string,$$$cl734.String(": returning cached evaluation ",30),e$1464.string]).string);
                    return e$1464;
                }else {
                    
                    //AttributeDecl e at ComputedObservable.ceylon (66:12-66:33)
                    var e$1465=$$computedObservable.evaluate$1449();
                    var e$1466;
                    if((e$1466=e$1465)!==null){
                        $$computedObservable.evaluation$1443=e$1466;
                        return e$1466;
                    }else {
                        throw $$$cl734.wrapexc(CyclicDependencyException(),'71:16-71:49','io/cayla/mvvm/ComputedObservable.ceylon');
                    }
                }
            };$$computedObservable.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:ComputedObservable,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.mvvm','ComputedObservable','$m','getValue']};};
            $$$cl734.defineAttr($$computedObservable,'compute$1441',function(){return this.compute$1441_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Callable,a:{Return:'Value',Arguments:{t:$$$cl734.Empty}}},$cont:ComputedObservable,d:['io.cayla.mvvm','ComputedObservable','$at','compute']};});
        })(ComputedObservable.$$.prototype);
    }
    return ComputedObservable;
}
exports.$init$ComputedObservable=$init$ComputedObservable;
$init$ComputedObservable();

//InterfaceDef Binder at Binder.ceylon (3:0-9:0)
function Binder($$targs$$,$$binder){
    $$$cl734.set_type_args($$binder,$$targs$$);
}
Binder.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'in'}},$an:function(){return[$$$cl734.shared()];},d:['io.cayla.mvvm','Binder']};};
exports.Binder=Binder;
function $init$Binder(){
    if (Binder.$$===undefined){
        $$$cl734.initTypeProtoI(Binder,'io.cayla.mvvm::Binder');
        (function($$binder){
            $$binder.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:Binder,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm','Binder','$m','init']};}};$$binder.update={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:Binder,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.mvvm','Binder','$m','update']};}};
        })(Binder.$$.prototype);
    }
    return Binder;
}
exports.$init$Binder=$init$Binder;
$init$Binder();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

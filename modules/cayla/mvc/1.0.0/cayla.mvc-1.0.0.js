(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"cayla.mvc.dom":{"$pkg-shared":"1","DomNode":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"DomNode","$ps":[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"peer","$mt":"prm"}],"$at":{"visible":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"visible","var":"1","$mt":"gttr"},"peer":{"$t":{"$nm":"unknown","$pk":"cayla.mvc"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"peer","var":"1","$mt":"attr"}},"$m":{"dispatchEvent":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"dispatchEvent","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"type","$mt":"prm"}]],"$mt":"mthd"},"removeClass":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addText":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"addText","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"cdata","$mt":"prm"}]],"$mt":"mthd"},"hasClass":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"hasClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"isChecked":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"isChecked","$mt":"mthd"},"click":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"click","$mt":"mthd"},"insertBefore":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"insertBefore","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"DomNode","$pk":"cayla.mvc.dom"}]},"$nm":"nextSibling","$mt":"prm"}]],"$mt":"mthd"},"getNodeValue":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"getNodeValue","$mt":"mthd"},"setNodeValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setNodeValue","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"getChildren":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"cayla.mvc.dom"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"getChildren","$mt":"mthd"},"getValue":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"getValue","$mt":"mthd"},"setAttribute":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"getAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"matchesSelector":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"matchesSelector","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"setValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setValue","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"setChecked":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setChecked","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"checked","$mt":"prm"}]],"$mt":"mthd"},"setId":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setId","$ps":[[{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"}]],"$mt":"mthd"},"detach":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"detach","$mt":"mthd"},"addElement":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"addElement","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"removeAttribute":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeAttribute","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addChild":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"addChild","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"},"addClass":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"addClass","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"addEventHandler":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"addEventHandler","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"type","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"DomEvent","$pk":"cayla.mvc.dom"},{"$nm":"Nothing","$pk":"cayla.mvc.dom"}],"$mt":"tpm"},{"$nm":"DomEvent","$mt":"tpm","$pk":"cayla.mvc.dom"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"handler","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"selector","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"eventPeer","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"cls"},"DomContext":{"$an":{"shared":[]},"$nm":"DomContext","$mt":"ifc"},"querySelectorAll":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"cayla.mvc.dom"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"querySelectorAll","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"_matchesSelector":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_matchesSelector","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"nodePeer","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"selector","$mt":"prm"}]],"$mt":"mthd"},"text":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"text","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"cdata","$mt":"prm"}]],"$mt":"mthd"},"byId":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"byId","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"id","$mt":"prm"}]],"$mt":"mthd"},"wrap":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"wrap","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"nodePeer","$mt":"prm"}]],"$mt":"mthd"},"element":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"element","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"}]],"$mt":"mthd"},"DomEvent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"DomEvent","$ps":[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"target","$mt":"prm"},{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"peer","$mt":"prm"}],"$at":{"keyCode":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"keyCode","$mt":"gttr"},"peer":{"$t":{"$nm":"unknown","$pk":"cayla.mvc"},"$nm":"peer","$mt":"attr"},"target":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"target","$mt":"attr"}},"$m":{"preventDefault":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"preventDefault","$mt":"mthd"}},"$mt":"cls"}},"$mod-version":"1.0.0","$mod-deps":["ceylon.collection\/1.0.0","ceylon.test\/1.0.0","ceylon.language\/1.0.0"],"cayla.mvc.todo":{"all":{"super":{"$nm":"Mode","$pk":"cayla.mvc.todo"},"$an":{"shared":[]},"$nm":"all","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"cayla.mvc.todo"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"$pkg-shared":"1","Todo":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"Todo","$ps":[{"$def":"1","$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_title","$mt":"prm"}],"$at":{"_title":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_title","$mt":"attr"},"completed":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"completed","$mt":"attr"},"title":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"title","$mt":"attr"}},"$mt":"cls"},"Mode":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"Mode","of":[{"$nm":"active","$pk":"cayla.mvc.todo"},{"$nm":"all","$pk":"cayla.mvc.todo"},{"$nm":"completed","$pk":"cayla.mvc.todo"}],"$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"cayla.mvc.todo"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"active":{"super":{"$nm":"Mode","$pk":"cayla.mvc.todo"},"$an":{"shared":[]},"$nm":"active","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"cayla.mvc.todo"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"completed":{"super":{"$nm":"Mode","$pk":"cayla.mvc.todo"},"$an":{"shared":[]},"$nm":"completed","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"cayla.mvc.todo"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"TodoList":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"TodoList","$at":{"mode":{"$t":{"$tp":[{"$nm":"Mode","$mt":"tpm","$pk":"cayla.mvc.todo"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"mode","$mt":"attr"},"hasCompleted":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"hasCompleted","$mt":"attr"},"filtered":{"$t":{"$tp":[{"$tp":[{"$nm":"Todo","$mt":"tpm","$pk":"cayla.mvc.todo"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"filtered","$mt":"attr"},"hasTodos":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"hasTodos","$mt":"attr"},"completedMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"completedMode","$mt":"attr"},"activeMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"activeMode","$mt":"attr"},"allMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"allMode","$mt":"attr"},"todos":{"$t":{"$tp":[{"$nm":"Todo","$mt":"tpm","$pk":"cayla.mvc.todo"}],"$nm":"ObservableList","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"todos","$mt":"attr"},"title":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"title","$mt":"attr"},"completedCount":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"completedCount","$mt":"attr"},"items":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"items","$mt":"attr"},"remainingCount":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"remainingCount","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"init","$mt":"mthd"},"showAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showAll","$mt":"mthd"},"showActive":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showActive","$mt":"mthd"},"create":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"create","$mt":"mthd"},"showCompleted":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showCompleted","$mt":"mthd"},"removeCompleted":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeCompleted","$mt":"mthd"},"remove":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"remove","$ps":[[{"$t":{"$nm":"Todo","$pk":"cayla.mvc.todo"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}},"cayla.mvc.expression":{"$pkg-shared":"1","method":{"$tp":[{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Arguments","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"cayla.mvc.expression"},"$an":{"shared":[]},"$nm":"method","$ps":[[{"$t":{"$tp":[{"$nm":"Source","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"method","$mt":"prm"}]],"$mt":"mthd"},"Expression":{"$tp":[{"$nm":"Type","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$an":{"shared":[]},"$nm":"Expression","$m":{"traverse":{"$t":{"$nm":"Type"},"$an":{"formal":[],"shared":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"},"method":{"$tp":[{"$nm":"Arguments","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"MethodExpression","$pk":"cayla.mvc.expression"},"$an":{"shared":[]},"$nm":"method","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"method","$mt":"prm"}]],"$mt":"mthd"},"attribute":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"AttributeExpression","$pk":"cayla.mvc.expression"},"$an":{"shared":[]},"$nm":"attribute","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Nothing","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language.meta.model"}],"$nm":"Attribute","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"attribute","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Value"},"$nm":"f","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"bindTo":{"$t":{"$nm":"Binding","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"bindTo","$ps":[[{"$t":{"$tp":[{"$nm":"Type","$mt":"tpm"}],"$nm":"Binder","$pk":"cayla.mvc"},"$nm":"handler","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Binding","$pk":"cayla.mvc.view"},"$nm":"impl","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}}},"$mt":"ifc"},"ClassExpression":{"$tp":[{"$nm":"Type","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ClassExpression","satisfies":[{"$tp":[{"$nm":"Type","$mt":"tpm"},{"$nm":"Type","$mt":"tpm"}],"$nm":"Expression","$pk":"cayla.mvc.expression"}],"$m":{"traverse":{"$t":{"$nm":"Type"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Type"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"attribute":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"cayla.mvc.expression"},"$an":{"shared":[]},"$nm":"attribute","$ps":[[{"$t":{"$tp":[{"$nm":"Source","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Nothing","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language.meta.model"}],"$nm":"Attribute","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"attr","$mt":"prm"}]],"$mt":"mthd"},"MethodExpression":{"$tp":[{"$nm":"Container","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Arguments","variance":"in","satisfies":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"MethodExpression","satisfies":[{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"cayla.mvc.expression"}],"$ps":[{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"m","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"cayla.mvc.expression"},"$nm":"parent","$mt":"prm"}],"$at":{"parent":{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"cayla.mvc.expression"},"$nm":"parent","$mt":"attr"},"m":{"$t":{"$tp":[{"$nm":"Container","$mt":"tpm"},{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Method","$md":"ceylon.language","$pk":"ceylon.language.meta.model"},"$nm":"m","$mt":"attr"}},"$m":{"traverse":{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Arguments","$mt":"tpm"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"AttributeExpression":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]},{"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"AttributeExpression","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Source","$mt":"tpm"}],"$nm":"Expression","$pk":"cayla.mvc.expression"}],"$ps":[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"cayla.mvc.expression"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$mt":"prm"}],"$at":{"f":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"cayla.mvc.expression"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$mt":"attr"}},"$m":{"traverse":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"traverse","$ps":[[{"$t":{"$nm":"Source"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}},"$mod-bin":"6.0","cayla.mvc.lcs":{"$pkg-shared":"1","same":{"super":{"$nm":"Change","$pk":"cayla.mvc.lcs"},"$an":{"shared":[],"doc":["Same change"]},"$nm":"same","$mt":"obj"},"removed":{"super":{"$nm":"Change","$pk":"cayla.mvc.lcs"},"$an":{"shared":[],"doc":["Removed change"]},"$nm":"removed","$mt":"obj"},"Diff":{"$tp":[{"$nm":"E","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Diff two series of elements\n"]},"$nm":"Diff","satisfies":[{"$tp":[{"$tp":[{"comp":"u","$ts":[{"$nm":"E"},{"comp":"u","$ts":[{"$nm":"Change","$pk":"cayla.mvc.lcs"},{"$nm":"Nothing","$pk":"cayla.mvc.lcs"}]}],"$mt":"tpm"},{"$nm":"E","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Change","$pk":"cayla.mvc.lcs"},{"$nm":"Nothing","$pk":"cayla.mvc.lcs"}],"$mt":"tpm"},{"$nm":"Change","$mt":"tpm","$pk":"cayla.mvc.lcs"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterator","$md":"ceylon.language","$pk":"ceylon.language"}],"$ps":[{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements1","$mt":"prm"},{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements2","$mt":"prm"}],"$at":{"opt":{"$t":{"$nm":"Matrix","$pk":"cayla.mvc.lcs"},"$nm":"opt","$mt":"attr"},"i":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"variable":[]},"$nm":"i","var":"1","$mt":"attr"},"j":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"variable":[]},"$nm":"j","var":"1","$mt":"attr"},"elements2":{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements2","$mt":"attr"},"elements1":{"$t":{"$tp":[{"$nm":"E","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"elements1","$mt":"attr"},"m":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"m","$mt":"attr"},"n":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"n","$mt":"attr"}},"$m":{"next":{"$t":{"comp":"u","$ts":[{"$tp":[{"comp":"u","$ts":[{"$nm":"E"},{"comp":"u","$ts":[{"$nm":"Change","$pk":"cayla.mvc.lcs"},{"$nm":"Nothing","$pk":"cayla.mvc.lcs"}]}],"$mt":"tpm"},{"$nm":"E","$mt":"tpm"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Change","$pk":"cayla.mvc.lcs"},{"$nm":"Nothing","$pk":"cayla.mvc.lcs"}],"$mt":"tpm"},{"$nm":"Change","$mt":"tpm","$pk":"cayla.mvc.lcs"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Finished","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[],"actual":[]},"$nm":"next","$mt":"mthd"}},"$mt":"cls","$c":{"Matrix":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Matrix","$ps":[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"width","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"height","$mt":"prm"}],"$at":{"string":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"string","$mt":"gttr"},"width":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"width","$mt":"attr"},"state":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Array","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"state","$mt":"attr"},"height":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"height","$mt":"attr"}},"$m":{"set":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"set","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"x","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"y","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"e","$mt":"prm"}]],"$mt":"mthd"},"get":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"get","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"x","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"y","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}}},"added":{"super":{"$nm":"Change","$pk":"cayla.mvc.lcs"},"$an":{"shared":[],"doc":["Added change"]},"$nm":"added","$mt":"obj"},"Change":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["A change"],"abstract":[]},"$nm":"Change","of":[{"$nm":"removed","$pk":"cayla.mvc.lcs"},{"$nm":"same","$pk":"cayla.mvc.lcs"},{"$nm":"added","$pk":"cayla.mvc.lcs"}],"$mt":"cls","abstract":"1"}},"cayla.mvc.view":{"Binding":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"Binding","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"A":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"A","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"href","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"href":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"href","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"InputText":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"InputText","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"attr"}},"$mt":"cls"},"Element":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"Element","$ps":[{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"id","$mt":"prm"},{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"classNames","$mt":"prm"},{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"bindings","$mt":"prm"},{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"default":[]},"$nm":"attrs","$mt":"attr"}},"$m":{"bind":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[]},"$nm":"bind","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"o","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"Label":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Label","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"H1":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"H1","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"BindingContext":{"$an":{"shared":[]},"$nm":"BindingContext","$at":{"node":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"formal":[],"shared":[]},"$nm":"node","$mt":"attr"},"createChildren":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[],"variable":[]},"$nm":"createChildren","var":"1","$mt":"attr"},"element":{"$t":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"formal":[],"shared":[]},"$nm":"element","$mt":"attr"}},"$m":{"resolve":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"formal":[],"shared":[]},"$nm":"resolve","$mt":"mthd"},"destroy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"destroy","$mt":"mthd"},"child":{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$an":{"formal":[],"shared":[]},"$nm":"child","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"child","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"Section":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Section","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Span":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Span","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Strong":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Strong","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Bindings":{"$an":{"shared":[]},"$nm":"Bindings","$alias":{"comp":"u","$ts":[{"$nm":"Binding","$pk":"cayla.mvc.view"},{"$tp":[{"$nm":"Binding","$mt":"tpm","$pk":"cayla.mvc.view"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"}]},"$mt":"als"},"Div":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Div","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"P":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"P","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"ModelContext":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"ModelContext","$ps":[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"o","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ModelContext","$pk":"cayla.mvc.view"}]},"$an":{"shared":[]},"$nm":"parent","$mt":"prm"}],"$at":{"parent":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ModelContext","$pk":"cayla.mvc.view"}]},"$an":{"shared":[]},"$nm":"parent","$mt":"attr"},"nodes":{"$t":{"$tp":[{"$nm":"DomNode","$mt":"tpm","$pk":"cayla.mvc.dom"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$an":{"shared":[]},"$nm":"nodes","$mt":"attr"},"o":{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"o","$mt":"attr"}},"$m":{"resolve":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"shared":[]},"$nm":"resolve","$mt":"mthd"},"destroy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"destroy","$mt":"mthd"},"register":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"register","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"$pkg-shared":"1","Input":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Input","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Header":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Header","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Button":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Button","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"CheckBox":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"CheckBox","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"name":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"name","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"},"attrs":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Entry","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"attrs","$mt":"gttr"}},"$mt":"cls"},"Ul":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Ul","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Footer":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Footer","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"Li":{"super":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"Li","$ps":[{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"prm"},{"$def":"1","$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"prm"},{"$def":"1","$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"prm"}],"$at":{"bindings":{"$t":{"$nm":"Bindings","$pk":"cayla.mvc.view"},"$nm":"bindings","$mt":"attr"},"classNames":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Sequential","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"classNames","$mt":"attr"},"id":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"id","$mt":"attr"},"content":{"$t":{"$tp":[{"comp":"u","$ts":[{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element","$pk":"cayla.mvc.view"}],"$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"content","$mt":"attr"}},"$mt":"cls"},"ElementBindingContext":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"ElementBindingContext","satisfies":[{"$nm":"BindingContext","$pk":"cayla.mvc.view"}],"$ps":[{"$t":{"$nm":"ModelContext","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"model","$mt":"prm"},{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[],"actual":[]},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[],"actual":[]},"$nm":"element","$mt":"prm"},{"$def":"1","$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ElementBindingContext","$pk":"cayla.mvc.view"}]},"$nm":"parent","$mt":"prm"}],"$at":{"node":{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$an":{"shared":[],"actual":[]},"$nm":"node","$mt":"attr"},"parent":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"ElementBindingContext","$pk":"cayla.mvc.view"}]},"$nm":"parent","$mt":"attr"},"model":{"$t":{"$nm":"ModelContext","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"model","$mt":"attr"},"createChildren":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"createChildren","var":"1","$mt":"attr"},"element":{"$t":{"$nm":"Element","$pk":"cayla.mvc.view"},"$an":{"shared":[],"actual":[]},"$nm":"element","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"init","$mt":"mthd"},"resolve":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"shared":[],"actual":[]},"$nm":"resolve","$mt":"mthd"},"initChildren":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"initChildren","$mt":"mthd"},"destroy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"destroy","$mt":"mthd"},"child":{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$an":{"shared":[],"actual":[]},"$nm":"child","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"child","$mt":"prm"}]],"$mt":"mthd"},"register":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"register","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}},"cayla.mvc.test":{"testResolveListenerInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolveListenerInHierachy","$mt":"mthd","$c":{"Parent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Parent","$ps":[{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"child","$mt":"prm"},{"$def":"1","$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","$mt":"prm"}],"$at":{"count":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","var":"1","$mt":"attr"},"child":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"child","$mt":"attr"}},"$m":{"foo":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"foo","$ps":[[{"$t":{"$nm":"Child","$pk":"cayla.mvc.test"},"$nm":"c","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"Child":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Child","$mt":"cls"}}},"Group":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Group","$ps":[{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"ObservableList","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"users","$mt":"prm"}],"$at":{"users":{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"ObservableList","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"users","$mt":"attr"}},"$mt":"cls"},"carNameBinding":{"$t":{"$nm":"Binding","$pk":"cayla.mvc.view"},"$nm":"carNameBinding","$mt":"attr"},"firstNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"cayla.mvc"},{"$nm":"Person","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"AttributeExpression","$pk":"cayla.mvc.expression"},"$nm":"firstNameExpr","$mt":"attr"},"withFragment":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"withFragment","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"callback","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"fragment","$mt":"prm"}]],"$pt":"f","$mt":"prm"}]],"$m":{"callback":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"callback","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"fragment","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testMatchesSelector":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testMatchesSelector","$mt":"mthd"},"testInsertBefore":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testInsertBefore","$mt":"mthd"},"Meal":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"Meal","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"price","$mt":"prm"}],"$at":{"price":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"price","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"ViewModel":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ViewModel","$ps":[{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"prm"}],"$at":{"seats":{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"attr"}},"$mt":"cls"},"testPropertyChange":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testPropertyChange","$m":{"listener":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"listener","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"prop","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testQuerySelectorAllWrap":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testQuerySelectorAllWrap","$mt":"mthd"},"carNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"cayla.mvc"},{"$nm":"Car","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"AttributeExpression","$pk":"cayla.mvc.expression"},"$nm":"carNameExpr","$mt":"attr"},"carOwnerExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"Property","$mt":"tpm","$pk":"cayla.mvc"},{"$nm":"Car","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"AttributeExpression","$pk":"cayla.mvc.expression"},"$nm":"carOwnerExpr","$mt":"attr"},"testObserveComputedObservable":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testObserveComputedObservable","$mt":"mthd"},"testComputedObservableList":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableList","$mt":"mthd"},"ReservationsViewModel":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ReservationsViewModel","$ps":[{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"prm"}],"$at":{"seats":{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"attr"}},"$mt":"cls"},"firstNameBinding":{"$t":{"$nm":"Binding","$pk":"cayla.mvc.view"},"$nm":"firstNameBinding","$mt":"attr"},"AnHandler":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"AnHandler","$at":{"counter":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"counter","var":"1","$mt":"attr"}},"$m":{"m":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"m","$mt":"mthd"}},"$mt":"cls"},"testComputedObservable":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservable","$mt":"mthd"},"testWith":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testWith","$mt":"mthd"},"testForEach":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testForEach","$mt":"mthd"},"testStringPropertyBinding":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testStringPropertyBinding","$mt":"mthd"},"SeatReservation":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"SeatReservation","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"Meal","$pk":"cayla.mvc.test"},"$an":{"shared":[]},"$nm":"initialMeal","$mt":"prm"}],"$at":{"initialMeal":{"$t":{"$nm":"Meal","$pk":"cayla.mvc.test"},"$an":{"shared":[]},"$nm":"initialMeal","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"testResolvePropertyInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolvePropertyInHierachy","$mt":"mthd"},"testQuerySelectorAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testQuerySelectorAll","$mt":"mthd"},"testExpression":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testExpression","$mt":"mthd"},"testEventDelegation":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testEventDelegation","$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"cayla.mvc.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testComputedObservableTriangle":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableTriangle","$mt":"mthd"},"testComputedObservableCycle":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableCycle","$mt":"mthd"},"testResolveHandlerInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolveHandlerInHierachy","$mt":"mthd","$c":{"Parent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Parent","$ps":[{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"child","$mt":"prm"},{"$def":"1","$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","$mt":"prm"}],"$at":{"count":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","var":"1","$mt":"attr"},"child":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"child","$mt":"attr"}},"$m":{"foo":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"foo","$mt":"mthd"}},"$mt":"cls"},"Child":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Child","$mt":"cls"}}},"$pkg-shared":"1","carOwnerBinding":{"$t":{"$nm":"Binding","$pk":"cayla.mvc.view"},"$nm":"carOwnerBinding","$mt":"attr"},"lastNameBinding":{"$t":{"$nm":"Binding","$pk":"cayla.mvc.view"},"$nm":"lastNameBinding","$mt":"attr"},"lastNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"cayla.mvc"},{"$nm":"Person","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"AttributeExpression","$pk":"cayla.mvc.expression"},"$nm":"lastNameExpr","$mt":"attr"},"Car":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Car","$ps":[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"owner","$mt":"prm"}],"$at":{"owner":{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"cayla.mvc.test"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"owner","$mt":"attr"},"name":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"testDiff6":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff6","$mt":"mthd"},"testDiff5":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff5","$mt":"mthd"},"testDiff4":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff4","$mt":"mthd"},"testDiff3":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff3","$mt":"mthd"},"testDiff2":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff2","$mt":"mthd"},"testDiff1":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff1","$mt":"mthd"},"Person":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Person","$ps":[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"firstName","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"lastName","$mt":"prm"}],"$at":{"firstName":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"firstName","$mt":"attr"},"lastName":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"lastName","$mt":"attr"}},"$mt":"cls"}},"$mod-name":"cayla.mvc","cayla.mvc":{"Frame":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Frame","$at":{"observables":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"HashSet","$md":"ceylon.collection","$pk":"ceylon.collection"},"$an":{"shared":[]},"$nm":"observables","$mt":"attr"}},"$mt":"cls"},"computed":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"ComputedObservable","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"computed","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"compute","$mt":"prm"}]],"$mt":"mthd"},"testsuite":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"testsuite","$mt":"mthd"},"log":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"log","$m":{"debug":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"debug","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"message","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"binders":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"binders","$m":{"with":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"with","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"foreach":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"foreach","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$at":{"values":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"values","$mt":"attr"},"contexts":{"$t":{"$tp":[{"$nm":"BindingContext","$mt":"tpm","$pk":"cayla.mvc.view"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"contexts","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"notify":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"notify","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}],[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"list","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"css":{"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"css","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"className","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"visible":{"$t":{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"visible","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"click":{"$tp":[{"$def":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Source","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$t":{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}],"$mt":"tpm"}],"$nm":"Binder","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"click","$mt":"mthd","$o":{"impl":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"impl","satisfies":[{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}],"$mt":"tpm"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"comp":"u","$ts":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Source"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$nm":"Source","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"}]},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}}},"$mt":"obj","$o":{"val":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"val","satisfies":[{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"cayla.mvc.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"},"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$nm":"property","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"checked":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"checked","satisfies":[{"$tp":[{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"cayla.mvc.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$pk":"cayla.mvc"},"$nm":"property","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"enter":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"enter","satisfies":[{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$pk":"cayla.mvc.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"text":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"text","satisfies":[{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Binder","$pk":"cayla.mvc"}],"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"property","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$m":{"g":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"g","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"p","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"property","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"run":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Run the module `mvcpoc`."]},"$nm":"run","$mt":"mthd"},"Observable":{"$tp":[{"$nm":"Value","variance":"out","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"$an":{"shared":[]},"$nm":"Observable","$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"formal":[],"shared":[]},"$nm":"getValue","$mt":"mthd"},"bind":{"$t":{"$nm":"Binding","$pk":"cayla.mvc.view"},"$an":{"shared":[]},"$nm":"bind","$ps":[[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Binder","$pk":"cayla.mvc"},"$nm":"handler","$mt":"prm"}]],"$mt":"mthd","$o":{"impl":{"super":{"$nm":"Binding","$pk":"cayla.mvc.view"},"$nm":"impl","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"}}},"subscribe":{"$t":{"$nm":"Subscription","$pk":"cayla.mvc"},"$an":{"formal":[],"shared":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"$pkg-shared":"1","Binder":{"$tp":[{"$nm":"Value","variance":"in"}],"$an":{"shared":[]},"$nm":"Binder","$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"init","$ps":[[{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"},{"$t":{"$nm":"BindingContext","$pk":"cayla.mvc.view"},"$nm":"context","$mt":"prm"}]],"$mt":"mthd"},"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"update","$ps":[[{"$t":{"$nm":"DomNode","$pk":"cayla.mvc.dom"},"$nm":"node","$mt":"prm"},{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"ifc"},"ObservableList":{"$tp":[{"$nm":"Element","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ObservableList","satisfies":[{"$tp":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"MutableList","$md":"ceylon.collection","$pk":"ceylon.collection"}],"$at":{"rest":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"rest","$mt":"gttr"},"subscribers":{"$t":{"$tp":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Subscribers","$pk":"cayla.mvc"},"$nm":"subscribers","$mt":"attr"},"clone":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"clone","$mt":"gttr"},"lastIndex":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"}]},"$an":{"shared":[],"actual":[]},"$nm":"lastIndex","$mt":"gttr"},"list":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"list","$mt":"attr"},"hash":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"hash","$mt":"gttr"},"reversed":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"reversed","$mt":"gttr"}},"$m":{"add":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"add","$ps":[[{"$t":{"$nm":"Element"},"$nm":"element","$mt":"prm"}]],"$mt":"mthd"},"spanFrom":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"spanFrom","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"}]],"$mt":"mthd"},"set":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"set","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"},{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"cayla.mvc"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"clear":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"clear","$mt":"mthd"},"insert":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"insert","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"},{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"remove":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element"}]},"$an":{"shared":[],"actual":[]},"$nm":"remove","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"}]],"$mt":"mthd"},"spanTo":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"spanTo","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"to","$mt":"prm"}]],"$mt":"mthd"},"getValue":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"addAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"addAll","$ps":[[{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"},{"$nm":"Null","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Iterable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"values","$mt":"prm"}]],"$mt":"mthd"},"equals":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"default":[]},"$nm":"equals","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"that","$mt":"prm"}]],"$mt":"mthd"},"get":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Element"}]},"$an":{"shared":[],"actual":[]},"$nm":"get","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"index","$mt":"prm"}]],"$mt":"mthd"},"segment":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"segment","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"length","$mt":"prm"}]],"$mt":"mthd"},"removeElement":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"removeElement","$ps":[[{"$t":{"$nm":"Element"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"},"span":{"$t":{"$tp":[{"$nm":"Element","$mt":"tpm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"span","$ps":[[{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"from","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"to","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"ComputedObservable":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ComputedObservable","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"cayla.mvc"}],"$ps":[{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"compute","$mt":"prm"}],"$at":{"compute":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"compute","$mt":"attr"},"evaluation":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"evaluation","var":"1","$mt":"attr"},"subscribers":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Subscribers","$pk":"cayla.mvc"},"$nm":"subscribers","$mt":"attr"},"evaluating":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[],"variable":[]},"$nm":"evaluating","var":"1","$mt":"attr"},"dependencies":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"},{"$nm":"Subscription","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"HashMap","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"dependencies","$mt":"attr"}},"$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"cayla.mvc"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"evaluate":{"$t":{"comp":"u","$ts":[{"$nm":"Null","$md":"ceylon.language","$pk":"ceylon.language"},{"$nm":"Value"}]},"$nm":"evaluate","$m":{"update":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"update","$ps":[[{"$t":{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"o","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"}},"$mt":"cls"},"dependant":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"dependant","$at":{"stack":{"$t":{"$tp":[{"$nm":"Frame","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"stack","$mt":"attr"}},"$m":{"report":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"report","$ps":[[{"$t":{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$pk":"cayla.mvc"},"$nm":"observable","$mt":"prm"}]],"$mt":"mthd"},"end":{"$t":{"$tp":[{"$tp":[{"$nm":"Object","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$mt":"tpm","$pk":"cayla.mvc"}],"$nm":"Set","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"end","$mt":"mthd"},"begin":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"begin","$mt":"mthd"}},"$mt":"obj"},"Subscription":{"$an":{"shared":[]},"$nm":"Subscription","$m":{"dispose":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"dispose","$mt":"mthd"}},"$mt":"ifc"},"Subscribers":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Subscribers","$at":{"subscribers":{"$t":{"$tp":[{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"$nm":"Value","$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"LinkedList","$md":"ceylon.collection","$pk":"ceylon.collection"},"$nm":"subscribers","$mt":"attr"}},"$m":{"subscribe":{"$t":{"$nm":"Subscription","$pk":"cayla.mvc"},"$an":{"shared":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd","$o":{"subscription":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscription","satisfies":[{"$nm":"Subscription","$pk":"cayla.mvc"}],"$m":{"dispose":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"dispose","$mt":"mthd"}},"$mt":"obj"}}},"notify":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"notify","$ps":[[{"$t":{"$nm":"Value"},"$nm":"source","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"Property":{"$tp":[{"$nm":"Value","satisfies":[{"$nm":"Object","$md":"ceylon.language","$pk":"ceylon.language"}]}],"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"Property","satisfies":[{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Observable","$pk":"cayla.mvc"}],"$ps":[{"$t":{"$nm":"Value"},"$an":{"variable":[]},"$nm":"val","$mt":"prm"}],"$at":{"val":{"$t":{"$nm":"Value"},"$an":{"variable":[]},"$nm":"val","var":"1","$mt":"attr"},"subscribers":{"$t":{"$tp":[{"$nm":"Value","$mt":"tpm"}],"$nm":"Subscribers","$pk":"cayla.mvc"},"$nm":"subscribers","$mt":"attr"}},"$m":{"getValue":{"$t":{"$nm":"Value"},"$an":{"shared":[],"actual":[]},"$nm":"getValue","$mt":"mthd"},"subscribe":{"$t":{"$nm":"Subscription","$pk":"cayla.mvc"},"$an":{"shared":[],"actual":[]},"$nm":"subscribe","$ps":[[{"$t":{"$tp":[{"$nm":"Anything","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"},{"$tp":[{"comp":"u","$ts":[{"$nm":"Value"},{"$nm":"Nothing","$pk":"cayla.mvc"}],"$mt":"tpm"},{"$nm":"Value","$mt":"tpm"},{"$nm":"Empty","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Tuple","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Callable","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"subscriber","$mt":"prm"}]],"$mt":"mthd"},"setValue":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"setValue","$ps":[[{"$t":{"$nm":"Value"},"$nm":"val","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"CyclicDependencyException":{"super":{"$nm":"Exception","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"CyclicDependencyException","$mt":"cls"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl527366=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl527366.$addmod$($$$cl527366,'ceylon.language/1.0.0');
exports.$pkg$ans$cayla$mvc$view=function(){return[$$$cl527366.shared()];};

//ClassDef Section at elements.ceylon (1:0-7:0)
function Section$view(id$528098, classNames$528099, bindings$528100, content$528101, $$section){
    $init$Section$view();
    if ($$section===undefined)$$section=new Section$view.$$;
    if(id$528098===undefined){id$528098=null;}
    $$section.id$528098_=id$528098;
    if(classNames$528099===undefined){classNames$528099=$$$cl527366.getEmpty();}
    $$section.classNames$528099_=classNames$528099;
    if(bindings$528100===undefined){bindings$528100=$$$cl527366.getEmpty();}
    $$section.bindings$528100_=bindings$528100;
    if(content$528101===undefined){content$528101=$$$cl527366.getEmpty();}
    $$section.content$528101_=content$528101;
    Element$view($$section.id$528098,$$$cl527366.String("section",7),$$section.classNames$528099,$$section.bindings$528100,$$section.content$528101,$$section);
    return $$section;
}
Section$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Section']};};
exports.Section$view=Section$view;
function $init$Section$view(){
    if (Section$view.$$===undefined){
        $$$cl527366.initTypeProto(Section$view,'cayla.mvc.view::Section',$init$Element$view());
        (function($$section){
            $$$cl527366.defineAttr($$section,'id$528098',function(){return this.id$528098_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Section$view,d:['cayla.mvc.view','Section','$at','id']};});
            $$$cl527366.defineAttr($$section,'classNames$528099',function(){return this.classNames$528099_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Section$view,d:['cayla.mvc.view','Section','$at','classNames']};});
            $$$cl527366.defineAttr($$section,'bindings$528100',function(){return this.bindings$528100_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Section$view,d:['cayla.mvc.view','Section','$at','bindings']};});
            $$$cl527366.defineAttr($$section,'content$528101',function(){return this.content$528101_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Section$view,d:['cayla.mvc.view','Section','$at','content']};});
        })(Section$view.$$.prototype);
    }
    return Section$view;
}
exports.$init$Section$view=$init$Section$view;
$init$Section$view();

//ClassDef Header at elements.ceylon (9:0-15:0)
function Header$view(id$528102, classNames$528103, bindings$528104, content$528105, $$header){
    $init$Header$view();
    if ($$header===undefined)$$header=new Header$view.$$;
    if(id$528102===undefined){id$528102=null;}
    $$header.id$528102_=id$528102;
    if(classNames$528103===undefined){classNames$528103=$$$cl527366.getEmpty();}
    $$header.classNames$528103_=classNames$528103;
    if(bindings$528104===undefined){bindings$528104=$$$cl527366.getEmpty();}
    $$header.bindings$528104_=bindings$528104;
    if(content$528105===undefined){content$528105=$$$cl527366.getEmpty();}
    $$header.content$528105_=content$528105;
    Element$view($$header.id$528102,$$$cl527366.String("header",6),$$header.classNames$528103,$$header.bindings$528104,$$header.content$528105,$$header);
    return $$header;
}
Header$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Header']};};
exports.Header$view=Header$view;
function $init$Header$view(){
    if (Header$view.$$===undefined){
        $$$cl527366.initTypeProto(Header$view,'cayla.mvc.view::Header',$init$Element$view());
        (function($$header){
            $$$cl527366.defineAttr($$header,'id$528102',function(){return this.id$528102_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Header$view,d:['cayla.mvc.view','Header','$at','id']};});
            $$$cl527366.defineAttr($$header,'classNames$528103',function(){return this.classNames$528103_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Header$view,d:['cayla.mvc.view','Header','$at','classNames']};});
            $$$cl527366.defineAttr($$header,'bindings$528104',function(){return this.bindings$528104_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Header$view,d:['cayla.mvc.view','Header','$at','bindings']};});
            $$$cl527366.defineAttr($$header,'content$528105',function(){return this.content$528105_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Header$view,d:['cayla.mvc.view','Header','$at','content']};});
        })(Header$view.$$.prototype);
    }
    return Header$view;
}
exports.$init$Header$view=$init$Header$view;
$init$Header$view();

//ClassDef Footer at elements.ceylon (17:0-23:0)
function Footer$view(id$528106, classNames$528107, bindings$528108, content$528109, $$footer){
    $init$Footer$view();
    if ($$footer===undefined)$$footer=new Footer$view.$$;
    if(id$528106===undefined){id$528106=null;}
    $$footer.id$528106_=id$528106;
    if(classNames$528107===undefined){classNames$528107=$$$cl527366.getEmpty();}
    $$footer.classNames$528107_=classNames$528107;
    if(bindings$528108===undefined){bindings$528108=$$$cl527366.getEmpty();}
    $$footer.bindings$528108_=bindings$528108;
    if(content$528109===undefined){content$528109=$$$cl527366.getEmpty();}
    $$footer.content$528109_=content$528109;
    Element$view($$footer.id$528106,$$$cl527366.String("footer",6),$$footer.classNames$528107,$$footer.bindings$528108,$$footer.content$528109,$$footer);
    return $$footer;
}
Footer$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Footer']};};
exports.Footer$view=Footer$view;
function $init$Footer$view(){
    if (Footer$view.$$===undefined){
        $$$cl527366.initTypeProto(Footer$view,'cayla.mvc.view::Footer',$init$Element$view());
        (function($$footer){
            $$$cl527366.defineAttr($$footer,'id$528106',function(){return this.id$528106_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Footer$view,d:['cayla.mvc.view','Footer','$at','id']};});
            $$$cl527366.defineAttr($$footer,'classNames$528107',function(){return this.classNames$528107_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Footer$view,d:['cayla.mvc.view','Footer','$at','classNames']};});
            $$$cl527366.defineAttr($$footer,'bindings$528108',function(){return this.bindings$528108_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Footer$view,d:['cayla.mvc.view','Footer','$at','bindings']};});
            $$$cl527366.defineAttr($$footer,'content$528109',function(){return this.content$528109_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Footer$view,d:['cayla.mvc.view','Footer','$at','content']};});
        })(Footer$view.$$.prototype);
    }
    return Footer$view;
}
exports.$init$Footer$view=$init$Footer$view;
$init$Footer$view();

//ClassDef H1 at elements.ceylon (25:0-31:0)
function H1$view(id$528110, classNames$528111, bindings$528112, content$528113, $$h1){
    $init$H1$view();
    if ($$h1===undefined)$$h1=new H1$view.$$;
    if(id$528110===undefined){id$528110=null;}
    $$h1.id$528110_=id$528110;
    if(classNames$528111===undefined){classNames$528111=$$$cl527366.getEmpty();}
    $$h1.classNames$528111_=classNames$528111;
    if(bindings$528112===undefined){bindings$528112=$$$cl527366.getEmpty();}
    $$h1.bindings$528112_=bindings$528112;
    if(content$528113===undefined){content$528113=$$$cl527366.getEmpty();}
    $$h1.content$528113_=content$528113;
    Element$view($$h1.id$528110,$$$cl527366.String("h1",2),$$h1.classNames$528111,$$h1.bindings$528112,$$h1.content$528113,$$h1);
    return $$h1;
}
H1$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','H1']};};
exports.H1$view=H1$view;
function $init$H1$view(){
    if (H1$view.$$===undefined){
        $$$cl527366.initTypeProto(H1$view,'cayla.mvc.view::H1',$init$Element$view());
        (function($$h1){
            $$$cl527366.defineAttr($$h1,'id$528110',function(){return this.id$528110_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:H1$view,d:['cayla.mvc.view','H1','$at','id']};});
            $$$cl527366.defineAttr($$h1,'classNames$528111',function(){return this.classNames$528111_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:H1$view,d:['cayla.mvc.view','H1','$at','classNames']};});
            $$$cl527366.defineAttr($$h1,'bindings$528112',function(){return this.bindings$528112_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:H1$view,d:['cayla.mvc.view','H1','$at','bindings']};});
            $$$cl527366.defineAttr($$h1,'content$528113',function(){return this.content$528113_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:H1$view,d:['cayla.mvc.view','H1','$at','content']};});
        })(H1$view.$$.prototype);
    }
    return H1$view;
}
exports.$init$H1$view=$init$H1$view;
$init$H1$view();

//ClassDef Div at elements.ceylon (33:0-39:0)
function Div$view(id$528114, classNames$528115, bindings$528116, content$528117, $$div){
    $init$Div$view();
    if ($$div===undefined)$$div=new Div$view.$$;
    if(id$528114===undefined){id$528114=null;}
    $$div.id$528114_=id$528114;
    if(classNames$528115===undefined){classNames$528115=$$$cl527366.getEmpty();}
    $$div.classNames$528115_=classNames$528115;
    if(bindings$528116===undefined){bindings$528116=$$$cl527366.getEmpty();}
    $$div.bindings$528116_=bindings$528116;
    if(content$528117===undefined){content$528117=$$$cl527366.getEmpty();}
    $$div.content$528117_=content$528117;
    Element$view($$div.id$528114,$$$cl527366.String("div",3),$$div.classNames$528115,$$div.bindings$528116,$$div.content$528117,$$div);
    return $$div;
}
Div$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Div']};};
exports.Div$view=Div$view;
function $init$Div$view(){
    if (Div$view.$$===undefined){
        $$$cl527366.initTypeProto(Div$view,'cayla.mvc.view::Div',$init$Element$view());
        (function($$div){
            $$$cl527366.defineAttr($$div,'id$528114',function(){return this.id$528114_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Div$view,d:['cayla.mvc.view','Div','$at','id']};});
            $$$cl527366.defineAttr($$div,'classNames$528115',function(){return this.classNames$528115_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Div$view,d:['cayla.mvc.view','Div','$at','classNames']};});
            $$$cl527366.defineAttr($$div,'bindings$528116',function(){return this.bindings$528116_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Div$view,d:['cayla.mvc.view','Div','$at','bindings']};});
            $$$cl527366.defineAttr($$div,'content$528117',function(){return this.content$528117_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Div$view,d:['cayla.mvc.view','Div','$at','content']};});
        })(Div$view.$$.prototype);
    }
    return Div$view;
}
exports.$init$Div$view=$init$Div$view;
$init$Div$view();

//ClassDef P at elements.ceylon (41:0-47:0)
function P$view(id$528118, classNames$528119, bindings$528120, content$528121, $$p){
    $init$P$view();
    if ($$p===undefined)$$p=new P$view.$$;
    if(id$528118===undefined){id$528118=null;}
    $$p.id$528118_=id$528118;
    if(classNames$528119===undefined){classNames$528119=$$$cl527366.getEmpty();}
    $$p.classNames$528119_=classNames$528119;
    if(bindings$528120===undefined){bindings$528120=$$$cl527366.getEmpty();}
    $$p.bindings$528120_=bindings$528120;
    if(content$528121===undefined){content$528121=$$$cl527366.getEmpty();}
    $$p.content$528121_=content$528121;
    Element$view($$p.id$528118,$$$cl527366.String("p",1),$$p.classNames$528119,$$p.bindings$528120,$$p.content$528121,$$p);
    return $$p;
}
P$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','P']};};
exports.P$view=P$view;
function $init$P$view(){
    if (P$view.$$===undefined){
        $$$cl527366.initTypeProto(P$view,'cayla.mvc.view::P',$init$Element$view());
        (function($$p){
            $$$cl527366.defineAttr($$p,'id$528118',function(){return this.id$528118_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:P$view,d:['cayla.mvc.view','P','$at','id']};});
            $$$cl527366.defineAttr($$p,'classNames$528119',function(){return this.classNames$528119_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:P$view,d:['cayla.mvc.view','P','$at','classNames']};});
            $$$cl527366.defineAttr($$p,'bindings$528120',function(){return this.bindings$528120_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:P$view,d:['cayla.mvc.view','P','$at','bindings']};});
            $$$cl527366.defineAttr($$p,'content$528121',function(){return this.content$528121_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:P$view,d:['cayla.mvc.view','P','$at','content']};});
        })(P$view.$$.prototype);
    }
    return P$view;
}
exports.$init$P$view=$init$P$view;
$init$P$view();

//ClassDef Span at elements.ceylon (49:0-55:0)
function Span$view(id$528122, classNames$528123, bindings$528124, content$528125, $$span){
    $init$Span$view();
    if ($$span===undefined)$$span=new Span$view.$$;
    if(id$528122===undefined){id$528122=null;}
    $$span.id$528122_=id$528122;
    if(classNames$528123===undefined){classNames$528123=$$$cl527366.getEmpty();}
    $$span.classNames$528123_=classNames$528123;
    if(bindings$528124===undefined){bindings$528124=$$$cl527366.getEmpty();}
    $$span.bindings$528124_=bindings$528124;
    if(content$528125===undefined){content$528125=$$$cl527366.getEmpty();}
    $$span.content$528125_=content$528125;
    Element$view($$span.id$528122,$$$cl527366.String("span",4),$$span.classNames$528123,$$span.bindings$528124,$$span.content$528125,$$span);
    return $$span;
}
Span$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Span']};};
exports.Span$view=Span$view;
function $init$Span$view(){
    if (Span$view.$$===undefined){
        $$$cl527366.initTypeProto(Span$view,'cayla.mvc.view::Span',$init$Element$view());
        (function($$span){
            $$$cl527366.defineAttr($$span,'id$528122',function(){return this.id$528122_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Span$view,d:['cayla.mvc.view','Span','$at','id']};});
            $$$cl527366.defineAttr($$span,'classNames$528123',function(){return this.classNames$528123_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Span$view,d:['cayla.mvc.view','Span','$at','classNames']};});
            $$$cl527366.defineAttr($$span,'bindings$528124',function(){return this.bindings$528124_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Span$view,d:['cayla.mvc.view','Span','$at','bindings']};});
            $$$cl527366.defineAttr($$span,'content$528125',function(){return this.content$528125_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Span$view,d:['cayla.mvc.view','Span','$at','content']};});
        })(Span$view.$$.prototype);
    }
    return Span$view;
}
exports.$init$Span$view=$init$Span$view;
$init$Span$view();

//ClassDef Strong at elements.ceylon (57:0-63:0)
function Strong$view(id$528126, classNames$528127, bindings$528128, content$528129, $$strong){
    $init$Strong$view();
    if ($$strong===undefined)$$strong=new Strong$view.$$;
    if(id$528126===undefined){id$528126=null;}
    $$strong.id$528126_=id$528126;
    if(classNames$528127===undefined){classNames$528127=$$$cl527366.getEmpty();}
    $$strong.classNames$528127_=classNames$528127;
    if(bindings$528128===undefined){bindings$528128=$$$cl527366.getEmpty();}
    $$strong.bindings$528128_=bindings$528128;
    if(content$528129===undefined){content$528129=$$$cl527366.getEmpty();}
    $$strong.content$528129_=content$528129;
    Element$view($$strong.id$528126,$$$cl527366.String("strong",6),$$strong.classNames$528127,$$strong.bindings$528128,$$strong.content$528129,$$strong);
    return $$strong;
}
Strong$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Strong']};};
exports.Strong$view=Strong$view;
function $init$Strong$view(){
    if (Strong$view.$$===undefined){
        $$$cl527366.initTypeProto(Strong$view,'cayla.mvc.view::Strong',$init$Element$view());
        (function($$strong){
            $$$cl527366.defineAttr($$strong,'id$528126',function(){return this.id$528126_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Strong$view,d:['cayla.mvc.view','Strong','$at','id']};});
            $$$cl527366.defineAttr($$strong,'classNames$528127',function(){return this.classNames$528127_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Strong$view,d:['cayla.mvc.view','Strong','$at','classNames']};});
            $$$cl527366.defineAttr($$strong,'bindings$528128',function(){return this.bindings$528128_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Strong$view,d:['cayla.mvc.view','Strong','$at','bindings']};});
            $$$cl527366.defineAttr($$strong,'content$528129',function(){return this.content$528129_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Strong$view,d:['cayla.mvc.view','Strong','$at','content']};});
        })(Strong$view.$$.prototype);
    }
    return Strong$view;
}
exports.$init$Strong$view=$init$Strong$view;
$init$Strong$view();

//ClassDef Input at elements.ceylon (65:0-72:0)
function Input$view(name$528130, id$528131, classNames$528132, bindings$528133, content$528134, $$input){
    $init$Input$view();
    if ($$input===undefined)$$input=new Input$view.$$;
    if(name$528130===undefined){name$528130=null;}
    $$input.name$528130_=name$528130;
    if(id$528131===undefined){id$528131=null;}
    $$input.id$528131_=id$528131;
    if(classNames$528132===undefined){classNames$528132=$$$cl527366.getEmpty();}
    $$input.classNames$528132_=classNames$528132;
    if(bindings$528133===undefined){bindings$528133=$$$cl527366.getEmpty();}
    $$input.bindings$528133_=bindings$528133;
    if(content$528134===undefined){content$528134=$$$cl527366.getEmpty();}
    $$input.content$528134_=content$528134;
    Element$view($$input.id$528131,$$$cl527366.String("input",5),$$input.classNames$528132,$$input.bindings$528133,$$input.content$528134,$$input);
    return $$input;
}
Input$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Input']};};
exports.Input$view=Input$view;
function $init$Input$view(){
    if (Input$view.$$===undefined){
        $$$cl527366.initTypeProto(Input$view,'cayla.mvc.view::Input',$init$Element$view());
        (function($$input){
            $$$cl527366.defineAttr($$input,'name$528130',function(){return this.name$528130_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Input$view,d:['cayla.mvc.view','Input','$at','name']};});
            $$$cl527366.defineAttr($$input,'id$528131',function(){return this.id$528131_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Input$view,d:['cayla.mvc.view','Input','$at','id']};});
            $$$cl527366.defineAttr($$input,'classNames$528132',function(){return this.classNames$528132_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Input$view,d:['cayla.mvc.view','Input','$at','classNames']};});
            $$$cl527366.defineAttr($$input,'bindings$528133',function(){return this.bindings$528133_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Input$view,d:['cayla.mvc.view','Input','$at','bindings']};});
            $$$cl527366.defineAttr($$input,'content$528134',function(){return this.content$528134_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Input$view,d:['cayla.mvc.view','Input','$at','content']};});
        })(Input$view.$$.prototype);
    }
    return Input$view;
}
exports.$init$Input$view=$init$Input$view;
$init$Input$view();

//ClassDef InputText at elements.ceylon (74:0-82:0)
function InputText$view(name$528135, id$528136, classNames$528137, bindings$528138, content$528139, $$inputText){
    $init$InputText$view();
    if ($$inputText===undefined)$$inputText=new InputText$view.$$;
    $$inputText.name$528135_=name$528135;
    if(id$528136===undefined){id$528136=null;}
    $$inputText.id$528136_=id$528136;
    if(classNames$528137===undefined){classNames$528137=$$$cl527366.getEmpty();}
    $$inputText.classNames$528137_=classNames$528137;
    if(bindings$528138===undefined){bindings$528138=$$$cl527366.getEmpty();}
    $$inputText.bindings$528138_=bindings$528138;
    if(content$528139===undefined){content$528139=$$$cl527366.getEmpty();}
    $$inputText.content$528139_=content$528139;
    Element$view($$inputText.id$528136,$$$cl527366.String("input",5),$$inputText.classNames$528137,$$inputText.bindings$528138,$$inputText.content$528139,$$inputText);
    
    //AttributeDecl attrs at elements.ceylon (81:4-81:84)
    $$inputText.attrs$528140_=[$$$cl527366.Entry($$$cl527366.String("name",4),$$inputText.name$528135,{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}),$$$cl527366.Entry($$$cl527366.String("type",4),$$$cl527366.String("text",4),{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}})].reifyCeylonType({Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Nothing}});
    $$inputText.$prop$getAttrs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Null}}},$cont:InputText$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.$default()];},d:['cayla.mvc.view','InputText','$at','attrs']};}};
    $$inputText.$prop$getAttrs.get=function(){return attrs};
    return $$inputText;
}
InputText$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','InputText']};};
exports.InputText$view=InputText$view;
function $init$InputText$view(){
    if (InputText$view.$$===undefined){
        $$$cl527366.initTypeProto(InputText$view,'cayla.mvc.view::InputText',$init$Element$view());
        (function($$inputText){
            
            //AttributeDecl attrs at elements.ceylon (81:4-81:84)
            $$$cl527366.defineAttr($$inputText,'attrs',function(){return this.attrs$528140_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Null}}},$cont:InputText$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.$default()];},d:['cayla.mvc.view','InputText','$at','attrs']};});
            $$$cl527366.defineAttr($$inputText,'name$528135',function(){return this.name$528135_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.String},$cont:InputText$view,d:['cayla.mvc.view','InputText','$at','name']};});
            $$$cl527366.defineAttr($$inputText,'id$528136',function(){return this.id$528136_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:InputText$view,d:['cayla.mvc.view','InputText','$at','id']};});
            $$$cl527366.defineAttr($$inputText,'classNames$528137',function(){return this.classNames$528137_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:InputText$view,d:['cayla.mvc.view','InputText','$at','classNames']};});
            $$$cl527366.defineAttr($$inputText,'bindings$528138',function(){return this.bindings$528138_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:InputText$view,d:['cayla.mvc.view','InputText','$at','bindings']};});
            $$$cl527366.defineAttr($$inputText,'content$528139',function(){return this.content$528139_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:InputText$view,d:['cayla.mvc.view','InputText','$at','content']};});
        })(InputText$view.$$.prototype);
    }
    return InputText$view;
}
exports.$init$InputText$view=$init$InputText$view;
$init$InputText$view();

//ClassDef Button at elements.ceylon (84:0-98:0)
function Button$view(name$528141, id$528142, classNames$528143, bindings$528144, content$528145, $$button){
    $init$Button$view();
    if ($$button===undefined)$$button=new Button$view.$$;
    if(name$528141===undefined){name$528141=null;}
    $$button.name$528141_=name$528141;
    if(id$528142===undefined){id$528142=null;}
    $$button.id$528142_=id$528142;
    if(classNames$528143===undefined){classNames$528143=$$$cl527366.getEmpty();}
    $$button.classNames$528143_=classNames$528143;
    if(bindings$528144===undefined){bindings$528144=$$$cl527366.getEmpty();}
    $$button.bindings$528144_=bindings$528144;
    if(content$528145===undefined){content$528145=$$$cl527366.getEmpty();}
    $$button.content$528145_=content$528145;
    Element$view($$button.id$528142,$$$cl527366.String("button",6),$$button.classNames$528143,$$button.bindings$528144,$$button.content$528145,$$button);
    return $$button;
}
Button$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Button']};};
exports.Button$view=Button$view;
function $init$Button$view(){
    if (Button$view.$$===undefined){
        $$$cl527366.initTypeProto(Button$view,'cayla.mvc.view::Button',$init$Element$view());
        (function($$button){
            
            //AttributeGetterDef attrs at elements.ceylon (91:4-97:4)
            $$$cl527366.defineAttr($$button,'attrs',function(){
                var $$button=this;
                var name$528146;
                if((name$528146=$$button.name$528141)!==null){
                    return [$$$cl527366.Entry($$$cl527366.String("name",4),name$528146,{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}})].reifyCeylonType({Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Nothing}});
                }else {
                    return $$$cl527366.getEmpty();
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Null}}},$cont:Button$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.$default()];},d:['cayla.mvc.view','Button','$at','attrs']};});$$$cl527366.defineAttr($$button,'name$528141',function(){return this.name$528141_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Button$view,d:['cayla.mvc.view','Button','$at','name']};});
            $$$cl527366.defineAttr($$button,'id$528142',function(){return this.id$528142_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Button$view,d:['cayla.mvc.view','Button','$at','id']};});
            $$$cl527366.defineAttr($$button,'classNames$528143',function(){return this.classNames$528143_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Button$view,d:['cayla.mvc.view','Button','$at','classNames']};});
            $$$cl527366.defineAttr($$button,'bindings$528144',function(){return this.bindings$528144_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Button$view,d:['cayla.mvc.view','Button','$at','bindings']};});
            $$$cl527366.defineAttr($$button,'content$528145',function(){return this.content$528145_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Button$view,d:['cayla.mvc.view','Button','$at','content']};});
        })(Button$view.$$.prototype);
    }
    return Button$view;
}
exports.$init$Button$view=$init$Button$view;
$init$Button$view();

//ClassDef A at elements.ceylon (100:0-114:0)
function A$view(id$528147, classNames$528148, bindings$528149, href$528150, content$528151, $$a){
    $init$A$view();
    if ($$a===undefined)$$a=new A$view.$$;
    if(id$528147===undefined){id$528147=null;}
    $$a.id$528147_=id$528147;
    if(classNames$528148===undefined){classNames$528148=$$$cl527366.getEmpty();}
    $$a.classNames$528148_=classNames$528148;
    if(bindings$528149===undefined){bindings$528149=$$$cl527366.getEmpty();}
    $$a.bindings$528149_=bindings$528149;
    if(href$528150===undefined){href$528150=null;}
    $$a.href$528150_=href$528150;
    if(content$528151===undefined){content$528151=$$$cl527366.getEmpty();}
    $$a.content$528151_=content$528151;
    Element$view($$a.id$528147,$$$cl527366.String("a",1),$$a.classNames$528148,$$a.bindings$528149,$$a.content$528151,$$a);
    return $$a;
}
A$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'href',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','A']};};
exports.A$view=A$view;
function $init$A$view(){
    if (A$view.$$===undefined){
        $$$cl527366.initTypeProto(A$view,'cayla.mvc.view::A',$init$Element$view());
        (function($$a){
            
            //AttributeGetterDef attrs at elements.ceylon (107:8-113:8)
            $$$cl527366.defineAttr($$a,'attrs',function(){
                var $$a=this;
                var href$528152;
                if((href$528152=$$a.href$528150)!==null){
                    return [$$$cl527366.Entry($$$cl527366.String("href",4),href$528152,{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}})].reifyCeylonType({Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Nothing}});
                }else {
                    return $$$cl527366.getEmpty();
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Null}}},$cont:A$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.$default()];},d:['cayla.mvc.view','A','$at','attrs']};});$$$cl527366.defineAttr($$a,'id$528147',function(){return this.id$528147_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:A$view,d:['cayla.mvc.view','A','$at','id']};});
            $$$cl527366.defineAttr($$a,'classNames$528148',function(){return this.classNames$528148_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:A$view,d:['cayla.mvc.view','A','$at','classNames']};});
            $$$cl527366.defineAttr($$a,'bindings$528149',function(){return this.bindings$528149_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:A$view,d:['cayla.mvc.view','A','$at','bindings']};});
            $$$cl527366.defineAttr($$a,'href$528150',function(){return this.href$528150_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:A$view,d:['cayla.mvc.view','A','$at','href']};});
            $$$cl527366.defineAttr($$a,'content$528151',function(){return this.content$528151_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:A$view,d:['cayla.mvc.view','A','$at','content']};});
        })(A$view.$$.prototype);
    }
    return A$view;
}
exports.$init$A$view=$init$A$view;
$init$A$view();

//ClassDef CheckBox at elements.ceylon (116:0-130:0)
function CheckBox$view(name$528153, id$528154, classNames$528155, bindings$528156, content$528157, $$checkBox){
    $init$CheckBox$view();
    if ($$checkBox===undefined)$$checkBox=new CheckBox$view.$$;
    if(name$528153===undefined){name$528153=null;}
    $$checkBox.name$528153_=name$528153;
    if(id$528154===undefined){id$528154=null;}
    $$checkBox.id$528154_=id$528154;
    if(classNames$528155===undefined){classNames$528155=$$$cl527366.getEmpty();}
    $$checkBox.classNames$528155_=classNames$528155;
    if(bindings$528156===undefined){bindings$528156=$$$cl527366.getEmpty();}
    $$checkBox.bindings$528156_=bindings$528156;
    if(content$528157===undefined){content$528157=$$$cl527366.getEmpty();}
    $$checkBox.content$528157_=content$528157;
    Element$view($$checkBox.id$528154,$$$cl527366.String("input",5),$$checkBox.classNames$528155,$$checkBox.bindings$528156,$$checkBox.content$528157,$$checkBox);
    return $$checkBox;
}
CheckBox$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','CheckBox']};};
exports.CheckBox$view=CheckBox$view;
function $init$CheckBox$view(){
    if (CheckBox$view.$$===undefined){
        $$$cl527366.initTypeProto(CheckBox$view,'cayla.mvc.view::CheckBox',$init$Element$view());
        (function($$checkBox){
            
            //AttributeGetterDef attrs at elements.ceylon (123:4-129:4)
            $$$cl527366.defineAttr($$checkBox,'attrs',function(){
                var $$checkBox=this;
                var name$528158;
                if((name$528158=$$checkBox.name$528153)!==null){
                    return [$$$cl527366.Entry($$$cl527366.String("name",4),name$528158,{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}),$$$cl527366.Entry($$$cl527366.String("type",4),$$$cl527366.String("checkbox",8),{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}})].reifyCeylonType({Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Nothing}});
                }else {
                    return [$$$cl527366.Entry($$$cl527366.String("type",4),$$$cl527366.String("checkbox",8),{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}})].reifyCeylonType({Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Nothing}});
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Null}}},$cont:CheckBox$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.$default()];},d:['cayla.mvc.view','CheckBox','$at','attrs']};});$$$cl527366.defineAttr($$checkBox,'name$528153',function(){return this.name$528153_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:CheckBox$view,d:['cayla.mvc.view','CheckBox','$at','name']};});
            $$$cl527366.defineAttr($$checkBox,'id$528154',function(){return this.id$528154_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:CheckBox$view,d:['cayla.mvc.view','CheckBox','$at','id']};});
            $$$cl527366.defineAttr($$checkBox,'classNames$528155',function(){return this.classNames$528155_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:CheckBox$view,d:['cayla.mvc.view','CheckBox','$at','classNames']};});
            $$$cl527366.defineAttr($$checkBox,'bindings$528156',function(){return this.bindings$528156_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:CheckBox$view,d:['cayla.mvc.view','CheckBox','$at','bindings']};});
            $$$cl527366.defineAttr($$checkBox,'content$528157',function(){return this.content$528157_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:CheckBox$view,d:['cayla.mvc.view','CheckBox','$at','content']};});
        })(CheckBox$view.$$.prototype);
    }
    return CheckBox$view;
}
exports.$init$CheckBox$view=$init$CheckBox$view;
$init$CheckBox$view();

//ClassDef Ul at elements.ceylon (132:0-138:0)
function Ul$view(id$528159, classNames$528160, bindings$528161, content$528162, $$ul){
    $init$Ul$view();
    if ($$ul===undefined)$$ul=new Ul$view.$$;
    if(id$528159===undefined){id$528159=null;}
    $$ul.id$528159_=id$528159;
    if(classNames$528160===undefined){classNames$528160=$$$cl527366.getEmpty();}
    $$ul.classNames$528160_=classNames$528160;
    if(bindings$528161===undefined){bindings$528161=$$$cl527366.getEmpty();}
    $$ul.bindings$528161_=bindings$528161;
    if(content$528162===undefined){content$528162=$$$cl527366.getEmpty();}
    $$ul.content$528162_=content$528162;
    Element$view($$ul.id$528159,$$$cl527366.String("ul",2),$$ul.classNames$528160,$$ul.bindings$528161,$$ul.content$528162,$$ul);
    return $$ul;
}
Ul$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Ul']};};
exports.Ul$view=Ul$view;
function $init$Ul$view(){
    if (Ul$view.$$===undefined){
        $$$cl527366.initTypeProto(Ul$view,'cayla.mvc.view::Ul',$init$Element$view());
        (function($$ul){
            $$$cl527366.defineAttr($$ul,'id$528159',function(){return this.id$528159_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Ul$view,d:['cayla.mvc.view','Ul','$at','id']};});
            $$$cl527366.defineAttr($$ul,'classNames$528160',function(){return this.classNames$528160_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Ul$view,d:['cayla.mvc.view','Ul','$at','classNames']};});
            $$$cl527366.defineAttr($$ul,'bindings$528161',function(){return this.bindings$528161_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Ul$view,d:['cayla.mvc.view','Ul','$at','bindings']};});
            $$$cl527366.defineAttr($$ul,'content$528162',function(){return this.content$528162_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Ul$view,d:['cayla.mvc.view','Ul','$at','content']};});
        })(Ul$view.$$.prototype);
    }
    return Ul$view;
}
exports.$init$Ul$view=$init$Ul$view;
$init$Ul$view();

//ClassDef Li at elements.ceylon (140:0-146:0)
function Li$view(id$528163, classNames$528164, bindings$528165, content$528166, $$li){
    $init$Li$view();
    if ($$li===undefined)$$li=new Li$view.$$;
    if(id$528163===undefined){id$528163=null;}
    $$li.id$528163_=id$528163;
    if(classNames$528164===undefined){classNames$528164=$$$cl527366.getEmpty();}
    $$li.classNames$528164_=classNames$528164;
    if(bindings$528165===undefined){bindings$528165=$$$cl527366.getEmpty();}
    $$li.bindings$528165_=bindings$528165;
    if(content$528166===undefined){content$528166=$$$cl527366.getEmpty();}
    $$li.content$528166_=content$528166;
    Element$view($$li.id$528163,$$$cl527366.String("li",2),$$li.classNames$528164,$$li.bindings$528165,$$li.content$528166,$$li);
    return $$li;
}
Li$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Li']};};
exports.Li$view=Li$view;
function $init$Li$view(){
    if (Li$view.$$===undefined){
        $$$cl527366.initTypeProto(Li$view,'cayla.mvc.view::Li',$init$Element$view());
        (function($$li){
            $$$cl527366.defineAttr($$li,'id$528163',function(){return this.id$528163_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Li$view,d:['cayla.mvc.view','Li','$at','id']};});
            $$$cl527366.defineAttr($$li,'classNames$528164',function(){return this.classNames$528164_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Li$view,d:['cayla.mvc.view','Li','$at','classNames']};});
            $$$cl527366.defineAttr($$li,'bindings$528165',function(){return this.bindings$528165_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Li$view,d:['cayla.mvc.view','Li','$at','bindings']};});
            $$$cl527366.defineAttr($$li,'content$528166',function(){return this.content$528166_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Li$view,d:['cayla.mvc.view','Li','$at','content']};});
        })(Li$view.$$.prototype);
    }
    return Li$view;
}
exports.$init$Li$view=$init$Li$view;
$init$Li$view();

//ClassDef Label at elements.ceylon (148:0-154:0)
function Label$view(id$528167, classNames$528168, bindings$528169, content$528170, $$label){
    $init$Label$view();
    if ($$label===undefined)$$label=new Label$view.$$;
    if(id$528167===undefined){id$528167=null;}
    $$label.id$528167_=id$528167;
    if(classNames$528168===undefined){classNames$528168=$$$cl527366.getEmpty();}
    $$label.classNames$528168_=classNames$528168;
    if(bindings$528169===undefined){bindings$528169=$$$cl527366.getEmpty();}
    $$label.bindings$528169_=bindings$528169;
    if(content$528170===undefined){content$528170=$$$cl527366.getEmpty();}
    $$label.content$528170_=content$528170;
    Element$view($$label.id$528167,$$$cl527366.String("label",5),$$label.classNames$528168,$$label.bindings$528169,$$label.content$528170,$$label);
    return $$label;
}
Label$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Element$view},$ps:[{$nm:'id',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}},{$nm:'classNames',$mt:'prm',$def:1,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'bindings',$mt:'prm',$def:1,$t:Bindings$view(),$an:function(){return[];}},{$nm:'content',$mt:'prm',$def:1,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Label']};};
exports.Label$view=Label$view;
function $init$Label$view(){
    if (Label$view.$$===undefined){
        $$$cl527366.initTypeProto(Label$view,'cayla.mvc.view::Label',$init$Element$view());
        (function($$label){
            $$$cl527366.defineAttr($$label,'id$528167',function(){return this.id$528167_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Label$view,d:['cayla.mvc.view','Label','$at','id']};});
            $$$cl527366.defineAttr($$label,'classNames$528168',function(){return this.classNames$528168_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Label$view,d:['cayla.mvc.view','Label','$at','classNames']};});
            $$$cl527366.defineAttr($$label,'bindings$528169',function(){return this.bindings$528169_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Label$view,d:['cayla.mvc.view','Label','$at','bindings']};});
            $$$cl527366.defineAttr($$label,'content$528170',function(){return this.content$528170_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Label$view,d:['cayla.mvc.view','Label','$at','content']};});
        })(Label$view.$$.prototype);
    }
    return Label$view;
}
exports.$init$Label$view=$init$Label$view;
$init$Label$view();
var $$$cc527440=require('ceylon/collection/1.0.0/ceylon.collection-1.0.0');
$$$cl527366.$addmod$($$$cc527440,'ceylon.collection/1.0.0');

//ClassDef ModelContext at ModelContext.ceylon (5:0-30:0)
function ModelContext$view(o, parent, $$modelContext){
    $init$ModelContext$view();
    if ($$modelContext===undefined)$$modelContext=new ModelContext$view.$$;
    $$modelContext.o_=o;
    if(parent===undefined){parent=null;}
    $$modelContext.parent_=parent;
    
    //AttributeDecl nodes at ModelContext.ceylon (7:4-7:60)
    $$modelContext.nodes$528171_=$$$cc527440.LinkedList(undefined,{Element:{t:DomNode$dom}});
    $$modelContext.$prop$getNodes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:{t:DomNode$dom}}},$cont:ModelContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ModelContext','$at','nodes']};}};
    $$modelContext.$prop$getNodes.get=function(){return nodes};
    return $$modelContext;
}
ModelContext$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'o',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[$$$cl527366.shared()];}},{$nm:'parent',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:ModelContext$view}]},$an:function(){return[$$$cl527366.shared()];}}],d:['cayla.mvc.view','ModelContext']};};
function $init$ModelContext$view(){
    if (ModelContext$view.$$===undefined){
        $$$cl527366.initTypeProto(ModelContext$view,'cayla.mvc.view::ModelContext',$$$cl527366.Basic);
        (function($$modelContext){
            
            //AttributeDecl nodes at ModelContext.ceylon (7:4-7:60)
            $$$cl527366.defineAttr($$modelContext,'nodes',function(){return this.nodes$528171_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:{t:DomNode$dom}}},$cont:ModelContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ModelContext','$at','nodes']};});
            
            //MethodDef destroy at ModelContext.ceylon (9:4-13:4)
            $$modelContext.destroy=function destroy(){
                var $$modelContext=this;
                //'for' statement at ModelContext.ceylon (10:8-12:8)
                var it$528172 = $$modelContext.nodes.reversed.iterator();
                var node$528173;while ((node$528173=it$528172.next())!==$$$cl527366.getFinished()){
                    node$528173.detach();
                }
            };$$modelContext.destroy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:ModelContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ModelContext','$m','destroy']};};
            
            //MethodDef register at ModelContext.ceylon (15:4-17:4)
            $$modelContext.register=function register(node$528174){
                var $$modelContext=this;
                $$modelContext.nodes.add(node$528174);
            };$$modelContext.register.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:ModelContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ModelContext','$m','register']};};
            
            //MethodDef resolve at ModelContext.ceylon (19:4-28:4)
            $$modelContext.resolve=function resolve($$$mptypes){
                var $$modelContext=this;
                var o$528175;
                if($$$cl527366.isOfType((o$528175=$$modelContext.o),$$$mptypes.Value)){
                    return o$528175;
                }else {
                    var parent$528176;
                    if((parent$528176=$$modelContext.parent)!==null){
                        return parent$528176.resolve({Value:$$$mptypes.Value});
                    }else {
                        return null;
                    }
                }
            };$$modelContext.resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},'Value']},$ps:[],$cont:ModelContext$view,$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ModelContext','$m','resolve']};};
            $$$cl527366.defineAttr($$modelContext,'o',function(){return this.o_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Object},$cont:ModelContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ModelContext','$at','o']};});
            $$$cl527366.defineAttr($$modelContext,'parent',function(){return this.parent_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:ModelContext$view}]},$cont:ModelContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ModelContext','$at','parent']};});
        })(ModelContext$view.$$.prototype);
    }
    return ModelContext$view;
}
exports.$init$ModelContext$view=$init$ModelContext$view;
$init$ModelContext$view();

//ClassDef ElementBindingContext at ElementBindingContext.ceylon (3:0-61:0)
function ElementBindingContext$view(model, node, element, parent$528177, $$elementBindingContext){
    $init$ElementBindingContext$view();
    if ($$elementBindingContext===undefined)$$elementBindingContext=new ElementBindingContext$view.$$;
    $$elementBindingContext.model_=model;
    $$elementBindingContext.node_=node;
    $$elementBindingContext.element_=element;
    if(parent$528177===undefined){parent$528177=null;}
    $$elementBindingContext.parent$528177_=parent$528177;
    BindingContext$view($$elementBindingContext);
    
    //AttributeDecl createChildren at ElementBindingContext.ceylon (6:4-6:56)
    $$elementBindingContext.createChildren$528178_=true;
    $$elementBindingContext.$prop$getCreateChildren={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.variable()];},d:['cayla.mvc.view','ElementBindingContext','$at','createChildren']};}};
    $$elementBindingContext.$prop$getCreateChildren.get=function(){return createChildren};
    return $$elementBindingContext;
}
ElementBindingContext$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'model',$mt:'prm',$t:{t:ModelContext$view},$an:function(){return[$$$cl527366.shared()];}},{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];}},{$nm:'element',$mt:'prm',$t:{t:Element$view},$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];}},{$nm:'parent',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:ElementBindingContext$view}]},$an:function(){return[];}}],satisfies:[{t:BindingContext$view}],d:['cayla.mvc.view','ElementBindingContext']};};
function $init$ElementBindingContext$view(){
    if (ElementBindingContext$view.$$===undefined){
        $$$cl527366.initTypeProto(ElementBindingContext$view,'cayla.mvc.view::ElementBindingContext',$$$cl527366.Basic,$init$BindingContext$view());
        (function($$elementBindingContext){
            
            //AttributeDecl createChildren at ElementBindingContext.ceylon (6:4-6:56)
            $$$cl527366.defineAttr($$elementBindingContext,'createChildren',function(){return this.createChildren$528178_;},function(createChildren$528179){return this.createChildren$528178_=createChildren$528179;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.variable()];},d:['cayla.mvc.view','ElementBindingContext','$at','createChildren']};});
            
            //MethodDef destroy at ElementBindingContext.ceylon (8:4-10:4)
            $$elementBindingContext.destroy=function destroy(){
                var $$elementBindingContext=this;
                $$elementBindingContext.model.destroy();
            };$$elementBindingContext.destroy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.view','ElementBindingContext','$m','destroy']};};
            
            //MethodDef child at ElementBindingContext.ceylon (12:4-17:4)
            $$elementBindingContext.child=function child(child$528180){
                var $$elementBindingContext=this;
                
                //AttributeDecl ret at ElementBindingContext.ceylon (13:8-13:46)
                var ret$528181=ModelContext$view(child$528180,$$elementBindingContext.model);
                
                //AttributeDecl wrapper at ElementBindingContext.ceylon (14:8-14:89)
                var wrapper$528182=ElementBindingContext$view(ret$528181,$$elementBindingContext.node,$$elementBindingContext.element,$$elementBindingContext.parent$528177);
                wrapper$528182.initChildren$528183();
                return wrapper$528182;
            };$$elementBindingContext.child.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:BindingContext$view},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[];}}],$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.view','ElementBindingContext','$m','child']};};
            
            //MethodDecl resolve at ElementBindingContext.ceylon (19:4-20:66)
            $$elementBindingContext.resolve=function ($$$mptypes){
                var $$elementBindingContext=this;
                return $$elementBindingContext.model.resolve({Value:$$$mptypes.Value});
            };
            $$elementBindingContext.resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},'Value']},$ps:[],$cont:ElementBindingContext$view,$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.view','ElementBindingContext','$m','resolve']};};
            
            //MethodDef register at ElementBindingContext.ceylon (22:4-24:4)
            $$elementBindingContext.register=function register(node$528184){
                var $$elementBindingContext=this;
                $$elementBindingContext.model.register(node$528184);
            };$$elementBindingContext.register.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ElementBindingContext','$m','register']};};
            
            //MethodDef init at ElementBindingContext.ceylon (26:4-44:4)
            $$elementBindingContext.init=function init(){
                var $$elementBindingContext=this;
                $$elementBindingContext.node.setId($$elementBindingContext.element.id);
                //'for' statement at ElementBindingContext.ceylon (28:8-30:8)
                var it$528185 = $$elementBindingContext.element.attrs.iterator();
                var attr$528186;while ((attr$528186=it$528185.next())!==$$$cl527366.getFinished()){
                    $$elementBindingContext.node.setAttribute(attr$528186.key,attr$528186.item);
                }
                //'for' statement at ElementBindingContext.ceylon (31:8-33:8)
                var it$528187 = $$elementBindingContext.element.classNames.iterator();
                var className$528188;while ((className$528188=it$528187.next())!==$$$cl527366.getFinished()){
                    $$elementBindingContext.node.addClass(className$528188);
                }
                var bindings$528189;
                if($$$cl527366.isOfType((bindings$528189=$$elementBindingContext.element.bindings),{t:$$$cl527366.Sequential,a:{Element:{t:Binding$view}}})){
                    //'for' statement at ElementBindingContext.ceylon (35:12-37:12)
                    var it$528190 = bindings$528189.iterator();
                    var binding$528191;while ((binding$528191=it$528190.next())!==$$$cl527366.getFinished()){
                        binding$528191.init($$elementBindingContext);
                    }
                }else {
                    var binding$528192;
                    if($$$cl527366.isOfType((binding$528192=$$elementBindingContext.element.bindings),{t:Binding$view})){
                        binding$528192.init($$elementBindingContext);
                    }
                }
                if($$elementBindingContext.createChildren){
                    $$elementBindingContext.initChildren$528183();
                }
            };$$elementBindingContext.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ElementBindingContext','$m','init']};};
            
            //MethodDef initChildren at ElementBindingContext.ceylon (46:4-60:4)
            $$elementBindingContext.initChildren$528183=function initChildren$528183(){
                var $$elementBindingContext=this;
                //'for' statement at ElementBindingContext.ceylon (47:8-59:8)
                var it$528193 = $$elementBindingContext.element.content.iterator();
                var child$528194;while ((child$528194=it$528193.next())!==$$$cl527366.getFinished()){
                    //Switch statement at ElementBindingContext.ceylon (48:12-58:12)
                    var case$528195=child$528194;
                    if ($$$cl527366.isOfType(child$528194,{t:$$$cl527366.String})) {
                        $$elementBindingContext.node.addText(case$528195);
                    }else if ($$$cl527366.isOfType(child$528194,{t:Element$view})) {
                        
                        //AttributeDecl foo at ElementBindingContext.ceylon (53:16-53:46)
                        var foo$528196=element$dom(case$528195.name);
                        $$elementBindingContext.register(foo$528196);
                        
                        //AttributeDecl childContext at ElementBindingContext.ceylon (55:16-55:99)
                        var childContext$528197=ElementBindingContext$view($$elementBindingContext.model,foo$528196,case$528195,$$elementBindingContext);
                        childContext$528197.init();
                        $$elementBindingContext.node.addChild(foo$528196);
                    }//End switch statement at ElementBindingContext.ceylon (48:12-58:12)
                }
            };$$elementBindingContext.initChildren$528183.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:ElementBindingContext$view,d:['cayla.mvc.view','ElementBindingContext','$m','initChildren']};};
            $$$cl527366.defineAttr($$elementBindingContext,'model',function(){return this.model_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ModelContext$view},$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','ElementBindingContext','$at','model']};});
            $$$cl527366.defineAttr($$elementBindingContext,'node',function(){return this.node_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.view','ElementBindingContext','$at','node']};});
            $$$cl527366.defineAttr($$elementBindingContext,'element',function(){return this.element_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Element$view},$cont:ElementBindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.view','ElementBindingContext','$at','element']};});
            $$$cl527366.defineAttr($$elementBindingContext,'parent$528177',function(){return this.parent$528177_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:ElementBindingContext$view}]},$cont:ElementBindingContext$view,d:['cayla.mvc.view','ElementBindingContext','$at','parent']};});
        })(ElementBindingContext$view.$$.prototype);
    }
    return ElementBindingContext$view;
}
exports.$init$ElementBindingContext$view=$init$ElementBindingContext$view;
$init$ElementBindingContext$view();

//TypeAliasDecl Bindings at Element.ceylon (3:0-3:44)
function Bindings$view(){var tmpvar$528198={t:'u', l:[{t:Binding$view},{t:$$$cl527366.Sequential,a:{Element:{t:Binding$view}}}]};tmpvar$528198.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Bindings']};};return tmpvar$528198;}
exports.Bindings$view=Bindings$view;

//ClassDef Element at Element.ceylon (5:0-21:0)
function Element$view(id, name, classNames, bindings, content, $$element){
    $init$Element$view();
    if ($$element===undefined)$$$cl527366.throwexc($$$cl527366.InvocationException$meta$model($$$cl527366.String("Cannot instantiate abstract class")),'?','?')
    $$element.id_=id;
    $$element.name_=name;
    $$element.classNames_=classNames;
    $$element.bindings_=bindings;
    $$element.content_=content;
    
    //AttributeDecl attrs at Element.ceylon (12:4-12:49)
    $$element.attrs$528199_=$$$cl527366.getEmpty();
    $$element.$prop$getAttrs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Null}}},$cont:Element$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.$default()];},d:['cayla.mvc.view','Element','$at','attrs']};}};
    $$element.$prop$getAttrs.get=function(){return attrs};
    return $$element;
}
Element$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'id',$mt:'prm',$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[$$$cl527366.shared()];}},{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[$$$cl527366.shared()];}},{$nm:'classNames',$mt:'prm',$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$an:function(){return[$$$cl527366.shared()];}},{$nm:'bindings',$mt:'prm',$t:Bindings$view(),$an:function(){return[$$$cl527366.shared()];}},{$nm:'content',$mt:'prm',$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$an:function(){return[$$$cl527366.shared()];}}],$an:function(){return[$$$cl527366.shared(),$$$cl527366.abstract()];},d:['cayla.mvc.view','Element']};};
exports.Element$view=Element$view;
function $init$Element$view(){
    if (Element$view.$$===undefined){
        $$$cl527366.initTypeProto(Element$view,'cayla.mvc.view::Element',$$$cl527366.Basic);
        (function($$element){
            
            //AttributeDecl attrs at Element.ceylon (12:4-12:49)
            $$$cl527366.defineAttr($$element,'attrs',function(){return this.attrs$528199_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:$$$cl527366.Entry,a:{Item:{t:$$$cl527366.String},Key:{t:$$$cl527366.String}}},Absent:{t:$$$cl527366.Null}}},$cont:Element$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.$default()];},d:['cayla.mvc.view','Element','$at','attrs']};});
            
            //MethodDef bind at Element.ceylon (14:4-20:4)
            $$element.$bind=function $bind(o$528200){
                var $$element=this;
                
                //AttributeDecl node at Element.ceylon (15:8-15:36)
                var node$528201=element$dom($$element.name);
                
                //AttributeDecl root at Element.ceylon (16:8-16:49)
                var root$528202=ModelContext$view(o$528200,null);
                
                //AttributeDecl wrapper at Element.ceylon (17:8-17:79)
                var wrapper$528203=ElementBindingContext$view(root$528202,node$528201,$$element);
                wrapper$528203.init();
                return node$528201;
            };$$element.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'o',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[];}}],$cont:Element$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Element','$m','bind']};};
            $$$cl527366.defineAttr($$element,'id',function(){return this.id_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$cont:Element$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Element','$at','id']};});
            $$$cl527366.defineAttr($$element,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.String},$cont:Element$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Element','$at','name']};});
            $$$cl527366.defineAttr($$element,'classNames',function(){return this.classNames_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.String}}},$cont:Element$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Element','$at','classNames']};});
            $$$cl527366.defineAttr($$element,'bindings',function(){return this.bindings_;},undefined,function(){return{mod:$$METAMODEL$$,$t:Bindings$view(),$cont:Element$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Element','$at','bindings']};});
            $$$cl527366.defineAttr($$element,'content',function(){return this.content_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:'u', l:[{t:$$$cl527366.String},{t:Element$view}]},Absent:{t:$$$cl527366.Null}}},$cont:Element$view,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','Element','$at','content']};});
        })(Element$view.$$.prototype);
    }
    return Element$view;
}
exports.$init$Element$view=$init$Element$view;
$init$Element$view();

//InterfaceDef BindingContext at BindingContext.ceylon (2:0-15:0)
function BindingContext$view($$bindingContext){
}
BindingContext$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.view','BindingContext']};};
exports.BindingContext$view=BindingContext$view;
function $init$BindingContext$view(){
    if (BindingContext$view.$$===undefined){
        $$$cl527366.initTypeProtoI(BindingContext$view,'cayla.mvc.view::BindingContext');
        (function($$bindingContext){
            $$bindingContext.resolve={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},'Value']},$ps:[],$cont:BindingContext$view,$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc.view','BindingContext','$m','resolve']};}};
            //AttributeDecl element at BindingContext.ceylon (6:4-6:33)
            $$bindingContext.$prop$getElement={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Element$view},$cont:BindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc.view','BindingContext','$at','element']};}};
            
            //AttributeDecl node at BindingContext.ceylon (8:4-8:30)
            $$bindingContext.$prop$getNode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:BindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc.view','BindingContext','$at','node']};}};
            $$bindingContext.child={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:BindingContext$view},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[];}}],$cont:BindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc.view','BindingContext','$m','child']};}};$$bindingContext.destroy={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:BindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc.view','BindingContext','$m','destroy']};}};
            //AttributeDecl createChildren at BindingContext.ceylon (14:4-14:49)
            $$bindingContext.$prop$getCreateChildren={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$cont:BindingContext$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal(),$$$cl527366.variable()];},d:['cayla.mvc.view','BindingContext','$at','createChildren']};}};
        })(BindingContext$view.$$.prototype);
    }
    return BindingContext$view;
}
exports.$init$BindingContext$view=$init$BindingContext$view;
$init$BindingContext$view();

//ClassDef Binding at Binding.ceylon (2:0-6:0)
function Binding$view($$binding){
    $init$Binding$view();
    if ($$binding===undefined)$$$cl527366.throwexc($$$cl527366.InvocationException$meta$model($$$cl527366.String("Cannot instantiate abstract class")),'?','?')
    return $$binding;
}
Binding$view.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$cl527366.abstract()];},d:['cayla.mvc.view','Binding']};};
exports.Binding$view=Binding$view;
function $init$Binding$view(){
    if (Binding$view.$$===undefined){
        $$$cl527366.initTypeProto(Binding$view,'cayla.mvc.view::Binding',$$$cl527366.Basic);
        (function($$binding){
            $$binding.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:Binding$view,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc.view','Binding','$m','init']};}};
        })(Binding$view.$$.prototype);
    }
    return Binding$view;
}
exports.$init$Binding$view=$init$Binding$view;
$init$Binding$view();
exports.$pkg$ans$cayla$mvc$todo=function(){return[$$$cl527366.shared()];};

//ClassDef TodoList at TodoList.ceylon (6:0-146:0)
function TodoList$todo($$todoList){
    $init$TodoList$todo();
    if ($$todoList===undefined)$$todoList=new TodoList$todo.$$;
    
    //AttributeDecl title at TodoList.ceylon (8:4-8:48)
    $$todoList.title$528204_=Property($$$cl527366.String("",0),{Value:{t:$$$cl527366.String}});
    $$todoList.$prop$getTitle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','title']};}};
    $$todoList.$prop$getTitle.get=function(){return title};
    
    //AttributeDecl mode at TodoList.ceylon (9:4-9:52)
    $$todoList.mode$528205_=Property(getAll$todo(),{Value:{t:Mode$todo}});
    $$todoList.$prop$getMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:Mode$todo}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','mode']};}};
    $$todoList.$prop$getMode.get=function(){return mode};
    
    //AttributeDecl todos at TodoList.ceylon (10:4-10:62)
    $$todoList.todos$528206_=ObservableList({Element:{t:Todo$todo}});
    $$todoList.$prop$getTodos={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ObservableList,a:{Element:{t:Todo$todo}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','todos']};}};
    $$todoList.$prop$getTodos.get=function(){return todos};
    
    //AttributeDecl filtered at TodoList.ceylon (11:4-11:109)
    $$todoList.filtered$528207_=computed($$$cl527366.$JsCallable((function (){
        return $$$cc527440.LinkedList($$todoList.todos.$filter($$$cl527366.$JsCallable((opt$528208=$$todoList.mode.getValue(),$$$cl527366.JsCallable(opt$528208,opt$528208!==null?opt$528208.accept:null)),[{$nm:'todo',$mt:'prm',$t:{t:Todo$todo},$an:function(){return[];}}],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:'T', l:[{t:Todo$todo}]}})),{Element:{t:Todo$todo}});
    }),[],{Return:{t:$$$cc527440.LinkedList,a:{Element:{t:Todo$todo}}},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cc527440.LinkedList,a:{Element:{t:Todo$todo}}}});
    $$todoList.$prop$getFiltered={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:{t:Todo$todo}}}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','filtered']};}};
    $$todoList.$prop$getFiltered.get=function(){return filtered};
    var opt$528208;
    
    //AttributeDecl completedCount at TodoList.ceylon (12:4-12:117)
    $$todoList.completedCount$528209_=computed($$$cl527366.$JsCallable((function (){
        return $$todoList.todos.count($$$cl527366.$JsCallable((function (todo$528210){
            return todo$528210.completed.getValue();
        }),[{$nm:'todo',$mt:'prm',$t:{t:Todo$todo},$an:function(){return[];}}],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:'T', l:[{t:Todo$todo}]}}));
    }),[],{Return:{t:$$$cl527366.Integer},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.Integer}});
    $$todoList.$prop$getCompletedCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.Integer}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','completedCount']};}};
    $$todoList.$prop$getCompletedCount.get=function(){return completedCount};
    
    //AttributeDecl remainingCount at TodoList.ceylon (13:4-13:102)
    $$todoList.remainingCount$528211_=computed($$$cl527366.$JsCallable((function (){
        return $$todoList.todos.size.minus($$todoList.completedCount.getValue());
    }),[],{Return:{t:$$$cl527366.Integer},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.Integer}});
    $$todoList.$prop$getRemainingCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.Integer}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','remainingCount']};}};
    $$todoList.$prop$getRemainingCount.get=function(){return remainingCount};
    
    //AttributeDecl items at TodoList.ceylon (14:4-14:108)
    $$todoList.items$528212_=computed($$$cl527366.$JsCallable((function (){
        return (opt$528213=($$todoList.remainingCount.getValue().compare((1)).equals($$$cl527366.getLarger())?$$$cl527366.String("items",5):null),opt$528213!==null?opt$528213:$$$cl527366.String("item",4));
    }),[],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.String}});
    $$todoList.$prop$getItems={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.String}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','items']};}};
    $$todoList.$prop$getItems.get=function(){return items};
    var opt$528213;
    
    //AttributeDecl hasCompleted at TodoList.ceylon (15:4-15:91)
    $$todoList.hasCompleted$528214_=computed($$$cl527366.$JsCallable((function (){
        return $$todoList.completedCount.getValue().compare((0)).equals($$$cl527366.getLarger());
    }),[],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.$Boolean}});
    $$todoList.$prop$getHasCompleted={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','hasCompleted']};}};
    $$todoList.$prop$getHasCompleted.get=function(){return hasCompleted};
    
    //AttributeDecl hasTodos at TodoList.ceylon (16:4-16:83)
    $$todoList.hasTodos$528215_=computed($$$cl527366.$JsCallable((function (){
        return $$todoList.todos.getValue().size.compare((0)).equals($$$cl527366.getLarger());
    }),[],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.$Boolean}});
    $$todoList.$prop$getHasTodos={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','hasTodos']};}};
    $$todoList.$prop$getHasTodos.get=function(){return hasTodos};
    
    //AttributeDecl allMode at TodoList.ceylon (17:4-17:79)
    $$todoList.allMode$528216_=computed($$$cl527366.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getAll$todo());
    }),[],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.$Boolean}});
    $$todoList.$prop$getAllMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','allMode']};}};
    $$todoList.$prop$getAllMode.get=function(){return allMode};
    
    //AttributeDecl activeMode at TodoList.ceylon (18:4-18:85)
    $$todoList.activeMode$528217_=computed($$$cl527366.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getActive$todo());
    }),[],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.$Boolean}});
    $$todoList.$prop$getActiveMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','activeMode']};}};
    $$todoList.$prop$getActiveMode.get=function(){return activeMode};
    
    //AttributeDecl completedMode at TodoList.ceylon (19:4-19:91)
    $$todoList.completedMode$528218_=computed($$$cl527366.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getCompleted$todo());
    }),[],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.$Boolean}});
    $$todoList.$prop$getCompletedMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','completedMode']};}};
    $$todoList.$prop$getCompletedMode.get=function(){return completedMode};
    return $$todoList;
}
TodoList$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList']};};
exports.TodoList$todo=TodoList$todo;
function $init$TodoList$todo(){
    if (TodoList$todo.$$===undefined){
        $$$cl527366.initTypeProto(TodoList$todo,'cayla.mvc.todo::TodoList',$$$cl527366.Basic);
        (function($$todoList){
            
            //AttributeDecl title at TodoList.ceylon (8:4-8:48)
            $$$cl527366.defineAttr($$todoList,'title',function(){return this.title$528204_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','title']};});
            
            //AttributeDecl mode at TodoList.ceylon (9:4-9:52)
            $$$cl527366.defineAttr($$todoList,'mode',function(){return this.mode$528205_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:Mode$todo}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','mode']};});
            
            //AttributeDecl todos at TodoList.ceylon (10:4-10:62)
            $$$cl527366.defineAttr($$todoList,'todos',function(){return this.todos$528206_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ObservableList,a:{Element:{t:Todo$todo}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','todos']};});
            
            //AttributeDecl filtered at TodoList.ceylon (11:4-11:109)
            $$$cl527366.defineAttr($$todoList,'filtered',function(){return this.filtered$528207_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:{t:Todo$todo}}}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','filtered']};});
            
            //AttributeDecl completedCount at TodoList.ceylon (12:4-12:117)
            $$$cl527366.defineAttr($$todoList,'completedCount',function(){return this.completedCount$528209_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.Integer}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','completedCount']};});
            
            //AttributeDecl remainingCount at TodoList.ceylon (13:4-13:102)
            $$$cl527366.defineAttr($$todoList,'remainingCount',function(){return this.remainingCount$528211_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.Integer}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','remainingCount']};});
            
            //AttributeDecl items at TodoList.ceylon (14:4-14:108)
            $$$cl527366.defineAttr($$todoList,'items',function(){return this.items$528212_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.String}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','items']};});
            
            //AttributeDecl hasCompleted at TodoList.ceylon (15:4-15:91)
            $$$cl527366.defineAttr($$todoList,'hasCompleted',function(){return this.hasCompleted$528214_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','hasCompleted']};});
            
            //AttributeDecl hasTodos at TodoList.ceylon (16:4-16:83)
            $$$cl527366.defineAttr($$todoList,'hasTodos',function(){return this.hasTodos$528215_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','hasTodos']};});
            
            //AttributeDecl allMode at TodoList.ceylon (17:4-17:79)
            $$$cl527366.defineAttr($$todoList,'allMode',function(){return this.allMode$528216_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','allMode']};});
            
            //AttributeDecl activeMode at TodoList.ceylon (18:4-18:85)
            $$$cl527366.defineAttr($$todoList,'activeMode',function(){return this.activeMode$528217_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','activeMode']};});
            
            //AttributeDecl completedMode at TodoList.ceylon (19:4-19:91)
            $$$cl527366.defineAttr($$todoList,'completedMode',function(){return this.completedMode$528218_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$at','completedMode']};});
            
            //MethodDef create at TodoList.ceylon (21:4-27:4)
            $$todoList.create=function create(){
                var $$todoList=this;
                
                //AttributeDecl t at TodoList.ceylon (22:8-22:42)
                var t$528219=$$todoList.title.getValue().trimmed;
                if(t$528219.size.compare((0)).equals($$$cl527366.getLarger())){
                    $$todoList.todos.add(Todo$todo(t$528219));
                    $$todoList.title.setValue($$$cl527366.String("",0));
                }
            };$$todoList.create.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$m','create']};};
            
            //MethodDef showAll at TodoList.ceylon (29:4-31:4)
            $$todoList.showAll=function showAll(){
                var $$todoList=this;
                $$todoList.mode.setValue(getAll$todo());
            };$$todoList.showAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$m','showAll']};};
            
            //MethodDef showActive at TodoList.ceylon (33:4-35:4)
            $$todoList.showActive=function showActive(){
                var $$todoList=this;
                $$todoList.mode.setValue(getActive$todo());
            };$$todoList.showActive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$m','showActive']};};
            
            //MethodDef showCompleted at TodoList.ceylon (37:4-39:4)
            $$todoList.showCompleted=function showCompleted(){
                var $$todoList=this;
                $$todoList.mode.setValue(getCompleted$todo());
            };$$todoList.showCompleted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$m','showCompleted']};};
            
            //MethodDef remove at TodoList.ceylon (41:4-43:4)
            $$todoList.remove=function remove(todo$528220){
                var $$todoList=this;
                $$todoList.todos.removeElement(todo$528220);
            };$$todoList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo$todo},$an:function(){return[];}}],$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$m','remove']};};
            
            //MethodDef removeCompleted at TodoList.ceylon (45:4-50:4)
            $$todoList.removeCompleted=function removeCompleted(){
                var $$todoList=this;
                
                //AttributeDecl toRemove at TodoList.ceylon (46:8-46:91)
                var toRemove$528221=$$$cc527440.LinkedList($$todoList.todos.$filter($$$cl527366.$JsCallable((function (todo$528222){
                    return todo$528222.completed.getValue();
                }),[{$nm:'todo',$mt:'prm',$t:{t:Todo$todo},$an:function(){return[];}}],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:'T', l:[{t:Todo$todo}]}})),{Element:{t:Todo$todo}});
                //'for' statement at TodoList.ceylon (47:8-49:8)
                var it$528223 = toRemove$528221.iterator();
                var completed$528224;while ((completed$528224=it$528223.next())!==$$$cl527366.getFinished()){
                    $$todoList.todos.removeElement(completed$528224);
                }
            };$$todoList.removeCompleted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$m','removeCompleted']};};
            
            //MethodDef init at TodoList.ceylon (52:4-145:4)
            $$todoList.init=function init(){
                var $$todoList=this;
                
                //AttributeDecl a at TodoList.ceylon (54:8-141:9)
                var a$528225=(content$528226=[(id$528227=$$$cl527366.String("todoapp",7),content$528228=[(id$528229=$$$cl527366.String("header",6),content$528230=[(content$528231=[$$$cl527366.String("todos",5).valueOf()].reifyCeylonType({Element:{t:$$$cl527366.String},Absent:{t:$$$cl527366.Null}}),H1$view(undefined,undefined,undefined,content$528231)),(id$528232=$$$cl527366.String("new-todo",8),name$528233=$$$cl527366.String("title",5),bindings$528234=$$$cl527366.Tuple(attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('title',TodoList$todo.$$.prototype.$prop$getTitle,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:$$$cl527366.String}}}}),{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}},Source:{t:TodoList$todo}}).bindTo(getBinders().val),$$$cl527366.Tuple(method$expression($$$cl527366.AppliedMethod$meta$model(TodoList$todo.$$.prototype.create,undefined,{Container:{t:TodoList$todo},Type:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}),{Arguments:{t:$$$cl527366.Empty},Source:{t:TodoList$todo}}).bindTo(getBinders().enter),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Binding$view},First:{t:Binding$view}}),{Rest:{t:'T', l:[{t:Binding$view}]},Element:{t:Binding$view},First:{t:Binding$view}}),Input$view(name$528233,id$528232,undefined,bindings$528234,undefined))].reifyCeylonType({Element:{t:'u', l:[{t:H1$view},{t:Input$view}]},Absent:{t:$$$cl527366.Null}}),Header$view(id$528229,undefined,undefined,content$528230)),(id$528235=$$$cl527366.String("main",4),content$528236=[(id$528237=$$$cl527366.String("todo-list",9),bindings$528238=attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('filtered',TodoList$todo.$$.prototype.$prop$getFiltered,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:{t:Todo$todo}}}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:{t:Todo$todo}}}}},Source:{t:TodoList$todo}}).bindTo(getBinders().foreach({Value:{t:Todo$todo}})),content$528239=[(bindings$528240=attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('completed',Todo$todo.$$.prototype.$prop$getCompleted,{Container:{t:Todo$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}}}),{Value:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}},Source:{t:Todo$todo}}).bindTo(getBinders().css($$$cl527366.String("completed",9))),content$528241=[(classNames$528242=$$$cl527366.Tuple($$$cl527366.String("view",4),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:$$$cl527366.String},First:{t:$$$cl527366.String}}),content$528243=[(classNames$528244=$$$cl527366.Tuple($$$cl527366.String("toggle",6),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:$$$cl527366.String},First:{t:$$$cl527366.String}}),bindings$528245=attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('completed',Todo$todo.$$.prototype.$prop$getCompleted,{Container:{t:Todo$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}}}),{Value:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}},Source:{t:Todo$todo}}).bindTo(getBinders().checked),CheckBox$view(undefined,undefined,classNames$528244,bindings$528245,undefined)),(bindings$528246=attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('title',Todo$todo.$$.prototype.$prop$getTitle,{Container:{t:Todo$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:$$$cl527366.String}}}}),{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}},Source:{t:Todo$todo}}).bindTo(getBinders().text),Label$view(undefined,undefined,bindings$528246,undefined)),(classNames$528247=$$$cl527366.Tuple($$$cl527366.String("destroy",7),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:$$$cl527366.String},First:{t:$$$cl527366.String}}),bindings$528248=method$expression($$$cl527366.AppliedMethod$meta$model(TodoList$todo.$$.prototype.remove,undefined,{Container:{t:TodoList$todo},Type:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:Todo$todo}]}}),{Arguments:{t:'T', l:[{t:Todo$todo}]},Source:{t:TodoList$todo}}).bindTo(getBinders().click({Source:{t:Todo$todo}})),Button$view(undefined,undefined,classNames$528247,bindings$528248,undefined))].reifyCeylonType({Element:{t:'u', l:[{t:CheckBox$view},{t:Label$view},{t:Button$view}]},Absent:{t:$$$cl527366.Null}}),Div$view(undefined,classNames$528242,undefined,content$528243))].reifyCeylonType({Element:{t:Div$view},Absent:{t:$$$cl527366.Null}}),Li$view(undefined,undefined,bindings$528240,content$528241))].reifyCeylonType({Element:{t:Li$view},Absent:{t:$$$cl527366.Null}}),Ul$view(id$528237,undefined,bindings$528238,content$528239))].reifyCeylonType({Element:{t:Ul$view},Absent:{t:$$$cl527366.Null}}),Section$view(id$528235,undefined,undefined,content$528236)),(id$528249=$$$cl527366.String("footer",6),bindings$528250=attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('hasTodos',TodoList$todo.$$.prototype.$prop$getHasTodos,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},Source:{t:TodoList$todo}}).bindTo(getBinders().visible()),content$528251=[(id$528252=$$$cl527366.String("todo-count",10),content$528253=[(bindings$528254=attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('remainingCount',TodoList$todo.$$.prototype.$prop$getRemainingCount,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.Integer}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.Integer}}},Source:{t:TodoList$todo}}).bindTo(getBinders().text),Strong$view(undefined,undefined,bindings$528254,undefined)),$$$cl527366.String(" ",1).valueOf(),(bindings$528255=attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('items',TodoList$todo.$$.prototype.$prop$getItems,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.String}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.String}}},Source:{t:TodoList$todo}}).bindTo(getBinders().text),Span$view(undefined,undefined,bindings$528255,undefined)),$$$cl527366.String(" left",5).valueOf()].reifyCeylonType({Element:{t:'u', l:[{t:Strong$view},{t:$$$cl527366.String},{t:Span$view}]},Absent:{t:$$$cl527366.Null}}),Span$view(id$528252,undefined,undefined,content$528253)),(id$528256=$$$cl527366.String("filters",7),content$528257=[(content$528258=[(bindings$528259=$$$cl527366.Tuple(attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('allMode',TodoList$todo.$$.prototype.$prop$getAllMode,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},Source:{t:TodoList$todo}}).bindTo(getBinders().css($$$cl527366.String("selected",8))),$$$cl527366.Tuple(method$expression($$$cl527366.AppliedMethod$meta$model(TodoList$todo.$$.prototype.showAll,undefined,{Container:{t:TodoList$todo},Type:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}),{Arguments:{t:$$$cl527366.Empty},Source:{t:TodoList$todo}}).bindTo(getBinders().click({Source:{t:$$$cl527366.Nothing}})),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Binding$view},First:{t:Binding$view}}),{Rest:{t:'T', l:[{t:Binding$view}]},Element:{t:Binding$view},First:{t:Binding$view}}),href$528260=$$$cl527366.String("#",1),content$528261=[$$$cl527366.String("All",3).valueOf()].reifyCeylonType({Element:{t:$$$cl527366.String},Absent:{t:$$$cl527366.Null}}),A$view(undefined,undefined,bindings$528259,href$528260,content$528261))].reifyCeylonType({Element:{t:A$view},Absent:{t:$$$cl527366.Null}}),Li$view(undefined,undefined,undefined,content$528258)),(content$528262=[(bindings$528263=$$$cl527366.Tuple(attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('activeMode',TodoList$todo.$$.prototype.$prop$getActiveMode,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},Source:{t:TodoList$todo}}).bindTo(getBinders().css($$$cl527366.String("selected",8))),$$$cl527366.Tuple(method$expression($$$cl527366.AppliedMethod$meta$model(TodoList$todo.$$.prototype.showActive,undefined,{Container:{t:TodoList$todo},Type:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}),{Arguments:{t:$$$cl527366.Empty},Source:{t:TodoList$todo}}).bindTo(getBinders().click({Source:{t:$$$cl527366.Nothing}})),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Binding$view},First:{t:Binding$view}}),{Rest:{t:'T', l:[{t:Binding$view}]},Element:{t:Binding$view},First:{t:Binding$view}}),href$528264=$$$cl527366.String("#",1),content$528265=[$$$cl527366.String("Active",6).valueOf()].reifyCeylonType({Element:{t:$$$cl527366.String},Absent:{t:$$$cl527366.Null}}),A$view(undefined,undefined,bindings$528263,href$528264,content$528265))].reifyCeylonType({Element:{t:A$view},Absent:{t:$$$cl527366.Null}}),Li$view(undefined,undefined,undefined,content$528262)),(content$528266=[(bindings$528267=$$$cl527366.Tuple(attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('completedMode',TodoList$todo.$$.prototype.$prop$getCompletedMode,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},Source:{t:TodoList$todo}}).bindTo(getBinders().css($$$cl527366.String("selected",8))),$$$cl527366.Tuple(method$expression($$$cl527366.AppliedMethod$meta$model(TodoList$todo.$$.prototype.showCompleted,undefined,{Container:{t:TodoList$todo},Type:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}),{Arguments:{t:$$$cl527366.Empty},Source:{t:TodoList$todo}}).bindTo(getBinders().click({Source:{t:$$$cl527366.Nothing}})),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Binding$view},First:{t:Binding$view}}),{Rest:{t:'T', l:[{t:Binding$view}]},Element:{t:Binding$view},First:{t:Binding$view}}),href$528268=$$$cl527366.String("#",1),content$528269=[$$$cl527366.String("Completed",9).valueOf()].reifyCeylonType({Element:{t:$$$cl527366.String},Absent:{t:$$$cl527366.Null}}),A$view(undefined,undefined,bindings$528267,href$528268,content$528269))].reifyCeylonType({Element:{t:A$view},Absent:{t:$$$cl527366.Null}}),Li$view(undefined,undefined,undefined,content$528266))].reifyCeylonType({Element:{t:Li$view},Absent:{t:$$$cl527366.Null}}),Ul$view(id$528256,undefined,undefined,content$528257)),(id$528270=$$$cl527366.String("clear-completed",15),bindings$528271=$$$cl527366.Tuple(attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('hasCompleted',TodoList$todo.$$.prototype.$prop$getHasCompleted,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},Source:{t:TodoList$todo}}).bindTo(getBinders().visible()),$$$cl527366.Tuple(method$expression($$$cl527366.AppliedMethod$meta$model(TodoList$todo.$$.prototype.removeCompleted,undefined,{Container:{t:TodoList$todo},Type:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}),{Arguments:{t:$$$cl527366.Empty},Source:{t:TodoList$todo}}).bindTo(getBinders().click({Source:{t:$$$cl527366.Nothing}})),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Binding$view},First:{t:Binding$view}}),{Rest:{t:'T', l:[{t:Binding$view}]},Element:{t:Binding$view},First:{t:Binding$view}}),content$528272=[$$$cl527366.String("Clear completed (",17).valueOf(),(bindings$528273=attribute$expression($$$cl527366.$init$AppliedAttribute$meta$model()('completedCount',TodoList$todo.$$.prototype.$prop$getCompletedCount,{Container:{t:TodoList$todo},Set:{t:$$$cl527366.Nothing},Get:{t:Observable,a:{Value:{t:$$$cl527366.Integer}}}}),{Value:{t:Observable,a:{Value:{t:$$$cl527366.Integer}}},Source:{t:TodoList$todo}}).bindTo(getBinders().text),Span$view(undefined,undefined,bindings$528273,undefined)),$$$cl527366.String(")",1).valueOf()].reifyCeylonType({Element:{t:'u', l:[{t:$$$cl527366.String},{t:Span$view}]},Absent:{t:$$$cl527366.Null}}),Button$view(undefined,id$528270,undefined,bindings$528271,content$528272))].reifyCeylonType({Element:{t:'u', l:[{t:Span$view},{t:Ul$view},{t:Button$view}]},Absent:{t:$$$cl527366.Null}}),Footer$view(id$528249,undefined,bindings$528250,content$528251))].reifyCeylonType({Element:{t:'u', l:[{t:Header$view},{t:Section$view},{t:Footer$view}]},Absent:{t:$$$cl527366.Null}}),Section$view(id$528227,undefined,undefined,content$528228)),(id$528274=$$$cl527366.String("info",4),content$528275=[(content$528276=[$$$cl527366.String("Part of ",8).valueOf(),(href$528277=$$$cl527366.String("http://todomvc.com",18),content$528278=[$$$cl527366.String("TodoMVC",7).valueOf()].reifyCeylonType({Element:{t:$$$cl527366.String},Absent:{t:$$$cl527366.Null}}),A$view(undefined,undefined,undefined,href$528277,content$528278))].reifyCeylonType({Element:{t:'u', l:[{t:$$$cl527366.String},{t:A$view}]},Absent:{t:$$$cl527366.Null}}),P$view(undefined,undefined,undefined,content$528276))].reifyCeylonType({Element:{t:P$view},Absent:{t:$$$cl527366.Null}}),Footer$view(id$528274,undefined,undefined,content$528275))].reifyCeylonType({Element:{t:'u', l:[{t:Section$view},{t:Footer$view}]},Absent:{t:$$$cl527366.Null}}),Div$view(undefined,undefined,undefined,content$528226));
                var content$528226,id$528227,content$528228,id$528229,content$528230,content$528231,id$528232,name$528233,bindings$528234,id$528235,content$528236,id$528237,bindings$528238,content$528239,bindings$528240,content$528241,classNames$528242,content$528243,classNames$528244,bindings$528245,bindings$528246,classNames$528247,bindings$528248,id$528249,bindings$528250,content$528251,id$528252,content$528253,bindings$528254,bindings$528255,id$528256,content$528257,content$528258,bindings$528259,href$528260,content$528261,content$528262,bindings$528263,href$528264,content$528265,content$528266,bindings$528267,href$528268,content$528269,id$528270,bindings$528271,content$528272,bindings$528273,id$528274,content$528275,content$528276,href$528277,content$528278;
                
                //AttributeDecl formNode at TodoList.ceylon (143:8-143:39)
                var formNode$528279=a$528225.$bind($$todoList);
                byId$dom($$$cl527366.String("body",4)).addChild(formNode$528279);
            };$$todoList.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:TodoList$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','TodoList','$m','init']};};
        })(TodoList$todo.$$.prototype);
    }
    return TodoList$todo;
}
exports.$init$TodoList$todo=$init$TodoList$todo;
$init$TodoList$todo();

//ClassDef Todo at Todo.ceylon (2:0-8:0)
function Todo$todo(_title$528280, $$todo){
    $init$Todo$todo();
    if ($$todo===undefined)$$todo=new Todo$todo.$$;
    if(_title$528280===undefined){_title$528280=$$$cl527366.String("",0);}
    $$todo._title$528280_=_title$528280;
    
    //AttributeDecl title at Todo.ceylon (4:4-4:52)
    $$todo.title$528281_=Property($$todo._title$528280,{Value:{t:$$$cl527366.String}});
    $$todo.$prop$getTitle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$cont:Todo$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','Todo','$at','title']};}};
    $$todo.$prop$getTitle.get=function(){return title};
    
    //AttributeDecl completed at Todo.ceylon (5:4-5:56)
    $$todo.completed$528282_=Property(false,{Value:{t:$$$cl527366.$Boolean}});
    $$todo.$prop$getCompleted={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:Todo$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','Todo','$at','completed']};}};
    $$todo.$prop$getCompleted.get=function(){return completed};
    return $$todo;
}
Todo$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'_title',$mt:'prm',$def:1,$t:{t:$$$cl527366.String},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','Todo']};};
exports.Todo$todo=Todo$todo;
function $init$Todo$todo(){
    if (Todo$todo.$$===undefined){
        $$$cl527366.initTypeProto(Todo$todo,'cayla.mvc.todo::Todo',$$$cl527366.Basic);
        (function($$todo){
            
            //AttributeDecl title at Todo.ceylon (4:4-4:52)
            $$$cl527366.defineAttr($$todo,'title',function(){return this.title$528281_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$cont:Todo$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','Todo','$at','title']};});
            
            //AttributeDecl completed at Todo.ceylon (5:4-5:56)
            $$$cl527366.defineAttr($$todo,'completed',function(){return this.completed$528282_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}},$cont:Todo$todo,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','Todo','$at','completed']};});
            $$$cl527366.defineAttr($$todo,'_title$528280',function(){return this._title$528280_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.String},$cont:Todo$todo,d:['cayla.mvc.todo','Todo','$at','_title']};});
        })(Todo$todo.$$.prototype);
    }
    return Todo$todo;
}
exports.$init$Todo$todo=$init$Todo$todo;
$init$Todo$todo();

//ClassDef Mode at Mode.ceylon (1:0-3:0)
function Mode$todo($$mode){
    $init$Mode$todo();
    if ($$mode===undefined)$$$cl527366.throwexc($$$cl527366.InvocationException$meta$model($$$cl527366.String("Cannot instantiate abstract class")),'?','?')
    return $$mode;
}
Mode$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],of:[{t:active$528283$todo},{t:all$528284$todo},{t:completed$528285$todo}],$an:function(){return[$$$cl527366.shared(),$$$cl527366.abstract()];},d:['cayla.mvc.todo','Mode']};};
exports.Mode$todo=Mode$todo;
function $init$Mode$todo(){
    if (Mode$todo.$$===undefined){
        $$$cl527366.initTypeProto(Mode$todo,'cayla.mvc.todo::Mode',$$$cl527366.Basic);
        (function($$mode){
            $$mode.accept={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo$todo},$an:function(){return[];}}],$cont:Mode$todo,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc.todo','Mode','$m','accept']};}};
        })(Mode$todo.$$.prototype);
    }
    return Mode$todo;
}
exports.$init$Mode$todo=$init$Mode$todo;
$init$Mode$todo();

//ObjectDef active at Mode.ceylon (4:0-6:0)
function active$528283$todo(){
    var $$active=new active$528283$todo.$$;
    Mode$todo($$active);
    return $$active;
};active$528283$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode$todo},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','active']};};
function $init$active$528283$todo(){
    if (active$528283$todo.$$===undefined){
        $$$cl527366.initTypeProto(active$528283$todo,'cayla.mvc.todo::active',$init$Mode$todo());
        (function($$active){
            
            //MethodDecl accept at Mode.ceylon (5:4-5:73)
            $$active.accept=function (todo$528286){
                var $$active=this;
                return (!todo$528286.completed.getValue());
            };
            $$active.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo$todo},$an:function(){return[];}}],$cont:active$528283$todo,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.todo','active','$m','accept']};};
        })(active$528283$todo.$$.prototype);
    }
    return active$528283$todo;
}
exports.$init$active$528283$todo=$init$active$528283$todo;
$init$active$528283$todo();
var active$528287$todo;
function getActive$todo(){
    if (active$528287$todo===undefined){active$528287$todo=$init$active$528283$todo()();active$528287$todo.$$metamodel$$=getActive$todo.$$metamodel$$;}
    return active$528287$todo;
}
exports.getActive$todo=getActive$todo;
getActive$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:active$528283$todo},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','active']};};
$prop$getActive$todo={get:getActive$todo,$$metamodel$$:getActive$todo.$$metamodel$$};
exports.$prop$getActive$todo=$prop$getActive$todo;

//ObjectDef all at Mode.ceylon (7:0-9:0)
function all$528284$todo(){
    var $$all=new all$528284$todo.$$;
    Mode$todo($$all);
    return $$all;
};all$528284$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode$todo},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','all']};};
function $init$all$528284$todo(){
    if (all$528284$todo.$$===undefined){
        $$$cl527366.initTypeProto(all$528284$todo,'cayla.mvc.todo::all',$init$Mode$todo());
        (function($$all){
            
            //MethodDecl accept at Mode.ceylon (8:4-8:51)
            $$all.accept=function (todo$528288){
                var $$all=this;
                return true;
            };
            $$all.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo$todo},$an:function(){return[];}}],$cont:all$528284$todo,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.todo','all','$m','accept']};};
        })(all$528284$todo.$$.prototype);
    }
    return all$528284$todo;
}
exports.$init$all$528284$todo=$init$all$528284$todo;
$init$all$528284$todo();
var all$528289$todo;
function getAll$todo(){
    if (all$528289$todo===undefined){all$528289$todo=$init$all$528284$todo()();all$528289$todo.$$metamodel$$=getAll$todo.$$metamodel$$;}
    return all$528289$todo;
}
exports.getAll$todo=getAll$todo;
getAll$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:all$528284$todo},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','all']};};
$prop$getAll$todo={get:getAll$todo,$$metamodel$$:getAll$todo.$$metamodel$$};
exports.$prop$getAll$todo=$prop$getAll$todo;

//ObjectDef completed at Mode.ceylon (10:0-12:0)
function completed$528285$todo(){
    var $$completed=new completed$528285$todo.$$;
    Mode$todo($$completed);
    return $$completed;
};completed$528285$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode$todo},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','completed']};};
function $init$completed$528285$todo(){
    if (completed$528285$todo.$$===undefined){
        $$$cl527366.initTypeProto(completed$528285$todo,'cayla.mvc.todo::completed',$init$Mode$todo());
        (function($$completed){
            
            //MethodDecl accept at Mode.ceylon (11:4-11:72)
            $$completed.accept=function (todo$528290){
                var $$completed=this;
                return todo$528290.completed.getValue();
            };
            $$completed.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo$todo},$an:function(){return[];}}],$cont:completed$528285$todo,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.todo','completed','$m','accept']};};
        })(completed$528285$todo.$$.prototype);
    }
    return completed$528285$todo;
}
exports.$init$completed$528285$todo=$init$completed$528285$todo;
$init$completed$528285$todo();
var completed$528291$todo;
function getCompleted$todo(){
    if (completed$528291$todo===undefined){completed$528291$todo=$init$completed$528285$todo()();completed$528291$todo.$$metamodel$$=getCompleted$todo.$$metamodel$$;}
    return completed$528291$todo;
}
exports.getCompleted$todo=getCompleted$todo;
getCompleted$todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:completed$528285$todo},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.todo','completed']};};
$prop$getCompleted$todo={get:getCompleted$todo,$$metamodel$$:getCompleted$todo.$$metamodel$$};
exports.$prop$getCompleted$todo=$prop$getCompleted$todo;
var $$$ct527567=require('ceylon/test/1.0.0/ceylon.test-1.0.0');
$$$cl527366.$addmod$($$$ct527567,'ceylon.test/1.0.0');

//MethodDef testsuite at testsuite.ceylon (4:0-7:0)
function testsuite(){
    
    //AttributeDecl runner at testsuite.ceylon (5:4-5:90)
    var runner$528292=$$$ct527567.createTestRunner($$$cl527366.Tuple($$$cl527366.getModules$meta().find('cayla.mvc','1.0.0').findPackage('cayla.mvc.test'),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:$$$cl527366.Package$meta$declaration},First:{t:$$$cl527366.Package$meta$declaration}}),$$$cl527366.Tuple($$$ct527567.SimpleLoggingListener(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:$$$ct527567.SimpleLoggingListener},First:{t:$$$ct527567.SimpleLoggingListener}}));
    runner$528292.run();
}
exports.testsuite=testsuite;
testsuite.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','testsuite']};};

//MethodDef withFragment at withFragment.ceylon (2:0-16:0)
function withFragment$test(callback$528293){
    
    //AttributeDecl bodyNode at withFragment.ceylon (3:4-3:20)
    var bodyNode$528294;
    /*Begin dynamic block*/
    
    //AttributeDecl bodies at withFragment.ceylon (5:8-5:62)
    var bodies$528295=(typeof document==='undefined'||document===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: document")),'5:25-5:32','withFragment.ceylon'):document).getElementsByTagName($$$cl527366.String("body",4).valueOf());
    
    //AttributeDecl body at withFragment.ceylon (6:8-6:32)
    var body$528296=bodies$528295[(0)];
    bodyNode$528294=DomNode$dom(body$528296);/*End dynamic block*/
    
    //AttributeDecl fragmentNode at withFragment.ceylon (9:4-9:53)
    var fragmentNode$528297=bodyNode$528294.addElement($$$cl527366.String("div",3));
    try{
        callback$528293(fragmentNode$528297);
    }finally{
        fragmentNode$528297.detach();
    }
}
exports.withFragment$test=withFragment$test;
withFragment$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl527366.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','withFragment']};};

//ClassDef Meal at tests.ceylon (7:0-8:0)
function Meal$test(name, price, $$meal){
    $init$Meal$test();
    if ($$meal===undefined)$$meal=new Meal$test.$$;
    $$meal.name_=name;
    $$meal.price_=price;
    return $$meal;
}
Meal$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[$$$cl527366.shared()];}},{$nm:'price',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[$$$cl527366.shared()];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','Meal']};};
exports.Meal$test=Meal$test;
function $init$Meal$test(){
    if (Meal$test.$$===undefined){
        $$$cl527366.initTypeProto(Meal$test,'cayla.mvc.test::Meal',$$$cl527366.Basic);
        (function($$meal){
            $$$cl527366.defineAttr($$meal,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.String},$cont:Meal$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','Meal','$at','name']};});
            $$$cl527366.defineAttr($$meal,'price',function(){return this.price_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Meal$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','Meal','$at','price']};});
        })(Meal$test.$$.prototype);
    }
    return Meal$test;
}
exports.$init$Meal$test=$init$Meal$test;
$init$Meal$test();

//ClassDef SeatReservation at tests.ceylon (10:0-11:0)
function SeatReservation$test(name, initialMeal, $$seatReservation){
    $init$SeatReservation$test();
    if ($$seatReservation===undefined)$$seatReservation=new SeatReservation$test.$$;
    $$seatReservation.name_=name;
    $$seatReservation.initialMeal_=initialMeal;
    return $$seatReservation;
}
SeatReservation$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[$$$cl527366.shared()];}},{$nm:'initialMeal',$mt:'prm',$t:{t:Meal$test},$an:function(){return[$$$cl527366.shared()];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','SeatReservation']};};
exports.SeatReservation$test=SeatReservation$test;
function $init$SeatReservation$test(){
    if (SeatReservation$test.$$===undefined){
        $$$cl527366.initTypeProto(SeatReservation$test,'cayla.mvc.test::SeatReservation',$$$cl527366.Basic);
        (function($$seatReservation){
            $$$cl527366.defineAttr($$seatReservation,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.String},$cont:SeatReservation$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','SeatReservation','$at','name']};});
            $$$cl527366.defineAttr($$seatReservation,'initialMeal',function(){return this.initialMeal_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Meal$test},$cont:SeatReservation$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','SeatReservation','$at','initialMeal']};});
        })(SeatReservation$test.$$.prototype);
    }
    return SeatReservation$test;
}
exports.$init$SeatReservation$test=$init$SeatReservation$test;
$init$SeatReservation$test();

//ClassDef ReservationsViewModel at tests.ceylon (13:0-14:0)
function ReservationsViewModel$test(seats, $$reservationsViewModel){
    $init$ReservationsViewModel$test();
    if ($$reservationsViewModel===undefined)$$reservationsViewModel=new ReservationsViewModel$test.$$;
    $$reservationsViewModel.seats_=seats;
    return $$reservationsViewModel;
}
ReservationsViewModel$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'seats',$mt:'prm',$t:{t:$$$cl527366.List,a:{Element:{t:SeatReservation$test}}},$an:function(){return[$$$cl527366.shared()];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','ReservationsViewModel']};};
exports.ReservationsViewModel$test=ReservationsViewModel$test;
function $init$ReservationsViewModel$test(){
    if (ReservationsViewModel$test.$$===undefined){
        $$$cl527366.initTypeProto(ReservationsViewModel$test,'cayla.mvc.test::ReservationsViewModel',$$$cl527366.Basic);
        (function($$reservationsViewModel){
            $$$cl527366.defineAttr($$reservationsViewModel,'seats',function(){return this.seats_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:{t:SeatReservation$test}}},$cont:ReservationsViewModel$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','ReservationsViewModel','$at','seats']};});
        })(ReservationsViewModel$test.$$.prototype);
    }
    return ReservationsViewModel$test;
}
exports.$init$ReservationsViewModel$test=$init$ReservationsViewModel$test;
$init$ReservationsViewModel$test();

//ClassDef ViewModel at tests.ceylon (16:0-17:0)
function ViewModel$test(seats, $$viewModel){
    $init$ViewModel$test();
    if ($$viewModel===undefined)$$viewModel=new ViewModel$test.$$;
    $$viewModel.seats_=seats;
    return $$viewModel;
}
ViewModel$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'seats',$mt:'prm',$t:{t:$$$cl527366.List,a:{Element:{t:SeatReservation$test}}},$an:function(){return[$$$cl527366.shared()];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','ViewModel']};};
exports.ViewModel$test=ViewModel$test;
function $init$ViewModel$test(){
    if (ViewModel$test.$$===undefined){
        $$$cl527366.initTypeProto(ViewModel$test,'cayla.mvc.test::ViewModel',$$$cl527366.Basic);
        (function($$viewModel){
            $$$cl527366.defineAttr($$viewModel,'seats',function(){return this.seats_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:{t:SeatReservation$test}}},$cont:ViewModel$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','ViewModel','$at','seats']};});
        })(ViewModel$test.$$.prototype);
    }
    return ViewModel$test;
}
exports.$init$ViewModel$test=$init$ViewModel$test;
$init$ViewModel$test();

//ClassDef AnHandler at tests.ceylon (19:0-24:0)
function AnHandler$test($$anHandler){
    $init$AnHandler$test();
    if ($$anHandler===undefined)$$anHandler=new AnHandler$test.$$;
    
    //AttributeDecl counter at tests.ceylon (20:4-20:39)
    $$anHandler.counter$528298_=(0);
    $$anHandler.$prop$getCounter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:AnHandler$test,$an:function(){return[$$$cl527366.shared(),$$$cl527366.variable()];},d:['cayla.mvc.test','AnHandler','$at','counter']};}};
    $$anHandler.$prop$getCounter.get=function(){return counter};
    return $$anHandler;
}
AnHandler$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','AnHandler']};};
exports.AnHandler$test=AnHandler$test;
function $init$AnHandler$test(){
    if (AnHandler$test.$$===undefined){
        $$$cl527366.initTypeProto(AnHandler$test,'cayla.mvc.test::AnHandler',$$$cl527366.Basic);
        (function($$anHandler){
            
            //AttributeDecl counter at tests.ceylon (20:4-20:39)
            $$$cl527366.defineAttr($$anHandler,'counter',function(){return this.counter$528298_;},function(counter$528299){return this.counter$528298_=counter$528299;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:AnHandler$test,$an:function(){return[$$$cl527366.shared(),$$$cl527366.variable()];},d:['cayla.mvc.test','AnHandler','$at','counter']};});
            
            //MethodDef m at tests.ceylon (21:4-23:4)
            $$anHandler.m=function m(){
                var $$anHandler=this;
                (oldcounter$528300=$$anHandler.counter,$$anHandler.counter=oldcounter$528300.successor,oldcounter$528300);
                var oldcounter$528300;
            };$$anHandler.m.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:AnHandler$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','AnHandler','$m','m']};};
        })(AnHandler$test.$$.prototype);
    }
    return AnHandler$test;
}
exports.$init$AnHandler$test=$init$AnHandler$test;
$init$AnHandler$test();

//MethodDef testExpression at tests.ceylon (26:0-38:0)
function testExpression$test(){
    
    //AttributeDecl reservation at tests.ceylon (27:4-27:78)
    var reservation$528301=SeatReservation$test($$$cl527366.String("julien",6),Meal$test($$$cl527366.String("pasta",5),(10)));
    
    //AttributeDecl vm at tests.ceylon (28:4-28:70)
    var vm$528302=ViewModel$test($$$cl527366.LazyList([reservation$528301].reifyCeylonType({Element:{t:SeatReservation$test},Absent:{t:$$$cl527366.Nothing}}),{Element:{t:SeatReservation$test}}));
    
    //AttributeDecl e1 at tests.ceylon (29:4-29:114)
    var e1$528303=ClassExpression$expression({Type:{t:SeatReservation$test}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('initialMeal',SeatReservation$test.$$.prototype.$prop$getInitialMeal,{Container:{t:SeatReservation$test},Set:{t:$$$cl527366.Nothing},Get:{t:Meal$test}}),{Value:{t:Meal$test}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('price',Meal$test.$$.prototype.$prop$getPrice,{Container:{t:Meal$test},Set:{t:$$$cl527366.Nothing},Get:{t:$$$cl527366.Integer}}),{Value:{t:$$$cl527366.Integer}});
    
    //AttributeDecl v1 at tests.ceylon (30:4-30:39)
    var v1$528304=e1$528303.traverse(reservation$528301);
    $$$ct527567.assertEquals((10),v1$528304);
    
    //AttributeDecl handler at tests.ceylon (32:4-32:35)
    var handler$528305=AnHandler$test();
    
    //AttributeDecl e4 at tests.ceylon (33:4-33:65)
    var e4$528306=ClassExpression$expression({Type:{t:AnHandler$test}}).method($$$cl527366.AppliedMethod$meta$model(AnHandler$test.$$.prototype.m,undefined,{Container:{t:AnHandler$test},Type:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}),{Arguments:{t:$$$cl527366.Empty}});
    
    //AttributeDecl v4 at tests.ceylon (34:4-34:35)
    var v4$528307=$$$cl527366.$JsCallable(e4$528306.traverse(handler$528305),[],{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}});
    $$$ct527567.assertEquals((0),handler$528305.counter);
    v4$528307();
    $$$ct527567.assertEquals((1),handler$528305.counter);
}
exports.testExpression$test=testExpression$test;
testExpression$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testExpression']};};

//MethodDef testPropertyChange at tests.ceylon (40:0-47:0)
function testPropertyChange$test(){
    
    //AttributeDecl p at tests.ceylon (41:4-41:29)
    var p$528308=Property($$$cl527366.String("foo",3),{Value:{t:$$$cl527366.String}});
    
    //MethodDef listener at tests.ceylon (42:4-44:4)
    function listener$528309(prop$528310){
        $$$ct527567.assertEquals($$$cl527366.String("bar",3),prop$528310);
    };listener$528309.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'prop',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],d:['cayla.mvc.test','testPropertyChange','$m','listener']};};
    p$528308.subscribe($$$cl527366.$JsCallable(listener$528309,[{$nm:'prop',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.String}]}}));
    p$528308.setValue($$$cl527366.String("bar",3));
}
exports.testPropertyChange$test=testPropertyChange$test;
testPropertyChange$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testPropertyChange']};};

//MethodDef testComputedObservable at testObservable.ceylon (5:0-24:0)
function testComputedObservable$test(){
    
    //AttributeDecl mode at testObservable.ceylon (6:4-6:32)
    var mode$528311=true;
    function setMode$528311(mode$528312){return mode$528311=mode$528312;};
    
    //AttributeDecl firstName at testObservable.ceylon (7:4-7:38)
    var firstName$528313=Property($$$cl527366.String("dale",4),{Value:{t:$$$cl527366.String}});
    
    //AttributeDecl lastName at testObservable.ceylon (8:4-8:39)
    var lastName$528314=Property($$$cl527366.String("cooper",6),{Value:{t:$$$cl527366.String}});
    
    //AttributeDecl name at testObservable.ceylon (9:4-9:125)
    var name$528315=computed($$$cl527366.$JsCallable((function (){
        return (opt$528316=(mode$528311?$$$cl527366.StringBuilder().appendAll([firstName$528313.getValue().string,$$$cl527366.String(" ",1),lastName$528314.getValue().string]).string:null),opt$528316!==null?opt$528316:$$$cl527366.StringBuilder().appendAll([firstName$528313.getValue().string]).string);
    }),[],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.String}});
    var opt$528316;
    
    //AttributeDecl count at testObservable.ceylon (10:4-10:30)
    var count$528317=(0);
    function setCount$528317(count$528318){return count$528317=count$528318;};
    name$528315.subscribe($$$cl527366.$JsCallable((function (s$528319){
        return (oldcount$528320=count$528317,count$528317=oldcount$528320.successor,oldcount$528320);
    }),[{$nm:'s',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],{Return:{t:$$$cl527366.Integer},Arguments:{t:'T', l:[{t:$$$cl527366.String}]}}));
    var oldcount$528320;
    $$$ct527567.assertEquals($$$cl527366.String("dale cooper",11),name$528315.getValue());
    firstName$528313.setValue($$$cl527366.String("sammy",5));
    $$$ct527567.assertEquals((1),count$528317);
    $$$ct527567.assertEquals($$$cl527366.String("sammy cooper",12),name$528315.getValue());
    mode$528311=false;
    $$$ct527567.assertEquals($$$cl527366.String("sammy cooper",12),name$528315.getValue());
    lastName$528314.setValue($$$cl527366.String("milouze",7));
    $$$ct527567.assertEquals($$$cl527366.String("sammy",5),name$528315.getValue());
    $$$ct527567.assertEquals((2),count$528317);
    firstName$528313.setValue($$$cl527366.String("scooby",6));
    $$$ct527567.assertEquals($$$cl527366.String("scooby",6),name$528315.getValue());
    $$$ct527567.assertEquals((3),count$528317);
}
exports.testComputedObservable$test=testComputedObservable$test;
testComputedObservable$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testComputedObservable']};};

//MethodDef testObserveComputedObservable at testObservable.ceylon (26:0-34:0)
function testObserveComputedObservable$test(){
    
    //AttributeDecl foo at testObservable.ceylon (27:4-27:31)
    var foo$528321=Property($$$cl527366.String("foo",3),{Value:{t:$$$cl527366.String}});
    
    //AttributeDecl bar at testObservable.ceylon (28:4-28:63)
    var bar$528322=computed($$$cl527366.$JsCallable((function (){
        return $$$cl527366.StringBuilder().appendAll([$$$cl527366.String("<bar>",5),foo$528321.getValue().string,$$$cl527366.String("</bar>",6)]).string;
    }),[],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.String}});
    
    //AttributeDecl juu at testObservable.ceylon (29:4-29:63)
    var juu$528323=computed($$$cl527366.$JsCallable((function (){
        return $$$cl527366.StringBuilder().appendAll([$$$cl527366.String("<juu>",5),bar$528322.getValue().string,$$$cl527366.String("</juu>",6)]).string;
    }),[],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.String}});
    $$$ct527567.assertEquals($$$cl527366.String("<juu><bar>foo</bar></juu>",25),juu$528323.getValue());
    foo$528321.setValue($$$cl527366.String("oof",3));
    $$$ct527567.assertEquals($$$cl527366.String("<bar>oof</bar>",14),bar$528322.getValue());
    $$$ct527567.assertEquals($$$cl527366.String("<juu><bar>oof</bar></juu>",25),juu$528323.getValue());
}
exports.testObserveComputedObservable$test=testObserveComputedObservable$test;
testObserveComputedObservable$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testObserveComputedObservable']};};

//MethodDef testComputedObservableTriangle at testObservable.ceylon (36:0-52:0)
function testComputedObservableTriangle$test(){
    
    //AttributeDecl count at testObservable.ceylon (37:4-37:30)
    var count$528324=(0);
    function setCount$528324(count$528325){return count$528324=count$528325;};
    
    //AttributeDecl foo at testObservable.ceylon (38:4-38:31)
    var foo$528326=Property($$$cl527366.String("foo",3),{Value:{t:$$$cl527366.String}});
    
    //AttributeDecl bar at testObservable.ceylon (39:4-39:63)
    var bar$528327=computed($$$cl527366.$JsCallable((function (){
        return $$$cl527366.StringBuilder().appendAll([$$$cl527366.String("<bar>",5),foo$528326.getValue().string,$$$cl527366.String("</bar>",6)]).string;
    }),[],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.String}});
    
    //AttributeDecl juu at testObservable.ceylon (40:4-45:5)
    var juu$528328=(compute$528329=function (){
        (oldcount$528330=count$528324,count$528324=oldcount$528330.successor,oldcount$528330);
        var oldcount$528330;
        return $$$cl527366.StringBuilder().appendAll([$$$cl527366.String("<juu>",5),foo$528326.getValue().string,$$$cl527366.String("</juu><juu>",11),bar$528327.getValue().string,$$$cl527366.String("</juu>",6)]).string;
    },computed(compute$528329,{Value:{t:$$$cl527366.String}}));
    var compute$528329;
    $$$ct527567.assertEquals((0),count$528324);
    $$$ct527567.assertEquals($$$cl527366.String("<juu>foo</juu><juu><bar>foo</bar></juu>",39),juu$528328.getValue());
    $$$ct527567.assertEquals((1),count$528324);
    foo$528326.setValue($$$cl527366.String("oof",3));
    $$$ct527567.assertEquals($$$cl527366.String("<juu>oof</juu><juu><bar>oof</bar></juu>",39),juu$528328.getValue());
    $$$ct527567.assertEquals((3),count$528324);
}
exports.testComputedObservableTriangle$test=testComputedObservableTriangle$test;
testComputedObservableTriangle$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testComputedObservableTriangle']};};

//MethodDef testComputedObservableCycle at testObservable.ceylon (54:0-65:0)
function testComputedObservableCycle$test(){
    
    //AttributeDecl foo at testObservable.ceylon (55:4-55:31)
    var foo$528331=Property($$$cl527366.String("foo",3),{Value:{t:$$$cl527366.String}});
    
    //AttributeDecl exp at testObservable.ceylon (56:4-56:41)
    var exp$528332=$$$cl527366.$JsCallable((function (){
        return $$$cl527366.String("const",5);
    }),[],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}});
    function setExp$528332(exp$528333){return exp$528332=exp$528333;};
    
    //AttributeDecl bar at testObservable.ceylon (57:4-57:62)
    var bar$528334=computed($$$cl527366.$JsCallable((function (){
        return $$$cl527366.StringBuilder().appendAll([exp$528332().string,$$$cl527366.String(" ",1),foo$528331.getValue().string]).string;
    }),[],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.String}});
    
    //AttributeDecl juu at testObservable.ceylon (58:4-58:52)
    var juu$528335=computed($$$cl527366.$JsCallable((function (){
        return $$$cl527366.StringBuilder().appendAll([bar$528334.getValue().string]).string;
    }),[],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.String}});
    exp$528332=$$$cl527366.$JsCallable((function (){
        return juu$528335.getValue();
    }),[/*VALUE Callable paramscom.redhat.ceylon.compiler.typechecker.model.Value*/],{Return:{t:$$$cl527366.String},Arguments:{t:$$$cl527366.Empty}});
    try{
        bar$528334.getValue();
        $$$ct527567.fail();
    }catch(ex$528336){
        if (ex$528336.getT$name === undefined) ex$528336=$$$cl527366.NativeException(ex$528336);
        if($$$cl527366.isOfType(ex$528336,{t:CyclicDependencyException})){}else{throw ex$528336}
    }
}
exports.testComputedObservableCycle$test=testComputedObservableCycle$test;
testComputedObservableCycle$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testComputedObservableCycle']};};

//MethodDef testComputedObservableList at testObservable.ceylon (67:0-84:0)
function testComputedObservableList$test(){
    
    //AttributeDecl list at testObservable.ceylon (68:4-68:41)
    var list$528337=ObservableList({Element:{t:$$$cl527366.String}});
    list$528337.add($$$cl527366.String("aa",2));
    list$528337.add($$$cl527366.String("a",1));
    list$528337.add($$$cl527366.String("bb",2));
    list$528337.add($$$cl527366.String("b",1));
    
    //AttributeDecl filtered at testObservable.ceylon (73:4-73:108)
    var filtered$528338=computed($$$cl527366.$JsCallable((function (){
        return $$$cc527440.LinkedList(list$528337.getValue().$filter($$$cl527366.$JsCallable((function (elem$528339){
            return elem$528339.size.remainder((2)).equals((0));
        }),[{$nm:'elem',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],{Return:{t:$$$cl527366.$Boolean},Arguments:{t:'T', l:[{t:$$$cl527366.String}]}})),{Element:{t:$$$cl527366.String}});
    }),[],{Return:{t:$$$cc527440.LinkedList,a:{Element:{t:$$$cl527366.String}}},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cc527440.LinkedList,a:{Element:{t:$$$cl527366.String}}}});
    
    //AttributeDecl count at testObservable.ceylon (74:4-74:58)
    var count$528340=computed($$$cl527366.$JsCallable((function (){
        return filtered$528338.getValue().size;
    }),[],{Return:{t:$$$cl527366.Integer},Arguments:{t:$$$cl527366.Empty}}),{Value:{t:$$$cl527366.Integer}});
    $$$ct527567.assertEquals($$$cc527440.LinkedList([$$$cl527366.String("aa",2),$$$cl527366.String("bb",2)].reifyCeylonType({Element:{t:$$$cl527366.String},Absent:{t:$$$cl527366.Nothing}}),{Element:{t:$$$cl527366.String}}),filtered$528338.getValue());
    $$$ct527567.assertEquals((2),count$528340.getValue());
    getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("filtered list is ",17),filtered$528338.string]).string);
    getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("count list is ",14),count$528340.string]).string);
    list$528337.add($$$cl527366.String("cc",2));
    $$$ct527567.assertEquals($$$cc527440.LinkedList([$$$cl527366.String("aa",2),$$$cl527366.String("bb",2),$$$cl527366.String("cc",2)].reifyCeylonType({Element:{t:$$$cl527366.String},Absent:{t:$$$cl527366.Nothing}}),{Element:{t:$$$cl527366.String}}),filtered$528338.getValue());
    $$$ct527567.assertEquals((3),count$528340.getValue());
    list$528337.removeElement($$$cl527366.String("aa",2));
    $$$ct527567.assertEquals($$$cc527440.LinkedList([$$$cl527366.String("bb",2),$$$cl527366.String("cc",2)].reifyCeylonType({Element:{t:$$$cl527366.String},Absent:{t:$$$cl527366.Nothing}}),{Element:{t:$$$cl527366.String}}),filtered$528338.getValue());
}
exports.testComputedObservableList$test=testComputedObservableList$test;
testComputedObservableList$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testComputedObservableList']};};

//MethodDef testDiff1 at testLCS.ceylon (4:0-10:0)
function testDiff1$test(){
    
    //AttributeDecl a at testLCS.ceylon (5:4-5:16)
    var a$528341=$$$cl527366.String("",0);
    
    //AttributeDecl b at testLCS.ceylon (6:4-6:17)
    var b$528342=$$$cl527366.String("a",1);
    
    //AttributeDecl i at testLCS.ceylon (7:4-7:35)
    var i$528343=Diff$lcs(a$528341,b$528342,{E:{t:$$$cl527366.Character}});
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(97),$$$cl527366.Tuple(getAdded$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528343.next());
    $$$ct527567.assertEquals($$$cl527366.getFinished(),i$528343.next());
}
exports.testDiff1$test=testDiff1$test;
testDiff1$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testDiff1']};};

//MethodDef testDiff2 at testLCS.ceylon (12:0-18:0)
function testDiff2$test(){
    
    //AttributeDecl a at testLCS.ceylon (13:4-13:17)
    var a$528344=$$$cl527366.String("a",1);
    
    //AttributeDecl b at testLCS.ceylon (14:4-14:16)
    var b$528345=$$$cl527366.String("",0);
    
    //AttributeDecl i at testLCS.ceylon (15:4-15:35)
    var i$528346=Diff$lcs(a$528344,b$528345,{E:{t:$$$cl527366.Character}});
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(97),$$$cl527366.Tuple(getRemoved$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528346.next());
    $$$ct527567.assertEquals($$$cl527366.getFinished(),i$528346.next());
}
exports.testDiff2$test=testDiff2$test;
testDiff2$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testDiff2']};};

//MethodDef testDiff3 at testLCS.ceylon (20:0-26:0)
function testDiff3$test(){
    
    //AttributeDecl a at testLCS.ceylon (21:4-21:17)
    var a$528347=$$$cl527366.String("a",1);
    
    //AttributeDecl b at testLCS.ceylon (22:4-22:17)
    var b$528348=$$$cl527366.String("a",1);
    
    //AttributeDecl i at testLCS.ceylon (23:4-23:35)
    var i$528349=Diff$lcs(a$528347,b$528348,{E:{t:$$$cl527366.Character}});
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(97),$$$cl527366.Tuple(getSame$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528349.next());
    $$$ct527567.assertEquals($$$cl527366.getFinished(),i$528349.next());
}
exports.testDiff3$test=testDiff3$test;
testDiff3$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testDiff3']};};

//MethodDef testDiff4 at testLCS.ceylon (28:0-35:0)
function testDiff4$test(){
    
    //AttributeDecl a at testLCS.ceylon (29:4-29:17)
    var a$528350=$$$cl527366.String("b",1);
    
    //AttributeDecl b at testLCS.ceylon (30:4-30:18)
    var b$528351=$$$cl527366.String("ab",2);
    
    //AttributeDecl i at testLCS.ceylon (31:4-31:35)
    var i$528352=Diff$lcs(a$528350,b$528351,{E:{t:$$$cl527366.Character}});
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(97),$$$cl527366.Tuple(getAdded$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528352.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(98),$$$cl527366.Tuple(getSame$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528352.next());
    $$$ct527567.assertEquals($$$cl527366.getFinished(),i$528352.next());
}
exports.testDiff4$test=testDiff4$test;
testDiff4$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testDiff4']};};

//MethodDef testDiff5 at testLCS.ceylon (37:0-44:0)
function testDiff5$test(){
    
    //AttributeDecl a at testLCS.ceylon (38:4-38:18)
    var a$528353=$$$cl527366.String("ab",2);
    
    //AttributeDecl b at testLCS.ceylon (39:4-39:17)
    var b$528354=$$$cl527366.String("b",1);
    
    //AttributeDecl i at testLCS.ceylon (40:4-40:35)
    var i$528355=Diff$lcs(a$528353,b$528354,{E:{t:$$$cl527366.Character}});
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(97),$$$cl527366.Tuple(getRemoved$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528355.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(98),$$$cl527366.Tuple(getSame$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528355.next());
    $$$ct527567.assertEquals($$$cl527366.getFinished(),i$528355.next());
}
exports.testDiff5$test=testDiff5$test;
testDiff5$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testDiff5']};};

//MethodDef testDiff6 at testLCS.ceylon (46:0-60:0)
function testDiff6$test(){
    
    //AttributeDecl a at testLCS.ceylon (47:4-47:22)
    var a$528356=$$$cl527366.String("abcdef",6);
    
    //AttributeDecl b at testLCS.ceylon (48:4-48:22)
    var b$528357=$$$cl527366.String("a_b_e_",6);
    
    //AttributeDecl i at testLCS.ceylon (49:4-49:35)
    var i$528358=Diff$lcs(a$528356,b$528357,{E:{t:$$$cl527366.Character}});
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(97),$$$cl527366.Tuple(getSame$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(95),$$$cl527366.Tuple(getAdded$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(98),$$$cl527366.Tuple(getSame$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(99),$$$cl527366.Tuple(getRemoved$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(100),$$$cl527366.Tuple(getRemoved$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(95),$$$cl527366.Tuple(getAdded$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(101),$$$cl527366.Tuple(getSame$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(102),$$$cl527366.Tuple(getRemoved$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.Tuple($$$cl527366.Character(95),$$$cl527366.Tuple(getAdded$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[{t:$$$cl527366.Character},{t:Change$lcs}]},First:{t:$$$cl527366.Character}}),i$528358.next());
    $$$ct527567.assertEquals($$$cl527366.getFinished(),i$528358.next());
}
exports.testDiff6$test=testDiff6$test;
testDiff6$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testDiff6']};};

//MethodDef testQuerySelectorAll at testDom.ceylon (4:0-11:0)
function testQuerySelectorAll$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528359){
        
        //AttributeDecl pre at testDom.ceylon (6:8-6:46)
        var pre$528360=fragment$528359.addElement($$$cl527366.String("pre",3));
        pre$528360.addClass($$$cl527366.String("foo",3));
        
        //AttributeDecl nodes at testDom.ceylon (8:8-8:46)
        var nodes$528361=querySelectorAll$dom($$$cl527366.String(".foo",4));
        $$$ct527567.assertEquals($$$cl527366.LazyList([pre$528360].reifyCeylonType({Element:{t:DomNode$dom},Absent:{t:$$$cl527366.Nothing}}),{Element:{t:DomNode$dom}}),$$$cl527366.LazyList(nodes$528361,{Element:{t:DomNode$dom}}));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testQuerySelectorAll$test=testQuerySelectorAll$test;
testQuerySelectorAll$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testQuerySelectorAll']};};

//MethodDef testQuerySelectorAllWrap at testDom.ceylon (13:0-18:0)
function testQuerySelectorAllWrap$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528362){
        
        //AttributeDecl nodes at testDom.ceylon (15:8-15:46)
        var nodes$528363=querySelectorAll$dom($$$cl527366.String("body",4));
        $$$ct527567.assertEquals((1),nodes$528363.size);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testQuerySelectorAllWrap$test=testQuerySelectorAllWrap$test;
testQuerySelectorAllWrap$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testQuerySelectorAllWrap']};};

//MethodDef testMatchesSelector at testDom.ceylon (20:0-33:0)
function testMatchesSelector$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528364){
        
        //AttributeDecl pre at testDom.ceylon (22:8-22:46)
        var pre$528365=fragment$528364.addElement($$$cl527366.String("pre",3));
        pre$528365.addClass($$$cl527366.String("foo",3));
        $$$ct527567.assertTrue(pre$528365.matchesSelector($$$cl527366.String("pre",3)));
        $$$ct527567.assertTrue(pre$528365.matchesSelector($$$cl527366.String(".foo",4)));
        $$$ct527567.assertTrue(pre$528365.matchesSelector($$$cl527366.String("pre.foo",7)));
        $$$ct527567.assertFalse(pre$528365.matchesSelector($$$cl527366.String("div",3)));
        $$$ct527567.assertFalse(pre$528365.matchesSelector($$$cl527366.String("div.foo",7)));
        $$$ct527567.assertFalse(pre$528365.matchesSelector($$$cl527366.String("pre.bar",7)));
        $$$ct527567.assertFalse(pre$528365.matchesSelector($$$cl527366.String(".bar",4)));
        $$$ct527567.assertFalse(pre$528365.matchesSelector($$$cl527366.String("div.bar",7)));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testMatchesSelector$test=testMatchesSelector$test;
testMatchesSelector$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testMatchesSelector']};};

//MethodDef testEventDelegation at testDom.ceylon (35:0-55:0)
function testEventDelegation$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528366){
        
        //AttributeDecl ul at testDom.ceylon (37:8-37:46)
        var ul$528367=fragment$528366.addElement($$$cl527366.String("ul",2));
        
        //AttributeDecl li at testDom.ceylon (38:8-38:40)
        var li$528368=ul$528367.addElement($$$cl527366.String("li",2));
        
        //AttributeDecl div at testDom.ceylon (39:8-39:42)
        var div$528369=li$528368.addElement($$$cl527366.String("div",3));
        
        //AttributeDecl count at testDom.ceylon (40:8-40:34)
        var count$528370=(0);
        function setCount$528370(count$528371){return count$528370=count$528371;};
        
        //MethodDef f at testDom.ceylon (41:8-43:8)
        function f$528372(event$528373){
            (oldcount$528374=count$528370,count$528370=oldcount$528374.successor,oldcount$528374);
            var oldcount$528374;
        };f$528372.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['cayla.mvc.test','testEventDelegation','$m','3','$m','f']};};
        li$528368.addEventHandler($$$cl527366.String("click",5),$$$cl527366.$JsCallable(f$528372,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}),$$$cl527366.String(".foo",4));
        ul$528367.click();
        $$$ct527567.assertEquals((0),count$528370);
        li$528368.click();
        $$$ct527567.assertEquals((0),count$528370);
        div$528369.click();
        $$$ct527567.assertEquals((0),count$528370);
        div$528369.addClass($$$cl527366.String("foo",3));
        div$528369.click();
        $$$ct527567.assertEquals((1),count$528370);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testEventDelegation$test=testEventDelegation$test;
testEventDelegation$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testEventDelegation']};};

//MethodDef testInsertBefore at testDom.ceylon (57:0-81:0)
function testInsertBefore$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528375){
        
        //AttributeDecl div at testDom.ceylon (59:8-59:48)
        var div$528376=fragment$528375.addElement($$$cl527366.String("div",3));
        
        //AttributeDecl span at testDom.ceylon (60:8-60:45)
        var span$528377=div$528376.addElement($$$cl527366.String("span",4));
        
        //AttributeDecl h1 at testDom.ceylon (61:8-61:34)
        var h1$528378=element$dom($$$cl527366.String("h1",2));
        div$528376.insertBefore(h1$528378,span$528377);
        
        //AttributeDecl children at testDom.ceylon (63:8-63:54)
        var children$528379=div$528376.getChildren().sequence;
        function setChildren$528379(children$528380){return children$528379=children$528380;};
        $$$ct527567.assertEquals((2),children$528379.size);
        $$$ct527567.assertEquals(h1$528378,children$528379.$get((0)));
        $$$ct527567.assertEquals(span$528377,children$528379.$get((1)));
        
        //AttributeDecl h2 at testDom.ceylon (67:8-67:34)
        var h2$528381=element$dom($$$cl527366.String("h2",2));
        div$528376.insertBefore(h2$528381);
        children$528379=div$528376.getChildren().sequence;
        $$$ct527567.assertEquals((3),children$528379.size);
        $$$ct527567.assertEquals(h1$528378,children$528379.$get((0)));
        $$$ct527567.assertEquals(span$528377,children$528379.$get((1)));
        $$$ct527567.assertEquals(h2$528381,children$528379.$get((2)));
        div$528376.insertBefore(span$528377);
        children$528379=div$528376.getChildren().sequence;
        $$$ct527567.assertEquals((3),children$528379.size);
        $$$ct527567.assertEquals(h1$528378,children$528379.$get((0)));
        $$$ct527567.assertEquals(h2$528381,children$528379.$get((1)));
        $$$ct527567.assertEquals(span$528377,children$528379.$get((2)));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testInsertBefore$test=testInsertBefore$test;
testInsertBefore$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testInsertBefore']};};

//ClassDef Person at testBindings.ceylon (12:0-13:0)
function Person$test(firstName, lastName, $$person){
    $init$Person$test();
    if ($$person===undefined)$$person=new Person$test.$$;
    $$person.firstName_=firstName;
    $$person.lastName_=lastName;
    return $$person;
}
Person$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'firstName',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$an:function(){return[$$$cl527366.shared()];}},{$nm:'lastName',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$an:function(){return[$$$cl527366.shared()];}}],d:['cayla.mvc.test','Person']};};
function $init$Person$test(){
    if (Person$test.$$===undefined){
        $$$cl527366.initTypeProto(Person$test,'cayla.mvc.test::Person',$$$cl527366.Basic);
        (function($$person){
            $$$cl527366.defineAttr($$person,'firstName',function(){return this.firstName_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$cont:Person$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','Person','$at','firstName']};});
            $$$cl527366.defineAttr($$person,'lastName',function(){return this.lastName_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$cont:Person$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','Person','$at','lastName']};});
        })(Person$test.$$.prototype);
    }
    return Person$test;
}
exports.$init$Person$test=$init$Person$test;
$init$Person$test();

//ClassDef Group at testBindings.ceylon (15:0-16:0)
function Group$test(users, $$group){
    $init$Group$test();
    if ($$group===undefined)$$group=new Group$test.$$;
    $$group.users_=users;
    return $$group;
}
Group$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'users',$mt:'prm',$t:{t:ObservableList,a:{Element:{t:Person$test}}},$an:function(){return[$$$cl527366.shared()];}}],d:['cayla.mvc.test','Group']};};
function $init$Group$test(){
    if (Group$test.$$===undefined){
        $$$cl527366.initTypeProto(Group$test,'cayla.mvc.test::Group',$$$cl527366.Basic);
        (function($$group){
            $$$cl527366.defineAttr($$group,'users',function(){return this.users_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ObservableList,a:{Element:{t:Person$test}}},$cont:Group$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','Group','$at','users']};});
        })(Group$test.$$.prototype);
    }
    return Group$test;
}
exports.$init$Group$test=$init$Group$test;
$init$Group$test();

//ClassDef Car at testBindings.ceylon (18:0-19:0)
function Car$test(name, owner, $$car){
    $init$Car$test();
    if ($$car===undefined)$$car=new Car$test.$$;
    $$car.name_=name;
    $$car.owner_=owner;
    return $$car;
}
Car$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$an:function(){return[$$$cl527366.shared()];}},{$nm:'owner',$mt:'prm',$t:{t:Property,a:{Value:{t:Person$test}}},$an:function(){return[$$$cl527366.shared()];}}],d:['cayla.mvc.test','Car']};};
function $init$Car$test(){
    if (Car$test.$$===undefined){
        $$$cl527366.initTypeProto(Car$test,'cayla.mvc.test::Car',$$$cl527366.Basic);
        (function($$car){
            $$$cl527366.defineAttr($$car,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$cont:Car$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','Car','$at','name']};});
            $$$cl527366.defineAttr($$car,'owner',function(){return this.owner_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:Person$test}}},$cont:Car$test,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','Car','$at','owner']};});
        })(Car$test.$$.prototype);
    }
    return Car$test;
}
exports.$init$Car$test=$init$Car$test;
$init$Car$test();

//AttributeDecl carNameExpr at testBindings.ceylon (21:0-21:100)
var carNameExpr$528382$test;function $valinit$carNameExpr$528382$test(){if (carNameExpr$528382$test===undefined)carNameExpr$528382$test=ClassExpression$expression({Type:{t:Car$test}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('name',Car$test.$$.prototype.$prop$getName,{Container:{t:Car$test},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:$$$cl527366.String}}}}),{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}}});return carNameExpr$528382$test;};$valinit$carNameExpr$528382$test();
function getCarNameExpr$test(){return $valinit$carNameExpr$528382$test();}
var $prop$getCarNameExpr$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:AttributeExpression$expression,a:{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}},Source:{t:Car$test}}},d:['cayla.mvc.test','carNameExpr']};}};
exports.$prop$getCarNameExpr$test=$prop$getCarNameExpr$test;
$prop$getCarNameExpr$test.get=function(){return carNameExpr$528382$test};

//AttributeDecl carNameBinding at testBindings.ceylon (22:0-22:56)
var carNameBinding$528383$test;function $valinit$carNameBinding$528383$test(){if (carNameBinding$528383$test===undefined)carNameBinding$528383$test=getCarNameExpr$test().bindTo(getBinders().val);return carNameBinding$528383$test;};$valinit$carNameBinding$528383$test();
function getCarNameBinding$test(){return $valinit$carNameBinding$528383$test();}
exports.getCarNameBinding$test=getCarNameBinding$test;
var $prop$getCarNameBinding$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Binding$view},d:['cayla.mvc.test','carNameBinding']};}};
exports.$prop$getCarNameBinding$test=$prop$getCarNameBinding$test;
$prop$getCarNameBinding$test.get=getCarNameBinding$test;
getCarNameBinding$test.$$metamodel$$=$prop$getCarNameBinding$test.$$metamodel$$;

//AttributeDecl carOwnerExpr at testBindings.ceylon (23:0-23:103)
var carOwnerExpr$528384$test;function $valinit$carOwnerExpr$528384$test(){if (carOwnerExpr$528384$test===undefined)carOwnerExpr$528384$test=ClassExpression$expression({Type:{t:Car$test}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('owner',Car$test.$$.prototype.$prop$getOwner,{Container:{t:Car$test},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:Person$test}}}}),{Value:{t:Property,a:{Value:{t:Person$test}}}});return carOwnerExpr$528384$test;};$valinit$carOwnerExpr$528384$test();
function getCarOwnerExpr$test(){return $valinit$carOwnerExpr$528384$test();}
var $prop$getCarOwnerExpr$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:AttributeExpression$expression,a:{Value:{t:Property,a:{Value:{t:Person$test}}},Source:{t:Car$test}}},d:['cayla.mvc.test','carOwnerExpr']};}};
exports.$prop$getCarOwnerExpr$test=$prop$getCarOwnerExpr$test;
$prop$getCarOwnerExpr$test.get=function(){return carOwnerExpr$528384$test};

//AttributeDecl carOwnerBinding at testBindings.ceylon (24:0-24:69)
var carOwnerBinding$528385$test;function $valinit$carOwnerBinding$528385$test(){if (carOwnerBinding$528385$test===undefined)carOwnerBinding$528385$test=getCarOwnerExpr$test().bindTo(getBinders().$with({Value:{t:Person$test}}));return carOwnerBinding$528385$test;};$valinit$carOwnerBinding$528385$test();
function getCarOwnerBinding$test(){return $valinit$carOwnerBinding$528385$test();}
exports.getCarOwnerBinding$test=getCarOwnerBinding$test;
var $prop$getCarOwnerBinding$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Binding$view},d:['cayla.mvc.test','carOwnerBinding']};}};
exports.$prop$getCarOwnerBinding$test=$prop$getCarOwnerBinding$test;
$prop$getCarOwnerBinding$test.get=getCarOwnerBinding$test;
getCarOwnerBinding$test.$$metamodel$$=$prop$getCarOwnerBinding$test.$$metamodel$$;

//AttributeDecl firstNameExpr at testBindings.ceylon (25:0-25:116)
var firstNameExpr$528386$test;function $valinit$firstNameExpr$528386$test(){if (firstNameExpr$528386$test===undefined)firstNameExpr$528386$test=ClassExpression$expression({Type:{t:Person$test}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('firstName',Person$test.$$.prototype.$prop$getFirstName,{Container:{t:Person$test},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:$$$cl527366.String}}}}),{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}}});return firstNameExpr$528386$test;};$valinit$firstNameExpr$528386$test();
function getFirstNameExpr$test(){return $valinit$firstNameExpr$528386$test();}
var $prop$getFirstNameExpr$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:AttributeExpression$expression,a:{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}},Source:{t:Person$test}}},d:['cayla.mvc.test','firstNameExpr']};}};
exports.$prop$getFirstNameExpr$test=$prop$getFirstNameExpr$test;
$prop$getFirstNameExpr$test.get=function(){return firstNameExpr$528386$test};

//AttributeDecl firstNameBinding at testBindings.ceylon (26:0-26:60)
var firstNameBinding$528387$test;function $valinit$firstNameBinding$528387$test(){if (firstNameBinding$528387$test===undefined)firstNameBinding$528387$test=getFirstNameExpr$test().bindTo(getBinders().val);return firstNameBinding$528387$test;};$valinit$firstNameBinding$528387$test();
function getFirstNameBinding$test(){return $valinit$firstNameBinding$528387$test();}
exports.getFirstNameBinding$test=getFirstNameBinding$test;
var $prop$getFirstNameBinding$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Binding$view},d:['cayla.mvc.test','firstNameBinding']};}};
exports.$prop$getFirstNameBinding$test=$prop$getFirstNameBinding$test;
$prop$getFirstNameBinding$test.get=getFirstNameBinding$test;
getFirstNameBinding$test.$$metamodel$$=$prop$getFirstNameBinding$test.$$metamodel$$;

//AttributeDecl lastNameExpr at testBindings.ceylon (27:0-27:114)
var lastNameExpr$528388$test;function $valinit$lastNameExpr$528388$test(){if (lastNameExpr$528388$test===undefined)lastNameExpr$528388$test=ClassExpression$expression({Type:{t:Person$test}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('lastName',Person$test.$$.prototype.$prop$getLastName,{Container:{t:Person$test},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:$$$cl527366.String}}}}),{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}}});return lastNameExpr$528388$test;};$valinit$lastNameExpr$528388$test();
function getLastNameExpr$test(){return $valinit$lastNameExpr$528388$test();}
var $prop$getLastNameExpr$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:AttributeExpression$expression,a:{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}},Source:{t:Person$test}}},d:['cayla.mvc.test','lastNameExpr']};}};
exports.$prop$getLastNameExpr$test=$prop$getLastNameExpr$test;
$prop$getLastNameExpr$test.get=function(){return lastNameExpr$528388$test};

//AttributeDecl lastNameBinding at testBindings.ceylon (28:0-28:58)
var lastNameBinding$528389$test;function $valinit$lastNameBinding$528389$test(){if (lastNameBinding$528389$test===undefined)lastNameBinding$528389$test=getLastNameExpr$test().bindTo(getBinders().val);return lastNameBinding$528389$test;};$valinit$lastNameBinding$528389$test();
function getLastNameBinding$test(){return $valinit$lastNameBinding$528389$test();}
exports.getLastNameBinding$test=getLastNameBinding$test;
var $prop$getLastNameBinding$test={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Binding$view},d:['cayla.mvc.test','lastNameBinding']};}};
exports.$prop$getLastNameBinding$test=$prop$getLastNameBinding$test;
$prop$getLastNameBinding$test.get=getLastNameBinding$test;
getLastNameBinding$test.$$metamodel$$=$prop$getLastNameBinding$test.$$metamodel$$;

//MethodDef testStringPropertyBinding at testBindings.ceylon (30:0-43:0)
function testStringPropertyBinding$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528390){
        
        //AttributeDecl element at testBindings.ceylon (32:8-35:9)
        var element$528391=(name$528392=$$$cl527366.String("foo",3),bindings$528393=getFirstNameBinding$test(),InputText$view(name$528392,undefined,undefined,bindings$528393,undefined));
        var name$528392,bindings$528393;
        
        //AttributeDecl user at testBindings.ceylon (36:8-36:66)
        var user$528394=Person$test(Property($$$cl527366.String("julien",6),{Value:{t:$$$cl527366.String}}),Property($$$cl527366.String("viet",4),{Value:{t:$$$cl527366.String}}));
        
        //AttributeDecl node at testBindings.ceylon (37:8-37:41)
        var node$528395=element$528391.$bind(user$528394);
        
        //AttributeDecl added at testBindings.ceylon (38:8-38:47)
        var added$528396=fragment$528390.addChild(node$528395);
        $$$ct527567.assertEquals($$$cl527366.String("julien",6),added$528396.getValue());
        user$528394.firstName.setValue($$$cl527366.String("whatever",8));
        $$$ct527567.assertEquals($$$cl527366.String("whatever",8),added$528396.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testStringPropertyBinding$test=testStringPropertyBinding$test;
testStringPropertyBinding$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testStringPropertyBinding']};};

//MethodDef testWith at testBindings.ceylon (45:0-66:0)
function testWith$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528397){
        
        //AttributeDecl view at testBindings.ceylon (47:8-57:9)
        var view$528398=(bindings$528399=getCarOwnerBinding$test(),content$528400=[(bindings$528401=getFirstNameBinding$test(),name$528402=$$$cl527366.String("firstName",9),InputText$view(name$528402,undefined,undefined,bindings$528401,undefined)),(bindings$528403=getLastNameBinding$test(),name$528404=$$$cl527366.String("lastName",8),InputText$view(name$528404,undefined,undefined,bindings$528403,undefined))].reifyCeylonType({Element:{t:InputText$view},Absent:{t:$$$cl527366.Null}}),Div$view(undefined,undefined,bindings$528399,content$528400));
        var bindings$528399,content$528400,bindings$528401,name$528402,bindings$528403,name$528404;
        
        //AttributeDecl julien at testBindings.ceylon (58:8-58:68)
        var julien$528405=Person$test(Property($$$cl527366.String("julien",6),{Value:{t:$$$cl527366.String}}),Property($$$cl527366.String("viet",4),{Value:{t:$$$cl527366.String}}));
        
        //AttributeDecl clio at testBindings.ceylon (59:8-59:58)
        var clio$528406=Car$test(Property($$$cl527366.String("clio",4),{Value:{t:$$$cl527366.String}}),Property(julien$528405,{Value:{t:Person$test}}));
        
        //AttributeDecl dom at testBindings.ceylon (60:8-60:37)
        var dom$528407=view$528398.$bind(clio$528406);
        //assert at testBindings.ceylon (61:8-61:62)
        var firstNameNode$528408;
        if (!((firstNameNode$528408=dom$528407.getChildren().first)!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists firstNameNode = dom.getChildren().first\' at testBindings.ceylon (61:14-61:61)"),'61:8-61:62','testBindings.ceylon'); }
        //assert at testBindings.ceylon (62:8-62:66)
        var lastNameNode$528409;
        if (!((lastNameNode$528409=dom$528407.getChildren().rest.first)!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists lastNameNode = dom.getChildren().rest.first\' at testBindings.ceylon (62:14-62:65)"),'62:8-62:66','testBindings.ceylon'); }
        $$$ct527567.assertEquals($$$cl527366.String("julien",6),firstNameNode$528408.getValue());
        $$$ct527567.assertEquals($$$cl527366.String("viet",4),lastNameNode$528409.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testWith$test=testWith$test;
testWith$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testWith']};};

//MethodDef testForEach at testBindings.ceylon (68:0-102:0)
function testForEach$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528410){
        
        //AttributeDecl a at testBindings.ceylon (71:8-71:111)
        var a$528411=ClassExpression$expression({Type:{t:Group$test}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('users',Group$test.$$.prototype.$prop$getUsers,{Container:{t:Group$test},Set:{t:$$$cl527366.Nothing},Get:{t:ObservableList,a:{Element:{t:Person$test}}}}),{Value:{t:ObservableList,a:{Element:{t:Person$test}}}});
        
        //AttributeDecl b at testBindings.ceylon (72:8-72:53)
        var b$528412=a$528411.bindTo(getBinders().foreach({Value:{t:Person$test}}));
        
        //AttributeDecl users at testBindings.ceylon (73:8-73:63)
        var users$528413=ObservableList({Element:{t:Person$test}});
        
        //AttributeDecl foo at testBindings.ceylon (74:8-74:58)
        var foo$528414=Person$test(Property($$$cl527366.String("foo",3),{Value:{t:$$$cl527366.String}}),Property($$$cl527366.String("",0),{Value:{t:$$$cl527366.String}}));
        users$528413.add(foo$528414);
        
        //AttributeDecl bar at testBindings.ceylon (76:8-76:58)
        var bar$528415=Person$test(Property($$$cl527366.String("bar",3),{Value:{t:$$$cl527366.String}}),Property($$$cl527366.String("",0),{Value:{t:$$$cl527366.String}}));
        users$528413.add(bar$528415);
        
        //AttributeDecl group at testBindings.ceylon (78:8-78:34)
        var group$528416=Group$test(users$528413);
        
        //AttributeDecl element at testBindings.ceylon (79:8-84:9)
        var element$528417=(bindings$528418=b$528412,content$528419=[(content$528420=[(name$528421=$$$cl527366.String("foo",3),bindings$528422=getFirstNameBinding$test(),InputText$view(name$528421,undefined,undefined,bindings$528422,undefined))].reifyCeylonType({Element:{t:InputText$view},Absent:{t:$$$cl527366.Null}}),Li$view(undefined,undefined,undefined,content$528420))].reifyCeylonType({Element:{t:Li$view},Absent:{t:$$$cl527366.Null}}),Ul$view(undefined,undefined,bindings$528418,content$528419));
        var bindings$528418,content$528419,content$528420,name$528421,bindings$528422;
        
        //AttributeDecl node at testBindings.ceylon (85:8-85:42)
        var node$528423=element$528417.$bind(group$528416);
        
        //AttributeDecl added at testBindings.ceylon (86:8-86:47)
        var added$528424=fragment$528410.addChild(node$528423);
        //assert at testBindings.ceylon (87:8-87:56)
        var fooLi$528425;
        if (!((fooLi$528425=added$528424.getChildren().first)!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists fooLi = added.getChildren().first\' at testBindings.ceylon (87:14-87:55)"),'87:8-87:56','testBindings.ceylon'); }
        $$$ct527567.assertEquals((1),fooLi$528425.getChildren().size);
        //assert at testBindings.ceylon (89:8-89:59)
        var fooInput$528426;
        if (!((fooInput$528426=fooLi$528425.getChildren().first)!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists fooInput = fooLi.getChildren().first\' at testBindings.ceylon (89:14-89:58)"),'89:8-89:59','testBindings.ceylon'); }
        fooInput$528426.setValue($$$cl527366.String("foo_changed",11));
        fooInput$528426.dispatchEvent($$$cl527366.String("keyup",5));
        $$$ct527567.assertEquals($$$cl527366.String("foo_changed",11),foo$528414.firstName.getValue());
        
        //AttributeDecl juu at testBindings.ceylon (93:8-93:58)
        var juu$528427=Person$test(Property($$$cl527366.String("juu",3),{Value:{t:$$$cl527366.String}}),Property($$$cl527366.String("",0),{Value:{t:$$$cl527366.String}}));
        users$528413.add(juu$528427);
        $$$ct527567.assertEquals((3),added$528424.getChildren().size);
        users$528413.removeElement(bar$528415);
        $$$ct527567.assertEquals((2),added$528424.getChildren().size);
        users$528413.clear();
        $$$ct527567.assertEquals((0),added$528424.getChildren().size);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testForEach$test=testForEach$test;
testForEach$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testForEach']};};

//MethodDef testResolvePropertyInHierachy at testBindings.ceylon (104:0-119:0)
function testResolvePropertyInHierachy$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528428){
        
        //AttributeDecl view at testBindings.ceylon (106:8-112:9)
        var view$528429=(bindings$528430=getCarOwnerBinding$test(),content$528431=[(bindings$528432=getCarNameBinding$test(),name$528433=$$$cl527366.String("carName",7),InputText$view(name$528433,undefined,undefined,bindings$528432,undefined))].reifyCeylonType({Element:{t:InputText$view},Absent:{t:$$$cl527366.Null}}),Div$view(undefined,undefined,bindings$528430,content$528431));
        var bindings$528430,content$528431,bindings$528432,name$528433;
        
        //AttributeDecl julien at testBindings.ceylon (113:8-113:68)
        var julien$528434=Person$test(Property($$$cl527366.String("julien",6),{Value:{t:$$$cl527366.String}}),Property($$$cl527366.String("viet",4),{Value:{t:$$$cl527366.String}}));
        
        //AttributeDecl clio at testBindings.ceylon (114:8-114:58)
        var clio$528435=Car$test(Property($$$cl527366.String("clio",4),{Value:{t:$$$cl527366.String}}),Property(julien$528434,{Value:{t:Person$test}}));
        
        //AttributeDecl dom at testBindings.ceylon (115:8-115:37)
        var dom$528436=view$528429.$bind(clio$528435);
        //assert at testBindings.ceylon (116:8-116:62)
        var firstNameNode$528437;
        if (!((firstNameNode$528437=dom$528436.getChildren().first)!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists firstNameNode = dom.getChildren().first\' at testBindings.ceylon (116:14-116:61)"),'116:8-116:62','testBindings.ceylon'); }
        $$$ct527567.assertEquals($$$cl527366.String("clio",4),firstNameNode$528437.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testResolvePropertyInHierachy$test=testResolvePropertyInHierachy$test;
testResolvePropertyInHierachy$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testResolvePropertyInHierachy']};};

//MethodDef testResolveHandlerInHierachy at testBindings.ceylon (121:0-144:0)
function testResolveHandlerInHierachy$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528438){
        
        //ClassDef Parent at testBindings.ceylon (123:8-127:8)
        function Parent$528439(child, count, $$parent$528439){
            $init$Parent$528439();
            if ($$parent$528439===undefined)$$parent$528439=new Parent$528439.$$;
            $$parent$528439.child_=child;
            if(count===undefined){count=(0);}
            $$parent$528439.count_=count;
            return $$parent$528439;
        }
        Parent$528439.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'child',$mt:'prm',$t:{t:Property,a:{Value:{t:Child$528440}}},$an:function(){return[$$$cl527366.shared()];}},{$nm:'count',$mt:'prm',$def:1,$t:{t:$$$cl527366.Integer},$an:function(){return[$$$cl527366.shared(),$$$cl527366.variable()];}}],d:['cayla.mvc.test','testResolveHandlerInHierachy','$m','4','$c','Parent']};};
        function $init$Parent$528439(){
            if (Parent$528439.$$===undefined){
                $$$cl527366.initTypeProto(Parent$528439,'cayla.mvc.test::testResolveHandlerInHierachy.4.Parent',$$$cl527366.Basic);
                (function($$parent$528439){
                    
                    //MethodDef foo at testBindings.ceylon (124:12-126:12)
                    $$parent$528439.foo=function foo(){
                        var $$parent$528439=this;
                        (oldcount$528441=$$parent$528439.count,$$parent$528439.count=oldcount$528441.successor,oldcount$528441);
                        var oldcount$528441;
                    };$$parent$528439.foo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:Parent$528439,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','testResolveHandlerInHierachy','$m','4','$c','Parent','$m','foo']};};
                    $$$cl527366.defineAttr($$parent$528439,'child',function(){return this.child_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:Child$528440}}},$cont:Parent$528439,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','testResolveHandlerInHierachy','$m','4','$c','Parent','$at','child']};});
                    $$$cl527366.defineAttr($$parent$528439,'count',function(){return this.count_;},function(Parent$528442){return this.count_=Parent$528442;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Parent$528439,$an:function(){return[$$$cl527366.shared(),$$$cl527366.variable()];},d:['cayla.mvc.test','testResolveHandlerInHierachy','$m','4','$c','Parent','$at','count']};});
                })(Parent$528439.$$.prototype);
            }
            return Parent$528439;
        }
        $init$Parent$528439();
        
        //ClassDef Child at testBindings.ceylon (128:8-129:8)
        function Child$528440($$child$528440){
            $init$Child$528440();
            if ($$child$528440===undefined)$$child$528440=new Child$528440.$$;
            return $$child$528440;
        }
        Child$528440.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],d:['cayla.mvc.test','testResolveHandlerInHierachy','$m','4','$c','Child']};};
        function $init$Child$528440(){
            if (Child$528440.$$===undefined){
                $$$cl527366.initTypeProto(Child$528440,'cayla.mvc.test::testResolveHandlerInHierachy.4.Child',$$$cl527366.Basic);
            }
            return Child$528440;
        }
        $init$Child$528440();
        
        //AttributeDecl view at testBindings.ceylon (130:8-135:9)
        var view$528443=(bindings$528444=ClassExpression$expression({Type:{t:Parent$528439}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('child',Parent$528439.$$.prototype.$prop$getChild,{Container:{t:Parent$528439},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:Child$528440}}}}),{Value:{t:Property,a:{Value:{t:Child$528440}}}}).bindTo(getBinders().$with({Value:{t:Child$528440}})),content$528445=[(bindings$528446=ClassExpression$expression({Type:{t:Parent$528439}}).method($$$cl527366.AppliedMethod$meta$model(Parent$528439.$$.prototype.foo,undefined,{Container:{t:Parent$528439},Type:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}),{Arguments:{t:$$$cl527366.Empty}}).bindTo(getBinders().click({Source:{t:$$$cl527366.Nothing}})),Button$view(undefined,undefined,undefined,bindings$528446,undefined))].reifyCeylonType({Element:{t:Button$view},Absent:{t:$$$cl527366.Null}}),Div$view(undefined,undefined,bindings$528444,content$528445));
        var bindings$528444,content$528445,bindings$528446;
        
        //AttributeDecl child at testBindings.ceylon (136:8-136:29)
        var child$528447=Child$528440();
        
        //AttributeDecl parent at testBindings.ceylon (137:8-137:47)
        var parent$528448=Parent$528439(Property(child$528447,{Value:{t:Child$528440}}));
        
        //AttributeDecl dom at testBindings.ceylon (138:8-138:39)
        var dom$528449=view$528443.$bind(parent$528448);
        //assert at testBindings.ceylon (139:8-139:58)
        var clickNode$528450;
        if (!((clickNode$528450=dom$528449.getChildren().first)!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists clickNode = dom.getChildren().first\' at testBindings.ceylon (139:14-139:57)"),'139:8-139:58','testBindings.ceylon'); }
        $$$ct527567.assertEquals((0),parent$528448.count);
        clickNode$528450.click();
        $$$ct527567.assertEquals((1),parent$528448.count);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testResolveHandlerInHierachy$test=testResolveHandlerInHierachy$test;
testResolveHandlerInHierachy$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testResolveHandlerInHierachy']};};

//MethodDef testResolveListenerInHierachy at testBindings.ceylon (146:0-171:0)
function testResolveListenerInHierachy$test(){
    withFragment$test($$$cl527366.$JsCallable((function (fragment$528451){
        
        //ClassDef Parent at testBindings.ceylon (148:8-154:8)
        function Parent$528452(child, count, $$parent$528452){
            $init$Parent$528452();
            if ($$parent$528452===undefined)$$parent$528452=new Parent$528452.$$;
            $$parent$528452.child_=child;
            if(count===undefined){count=(0);}
            $$parent$528452.count_=count;
            return $$parent$528452;
        }
        Parent$528452.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'child',$mt:'prm',$t:{t:Property,a:{Value:{t:Child$528453}}},$an:function(){return[$$$cl527366.shared()];}},{$nm:'count',$mt:'prm',$def:1,$t:{t:$$$cl527366.Integer},$an:function(){return[$$$cl527366.shared(),$$$cl527366.variable()];}}],d:['cayla.mvc.test','testResolveListenerInHierachy','$m','5','$c','Parent']};};
        function $init$Parent$528452(){
            if (Parent$528452.$$===undefined){
                $$$cl527366.initTypeProto(Parent$528452,'cayla.mvc.test::testResolveListenerInHierachy.5.Parent',$$$cl527366.Basic);
                (function($$parent$528452){
                    
                    //MethodDef foo at testBindings.ceylon (149:12-153:12)
                    $$parent$528452.foo=function foo(c$528454){
                        var $$parent$528452=this;
                        if(c$528454.equals($$parent$528452.child.getValue())){
                            (oldcount$528455=$$parent$528452.count,$$parent$528452.count=oldcount$528455.successor,oldcount$528455);
                            var oldcount$528455;
                        }
                    };$$parent$528452.foo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:Child$528453},$an:function(){return[];}}],$cont:Parent$528452,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','testResolveListenerInHierachy','$m','5','$c','Parent','$m','foo']};};
                    $$$cl527366.defineAttr($$parent$528452,'child',function(){return this.child_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Property,a:{Value:{t:Child$528453}}},$cont:Parent$528452,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.test','testResolveListenerInHierachy','$m','5','$c','Parent','$at','child']};});
                    $$$cl527366.defineAttr($$parent$528452,'count',function(){return this.count_;},function(Parent$528456){return this.count_=Parent$528456;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Parent$528452,$an:function(){return[$$$cl527366.shared(),$$$cl527366.variable()];},d:['cayla.mvc.test','testResolveListenerInHierachy','$m','5','$c','Parent','$at','count']};});
                })(Parent$528452.$$.prototype);
            }
            return Parent$528452;
        }
        $init$Parent$528452();
        
        //ClassDef Child at testBindings.ceylon (155:8-156:8)
        function Child$528453($$child$528453){
            $init$Child$528453();
            if ($$child$528453===undefined)$$child$528453=new Child$528453.$$;
            return $$child$528453;
        }
        Child$528453.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],d:['cayla.mvc.test','testResolveListenerInHierachy','$m','5','$c','Child']};};
        function $init$Child$528453(){
            if (Child$528453.$$===undefined){
                $$$cl527366.initTypeProto(Child$528453,'cayla.mvc.test::testResolveListenerInHierachy.5.Child',$$$cl527366.Basic);
            }
            return Child$528453;
        }
        $init$Child$528453();
        
        //AttributeDecl view at testBindings.ceylon (157:8-162:9)
        var view$528457=(bindings$528458=ClassExpression$expression({Type:{t:Parent$528452}}).attribute($$$cl527366.$init$AppliedAttribute$meta$model()('child',Parent$528452.$$.prototype.$prop$getChild,{Container:{t:Parent$528452},Set:{t:$$$cl527366.Nothing},Get:{t:Property,a:{Value:{t:Child$528453}}}}),{Value:{t:Property,a:{Value:{t:Child$528453}}}}).bindTo(getBinders().$with({Value:{t:Child$528453}})),content$528459=[(bindings$528460=ClassExpression$expression({Type:{t:Parent$528452}}).method($$$cl527366.AppliedMethod$meta$model(Parent$528452.$$.prototype.foo,undefined,{Container:{t:Parent$528452},Type:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:Child$528453}]}}),{Arguments:{t:'T', l:[{t:Child$528453}]}}).bindTo(getBinders().click({Source:{t:Child$528453}})),Button$view(undefined,undefined,undefined,bindings$528460,undefined))].reifyCeylonType({Element:{t:Button$view},Absent:{t:$$$cl527366.Null}}),Div$view(undefined,undefined,bindings$528458,content$528459));
        var bindings$528458,content$528459,bindings$528460;
        
        //AttributeDecl child at testBindings.ceylon (163:8-163:29)
        var child$528461=Child$528453();
        
        //AttributeDecl parent at testBindings.ceylon (164:8-164:47)
        var parent$528462=Parent$528452(Property(child$528461,{Value:{t:Child$528453}}));
        
        //AttributeDecl dom at testBindings.ceylon (165:8-165:39)
        var dom$528463=view$528457.$bind(parent$528462);
        //assert at testBindings.ceylon (166:8-166:58)
        var clickNode$528464;
        if (!((clickNode$528464=dom$528463.getChildren().first)!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists clickNode = dom.getChildren().first\' at testBindings.ceylon (166:14-166:57)"),'166:8-166:58','testBindings.ceylon'); }
        $$$ct527567.assertEquals((0),parent$528462.count);
        clickNode$528464.click();
        $$$ct527567.assertEquals((1),parent$528462.count);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomNode$dom}]}}));
}
exports.testResolveListenerInHierachy$test=testResolveListenerInHierachy$test;
testResolveListenerInHierachy$test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.shared(),$$$ct527567.test()];},d:['cayla.mvc.test','testResolveListenerInHierachy']};};
exports.$pkg$ans$cayla$mvc$test=function(){return[$$$cl527366.shared()];};

//MethodDef run at run.ceylon (3:0-9:0)
function run(){
    
    //AttributeDecl list at run.ceylon (6:4-6:30)
    var list$528465=TodoList$todo();
    list$528465.init();
}
exports.run=run;
run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$an:function(){return[$$$cl527366.doc($$$cl527366.String("Run the module `mvcpoc`.",24)),$$$cl527366.shared()];},d:['cayla.mvc','run']};};
exports.$pkg$ans$cayla$mvc=function(){return[$$$cl527366.shared()];};
exports.$mod$ans$=[];
exports.$mod$imps=function(){return{
'ceylon.collection/1.0.0':function(){return[$$$cl527366.shared()];},
'ceylon.test/1.0.0':[]
};};

//ObjectDef log at log.ceylon (1:0-11:0)
function log$528466(){
    var $$log=new log$528466.$$;
    return $$log;
};log$528466.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','log']};};
function $init$log$528466(){
    if (log$528466.$$===undefined){
        $$$cl527366.initTypeProto(log$528466,'cayla.mvc::log',$$$cl527366.Basic);
        (function($$log){
            
            //MethodDef debug at log.ceylon (2:4-10:4)
            $$log.debug=function debug(message$528467){
                var $$log=this;
                /*Begin dynamic block*/
                if((typeof isUndefined==='undefined'||isUndefined===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: isUndefined")),'4:16-4:26','log.ceylon'):isUndefined)((typeof console==='undefined'||console===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: console")),'4:28-4:34','log.ceylon'):console).debug)){
                    $$$cl527366.print($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("[DEBUG] ",8),message$528467.string]).string);
                }else {
                    (typeof console==='undefined'||console===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: console")),'7:16-7:22','log.ceylon'):console).debug(message$528467.valueOf());
                }/*End dynamic block*/
            };$$log.debug.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:log$528466,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','log','$m','debug']};};
        })(log$528466.$$.prototype);
    }
    return log$528466;
}
exports.$init$log$528466=$init$log$528466;
$init$log$528466();
var log$528468;
function getLog(){
    if (log$528468===undefined){log$528468=$init$log$528466()();log$528468.$$metamodel$$=getLog.$$metamodel$$;}
    return log$528468;
}
exports.getLog=getLog;
getLog.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:log$528466},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','log']};};
$prop$getLog={get:getLog,$$metamodel$$:getLog.$$metamodel$$};
exports.$prop$getLog=$prop$getLog;
exports.$pkg$ans$cayla$mvc$lcs=function(){return[$$$cl527366.shared()];};

//ClassDef Diff at Diff.ceylon (2:0-69:0)
function Diff$lcs(elements1$528469, elements2$528470, $$targs$$,$$diff){
    $init$Diff$lcs();
    if ($$diff===undefined)$$diff=new Diff$lcs.$$;
    $$$cl527366.set_type_args($$diff,$$targs$$);
    $$diff.elements1$528469_=elements1$528469;
    $$diff.elements2$528470_=elements2$528470;
    $$$cl527366.Iterator($$diff.$$targs$$===undefined?$$targs$$:{Element:{t:'T', l:[$$diff.$$targs$$.E,{t:Change$lcs}]}},$$diff);
    $$$cl527366.add_type_arg($$diff,'Element',{t:'T', l:[$$diff.$$targs$$.E,{t:Change$lcs}]});
    
    //AttributeDecl m at Diff.ceylon (8:4-8:28)
    $$diff.m$528471_=$$diff.elements1$528469.size;
    $$diff.$prop$getM$528471={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$at','m']};}};
    $$diff.$prop$getM$528471.get=function(){return m$528471};
    
    //AttributeDecl n at Diff.ceylon (9:4-9:28)
    $$diff.n$528472_=$$diff.elements2$528470.size;
    $$diff.$prop$getN$528472={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$at','n']};}};
    $$diff.$prop$getN$528472.get=function(){return n$528472};
    
    //AttributeDecl opt at Diff.ceylon (28:4-28:62)
    $$diff.opt$528473_=$$diff.Matrix$Diff($$diff.elements1$528469.size.plus((1)),$$diff.elements2$528470.size.plus((1)));
    $$diff.$prop$getOpt$528473={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Diff$lcs.Matrix$Diff},$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$at','opt']};}};
    $$diff.$prop$getOpt$528473.get=function(){return opt$528473};
    if(($$diff.m$528471.compare((0)).equals($$$cl527366.getLarger())&&$$diff.n$528472.compare((0)).equals($$$cl527366.getLarger()))){
        //'for' statement at Diff.ceylon (30:8-36:8)
        var it$528474 = $$$cl527366.Range($$diff.m$528471.minus((1)),(0),{Element:{t:$$$cl527366.Integer}}).iterator();
        var i$528475;while ((i$528475=it$528474.next())!==$$$cl527366.getFinished()){
            //'for' statement at Diff.ceylon (31:12-35:12)
            var it$528476 = $$$cl527366.Range($$diff.n$528472.minus((1)),(0),{Element:{t:$$$cl527366.Integer}}).iterator();
            var j$528477;while ((j$528477=it$528476.next())!==$$$cl527366.getFinished()){
                //assert at Diff.ceylon (32:16-32:47)
                var x$528478;
                if (!((x$528478=$$diff.elements1$528469.$get(i$528475))!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists x = elements1[i]\' at Diff.ceylon (32:22-32:46)"),'32:16-32:47','Diff.ceylon'); }
                //assert at Diff.ceylon (33:16-33:47)
                var y$528479;
                if (!((y$528479=$$diff.elements2$528470.$get(j$528477))!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists y = elements2[j]\' at Diff.ceylon (33:22-33:46)"),'33:16-33:47','Diff.ceylon'); }
                $$diff.opt$528473.set(i$528475,j$528477,(opt$528480=(x$528478.equals(y$528479)?$$diff.opt$528473.$get(i$528475.plus((1)),j$528477.plus((1))).plus((1)):null),opt$528480!==null?opt$528480:$$$cl527366.max([$$diff.opt$528473.$get(i$528475.plus((1)),j$528477),$$diff.opt$528473.$get(i$528475,j$528477.plus((1)))].reifyCeylonType({Element:{t:$$$cl527366.Integer},Absent:{t:$$$cl527366.Nothing}}),{Value:{t:$$$cl527366.Integer},Absent:{t:$$$cl527366.Nothing}})));
                var opt$528480;
            }
        }
    }
    
    //AttributeDecl i at Diff.ceylon (39:4-39:26)
    $$diff.i$528481_=(0);
    $$diff.$prop$getI$528481={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Diff$lcs,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc.lcs','Diff','$at','i']};}};
    $$diff.$prop$getI$528481.get=function(){return i$528481};
    
    //AttributeDecl j at Diff.ceylon (40:4-40:26)
    $$diff.j$528482_=(0);
    $$diff.$prop$getJ$528482={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Diff$lcs,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc.lcs','Diff','$at','j']};}};
    $$diff.$prop$getJ$528482.get=function(){return j$528482};
    return $$diff;
}
Diff$lcs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'elements1',$mt:'prm',$t:{t:$$$cl527366.List,a:{Element:'E'}},$an:function(){return[];}},{$nm:'elements2',$mt:'prm',$t:{t:$$$cl527366.List,a:{Element:'E'}},$an:function(){return[];}}],$tp:{E:{'satisfies':[{t:$$$cl527366.$Object}]}},satisfies:[{t:$$$cl527366.Iterator,a:{Element:{t:'T',l:[{$t:'E'},{$t:{t:Change$lcs}}]}}}],$an:function(){return[$$$cl527366.doc($$$cl527366.String("Diff two series of elements\n",28)),$$$cl527366.shared()];},d:['cayla.mvc.lcs','Diff']};};
exports.Diff$lcs=Diff$lcs;
function $init$Diff$lcs(){
    if (Diff$lcs.$$===undefined){
        $$$cl527366.initTypeProto(Diff$lcs,'cayla.mvc.lcs::Diff',$$$cl527366.Basic,$$$cl527366.Iterator);
        (function($$diff){
            
            //AttributeDecl m at Diff.ceylon (8:4-8:28)
            $$$cl527366.defineAttr($$diff,'m$528471',function(){return this.m$528471_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$at','m']};});
            
            //AttributeDecl n at Diff.ceylon (9:4-9:28)
            $$$cl527366.defineAttr($$diff,'n$528472',function(){return this.n$528472_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$at','n']};});
            
            //ClassDef Matrix at Diff.ceylon (11:4-25:4)
            function Matrix$Diff(width$528483, height$528484, $$matrix$528485){
                $init$Matrix$Diff();
                if ($$matrix$528485===undefined)$$matrix$528485=new this.Matrix$Diff.$$;
                $$matrix$528485.$$outer=this;
                $$matrix$528485.width$528483_=width$528483;
                $$matrix$528485.height$528484_=height$528484;
                
                //AttributeDecl state at Diff.ceylon (13:8-13:52)
                $$matrix$528485.state$528486_=$$$cl527366.arrayOfSize($$matrix$528485.width$528483.times($$matrix$528485.height$528484),(0),{Element:{t:$$$cl527366.Integer}});
                $$matrix$528485.$prop$getState$528486={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Array,a:{Element:{t:$$$cl527366.Integer}}},$cont:Matrix$Diff,d:['cayla.mvc.lcs','Diff','$c','Matrix','$at','state']};}};
                $$matrix$528485.$prop$getState$528486.get=function(){return state$528486};
                
                //AttributeDecl string at Diff.ceylon (24:8-24:51)
                $$matrix$528485.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.String},$cont:Matrix$Diff,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.lcs','Diff','$c','Matrix','$at','string']};}};
                $$matrix$528485.$prop$getString.get=function(){return string};
                return $$matrix$528485;
            }
            Matrix$Diff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'width',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}},{$nm:'height',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$c','Matrix']};};
            function $init$Matrix$Diff(){
                if (Matrix$Diff.$$===undefined){
                    $$$cl527366.initTypeProto(Matrix$Diff,'cayla.mvc.lcs::Diff.Matrix',$$$cl527366.Basic);
                    Diff$lcs.Matrix$Diff=Matrix$Diff;
                    (function($$matrix$528485){
                        
                        //AttributeDecl state at Diff.ceylon (13:8-13:52)
                        $$$cl527366.defineAttr($$matrix$528485,'state$528486',function(){return this.state$528486_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Array,a:{Element:{t:$$$cl527366.Integer}}},$cont:Matrix$Diff,d:['cayla.mvc.lcs','Diff','$c','Matrix','$at','state']};});
                        
                        //MethodDef set at Diff.ceylon (15:8-17:8)
                        $$matrix$528485.set=function set(x$528487,y$528488,e$528489){
                            var $$matrix$528485=this;
                            $$matrix$528485.state$528486.set(x$528487.plus(y$528488.times($$matrix$528485.$$outer.m$528471.plus((1)))),e$528489);
                        };$$matrix$528485.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}},{$nm:'e',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:Matrix$Diff,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.lcs','Diff','$c','Matrix','$m','set']};};
                        
                        //MethodDef get at Diff.ceylon (19:8-22:8)
                        $$matrix$528485.$get=function $get(x$528490,y$528491){
                            var $$matrix$528485=this;
                            //assert at Diff.ceylon (20:12-20:53)
                            var e$528492;
                            if (!((e$528492=$$matrix$528485.state$528486.$get(x$528490.plus(y$528491.times($$matrix$528485.$$outer.m$528471.plus((1))))))!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists e = state[x + y * (m + 1)]\' at Diff.ceylon (20:18-20:52)"),'20:12-20:53','Diff.ceylon'); }
                            return e$528492;
                        };$$matrix$528485.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:Matrix$Diff,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.lcs','Diff','$c','Matrix','$m','get']};};
                        
                        //AttributeDecl string at Diff.ceylon (24:8-24:51)
                        $$$cl527366.defineAttr($$matrix$528485,'string',function(){
                            var $$matrix$528485=this;
                            return $$matrix$528485.state$528486.string;
                        },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.String},$cont:Matrix$Diff,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.lcs','Diff','$c','Matrix','$at','string']};});
                        $$$cl527366.defineAttr($$matrix$528485,'width$528483',function(){return this.width$528483_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Matrix$Diff,d:['cayla.mvc.lcs','Diff','$c','Matrix','$at','width']};});
                        $$$cl527366.defineAttr($$matrix$528485,'height$528484',function(){return this.height$528484_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Matrix$Diff,d:['cayla.mvc.lcs','Diff','$c','Matrix','$at','height']};});
                    })(Matrix$Diff.$$.prototype);
                }
                return Matrix$Diff;
            }
            $$diff.$init$Matrix$Diff=$init$Matrix$Diff;
            $init$Matrix$Diff();
            $$diff.Matrix$Diff=Matrix$Diff;
            
            //AttributeDecl opt at Diff.ceylon (28:4-28:62)
            $$$cl527366.defineAttr($$diff,'opt$528473',function(){return this.opt$528473_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Diff$lcs.Matrix$Diff},$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$at','opt']};});
            
            //AttributeDecl i at Diff.ceylon (39:4-39:26)
            $$$cl527366.defineAttr($$diff,'i$528481',function(){return this.i$528481_;},function(i$528493){return this.i$528481_=i$528493;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Diff$lcs,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc.lcs','Diff','$at','i']};});
            
            //AttributeDecl j at Diff.ceylon (40:4-40:26)
            $$$cl527366.defineAttr($$diff,'j$528482',function(){return this.j$528482_;},function(j$528494){return this.j$528482_=j$528494;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:Diff$lcs,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc.lcs','Diff','$at','j']};});
            
            //MethodDef next at Diff.ceylon (42:4-68:4)
            $$diff.next=function next(){
                var $$diff=this;
                if(($$diff.i$528481.compare($$diff.m$528471).equals($$$cl527366.getSmaller())&&$$diff.j$528482.compare($$diff.n$528472).equals($$$cl527366.getSmaller()))){
                    //assert at Diff.ceylon (44:12-44:44)
                    var e1$528495;
                    if (!((e1$528495=$$diff.elements1$528469.$get($$diff.i$528481))!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists e1 = elements1[i]\' at Diff.ceylon (44:18-44:43)"),'44:12-44:44','Diff.ceylon'); }
                    //assert at Diff.ceylon (45:12-45:44)
                    var e2$528496;
                    if (!((e2$528496=$$diff.elements2$528470.$get($$diff.j$528482))!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists e2 = elements2[j]\' at Diff.ceylon (45:18-45:43)"),'45:12-45:44','Diff.ceylon'); }
                    if(e1$528495.equals(e2$528496)){
                        (oldi$528497=$$diff.i$528481,$$diff.i$528481=oldi$528497.successor,oldi$528497);
                        var oldi$528497;
                        (oldj$528498=$$diff.j$528482,$$diff.j$528482=oldj$528498.successor,oldj$528498);
                        var oldj$528498;
                        return $$$cl527366.Tuple(e1$528495,$$$cl527366.Tuple(getSame$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$lcs}]},First:$$diff.$$targs$$.E});
                    }else {
                        if(($$diff.opt$528473.$get($$diff.i$528481.plus((1)),$$diff.j$528482).compare($$diff.opt$528473.$get($$diff.i$528481,$$diff.j$528482.plus((1))))!==$$$cl527366.getSmaller())){
                            (oldi$528499=$$diff.i$528481,$$diff.i$528481=oldi$528499.successor,oldi$528499);
                            var oldi$528499;
                            return $$$cl527366.Tuple(e1$528495,$$$cl527366.Tuple(getRemoved$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$lcs}]},First:$$diff.$$targs$$.E});
                        }else {
                            (oldj$528500=$$diff.j$528482,$$diff.j$528482=oldj$528500.successor,oldj$528500);
                            var oldj$528500;
                            return $$$cl527366.Tuple(e2$528496,$$$cl527366.Tuple(getAdded$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$lcs}]},First:$$diff.$$targs$$.E});
                        }
                    }
                }else {
                    if($$diff.i$528481.compare($$diff.m$528471).equals($$$cl527366.getSmaller())){
                        //assert at Diff.ceylon (58:12-58:44)
                        var e1$528501;
                        if (!((e1$528501=$$diff.elements1$528469.$get($$diff.i$528481))!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists e1 = elements1[i]\' at Diff.ceylon (58:18-58:43)"),'58:12-58:44','Diff.ceylon'); }
                        (oldi$528502=$$diff.i$528481,$$diff.i$528481=oldi$528502.successor,oldi$528502);
                        var oldi$528502;
                        return $$$cl527366.Tuple(e1$528501,$$$cl527366.Tuple(getRemoved$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$lcs}]},First:$$diff.$$targs$$.E});
                    }else {
                        if($$diff.j$528482.compare($$diff.n$528472).equals($$$cl527366.getSmaller())){
                            //assert at Diff.ceylon (62:12-62:44)
                            var e2$528503;
                            if (!((e2$528503=$$diff.elements2$528470.$get($$diff.j$528482))!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists e2 = elements2[j]\' at Diff.ceylon (62:18-62:43)"),'62:12-62:44','Diff.ceylon'); }
                            (oldj$528504=$$diff.j$528482,$$diff.j$528482=oldj$528504.successor,oldj$528504);
                            var oldj$528504;
                            return $$$cl527366.Tuple(e2$528503,$$$cl527366.Tuple(getAdded$lcs(),$$$cl527366.getEmpty(),{Rest:{t:$$$cl527366.Empty},Element:{t:Change$lcs},First:{t:Change$lcs}}),{Rest:{t:'T', l:[{t:Change$lcs}]},Element:{t:'u', l:[$$diff.$$targs$$.E,{t:Change$lcs}]},First:$$diff.$$targs$$.E});
                        }else {
                            return $$$cl527366.getFinished();
                        }
                    }
                }
            };$$diff.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:'T',l:[{$t:'E'},{$t:{t:Change$lcs}}]},{t:$$$cl527366.Finished}]},$ps:[],$cont:Diff$lcs,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.lcs','Diff','$m','next']};};
            $$$cl527366.defineAttr($$diff,'elements1$528469',function(){return this.elements1$528469_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'E'}},$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$at','elements1']};});
            $$$cl527366.defineAttr($$diff,'elements2$528470',function(){return this.elements2$528470_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'E'}},$cont:Diff$lcs,d:['cayla.mvc.lcs','Diff','$at','elements2']};});
        })(Diff$lcs.$$.prototype);
    }
    return Diff$lcs;
}
exports.$init$Diff$lcs=$init$Diff$lcs;
$init$Diff$lcs();

//ClassDef Change at Change.ceylon (1:0-3:0)
function Change$lcs($$change){
    $init$Change$lcs();
    if ($$change===undefined)$$$cl527366.throwexc($$$cl527366.InvocationException$meta$model($$$cl527366.String("Cannot instantiate abstract class")),'?','?')
    return $$change;
}
Change$lcs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],of:[{t:removed$528505$lcs},{t:same$528506$lcs},{t:added$528507$lcs}],$an:function(){return[$$$cl527366.doc($$$cl527366.String("A change",8)),$$$cl527366.shared(),$$$cl527366.abstract()];},d:['cayla.mvc.lcs','Change']};};
exports.Change$lcs=Change$lcs;
function $init$Change$lcs(){
    if (Change$lcs.$$===undefined){
        $$$cl527366.initTypeProto(Change$lcs,'cayla.mvc.lcs::Change',$$$cl527366.Basic);
    }
    return Change$lcs;
}
exports.$init$Change$lcs=$init$Change$lcs;
$init$Change$lcs();

//ObjectDef removed at Change.ceylon (4:0-6:0)
function removed$528505$lcs(){
    var $$removed=new removed$528505$lcs.$$;
    Change$lcs($$removed);
    return $$removed;
};removed$528505$lcs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$lcs},$an:function(){return[$$$cl527366.doc("Removed change"),$$$cl527366.shared()];},d:['cayla.mvc.lcs','removed']};};
function $init$removed$528505$lcs(){
    if (removed$528505$lcs.$$===undefined){
        $$$cl527366.initTypeProto(removed$528505$lcs,'cayla.mvc.lcs::removed',$init$Change$lcs());
    }
    return removed$528505$lcs;
}
exports.$init$removed$528505$lcs=$init$removed$528505$lcs;
$init$removed$528505$lcs();
var removed$528508$lcs;
function getRemoved$lcs(){
    if (removed$528508$lcs===undefined){removed$528508$lcs=$init$removed$528505$lcs()();removed$528508$lcs.$$metamodel$$=getRemoved$lcs.$$metamodel$$;}
    return removed$528508$lcs;
}
exports.getRemoved$lcs=getRemoved$lcs;
getRemoved$lcs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:removed$528505$lcs},$an:function(){return[$$$cl527366.doc($$$cl527366.String("Removed change",14)),$$$cl527366.shared()];},d:['cayla.mvc.lcs','removed']};};
$prop$getRemoved$lcs={get:getRemoved$lcs,$$metamodel$$:getRemoved$lcs.$$metamodel$$};
exports.$prop$getRemoved$lcs=$prop$getRemoved$lcs;

//ObjectDef same at Change.ceylon (7:0-9:0)
function same$528506$lcs(){
    var $$same=new same$528506$lcs.$$;
    Change$lcs($$same);
    return $$same;
};same$528506$lcs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$lcs},$an:function(){return[$$$cl527366.doc("Same change"),$$$cl527366.shared()];},d:['cayla.mvc.lcs','same']};};
function $init$same$528506$lcs(){
    if (same$528506$lcs.$$===undefined){
        $$$cl527366.initTypeProto(same$528506$lcs,'cayla.mvc.lcs::same',$init$Change$lcs());
    }
    return same$528506$lcs;
}
exports.$init$same$528506$lcs=$init$same$528506$lcs;
$init$same$528506$lcs();
var same$528509$lcs;
function getSame$lcs(){
    if (same$528509$lcs===undefined){same$528509$lcs=$init$same$528506$lcs()();same$528509$lcs.$$metamodel$$=getSame$lcs.$$metamodel$$;}
    return same$528509$lcs;
}
exports.getSame$lcs=getSame$lcs;
getSame$lcs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:same$528506$lcs},$an:function(){return[$$$cl527366.doc($$$cl527366.String("Same change",11)),$$$cl527366.shared()];},d:['cayla.mvc.lcs','same']};};
$prop$getSame$lcs={get:getSame$lcs,$$metamodel$$:getSame$lcs.$$metamodel$$};
exports.$prop$getSame$lcs=$prop$getSame$lcs;

//ObjectDef added at Change.ceylon (10:0-12:0)
function added$528507$lcs(){
    var $$added=new added$528507$lcs.$$;
    Change$lcs($$added);
    return $$added;
};added$528507$lcs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Change$lcs},$an:function(){return[$$$cl527366.doc("Added change"),$$$cl527366.shared()];},d:['cayla.mvc.lcs','added']};};
function $init$added$528507$lcs(){
    if (added$528507$lcs.$$===undefined){
        $$$cl527366.initTypeProto(added$528507$lcs,'cayla.mvc.lcs::added',$init$Change$lcs());
    }
    return added$528507$lcs;
}
exports.$init$added$528507$lcs=$init$added$528507$lcs;
$init$added$528507$lcs();
var added$528510$lcs;
function getAdded$lcs(){
    if (added$528510$lcs===undefined){added$528510$lcs=$init$added$528507$lcs()();added$528510$lcs.$$metamodel$$=getAdded$lcs.$$metamodel$$;}
    return added$528510$lcs;
}
exports.getAdded$lcs=getAdded$lcs;
getAdded$lcs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:added$528507$lcs},$an:function(){return[$$$cl527366.doc($$$cl527366.String("Added change",12)),$$$cl527366.shared()];},d:['cayla.mvc.lcs','added']};};
$prop$getAdded$lcs={get:getAdded$lcs,$$metamodel$$:getAdded$lcs.$$metamodel$$};
exports.$prop$getAdded$lcs=$prop$getAdded$lcs;
exports.$pkg$ans$cayla$mvc$expression=function(){return[$$$cl527366.shared()];};

//MethodDef method at MethodExpression.ceylon (3:0-7:0)
function method$expression(method$528511,$$$mptypes){
    return ClassExpression$expression({Type:$$$mptypes.Source}).method(method$528511,{Arguments:$$$mptypes.Arguments});
}
exports.method$expression=method$expression;
method$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:'Arguments'}},Source:'Source'}},$ps:[{$nm:'method',$mt:'prm',$t:{t:$$$cl527366.Method$meta$model,a:{Container:'Source',Type:{t:$$$cl527366.Anything},Arguments:'Arguments'}},$an:function(){return[];}}],$tp:{Source:{'satisfies':[{t:$$$cl527366.$Object}]},Arguments:{'satisfies':[{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.Anything}}}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','method']};};

//ClassDef MethodExpression at MethodExpression.ceylon (9:0-21:0)
function MethodExpression$expression(m$528512, parent$528513, $$targs$$,$$methodExpression){
    $init$MethodExpression$expression();
    if ($$methodExpression===undefined)$$methodExpression=new MethodExpression$expression.$$;
    $$$cl527366.set_type_args($$methodExpression,$$targs$$);
    $$methodExpression.m$528512_=m$528512;
    $$methodExpression.parent$528513_=parent$528513;
    Expression$expression($$methodExpression.$$targs$$===undefined?$$targs$$:{Type:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:$$methodExpression.$$targs$$.Arguments}},Source:$$methodExpression.$$targs$$.Source},$$methodExpression);
    $$$cl527366.add_type_arg($$methodExpression,'Type',{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:$$methodExpression.$$targs$$.Arguments}});
    return $$methodExpression;
}
MethodExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'m',$mt:'prm',$t:{t:$$$cl527366.Method$meta$model,a:{Container:'Container',Type:{t:$$$cl527366.Anything},Arguments:'Arguments'}},$an:function(){return[];}},{$nm:'parent',$mt:'prm',$t:{t:Expression$expression,a:{Type:'Container',Source:'Source'}},$an:function(){return[];}}],$tp:{Container:{'var':'out','satisfies':[{t:$$$cl527366.$Object}]},Source:{'satisfies':[{t:$$$cl527366.$Object}]},Arguments:{'var':'in','satisfies':[{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.Anything}}}]}},satisfies:[{t:Expression$expression,a:{Type:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:'Arguments'}},Source:'Source'}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','MethodExpression']};};
exports.MethodExpression$expression=MethodExpression$expression;
function $init$MethodExpression$expression(){
    if (MethodExpression$expression.$$===undefined){
        $$$cl527366.initTypeProto(MethodExpression$expression,'cayla.mvc.expression::MethodExpression',$$$cl527366.Basic,$init$Expression$expression());
        (function($$methodExpression){
            
            //MethodDef traverse at MethodExpression.ceylon (17:4-20:4)
            $$methodExpression.traverse=function traverse(source$528514){
                var $$methodExpression=this;
                
                //AttributeDecl t at MethodExpression.ceylon (18:8-18:45)
                var t$528515=$$methodExpression.parent$528513.traverse(source$528514);
                return $$methodExpression.m$528512.$bind(t$528515);
            };$$methodExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:'Arguments'}},$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:MethodExpression$expression,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.expression','MethodExpression','$m','traverse']};};
            $$$cl527366.defineAttr($$methodExpression,'m$528512',function(){return this.m$528512_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Method$meta$model,a:{Container:'Container',Type:{t:$$$cl527366.Anything},Arguments:'Arguments'}},$cont:MethodExpression$expression,d:['cayla.mvc.expression','MethodExpression','$at','m']};});
            $$$cl527366.defineAttr($$methodExpression,'parent$528513',function(){return this.parent$528513_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:'Container',Source:'Source'}},$cont:MethodExpression$expression,d:['cayla.mvc.expression','MethodExpression','$at','parent']};});
        })(MethodExpression$expression.$$.prototype);
    }
    return MethodExpression$expression;
}
exports.$init$MethodExpression$expression=$init$MethodExpression$expression;
$init$MethodExpression$expression();

//InterfaceDef Expression at Expression.ceylon (5:0-36:0)
function Expression$expression($$targs$$,$$expression){
    $$$cl527366.set_type_args($$expression,$$targs$$);
}
Expression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Type:{'var':'out','satisfies':[{t:$$$cl527366.$Object}]},Source:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','Expression']};};
exports.Expression$expression=Expression$expression;
function $init$Expression$expression(){
    if (Expression$expression.$$===undefined){
        $$$cl527366.initTypeProtoI(Expression$expression,'cayla.mvc.expression::Expression');
        (function($$expression){
            $$expression.traverse={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Type',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:Expression$expression,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc.expression','Expression','$m','traverse']};}};
            //MethodDef attribute at Expression.ceylon (11:4-19:4)
            $$expression.attribute=function attribute(attribute$528516,$$$mptypes){
                var $$expression=this;
                
                //MethodDef f at Expression.ceylon (12:8-17:8)
                function f$528517(source$528518){
                    
                    //AttributeDecl t at Expression.ceylon (13:12-13:37)
                    var t$528519=$$expression.traverse(source$528518);
                    
                    //AttributeDecl binding at Expression.ceylon (14:12-14:45)
                    var binding$528520=attribute$528516.$bind(t$528519);
                    
                    //AttributeDecl p at Expression.ceylon (15:12-15:35)
                    var p$528521=binding$528520.$get();
                    return p$528521;
                };f$528517.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],d:['cayla.mvc.expression','Expression','$m','attribute','$m','f']};};
                return AttributeExpression$expression($$$cl527366.$JsCallable(f$528517,[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],{Return:$$$mptypes.Value,Arguments:{t:'T', l:[$$expression.$$targs$$.Source]}}),{Value:$$$mptypes.Value,Source:$$expression.$$targs$$.Source});
            };$$expression.attribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:AttributeExpression$expression,a:{Value:'Value',Source:'Source'}},$ps:[{$nm:'attribute',$mt:'prm',$t:{t:$$$cl527366.Attribute$meta$model,a:{Container:'Type',Set:{t:$$$cl527366.Nothing},Get:'Value'}},$an:function(){return[];}}],$cont:Expression$expression,$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','Expression','$m','attribute']};};
            
            //MethodDef method at Expression.ceylon (21:4-23:4)
            $$expression.method=function method(method$528522,$$$mptypes){
                var $$expression=this;
                return MethodExpression$expression(method$528522,$$expression,{Container:$$expression.$$targs$$.Type,Arguments:$$$mptypes.Arguments,Source:$$expression.$$targs$$.Source});
            };$$expression.method.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:MethodExpression$expression,a:{Container:'Type',Arguments:'Arguments',Source:'Source'}},$ps:[{$nm:'method',$mt:'prm',$t:{t:$$$cl527366.Method$meta$model,a:{Container:'Type',Type:{t:$$$cl527366.Anything},Arguments:'Arguments'}},$an:function(){return[];}}],$cont:Expression$expression,$tp:{Arguments:{'satisfies':[{t:$$$cl527366.Sequential,a:{Element:{t:$$$cl527366.Anything}}}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','Expression','$m','method']};};
            
            //MethodDef bindTo at Expression.ceylon (25:4-35:4)
            $$expression.bindTo=function bindTo(handler$528523){
                var $$expression=this;
                
                //ObjectDef impl at Expression.ceylon (26:8-33:8)
                function impl$528524(){
                    var $$impl$528524=new impl$528524.$$;
                    Binding$view($$impl$528524);
                    return $$impl$528524;
                };impl$528524.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Binding$view},d:['cayla.mvc.expression','Expression','$m','bindTo','$o','impl']};};
                function $init$impl$528524(){
                    if (impl$528524.$$===undefined){
                        $$$cl527366.initTypeProto(impl$528524,'cayla.mvc.expression::Expression.bindTo.impl',$init$Binding$view());
                        (function($$impl$528524){
                            
                            //MethodDef init at Expression.ceylon (27:12-32:12)
                            $$impl$528524.init=function init(context$528525){
                                var $$impl$528524=this;
                                var s$528526;
                                if((s$528526=context$528525.resolve({Value:$$expression.$$targs$$.Source}))!==null){
                                    
                                    //AttributeDecl f at Expression.ceylon (29:20-29:40)
                                    var f$528527=$$expression.traverse(s$528526);
                                    handler$528523.init(f$528527,context$528525);
                                }
                            };$$impl$528524.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$528524,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.expression','Expression','$m','bindTo','$o','impl','$m','init']};};
                        })(impl$528524.$$.prototype);
                    }
                    return impl$528524;
                }
                $init$impl$528524();
                var impl$528528;
                function getImpl$528528(){
                    if (impl$528528===undefined){impl$528528=$init$impl$528524()();impl$528528.$$metamodel$$=getImpl$528528.$$metamodel$$;}
                    return impl$528528;
                }
                getImpl$528528.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$528524},d:['cayla.mvc.expression','Expression','$m','bindTo','$o','impl']};};
                $prop$getImpl$528528={get:getImpl$528528,$$metamodel$$:getImpl$528528.$$metamodel$$};
                return getImpl$528528();
            };$$expression.bindTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binding$view},$ps:[{$nm:'handler',$mt:'prm',$t:{t:Binder,a:{Value:'Type'}},$an:function(){return[];}}],$cont:Expression$expression,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','Expression','$m','bindTo']};};
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
    $$$cl527366.set_type_args($$classExpression,$$targs$$);
    Expression$expression($$classExpression.$$targs$$===undefined?$$targs$$:{Type:$$classExpression.$$targs$$.Type,Source:$$classExpression.$$targs$$.Type},$$classExpression);
    return $$classExpression;
}
ClassExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],$tp:{Type:{'satisfies':[{t:$$$cl527366.$Object}]}},satisfies:[{t:Expression$expression,a:{Type:'Type',Source:'Type'}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','ClassExpression']};};
exports.ClassExpression$expression=ClassExpression$expression;
function $init$ClassExpression$expression(){
    if (ClassExpression$expression.$$===undefined){
        $$$cl527366.initTypeProto(ClassExpression$expression,'cayla.mvc.expression::ClassExpression',$$$cl527366.Basic,$init$Expression$expression());
        (function($$classExpression){
            
            //MethodDef traverse at ClassExpression.ceylon (3:4-5:4)
            $$classExpression.traverse=function traverse(source$528529){
                var $$classExpression=this;
                return source$528529;
            };$$classExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Type',$ps:[{$nm:'source',$mt:'prm',$t:'Type',$an:function(){return[];}}],$cont:ClassExpression$expression,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.expression','ClassExpression','$m','traverse']};};
        })(ClassExpression$expression.$$.prototype);
    }
    return ClassExpression$expression;
}
exports.$init$ClassExpression$expression=$init$ClassExpression$expression;
$init$ClassExpression$expression();

//MethodDef attribute at AttributeExpression.ceylon (3:0-7:0)
function attribute$expression(attr$528530,$$$mptypes){
    return ClassExpression$expression({Type:$$$mptypes.Source}).attribute(attr$528530,{Value:$$$mptypes.Value});
}
exports.attribute$expression=attribute$expression;
attribute$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Expression$expression,a:{Type:'Value',Source:'Source'}},$ps:[{$nm:'attr',$mt:'prm',$t:{t:$$$cl527366.Attribute$meta$model,a:{Container:'Source',Set:{t:$$$cl527366.Nothing},Get:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]},Source:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','attribute']};};

//ClassDef AttributeExpression at AttributeExpression.ceylon (9:0-17:0)
function AttributeExpression$expression(f$528531, $$targs$$,$$attributeExpression){
    $init$AttributeExpression$expression();
    if ($$attributeExpression===undefined)$$attributeExpression=new AttributeExpression$expression.$$;
    $$$cl527366.set_type_args($$attributeExpression,$$targs$$);
    $$attributeExpression.f$528531_=f$528531;
    Expression$expression($$attributeExpression.$$targs$$===undefined?$$targs$$:{Type:$$attributeExpression.$$targs$$.Value,Source:$$attributeExpression.$$targs$$.Source},$$attributeExpression);
    return $$attributeExpression;
}
AttributeExpression$expression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'f',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:'Value',Arguments:{t:'T',l:[{$t:'Source'}]}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]},Source:{'satisfies':[{t:$$$cl527366.$Object}]}},satisfies:[{t:Expression$expression,a:{Type:'Value',Source:'Source'}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.expression','AttributeExpression']};};
exports.AttributeExpression$expression=AttributeExpression$expression;
function $init$AttributeExpression$expression(){
    if (AttributeExpression$expression.$$===undefined){
        $$$cl527366.initTypeProto(AttributeExpression$expression,'cayla.mvc.expression::AttributeExpression',$$$cl527366.Basic,$init$Expression$expression());
        (function($$attributeExpression){
            
            //MethodDef traverse at AttributeExpression.ceylon (14:4-16:4)
            $$attributeExpression.traverse=function traverse(source$528532){
                var $$attributeExpression=this;
                return $$attributeExpression.f$528531(source$528532);
            };$$attributeExpression.traverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[{$nm:'source',$mt:'prm',$t:'Source',$an:function(){return[];}}],$cont:AttributeExpression$expression,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.expression','AttributeExpression','$m','traverse']};};
            $$$cl527366.defineAttr($$attributeExpression,'f$528531',function(){return this.f$528531_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Callable,a:{Return:'Value',Arguments:{t:'T',l:[{$t:'Source'}]}}},$cont:AttributeExpression$expression,d:['cayla.mvc.expression','AttributeExpression','$at','f']};});
        })(AttributeExpression$expression.$$.prototype);
    }
    return AttributeExpression$expression;
}
exports.$init$AttributeExpression$expression=$init$AttributeExpression$expression;
$init$AttributeExpression$expression();
exports.$pkg$ans$cayla$mvc$dom=function(){return[$$$cl527366.shared()];};

//MethodDef element at element.ceylon (1:0-8:0)
function element$dom(name$528533){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at element.ceylon (3:8-3:51)
    var peer$528534=(typeof document==='undefined'||document===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: document")),'3:23-3:30','element.ceylon'):document).createElement(name$528533.valueOf());
    
    //AttributeDecl node at element.ceylon (4:8-4:34)
    var node$528535=DomNode$dom(peer$528534);
    peer$528534.ref=node$528535;
    return node$528535;
    /*End dynamic block*/
}
exports.element$dom=element$dom;
element$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','element']};};

//MethodDef text at element.ceylon (10:0-17:0)
function text$dom(cdata$528536){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at element.ceylon (12:8-12:53)
    var peer$528537=(typeof document==='undefined'||document===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: document")),'12:23-12:30','element.ceylon'):document).createTextNode(cdata$528536.valueOf());
    
    //AttributeDecl node at element.ceylon (13:8-13:34)
    var node$528538=DomNode$dom(peer$528537);
    peer$528537.ref=node$528538;
    return node$528538;
    /*End dynamic block*/
}
exports.text$dom=text$dom;
text$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'cdata',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','text']};};

//MethodDef byId at byId.ceylon (1:0-10:0)
function byId$dom(id$528539){
    /*Begin dynamic block*/
    
    //AttributeDecl peer at byId.ceylon (3:8-3:50)
    var peer$528540=(typeof document==='undefined'||document===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: document")),'3:23-3:30','byId.ceylon'):document).getElementById(id$528539.valueOf());
    var peer$528541;
    if((peer$528541=peer$528540)!==null){
        return (tmpvar$528542=wrap$dom(peer$528541),$$$cl527366.isOfType(tmpvar$528542,{t:$$$cl527366.Anything})?tmpvar$528542:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'5:19-5:28','byId.ceylon'));
    }else {
        throw $$$cl527366.wrapexc($$$cl527366.Exception($$$cl527366.String("handle me gracefully",20)),'7:12-7:51','cayla/mvc/dom/byId.ceylon');
    }/*End dynamic block*/
}
exports.byId$dom=byId$dom;
byId$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'id',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','byId']};};

//MethodDef wrap at DomNode.ceylon (3:0-14:0)
function wrap$dom(nodePeer$528543){
    /*Begin dynamic block*/
    
    //AttributeDecl ref at DomNode.ceylon (5:8-5:34)
    var ref$528544=nodePeer$528543.ref;
    if((typeof isUndefined==='undefined'||isUndefined===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: isUndefined")),'6:12-6:22','DomNode.ceylon'):isUndefined)(ref$528544)){
        
        //AttributeDecl node at DomNode.ceylon (7:12-7:42)
        var node$528545=DomNode$dom(nodePeer$528543);
        nodePeer$528543.ref=node$528545;
        return node$528545;
    }else {
        return (tmpvar$528546=ref$528544,$$$cl527366.isOfType(tmpvar$528546,{t:$$$cl527366.Anything})?tmpvar$528546:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'11:19-11:21','DomNode.ceylon'));
    }/*End dynamic block*/
};wrap$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'nodePeer',$mt:'prm',$t:{t:$$$cl527366.Anything},$an:function(){return[];}}],d:['cayla.mvc.dom','wrap']};};

//MethodDef _matchesSelector at DomNode.ceylon (16:0-31:0)
function _matchesSelector$dom(nodePeer$528547,selector$528548){
    /*Begin dynamic block*/
    
    //AttributeDecl parentPeer at DomNode.ceylon (18:8-18:48)
    var parentPeer$528549=nodePeer$528547.parentNode;
    if(($$$cl527366.exists(parentPeer$528549)&&(tmpvar$528550=parentPeer$528549.nodeType,tmpvar$528551=(1),(tmpvar$528550.equals&&tmpvar$528550.equals(tmpvar$528551))||tmpvar$528550===tmpvar$528551))){
        
        //AttributeDecl selectedPeers at DomNode.ceylon (20:12-20:73)
        var selectedPeers$528552=parentPeer$528549.querySelectorAll(selector$528548.valueOf());
        
        //AttributeDecl length at DomNode.ceylon (21:12-21:49)
        var length$528553=selectedPeers$528552.length;
        //'for' statement at DomNode.ceylon (22:12-27:12)
        var it$528554 = (function(){var tmpvar$528556=length$528553;
        if (tmpvar$528556>0){
        var tmpvar$528557=(0);
        var tmpvar$528558=tmpvar$528557;
        for (var i=1; i<tmpvar$528556; i++){tmpvar$528558=tmpvar$528558.successor;}
        return $$$cl527366.Range(tmpvar$528557,tmpvar$528558,{})
        }else return $$$cl527366.getEmpty();}()).iterator();
        var i$528555;while ((i$528555=it$528554.next())!==$$$cl527366.getFinished()){
            
            //AttributeDecl selectedPeer at DomNode.ceylon (23:16-23:60)
            var selectedPeer$528559=selectedPeers$528552.item(i$528555);
            if((tmpvar$528560=selectedPeer$528559,tmpvar$528561=nodePeer$528547,(tmpvar$528560.equals&&tmpvar$528560.equals(tmpvar$528561))||tmpvar$528560===tmpvar$528561)){
                return true;
            }
        }
    }return false;
    /*End dynamic block*/
};_matchesSelector$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$ps:[{$nm:'nodePeer',$mt:'prm',$t:{t:$$$cl527366.Anything},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],d:['cayla.mvc.dom','_matchesSelector']};};

//MethodDef querySelectorAll at DomNode.ceylon (33:0-44:0)
function querySelectorAll$dom(selector$528562){
    /*Begin dynamic block*/
    
    //AttributeDecl selected at DomNode.ceylon (35:8-35:60)
    var selected$528563=$$$cc527440.LinkedList(undefined,{Element:{t:DomNode$dom}});
    
    //AttributeDecl nodePeers at DomNode.ceylon (36:8-36:63)
    var nodePeers$528564=(typeof document==='undefined'||document===null?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined or null reference: document")),'36:28-36:35','DomNode.ceylon'):document).querySelectorAll(selector$528562.valueOf());
    
    //AttributeDecl length at DomNode.ceylon (37:8-37:41)
    var length$528565=nodePeers$528564.length;
    //'for' statement at DomNode.ceylon (38:8-41:8)
    var it$528566 = (function(){var tmpvar$528568=length$528565;
    if (tmpvar$528568>0){
    var tmpvar$528569=(0);
    var tmpvar$528570=tmpvar$528569;
    for (var i=1; i<tmpvar$528568; i++){tmpvar$528570=tmpvar$528570.successor;}
    return $$$cl527366.Range(tmpvar$528569,tmpvar$528570,{})
    }else return $$$cl527366.getEmpty();}()).iterator();
    var i$528567;while ((i$528567=it$528566.next())!==$$$cl527366.getFinished()){
        
        //AttributeDecl nodePeer at DomNode.ceylon (39:12-39:48)
        var nodePeer$528571=nodePeers$528564.item(i$528567);
        selected$528563.add((tmpvar$528572=wrap$dom(nodePeer$528571),$$$cl527366.isOfType(tmpvar$528572,{/*NO PARENT*/t:$$$cl527366.Anything})?tmpvar$528572:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'40:25-40:38','DomNode.ceylon')));
    }return selected$528563;
    /*End dynamic block*/
}
exports.querySelectorAll$dom=querySelectorAll$dom;
querySelectorAll$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:DomNode$dom},Absent:{t:$$$cl527366.Null}}},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','querySelectorAll']};};

//ClassDef DomNode at DomNode.ceylon (46:0-296:0)
function DomNode$dom(peer$528573, $$domNode){
    $init$DomNode$dom();
    if ($$domNode===undefined)$$domNode=new DomNode$dom.$$;
    $$domNode.peer$528573_=peer$528573;
    return $$domNode;
}
DomNode$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'peer',$mt:'prm',$t:{t:$$$cl527366.Anything},$an:function(){return[$$$cl527366.variable(),$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.shared(),$$$cl527366.actual()];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode']};};
exports.DomNode$dom=DomNode$dom;
function $init$DomNode$dom(){
    if (DomNode$dom.$$===undefined){
        $$$cl527366.initTypeProto(DomNode$dom,'cayla.mvc.dom::DomNode',$$$cl527366.Basic);
        (function($$domNode){
            
            //MethodDef addText at DomNode.ceylon (48:4-50:4)
            $$domNode.addText=function addText(cdata$528574){
                var $$domNode=this;
                return $$domNode.addChild(text$dom(cdata$528574));
            };$$domNode.addText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'cdata',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','addText']};};
            
            //MethodDef getChildren at DomNode.ceylon (52:4-63:4)
            $$domNode.getChildren=function getChildren(){
                var $$domNode=this;
                
                //AttributeDecl children at DomNode.ceylon (53:8-53:60)
                var children$528575=$$$cc527440.LinkedList(undefined,{Element:{t:DomNode$dom}});
                /*Begin dynamic block*/
                
                //AttributeDecl childNodes at DomNode.ceylon (55:12-55:48)
                var childNodes$528576=$$domNode.peer$528573.childNodes;
                
                //AttributeDecl length at DomNode.ceylon (56:12-56:46)
                var length$528577=childNodes$528576.length;
                //'for' statement at DomNode.ceylon (57:12-60:12)
                var it$528578 = (function(){var tmpvar$528580=length$528577;
                if (tmpvar$528580>0){
                var tmpvar$528581=(0);
                var tmpvar$528582=tmpvar$528581;
                for (var i=1; i<tmpvar$528580; i++){tmpvar$528582=tmpvar$528582.successor;}
                return $$$cl527366.Range(tmpvar$528581,tmpvar$528582,{})
                }else return $$$cl527366.getEmpty();}()).iterator();
                var i$528579;while ((i$528579=it$528578.next())!==$$$cl527366.getFinished()){
                    
                    //AttributeDecl childPeer at DomNode.ceylon (58:16-58:54)
                    var childPeer$528583=childNodes$528576.item(i$528579);
                    children$528575.add((tmpvar$528584=childPeer$528583.ref,$$$cl527366.isOfType(tmpvar$528584,{/*NO PARENT*/t:$$$cl527366.Anything})?tmpvar$528584:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'59:29-59:41','DomNode.ceylon')));
                }/*End dynamic block*/
                return children$528575;
            };$$domNode.getChildren.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Iterable,a:{Element:{t:DomNode$dom},Absent:{t:$$$cl527366.Null}}},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','getChildren']};};
            
            //MethodDef addChild at DomNode.ceylon (65:4-74:4)
            $$domNode.addChild=function addChild(node$528585){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl nodePeer at DomNode.ceylon (67:12-67:40)
                var nodePeer$528586=node$528585.peer$528573;
                nodePeer$528586.ref=null;
                
                //AttributeDecl childPeer at DomNode.ceylon (69:12-69:58)
                var childPeer$528587=$$domNode.peer$528573.appendChild(nodePeer$528586);
                childPeer$528587.ref=node$528585;
                node$528585.peer$528573=childPeer$528587;
                return node$528585;
                /*End dynamic block*/
            };$$domNode.addChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','addChild']};};
            
            //MethodDef insertBefore at DomNode.ceylon (76:4-91:4)
            $$domNode.insertBefore$defs$nextSibling=function(node$528588,nextSibling$528589){var $$domNode=this;
            return null;};
            $$domNode.insertBefore=function insertBefore(node$528588,nextSibling$528589){
                var $$domNode=this;
                if(nextSibling$528589===undefined){nextSibling$528589=$$domNode.insertBefore$defs$nextSibling(node$528588,nextSibling$528589);}
                /*Begin dynamic block*/
                
                //AttributeDecl nodePeer at DomNode.ceylon (78:12-78:40)
                var nodePeer$528590=node$528588.peer$528573;
                nodePeer$528590.ref=null;
                
                //AttributeDecl nextSiblingPeer at DomNode.ceylon (80:12-80:35)
                var nextSiblingPeer$528591;
                var nextSibling$528592;
                if((nextSibling$528592=nextSibling$528589)!==null){
                    nextSiblingPeer$528591=nextSibling$528592.peer$528573;
                }else {
                    nextSiblingPeer$528591=null;
                }
                //AttributeDecl childPeer at DomNode.ceylon (86:12-86:76)
                var childPeer$528593=$$domNode.peer$528573.insertBefore(nodePeer$528590,nextSiblingPeer$528591);
                childPeer$528593.ref=node$528588;
                node$528588.peer$528573=childPeer$528593;
                return node$528588;
                /*End dynamic block*/
            };$$domNode.insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'nextSibling',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:DomNode$dom}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','insertBefore']};};
            
            //MethodDef addElement at DomNode.ceylon (93:4-95:4)
            $$domNode.addElement=function addElement(name$528594){
                var $$domNode=this;
                return $$domNode.addChild(element$dom(name$528594));
            };$$domNode.addElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','addElement']};};
            
            //MethodDef setId at DomNode.ceylon (97:4-101:4)
            $$domNode.setId=function setId(id$528595){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$528573.id=id$528595;
                /*End dynamic block*/
            };$$domNode.setId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'id',$mt:'prm',$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','setId']};};
            
            //MethodDef getAttribute at DomNode.ceylon (103:4-107:4)
            $$domNode.getAttribute=function getAttribute(name$528596){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$528597=$$domNode.peer$528573.getAttribute(name$528596.valueOf()),$$$cl527366.isOfType(tmpvar$528597,{t:$$$cl527366.Anything})?tmpvar$528597:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'105:19-105:41','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','getAttribute']};};
            
            //MethodDef setAttribute at DomNode.ceylon (109:4-113:4)
            $$domNode.setAttribute=function setAttribute(name$528598,val$528599){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$528573.setAttribute(name$528598.valueOf(),val$528599.valueOf());
                /*End dynamic block*/
            };$$domNode.setAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','setAttribute']};};
            
            //MethodDef removeAttribute at DomNode.ceylon (115:4-119:4)
            $$domNode.removeAttribute=function removeAttribute(name$528600){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$528573.removeAttribute(name$528600.valueOf());
                /*End dynamic block*/
            };$$domNode.removeAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','removeAttribute']};};
            
            //MethodDef getValue at DomNode.ceylon (122:4-126:4)
            $$domNode.getValue=function getValue(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$528601=$$domNode.peer$528573.value,$$$cl527366.isOfType(tmpvar$528601,{t:$$$cl527366.Anything})?tmpvar$528601:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'124:19-124:28','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','getValue']};};
            
            //MethodDef setValue at DomNode.ceylon (129:4-133:4)
            $$domNode.setValue=function setValue(val$528602){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$528573.value=val$528602.valueOf();
                /*End dynamic block*/
            };$$domNode.setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','setValue']};};
            
            //MethodDef getNodeValue at DomNode.ceylon (136:4-140:4)
            $$domNode.getNodeValue=function getNodeValue(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$528603=$$domNode.peer$528573.nodeValue,$$$cl527366.isOfType(tmpvar$528603,{t:$$$cl527366.Anything})?tmpvar$528603:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'138:19-138:32','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.getNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.String},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','getNodeValue']};};
            
            //MethodDef setNodeValue at DomNode.ceylon (143:4-147:4)
            $$domNode.setNodeValue=function setNodeValue(val$528604){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$528573.nodeValue=val$528604.valueOf();
                /*End dynamic block*/
            };$$domNode.setNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','setNodeValue']};};
            
            //MethodDef isChecked at DomNode.ceylon (150:4-154:4)
            $$domNode.isChecked=function isChecked(){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$528605=$$domNode.peer$528573.checked,$$$cl527366.isOfType(tmpvar$528605,{t:$$$cl527366.Anything})?tmpvar$528605:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'152:19-152:30','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.isChecked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.$Boolean}]},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','isChecked']};};
            
            //MethodDef setChecked at DomNode.ceylon (157:4-161:4)
            $$domNode.setChecked=function setChecked(checked$528606){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$528573.checked=checked$528606;
                /*End dynamic block*/
            };$$domNode.setChecked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'checked',$mt:'prm',$t:{t:$$$cl527366.$Boolean},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','setChecked']};};
            
            //MethodDef addClass at DomNode.ceylon (163:4-167:4)
            $$domNode.addClass=function addClass(name$528607){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$528573.classList.add(name$528607.valueOf());
                /*End dynamic block*/
            };$$domNode.addClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','addClass']};};
            
            //MethodDef removeClass at DomNode.ceylon (169:4-173:4)
            $$domNode.removeClass=function removeClass(name$528608){
                var $$domNode=this;
                /*Begin dynamic block*/
                $$domNode.peer$528573.classList.remove(name$528608.valueOf());
                /*End dynamic block*/
            };$$domNode.removeClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','removeClass']};};
            
            //MethodDef hasClass at DomNode.ceylon (175:4-183:4)
            $$domNode.hasClass=function hasClass(name$528609){
                var $$domNode=this;
                /*Begin dynamic block*/
                if($$domNode.peer$528573.classList.contains(name$528609.valueOf())){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$domNode.hasClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','hasClass']};};
            
            //AttributeGetterDef visible at DomNode.ceylon (185:4-190:4)
            $$$cl527366.defineAttr($$domNode,'visible',function(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl current at DomNode.ceylon (187:12-187:48)
                var current$528610=$$domNode.peer$528573.style.display;
                $prop$getCurrent$528610={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},d:['cayla.mvc.dom','DomNode','$at','visible','$at','current']};}};
                $prop$getCurrent$528610.get=function(){return current$528610};
                return (tmpvar$528611=current$528610,tmpvar$528612=$$$cl527366.String("none",4),(tmpvar$528611.equals&&!tmpvar$528611.equals(tmpvar$528612))||tmpvar$528611!==tmpvar$528612);
                /*End dynamic block*/
            },function(visible$528613){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl current at DomNode.ceylon (194:12-194:48)
                var current$528614=$$domNode.peer$528573.style.display;
                $prop$getCurrent$528614={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},d:['cayla.mvc.dom','DomNode','$at','visible','$at','current']};}};
                $prop$getCurrent$528614.get=function(){return current$528614};
                
                //AttributeDecl currentlyVisible at DomNode.ceylon (195:12-195:56)
                var currentlyVisible$528615=(tmpvar$528616=current$528614,tmpvar$528617=$$$cl527366.String("none",4),(tmpvar$528616.equals&&!tmpvar$528616.equals(tmpvar$528617))||tmpvar$528616!==tmpvar$528617);
                $prop$getCurrentlyVisible$528615={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},d:['cayla.mvc.dom','DomNode','$at','visible','$at','currentlyVisible']};}};
                $prop$getCurrentlyVisible$528615.get=function(){return currentlyVisible$528615};
                if((visible$528613&&(!currentlyVisible$528615))){
                    $$domNode.peer$528573.style.display=$$$cl527366.String("",0).valueOf();
                }else {
                    if(((!visible$528613)&&currentlyVisible$528615)){
                        $$domNode.peer$528573.style.display=$$$cl527366.String("none",4).valueOf();
                    }
                }/*End dynamic block*/
            },function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$at','visible']};});
            //MethodDef matchesSelector at DomNode.ceylon (205:4-209:4)
            $$domNode.matchesSelector=function matchesSelector(selector$528618){
                var $$domNode=this;
                /*Begin dynamic block*/
                return (tmpvar$528619=_matchesSelector$dom($$domNode.peer$528573,selector$528618),$$$cl527366.isOfType(tmpvar$528619,{t:$$$cl527366.Anything})?tmpvar$528619:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'207:19-207:50','DomNode.ceylon'));
                /*End dynamic block*/
            };$$domNode.matchesSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','matchesSelector']};};
            
            //MethodDef addEventHandler at DomNode.ceylon (211:4-253:4)
            $$domNode.addEventHandler$defs$selector=function(type$528620,handler$528621,selector$528622){var $$domNode=this;
            return null;};
            $$domNode.addEventHandler=function addEventHandler(type$528620,handler$528621,selector$528622){
                var $$domNode=this;
                if(selector$528622===undefined){selector$528622=$$domNode.addEventHandler$defs$selector(type$528620,handler$528621,selector$528622);}
                
                //MethodDef f at DomNode.ceylon (212:8-249:8)
                function f$528623(eventPeer$528624){
                    /*Begin dynamic block*/
                    
                    //AttributeDecl matched at DomNode.ceylon (216:16-216:31)
                    var matched$528625;
                    var selector$528626;
                    if((selector$528626=selector$528622)!==null){
                        
                        //AttributeDecl nodePeer at DomNode.ceylon (218:20-218:64)
                        var nodePeer$528627=eventPeer$528624.target;
                        function setNodePeer$528627(nodePeer$528628){return nodePeer$528627=nodePeer$528628;};
                        while(true){
                            if((tmpvar$528629=nodePeer$528627.nodeType,tmpvar$528630=(1),(tmpvar$528629.equals&&tmpvar$528629.equals(tmpvar$528630))||tmpvar$528629===tmpvar$528630)){
                                if(_matchesSelector$dom(nodePeer$528627,selector$528626)){
                                    matched$528625=true;
                                    break;
                                }else {
                                    
                                    //AttributeDecl parentPeer at DomNode.ceylon (225:32-225:72)
                                    var parentPeer$528631=nodePeer$528627.parentNode;
                                    var parentPeer$528632;
                                    if((parentPeer$528632=parentPeer$528631)!==null){
                                        nodePeer$528627=parentPeer$528632;
                                    }else {
                                        matched$528625=false;
                                        break;
                                    }
                                }
                            }else {
                                matched$528625=false;
                                break;
                            }
                        }
                    }else {
                        matched$528625=true;
                    }if(matched$528625){
                        
                        //AttributeDecl target at DomNode.ceylon (244:20-244:59)
                        var target$528633=(tmpvar$528634=wrap$dom(eventPeer$528624.target),$$$cl527366.isOfType(tmpvar$528634,{t:DomNode$dom})?tmpvar$528634:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'244:37-244:58','DomNode.ceylon'));
                        
                        //AttributeDecl event at DomNode.ceylon (245:20-245:64)
                        var event$528635=DomEvent$dom(target$528633,eventPeer$528624);
                        handler$528621(event$528635);
                    }/*End dynamic block*/
                };f$528623.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'eventPeer',$mt:'prm',$t:{t:$$$cl527366.Anything},$an:function(){return[];}}],d:['cayla.mvc.dom','DomNode','$m','addEventHandler','$m','f']};};
                /*Begin dynamic block*/
                $$domNode.peer$528573.addEventListener(type$528620.valueOf(),f$528623,false);
                /*End dynamic block*/
            };$$domNode.addEventHandler.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:{t:DomEvent$dom}}]}}},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.String}]},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','addEventHandler']};};
            
            //MethodDef click at DomNode.ceylon (257:4-279:4)
            $$domNode.click=function click(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl event at DomNode.ceylon (259:12-259:73)
                var event$528636=$$domNode.peer$528573.ownerDocument.createEvent($$$cl527366.String("MouseEvents",11).valueOf());
                event$528636.initMouseEvent($$$cl527366.String("click",5).valueOf(),true,true,$$domNode.peer$528573.ownerDocument.defaultView,(1),(0),(0),(0),(0),false,false,false,false,(0),null);
                $$domNode.peer$528573.dispatchEvent(event$528636);
                /*End dynamic block*/
            };$$domNode.click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','click']};};
            
            //MethodDef dispatchEvent at DomNode.ceylon (281:4-286:4)
            $$domNode.dispatchEvent=function dispatchEvent(type$528637){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl event at DomNode.ceylon (283:12-283:51)
                var event$528638=(tmpvar$528639=type$528637.valueOf(),tmpvar$528640=true,tmpvar$528641=true,tmpvar$528642=(typeof Event==='undefined'?$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("Undefined type Event")),'283:28-283:32','DomNode.ceylon'):Event),tmpvar$528642.$$===undefined?new tmpvar$528642(tmpvar$528639, tmpvar$528640, tmpvar$528641):tmpvar$528642(tmpvar$528639, tmpvar$528640, tmpvar$528641));
                $$domNode.peer$528573.dispatchEvent(event$528638);
                /*End dynamic block*/
            };$$domNode.dispatchEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','dispatchEvent']};};
            
            //MethodDef detach at DomNode.ceylon (288:4-295:4)
            $$domNode.detach=function detach(){
                var $$domNode=this;
                /*Begin dynamic block*/
                
                //AttributeDecl old at DomNode.ceylon (290:12-290:30)
                var old$528643=$$domNode.peer$528573;
                $$domNode.peer$528573=$$domNode.peer$528573.parentNode.removeChild($$domNode.peer$528573);old$528643.peer=null;
                $$domNode.peer$528573.ref=$$domNode;
                /*End dynamic block*/
            };$$domNode.detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:DomNode$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomNode','$m','detach']};};
            $$$cl527366.defineAttr($$domNode,'peer$528573',function(){return this.peer$528573_;},function(DomNode$528644){return this.peer$528573_=DomNode$528644;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$cont:DomNode$dom,$an:function(){return[$$$cl527366.variable(),$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc.dom','DomNode','$at','peer']};});
        })(DomNode$dom.$$.prototype);
    }
    return DomNode$dom;
}
exports.$init$DomNode$dom=$init$DomNode$dom;
$init$DomNode$dom();

//ClassDef DomEvent at DomEvent.ceylon (1:0-14:0)
function DomEvent$dom(target, peer$528645, $$domEvent){
    $init$DomEvent$dom();
    if ($$domEvent===undefined)$$domEvent=new DomEvent$dom.$$;
    $$domEvent.target_=target;
    $$domEvent.peer$528645_=peer$528645;
    return $$domEvent;
}
DomEvent$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'target',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[$$$cl527366.shared()];}},{$nm:'peer',$mt:'prm',$t:{t:$$$cl527366.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomEvent']};};
exports.DomEvent$dom=DomEvent$dom;
function $init$DomEvent$dom(){
    if (DomEvent$dom.$$===undefined){
        $$$cl527366.initTypeProto(DomEvent$dom,'cayla.mvc.dom::DomEvent',$$$cl527366.Basic);
        (function($$domEvent){
            
            //AttributeGetterDef keyCode at DomEvent.ceylon (3:4-7:4)
            $$$cl527366.defineAttr($$domEvent,'keyCode',function(){
                var $$domEvent=this;
                /*Begin dynamic block*/
                return (tmpvar$528646=$$domEvent.peer$528645.keyCode,$$$cl527366.isOfType(tmpvar$528646,{t:$$$cl527366.Anything})?tmpvar$528646:$$$cl527366.throwexc($$$cl527366.Exception($$$cl527366.String("dynamic objects cannot be used here")),'5:19-5:30','DomEvent.ceylon'));
                /*End dynamic block*/
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:DomEvent$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomEvent','$at','keyCode']};});
            //MethodDef preventDefault at DomEvent.ceylon (9:4-13:4)
            $$domEvent.preventDefault=function preventDefault(){
                var $$domEvent=this;
                /*Begin dynamic block*/
                $$domEvent.peer$528645.preventDefault();
                /*End dynamic block*/
            };$$domEvent.preventDefault.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:DomEvent$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomEvent','$m','preventDefault']};};
            $$$cl527366.defineAttr($$domEvent,'target',function(){return this.target_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DomNode$dom},$cont:DomEvent$dom,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomEvent','$at','target']};});
            $$$cl527366.defineAttr($$domEvent,'peer$528645',function(){return this.peer$528645_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$cont:DomEvent$dom,d:['cayla.mvc.dom','DomEvent','$at','peer']};});
        })(DomEvent$dom.$$.prototype);
    }
    return DomEvent$dom;
}
exports.$init$DomEvent$dom=$init$DomEvent$dom;
$init$DomEvent$dom();

//InterfaceDef DomContext at DomContext.ceylon (1:0-2:0)
function DomContext$dom($$domContext){
}
DomContext$dom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc.dom','DomContext']};};
exports.DomContext$dom=DomContext$dom;
function $init$DomContext$dom(){
    if (DomContext$dom.$$===undefined){
        $$$cl527366.initTypeProtoI(DomContext$dom,'cayla.mvc.dom::DomContext');
    }
    return DomContext$dom;
}
exports.$init$DomContext$dom=$init$DomContext$dom;
$init$DomContext$dom();

//ClassDef Frame at dependant.ceylon (3:0-5:0)
function Frame($$frame){
    $init$Frame();
    if ($$frame===undefined)$$frame=new Frame.$$;
    
    //AttributeDecl observables at dependant.ceylon (4:4-4:82)
    $$frame.observables$528647_=$$$cc527440.HashSet(undefined,{Element:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}});
    $$frame.$prop$getObservables={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.HashSet,a:{Element:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}}},$cont:Frame,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Frame','$at','observables']};}};
    $$frame.$prop$getObservables.get=function(){return observables};
    return $$frame;
}
Frame.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],d:['cayla.mvc','Frame']};};
function $init$Frame(){
    if (Frame.$$===undefined){
        $$$cl527366.initTypeProto(Frame,'cayla.mvc::Frame',$$$cl527366.Basic);
        (function($$frame){
            
            //AttributeDecl observables at dependant.ceylon (4:4-4:82)
            $$$cl527366.defineAttr($$frame,'observables',function(){return this.observables$528647_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.HashSet,a:{Element:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}}},$cont:Frame,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Frame','$at','observables']};});
        })(Frame.$$.prototype);
    }
    return Frame;
}
exports.$init$Frame=$init$Frame;
$init$Frame();

//ObjectDef dependant at dependant.ceylon (7:0-26:0)
function dependant$528648(){
    var $$dependant=new dependant$528648.$$;
    
    //AttributeDecl stack at dependant.ceylon (9:4-9:37)
    $$dependant.stack$528649_=$$$cc527440.LinkedList(undefined,{Element:{t:Frame}});
    $$dependant.$prop$getStack$528649={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:{t:Frame}}},$cont:dependant$528648,d:['cayla.mvc','dependant','$at','stack']};}};
    $$dependant.$prop$getStack$528649.get=function(){return stack$528649};
    return $$dependant;
};dependant$528648.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},d:['cayla.mvc','dependant']};};
function $init$dependant$528648(){
    if (dependant$528648.$$===undefined){
        $$$cl527366.initTypeProto(dependant$528648,'cayla.mvc::dependant',$$$cl527366.Basic);
        (function($$dependant){
            
            //AttributeDecl stack at dependant.ceylon (9:4-9:37)
            $$$cl527366.defineAttr($$dependant,'stack$528649',function(){return this.stack$528649_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:{t:Frame}}},$cont:dependant$528648,d:['cayla.mvc','dependant','$at','stack']};});
            
            //MethodDef begin at dependant.ceylon (11:4-13:4)
            $$dependant.begin=function begin(){
                var $$dependant=this;
                $$dependant.stack$528649.add(Frame());
            };$$dependant.begin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:dependant$528648,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','dependant','$m','begin']};};
            
            //MethodDef report at dependant.ceylon (15:4-19:4)
            $$dependant.report=function report(observable$528650){
                var $$dependant=this;
                var last$528651;
                if((last$528651=$$dependant.stack$528649.last)!==null){
                    last$528651.observables.add(observable$528650);
                }
            };$$dependant.report.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'observable',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}},$an:function(){return[];}}],$cont:dependant$528648,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','dependant','$m','report']};};
            
            //MethodDef end at dependant.ceylon (21:4-24:4)
            $$dependant.end=function end(){
                var $$dependant=this;
                //assert at dependant.ceylon (22:8-22:47)
                var ret$528652;
                if (!((ret$528652=$$dependant.stack$528649.removeLast())!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists ret = stack.removeLast()\' at dependant.ceylon (22:14-22:46)"),'22:8-22:47','dependant.ceylon'); }
                return ret$528652.observables;
            };$$dependant.end.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Set,a:{Element:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}}},$ps:[],$cont:dependant$528648,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','dependant','$m','end']};};
        })(dependant$528648.$$.prototype);
    }
    return dependant$528648;
}
exports.$init$dependant$528648=$init$dependant$528648;
$init$dependant$528648();
var dependant$528653;
function getDependant(){
    if (dependant$528653===undefined){dependant$528653=$init$dependant$528648()();dependant$528653.$$metamodel$$=getDependant.$$metamodel$$;}
    return dependant$528653;
}
getDependant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dependant$528648},d:['cayla.mvc','dependant']};};
$prop$getDependant={get:getDependant,$$metamodel$$:getDependant.$$metamodel$$};
exports.$prop$getDependant=$prop$getDependant;

//ObjectDef binders at binders.ceylon (5:0-194:0)
function binders$528654(){
    var $$binders=new binders$528654.$$;
    
    //ObjectDef enter at binders.ceylon (7:4-19:4)
    $$binders.enter$528655_=$$binders.enter$528656();
    
    //ObjectDef checked at binders.ceylon (42:4-58:4)
    $$binders.checked$528657_=$$binders.checked$528658();
    
    //ObjectDef text at binders.ceylon (94:4-112:4)
    $$binders.text$528659_=$$binders.text$528660();
    
    //ObjectDef val at binders.ceylon (114:4-134:4)
    $$binders.val$528661_=$$binders.val$528662();
    return $$binders;
};binders$528654.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders']};};
function $init$binders$528654(){
    if (binders$528654.$$===undefined){
        $$$cl527366.initTypeProto(binders$528654,'cayla.mvc::binders',$$$cl527366.Basic);
        (function($$binders){
            
            //ObjectDef enter at binders.ceylon (7:4-19:4)
            function enter$528656($$targs$$){
                var $$enter$binders=new this.enter$528656.$$;
                $$enter$binders.$$outer=this;
                $$enter$binders.$$targs$$=$$targs$$;
                Binder({Value:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}}},$$enter$binders);
                $$$cl527366.add_type_arg($$enter$binders,'Value',{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}});
                return $$enter$binders;
            };enter$528656.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$cont:binders$528654,satisfies:[{t:Binder,a:{Value:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}}}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','enter']};};
            function $init$enter$528656(){
                if (enter$528656.$$===undefined){
                    $$$cl527366.initTypeProto(enter$528656,'cayla.mvc::binders.enter',$$$cl527366.Basic,$init$Binder());
                    binders$528654.enter$528656=enter$528656;
                    (function($$enter$binders){
                        
                        //MethodDef init at binders.ceylon (8:8-16:8)
                        $$enter$binders.init=function init(val$528663,context$528664){
                            var $$enter$binders=this;
                            
                            //MethodDef f at binders.ceylon (9:12-14:12)
                            function f$528665(event$528666){
                                //assert at binders.ceylon (10:16-10:58)
                                var v$528667;
                                if (!((v$528667=event$528666.target.getValue())!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists v = event.target.getValue()\' at binders.ceylon (10:22-10:57)"),'10:16-10:58','binders.ceylon'); }
                                if(event$528666.keyCode.equals((13))){
                                    val$528663();
                                }
                            };f$528665.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['cayla.mvc','binders','$o','enter','$m','init','$m','f']};};
                            context$528664.node.addEventHandler($$$cl527366.String("keyup",5),$$$cl527366.$JsCallable(f$528665,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                        };$$enter$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:enter$528656,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$o','enter','$m','init']};};
                        
                        //MethodDef update at binders.ceylon (17:8-18:8)
                        $$enter$binders.update=function update(node$528668,val$528669){
                            var $$enter$binders=this;
                        };$$enter$binders.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}},$an:function(){return[];}}],$cont:enter$528656,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$o','enter','$m','update']};};
                    })(enter$528656.$$.prototype);
                }
                return enter$528656;
            }
            $$binders.$init$enter$528656=$init$enter$528656;
            $init$enter$528656();
            $$$cl527366.defineAttr($$binders,'enter',function(){return this.enter$528655_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654.enter$528656},$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','enter']};});
            $$binders.enter$528656=enter$528656;$$binders.enter$528656.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654.enter$528656},$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','enter']};};
            
            //MethodDef click at binders.ceylon (21:4-40:4)
            $$binders.click=function click($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (22:8-38:8)
                function impl$528670($$targs$$){
                    var $$impl$528670=new impl$528670.$$;
                    $$impl$528670.$$targs$$=$$targs$$;
                    Binder({Value:{t:'u', l:[{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}},{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}}]}},$$impl$528670);
                    return $$impl$528670;
                };impl$528670.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},satisfies:[{t:Binder,a:{Value:{t:'u', l:[{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}}]}}}],d:['cayla.mvc','binders','$m','click','$o','impl']};};
                function $init$impl$528670(){
                    if (impl$528670.$$===undefined){
                        $$$cl527366.initTypeProto(impl$528670,'cayla.mvc::binders.click.impl',$$$cl527366.Basic,$init$Binder());
                        (function($$impl$528670){
                            
                            //MethodDef init at binders.ceylon (23:12-34:12)
                            $$impl$528670.init=function init(val$528671,context$528672){
                                var $$impl$528670=this;
                                var val$528673;
                                if($$$cl527366.isOfType((val$528673=val$528671),{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}})){
                                    var s$528674;
                                    if((s$528674=context$528672.resolve({Value:$$$mptypes.Source}))!==null){
                                        context$528672.node.addEventHandler($$$cl527366.String("click",5),$$$cl527366.$JsCallable((function (event$528675){
                                            return val$528673(s$528674);
                                        }),[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                                    }else {}
                                }else {
                                    var val$528676;
                                    if($$$cl527366.isOfType((val$528676=val$528671),{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}})){
                                        context$528672.node.addEventHandler($$$cl527366.String("click",5),$$$cl527366.$JsCallable((function (event$528677){
                                            return val$528676();
                                        }),[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                                    }
                                }
                            };$$impl$528670.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}}]},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$528670,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','click','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (36:12-37:12)
                            $$impl$528670.update=function update(node$528678,val$528679){
                                var $$impl$528670=this;
                            };$$impl$528670.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}}]},$an:function(){return[];}}],$cont:impl$528670,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','click','$o','impl','$m','update']};};
                        })(impl$528670.$$.prototype);
                    }
                    return impl$528670;
                }
                $init$impl$528670();
                var impl$528680;
                function getImpl$528680(){
                    if (impl$528680===undefined){impl$528680=$init$impl$528670()({Value:{t:'u', l:[{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[$$$mptypes.Source]}}},{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}}]}});impl$528680.$$metamodel$$=getImpl$528680.$$metamodel$$;}
                    return impl$528680;
                }
                getImpl$528680.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$528670},d:['cayla.mvc','binders','$m','click','$o','impl']};};
                $prop$getImpl$528680={get:getImpl$528680,$$metamodel$$:getImpl$528680.$$metamodel$$};
                return getImpl$528680();
            };$$binders.click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:'u', l:[{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Source'}]}}},{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:$$$cl527366.Empty}}}]}}},$ps:[],$cont:binders$528654,$tp:{Source:{'satisfies':[{t:$$$cl527366.$Object}],'def':{t:$$$cl527366.$Object}}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$m','click']};};
            
            //ObjectDef checked at binders.ceylon (42:4-58:4)
            function checked$528658($$targs$$){
                var $$checked$binders=new this.checked$528658.$$;
                $$checked$binders.$$outer=this;
                $$checked$binders.$$targs$$=$$targs$$;
                Binder({Value:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}}},$$checked$binders);
                $$$cl527366.add_type_arg($$checked$binders,'Value',{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}});
                return $$checked$binders;
            };checked$528658.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$cont:binders$528654,satisfies:[{t:Binder,a:{Value:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}}}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','checked']};};
            function $init$checked$528658(){
                if (checked$528658.$$===undefined){
                    $$$cl527366.initTypeProto(checked$528658,'cayla.mvc::binders.checked',$$$cl527366.Basic,$init$Binder());
                    binders$528654.checked$528658=checked$528658;
                    (function($$checked$binders){
                        
                        //MethodDef init at binders.ceylon (43:8-55:8)
                        $$checked$binders.init=function init(property$528681,context$528682){
                            var $$checked$binders=this;
                            
                            //MethodDef f at binders.ceylon (44:12-49:12)
                            function f$528683(event$528684){
                                
                                //AttributeDecl target at binders.ceylon (45:16-45:43)
                                var target$528685=event$528684.target;
                                
                                //AttributeDecl checked at binders.ceylon (46:16-46:50)
                                var checked$528686=target$528685.isChecked();
                                //assert at binders.ceylon (47:16-47:39)
                                var checked$528687;
                                if (!((checked$528687=checked$528686)!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists checked\' at binders.ceylon (47:23-47:38)"),'47:16-47:39','binders.ceylon'); }
                                property$528681.setValue(checked$528687);
                            };f$528683.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['cayla.mvc','binders','$o','checked','$m','init','$m','f']};};
                            context$528682.node.addEventHandler($$$cl527366.String("click",5),$$$cl527366.$JsCallable(f$528683,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                            property$528681.subscribe($$$cl527366.$JsCallable((function (prop$528688){
                                return context$528682.node.setChecked(prop$528688);
                            }),[{$nm:'prop',$mt:'prm',$t:{t:$$$cl527366.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.$Boolean}]}}));
                            if(property$528681.getValue()){
                                context$528682.node.setAttribute($$$cl527366.String("checked",7),$$$cl527366.String("",0));
                            }
                        };$$checked$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:checked$528658,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$o','checked','$m','init']};};
                        
                        //MethodDef update at binders.ceylon (56:8-57:8)
                        $$checked$binders.update=function update(node$528689,property$528690){
                            var $$checked$binders=this;
                        };$$checked$binders.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl527366.$Boolean}}},$an:function(){return[];}}],$cont:checked$528658,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$o','checked','$m','update']};};
                    })(checked$528658.$$.prototype);
                }
                return checked$528658;
            }
            $$binders.$init$checked$528658=$init$checked$528658;
            $init$checked$528658();
            $$$cl527366.defineAttr($$binders,'checked',function(){return this.checked$528657_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654.checked$528658},$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','checked']};});
            $$binders.checked$528658=checked$528658;$$binders.checked$528658.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654.checked$528658},$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','checked']};};
            
            //MethodDef css at binders.ceylon (60:4-77:4)
            $$binders.css=function css(className$528691){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (61:8-75:8)
                function impl$528692($$targs$$){
                    var $$impl$528692=new impl$528692.$$;
                    $$impl$528692.$$targs$$=$$targs$$;
                    Binder({Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}},$$impl$528692);
                    $$$cl527366.add_type_arg($$impl$528692,'Value',{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}});
                    return $$impl$528692;
                };impl$528692.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}}],d:['cayla.mvc','binders','$m','css','$o','impl']};};
                function $init$impl$528692(){
                    if (impl$528692.$$===undefined){
                        $$$cl527366.initTypeProto(impl$528692,'cayla.mvc::binders.css.impl',$$$cl527366.Basic,$init$Binder());
                        (function($$impl$528692){
                            
                            //MethodDef init at binders.ceylon (62:12-72:12)
                            $$impl$528692.init=function init(val$528693,context$528694){
                                var $$impl$528692=this;
                                
                                //MethodDef g at binders.ceylon (63:16-69:16)
                                function g$528695(p$528696){
                                    if(p$528696){
                                        context$528694.node.addClass(className$528691);
                                    }else {
                                        context$528694.node.removeClass(className$528691);
                                    }
                                };g$528695.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl527366.$Boolean},$an:function(){return[];}}],d:['cayla.mvc','binders','$m','css','$o','impl','$m','init','$m','g']};};
                                val$528693.subscribe($$$cl527366.$JsCallable(g$528695,[{$nm:'p',$mt:'prm',$t:{t:$$$cl527366.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.$Boolean}]}}));
                                g$528695(val$528693.getValue());
                            };$$impl$528692.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$528692,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','css','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (73:12-74:12)
                            $$impl$528692.update=function update(node$528697,val$528698){
                                var $$impl$528692=this;
                            };$$impl$528692.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$an:function(){return[];}}],$cont:impl$528692,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','css','$o','impl','$m','update']};};
                        })(impl$528692.$$.prototype);
                    }
                    return impl$528692;
                }
                $init$impl$528692();
                var impl$528699;
                function getImpl$528699(){
                    if (impl$528699===undefined){impl$528699=$init$impl$528692()({Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}});impl$528699.$$metamodel$$=getImpl$528699.$$metamodel$$;}
                    return impl$528699;
                }
                getImpl$528699.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$528692},d:['cayla.mvc','binders','$m','css','$o','impl']};};
                $prop$getImpl$528699={get:getImpl$528699,$$metamodel$$:getImpl$528699.$$metamodel$$};
                return getImpl$528699();
            };$$binders.css.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$m','css']};};
            
            //MethodDef visible at binders.ceylon (79:4-92:4)
            $$binders.visible=function visible(){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (80:8-90:8)
                function impl$528700($$targs$$){
                    var $$impl$528700=new impl$528700.$$;
                    $$impl$528700.$$targs$$=$$targs$$;
                    Binder({Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}},$$impl$528700);
                    $$$cl527366.add_type_arg($$impl$528700,'Value',{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}});
                    return $$impl$528700;
                };impl$528700.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}}],d:['cayla.mvc','binders','$m','visible','$o','impl']};};
                function $init$impl$528700(){
                    if (impl$528700.$$===undefined){
                        $$$cl527366.initTypeProto(impl$528700,'cayla.mvc::binders.visible.impl',$$$cl527366.Basic,$init$Binder());
                        (function($$impl$528700){
                            
                            //MethodDef init at binders.ceylon (81:12-87:12)
                            $$impl$528700.init=function init(val$528701,context$528702){
                                var $$impl$528700=this;
                                
                                //MethodDef g at binders.ceylon (82:16-84:16)
                                function g$528703(p$528704){
                                    (tmp$528705=context$528702.node,tmp$528705.visible=p$528704,tmp$528705.visible);
                                    var tmp$528705;
                                };g$528703.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl527366.$Boolean},$an:function(){return[];}}],d:['cayla.mvc','binders','$m','visible','$o','impl','$m','init','$m','g']};};
                                val$528701.subscribe($$$cl527366.$JsCallable(g$528703,[{$nm:'p',$mt:'prm',$t:{t:$$$cl527366.$Boolean},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.$Boolean}]}}));
                                g$528703(val$528701.getValue());
                            };$$impl$528700.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$528700,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','visible','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (88:12-89:12)
                            $$impl$528700.update=function update(node$528706,val$528707){
                                var $$impl$528700=this;
                            };$$impl$528700.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}},$an:function(){return[];}}],$cont:impl$528700,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','visible','$o','impl','$m','update']};};
                        })(impl$528700.$$.prototype);
                    }
                    return impl$528700;
                }
                $init$impl$528700();
                var impl$528708;
                function getImpl$528708(){
                    if (impl$528708===undefined){impl$528708=$init$impl$528700()({Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}});impl$528708.$$metamodel$$=getImpl$528708.$$metamodel$$;}
                    return impl$528708;
                }
                getImpl$528708.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$528700},d:['cayla.mvc','binders','$m','visible','$o','impl']};};
                $prop$getImpl$528708={get:getImpl$528708,$$metamodel$$:getImpl$528708.$$metamodel$$};
                return getImpl$528708();
            };$$binders.visible.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Boolean}}}}},$ps:[],$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$m','visible']};};
            
            //ObjectDef text at binders.ceylon (94:4-112:4)
            function text$528660($$targs$$){
                var $$text$binders=new this.text$528660.$$;
                $$text$binders.$$outer=this;
                $$text$binders.$$targs$$=$$targs$$;
                Binder({Value:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}},$$text$binders);
                $$$cl527366.add_type_arg($$text$binders,'Value',{t:Observable,a:{Value:{t:$$$cl527366.$Object}}});
                return $$text$binders;
            };text$528660.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$cont:binders$528654,satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','text']};};
            function $init$text$528660(){
                if (text$528660.$$===undefined){
                    $$$cl527366.initTypeProto(text$528660,'cayla.mvc::binders.text',$$$cl527366.Basic,$init$Binder());
                    binders$528654.text$528660=text$528660;
                    (function($$text$binders){
                        
                        //MethodDef init at binders.ceylon (95:8-109:8)
                        $$text$binders.init=function init(property$528709,context$528710){
                            var $$text$binders=this;
                            
                            //MethodDef g at binders.ceylon (96:12-102:12)
                            function g$528711(p$528712){
                                //'for' statement at binders.ceylon (97:16-99:16)
                                var it$528713 = context$528710.node.getChildren().iterator();
                                var child$528714;while ((child$528714=it$528713.next())!==$$$cl527366.getFinished()){
                                    child$528714.detach();
                                }
                                
                                //AttributeDecl init at binders.ceylon (100:16-100:48)
                                var init$528715=property$528709.getValue();
                                context$528710.node.addText(init$528715.string);
                            };g$528711.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[];}}],d:['cayla.mvc','binders','$o','text','$m','init','$m','g']};};
                            property$528709.subscribe($$$cl527366.$JsCallable(g$528711,[{$nm:'p',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.$Object}]}}));
                            //'for' statement at binders.ceylon (104:12-106:12)
                            var it$528716 = context$528710.node.getChildren().iterator();
                            var child$528717;while ((child$528717=it$528716.next())!==$$$cl527366.getFinished()){
                                child$528717.detach();
                            }
                            
                            //AttributeDecl init at binders.ceylon (107:12-107:44)
                            var init$528718=property$528709.getValue();
                            context$528710.node.addText(init$528718.string);
                        };$$text$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:text$528660,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$o','text','$m','init']};};
                        
                        //MethodDef update at binders.ceylon (110:8-111:8)
                        $$text$binders.update=function update(node$528719,property$528720){
                            var $$text$binders=this;
                        };$$text$binders.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'property',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}},$an:function(){return[];}}],$cont:text$528660,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$o','text','$m','update']};};
                    })(text$528660.$$.prototype);
                }
                return text$528660;
            }
            $$binders.$init$text$528660=$init$text$528660;
            $init$text$528660();
            $$$cl527366.defineAttr($$binders,'text',function(){return this.text$528659_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654.text$528660},$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','text']};});
            $$binders.text$528660=text$528660;$$binders.text$528660.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654.text$528660},$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','text']};};
            
            //ObjectDef val at binders.ceylon (114:4-134:4)
            function val$528662($$targs$$){
                var $$val$binders=new this.val$528662.$$;
                $$val$binders.$$outer=this;
                $$val$binders.$$targs$$=$$targs$$;
                Binder({Value:{t:Property,a:{Value:{t:$$$cl527366.String}}}},$$val$binders);
                $$$cl527366.add_type_arg($$val$binders,'Value',{t:Property,a:{Value:{t:$$$cl527366.String}}});
                return $$val$binders;
            };val$528662.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$cont:binders$528654,satisfies:[{t:Binder,a:{Value:{t:Property,a:{Value:{t:$$$cl527366.String}}}}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','val']};};
            function $init$val$528662(){
                if (val$528662.$$===undefined){
                    $$$cl527366.initTypeProto(val$528662,'cayla.mvc::binders.val',$$$cl527366.Basic,$init$Binder());
                    binders$528654.val$528662=val$528662;
                    (function($$val$binders){
                        
                        //MethodDef init at binders.ceylon (115:8-131:8)
                        $$val$binders.init=function init(property$528721,context$528722){
                            var $$val$binders=this;
                            
                            //MethodDef f at binders.ceylon (116:12-124:12)
                            function f$528723(event$528724){
                                //assert at binders.ceylon (117:16-117:58)
                                var v$528725;
                                if (!((v$528725=event$528724.target.getValue())!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists v = event.target.getValue()\' at binders.ceylon (117:22-117:57)"),'117:16-117:58','binders.ceylon'); }
                                property$528721.setValue(v$528725);
                            };f$528723.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],d:['cayla.mvc','binders','$o','val','$m','init','$m','f']};};
                            context$528722.node.addEventHandler($$$cl527366.String("keyup",5),$$$cl527366.$JsCallable(f$528723,[{$nm:'event',$mt:'prm',$t:{t:DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:DomEvent$dom}]}}));
                            
                            //MethodDef g at binders.ceylon (126:12-128:12)
                            function g$528726(p$528727){
                                context$528722.node.setValue(property$528721.getValue());
                            };g$528726.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'p',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],d:['cayla.mvc','binders','$o','val','$m','init','$m','g']};};
                            property$528721.subscribe($$$cl527366.$JsCallable(g$528726,[{$nm:'p',$mt:'prm',$t:{t:$$$cl527366.String},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.String}]}}));
                            context$528722.node.setValue(property$528721.getValue());
                        };$$val$binders.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:val$528662,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$o','val','$m','init']};};
                        
                        //MethodDef update at binders.ceylon (132:8-133:8)
                        $$val$binders.update=function update(node$528728,property$528729){
                            var $$val$binders=this;
                        };$$val$binders.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'property',$mt:'prm',$t:{t:Property,a:{Value:{t:$$$cl527366.String}}},$an:function(){return[];}}],$cont:val$528662,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$o','val','$m','update']};};
                    })(val$528662.$$.prototype);
                }
                return val$528662;
            }
            $$binders.$init$val$528662=$init$val$528662;
            $init$val$528662();
            $$$cl527366.defineAttr($$binders,'val',function(){return this.val$528661_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654.val$528662},$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','val']};});
            $$binders.val$528662=val$528662;$$binders.val$528662.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654.val$528662},$cont:binders$528654,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$o','val']};};
            
            //MethodDef with at binders.ceylon (136:4-147:4)
            $$binders.$with=function $with($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (137:8-145:8)
                function impl$528730($$targs$$){
                    var $$impl$528730=new impl$528730.$$;
                    $$impl$528730.$$targs$$=$$targs$$;
                    Binder({Value:{t:Observable,a:{Value:$$$mptypes.Value}}},$$impl$528730);
                    $$$cl527366.add_type_arg($$impl$528730,'Value',{t:Observable,a:{Value:$$$mptypes.Value}});
                    return $$impl$528730;
                };impl$528730.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:'Value'}}}}],d:['cayla.mvc','binders','$m','with','$o','impl']};};
                function $init$impl$528730(){
                    if (impl$528730.$$===undefined){
                        $$$cl527366.initTypeProto(impl$528730,'cayla.mvc::binders.with.impl',$$$cl527366.Basic,$init$Binder());
                        (function($$impl$528730){
                            
                            //MethodDef init at binders.ceylon (138:12-142:12)
                            $$impl$528730.init=function init(val$528731,context$528732){
                                var $$impl$528730=this;
                                
                                //AttributeDecl v at binders.ceylon (139:16-139:40)
                                var v$528733=val$528731.getValue();
                                
                                //AttributeDecl child at binders.ceylon (140:16-140:46)
                                var child$528734=context$528732.child(v$528733);
                                (tmp$528735=context$528732,tmp$528735.createChildren=false,tmp$528735.createChildren);
                                var tmp$528735;
                            };$$impl$528730.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:'Value'}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$528730,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','with','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (143:12-144:12)
                            $$impl$528730.update=function update(node$528736,val$528737){
                                var $$impl$528730=this;
                            };$$impl$528730.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:'Value'}},$an:function(){return[];}}],$cont:impl$528730,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','with','$o','impl','$m','update']};};
                        })(impl$528730.$$.prototype);
                    }
                    return impl$528730;
                }
                $init$impl$528730();
                var impl$528738;
                function getImpl$528738(){
                    if (impl$528738===undefined){impl$528738=$init$impl$528730()({Value:{t:Observable,a:{Value:$$$mptypes.Value}}});impl$528738.$$metamodel$$=getImpl$528738.$$metamodel$$;}
                    return impl$528738;
                }
                getImpl$528738.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$528730},d:['cayla.mvc','binders','$m','with','$o','impl']};};
                $prop$getImpl$528738={get:getImpl$528738,$$metamodel$$:getImpl$528738.$$metamodel$$};
                return getImpl$528738();
            };$$binders.$with.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:Observable,a:{Value:'Value'}}}},$ps:[],$cont:binders$528654,$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$m','with']};};
            
            //MethodDef foreach at binders.ceylon (149:4-193:4)
            $$binders.foreach=function foreach($$$mptypes){
                var $$binders=this;
                
                //ObjectDef impl at binders.ceylon (150:8-191:8)
                function impl$528739($$targs$$){
                    var $$impl$528739=new impl$528739.$$;
                    $$impl$528739.$$targs$$=$$targs$$;
                    Binder({Value:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:$$$mptypes.Value}}}}},$$impl$528739);
                    $$$cl527366.add_type_arg($$impl$528739,'Value',{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:$$$mptypes.Value}}}});
                    
                    //AttributeDecl values at binders.ceylon (152:12-152:58)
                    $$impl$528739.values$528740_=$$$cc527440.LinkedList(undefined,{Element:$$$mptypes.Value});
                    $$impl$528739.$prop$getValues$528740={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:'Value'}},$cont:impl$528739,d:['cayla.mvc','binders','$m','foreach','$o','impl','$at','values']};}};
                    $$impl$528739.$prop$getValues$528740.get=function(){return values$528740};
                    
                    //AttributeDecl contexts at binders.ceylon (153:12-153:78)
                    $$impl$528739.contexts$528741_=$$$cc527440.LinkedList(undefined,{Element:{t:BindingContext$view}});
                    $$impl$528739.$prop$getContexts$528741={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:{t:BindingContext$view}}},$cont:impl$528739,d:['cayla.mvc','binders','$m','foreach','$o','impl','$at','contexts']};}};
                    $$impl$528739.$prop$getContexts$528741.get=function(){return contexts$528741};
                    return $$impl$528739;
                };impl$528739.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},satisfies:[{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:'Value'}}}}}}],d:['cayla.mvc','binders','$m','foreach','$o','impl']};};
                function $init$impl$528739(){
                    if (impl$528739.$$===undefined){
                        $$$cl527366.initTypeProto(impl$528739,'cayla.mvc::binders.foreach.impl',$$$cl527366.Basic,$init$Binder());
                        (function($$impl$528739){
                            
                            //AttributeDecl values at binders.ceylon (152:12-152:58)
                            $$$cl527366.defineAttr($$impl$528739,'values$528740',function(){return this.values$528740_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:'Value'}},$cont:impl$528739,d:['cayla.mvc','binders','$m','foreach','$o','impl','$at','values']};});
                            
                            //AttributeDecl contexts at binders.ceylon (153:12-153:78)
                            $$$cl527366.defineAttr($$impl$528739,'contexts$528741',function(){return this.contexts$528741_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:{t:BindingContext$view}}},$cont:impl$528739,d:['cayla.mvc','binders','$m','foreach','$o','impl','$at','contexts']};});
                            
                            //MethodDef notify at binders.ceylon (155:12-180:12)
                            $$impl$528739.notify$528742=function notify$528742(node$528743,context$528744){
                                var $$impl$528739=this;
                                return function(list$528745){
                                    
                                    //AttributeDecl index at binders.ceylon (156:16-156:42)
                                    var index$528746=(0);
                                    function setIndex$528746(index$528747){return index$528746=index$528747;};
                                    
                                    //AttributeDecl diff at binders.ceylon (157:16-157:50)
                                    var diff$528748=Diff$lcs($$impl$528739.values$528740.sequence,list$528745,{E:$$$mptypes.Value});
                                    while(true){
                                        
                                        //AttributeDecl next at binders.ceylon (159:20-159:44)
                                        var next$528749=diff$528748.next();
                                        var next$528750;
                                        if($$$cl527366.isOfType((next$528750=next$528749),{t:'T', l:[$$$mptypes.Value,{t:Change$lcs}]})){
                                            //Switch statement at binders.ceylon (161:24-175:24)
                                            var case$528751=next$528750.$get((1));
                                            if (case$528751===getRemoved$lcs()) {
                                                $$impl$528739.values$528740.remove(index$528746);
                                                //assert at binders.ceylon (164:28-164:82)
                                                var removedContext$528752;
                                                if (!((removedContext$528752=$$impl$528739.contexts$528741.remove(index$528746))!==null)) {throw $$$cl527366.wrapexc($$$cl527366.AssertionException("Assertion failed: \'exists removedContext = contexts.remove(index)\' at binders.ceylon (164:34-164:81)"),'164:28-164:82','binders.ceylon'); }
                                                removedContext$528752.destroy();
                                            }else if (case$528751===getAdded$lcs()) {
                                                
                                                //AttributeDecl v at binders.ceylon (168:28-168:45)
                                                var v$528753=next$528750.$get((0));
                                                
                                                //AttributeDecl childContext at binders.ceylon (169:28-169:74)
                                                var childContext$528754=context$528744.child(v$528753);
                                                $$impl$528739.values$528740.add(v$528753);
                                                $$impl$528739.contexts$528741.add(childContext$528754);
                                            }else if (case$528751===getSame$lcs()) {
                                                (oldindex$528755=index$528746,index$528746=oldindex$528755.successor,oldindex$528755);
                                                var oldindex$528755;
                                            }//End switch statement at binders.ceylon (161:24-175:24)
                                        }else {
                                            break;
                                        }
                                    }
                                }
                            };$$impl$528739.notify$528742.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$528739,d:['cayla.mvc','binders','$m','foreach','$o','impl','$m','notify']};};
                            
                            //MethodDef init at binders.ceylon (182:12-187:12)
                            $$impl$528739.init=function init(val$528756,context$528757){
                                var $$impl$528739=this;
                                (tmp$528758=context$528757,tmp$528758.createChildren=false,tmp$528758.createChildren);
                                var tmp$528758;
                                
                                //AttributeDecl a at binders.ceylon (184:16-184:55)
                                var a$528759=$$$cl527366.$JsCallable($$impl$528739.notify$528742(context$528757.node,context$528757),[{$nm:'p2',$mt:'prm',$t:{t:$$$cl527366.List,a:{Element:'Value'}}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.List,a:{Element:$$$mptypes.Value}}]}});
                                val$528756.subscribe($$$cl527366.$JsCallable($$impl$528739.notify$528742(context$528757.node,context$528757),[{$nm:'p2',$mt:'prm',$t:{t:$$$cl527366.List,a:{Element:'Value'}}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.List,a:{Element:$$$mptypes.Value}}]}}));
                                a$528759(val$528756.getValue());
                            };$$impl$528739.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:'Value'}}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$528739,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','foreach','$o','impl','$m','init']};};
                            
                            //MethodDef update at binders.ceylon (189:12-190:12)
                            $$impl$528739.update=function update(node$528760,val$528761){
                                var $$impl$528739=this;
                            };$$impl$528739.update.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:'Value'}}}},$an:function(){return[];}}],$cont:impl$528739,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','binders','$m','foreach','$o','impl','$m','update']};};
                        })(impl$528739.$$.prototype);
                    }
                    return impl$528739;
                }
                $init$impl$528739();
                var impl$528762;
                function getImpl$528762(){
                    if (impl$528762===undefined){impl$528762=$init$impl$528739()({Value:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:$$$mptypes.Value}}}}});impl$528762.$$metamodel$$=getImpl$528762.$$metamodel$$;}
                    return impl$528762;
                }
                getImpl$528762.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$528739},d:['cayla.mvc','binders','$m','foreach','$o','impl']};};
                $prop$getImpl$528762={get:getImpl$528762,$$metamodel$$:getImpl$528762.$$metamodel$$};
                return getImpl$528762();
            };$$binders.foreach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binder,a:{Value:{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:'Value'}}}}}},$ps:[],$cont:binders$528654,$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders','$m','foreach']};};
        })(binders$528654.$$.prototype);
    }
    return binders$528654;
}
exports.$init$binders$528654=$init$binders$528654;
$init$binders$528654();
var binders$528763;
function getBinders(){
    if (binders$528763===undefined){binders$528763=$init$binders$528654()();binders$528763.$$metamodel$$=getBinders.$$metamodel$$;}
    return binders$528763;
}
exports.getBinders=getBinders;
getBinders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:binders$528654},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','binders']};};
$prop$getBinders={get:getBinders,$$metamodel$$:getBinders.$$metamodel$$};
exports.$prop$getBinders=$prop$getBinders;

//InterfaceDef Subscription at Subscription.ceylon (1:0-5:0)
function Subscription($$subscription){
}
Subscription.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Subscription']};};
exports.Subscription=Subscription;
function $init$Subscription(){
    if (Subscription.$$===undefined){
        $$$cl527366.initTypeProtoI(Subscription,'cayla.mvc::Subscription');
        (function($$subscription){
            $$subscription.dispose={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:Subscription,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc','Subscription','$m','dispose']};}};
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
    $$$cl527366.set_type_args($$subscribers,$$targs$$);
    
    //AttributeDecl subscribers at Subscribers.ceylon (4:4-4:53)
    $$subscribers.subscribers$528764_=$$$cc527440.LinkedList(undefined,{Element:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}}});
    $$subscribers.$prop$getSubscribers$528764={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}}}},$cont:Subscribers,d:['cayla.mvc','Subscribers','$at','subscribers']};}};
    $$subscribers.$prop$getSubscribers$528764.get=function(){return subscribers$528764};
    return $$subscribers;
}
Subscribers.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},d:['cayla.mvc','Subscribers']};};
function $init$Subscribers(){
    if (Subscribers.$$===undefined){
        $$$cl527366.initTypeProto(Subscribers,'cayla.mvc::Subscribers',$$$cl527366.Basic);
        (function($$subscribers){
            
            //AttributeDecl subscribers at Subscribers.ceylon (4:4-4:53)
            $$$cl527366.defineAttr($$subscribers,'subscribers$528764',function(){return this.subscribers$528764_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}}}},$cont:Subscribers,d:['cayla.mvc','Subscribers','$at','subscribers']};});
            
            //MethodDef notify at Subscribers.ceylon (6:4-17:4)
            $$subscribers.notify=function notify(source$528765){
                var $$subscribers=this;
                if((!$$subscribers.subscribers$528764.empty)){
                    getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Subscribers ",12),$$subscribers.string,$$$cl527366.String(": start notifying changes",25)]).string);
                    //'for' statement at Subscribers.ceylon (9:12-12:12)
                    var it$528766 = $$subscribers.subscribers$528764.iterator();
                    var subscriber$528767;while ((subscriber$528767=it$528766.next())!==$$$cl527366.getFinished()){
                        getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Subscribers ",12),$$subscribers.string,$$$cl527366.String(": nofifying subscriber ",23),subscriber$528767.string]).string);
                        subscriber$528767(source$528765);
                    }
                    getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Subscribers ",12),$$subscribers.string,$$$cl527366.String(": end notifying changes",23)]).string);
                }else {
                    getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Subscribers ",12),$$subscribers.string,$$$cl527366.String(": no subscribers to notify",26)]).string);
                }
            };$$subscribers.notify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'source',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:Subscribers,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Subscribers','$m','notify']};};
            
            //MethodDef subscribe at Subscribers.ceylon (19:4-27:4)
            $$subscribers.subscribe=function subscribe(subscriber$528768){
                var $$subscribers=this;
                $$subscribers.subscribers$528764.add($$$cl527366.$JsCallable(subscriber$528768,[],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}));
                
                //ObjectDef subscription at Subscribers.ceylon (21:8-25:8)
                function subscription$528769(){
                    var $$subscription$528769=new subscription$528769.$$;
                    Subscription($$subscription$528769);
                    return $$subscription$528769;
                };subscription$528769.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},satisfies:[{t:Subscription}],d:['cayla.mvc','Subscribers','$m','subscribe','$o','subscription']};};
                function $init$subscription$528769(){
                    if (subscription$528769.$$===undefined){
                        $$$cl527366.initTypeProto(subscription$528769,'cayla.mvc::Subscribers.subscribe.subscription',$$$cl527366.Basic,$init$Subscription());
                        (function($$subscription$528769){
                            
                            //MethodDef dispose at Subscribers.ceylon (22:12-24:12)
                            $$subscription$528769.dispose=function dispose(){
                                var $$subscription$528769=this;
                                $$subscribers.subscribers$528764.removeElement($$$cl527366.$JsCallable(subscriber$528768,[],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[$$subscribers.$$targs$$.Value]}}));
                            };$$subscription$528769.dispose.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:subscription$528769,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','Subscribers','$m','subscribe','$o','subscription','$m','dispose']};};
                        })(subscription$528769.$$.prototype);
                    }
                    return subscription$528769;
                }
                $init$subscription$528769();
                var subscription$528770;
                function getSubscription$528770(){
                    if (subscription$528770===undefined){subscription$528770=$init$subscription$528769()();subscription$528770.$$metamodel$$=getSubscription$528770.$$metamodel$$;}
                    return subscription$528770;
                }
                getSubscription$528770.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:subscription$528769},d:['cayla.mvc','Subscribers','$m','subscribe','$o','subscription']};};
                $prop$getSubscription$528770={get:getSubscription$528770,$$metamodel$$:getSubscription$528770.$$metamodel$$};
                return getSubscription$528770();
            };$$subscribers.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Subscribers,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Subscribers','$m','subscribe']};};
        })(Subscribers.$$.prototype);
    }
    return Subscribers;
}
exports.$init$Subscribers=$init$Subscribers;
$init$Subscribers();

//ClassDef Property at Property.ceylon (1:0-17:0)
function Property(val$528771, $$targs$$,$$property){
    $init$Property();
    if ($$property===undefined)$$property=new Property.$$;
    $$$cl527366.set_type_args($$property,$$targs$$);
    $$property.val$528771_=val$528771;
    Observable($$property.$$targs$$===undefined?$$targs$$:{Value:$$property.$$targs$$.Value},$$property);
    
    //AttributeDecl subscribers at Property.ceylon (5:4-5:44)
    $$property.subscribers$528772_=Subscribers({Value:$$property.$$targs$$.Value});
    $$property.$prop$getSubscribers$528772={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:Property,d:['cayla.mvc','Property','$at','subscribers']};}};
    $$property.$prop$getSubscribers$528772.get=function(){return subscribers$528772};
    return $$property;
}
Property.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[$$$cl527366.variable()];}}],$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},satisfies:[{t:Observable,a:{Value:'Value'}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Property']};};
exports.Property=Property;
function $init$Property(){
    if (Property.$$===undefined){
        $$$cl527366.initTypeProto(Property,'cayla.mvc::Property',$$$cl527366.Basic,$init$Observable());
        (function($$property){
            
            //AttributeDecl subscribers at Property.ceylon (5:4-5:44)
            $$$cl527366.defineAttr($$property,'subscribers$528772',function(){return this.subscribers$528772_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:Property,d:['cayla.mvc','Property','$at','subscribers']};});
            
            //MethodDecl subscribe at Property.ceylon (6:4-6:105)
            $$property.subscribe=function (subscriber$528773){
                var $$property=this;
                return $$property.subscribers$528772.subscribe($$$cl527366.$JsCallable(subscriber$528773,[],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[$$property.$$targs$$.Value]}}));
            };
            $$property.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Property,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','Property','$m','subscribe']};};
            
            //MethodDef getValue at Property.ceylon (8:4-11:4)
            $$property.getValue=function getValue(){
                var $$property=this;
                getDependant().report($$property);
                return $$property.val$528771;
            };$$property.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:Property,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','Property','$m','getValue']};};
            
            //MethodDef setValue at Property.ceylon (13:4-16:4)
            $$property.setValue=function setValue(val$528774){
                var $$property=this;
                ($$property.val$528771=val$528774);
                $$property.subscribers$528772.notify(val$528774);
            };$$property.setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:Property,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Property','$m','setValue']};};
            $$$cl527366.defineAttr($$property,'val$528771',function(){return this.val$528771_;},function(Property$528775){return this.val$528771_=Property$528775;},function(){return{mod:$$METAMODEL$$,$t:'Value',$cont:Property,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc','Property','$at','val']};});
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
    $$$cl527366.set_type_args($$observableList,$$targs$$);
    Observable($$observableList.$$targs$$===undefined?$$targs$$:{Value:{t:$$$cl527366.List,a:{Element:$$observableList.$$targs$$.Element}}},$$observableList);
    $$$cl527366.add_type_arg($$observableList,'Value',{t:$$$cl527366.List,a:{Element:$$observableList.$$targs$$.Element}});
    $$$cc527440.MutableList($$observableList.$$targs$$===undefined?$$targs$$:{Element:$$observableList.$$targs$$.Element},$$observableList);
    
    //AttributeDecl subscribers at ObservableList.ceylon (6:4-6:52)
    $$observableList.subscribers$528776_=Subscribers({Value:{t:$$$cl527366.List,a:{Element:$$observableList.$$targs$$.Element}}});
    $$observableList.$prop$getSubscribers$528776={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:{t:$$$cl527366.List,a:{Element:'Element'}}}},$cont:ObservableList,d:['cayla.mvc','ObservableList','$at','subscribers']};}};
    $$observableList.$prop$getSubscribers$528776.get=function(){return subscribers$528776};
    
    //AttributeDecl list at ObservableList.ceylon (7:4-7:38)
    $$observableList.list$528777_=$$$cc527440.LinkedList(undefined,{Element:$$observableList.$$targs$$.Element});
    $$observableList.$prop$getList$528777={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:'Element'}},$cont:ObservableList,d:['cayla.mvc','ObservableList','$at','list']};}};
    $$observableList.$prop$getList$528777.get=function(){return list$528777};
    return $$observableList;
}
ObservableList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[],$tp:{Element:{'satisfies':[{t:$$$cl527366.$Object}]}},satisfies:[{t:Observable,a:{Value:{t:$$$cl527366.List,a:{Element:'Element'}}}},{t:$$$cc527440.MutableList,a:{Element:'Element'}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','ObservableList']};};
exports.ObservableList=ObservableList;
function $init$ObservableList(){
    if (ObservableList.$$===undefined){
        $$$cl527366.initTypeProto(ObservableList,'cayla.mvc::ObservableList',$$$cl527366.Basic,$init$Observable(),$$$cc527440.MutableList);
        (function($$observableList){
            
            //AttributeDecl subscribers at ObservableList.ceylon (6:4-6:52)
            $$$cl527366.defineAttr($$observableList,'subscribers$528776',function(){return this.subscribers$528776_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:{t:$$$cl527366.List,a:{Element:'Element'}}}},$cont:ObservableList,d:['cayla.mvc','ObservableList','$at','subscribers']};});
            
            //AttributeDecl list at ObservableList.ceylon (7:4-7:38)
            $$$cl527366.defineAttr($$observableList,'list$528777',function(){return this.list$528777_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.LinkedList,a:{Element:'Element'}},$cont:ObservableList,d:['cayla.mvc','ObservableList','$at','list']};});
            
            //MethodDecl subscribe at ObservableList.ceylon (9:4-9:113)
            $$observableList.subscribe=function (subscriber$528778){
                var $$observableList=this;
                return $$observableList.subscribers$528776.subscribe($$$cl527366.$JsCallable(subscriber$528778,[],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.List,a:{Element:$$observableList.$$targs$$.Element}}]}}));
            };
            $$observableList.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:{t:$$$cl527366.List,a:{Element:'Element'}}}]}}},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','subscribe']};};
            
            //MethodDef equals at ObservableList.ceylon (11:4-14:4)
            $$observableList.equals=function equals(that$528779){
                var $$observableList=this;
                return $$observableList.getT$all()['ceylon.language::Identifiable'].$$.prototype.equals.call(this,that$528779);
            };$$observableList.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual(),$$$cl527366.$default()];},d:['cayla.mvc','ObservableList','$m','equals']};};
            
            //AttributeGetterDef hash at ObservableList.ceylon (16:4-19:4)
            $$$cl527366.defineAttr($$observableList,'hash',function(){
                var $$observableList=this;
                return $$$cl527366.attrGetter($$observableList.getT$all()['ceylon.language::Identifiable'],'hash').call(this);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Integer},$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$at','hash']};});
            //AttributeGetterDef clone at ObservableList.ceylon (21:4-24:4)
            $$$cl527366.defineAttr($$observableList,'clone',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$528777.clone;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$at','clone']};});
            //MethodDef get at ObservableList.ceylon (26:4-29:4)
            $$observableList.$get=function $get(index$528780){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$528777.$get(index$528780);
            };$$observableList.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','get']};};
            
            //AttributeGetterDef lastIndex at ObservableList.ceylon (31:4-34:4)
            $$$cl527366.defineAttr($$observableList,'lastIndex',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$528777.lastIndex;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},{t:$$$cl527366.Integer}]},$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$at','lastIndex']};});
            //AttributeGetterDef rest at ObservableList.ceylon (36:4-39:4)
            $$$cl527366.defineAttr($$observableList,'rest',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$528777.rest;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$at','rest']};});
            //AttributeGetterDef reversed at ObservableList.ceylon (41:4-44:4)
            $$$cl527366.defineAttr($$observableList,'reversed',function(){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$528777.reversed;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'Element'}},$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$at','reversed']};});
            //MethodDef segment at ObservableList.ceylon (46:4-49:4)
            $$observableList.segment=function segment(from$528781,length$528782){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.list$528777.segment(from$528781,length$528782);
            };$$observableList.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','segment']};};
            
            //MethodDef span at ObservableList.ceylon (51:4-54:4)
            $$observableList.span=function span(from$528783,to$528784){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.span(from$528783,to$528784);
            };$$observableList.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','span']};};
            
            //MethodDef spanFrom at ObservableList.ceylon (56:4-59:4)
            $$observableList.spanFrom=function spanFrom(from$528785){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.spanFrom(from$528785);
            };$$observableList.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','spanFrom']};};
            
            //MethodDef spanTo at ObservableList.ceylon (61:4-64:4)
            $$observableList.spanTo=function spanTo(to$528786){
                var $$observableList=this;
                getDependant().report($$observableList);
                return $$observableList.spanTo(to$528786);
            };$$observableList.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','spanTo']};};
            
            //MethodDef set at ObservableList.ceylon (66:4-69:4)
            $$observableList.set=function set(index$528787,val$528788){
                var $$observableList=this;
                $$observableList.list$528777.set(index$528787,val$528788);
                $$observableList.subscribers$528776.notify($$observableList.list$528777);
            };$$observableList.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','set']};};
            
            //MethodDef insert at ObservableList.ceylon (71:4-74:4)
            $$observableList.insert=function insert(index$528789,val$528790){
                var $$observableList=this;
                $$observableList.list$528777.insert(index$528789,val$528790);
                $$observableList.subscribers$528776.notify($$observableList.list$528777);
            };$$observableList.insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','insert']};};
            
            //MethodDef addAll at ObservableList.ceylon (76:4-79:4)
            $$observableList.addAll=function addAll(values$528791){
                var $$observableList=this;
                $$observableList.list$528777.addAll(values$528791);
                $$observableList.subscribers$528776.notify($$observableList.list$528777);
            };$$observableList.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl527366.Iterable,a:{Element:'Element',Absent:{t:$$$cl527366.Null}}},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','addAll']};};
            
            //MethodDef removeElement at ObservableList.ceylon (81:4-84:4)
            $$observableList.removeElement=function removeElement(val$528792){
                var $$observableList=this;
                $$observableList.list$528777.removeElement(val$528792);
                $$observableList.subscribers$528776.notify($$observableList.list$528777);
            };$$observableList.removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','removeElement']};};
            
            //MethodDef clear at ObservableList.ceylon (86:4-89:4)
            $$observableList.clear=function clear(){
                var $$observableList=this;
                $$observableList.list$528777.clear();
                $$observableList.subscribers$528776.notify($$observableList.list$528777);
            };$$observableList.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','clear']};};
            
            //MethodDef add at ObservableList.ceylon (91:4-94:4)
            $$observableList.add=function add(element$528793){
                var $$observableList=this;
                $$observableList.list$528777.add(element$528793);
                $$observableList.subscribers$528776.notify($$observableList.list$528777);
            };$$observableList.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','add']};};
            
            //MethodDef remove at ObservableList.ceylon (96:4-100:4)
            $$observableList.remove=function remove(index$528794){
                var $$observableList=this;
                
                //AttributeDecl ret at ObservableList.ceylon (97:8-97:38)
                var ret$528795=$$observableList.list$528777.remove(index$528794);
                $$observableList.subscribers$528776.notify($$observableList.list$528777);
                return ret$528795;
            };$$observableList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl527366.Integer},$an:function(){return[];}}],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','remove']};};
            
            //MethodDef getValue at ObservableList.ceylon (102:4-104:4)
            $$observableList.getValue=function getValue(){
                var $$observableList=this;
                return $$observableList;
            };$$observableList.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.List,a:{Element:'Element'}},$ps:[],$cont:ObservableList,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ObservableList','$m','getValue']};};
        })(ObservableList.$$.prototype);
    }
    return ObservableList;
}
exports.$init$ObservableList=$init$ObservableList;
$init$ObservableList();

//InterfaceDef Observable at Observable.ceylon (2:0-17:0)
function Observable($$targs$$,$$observable){
    $$$cl527366.set_type_args($$observable,$$targs$$);
}
Observable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'out','satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Observable']};};
exports.Observable=Observable;
function $init$Observable(){
    if (Observable.$$===undefined){
        $$$cl527366.initTypeProtoI(Observable,'cayla.mvc::Observable');
        (function($$observable){
            $$observable.getValue={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:Observable,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc','Observable','$m','getValue']};}};$$observable.subscribe={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:Observable,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc','Observable','$m','subscribe']};}};
            //MethodDef bind at Observable.ceylon (8:4-16:4)
            $$observable.$bind=function $bind(handler$528796){
                var $$observable=this;
                
                //ObjectDef impl at Observable.ceylon (9:8-14:8)
                function impl$528797(){
                    var $$impl$528797=new impl$528797.$$;
                    Binding$view($$impl$528797);
                    return $$impl$528797;
                };impl$528797.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Binding$view},d:['cayla.mvc','Observable','$m','bind','$o','impl']};};
                function $init$impl$528797(){
                    if (impl$528797.$$===undefined){
                        $$$cl527366.initTypeProto(impl$528797,'cayla.mvc::Observable.bind.impl',$init$Binding$view());
                        (function($$impl$528797){
                            
                            //MethodDef init at Observable.ceylon (10:12-13:12)
                            $$impl$528797.init=function init(context$528798){
                                var $$impl$528797=this;
                                
                                //AttributeDecl v at Observable.ceylon (11:16-11:36)
                                var v$528799=$$observable.getValue();
                                handler$528796.init(v$528799,context$528798);
                            };$$impl$528797.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:impl$528797,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','Observable','$m','bind','$o','impl','$m','init']};};
                        })(impl$528797.$$.prototype);
                    }
                    return impl$528797;
                }
                $init$impl$528797();
                var impl$528800;
                function getImpl$528800(){
                    if (impl$528800===undefined){impl$528800=$init$impl$528797()();impl$528800.$$metamodel$$=getImpl$528800.$$metamodel$$;}
                    return impl$528800;
                }
                getImpl$528800.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:impl$528797},d:['cayla.mvc','Observable','$m','bind','$o','impl']};};
                $prop$getImpl$528800={get:getImpl$528800,$$metamodel$$:getImpl$528800.$$metamodel$$};
                return getImpl$528800();
            };$$observable.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Binding$view},$ps:[{$nm:'handler',$mt:'prm',$t:{t:Binder,a:{Value:'Value'}},$an:function(){return[];}}],$cont:Observable,$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Observable','$m','bind']};};
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
    $$$cl527366.Exception(undefined,undefined,$$cyclicDependencyException);
    return $$cyclicDependencyException;
}
CyclicDependencyException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Exception},$ps:[],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','CyclicDependencyException']};};
exports.CyclicDependencyException=CyclicDependencyException;
function $init$CyclicDependencyException(){
    if (CyclicDependencyException.$$===undefined){
        $$$cl527366.initTypeProto(CyclicDependencyException,'cayla.mvc::CyclicDependencyException',$$$cl527366.Exception);
    }
    return CyclicDependencyException;
}
exports.$init$CyclicDependencyException=$init$CyclicDependencyException;
$init$CyclicDependencyException();

//MethodDecl computed at ComputedObservable.ceylon (2:0-4:38)
var computed=function (compute$528801,$$$mptypes){
    return ComputedObservable($$$cl527366.$JsCallable(compute$528801,[],{Return:$$$mptypes.Value,Arguments:{t:$$$cl527366.Empty}}),{Value:$$$mptypes.Value});
};
computed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ComputedObservable,a:{Value:'Value'}},$ps:[{$nm:'compute',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:'Value',Arguments:{t:$$$cl527366.Empty}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','computed']};};
exports.computed=computed;

//ClassDef ComputedObservable at ComputedObservable.ceylon (6:0-75:0)
function ComputedObservable(compute$528802, $$targs$$,$$computedObservable){
    $init$ComputedObservable();
    if ($$computedObservable===undefined)$$computedObservable=new ComputedObservable.$$;
    $$$cl527366.set_type_args($$computedObservable,$$targs$$);
    $$computedObservable.compute$528802_=compute$528802;
    Observable($$computedObservable.$$targs$$===undefined?$$targs$$:{Value:$$computedObservable.$$targs$$.Value},$$computedObservable);
    
    //AttributeDecl subscribers at ComputedObservable.ceylon (8:4-8:44)
    $$computedObservable.subscribers$528803_=Subscribers({Value:$$computedObservable.$$targs$$.Value});
    $$computedObservable.$prop$getSubscribers$528803={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:ComputedObservable,d:['cayla.mvc','ComputedObservable','$at','subscribers']};}};
    $$computedObservable.$prop$getSubscribers$528803.get=function(){return subscribers$528803};
    
    //AttributeDecl evaluation at ComputedObservable.ceylon (9:4-9:37)
    $$computedObservable.evaluation$528804_=null;
    $$computedObservable.$prop$getEvaluation$528804={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},'Value']},$cont:ComputedObservable,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc','ComputedObservable','$at','evaluation']};}};
    $$computedObservable.$prop$getEvaluation$528804.get=function(){return evaluation$528804};
    
    //AttributeDecl evaluating at ComputedObservable.ceylon (10:4-10:39)
    $$computedObservable.evaluating$528805_=false;
    $$computedObservable.$prop$getEvaluating$528805={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$cont:ComputedObservable,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc','ComputedObservable','$at','evaluating']};}};
    $$computedObservable.$prop$getEvaluating$528805.get=function(){return evaluating$528805};
    
    //AttributeDecl dependencies at ComputedObservable.ceylon (11:4-11:68)
    $$computedObservable.dependencies$528806_=$$$cc527440.HashMap(undefined,{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}});
    $$computedObservable.$prop$getDependencies$528806={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.HashMap,a:{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}}},$cont:ComputedObservable,d:['cayla.mvc','ComputedObservable','$at','dependencies']};}};
    $$computedObservable.$prop$getDependencies$528806.get=function(){return dependencies$528806};
    return $$computedObservable;
}
ComputedObservable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl527366.Basic},$ps:[{$nm:'compute',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:'Value',Arguments:{t:$$$cl527366.Empty}}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl527366.$Object}]}},satisfies:[{t:Observable,a:{Value:'Value'}}],$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','ComputedObservable']};};
exports.ComputedObservable=ComputedObservable;
function $init$ComputedObservable(){
    if (ComputedObservable.$$===undefined){
        $$$cl527366.initTypeProto(ComputedObservable,'cayla.mvc::ComputedObservable',$$$cl527366.Basic,$init$Observable());
        (function($$computedObservable){
            
            //AttributeDecl subscribers at ComputedObservable.ceylon (8:4-8:44)
            $$$cl527366.defineAttr($$computedObservable,'subscribers$528803',function(){return this.subscribers$528803_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Subscribers,a:{Value:'Value'}},$cont:ComputedObservable,d:['cayla.mvc','ComputedObservable','$at','subscribers']};});
            
            //AttributeDecl evaluation at ComputedObservable.ceylon (9:4-9:37)
            $$$cl527366.defineAttr($$computedObservable,'evaluation$528804',function(){return this.evaluation$528804_;},function(evaluation$528807){return this.evaluation$528804_=evaluation$528807;},function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},'Value']},$cont:ComputedObservable,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc','ComputedObservable','$at','evaluation']};});
            
            //AttributeDecl evaluating at ComputedObservable.ceylon (10:4-10:39)
            $$$cl527366.defineAttr($$computedObservable,'evaluating$528805',function(){return this.evaluating$528805_;},function(evaluating$528808){return this.evaluating$528805_=evaluating$528808;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.$Boolean},$cont:ComputedObservable,$an:function(){return[$$$cl527366.variable()];},d:['cayla.mvc','ComputedObservable','$at','evaluating']};});
            
            //AttributeDecl dependencies at ComputedObservable.ceylon (11:4-11:68)
            $$$cl527366.defineAttr($$computedObservable,'dependencies$528806',function(){return this.dependencies$528806_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc527440.HashMap,a:{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}}},$cont:ComputedObservable,d:['cayla.mvc','ComputedObservable','$at','dependencies']};});
            
            //MethodDecl subscribe at ComputedObservable.ceylon (12:4-12:105)
            $$computedObservable.subscribe=function (subscriber$528809){
                var $$computedObservable=this;
                return $$computedObservable.subscribers$528803.subscribe($$$cl527366.$JsCallable(subscriber$528809,[],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[$$computedObservable.$$targs$$.Value]}}));
            };
            $$computedObservable.subscribe.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Subscription},$ps:[{$nm:'subscriber',$mt:'prm',$t:{t:$$$cl527366.Callable,a:{Return:{t:$$$cl527366.Anything},Arguments:{t:'T',l:[{$t:'Value'}]}}},$an:function(){return[];}}],$cont:ComputedObservable,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ComputedObservable','$m','subscribe']};};
            
            //MethodDef evaluate at ComputedObservable.ceylon (14:4-58:4)
            $$computedObservable.evaluate$528810=function evaluate$528810(){
                var $$computedObservable=this;
                if($$computedObservable.evaluating$528805){
                    return null;
                }else {
                    getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Computed ",9),$$computedObservable.string,$$$cl527366.String(":  starting evaluation",22)]).string);
                    $$computedObservable.evaluating$528805=true;
                    
                    //AttributeDecl e at ComputedObservable.ceylon (20:12-20:19)
                    var e$528811;
                    
                    //AttributeDecl observed at ComputedObservable.ceylon (21:12-21:44)
                    var observed$528812;
                    try{
                        getDependant().begin();
                        e$528811=$$computedObservable.compute$528802();
                    }finally{
                        observed$528812=getDependant().end();
                        $$computedObservable.evaluating$528805=false;
                        getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Computed ",9),$$computedObservable.string,$$$cl527366.String(": stopping evaluation",21)]).string);
                    }
                    //'for' statement at ComputedObservable.ceylon (31:12-37:12)
                    var it$528813 = $$$cc527440.HashMap($$computedObservable.dependencies$528806,{Item:{t:Subscription},Key:{t:Observable,a:{Value:{t:$$$cl527366.$Object}}}}).iterator();
                    var item$528814;while ((item$528814=it$528813.next())!==$$$cl527366.getFinished()){
                        var dependency$528815=item$528814.key;
                        var subscription$528816=item$528814.item;
                        if((!observed$528812.contains(dependency$528815))){
                            getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Computed ",9),$$computedObservable.string,$$$cl527366.String(": disposing subscription ",25),subscription$528816.string]).string);
                            $$computedObservable.dependencies$528806.remove(dependency$528815);
                            subscription$528816.dispose();
                        }
                    }
                    //'for' statement at ComputedObservable.ceylon (38:12-55:12)
                    var it$528817 = observed$528812.iterator();
                    var o$528818;while ((o$528818=it$528817.next())!==$$$cl527366.getFinished()){
                        var dependency$528819;
                        if((dependency$528819=$$computedObservable.dependencies$528806.$get(o$528818))!==null){}else {
                            
                            //MethodDef update at ComputedObservable.ceylon (42:20-50:20)
                            function update$528820(o$528821){
                                
                                //AttributeDecl e at ComputedObservable.ceylon (43:24-43:45)
                                var e$528822=$$computedObservable.evaluate$528810();
                                var e$528823;
                                if((e$528823=e$528822)!==null){
                                    $$computedObservable.evaluation$528804=e$528823;
                                    $$computedObservable.subscribers$528803.notify(e$528823);
                                }else {}
                            };update$528820.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[];}}],d:['cayla.mvc','ComputedObservable','$m','evaluate','$m','update']};};
                            
                            //AttributeDecl subscription at ComputedObservable.ceylon (51:20-51:60)
                            var subscription$528824=o$528818.subscribe($$$cl527366.$JsCallable(update$528820,[{$nm:'o',$mt:'prm',$t:{t:$$$cl527366.$Object},$an:function(){return[];}}],{Return:{t:$$$cl527366.Anything},Arguments:{t:'T', l:[{t:$$$cl527366.$Object}]}}));
                            getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Computed ",9),$$computedObservable.string,$$$cl527366.String(": subscribed ",13),subscription$528824.string,$$$cl527366.String(" to ",4),o$528818.string]).string);
                            $$computedObservable.dependencies$528806.put(o$528818,subscription$528824);
                        }
                    }
                    return e$528811;
                }
            };$$computedObservable.evaluate$528810.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl527366.Null},'Value']},$ps:[],$cont:ComputedObservable,d:['cayla.mvc','ComputedObservable','$m','evaluate']};};
            
            //MethodDef getValue at ComputedObservable.ceylon (60:4-74:4)
            $$computedObservable.getValue=function getValue(){
                var $$computedObservable=this;
                getDependant().report($$computedObservable);
                var e$528825;
                if((e$528825=$$computedObservable.evaluation$528804)!==null){
                    getLog().debug($$$cl527366.StringBuilder().appendAll([$$$cl527366.String("Computed ",9),$$computedObservable.string,$$$cl527366.String(": returning cached evaluation ",30),e$528825.string]).string);
                    return e$528825;
                }else {
                    
                    //AttributeDecl e at ComputedObservable.ceylon (66:12-66:33)
                    var e$528826=$$computedObservable.evaluate$528810();
                    var e$528827;
                    if((e$528827=e$528826)!==null){
                        $$computedObservable.evaluation$528804=e$528827;
                        return e$528827;
                    }else {
                        throw $$$cl527366.wrapexc(CyclicDependencyException(),'71:16-71:49','cayla/mvc/ComputedObservable.ceylon');
                    }
                }
            };$$computedObservable.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Value',$ps:[],$cont:ComputedObservable,$an:function(){return[$$$cl527366.shared(),$$$cl527366.actual()];},d:['cayla.mvc','ComputedObservable','$m','getValue']};};
            $$$cl527366.defineAttr($$computedObservable,'compute$528802',function(){return this.compute$528802_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Callable,a:{Return:'Value',Arguments:{t:$$$cl527366.Empty}}},$cont:ComputedObservable,d:['cayla.mvc','ComputedObservable','$at','compute']};});
        })(ComputedObservable.$$.prototype);
    }
    return ComputedObservable;
}
exports.$init$ComputedObservable=$init$ComputedObservable;
$init$ComputedObservable();

//InterfaceDef Binder at Binder.ceylon (3:0-9:0)
function Binder($$targs$$,$$binder){
    $$$cl527366.set_type_args($$binder,$$targs$$);
}
Binder.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Value:{'var':'in'}},$an:function(){return[$$$cl527366.shared()];},d:['cayla.mvc','Binder']};};
exports.Binder=Binder;
function $init$Binder(){
    if (Binder.$$===undefined){
        $$$cl527366.initTypeProtoI(Binder,'cayla.mvc::Binder');
        (function($$binder){
            $$binder.init={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:BindingContext$view},$an:function(){return[];}}],$cont:Binder,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc','Binder','$m','init']};}};$$binder.update={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl527366.Anything},$ps:[{$nm:'node',$mt:'prm',$t:{t:DomNode$dom},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Value',$an:function(){return[];}}],$cont:Binder,$an:function(){return[$$$cl527366.shared(),$$$cl527366.formal()];},d:['cayla.mvc','Binder','$m','update']};}};
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

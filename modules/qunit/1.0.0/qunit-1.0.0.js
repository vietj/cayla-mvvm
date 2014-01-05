(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-version":"1.0.0","$mod-deps":["ceylon.language\/1.0.0"],"$mod-bin":"6.0","qunit":{"$pkg-shared":"1","run":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Run the module `qunit`."]},"$nm":"run","$mt":"mthd"}},"$mod-name":"qunit"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl24784=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl24784.$addmod$($$$cl24784,'ceylon.language/1.0.0');

//MethodDef run at run.ceylon (1:0-4:0)
function run(){
}
exports.run=run;
run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl24784.Anything},$ps:[],$an:function(){return[$$$cl24784.doc($$$cl24784.String("Run the module `qunit`.",23)),$$$cl24784.shared()];},d:['qunit','run']};};
exports.$pkg$ans$qunit=function(){return[$$$cl24784.shared()];};
exports.$mod$ans$=[];
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

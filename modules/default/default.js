(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-version":"unversioned","$mod-deps":["ceylon.language\/1.0.0"],"io.cayla.todomvc":{"all":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$an":{"shared":[]},"$nm":"all","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"$pkg-shared":"1","Todo":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"Todo","$ps":[{"$def":"1","$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_title","$mt":"prm"}],"$at":{"_title":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_title","$mt":"attr"}},"$mt":"cls"},"Mode":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"abstract":[]},"$nm":"Mode","of":[{"$nm":"active","$pk":"io.cayla.todomvc"},{"$nm":"all","$pk":"io.cayla.todomvc"},{"$nm":"completed","$pk":"io.cayla.todomvc"}],"$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"active":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$an":{"shared":[]},"$nm":"active","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"completed":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$an":{"shared":[]},"$nm":"completed","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"TodoList":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"TodoList","$at":{},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"init","$mt":"mthd"},"showAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showAll","$mt":"mthd"},"showActive":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showActive","$mt":"mthd"},"create":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"create","$mt":"mthd"},"showCompleted":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showCompleted","$mt":"mthd"},"removeCompleted":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeCompleted","$mt":"mthd"},"remove":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"remove","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}},"$mod-bin":"6.0","$mod-name":"default"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl530945=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl530945.$addmod$($$$cl530945,'ceylon.language/1.0.0');
exports.$pkg$ans$io$cayla$todomvc=function(){return[$$$cl530945.shared()];};

//ClassDef Mode at Mode.ceylon (1:0-3:0)
function Mode$io$cayla$todomvc($$mode){
    $init$Mode$io$cayla$todomvc();
    if ($$mode===undefined)$$$cl530945.throwexc($$$cl530945.InvocationException$meta$model($$$cl530945.String("Cannot instantiate abstract class")),'?','?')
    return $$mode;
}
Mode$io$cayla$todomvc.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl530945.Basic},$ps:[],of:[{t:active$531590$io$cayla$todomvc},{t:all$531591$io$cayla$todomvc},{t:completed$531592$io$cayla$todomvc}],$an:function(){return[$$$cl530945.shared(),$$$cl530945.abstract()];},d:['io.cayla.todomvc','Mode']};};
exports.Mode$io$cayla$todomvc=Mode$io$cayla$todomvc;
function $init$Mode$io$cayla$todomvc(){
    if (Mode$io$cayla$todomvc.$$===undefined){
        $$$cl530945.initTypeProto(Mode$io$cayla$todomvc,'io.cayla.todomvc::Mode',$$$cl530945.Basic);
        (function($$mode){
            $$mode.accept={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl530945.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo$io$cayla$todomvc},$an:function(){return[];}}],$cont:Mode$io$cayla$todomvc,$an:function(){return[$$$cl530945.shared(),$$$cl530945.formal()];},d:['io.cayla.todomvc','Mode','$m','accept']};}};
        })(Mode$io$cayla$todomvc.$$.prototype);
    }
    return Mode$io$cayla$todomvc;
}
exports.$init$Mode$io$cayla$todomvc=$init$Mode$io$cayla$todomvc;
$init$Mode$io$cayla$todomvc();

//ObjectDef all at Mode.ceylon (7:0-9:0)
function all$531591$io$cayla$todomvc(){
    var $$all=new all$531591$io$cayla$todomvc.$$;
    Mode$io$cayla$todomvc($$all);
    return $$all;
};all$531591$io$cayla$todomvc.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode$io$cayla$todomvc},$an:function(){return[$$$cl530945.shared()];},d:['io.cayla.todomvc','all']};};
function $init$all$531591$io$cayla$todomvc(){
    if (all$531591$io$cayla$todomvc.$$===undefined){
        $$$cl530945.initTypeProto(all$531591$io$cayla$todomvc,'io.cayla.todomvc::all',$init$Mode$io$cayla$todomvc());
        (function($$all){
            
            //MethodDecl accept at Mode.ceylon (8:4-8:51)
            $$all.accept=function (todo$531593){
                var $$all=this;
                return true;
            };
            $$all.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl530945.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo$io$cayla$todomvc},$an:function(){return[];}}],$cont:all$531591$io$cayla$todomvc,$an:function(){return[$$$cl530945.shared(),$$$cl530945.actual()];},d:['io.cayla.todomvc','all','$m','accept']};};
        })(all$531591$io$cayla$todomvc.$$.prototype);
    }
    return all$531591$io$cayla$todomvc;
}
exports.$init$all$531591$io$cayla$todomvc=$init$all$531591$io$cayla$todomvc;
$init$all$531591$io$cayla$todomvc();
var all$531594$io$cayla$todomvc;
function getAll$io$cayla$todomvc(){
    if (all$531594$io$cayla$todomvc===undefined){all$531594$io$cayla$todomvc=$init$all$531591$io$cayla$todomvc()();all$531594$io$cayla$todomvc.$$metamodel$$=getAll$io$cayla$todomvc.$$metamodel$$;}
    return all$531594$io$cayla$todomvc;
}
exports.getAll$io$cayla$todomvc=getAll$io$cayla$todomvc;
getAll$io$cayla$todomvc.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:all$531591$io$cayla$todomvc},$an:function(){return[$$$cl530945.shared()];},d:['io.cayla.todomvc','all']};};
$prop$getAll$io$cayla$todomvc={get:getAll$io$cayla$todomvc,$$metamodel$$:getAll$io$cayla$todomvc.$$metamodel$$};
exports.$prop$getAll$io$cayla$todomvc=$prop$getAll$io$cayla$todomvc;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

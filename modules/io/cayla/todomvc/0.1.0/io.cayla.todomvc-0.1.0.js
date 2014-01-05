(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-version":"0.1.0","$mod-deps":["io.cayla.mvvm\/0.1.0","ceylon.language\/1.0.0"],"io.cayla.todomvc":{"all":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$nm":"all","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"$pkg-shared":"1","Todo":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Todo","$ps":[{"$def":"1","$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_title","$mt":"prm"}],"$at":{"_title":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_title","$mt":"attr"},"completed":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"completed","$mt":"attr"},"title":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"title","$mt":"attr"}},"$mt":"cls"},"Mode":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"abstract":[]},"$nm":"Mode","of":[{"$nm":"active","$pk":"io.cayla.todomvc"},{"$nm":"all","$pk":"io.cayla.todomvc"},{"$nm":"completed","$pk":"io.cayla.todomvc"}],"$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"active":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$nm":"active","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"run":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Run the module `mvcpoc`."]},"$nm":"run","$mt":"mthd"},"completed":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$nm":"completed","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"TodoList":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"TodoList","$at":{"mode":{"$t":{"$tp":[{"$nm":"Mode","$mt":"tpm","$pk":"io.cayla.todomvc"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"mode","$mt":"attr"},"hasCompleted":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"hasCompleted","$mt":"attr"},"filtered":{"$t":{"$tp":[{"$tp":[{"$nm":"Todo","$mt":"tpm","$pk":"io.cayla.todomvc"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"filtered","$mt":"attr"},"hasTodos":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"hasTodos","$mt":"attr"},"completedMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"completedMode","$mt":"attr"},"activeMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"activeMode","$mt":"attr"},"allMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"allMode","$mt":"attr"},"todos":{"$t":{"$tp":[{"$nm":"Todo","$mt":"tpm","$pk":"io.cayla.todomvc"}],"$nm":"ObservableList","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"todos","$mt":"attr"},"title":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"title","$mt":"attr"},"completedCount":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"completedCount","$mt":"attr"},"items":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"items","$mt":"attr"},"remainingCount":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"remainingCount","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"init","$mt":"mthd"},"showAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showAll","$mt":"mthd"},"showActive":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showActive","$mt":"mthd"},"create":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"create","$mt":"mthd"},"showCompleted":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showCompleted","$mt":"mthd"},"removeCompleted":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeCompleted","$mt":"mthd"},"remove":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"remove","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}},"$mod-bin":"6.0","$mod-name":"io.cayla.todomvc"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl734=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl734.$addmod$($$$cl734,'ceylon.language/1.0.0');
var $$$icm735=require('io/cayla/mvvm/0.1.0/io.cayla.mvvm-0.1.0');
$$$cl734.$addmod$($$$icm735,'io.cayla.mvvm/0.1.0');

//MethodDef run at run.ceylon (3:0-9:0)
function run(){
    
    //AttributeDecl list at run.ceylon (6:4-6:30)
    var list$911=TodoList();
    list$911.init();
}
exports.run=run;
run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.doc($$$cl734.String("Run the module `mvcpoc`.",24)),$$$cl734.shared()];},d:['io.cayla.todomvc','run']};};
exports.$pkg$ans$io$cayla$todomvc=function(){return[$$$cl734.shared()];};
exports.$mod$ans$=[];
exports.$mod$imps=function(){return{
'io.cayla.mvvm/0.1.0':[]
};};
var $$$cc755=require('ceylon/collection/1.0.0/ceylon.collection-1.0.0');
$$$cl734.$addmod$($$$cc755,'ceylon.collection/1.0.0');

//ClassDef TodoList at TodoList.ceylon (6:0-146:0)
function TodoList($$todoList){
    $init$TodoList();
    if ($$todoList===undefined)$$todoList=new TodoList.$$;
    
    //AttributeDecl title at TodoList.ceylon (8:4-8:48)
    $$todoList.title$912_=$$$icm735.Property($$$cl734.String("",0),{Value:{t:$$$cl734.String}});
    $$todoList.$prop$getTitle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','title']};}};
    $$todoList.$prop$getTitle.get=function(){return title};
    
    //AttributeDecl mode at TodoList.ceylon (9:4-9:52)
    $$todoList.mode$913_=$$$icm735.Property(getAll(),{Value:{t:Mode}});
    $$todoList.$prop$getMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:Mode}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','mode']};}};
    $$todoList.$prop$getMode.get=function(){return mode};
    
    //AttributeDecl todos at TodoList.ceylon (10:4-10:62)
    $$todoList.todos$914_=$$$icm735.ObservableList({Element:{t:Todo}});
    $$todoList.$prop$getTodos={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.ObservableList,a:{Element:{t:Todo}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','todos']};}};
    $$todoList.$prop$getTodos.get=function(){return todos};
    
    //AttributeDecl filtered at TodoList.ceylon (11:4-11:109)
    $$todoList.filtered$915_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$$cc755.LinkedList($$todoList.todos.$filter($$$cl734.$JsCallable((opt$916=$$todoList.mode.getValue(),$$$cl734.JsCallable(opt$916,opt$916!==null?opt$916.accept:null)),[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],{Return:{t:$$$cl734.$Boolean},Arguments:{t:'T', l:[{t:Todo}]}})),{Element:{t:Todo}});
    }),[],{Return:{t:$$$cc755.LinkedList,a:{Element:{t:Todo}}},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cc755.LinkedList,a:{Element:{t:Todo}}}});
    $$todoList.$prop$getFiltered={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.List,a:{Element:{t:Todo}}}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','filtered']};}};
    $$todoList.$prop$getFiltered.get=function(){return filtered};
    var opt$916;
    
    //AttributeDecl completedCount at TodoList.ceylon (12:4-12:117)
    $$todoList.completedCount$917_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$todoList.todos.count($$$cl734.$JsCallable((function (todo$918){
            return todo$918.completed.getValue();
        }),[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],{Return:{t:$$$cl734.$Boolean},Arguments:{t:'T', l:[{t:Todo}]}}));
    }),[],{Return:{t:$$$cl734.Integer},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.Integer}});
    $$todoList.$prop$getCompletedCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.Integer}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','completedCount']};}};
    $$todoList.$prop$getCompletedCount.get=function(){return completedCount};
    
    //AttributeDecl remainingCount at TodoList.ceylon (13:4-13:102)
    $$todoList.remainingCount$919_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$todoList.todos.size.minus($$todoList.completedCount.getValue());
    }),[],{Return:{t:$$$cl734.Integer},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.Integer}});
    $$todoList.$prop$getRemainingCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.Integer}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','remainingCount']};}};
    $$todoList.$prop$getRemainingCount.get=function(){return remainingCount};
    
    //AttributeDecl items at TodoList.ceylon (14:4-14:108)
    $$todoList.items$920_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return (opt$921=($$todoList.remainingCount.getValue().compare((1)).equals($$$cl734.getLarger())?$$$cl734.String("items",5):null),opt$921!==null?opt$921:$$$cl734.String("item",4));
    }),[],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.String}});
    $$todoList.$prop$getItems={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.String}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','items']};}};
    $$todoList.$prop$getItems.get=function(){return items};
    var opt$921;
    
    //AttributeDecl hasCompleted at TodoList.ceylon (15:4-15:91)
    $$todoList.hasCompleted$922_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$todoList.completedCount.getValue().compare((0)).equals($$$cl734.getLarger());
    }),[],{Return:{t:$$$cl734.$Boolean},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.$Boolean}});
    $$todoList.$prop$getHasCompleted={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','hasCompleted']};}};
    $$todoList.$prop$getHasCompleted.get=function(){return hasCompleted};
    
    //AttributeDecl hasTodos at TodoList.ceylon (16:4-16:83)
    $$todoList.hasTodos$923_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$todoList.todos.getValue().size.compare((0)).equals($$$cl734.getLarger());
    }),[],{Return:{t:$$$cl734.$Boolean},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.$Boolean}});
    $$todoList.$prop$getHasTodos={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','hasTodos']};}};
    $$todoList.$prop$getHasTodos.get=function(){return hasTodos};
    
    //AttributeDecl allMode at TodoList.ceylon (17:4-17:79)
    $$todoList.allMode$924_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getAll());
    }),[],{Return:{t:$$$cl734.$Boolean},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.$Boolean}});
    $$todoList.$prop$getAllMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','allMode']};}};
    $$todoList.$prop$getAllMode.get=function(){return allMode};
    
    //AttributeDecl activeMode at TodoList.ceylon (18:4-18:85)
    $$todoList.activeMode$925_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getActive());
    }),[],{Return:{t:$$$cl734.$Boolean},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.$Boolean}});
    $$todoList.$prop$getActiveMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','activeMode']};}};
    $$todoList.$prop$getActiveMode.get=function(){return activeMode};
    
    //AttributeDecl completedMode at TodoList.ceylon (19:4-19:91)
    $$todoList.completedMode$926_=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getCompleted());
    }),[],{Return:{t:$$$cl734.$Boolean},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.$Boolean}});
    $$todoList.$prop$getCompletedMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','completedMode']};}};
    $$todoList.$prop$getCompletedMode.get=function(){return completedMode};
    return $$todoList;
}
TodoList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],d:['io.cayla.todomvc','TodoList']};};
function $init$TodoList(){
    if (TodoList.$$===undefined){
        $$$cl734.initTypeProto(TodoList,'io.cayla.todomvc::TodoList',$$$cl734.Basic);
        (function($$todoList){
            
            //AttributeDecl title at TodoList.ceylon (8:4-8:48)
            $$$cl734.defineAttr($$todoList,'title',function(){return this.title$912_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','title']};});
            
            //AttributeDecl mode at TodoList.ceylon (9:4-9:52)
            $$$cl734.defineAttr($$todoList,'mode',function(){return this.mode$913_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:Mode}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','mode']};});
            
            //AttributeDecl todos at TodoList.ceylon (10:4-10:62)
            $$$cl734.defineAttr($$todoList,'todos',function(){return this.todos$914_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.ObservableList,a:{Element:{t:Todo}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','todos']};});
            
            //AttributeDecl filtered at TodoList.ceylon (11:4-11:109)
            $$$cl734.defineAttr($$todoList,'filtered',function(){return this.filtered$915_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.List,a:{Element:{t:Todo}}}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','filtered']};});
            
            //AttributeDecl completedCount at TodoList.ceylon (12:4-12:117)
            $$$cl734.defineAttr($$todoList,'completedCount',function(){return this.completedCount$917_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.Integer}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','completedCount']};});
            
            //AttributeDecl remainingCount at TodoList.ceylon (13:4-13:102)
            $$$cl734.defineAttr($$todoList,'remainingCount',function(){return this.remainingCount$919_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.Integer}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','remainingCount']};});
            
            //AttributeDecl items at TodoList.ceylon (14:4-14:108)
            $$$cl734.defineAttr($$todoList,'items',function(){return this.items$920_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.String}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','items']};});
            
            //AttributeDecl hasCompleted at TodoList.ceylon (15:4-15:91)
            $$$cl734.defineAttr($$todoList,'hasCompleted',function(){return this.hasCompleted$922_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','hasCompleted']};});
            
            //AttributeDecl hasTodos at TodoList.ceylon (16:4-16:83)
            $$$cl734.defineAttr($$todoList,'hasTodos',function(){return this.hasTodos$923_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','hasTodos']};});
            
            //AttributeDecl allMode at TodoList.ceylon (17:4-17:79)
            $$$cl734.defineAttr($$todoList,'allMode',function(){return this.allMode$924_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','allMode']};});
            
            //AttributeDecl activeMode at TodoList.ceylon (18:4-18:85)
            $$$cl734.defineAttr($$todoList,'activeMode',function(){return this.activeMode$925_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','activeMode']};});
            
            //AttributeDecl completedMode at TodoList.ceylon (19:4-19:91)
            $$$cl734.defineAttr($$todoList,'completedMode',function(){return this.completedMode$926_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$at','completedMode']};});
            
            //MethodDef create at TodoList.ceylon (21:4-27:4)
            $$todoList.create=function create(){
                var $$todoList=this;
                
                //AttributeDecl t at TodoList.ceylon (22:8-22:42)
                var t$927=$$todoList.title.getValue().trimmed;
                if(t$927.size.compare((0)).equals($$$cl734.getLarger())){
                    $$todoList.todos.add(Todo(t$927));
                    $$todoList.title.setValue($$$cl734.String("",0));
                }
            };$$todoList.create.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$m','create']};};
            
            //MethodDef showAll at TodoList.ceylon (29:4-31:4)
            $$todoList.showAll=function showAll(){
                var $$todoList=this;
                $$todoList.mode.setValue(getAll());
            };$$todoList.showAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$m','showAll']};};
            
            //MethodDef showActive at TodoList.ceylon (33:4-35:4)
            $$todoList.showActive=function showActive(){
                var $$todoList=this;
                $$todoList.mode.setValue(getActive());
            };$$todoList.showActive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$m','showActive']};};
            
            //MethodDef showCompleted at TodoList.ceylon (37:4-39:4)
            $$todoList.showCompleted=function showCompleted(){
                var $$todoList=this;
                $$todoList.mode.setValue(getCompleted());
            };$$todoList.showCompleted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$m','showCompleted']};};
            
            //MethodDef remove at TodoList.ceylon (41:4-43:4)
            $$todoList.remove=function remove(todo$928){
                var $$todoList=this;
                $$todoList.todos.removeElement(todo$928);
            };$$todoList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$m','remove']};};
            
            //MethodDef removeCompleted at TodoList.ceylon (45:4-50:4)
            $$todoList.removeCompleted=function removeCompleted(){
                var $$todoList=this;
                
                //AttributeDecl toRemove at TodoList.ceylon (46:8-46:91)
                var toRemove$929=$$$cc755.LinkedList($$todoList.todos.$filter($$$cl734.$JsCallable((function (todo$930){
                    return todo$930.completed.getValue();
                }),[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],{Return:{t:$$$cl734.$Boolean},Arguments:{t:'T', l:[{t:Todo}]}})),{Element:{t:Todo}});
                //'for' statement at TodoList.ceylon (47:8-49:8)
                var it$931 = toRemove$929.iterator();
                var completed$932;while ((completed$932=it$931.next())!==$$$cl734.getFinished()){
                    $$todoList.todos.removeElement(completed$932);
                }
            };$$todoList.removeCompleted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$m','removeCompleted']};};
            
            //MethodDef init at TodoList.ceylon (52:4-145:4)
            $$todoList.init=function init(){
                var $$todoList=this;
                
                //AttributeDecl a at TodoList.ceylon (54:8-141:9)
                var a$933=(content$934=[(id$935=$$$cl734.String("todoapp",7),content$936=[(id$937=$$$cl734.String("header",6),content$938=[(content$939=[$$$cl734.String("todos",5).valueOf()].reifyCeylonType({Element:{t:$$$cl734.String},Absent:{t:$$$cl734.Null}}),$$$icm735.H1$view(undefined,undefined,undefined,content$939)),(id$940=$$$cl734.String("new-todo",8),name$941=$$$cl734.String("title",5),bindings$942=$$$cl734.Tuple($$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('title',TodoList.$$.prototype.$prop$getTitle,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().val),$$$cl734.Tuple($$$icm735.method$expression($$$cl734.AppliedMethod$meta$model(TodoList.$$.prototype.create,undefined,{Container:{t:TodoList},Type:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}),{Arguments:{t:$$$cl734.Empty},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().enter),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),{Rest:{t:'T', l:[{t:$$$icm735.Binding$view}]},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),$$$icm735.Input$view(name$941,id$940,undefined,bindings$942,undefined))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm735.H1$view},{t:$$$icm735.Input$view}]},Absent:{t:$$$cl734.Null}}),$$$icm735.Header$view(id$937,undefined,undefined,content$938)),(id$943=$$$cl734.String("main",4),content$944=[(id$945=$$$cl734.String("todo-list",9),bindings$946=$$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('filtered',TodoList.$$.prototype.$prop$getFiltered,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.List,a:{Element:{t:Todo}}}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.List,a:{Element:{t:Todo}}}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().foreach({Value:{t:Todo}})),content$947=[(bindings$948=$$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('completed',Todo.$$.prototype.$prop$getCompleted,{Container:{t:Todo},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.$Boolean}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.$Boolean}}},Source:{t:Todo}}).bindTo($$$icm735.getBinders().css($$$cl734.String("completed",9))),content$949=[(classNames$950=$$$cl734.Tuple($$$cl734.String("view",4),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$cl734.String},First:{t:$$$cl734.String}}),content$951=[(classNames$952=$$$cl734.Tuple($$$cl734.String("toggle",6),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$cl734.String},First:{t:$$$cl734.String}}),bindings$953=$$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('completed',Todo.$$.prototype.$prop$getCompleted,{Container:{t:Todo},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.$Boolean}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.$Boolean}}},Source:{t:Todo}}).bindTo($$$icm735.getBinders().checked),$$$icm735.CheckBox$view(undefined,undefined,classNames$952,bindings$953,undefined)),(bindings$954=$$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('title',Todo.$$.prototype.$prop$getTitle,{Container:{t:Todo},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},Source:{t:Todo}}).bindTo($$$icm735.getBinders().text),$$$icm735.Label$view(undefined,undefined,bindings$954,undefined)),(classNames$955=$$$cl734.Tuple($$$cl734.String("destroy",7),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$cl734.String},First:{t:$$$cl734.String}}),bindings$956=$$$icm735.method$expression($$$cl734.AppliedMethod$meta$model(TodoList.$$.prototype.remove,undefined,{Container:{t:TodoList},Type:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:Todo}]}}),{Arguments:{t:'T', l:[{t:Todo}]},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().click({Source:{t:Todo}})),$$$icm735.Button$view(undefined,undefined,classNames$955,bindings$956,undefined))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm735.CheckBox$view},{t:$$$icm735.Label$view},{t:$$$icm735.Button$view}]},Absent:{t:$$$cl734.Null}}),$$$icm735.Div$view(undefined,classNames$950,undefined,content$951))].reifyCeylonType({Element:{t:$$$icm735.Div$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Li$view(undefined,undefined,bindings$948,content$949))].reifyCeylonType({Element:{t:$$$icm735.Li$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Ul$view(id$945,undefined,bindings$946,content$947))].reifyCeylonType({Element:{t:$$$icm735.Ul$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Section$view(id$943,undefined,undefined,content$944)),(id$957=$$$cl734.String("footer",6),bindings$958=$$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('hasTodos',TodoList.$$.prototype.$prop$getHasTodos,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().visible()),content$959=[(id$960=$$$cl734.String("todo-count",10),content$961=[(bindings$962=$$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('remainingCount',TodoList.$$.prototype.$prop$getRemainingCount,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.Integer}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.Integer}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().text),$$$icm735.Strong$view(undefined,undefined,bindings$962,undefined)),$$$cl734.String(" ",1).valueOf(),(bindings$963=$$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('items',TodoList.$$.prototype.$prop$getItems,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.String}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.String}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().text),$$$icm735.Span$view(undefined,undefined,bindings$963,undefined)),$$$cl734.String(" left",5).valueOf()].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm735.Strong$view},{t:$$$cl734.String},{t:$$$icm735.Span$view}]},Absent:{t:$$$cl734.Null}}),$$$icm735.Span$view(id$960,undefined,undefined,content$961)),(id$964=$$$cl734.String("filters",7),content$965=[(content$966=[(bindings$967=$$$cl734.Tuple($$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('allMode',TodoList.$$.prototype.$prop$getAllMode,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().css($$$cl734.String("selected",8))),$$$cl734.Tuple($$$icm735.method$expression($$$cl734.AppliedMethod$meta$model(TodoList.$$.prototype.showAll,undefined,{Container:{t:TodoList},Type:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}),{Arguments:{t:$$$cl734.Empty},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().click({Source:{t:$$$cl734.Nothing}})),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),{Rest:{t:'T', l:[{t:$$$icm735.Binding$view}]},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),href$968=$$$cl734.String("#",1),content$969=[$$$cl734.String("All",3).valueOf()].reifyCeylonType({Element:{t:$$$cl734.String},Absent:{t:$$$cl734.Null}}),$$$icm735.A$view(undefined,undefined,bindings$967,href$968,content$969))].reifyCeylonType({Element:{t:$$$icm735.A$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Li$view(undefined,undefined,undefined,content$966)),(content$970=[(bindings$971=$$$cl734.Tuple($$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('activeMode',TodoList.$$.prototype.$prop$getActiveMode,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().css($$$cl734.String("selected",8))),$$$cl734.Tuple($$$icm735.method$expression($$$cl734.AppliedMethod$meta$model(TodoList.$$.prototype.showActive,undefined,{Container:{t:TodoList},Type:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}),{Arguments:{t:$$$cl734.Empty},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().click({Source:{t:$$$cl734.Nothing}})),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),{Rest:{t:'T', l:[{t:$$$icm735.Binding$view}]},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),href$972=$$$cl734.String("#",1),content$973=[$$$cl734.String("Active",6).valueOf()].reifyCeylonType({Element:{t:$$$cl734.String},Absent:{t:$$$cl734.Null}}),$$$icm735.A$view(undefined,undefined,bindings$971,href$972,content$973))].reifyCeylonType({Element:{t:$$$icm735.A$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Li$view(undefined,undefined,undefined,content$970)),(content$974=[(bindings$975=$$$cl734.Tuple($$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('completedMode',TodoList.$$.prototype.$prop$getCompletedMode,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().css($$$cl734.String("selected",8))),$$$cl734.Tuple($$$icm735.method$expression($$$cl734.AppliedMethod$meta$model(TodoList.$$.prototype.showCompleted,undefined,{Container:{t:TodoList},Type:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}),{Arguments:{t:$$$cl734.Empty},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().click({Source:{t:$$$cl734.Nothing}})),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),{Rest:{t:'T', l:[{t:$$$icm735.Binding$view}]},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),href$976=$$$cl734.String("#",1),content$977=[$$$cl734.String("Completed",9).valueOf()].reifyCeylonType({Element:{t:$$$cl734.String},Absent:{t:$$$cl734.Null}}),$$$icm735.A$view(undefined,undefined,bindings$975,href$976,content$977))].reifyCeylonType({Element:{t:$$$icm735.A$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Li$view(undefined,undefined,undefined,content$974))].reifyCeylonType({Element:{t:$$$icm735.Li$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Ul$view(id$964,undefined,undefined,content$965)),(id$978=$$$cl734.String("clear-completed",15),bindings$979=$$$cl734.Tuple($$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('hasCompleted',TodoList.$$.prototype.$prop$getHasCompleted,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().visible()),$$$cl734.Tuple($$$icm735.method$expression($$$cl734.AppliedMethod$meta$model(TodoList.$$.prototype.removeCompleted,undefined,{Container:{t:TodoList},Type:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}),{Arguments:{t:$$$cl734.Empty},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().click({Source:{t:$$$cl734.Nothing}})),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),{Rest:{t:'T', l:[{t:$$$icm735.Binding$view}]},Element:{t:$$$icm735.Binding$view},First:{t:$$$icm735.Binding$view}}),content$980=[$$$cl734.String("Clear completed (",17).valueOf(),(bindings$981=$$$icm735.attribute$expression($$$cl734.$init$AppliedAttribute$meta$model()('completedCount',TodoList.$$.prototype.$prop$getCompletedCount,{Container:{t:TodoList},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.Integer}}}}),{Value:{t:$$$icm735.Observable,a:{Value:{t:$$$cl734.Integer}}},Source:{t:TodoList}}).bindTo($$$icm735.getBinders().text),$$$icm735.Span$view(undefined,undefined,bindings$981,undefined)),$$$cl734.String(")",1).valueOf()].reifyCeylonType({Element:{t:'u', l:[{t:$$$cl734.String},{t:$$$icm735.Span$view}]},Absent:{t:$$$cl734.Null}}),$$$icm735.Button$view(undefined,id$978,undefined,bindings$979,content$980))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm735.Span$view},{t:$$$icm735.Ul$view},{t:$$$icm735.Button$view}]},Absent:{t:$$$cl734.Null}}),$$$icm735.Footer$view(id$957,undefined,bindings$958,content$959))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm735.Header$view},{t:$$$icm735.Section$view},{t:$$$icm735.Footer$view}]},Absent:{t:$$$cl734.Null}}),$$$icm735.Section$view(id$935,undefined,undefined,content$936)),(id$982=$$$cl734.String("info",4),content$983=[(content$984=[$$$cl734.String("Part of ",8).valueOf(),(href$985=$$$cl734.String("http://todomvc.com",18),content$986=[$$$cl734.String("TodoMVC",7).valueOf()].reifyCeylonType({Element:{t:$$$cl734.String},Absent:{t:$$$cl734.Null}}),$$$icm735.A$view(undefined,undefined,undefined,href$985,content$986))].reifyCeylonType({Element:{t:'u', l:[{t:$$$cl734.String},{t:$$$icm735.A$view}]},Absent:{t:$$$cl734.Null}}),$$$icm735.P$view(undefined,undefined,undefined,content$984))].reifyCeylonType({Element:{t:$$$icm735.P$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Footer$view(id$982,undefined,undefined,content$983))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm735.Section$view},{t:$$$icm735.Footer$view}]},Absent:{t:$$$cl734.Null}}),$$$icm735.Div$view(undefined,undefined,undefined,content$934));
                var content$934,id$935,content$936,id$937,content$938,content$939,id$940,name$941,bindings$942,id$943,content$944,id$945,bindings$946,content$947,bindings$948,content$949,classNames$950,content$951,classNames$952,bindings$953,bindings$954,classNames$955,bindings$956,id$957,bindings$958,content$959,id$960,content$961,bindings$962,bindings$963,id$964,content$965,content$966,bindings$967,href$968,content$969,content$970,bindings$971,href$972,content$973,content$974,bindings$975,href$976,content$977,id$978,bindings$979,content$980,bindings$981,id$982,content$983,content$984,href$985,content$986;
                
                //AttributeDecl formNode at TodoList.ceylon (143:8-143:39)
                var formNode$987=a$933.$bind($$todoList);
                $$$icm735.byId$dom($$$cl734.String("body",4)).addChild(formNode$987);
            };$$todoList.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','TodoList','$m','init']};};
        })(TodoList.$$.prototype);
    }
    return TodoList;
}
exports.$init$TodoList=$init$TodoList;
$init$TodoList();

//ClassDef Todo at Todo.ceylon (2:0-8:0)
function Todo(_title$988, $$todo){
    $init$Todo();
    if ($$todo===undefined)$$todo=new Todo.$$;
    if(_title$988===undefined){_title$988=$$$cl734.String("",0);}
    $$todo._title$988_=_title$988;
    
    //AttributeDecl title at Todo.ceylon (4:4-4:52)
    $$todo.title$989_=$$$icm735.Property($$todo._title$988,{Value:{t:$$$cl734.String}});
    $$todo.$prop$getTitle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$cont:Todo,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','Todo','$at','title']};}};
    $$todo.$prop$getTitle.get=function(){return title};
    
    //AttributeDecl completed at Todo.ceylon (5:4-5:56)
    $$todo.completed$990_=$$$icm735.Property(false,{Value:{t:$$$cl734.$Boolean}});
    $$todo.$prop$getCompleted={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.$Boolean}}},$cont:Todo,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','Todo','$at','completed']};}};
    $$todo.$prop$getCompleted.get=function(){return completed};
    return $$todo;
}
Todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'_title',$mt:'prm',$def:1,$t:{t:$$$cl734.String},$an:function(){return[];}}],d:['io.cayla.todomvc','Todo']};};
function $init$Todo(){
    if (Todo.$$===undefined){
        $$$cl734.initTypeProto(Todo,'io.cayla.todomvc::Todo',$$$cl734.Basic);
        (function($$todo){
            
            //AttributeDecl title at Todo.ceylon (4:4-4:52)
            $$$cl734.defineAttr($$todo,'title',function(){return this.title$989_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$cont:Todo,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','Todo','$at','title']};});
            
            //AttributeDecl completed at Todo.ceylon (5:4-5:56)
            $$$cl734.defineAttr($$todo,'completed',function(){return this.completed$990_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.$Boolean}}},$cont:Todo,$an:function(){return[$$$cl734.shared()];},d:['io.cayla.todomvc','Todo','$at','completed']};});
            $$$cl734.defineAttr($$todo,'_title$988',function(){return this._title$988_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.String},$cont:Todo,d:['io.cayla.todomvc','Todo','$at','_title']};});
        })(Todo.$$.prototype);
    }
    return Todo;
}
exports.$init$Todo=$init$Todo;
$init$Todo();

//ClassDef Mode at Mode.ceylon (1:0-3:0)
function Mode($$mode){
    $init$Mode();
    if ($$mode===undefined)$$$cl734.throwexc($$$cl734.InvocationException$meta$model($$$cl734.String("Cannot instantiate abstract class")),'?','?')
    return $$mode;
}
Mode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],of:[{t:active$991},{t:all$992},{t:completed$993}],$an:function(){return[$$$cl734.abstract()];},d:['io.cayla.todomvc','Mode']};};
function $init$Mode(){
    if (Mode.$$===undefined){
        $$$cl734.initTypeProto(Mode,'io.cayla.todomvc::Mode',$$$cl734.Basic);
        (function($$mode){
            $$mode.accept={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:Mode,$an:function(){return[$$$cl734.shared(),$$$cl734.formal()];},d:['io.cayla.todomvc','Mode','$m','accept']};}};
        })(Mode.$$.prototype);
    }
    return Mode;
}
exports.$init$Mode=$init$Mode;
$init$Mode();

//ObjectDef active at Mode.ceylon (4:0-6:0)
function active$991(){
    var $$active=new active$991.$$;
    Mode($$active);
    return $$active;
};active$991.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode},d:['io.cayla.todomvc','active']};};
function $init$active$991(){
    if (active$991.$$===undefined){
        $$$cl734.initTypeProto(active$991,'io.cayla.todomvc::active',$init$Mode());
        (function($$active){
            
            //MethodDecl accept at Mode.ceylon (5:4-5:73)
            $$active.accept=function (todo$994){
                var $$active=this;
                return (!todo$994.completed.getValue());
            };
            $$active.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:active$991,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.todomvc','active','$m','accept']};};
        })(active$991.$$.prototype);
    }
    return active$991;
}
exports.$init$active$991=$init$active$991;
$init$active$991();
var active$995;
function getActive(){
    if (active$995===undefined){active$995=$init$active$991()();active$995.$$metamodel$$=getActive.$$metamodel$$;}
    return active$995;
}
getActive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:active$991},d:['io.cayla.todomvc','active']};};
$prop$getActive={get:getActive,$$metamodel$$:getActive.$$metamodel$$};
exports.$prop$getActive=$prop$getActive;

//ObjectDef all at Mode.ceylon (7:0-9:0)
function all$992(){
    var $$all=new all$992.$$;
    Mode($$all);
    return $$all;
};all$992.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode},d:['io.cayla.todomvc','all']};};
function $init$all$992(){
    if (all$992.$$===undefined){
        $$$cl734.initTypeProto(all$992,'io.cayla.todomvc::all',$init$Mode());
        (function($$all){
            
            //MethodDecl accept at Mode.ceylon (8:4-8:51)
            $$all.accept=function (todo$996){
                var $$all=this;
                return true;
            };
            $$all.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:all$992,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.todomvc','all','$m','accept']};};
        })(all$992.$$.prototype);
    }
    return all$992;
}
exports.$init$all$992=$init$all$992;
$init$all$992();
var all$997;
function getAll(){
    if (all$997===undefined){all$997=$init$all$992()();all$997.$$metamodel$$=getAll.$$metamodel$$;}
    return all$997;
}
getAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:all$992},d:['io.cayla.todomvc','all']};};
$prop$getAll={get:getAll,$$metamodel$$:getAll.$$metamodel$$};
exports.$prop$getAll=$prop$getAll;

//ObjectDef completed at Mode.ceylon (10:0-12:0)
function completed$993(){
    var $$completed=new completed$993.$$;
    Mode($$completed);
    return $$completed;
};completed$993.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode},d:['io.cayla.todomvc','completed']};};
function $init$completed$993(){
    if (completed$993.$$===undefined){
        $$$cl734.initTypeProto(completed$993,'io.cayla.todomvc::completed',$init$Mode());
        (function($$completed){
            
            //MethodDecl accept at Mode.ceylon (11:4-11:72)
            $$completed.accept=function (todo$998){
                var $$completed=this;
                return todo$998.completed.getValue();
            };
            $$completed.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:completed$993,$an:function(){return[$$$cl734.shared(),$$$cl734.actual()];},d:['io.cayla.todomvc','completed','$m','accept']};};
        })(completed$993.$$.prototype);
    }
    return completed$993;
}
exports.$init$completed$993=$init$completed$993;
$init$completed$993();
var completed$999;
function getCompleted(){
    if (completed$999===undefined){completed$999=$init$completed$993()();completed$999.$$metamodel$$=getCompleted.$$metamodel$$;}
    return completed$999;
}
getCompleted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:completed$993},d:['io.cayla.todomvc','completed']};};
$prop$getCompleted={get:getCompleted,$$metamodel$$:getCompleted.$$metamodel$$};
exports.$prop$getCompleted=$prop$getCompleted;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-version":"0.1.0","$mod-deps":["io.cayla.mvvm\/0.1.0","ceylon.language\/1.0.0"],"io.cayla.todomvc":{"all":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$nm":"all","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"$pkg-shared":"1","Todo":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Todo","$ps":[{"$def":"1","$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_title","$mt":"prm"}],"$at":{"_title":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"_title","$mt":"attr"},"completed":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"completed","$mt":"attr"},"title":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"title","$mt":"attr"}},"$mt":"cls"},"Mode":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"abstract":[]},"$nm":"Mode","of":[{"$nm":"active","$pk":"io.cayla.todomvc"},{"$nm":"all","$pk":"io.cayla.todomvc"},{"$nm":"completed","$pk":"io.cayla.todomvc"}],"$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"formal":[],"shared":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls","abstract":"1"},"active":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$nm":"active","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"run":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Run the module `mvcpoc`."]},"$nm":"run","$mt":"mthd"},"completed":{"super":{"$nm":"Mode","$pk":"io.cayla.todomvc"},"$nm":"completed","$m":{"accept":{"$t":{"$nm":"Boolean","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"actual":[]},"$nm":"accept","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"obj"},"TodoList":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"TodoList","$at":{"mode":{"$t":{"$tp":[{"$nm":"Mode","$mt":"tpm","$pk":"io.cayla.todomvc"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"mode","$mt":"attr"},"hasCompleted":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"hasCompleted","$mt":"attr"},"filtered":{"$t":{"$tp":[{"$tp":[{"$nm":"Todo","$mt":"tpm","$pk":"io.cayla.todomvc"}],"$nm":"List","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"filtered","$mt":"attr"},"hasTodos":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"hasTodos","$mt":"attr"},"completedMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"completedMode","$mt":"attr"},"activeMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"activeMode","$mt":"attr"},"allMode":{"$t":{"$tp":[{"$nm":"Boolean","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"allMode","$mt":"attr"},"todos":{"$t":{"$tp":[{"$nm":"Todo","$mt":"tpm","$pk":"io.cayla.todomvc"}],"$nm":"ObservableList","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"todos","$mt":"attr"},"title":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"title","$mt":"attr"},"completedCount":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"completedCount","$mt":"attr"},"items":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"items","$mt":"attr"},"remainingCount":{"$t":{"$tp":[{"$nm":"Integer","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Observable","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"remainingCount","$mt":"attr"}},"$m":{"init":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"init","$mt":"mthd"},"showAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showAll","$mt":"mthd"},"showActive":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showActive","$mt":"mthd"},"create":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"create","$mt":"mthd"},"showCompleted":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"showCompleted","$mt":"mthd"},"removeCompleted":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"removeCompleted","$mt":"mthd"},"remove":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"remove","$ps":[[{"$t":{"$nm":"Todo","$pk":"io.cayla.todomvc"},"$nm":"todo","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"}},"$mod-bin":"6.0","$mod-name":"io.cayla.todomvc"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl20381=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl20381.$addmod$($$$cl20381,'ceylon.language/1.0.0');
var $$$icm20382=require('io/cayla/mvvm/0.1.0/io.cayla.mvvm-0.1.0');
$$$cl20381.$addmod$($$$icm20382,'io.cayla.mvvm/0.1.0');

//MethodDef run at run.ceylon (3:0-9:0)
function run(){
    
    //AttributeDecl list at run.ceylon (6:4-6:30)
    var list$20558=TodoList();
    list$20558.init();
}
exports.run=run;
run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.doc($$$cl20381.String("Run the module `mvcpoc`.",24)),$$$cl20381.shared()];},d:['io.cayla.todomvc','run']};};
exports.$pkg$ans$io$cayla$todomvc=function(){return[$$$cl20381.shared()];};
exports.$mod$ans$=[];
exports.$mod$imps=function(){return{
'io.cayla.mvvm/0.1.0':[]
};};
var $$$cc20402=require('ceylon/collection/1.0.0/ceylon.collection-1.0.0');
$$$cl20381.$addmod$($$$cc20402,'ceylon.collection/1.0.0');

//ClassDef TodoList at TodoList.ceylon (9:0-149:0)
function TodoList($$todoList){
    $init$TodoList();
    if ($$todoList===undefined)$$todoList=new TodoList.$$;
    
    //AttributeDecl title at TodoList.ceylon (11:4-11:48)
    $$todoList.title$20559_=$$$icm20382.Property($$$cl20381.String("",0),{Value:{t:$$$cl20381.String}});
    $$todoList.$prop$getTitle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','title']};}};
    $$todoList.$prop$getTitle.get=function(){return title};
    
    //AttributeDecl mode at TodoList.ceylon (12:4-12:52)
    $$todoList.mode$20560_=$$$icm20382.Property(getAll(),{Value:{t:Mode}});
    $$todoList.$prop$getMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:Mode}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','mode']};}};
    $$todoList.$prop$getMode.get=function(){return mode};
    
    //AttributeDecl todos at TodoList.ceylon (13:4-13:62)
    $$todoList.todos$20561_=$$$icm20382.ObservableList(undefined,{Element:{t:Todo}});
    $$todoList.$prop$getTodos={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.ObservableList,a:{Element:{t:Todo}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','todos']};}};
    $$todoList.$prop$getTodos.get=function(){return todos};
    
    //AttributeDecl filtered at TodoList.ceylon (14:4-14:109)
    $$todoList.filtered$20562_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$$cc20402.LinkedList($$todoList.todos.$filter($$$cl20381.$JsCallable((opt$20563=$$todoList.mode.getValue(),$$$cl20381.JsCallable(opt$20563,opt$20563!==null?opt$20563.accept:null)),[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:'T', l:[{t:Todo}]}})),{Element:{t:Todo}});
    }),[],{Return:{t:$$$cc20402.LinkedList,a:{Element:{t:Todo}}},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cc20402.LinkedList,a:{Element:{t:Todo}}}});
    $$todoList.$prop$getFiltered={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.List,a:{Element:{t:Todo}}}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','filtered']};}};
    $$todoList.$prop$getFiltered.get=function(){return filtered};
    var opt$20563;
    
    //AttributeDecl completedCount at TodoList.ceylon (15:4-15:117)
    $$todoList.completedCount$20564_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$todoList.todos.count($$$cl20381.$JsCallable((function (todo$20565){
            return todo$20565.completed.getValue();
        }),[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:'T', l:[{t:Todo}]}}));
    }),[],{Return:{t:$$$cl20381.Integer},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.Integer}});
    $$todoList.$prop$getCompletedCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.Integer}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','completedCount']};}};
    $$todoList.$prop$getCompletedCount.get=function(){return completedCount};
    
    //AttributeDecl remainingCount at TodoList.ceylon (16:4-16:102)
    $$todoList.remainingCount$20566_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$todoList.todos.size.minus($$todoList.completedCount.getValue());
    }),[],{Return:{t:$$$cl20381.Integer},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.Integer}});
    $$todoList.$prop$getRemainingCount={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.Integer}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','remainingCount']};}};
    $$todoList.$prop$getRemainingCount.get=function(){return remainingCount};
    
    //AttributeDecl items at TodoList.ceylon (17:4-17:108)
    $$todoList.items$20567_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return (opt$20568=($$todoList.remainingCount.getValue().compare((1)).equals($$$cl20381.getLarger())?$$$cl20381.String("items",5):null),opt$20568!==null?opt$20568:$$$cl20381.String("item",4));
    }),[],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.String}});
    $$todoList.$prop$getItems={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.String}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','items']};}};
    $$todoList.$prop$getItems.get=function(){return items};
    var opt$20568;
    
    //AttributeDecl hasCompleted at TodoList.ceylon (18:4-18:91)
    $$todoList.hasCompleted$20569_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$todoList.completedCount.getValue().compare((0)).equals($$$cl20381.getLarger());
    }),[],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.$Boolean}});
    $$todoList.$prop$getHasCompleted={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','hasCompleted']};}};
    $$todoList.$prop$getHasCompleted.get=function(){return hasCompleted};
    
    //AttributeDecl hasTodos at TodoList.ceylon (19:4-19:83)
    $$todoList.hasTodos$20570_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$todoList.todos.getValue().size.compare((0)).equals($$$cl20381.getLarger());
    }),[],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.$Boolean}});
    $$todoList.$prop$getHasTodos={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','hasTodos']};}};
    $$todoList.$prop$getHasTodos.get=function(){return hasTodos};
    
    //AttributeDecl allMode at TodoList.ceylon (20:4-20:79)
    $$todoList.allMode$20571_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getAll());
    }),[],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.$Boolean}});
    $$todoList.$prop$getAllMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','allMode']};}};
    $$todoList.$prop$getAllMode.get=function(){return allMode};
    
    //AttributeDecl activeMode at TodoList.ceylon (21:4-21:85)
    $$todoList.activeMode$20572_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getActive());
    }),[],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.$Boolean}});
    $$todoList.$prop$getActiveMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','activeMode']};}};
    $$todoList.$prop$getActiveMode.get=function(){return activeMode};
    
    //AttributeDecl completedMode at TodoList.ceylon (22:4-22:91)
    $$todoList.completedMode$20573_=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$todoList.mode.getValue().equals(getCompleted());
    }),[],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.$Boolean}});
    $$todoList.$prop$getCompletedMode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','completedMode']};}};
    $$todoList.$prop$getCompletedMode.get=function(){return completedMode};
    return $$todoList;
}
TodoList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],d:['io.cayla.todomvc','TodoList']};};
function $init$TodoList(){
    if (TodoList.$$===undefined){
        $$$cl20381.initTypeProto(TodoList,'io.cayla.todomvc::TodoList',$$$cl20381.Basic);
        (function($$todoList){
            
            //AttributeDecl title at TodoList.ceylon (11:4-11:48)
            $$$cl20381.defineAttr($$todoList,'title',function(){return this.title$20559_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','title']};});
            
            //AttributeDecl mode at TodoList.ceylon (12:4-12:52)
            $$$cl20381.defineAttr($$todoList,'mode',function(){return this.mode$20560_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:Mode}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','mode']};});
            
            //AttributeDecl todos at TodoList.ceylon (13:4-13:62)
            $$$cl20381.defineAttr($$todoList,'todos',function(){return this.todos$20561_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.ObservableList,a:{Element:{t:Todo}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','todos']};});
            
            //AttributeDecl filtered at TodoList.ceylon (14:4-14:109)
            $$$cl20381.defineAttr($$todoList,'filtered',function(){return this.filtered$20562_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.List,a:{Element:{t:Todo}}}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','filtered']};});
            
            //AttributeDecl completedCount at TodoList.ceylon (15:4-15:117)
            $$$cl20381.defineAttr($$todoList,'completedCount',function(){return this.completedCount$20564_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.Integer}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','completedCount']};});
            
            //AttributeDecl remainingCount at TodoList.ceylon (16:4-16:102)
            $$$cl20381.defineAttr($$todoList,'remainingCount',function(){return this.remainingCount$20566_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.Integer}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','remainingCount']};});
            
            //AttributeDecl items at TodoList.ceylon (17:4-17:108)
            $$$cl20381.defineAttr($$todoList,'items',function(){return this.items$20567_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.String}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','items']};});
            
            //AttributeDecl hasCompleted at TodoList.ceylon (18:4-18:91)
            $$$cl20381.defineAttr($$todoList,'hasCompleted',function(){return this.hasCompleted$20569_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','hasCompleted']};});
            
            //AttributeDecl hasTodos at TodoList.ceylon (19:4-19:83)
            $$$cl20381.defineAttr($$todoList,'hasTodos',function(){return this.hasTodos$20570_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','hasTodos']};});
            
            //AttributeDecl allMode at TodoList.ceylon (20:4-20:79)
            $$$cl20381.defineAttr($$todoList,'allMode',function(){return this.allMode$20571_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','allMode']};});
            
            //AttributeDecl activeMode at TodoList.ceylon (21:4-21:85)
            $$$cl20381.defineAttr($$todoList,'activeMode',function(){return this.activeMode$20572_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','activeMode']};});
            
            //AttributeDecl completedMode at TodoList.ceylon (22:4-22:91)
            $$$cl20381.defineAttr($$todoList,'completedMode',function(){return this.completedMode$20573_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$at','completedMode']};});
            
            //MethodDef create at TodoList.ceylon (24:4-30:4)
            $$todoList.create=function create(){
                var $$todoList=this;
                
                //AttributeDecl t at TodoList.ceylon (25:8-25:42)
                var t$20574=$$todoList.title.getValue().trimmed;
                if(t$20574.size.compare((0)).equals($$$cl20381.getLarger())){
                    $$todoList.todos.add(Todo(t$20574));
                    $$todoList.title.setValue($$$cl20381.String("",0));
                }
            };$$todoList.create.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$m','create']};};
            
            //MethodDef showAll at TodoList.ceylon (32:4-34:4)
            $$todoList.showAll=function showAll(){
                var $$todoList=this;
                $$todoList.mode.setValue(getAll());
            };$$todoList.showAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$m','showAll']};};
            
            //MethodDef showActive at TodoList.ceylon (36:4-38:4)
            $$todoList.showActive=function showActive(){
                var $$todoList=this;
                $$todoList.mode.setValue(getActive());
            };$$todoList.showActive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$m','showActive']};};
            
            //MethodDef showCompleted at TodoList.ceylon (40:4-42:4)
            $$todoList.showCompleted=function showCompleted(){
                var $$todoList=this;
                $$todoList.mode.setValue(getCompleted());
            };$$todoList.showCompleted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$m','showCompleted']};};
            
            //MethodDef remove at TodoList.ceylon (44:4-46:4)
            $$todoList.remove=function remove(todo$20575){
                var $$todoList=this;
                $$todoList.todos.removeElement(todo$20575);
            };$$todoList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$m','remove']};};
            
            //MethodDef removeCompleted at TodoList.ceylon (48:4-53:4)
            $$todoList.removeCompleted=function removeCompleted(){
                var $$todoList=this;
                
                //AttributeDecl toRemove at TodoList.ceylon (49:8-49:91)
                var toRemove$20576=$$$cc20402.LinkedList($$todoList.todos.$filter($$$cl20381.$JsCallable((function (todo$20577){
                    return todo$20577.completed.getValue();
                }),[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:'T', l:[{t:Todo}]}})),{Element:{t:Todo}});
                //'for' statement at TodoList.ceylon (50:8-52:8)
                var it$20578 = toRemove$20576.iterator();
                var completed$20579;while ((completed$20579=it$20578.next())!==$$$cl20381.getFinished()){
                    $$todoList.todos.removeElement(completed$20579);
                }
            };$$todoList.removeCompleted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$m','removeCompleted']};};
            
            //MethodDef init at TodoList.ceylon (55:4-148:4)
            $$todoList.init=function init(){
                var $$todoList=this;
                
                //AttributeDecl a at TodoList.ceylon (57:8-144:9)
                var a$20580=(content$20581=[(id$20582=$$$cl20381.String("todoapp",7),content$20583=[(id$20584=$$$cl20381.String("header",6),content$20585=[(content$20586=[$$$cl20381.String("todos",5).valueOf()].reifyCeylonType({Element:{t:$$$cl20381.String},Absent:{t:$$$cl20381.Null}}),$$$icm20382.H1$view(undefined,undefined,undefined,content$20586)),(id$20587=$$$cl20381.String("new-todo",8),name$20588=$$$cl20381.String("title",5),bindings$20589=$$$cl20381.Tuple($$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('title',TodoList.$$.prototype.$prop$getTitle,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().val),$$$cl20381.Tuple($$$icm20382.method$expression($$$cl20381.AppliedMethod$meta$model(TodoList.$$.prototype.create,undefined,{Container:{t:TodoList},Type:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}),{Arguments:{t:$$$cl20381.Empty},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().enter),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),{Rest:{t:'T', l:[{t:$$$icm20382.Binding$binding}]},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),$$$icm20382.Input$view(name$20588,id$20587,undefined,bindings$20589,undefined))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm20382.H1$view},{t:$$$icm20382.Input$view}]},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Header$view(id$20584,undefined,undefined,content$20585)),(id$20590=$$$cl20381.String("main",4),content$20591=[(id$20592=$$$cl20381.String("todo-list",9),bindings$20593=$$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('filtered',TodoList.$$.prototype.$prop$getFiltered,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.List,a:{Element:{t:Todo}}}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.List,a:{Element:{t:Todo}}}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().foreach({Value:{t:Todo}})),content$20594=[(bindings$20595=$$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('completed',Todo.$$.prototype.$prop$getCompleted,{Container:{t:Todo},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.$Boolean}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.$Boolean}}},Source:{t:Todo}}).bindTo($$$icm20382.getBinders$binding().css($$$cl20381.String("completed",9))),content$20596=[(classNames$20597=$$$cl20381.Tuple($$$cl20381.String("view",4),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$cl20381.String},First:{t:$$$cl20381.String}}),content$20598=[(classNames$20599=$$$cl20381.Tuple($$$cl20381.String("toggle",6),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$cl20381.String},First:{t:$$$cl20381.String}}),bindings$20600=$$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('completed',Todo.$$.prototype.$prop$getCompleted,{Container:{t:Todo},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.$Boolean}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.$Boolean}}},Source:{t:Todo}}).bindTo($$$icm20382.getBinders$binding().checked),$$$icm20382.CheckBox$view(undefined,undefined,classNames$20599,bindings$20600,undefined)),(bindings$20601=$$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('title',Todo.$$.prototype.$prop$getTitle,{Container:{t:Todo},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},Source:{t:Todo}}).bindTo($$$icm20382.getBinders$binding().text),$$$icm20382.Label$view(undefined,undefined,bindings$20601,undefined)),(classNames$20602=$$$cl20381.Tuple($$$cl20381.String("destroy",7),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$cl20381.String},First:{t:$$$cl20381.String}}),bindings$20603=$$$icm20382.method$expression($$$cl20381.AppliedMethod$meta$model(TodoList.$$.prototype.remove,undefined,{Container:{t:TodoList},Type:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:Todo}]}}),{Arguments:{t:'T', l:[{t:Todo}]},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().click({Source:{t:Todo}})),$$$icm20382.Button$view(undefined,undefined,classNames$20602,bindings$20603,undefined))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm20382.CheckBox$view},{t:$$$icm20382.Label$view},{t:$$$icm20382.Button$view}]},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Div$view(undefined,classNames$20597,undefined,content$20598))].reifyCeylonType({Element:{t:$$$icm20382.Div$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Li$view(undefined,undefined,bindings$20595,content$20596))].reifyCeylonType({Element:{t:$$$icm20382.Li$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Ul$view(id$20592,undefined,bindings$20593,content$20594))].reifyCeylonType({Element:{t:$$$icm20382.Ul$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Section$view(id$20590,undefined,undefined,content$20591)),(id$20604=$$$cl20381.String("footer",6),bindings$20605=$$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('hasTodos',TodoList.$$.prototype.$prop$getHasTodos,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().visible()),content$20606=[(id$20607=$$$cl20381.String("todo-count",10),content$20608=[(bindings$20609=$$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('remainingCount',TodoList.$$.prototype.$prop$getRemainingCount,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.Integer}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.Integer}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().text),$$$icm20382.Strong$view(undefined,undefined,bindings$20609,undefined)),$$$cl20381.String(" ",1).valueOf(),(bindings$20610=$$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('items',TodoList.$$.prototype.$prop$getItems,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.String}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.String}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().text),$$$icm20382.Span$view(undefined,undefined,bindings$20610,undefined)),$$$cl20381.String(" left",5).valueOf()].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm20382.Strong$view},{t:$$$cl20381.String},{t:$$$icm20382.Span$view}]},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Span$view(id$20607,undefined,undefined,content$20608)),(id$20611=$$$cl20381.String("filters",7),content$20612=[(content$20613=[(bindings$20614=$$$cl20381.Tuple($$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('allMode',TodoList.$$.prototype.$prop$getAllMode,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().css($$$cl20381.String("selected",8))),$$$cl20381.Tuple($$$icm20382.method$expression($$$cl20381.AppliedMethod$meta$model(TodoList.$$.prototype.showAll,undefined,{Container:{t:TodoList},Type:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}),{Arguments:{t:$$$cl20381.Empty},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().click({Source:{t:$$$cl20381.Nothing}})),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),{Rest:{t:'T', l:[{t:$$$icm20382.Binding$binding}]},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),href$20615=$$$cl20381.String("#",1),content$20616=[$$$cl20381.String("All",3).valueOf()].reifyCeylonType({Element:{t:$$$cl20381.String},Absent:{t:$$$cl20381.Null}}),$$$icm20382.A$view(undefined,undefined,bindings$20614,href$20615,content$20616))].reifyCeylonType({Element:{t:$$$icm20382.A$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Li$view(undefined,undefined,undefined,content$20613)),(content$20617=[(bindings$20618=$$$cl20381.Tuple($$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('activeMode',TodoList.$$.prototype.$prop$getActiveMode,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().css($$$cl20381.String("selected",8))),$$$cl20381.Tuple($$$icm20382.method$expression($$$cl20381.AppliedMethod$meta$model(TodoList.$$.prototype.showActive,undefined,{Container:{t:TodoList},Type:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}),{Arguments:{t:$$$cl20381.Empty},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().click({Source:{t:$$$cl20381.Nothing}})),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),{Rest:{t:'T', l:[{t:$$$icm20382.Binding$binding}]},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),href$20619=$$$cl20381.String("#",1),content$20620=[$$$cl20381.String("Active",6).valueOf()].reifyCeylonType({Element:{t:$$$cl20381.String},Absent:{t:$$$cl20381.Null}}),$$$icm20382.A$view(undefined,undefined,bindings$20618,href$20619,content$20620))].reifyCeylonType({Element:{t:$$$icm20382.A$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Li$view(undefined,undefined,undefined,content$20617)),(content$20621=[(bindings$20622=$$$cl20381.Tuple($$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('completedMode',TodoList.$$.prototype.$prop$getCompletedMode,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().css($$$cl20381.String("selected",8))),$$$cl20381.Tuple($$$icm20382.method$expression($$$cl20381.AppliedMethod$meta$model(TodoList.$$.prototype.showCompleted,undefined,{Container:{t:TodoList},Type:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}),{Arguments:{t:$$$cl20381.Empty},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().click({Source:{t:$$$cl20381.Nothing}})),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),{Rest:{t:'T', l:[{t:$$$icm20382.Binding$binding}]},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),href$20623=$$$cl20381.String("#",1),content$20624=[$$$cl20381.String("Completed",9).valueOf()].reifyCeylonType({Element:{t:$$$cl20381.String},Absent:{t:$$$cl20381.Null}}),$$$icm20382.A$view(undefined,undefined,bindings$20622,href$20623,content$20624))].reifyCeylonType({Element:{t:$$$icm20382.A$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Li$view(undefined,undefined,undefined,content$20621))].reifyCeylonType({Element:{t:$$$icm20382.Li$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Ul$view(id$20611,undefined,undefined,content$20612)),(id$20625=$$$cl20381.String("clear-completed",15),bindings$20626=$$$cl20381.Tuple($$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('hasCompleted',TodoList.$$.prototype.$prop$getHasCompleted,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.$Boolean}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().visible()),$$$cl20381.Tuple($$$icm20382.method$expression($$$cl20381.AppliedMethod$meta$model(TodoList.$$.prototype.removeCompleted,undefined,{Container:{t:TodoList},Type:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}),{Arguments:{t:$$$cl20381.Empty},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().click({Source:{t:$$$cl20381.Nothing}})),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),{Rest:{t:'T', l:[{t:$$$icm20382.Binding$binding}]},Element:{t:$$$icm20382.Binding$binding},First:{t:$$$icm20382.Binding$binding}}),content$20627=[$$$cl20381.String("Clear completed (",17).valueOf(),(bindings$20628=$$$icm20382.attribute$expression($$$cl20381.$init$AppliedAttribute$meta$model()('completedCount',TodoList.$$.prototype.$prop$getCompletedCount,{Container:{t:TodoList},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.Integer}}}}),{Value:{t:$$$icm20382.Observable,a:{Value:{t:$$$cl20381.Integer}}},Source:{t:TodoList}}).bindTo($$$icm20382.getBinders$binding().text),$$$icm20382.Span$view(undefined,undefined,bindings$20628,undefined)),$$$cl20381.String(")",1).valueOf()].reifyCeylonType({Element:{t:'u', l:[{t:$$$cl20381.String},{t:$$$icm20382.Span$view}]},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Button$view(undefined,id$20625,undefined,bindings$20626,content$20627))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm20382.Span$view},{t:$$$icm20382.Ul$view},{t:$$$icm20382.Button$view}]},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Footer$view(id$20604,undefined,bindings$20605,content$20606))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm20382.Header$view},{t:$$$icm20382.Section$view},{t:$$$icm20382.Footer$view}]},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Section$view(id$20582,undefined,undefined,content$20583)),(id$20629=$$$cl20381.String("info",4),content$20630=[(content$20631=[$$$cl20381.String("Part of ",8).valueOf(),(href$20632=$$$cl20381.String("http://todomvc.com",18),content$20633=[$$$cl20381.String("TodoMVC",7).valueOf()].reifyCeylonType({Element:{t:$$$cl20381.String},Absent:{t:$$$cl20381.Null}}),$$$icm20382.A$view(undefined,undefined,undefined,href$20632,content$20633))].reifyCeylonType({Element:{t:'u', l:[{t:$$$cl20381.String},{t:$$$icm20382.A$view}]},Absent:{t:$$$cl20381.Null}}),$$$icm20382.P$view(undefined,undefined,undefined,content$20631))].reifyCeylonType({Element:{t:$$$icm20382.P$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Footer$view(id$20629,undefined,undefined,content$20630))].reifyCeylonType({Element:{t:'u', l:[{t:$$$icm20382.Section$view},{t:$$$icm20382.Footer$view}]},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Div$view(undefined,undefined,undefined,content$20581));
                var content$20581,id$20582,content$20583,id$20584,content$20585,content$20586,id$20587,name$20588,bindings$20589,id$20590,content$20591,id$20592,bindings$20593,content$20594,bindings$20595,content$20596,classNames$20597,content$20598,classNames$20599,bindings$20600,bindings$20601,classNames$20602,bindings$20603,id$20604,bindings$20605,content$20606,id$20607,content$20608,bindings$20609,bindings$20610,id$20611,content$20612,content$20613,bindings$20614,href$20615,content$20616,content$20617,bindings$20618,href$20619,content$20620,content$20621,bindings$20622,href$20623,content$20624,id$20625,bindings$20626,content$20627,bindings$20628,id$20629,content$20630,content$20631,href$20632,content$20633;
                
                //AttributeDecl formNode at TodoList.ceylon (146:8-146:45)
                var formNode$20634=a$20580.$apply($$todoList).node;
                $$$icm20382.byId$dom($$$cl20381.String("body",4)).addChild(formNode$20634);
            };$$todoList.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:TodoList,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','TodoList','$m','init']};};
        })(TodoList.$$.prototype);
    }
    return TodoList;
}
exports.$init$TodoList=$init$TodoList;
$init$TodoList();

//ClassDef Todo at Todo.ceylon (2:0-8:0)
function Todo(_title$20635, $$todo){
    $init$Todo();
    if ($$todo===undefined)$$todo=new Todo.$$;
    if(_title$20635===undefined){_title$20635=$$$cl20381.String("",0);}
    $$todo._title$20635_=_title$20635;
    
    //AttributeDecl title at Todo.ceylon (4:4-4:52)
    $$todo.title$20636_=$$$icm20382.Property($$todo._title$20635,{Value:{t:$$$cl20381.String}});
    $$todo.$prop$getTitle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$cont:Todo,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','Todo','$at','title']};}};
    $$todo.$prop$getTitle.get=function(){return title};
    
    //AttributeDecl completed at Todo.ceylon (5:4-5:56)
    $$todo.completed$20637_=$$$icm20382.Property(false,{Value:{t:$$$cl20381.$Boolean}});
    $$todo.$prop$getCompleted={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:Todo,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','Todo','$at','completed']};}};
    $$todo.$prop$getCompleted.get=function(){return completed};
    return $$todo;
}
Todo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'_title',$mt:'prm',$def:1,$t:{t:$$$cl20381.String},$an:function(){return[];}}],d:['io.cayla.todomvc','Todo']};};
function $init$Todo(){
    if (Todo.$$===undefined){
        $$$cl20381.initTypeProto(Todo,'io.cayla.todomvc::Todo',$$$cl20381.Basic);
        (function($$todo){
            
            //AttributeDecl title at Todo.ceylon (4:4-4:52)
            $$$cl20381.defineAttr($$todo,'title',function(){return this.title$20636_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$cont:Todo,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','Todo','$at','title']};});
            
            //AttributeDecl completed at Todo.ceylon (5:4-5:56)
            $$$cl20381.defineAttr($$todo,'completed',function(){return this.completed$20637_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.$Boolean}}},$cont:Todo,$an:function(){return[$$$cl20381.shared()];},d:['io.cayla.todomvc','Todo','$at','completed']};});
            $$$cl20381.defineAttr($$todo,'_title$20635',function(){return this._title$20635_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.String},$cont:Todo,d:['io.cayla.todomvc','Todo','$at','_title']};});
        })(Todo.$$.prototype);
    }
    return Todo;
}
exports.$init$Todo=$init$Todo;
$init$Todo();

//ClassDef Mode at Mode.ceylon (1:0-3:0)
function Mode($$mode){
    $init$Mode();
    if ($$mode===undefined)$$$cl20381.throwexc($$$cl20381.InvocationException$meta$model($$$cl20381.String("Cannot instantiate abstract class")),'?','?')
    return $$mode;
}
Mode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],of:[{t:active$20638},{t:all$20639},{t:completed$20640}],$an:function(){return[$$$cl20381.abstract()];},d:['io.cayla.todomvc','Mode']};};
function $init$Mode(){
    if (Mode.$$===undefined){
        $$$cl20381.initTypeProto(Mode,'io.cayla.todomvc::Mode',$$$cl20381.Basic);
        (function($$mode){
            $$mode.accept={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:Mode,$an:function(){return[$$$cl20381.shared(),$$$cl20381.formal()];},d:['io.cayla.todomvc','Mode','$m','accept']};}};
        })(Mode.$$.prototype);
    }
    return Mode;
}
exports.$init$Mode=$init$Mode;
$init$Mode();

//ObjectDef active at Mode.ceylon (4:0-6:0)
function active$20638(){
    var $$active=new active$20638.$$;
    Mode($$active);
    return $$active;
};active$20638.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode},d:['io.cayla.todomvc','active']};};
function $init$active$20638(){
    if (active$20638.$$===undefined){
        $$$cl20381.initTypeProto(active$20638,'io.cayla.todomvc::active',$init$Mode());
        (function($$active){
            
            //MethodDecl accept at Mode.ceylon (5:4-5:73)
            $$active.accept=function (todo$20641){
                var $$active=this;
                return (!todo$20641.completed.getValue());
            };
            $$active.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:active$20638,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.todomvc','active','$m','accept']};};
        })(active$20638.$$.prototype);
    }
    return active$20638;
}
exports.$init$active$20638=$init$active$20638;
$init$active$20638();
var active$20642;
function getActive(){
    if (active$20642===undefined){active$20642=$init$active$20638()();active$20642.$$metamodel$$=getActive.$$metamodel$$;}
    return active$20642;
}
getActive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:active$20638},d:['io.cayla.todomvc','active']};};
$prop$getActive={get:getActive,$$metamodel$$:getActive.$$metamodel$$};
exports.$prop$getActive=$prop$getActive;

//ObjectDef all at Mode.ceylon (7:0-9:0)
function all$20639(){
    var $$all=new all$20639.$$;
    Mode($$all);
    return $$all;
};all$20639.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode},d:['io.cayla.todomvc','all']};};
function $init$all$20639(){
    if (all$20639.$$===undefined){
        $$$cl20381.initTypeProto(all$20639,'io.cayla.todomvc::all',$init$Mode());
        (function($$all){
            
            //MethodDecl accept at Mode.ceylon (8:4-8:51)
            $$all.accept=function (todo$20643){
                var $$all=this;
                return true;
            };
            $$all.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:all$20639,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.todomvc','all','$m','accept']};};
        })(all$20639.$$.prototype);
    }
    return all$20639;
}
exports.$init$all$20639=$init$all$20639;
$init$all$20639();
var all$20644;
function getAll(){
    if (all$20644===undefined){all$20644=$init$all$20639()();all$20644.$$metamodel$$=getAll.$$metamodel$$;}
    return all$20644;
}
getAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:all$20639},d:['io.cayla.todomvc','all']};};
$prop$getAll={get:getAll,$$metamodel$$:getAll.$$metamodel$$};
exports.$prop$getAll=$prop$getAll;

//ObjectDef completed at Mode.ceylon (10:0-12:0)
function completed$20640(){
    var $$completed=new completed$20640.$$;
    Mode($$completed);
    return $$completed;
};completed$20640.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Mode},d:['io.cayla.todomvc','completed']};};
function $init$completed$20640(){
    if (completed$20640.$$===undefined){
        $$$cl20381.initTypeProto(completed$20640,'io.cayla.todomvc::completed',$init$Mode());
        (function($$completed){
            
            //MethodDecl accept at Mode.ceylon (11:4-11:72)
            $$completed.accept=function (todo$20645){
                var $$completed=this;
                return todo$20645.completed.getValue();
            };
            $$completed.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.$Boolean},$ps:[{$nm:'todo',$mt:'prm',$t:{t:Todo},$an:function(){return[];}}],$cont:completed$20640,$an:function(){return[$$$cl20381.shared(),$$$cl20381.actual()];},d:['io.cayla.todomvc','completed','$m','accept']};};
        })(completed$20640.$$.prototype);
    }
    return completed$20640;
}
exports.$init$completed$20640=$init$completed$20640;
$init$completed$20640();
var completed$20646;
function getCompleted(){
    if (completed$20646===undefined){completed$20646=$init$completed$20640()();completed$20646.$$metamodel$$=getCompleted.$$metamodel$$;}
    return completed$20646;
}
getCompleted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:completed$20640},d:['io.cayla.todomvc','completed']};};
$prop$getCompleted={get:getCompleted,$$metamodel$$:getCompleted.$$metamodel$$};
exports.$prop$getCompleted=$prop$getCompleted;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

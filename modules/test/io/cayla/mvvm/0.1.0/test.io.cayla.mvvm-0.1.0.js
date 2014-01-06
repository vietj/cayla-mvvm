(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-version":"0.1.0","$mod-deps":["io.cayla.mvvm\/0.1.0","ceylon.test\/1.0.0","ceylon.language\/1.0.0"],"test.io.cayla.mvvm":{"testResolveListenerInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolveListenerInHierachy","$mt":"mthd","$c":{"Parent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Parent","$ps":[{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"child","$mt":"prm"},{"$def":"1","$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","$mt":"prm"}],"$at":{"count":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","var":"1","$mt":"attr"},"child":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"child","$mt":"attr"}},"$m":{"foo":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"foo","$ps":[[{"$t":{"$nm":"Child","$pk":"test.io.cayla.mvvm"},"$nm":"c","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"Child":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Child","$mt":"cls"}}},"Group":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Group","$ps":[{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"ObservableList","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"users","$mt":"prm"}],"$at":{"users":{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"ObservableList","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"users","$mt":"attr"}},"$mt":"cls"},"carNameBinding":{"$t":{"$nm":"Binding","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.binding"},"$nm":"carNameBinding","$mt":"attr"},"firstNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"AttributeExpression","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.expression"},"$nm":"firstNameExpr","$mt":"attr"},"withFragment":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"withFragment","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"callback","$ps":[[{"$t":{"$nm":"DomNode","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.dom"},"$nm":"fragment","$mt":"prm"}]],"$pt":"f","$mt":"prm"}]],"$m":{"callback":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"callback","$ps":[[{"$t":{"$nm":"DomNode","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.dom"},"$nm":"fragment","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testMatchesSelector":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testMatchesSelector","$mt":"mthd"},"testInsertBefore":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testInsertBefore","$mt":"mthd"},"Meal":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"Meal","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"price","$mt":"prm"}],"$at":{"price":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"price","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"run":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Run the module `test.io.cayla.mvvm`."]},"$nm":"run","$mt":"mthd"},"ViewModel":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ViewModel","$ps":[{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"prm"}],"$at":{"seats":{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"attr"}},"$mt":"cls"},"testPropertyChange":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testPropertyChange","$m":{"listener":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"listener","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"prop","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testQuerySelectorAllWrap":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testQuerySelectorAllWrap","$mt":"mthd"},"carNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},{"$nm":"Car","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"AttributeExpression","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.expression"},"$nm":"carNameExpr","$mt":"attr"},"carOwnerExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$mt":"tpm","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},{"$nm":"Car","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"AttributeExpression","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.expression"},"$nm":"carOwnerExpr","$mt":"attr"},"testObserveComputedObservable":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testObserveComputedObservable","$mt":"mthd"},"testComputedObservableList":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableList","$mt":"mthd"},"ReservationsViewModel":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ReservationsViewModel","$ps":[{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"prm"}],"$at":{"seats":{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"attr"}},"$mt":"cls"},"firstNameBinding":{"$t":{"$nm":"Binding","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.binding"},"$nm":"firstNameBinding","$mt":"attr"},"AnHandler":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"AnHandler","$at":{"counter":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"counter","var":"1","$mt":"attr"}},"$m":{"m":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"m","$mt":"mthd"}},"$mt":"cls"},"testComputedObservable":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservable","$mt":"mthd"},"testWith":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testWith","$mt":"mthd"},"testForEach":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testForEach","$mt":"mthd"},"testStringPropertyBinding":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testStringPropertyBinding","$mt":"mthd"},"SeatReservation":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"SeatReservation","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"Meal","$pk":"test.io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"initialMeal","$mt":"prm"}],"$at":{"initialMeal":{"$t":{"$nm":"Meal","$pk":"test.io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"initialMeal","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"testResolvePropertyInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolvePropertyInHierachy","$mt":"mthd"},"testQuerySelectorAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testQuerySelectorAll","$mt":"mthd"},"testExpression":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testExpression","$mt":"mthd"},"testEventDelegation":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testEventDelegation","$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testComputedObservableTriangle":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableTriangle","$mt":"mthd"},"testComputedObservableCycle":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableCycle","$mt":"mthd"},"testResolveHandlerInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolveHandlerInHierachy","$mt":"mthd","$c":{"Parent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Parent","$ps":[{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"child","$mt":"prm"},{"$def":"1","$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","$mt":"prm"}],"$at":{"count":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","var":"1","$mt":"attr"},"child":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"child","$mt":"attr"}},"$m":{"foo":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"foo","$mt":"mthd"}},"$mt":"cls"},"Child":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Child","$mt":"cls"}}},"$pkg-shared":"1","carOwnerBinding":{"$t":{"$nm":"Binding","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.binding"},"$nm":"carOwnerBinding","$mt":"attr"},"lastNameBinding":{"$t":{"$nm":"Binding","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.binding"},"$nm":"lastNameBinding","$mt":"attr"},"lastNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"AttributeExpression","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.expression"},"$nm":"lastNameExpr","$mt":"attr"},"Car":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Car","$ps":[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"owner","$mt":"prm"}],"$at":{"owner":{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"owner","$mt":"attr"},"name":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"testDiff6":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff6","$mt":"mthd"},"testDiff5":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff5","$mt":"mthd"},"testDiff4":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff4","$mt":"mthd"},"testDiff3":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff3","$mt":"mthd"},"testDiff2":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff2","$mt":"mthd"},"testDiff1":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff1","$mt":"mthd"},"Person":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Person","$ps":[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"firstName","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"lastName","$mt":"prm"}],"$at":{"firstName":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"firstName","$mt":"attr"},"lastName":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"lastName","$mt":"attr"}},"$mt":"cls"}},"$mod-bin":"6.0","$mod-name":"test.io.cayla.mvvm"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl20381=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl20381.$addmod$($$$cl20381,'ceylon.language/1.0.0');
var $$$icm20382=require('io/cayla/mvvm/0.1.0/io.cayla.mvvm-0.1.0');
$$$cl20381.$addmod$($$$icm20382,'io.cayla.mvvm/0.1.0');

//MethodDef withFragment at withFragment.ceylon (2:0-16:0)
function withFragment(callback$20383){
    
    //AttributeDecl bodyNode at withFragment.ceylon (3:4-3:20)
    var bodyNode$20384;
    /*Begin dynamic block*/
    
    //AttributeDecl bodies at withFragment.ceylon (5:8-5:62)
    var bodies$20385=(typeof document==='undefined'||document===null?$$$cl20381.throwexc($$$cl20381.Exception($$$cl20381.String("Undefined or null reference: document")),'5:25-5:32','withFragment.ceylon'):document).getElementsByTagName($$$cl20381.String("body",4).valueOf());
    
    //AttributeDecl body at withFragment.ceylon (6:8-6:32)
    var body$20386=bodies$20385[(0)];
    bodyNode$20384=$$$icm20382.DomNode$dom(body$20386);/*End dynamic block*/
    
    //AttributeDecl fragmentNode at withFragment.ceylon (9:4-9:53)
    var fragmentNode$20387=bodyNode$20384.addElement($$$cl20381.String("div",3));
    try{
        callback$20383(fragmentNode$20387);
    }finally{
        fragmentNode$20387.detach();
    }
}
exports.withFragment=withFragment;
withFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl20381.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','withFragment']};};
var $$$ct20388=require('ceylon/test/1.0.0/ceylon.test-1.0.0');
$$$cl20381.$addmod$($$$ct20388,'ceylon.test/1.0.0');

//ClassDef Meal at tests.ceylon (7:0-8:0)
function Meal(name, price, $$meal){
    $init$Meal();
    if ($$meal===undefined)$$meal=new Meal.$$;
    $$meal.name_=name;
    $$meal.price_=price;
    return $$meal;
}
Meal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[$$$cl20381.shared()];}},{$nm:'price',$mt:'prm',$t:{t:$$$cl20381.Integer},$an:function(){return[$$$cl20381.shared()];}}],$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','Meal']};};
exports.Meal=Meal;
function $init$Meal(){
    if (Meal.$$===undefined){
        $$$cl20381.initTypeProto(Meal,'test.io.cayla.mvvm::Meal',$$$cl20381.Basic);
        (function($$meal){
            $$$cl20381.defineAttr($$meal,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.String},$cont:Meal,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','Meal','$at','name']};});
            $$$cl20381.defineAttr($$meal,'price',function(){return this.price_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Meal,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','Meal','$at','price']};});
        })(Meal.$$.prototype);
    }
    return Meal;
}
exports.$init$Meal=$init$Meal;
$init$Meal();

//ClassDef SeatReservation at tests.ceylon (10:0-11:0)
function SeatReservation(name, initialMeal, $$seatReservation){
    $init$SeatReservation();
    if ($$seatReservation===undefined)$$seatReservation=new SeatReservation.$$;
    $$seatReservation.name_=name;
    $$seatReservation.initialMeal_=initialMeal;
    return $$seatReservation;
}
SeatReservation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[$$$cl20381.shared()];}},{$nm:'initialMeal',$mt:'prm',$t:{t:Meal},$an:function(){return[$$$cl20381.shared()];}}],$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','SeatReservation']};};
exports.SeatReservation=SeatReservation;
function $init$SeatReservation(){
    if (SeatReservation.$$===undefined){
        $$$cl20381.initTypeProto(SeatReservation,'test.io.cayla.mvvm::SeatReservation',$$$cl20381.Basic);
        (function($$seatReservation){
            $$$cl20381.defineAttr($$seatReservation,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.String},$cont:SeatReservation,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','SeatReservation','$at','name']};});
            $$$cl20381.defineAttr($$seatReservation,'initialMeal',function(){return this.initialMeal_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Meal},$cont:SeatReservation,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','SeatReservation','$at','initialMeal']};});
        })(SeatReservation.$$.prototype);
    }
    return SeatReservation;
}
exports.$init$SeatReservation=$init$SeatReservation;
$init$SeatReservation();

//ClassDef ReservationsViewModel at tests.ceylon (13:0-14:0)
function ReservationsViewModel(seats, $$reservationsViewModel){
    $init$ReservationsViewModel();
    if ($$reservationsViewModel===undefined)$$reservationsViewModel=new ReservationsViewModel.$$;
    $$reservationsViewModel.seats_=seats;
    return $$reservationsViewModel;
}
ReservationsViewModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'seats',$mt:'prm',$t:{t:$$$cl20381.List,a:{Element:{t:SeatReservation}}},$an:function(){return[$$$cl20381.shared()];}}],$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','ReservationsViewModel']};};
exports.ReservationsViewModel=ReservationsViewModel;
function $init$ReservationsViewModel(){
    if (ReservationsViewModel.$$===undefined){
        $$$cl20381.initTypeProto(ReservationsViewModel,'test.io.cayla.mvvm::ReservationsViewModel',$$$cl20381.Basic);
        (function($$reservationsViewModel){
            $$$cl20381.defineAttr($$reservationsViewModel,'seats',function(){return this.seats_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:{t:SeatReservation}}},$cont:ReservationsViewModel,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','ReservationsViewModel','$at','seats']};});
        })(ReservationsViewModel.$$.prototype);
    }
    return ReservationsViewModel;
}
exports.$init$ReservationsViewModel=$init$ReservationsViewModel;
$init$ReservationsViewModel();

//ClassDef ViewModel at tests.ceylon (16:0-17:0)
function ViewModel(seats, $$viewModel){
    $init$ViewModel();
    if ($$viewModel===undefined)$$viewModel=new ViewModel.$$;
    $$viewModel.seats_=seats;
    return $$viewModel;
}
ViewModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'seats',$mt:'prm',$t:{t:$$$cl20381.List,a:{Element:{t:SeatReservation}}},$an:function(){return[$$$cl20381.shared()];}}],$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','ViewModel']};};
exports.ViewModel=ViewModel;
function $init$ViewModel(){
    if (ViewModel.$$===undefined){
        $$$cl20381.initTypeProto(ViewModel,'test.io.cayla.mvvm::ViewModel',$$$cl20381.Basic);
        (function($$viewModel){
            $$$cl20381.defineAttr($$viewModel,'seats',function(){return this.seats_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.List,a:{Element:{t:SeatReservation}}},$cont:ViewModel,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','ViewModel','$at','seats']};});
        })(ViewModel.$$.prototype);
    }
    return ViewModel;
}
exports.$init$ViewModel=$init$ViewModel;
$init$ViewModel();

//ClassDef AnHandler at tests.ceylon (19:0-24:0)
function AnHandler($$anHandler){
    $init$AnHandler();
    if ($$anHandler===undefined)$$anHandler=new AnHandler.$$;
    
    //AttributeDecl counter at tests.ceylon (20:4-20:39)
    $$anHandler.counter$20389_=(0);
    $$anHandler.$prop$getCounter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:AnHandler,$an:function(){return[$$$cl20381.shared(),$$$cl20381.variable()];},d:['test.io.cayla.mvvm','AnHandler','$at','counter']};}};
    $$anHandler.$prop$getCounter.get=function(){return counter};
    return $$anHandler;
}
AnHandler.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','AnHandler']};};
exports.AnHandler=AnHandler;
function $init$AnHandler(){
    if (AnHandler.$$===undefined){
        $$$cl20381.initTypeProto(AnHandler,'test.io.cayla.mvvm::AnHandler',$$$cl20381.Basic);
        (function($$anHandler){
            
            //AttributeDecl counter at tests.ceylon (20:4-20:39)
            $$$cl20381.defineAttr($$anHandler,'counter',function(){return this.counter$20389_;},function(counter$20390){return this.counter$20389_=counter$20390;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:AnHandler,$an:function(){return[$$$cl20381.shared(),$$$cl20381.variable()];},d:['test.io.cayla.mvvm','AnHandler','$at','counter']};});
            
            //MethodDef m at tests.ceylon (21:4-23:4)
            $$anHandler.m=function m(){
                var $$anHandler=this;
                (oldcounter$20391=$$anHandler.counter,$$anHandler.counter=oldcounter$20391.successor,oldcounter$20391);
                var oldcounter$20391;
            };$$anHandler.m.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:AnHandler,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','AnHandler','$m','m']};};
        })(AnHandler.$$.prototype);
    }
    return AnHandler;
}
exports.$init$AnHandler=$init$AnHandler;
$init$AnHandler();

//MethodDef testExpression at tests.ceylon (26:0-38:0)
function testExpression(){
    
    //AttributeDecl reservation at tests.ceylon (27:4-27:78)
    var reservation$20392=SeatReservation($$$cl20381.String("julien",6),Meal($$$cl20381.String("pasta",5),(10)));
    
    //AttributeDecl vm at tests.ceylon (28:4-28:70)
    var vm$20393=ViewModel($$$cl20381.LazyList([reservation$20392].reifyCeylonType({Element:{t:SeatReservation},Absent:{t:$$$cl20381.Nothing}}),{Element:{t:SeatReservation}}));
    
    //AttributeDecl e1 at tests.ceylon (29:4-29:114)
    var e1$20394=$$$icm20382.ClassExpression$expression({Type:{t:SeatReservation}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('initialMeal',SeatReservation.$$.prototype.$prop$getInitialMeal,{Container:{t:SeatReservation},Set:{t:$$$cl20381.Nothing},Get:{t:Meal}}),{Value:{t:Meal}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('price',Meal.$$.prototype.$prop$getPrice,{Container:{t:Meal},Set:{t:$$$cl20381.Nothing},Get:{t:$$$cl20381.Integer}}),{Value:{t:$$$cl20381.Integer}});
    
    //AttributeDecl v1 at tests.ceylon (30:4-30:39)
    var v1$20395=e1$20394.traverse(reservation$20392);
    $$$ct20388.assertEquals((10),v1$20395);
    
    //AttributeDecl handler at tests.ceylon (32:4-32:35)
    var handler$20396=AnHandler();
    
    //AttributeDecl e4 at tests.ceylon (33:4-33:65)
    var e4$20397=$$$icm20382.ClassExpression$expression({Type:{t:AnHandler}}).method($$$cl20381.AppliedMethod$meta$model(AnHandler.$$.prototype.m,undefined,{Container:{t:AnHandler},Type:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}),{Arguments:{t:$$$cl20381.Empty}});
    
    //AttributeDecl v4 at tests.ceylon (34:4-34:35)
    var v4$20398=$$$cl20381.$JsCallable(e4$20397.traverse(handler$20396),[],{Return:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}});
    $$$ct20388.assertEquals((0),handler$20396.counter);
    v4$20398();
    $$$ct20388.assertEquals((1),handler$20396.counter);
}
exports.testExpression=testExpression;
testExpression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testExpression']};};

//MethodDef testPropertyChange at tests.ceylon (40:0-47:0)
function testPropertyChange(){
    
    //AttributeDecl p at tests.ceylon (41:4-41:29)
    var p$20399=$$$icm20382.Property($$$cl20381.String("foo",3),{Value:{t:$$$cl20381.String}});
    
    //MethodDef listener at tests.ceylon (42:4-44:4)
    function listener$20400(prop$20401){
        $$$ct20388.assertEquals($$$cl20381.String("bar",3),prop$20401);
    };listener$20400.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'prop',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],d:['test.io.cayla.mvvm','testPropertyChange','$m','listener']};};
    p$20399.subscribe($$$cl20381.$JsCallable(listener$20400,[{$nm:'prop',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$cl20381.String}]}}));
    p$20399.setValue($$$cl20381.String("bar",3));
}
exports.testPropertyChange=testPropertyChange;
testPropertyChange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testPropertyChange']};};
var $$$cc20402=require('ceylon/collection/1.0.0/ceylon.collection-1.0.0');
$$$cl20381.$addmod$($$$cc20402,'ceylon.collection/1.0.0');

//MethodDef testComputedObservable at testObservable.ceylon (5:0-24:0)
function testComputedObservable(){
    
    //AttributeDecl mode at testObservable.ceylon (6:4-6:32)
    var mode$20403=true;
    function setMode$20403(mode$20404){return mode$20403=mode$20404;};
    
    //AttributeDecl firstName at testObservable.ceylon (7:4-7:38)
    var firstName$20405=$$$icm20382.Property($$$cl20381.String("dale",4),{Value:{t:$$$cl20381.String}});
    
    //AttributeDecl lastName at testObservable.ceylon (8:4-8:39)
    var lastName$20406=$$$icm20382.Property($$$cl20381.String("cooper",6),{Value:{t:$$$cl20381.String}});
    
    //AttributeDecl name at testObservable.ceylon (9:4-9:125)
    var name$20407=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return (opt$20408=(mode$20403?$$$cl20381.StringBuilder().appendAll([firstName$20405.getValue().string,$$$cl20381.String(" ",1),lastName$20406.getValue().string]).string:null),opt$20408!==null?opt$20408:$$$cl20381.StringBuilder().appendAll([firstName$20405.getValue().string]).string);
    }),[],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.String}});
    var opt$20408;
    
    //AttributeDecl count at testObservable.ceylon (10:4-10:30)
    var count$20409=(0);
    function setCount$20409(count$20410){return count$20409=count$20410;};
    name$20407.subscribe($$$cl20381.$JsCallable((function (s$20411){
        return (oldcount$20412=count$20409,count$20409=oldcount$20412.successor,oldcount$20412);
    }),[{$nm:'s',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],{Return:{t:$$$cl20381.Integer},Arguments:{t:'T', l:[{t:$$$cl20381.String}]}}));
    var oldcount$20412;
    $$$ct20388.assertEquals($$$cl20381.String("dale cooper",11),name$20407.getValue());
    firstName$20405.setValue($$$cl20381.String("sammy",5));
    $$$ct20388.assertEquals((1),count$20409);
    $$$ct20388.assertEquals($$$cl20381.String("sammy cooper",12),name$20407.getValue());
    mode$20403=false;
    $$$ct20388.assertEquals($$$cl20381.String("sammy cooper",12),name$20407.getValue());
    lastName$20406.setValue($$$cl20381.String("milouze",7));
    $$$ct20388.assertEquals($$$cl20381.String("sammy",5),name$20407.getValue());
    $$$ct20388.assertEquals((2),count$20409);
    firstName$20405.setValue($$$cl20381.String("scooby",6));
    $$$ct20388.assertEquals($$$cl20381.String("scooby",6),name$20407.getValue());
    $$$ct20388.assertEquals((3),count$20409);
}
exports.testComputedObservable=testComputedObservable;
testComputedObservable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testComputedObservable']};};

//MethodDef testObserveComputedObservable at testObservable.ceylon (26:0-34:0)
function testObserveComputedObservable(){
    
    //AttributeDecl foo at testObservable.ceylon (27:4-27:31)
    var foo$20413=$$$icm20382.Property($$$cl20381.String("foo",3),{Value:{t:$$$cl20381.String}});
    
    //AttributeDecl bar at testObservable.ceylon (28:4-28:63)
    var bar$20414=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$$cl20381.StringBuilder().appendAll([$$$cl20381.String("<bar>",5),foo$20413.getValue().string,$$$cl20381.String("</bar>",6)]).string;
    }),[],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.String}});
    
    //AttributeDecl juu at testObservable.ceylon (29:4-29:63)
    var juu$20415=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$$cl20381.StringBuilder().appendAll([$$$cl20381.String("<juu>",5),bar$20414.getValue().string,$$$cl20381.String("</juu>",6)]).string;
    }),[],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.String}});
    $$$ct20388.assertEquals($$$cl20381.String("<juu><bar>foo</bar></juu>",25),juu$20415.getValue());
    foo$20413.setValue($$$cl20381.String("oof",3));
    $$$ct20388.assertEquals($$$cl20381.String("<bar>oof</bar>",14),bar$20414.getValue());
    $$$ct20388.assertEquals($$$cl20381.String("<juu><bar>oof</bar></juu>",25),juu$20415.getValue());
}
exports.testObserveComputedObservable=testObserveComputedObservable;
testObserveComputedObservable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testObserveComputedObservable']};};

//MethodDef testComputedObservableTriangle at testObservable.ceylon (36:0-52:0)
function testComputedObservableTriangle(){
    
    //AttributeDecl count at testObservable.ceylon (37:4-37:30)
    var count$20416=(0);
    function setCount$20416(count$20417){return count$20416=count$20417;};
    
    //AttributeDecl foo at testObservable.ceylon (38:4-38:31)
    var foo$20418=$$$icm20382.Property($$$cl20381.String("foo",3),{Value:{t:$$$cl20381.String}});
    
    //AttributeDecl bar at testObservable.ceylon (39:4-39:63)
    var bar$20419=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$$cl20381.StringBuilder().appendAll([$$$cl20381.String("<bar>",5),foo$20418.getValue().string,$$$cl20381.String("</bar>",6)]).string;
    }),[],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.String}});
    
    //AttributeDecl juu at testObservable.ceylon (40:4-45:5)
    var juu$20420=(compute$20421=function (){
        (oldcount$20422=count$20416,count$20416=oldcount$20422.successor,oldcount$20422);
        var oldcount$20422;
        return $$$cl20381.StringBuilder().appendAll([$$$cl20381.String("<juu>",5),foo$20418.getValue().string,$$$cl20381.String("</juu><juu>",11),bar$20419.getValue().string,$$$cl20381.String("</juu>",6)]).string;
    },$$$icm20382.computed(compute$20421,{Value:{t:$$$cl20381.String}}));
    var compute$20421;
    $$$ct20388.assertEquals((0),count$20416);
    $$$ct20388.assertEquals($$$cl20381.String("<juu>foo</juu><juu><bar>foo</bar></juu>",39),juu$20420.getValue());
    $$$ct20388.assertEquals((1),count$20416);
    foo$20418.setValue($$$cl20381.String("oof",3));
    $$$ct20388.assertEquals($$$cl20381.String("<juu>oof</juu><juu><bar>oof</bar></juu>",39),juu$20420.getValue());
    $$$ct20388.assertEquals((3),count$20416);
}
exports.testComputedObservableTriangle=testComputedObservableTriangle;
testComputedObservableTriangle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testComputedObservableTriangle']};};

//MethodDef testComputedObservableCycle at testObservable.ceylon (54:0-65:0)
function testComputedObservableCycle(){
    
    //AttributeDecl foo at testObservable.ceylon (55:4-55:31)
    var foo$20423=$$$icm20382.Property($$$cl20381.String("foo",3),{Value:{t:$$$cl20381.String}});
    
    //AttributeDecl exp at testObservable.ceylon (56:4-56:41)
    var exp$20424=$$$cl20381.$JsCallable((function (){
        return $$$cl20381.String("const",5);
    }),[],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}});
    function setExp$20424(exp$20425){return exp$20424=exp$20425;};
    
    //AttributeDecl bar at testObservable.ceylon (57:4-57:62)
    var bar$20426=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$$cl20381.StringBuilder().appendAll([exp$20424().string,$$$cl20381.String(" ",1),foo$20423.getValue().string]).string;
    }),[],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.String}});
    
    //AttributeDecl juu at testObservable.ceylon (58:4-58:52)
    var juu$20427=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$$cl20381.StringBuilder().appendAll([bar$20426.getValue().string]).string;
    }),[],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.String}});
    exp$20424=$$$cl20381.$JsCallable((function (){
        return juu$20427.getValue();
    }),[/*VALUE Callable paramscom.redhat.ceylon.compiler.typechecker.model.Value*/],{Return:{t:$$$cl20381.String},Arguments:{t:$$$cl20381.Empty}});
    try{
        bar$20426.getValue();
        $$$ct20388.fail();
    }catch(ex$20428){
        if (ex$20428.getT$name === undefined) ex$20428=$$$cl20381.NativeException(ex$20428);
        if($$$cl20381.isOfType(ex$20428,{t:$$$icm20382.CyclicDependencyException})){}else{throw ex$20428}
    }
}
exports.testComputedObservableCycle=testComputedObservableCycle;
testComputedObservableCycle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testComputedObservableCycle']};};

//MethodDef testComputedObservableList at testObservable.ceylon (67:0-84:0)
function testComputedObservableList(){
    
    //AttributeDecl list at testObservable.ceylon (68:4-68:41)
    var list$20429=$$$icm20382.ObservableList(undefined,{Element:{t:$$$cl20381.String}});
    list$20429.add($$$cl20381.String("aa",2));
    list$20429.add($$$cl20381.String("a",1));
    list$20429.add($$$cl20381.String("bb",2));
    list$20429.add($$$cl20381.String("b",1));
    
    //AttributeDecl filtered at testObservable.ceylon (73:4-73:108)
    var filtered$20430=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return $$$cc20402.LinkedList(list$20429.getValue().$filter($$$cl20381.$JsCallable((function (elem$20431){
            return elem$20431.size.remainder((2)).equals((0));
        }),[{$nm:'elem',$mt:'prm',$t:{t:$$$cl20381.String},$an:function(){return[];}}],{Return:{t:$$$cl20381.$Boolean},Arguments:{t:'T', l:[{t:$$$cl20381.String}]}})),{Element:{t:$$$cl20381.String}});
    }),[],{Return:{t:$$$cc20402.LinkedList,a:{Element:{t:$$$cl20381.String}}},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cc20402.LinkedList,a:{Element:{t:$$$cl20381.String}}}});
    
    //AttributeDecl count at testObservable.ceylon (74:4-74:58)
    var count$20432=$$$icm20382.computed($$$cl20381.$JsCallable((function (){
        return filtered$20430.getValue().size;
    }),[],{Return:{t:$$$cl20381.Integer},Arguments:{t:$$$cl20381.Empty}}),{Value:{t:$$$cl20381.Integer}});
    $$$ct20388.assertEquals($$$cc20402.LinkedList([$$$cl20381.String("aa",2),$$$cl20381.String("bb",2)].reifyCeylonType({Element:{t:$$$cl20381.String},Absent:{t:$$$cl20381.Nothing}}),{Element:{t:$$$cl20381.String}}),filtered$20430.getValue());
    $$$ct20388.assertEquals((2),count$20432.getValue());
    $$$icm20382.getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("filtered list is ",17),filtered$20430.string]).string);
    $$$icm20382.getLog().debug($$$cl20381.StringBuilder().appendAll([$$$cl20381.String("count list is ",14),count$20432.string]).string);
    list$20429.add($$$cl20381.String("cc",2));
    $$$ct20388.assertEquals($$$cc20402.LinkedList([$$$cl20381.String("aa",2),$$$cl20381.String("bb",2),$$$cl20381.String("cc",2)].reifyCeylonType({Element:{t:$$$cl20381.String},Absent:{t:$$$cl20381.Nothing}}),{Element:{t:$$$cl20381.String}}),filtered$20430.getValue());
    $$$ct20388.assertEquals((3),count$20432.getValue());
    list$20429.removeElement($$$cl20381.String("aa",2));
    $$$ct20388.assertEquals($$$cc20402.LinkedList([$$$cl20381.String("bb",2),$$$cl20381.String("cc",2)].reifyCeylonType({Element:{t:$$$cl20381.String},Absent:{t:$$$cl20381.Nothing}}),{Element:{t:$$$cl20381.String}}),filtered$20430.getValue());
}
exports.testComputedObservableList=testComputedObservableList;
testComputedObservableList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testComputedObservableList']};};

//MethodDef testQuerySelectorAll at testDom.ceylon (4:0-11:0)
function testQuerySelectorAll(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20433){
        
        //AttributeDecl pre at testDom.ceylon (6:8-6:46)
        var pre$20434=fragment$20433.addElement($$$cl20381.String("pre",3));
        pre$20434.addClass($$$cl20381.String("foo",3));
        
        //AttributeDecl nodes at testDom.ceylon (8:8-8:46)
        var nodes$20435=$$$icm20382.querySelectorAll$dom($$$cl20381.String(".foo",4));
        $$$ct20388.assertEquals($$$cl20381.LazyList([pre$20434].reifyCeylonType({Element:{t:$$$icm20382.DomNode$dom},Absent:{t:$$$cl20381.Nothing}}),{Element:{t:$$$icm20382.DomNode$dom}}),$$$cl20381.LazyList(nodes$20435,{Element:{t:$$$icm20382.DomNode$dom}}));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testQuerySelectorAll=testQuerySelectorAll;
testQuerySelectorAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testQuerySelectorAll']};};

//MethodDef testQuerySelectorAllWrap at testDom.ceylon (13:0-18:0)
function testQuerySelectorAllWrap(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20436){
        
        //AttributeDecl nodes at testDom.ceylon (15:8-15:46)
        var nodes$20437=$$$icm20382.querySelectorAll$dom($$$cl20381.String("body",4));
        $$$ct20388.assertEquals((1),nodes$20437.size);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testQuerySelectorAllWrap=testQuerySelectorAllWrap;
testQuerySelectorAllWrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testQuerySelectorAllWrap']};};

//MethodDef testMatchesSelector at testDom.ceylon (20:0-33:0)
function testMatchesSelector(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20438){
        
        //AttributeDecl pre at testDom.ceylon (22:8-22:46)
        var pre$20439=fragment$20438.addElement($$$cl20381.String("pre",3));
        pre$20439.addClass($$$cl20381.String("foo",3));
        $$$ct20388.assertTrue(pre$20439.matchesSelector($$$cl20381.String("pre",3)));
        $$$ct20388.assertTrue(pre$20439.matchesSelector($$$cl20381.String(".foo",4)));
        $$$ct20388.assertTrue(pre$20439.matchesSelector($$$cl20381.String("pre.foo",7)));
        $$$ct20388.assertFalse(pre$20439.matchesSelector($$$cl20381.String("div",3)));
        $$$ct20388.assertFalse(pre$20439.matchesSelector($$$cl20381.String("div.foo",7)));
        $$$ct20388.assertFalse(pre$20439.matchesSelector($$$cl20381.String("pre.bar",7)));
        $$$ct20388.assertFalse(pre$20439.matchesSelector($$$cl20381.String(".bar",4)));
        $$$ct20388.assertFalse(pre$20439.matchesSelector($$$cl20381.String("div.bar",7)));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testMatchesSelector=testMatchesSelector;
testMatchesSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testMatchesSelector']};};

//MethodDef testEventDelegation at testDom.ceylon (35:0-55:0)
function testEventDelegation(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20440){
        
        //AttributeDecl ul at testDom.ceylon (37:8-37:46)
        var ul$20441=fragment$20440.addElement($$$cl20381.String("ul",2));
        
        //AttributeDecl li at testDom.ceylon (38:8-38:40)
        var li$20442=ul$20441.addElement($$$cl20381.String("li",2));
        
        //AttributeDecl div at testDom.ceylon (39:8-39:42)
        var div$20443=li$20442.addElement($$$cl20381.String("div",3));
        
        //AttributeDecl count at testDom.ceylon (40:8-40:34)
        var count$20444=(0);
        function setCount$20444(count$20445){return count$20444=count$20445;};
        
        //MethodDef f at testDom.ceylon (41:8-43:8)
        function f$20446(event$20447){
            (oldcount$20448=count$20444,count$20444=oldcount$20448.successor,oldcount$20448);
            var oldcount$20448;
        };f$20446.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:$$$icm20382.DomEvent$dom},$an:function(){return[];}}],d:['test.io.cayla.mvvm','testEventDelegation','$m','3','$m','f']};};
        li$20442.addEventHandler($$$cl20381.String("click",5),$$$cl20381.$JsCallable(f$20446,[{$nm:'event',$mt:'prm',$t:{t:$$$icm20382.DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomEvent$dom}]}}),$$$cl20381.String(".foo",4));
        ul$20441.click();
        $$$ct20388.assertEquals((0),count$20444);
        li$20442.click();
        $$$ct20388.assertEquals((0),count$20444);
        div$20443.click();
        $$$ct20388.assertEquals((0),count$20444);
        div$20443.addClass($$$cl20381.String("foo",3));
        div$20443.click();
        $$$ct20388.assertEquals((1),count$20444);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testEventDelegation=testEventDelegation;
testEventDelegation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testEventDelegation']};};

//MethodDef testInsertBefore at testDom.ceylon (57:0-81:0)
function testInsertBefore(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20449){
        
        //AttributeDecl div at testDom.ceylon (59:8-59:48)
        var div$20450=fragment$20449.addElement($$$cl20381.String("div",3));
        
        //AttributeDecl span at testDom.ceylon (60:8-60:45)
        var span$20451=div$20450.addElement($$$cl20381.String("span",4));
        
        //AttributeDecl h1 at testDom.ceylon (61:8-61:34)
        var h1$20452=$$$icm20382.element$dom($$$cl20381.String("h1",2));
        div$20450.insertBefore(h1$20452,span$20451);
        
        //AttributeDecl children at testDom.ceylon (63:8-63:54)
        var children$20453=div$20450.getChildren().sequence;
        function setChildren$20453(children$20454){return children$20453=children$20454;};
        $$$ct20388.assertEquals((2),children$20453.size);
        $$$ct20388.assertEquals(h1$20452,children$20453.$get((0)));
        $$$ct20388.assertEquals(span$20451,children$20453.$get((1)));
        
        //AttributeDecl h2 at testDom.ceylon (67:8-67:34)
        var h2$20455=$$$icm20382.element$dom($$$cl20381.String("h2",2));
        div$20450.insertBefore(h2$20455);
        children$20453=div$20450.getChildren().sequence;
        $$$ct20388.assertEquals((3),children$20453.size);
        $$$ct20388.assertEquals(h1$20452,children$20453.$get((0)));
        $$$ct20388.assertEquals(span$20451,children$20453.$get((1)));
        $$$ct20388.assertEquals(h2$20455,children$20453.$get((2)));
        div$20450.insertBefore(span$20451);
        children$20453=div$20450.getChildren().sequence;
        $$$ct20388.assertEquals((3),children$20453.size);
        $$$ct20388.assertEquals(h1$20452,children$20453.$get((0)));
        $$$ct20388.assertEquals(h2$20455,children$20453.$get((1)));
        $$$ct20388.assertEquals(span$20451,children$20453.$get((2)));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testInsertBefore=testInsertBefore;
testInsertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testInsertBefore']};};

//MethodDef testDiff1 at testDiff.ceylon (4:0-10:0)
function testDiff1(){
    
    //AttributeDecl a at testDiff.ceylon (5:4-5:16)
    var a$20456=$$$cl20381.String("",0);
    
    //AttributeDecl b at testDiff.ceylon (6:4-6:17)
    var b$20457=$$$cl20381.String("a",1);
    
    //AttributeDecl i at testDiff.ceylon (7:4-7:35)
    var i$20458=$$$icm20382.Diff$diff(a$20456,b$20457,{E:{t:$$$cl20381.Character}});
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(97),$$$cl20381.Tuple($$$icm20382.getAdded$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20458.next());
    $$$ct20388.assertEquals($$$cl20381.getFinished(),i$20458.next());
}
exports.testDiff1=testDiff1;
testDiff1.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testDiff1']};};

//MethodDef testDiff2 at testDiff.ceylon (12:0-18:0)
function testDiff2(){
    
    //AttributeDecl a at testDiff.ceylon (13:4-13:17)
    var a$20459=$$$cl20381.String("a",1);
    
    //AttributeDecl b at testDiff.ceylon (14:4-14:16)
    var b$20460=$$$cl20381.String("",0);
    
    //AttributeDecl i at testDiff.ceylon (15:4-15:35)
    var i$20461=$$$icm20382.Diff$diff(a$20459,b$20460,{E:{t:$$$cl20381.Character}});
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(97),$$$cl20381.Tuple($$$icm20382.getRemoved$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20461.next());
    $$$ct20388.assertEquals($$$cl20381.getFinished(),i$20461.next());
}
exports.testDiff2=testDiff2;
testDiff2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testDiff2']};};

//MethodDef testDiff3 at testDiff.ceylon (20:0-26:0)
function testDiff3(){
    
    //AttributeDecl a at testDiff.ceylon (21:4-21:17)
    var a$20462=$$$cl20381.String("a",1);
    
    //AttributeDecl b at testDiff.ceylon (22:4-22:17)
    var b$20463=$$$cl20381.String("a",1);
    
    //AttributeDecl i at testDiff.ceylon (23:4-23:35)
    var i$20464=$$$icm20382.Diff$diff(a$20462,b$20463,{E:{t:$$$cl20381.Character}});
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(97),$$$cl20381.Tuple($$$icm20382.getSame$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20464.next());
    $$$ct20388.assertEquals($$$cl20381.getFinished(),i$20464.next());
}
exports.testDiff3=testDiff3;
testDiff3.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testDiff3']};};

//MethodDef testDiff4 at testDiff.ceylon (28:0-35:0)
function testDiff4(){
    
    //AttributeDecl a at testDiff.ceylon (29:4-29:17)
    var a$20465=$$$cl20381.String("b",1);
    
    //AttributeDecl b at testDiff.ceylon (30:4-30:18)
    var b$20466=$$$cl20381.String("ab",2);
    
    //AttributeDecl i at testDiff.ceylon (31:4-31:35)
    var i$20467=$$$icm20382.Diff$diff(a$20465,b$20466,{E:{t:$$$cl20381.Character}});
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(97),$$$cl20381.Tuple($$$icm20382.getAdded$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20467.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(98),$$$cl20381.Tuple($$$icm20382.getSame$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20467.next());
    $$$ct20388.assertEquals($$$cl20381.getFinished(),i$20467.next());
}
exports.testDiff4=testDiff4;
testDiff4.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testDiff4']};};

//MethodDef testDiff5 at testDiff.ceylon (37:0-44:0)
function testDiff5(){
    
    //AttributeDecl a at testDiff.ceylon (38:4-38:18)
    var a$20468=$$$cl20381.String("ab",2);
    
    //AttributeDecl b at testDiff.ceylon (39:4-39:17)
    var b$20469=$$$cl20381.String("b",1);
    
    //AttributeDecl i at testDiff.ceylon (40:4-40:35)
    var i$20470=$$$icm20382.Diff$diff(a$20468,b$20469,{E:{t:$$$cl20381.Character}});
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(97),$$$cl20381.Tuple($$$icm20382.getRemoved$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20470.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(98),$$$cl20381.Tuple($$$icm20382.getSame$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20470.next());
    $$$ct20388.assertEquals($$$cl20381.getFinished(),i$20470.next());
}
exports.testDiff5=testDiff5;
testDiff5.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testDiff5']};};

//MethodDef testDiff6 at testDiff.ceylon (46:0-60:0)
function testDiff6(){
    
    //AttributeDecl a at testDiff.ceylon (47:4-47:22)
    var a$20471=$$$cl20381.String("abcdef",6);
    
    //AttributeDecl b at testDiff.ceylon (48:4-48:22)
    var b$20472=$$$cl20381.String("a_b_e_",6);
    
    //AttributeDecl i at testDiff.ceylon (49:4-49:35)
    var i$20473=$$$icm20382.Diff$diff(a$20471,b$20472,{E:{t:$$$cl20381.Character}});
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(97),$$$cl20381.Tuple($$$icm20382.getSame$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(95),$$$cl20381.Tuple($$$icm20382.getAdded$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(98),$$$cl20381.Tuple($$$icm20382.getSame$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(99),$$$cl20381.Tuple($$$icm20382.getRemoved$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(100),$$$cl20381.Tuple($$$icm20382.getRemoved$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(95),$$$cl20381.Tuple($$$icm20382.getAdded$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(101),$$$cl20381.Tuple($$$icm20382.getSame$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(102),$$$cl20381.Tuple($$$icm20382.getRemoved$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.Tuple($$$cl20381.Character(95),$$$cl20381.Tuple($$$icm20382.getAdded$diff(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$icm20382.Change$diff},First:{t:$$$icm20382.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm20382.Change$diff}]},Element:{t:'u', l:[{t:$$$cl20381.Character},{t:$$$icm20382.Change$diff}]},First:{t:$$$cl20381.Character}}),i$20473.next());
    $$$ct20388.assertEquals($$$cl20381.getFinished(),i$20473.next());
}
exports.testDiff6=testDiff6;
testDiff6.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testDiff6']};};

//ClassDef Person at testBindings.ceylon (17:0-18:0)
function Person(firstName, lastName, $$person){
    $init$Person();
    if ($$person===undefined)$$person=new Person.$$;
    $$person.firstName_=firstName;
    $$person.lastName_=lastName;
    return $$person;
}
Person.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'firstName',$mt:'prm',$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$an:function(){return[$$$cl20381.shared()];}},{$nm:'lastName',$mt:'prm',$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$an:function(){return[$$$cl20381.shared()];}}],d:['test.io.cayla.mvvm','Person']};};
function $init$Person(){
    if (Person.$$===undefined){
        $$$cl20381.initTypeProto(Person,'test.io.cayla.mvvm::Person',$$$cl20381.Basic);
        (function($$person){
            $$$cl20381.defineAttr($$person,'firstName',function(){return this.firstName_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$cont:Person,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','Person','$at','firstName']};});
            $$$cl20381.defineAttr($$person,'lastName',function(){return this.lastName_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$cont:Person,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','Person','$at','lastName']};});
        })(Person.$$.prototype);
    }
    return Person;
}
exports.$init$Person=$init$Person;
$init$Person();

//ClassDef Group at testBindings.ceylon (20:0-21:0)
function Group(users, $$group){
    $init$Group();
    if ($$group===undefined)$$group=new Group.$$;
    $$group.users_=users;
    return $$group;
}
Group.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'users',$mt:'prm',$t:{t:$$$icm20382.ObservableList,a:{Element:{t:Person}}},$an:function(){return[$$$cl20381.shared()];}}],d:['test.io.cayla.mvvm','Group']};};
function $init$Group(){
    if (Group.$$===undefined){
        $$$cl20381.initTypeProto(Group,'test.io.cayla.mvvm::Group',$$$cl20381.Basic);
        (function($$group){
            $$$cl20381.defineAttr($$group,'users',function(){return this.users_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.ObservableList,a:{Element:{t:Person}}},$cont:Group,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','Group','$at','users']};});
        })(Group.$$.prototype);
    }
    return Group;
}
exports.$init$Group=$init$Group;
$init$Group();

//ClassDef Car at testBindings.ceylon (23:0-24:0)
function Car(name, owner, $$car){
    $init$Car();
    if ($$car===undefined)$$car=new Car.$$;
    $$car.name_=name;
    $$car.owner_=owner;
    return $$car;
}
Car.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$an:function(){return[$$$cl20381.shared()];}},{$nm:'owner',$mt:'prm',$t:{t:$$$icm20382.Property,a:{Value:{t:Person}}},$an:function(){return[$$$cl20381.shared()];}}],d:['test.io.cayla.mvvm','Car']};};
function $init$Car(){
    if (Car.$$===undefined){
        $$$cl20381.initTypeProto(Car,'test.io.cayla.mvvm::Car',$$$cl20381.Basic);
        (function($$car){
            $$$cl20381.defineAttr($$car,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},$cont:Car,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','Car','$at','name']};});
            $$$cl20381.defineAttr($$car,'owner',function(){return this.owner_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:Person}}},$cont:Car,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','Car','$at','owner']};});
        })(Car.$$.prototype);
    }
    return Car;
}
exports.$init$Car=$init$Car;
$init$Car();

//AttributeDecl carNameExpr at testBindings.ceylon (26:0-26:100)
var carNameExpr$20474;function $valinit$carNameExpr$20474(){if (carNameExpr$20474===undefined)carNameExpr$20474=$$$icm20382.ClassExpression$expression({Type:{t:Car}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('name',Car.$$.prototype.$prop$getName,{Container:{t:Car},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}}});return carNameExpr$20474;};$valinit$carNameExpr$20474();
function getCarNameExpr(){return $valinit$carNameExpr$20474();}
var $prop$getCarNameExpr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.AttributeExpression$expression,a:{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},Source:{t:Car}}},d:['test.io.cayla.mvvm','carNameExpr']};}};
exports.$prop$getCarNameExpr=$prop$getCarNameExpr;
$prop$getCarNameExpr.get=function(){return carNameExpr$20474};

//AttributeDecl carNameBinding at testBindings.ceylon (27:0-27:56)
var carNameBinding$20475;function $valinit$carNameBinding$20475(){if (carNameBinding$20475===undefined)carNameBinding$20475=getCarNameExpr().bindTo($$$icm20382.getBinders$binding().val);return carNameBinding$20475;};$valinit$carNameBinding$20475();
function getCarNameBinding(){return $valinit$carNameBinding$20475();}
exports.getCarNameBinding=getCarNameBinding;
var $prop$getCarNameBinding={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Binding$binding},d:['test.io.cayla.mvvm','carNameBinding']};}};
exports.$prop$getCarNameBinding=$prop$getCarNameBinding;
$prop$getCarNameBinding.get=getCarNameBinding;
getCarNameBinding.$$metamodel$$=$prop$getCarNameBinding.$$metamodel$$;

//AttributeDecl carOwnerExpr at testBindings.ceylon (28:0-28:103)
var carOwnerExpr$20476;function $valinit$carOwnerExpr$20476(){if (carOwnerExpr$20476===undefined)carOwnerExpr$20476=$$$icm20382.ClassExpression$expression({Type:{t:Car}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('owner',Car.$$.prototype.$prop$getOwner,{Container:{t:Car},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:Person}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:Person}}}});return carOwnerExpr$20476;};$valinit$carOwnerExpr$20476();
function getCarOwnerExpr(){return $valinit$carOwnerExpr$20476();}
var $prop$getCarOwnerExpr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.AttributeExpression$expression,a:{Value:{t:$$$icm20382.Property,a:{Value:{t:Person}}},Source:{t:Car}}},d:['test.io.cayla.mvvm','carOwnerExpr']};}};
exports.$prop$getCarOwnerExpr=$prop$getCarOwnerExpr;
$prop$getCarOwnerExpr.get=function(){return carOwnerExpr$20476};

//AttributeDecl carOwnerBinding at testBindings.ceylon (29:0-29:69)
var carOwnerBinding$20477;function $valinit$carOwnerBinding$20477(){if (carOwnerBinding$20477===undefined)carOwnerBinding$20477=getCarOwnerExpr().bindTo($$$icm20382.getBinders$binding().$with({Value:{t:Person}}));return carOwnerBinding$20477;};$valinit$carOwnerBinding$20477();
function getCarOwnerBinding(){return $valinit$carOwnerBinding$20477();}
exports.getCarOwnerBinding=getCarOwnerBinding;
var $prop$getCarOwnerBinding={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Binding$binding},d:['test.io.cayla.mvvm','carOwnerBinding']};}};
exports.$prop$getCarOwnerBinding=$prop$getCarOwnerBinding;
$prop$getCarOwnerBinding.get=getCarOwnerBinding;
getCarOwnerBinding.$$metamodel$$=$prop$getCarOwnerBinding.$$metamodel$$;

//AttributeDecl firstNameExpr at testBindings.ceylon (30:0-30:116)
var firstNameExpr$20478;function $valinit$firstNameExpr$20478(){if (firstNameExpr$20478===undefined)firstNameExpr$20478=$$$icm20382.ClassExpression$expression({Type:{t:Person}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('firstName',Person.$$.prototype.$prop$getFirstName,{Container:{t:Person},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}}});return firstNameExpr$20478;};$valinit$firstNameExpr$20478();
function getFirstNameExpr(){return $valinit$firstNameExpr$20478();}
var $prop$getFirstNameExpr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.AttributeExpression$expression,a:{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},Source:{t:Person}}},d:['test.io.cayla.mvvm','firstNameExpr']};}};
exports.$prop$getFirstNameExpr=$prop$getFirstNameExpr;
$prop$getFirstNameExpr.get=function(){return firstNameExpr$20478};

//AttributeDecl firstNameBinding at testBindings.ceylon (31:0-31:60)
var firstNameBinding$20479;function $valinit$firstNameBinding$20479(){if (firstNameBinding$20479===undefined)firstNameBinding$20479=getFirstNameExpr().bindTo($$$icm20382.getBinders$binding().val);return firstNameBinding$20479;};$valinit$firstNameBinding$20479();
function getFirstNameBinding(){return $valinit$firstNameBinding$20479();}
exports.getFirstNameBinding=getFirstNameBinding;
var $prop$getFirstNameBinding={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Binding$binding},d:['test.io.cayla.mvvm','firstNameBinding']};}};
exports.$prop$getFirstNameBinding=$prop$getFirstNameBinding;
$prop$getFirstNameBinding.get=getFirstNameBinding;
getFirstNameBinding.$$metamodel$$=$prop$getFirstNameBinding.$$metamodel$$;

//AttributeDecl lastNameExpr at testBindings.ceylon (32:0-32:114)
var lastNameExpr$20480;function $valinit$lastNameExpr$20480(){if (lastNameExpr$20480===undefined)lastNameExpr$20480=$$$icm20382.ClassExpression$expression({Type:{t:Person}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('lastName',Person.$$.prototype.$prop$getLastName,{Container:{t:Person},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}}});return lastNameExpr$20480;};$valinit$lastNameExpr$20480();
function getLastNameExpr(){return $valinit$lastNameExpr$20480();}
var $prop$getLastNameExpr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.AttributeExpression$expression,a:{Value:{t:$$$icm20382.Property,a:{Value:{t:$$$cl20381.String}}},Source:{t:Person}}},d:['test.io.cayla.mvvm','lastNameExpr']};}};
exports.$prop$getLastNameExpr=$prop$getLastNameExpr;
$prop$getLastNameExpr.get=function(){return lastNameExpr$20480};

//AttributeDecl lastNameBinding at testBindings.ceylon (33:0-33:58)
var lastNameBinding$20481;function $valinit$lastNameBinding$20481(){if (lastNameBinding$20481===undefined)lastNameBinding$20481=getLastNameExpr().bindTo($$$icm20382.getBinders$binding().val);return lastNameBinding$20481;};$valinit$lastNameBinding$20481();
function getLastNameBinding(){return $valinit$lastNameBinding$20481();}
exports.getLastNameBinding=getLastNameBinding;
var $prop$getLastNameBinding={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Binding$binding},d:['test.io.cayla.mvvm','lastNameBinding']};}};
exports.$prop$getLastNameBinding=$prop$getLastNameBinding;
$prop$getLastNameBinding.get=getLastNameBinding;
getLastNameBinding.$$metamodel$$=$prop$getLastNameBinding.$$metamodel$$;

//MethodDef testStringPropertyBinding at testBindings.ceylon (35:0-48:0)
function testStringPropertyBinding(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20482){
        
        //AttributeDecl element at testBindings.ceylon (37:8-40:9)
        var element$20483=(name$20484=$$$cl20381.String("foo",3),bindings$20485=getFirstNameBinding(),$$$icm20382.InputText$view(name$20484,undefined,undefined,bindings$20485,undefined));
        var name$20484,bindings$20485;
        
        //AttributeDecl user at testBindings.ceylon (41:8-41:66)
        var user$20486=Person($$$icm20382.Property($$$cl20381.String("julien",6),{Value:{t:$$$cl20381.String}}),$$$icm20382.Property($$$cl20381.String("viet",4),{Value:{t:$$$cl20381.String}}));
        
        //AttributeDecl node at testBindings.ceylon (42:8-42:47)
        var node$20487=element$20483.$apply(user$20486).node;
        
        //AttributeDecl added at testBindings.ceylon (43:8-43:47)
        var added$20488=fragment$20482.addChild(node$20487);
        $$$ct20388.assertEquals($$$cl20381.String("julien",6),added$20488.getValue());
        user$20486.firstName.setValue($$$cl20381.String("whatever",8));
        $$$ct20388.assertEquals($$$cl20381.String("whatever",8),added$20488.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testStringPropertyBinding=testStringPropertyBinding;
testStringPropertyBinding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testStringPropertyBinding']};};

//MethodDef testWith at testBindings.ceylon (50:0-71:0)
function testWith(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20489){
        
        //AttributeDecl view at testBindings.ceylon (52:8-62:9)
        var view$20490=(bindings$20491=getCarOwnerBinding(),content$20492=[(bindings$20493=getFirstNameBinding(),name$20494=$$$cl20381.String("firstName",9),$$$icm20382.InputText$view(name$20494,undefined,undefined,bindings$20493,undefined)),(bindings$20495=getLastNameBinding(),name$20496=$$$cl20381.String("lastName",8),$$$icm20382.InputText$view(name$20496,undefined,undefined,bindings$20495,undefined))].reifyCeylonType({Element:{t:$$$icm20382.InputText$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Div$view(undefined,undefined,bindings$20491,content$20492));
        var bindings$20491,content$20492,bindings$20493,name$20494,bindings$20495,name$20496;
        
        //AttributeDecl julien at testBindings.ceylon (63:8-63:68)
        var julien$20497=Person($$$icm20382.Property($$$cl20381.String("julien",6),{Value:{t:$$$cl20381.String}}),$$$icm20382.Property($$$cl20381.String("viet",4),{Value:{t:$$$cl20381.String}}));
        
        //AttributeDecl clio at testBindings.ceylon (64:8-64:58)
        var clio$20498=Car($$$icm20382.Property($$$cl20381.String("clio",4),{Value:{t:$$$cl20381.String}}),$$$icm20382.Property(julien$20497,{Value:{t:Person}}));
        
        //AttributeDecl dom at testBindings.ceylon (65:8-65:43)
        var dom$20499=view$20490.$apply(clio$20498).node;
        //assert at testBindings.ceylon (66:8-66:62)
        var firstNameNode$20500;
        if (!((firstNameNode$20500=dom$20499.getChildren().first)!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists firstNameNode = dom.getChildren().first\' at testBindings.ceylon (66:14-66:61)"),'66:8-66:62','testBindings.ceylon'); }
        //assert at testBindings.ceylon (67:8-67:66)
        var lastNameNode$20501;
        if (!((lastNameNode$20501=dom$20499.getChildren().rest.first)!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists lastNameNode = dom.getChildren().rest.first\' at testBindings.ceylon (67:14-67:65)"),'67:8-67:66','testBindings.ceylon'); }
        $$$ct20388.assertEquals($$$cl20381.String("julien",6),firstNameNode$20500.getValue());
        $$$ct20388.assertEquals($$$cl20381.String("viet",4),lastNameNode$20501.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testWith=testWith;
testWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testWith']};};

//MethodDef testForEach at testBindings.ceylon (73:0-107:0)
function testForEach(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20502){
        
        //AttributeDecl a at testBindings.ceylon (76:8-76:111)
        var a$20503=$$$icm20382.ClassExpression$expression({Type:{t:Group}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('users',Group.$$.prototype.$prop$getUsers,{Container:{t:Group},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.ObservableList,a:{Element:{t:Person}}}}),{Value:{t:$$$icm20382.ObservableList,a:{Element:{t:Person}}}});
        
        //AttributeDecl b at testBindings.ceylon (77:8-77:53)
        var b$20504=a$20503.bindTo($$$icm20382.getBinders$binding().foreach({Value:{t:Person}}));
        
        //AttributeDecl users at testBindings.ceylon (78:8-78:63)
        var users$20505=$$$icm20382.ObservableList(undefined,{Element:{t:Person}});
        
        //AttributeDecl foo at testBindings.ceylon (79:8-79:58)
        var foo$20506=Person($$$icm20382.Property($$$cl20381.String("foo",3),{Value:{t:$$$cl20381.String}}),$$$icm20382.Property($$$cl20381.String("",0),{Value:{t:$$$cl20381.String}}));
        users$20505.add(foo$20506);
        
        //AttributeDecl bar at testBindings.ceylon (81:8-81:58)
        var bar$20507=Person($$$icm20382.Property($$$cl20381.String("bar",3),{Value:{t:$$$cl20381.String}}),$$$icm20382.Property($$$cl20381.String("",0),{Value:{t:$$$cl20381.String}}));
        users$20505.add(bar$20507);
        
        //AttributeDecl group at testBindings.ceylon (83:8-83:34)
        var group$20508=Group(users$20505);
        
        //AttributeDecl element at testBindings.ceylon (84:8-89:9)
        var element$20509=(bindings$20510=b$20504,content$20511=[(content$20512=[(name$20513=$$$cl20381.String("foo",3),bindings$20514=getFirstNameBinding(),$$$icm20382.InputText$view(name$20513,undefined,undefined,bindings$20514,undefined))].reifyCeylonType({Element:{t:$$$icm20382.InputText$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Li$view(undefined,undefined,undefined,content$20512))].reifyCeylonType({Element:{t:$$$icm20382.Li$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Ul$view(undefined,undefined,bindings$20510,content$20511));
        var bindings$20510,content$20511,content$20512,name$20513,bindings$20514;
        
        //AttributeDecl node at testBindings.ceylon (90:8-90:48)
        var node$20515=element$20509.$apply(group$20508).node;
        
        //AttributeDecl added at testBindings.ceylon (91:8-91:47)
        var added$20516=fragment$20502.addChild(node$20515);
        //assert at testBindings.ceylon (92:8-92:56)
        var fooLi$20517;
        if (!((fooLi$20517=added$20516.getChildren().first)!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists fooLi = added.getChildren().first\' at testBindings.ceylon (92:14-92:55)"),'92:8-92:56','testBindings.ceylon'); }
        $$$ct20388.assertEquals((1),fooLi$20517.getChildren().size);
        //assert at testBindings.ceylon (94:8-94:59)
        var fooInput$20518;
        if (!((fooInput$20518=fooLi$20517.getChildren().first)!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists fooInput = fooLi.getChildren().first\' at testBindings.ceylon (94:14-94:58)"),'94:8-94:59','testBindings.ceylon'); }
        fooInput$20518.setValue($$$cl20381.String("foo_changed",11));
        fooInput$20518.dispatchEvent($$$cl20381.String("keyup",5));
        $$$ct20388.assertEquals($$$cl20381.String("foo_changed",11),foo$20506.firstName.getValue());
        
        //AttributeDecl juu at testBindings.ceylon (98:8-98:58)
        var juu$20519=Person($$$icm20382.Property($$$cl20381.String("juu",3),{Value:{t:$$$cl20381.String}}),$$$icm20382.Property($$$cl20381.String("",0),{Value:{t:$$$cl20381.String}}));
        users$20505.add(juu$20519);
        $$$ct20388.assertEquals((3),added$20516.getChildren().size);
        users$20505.removeElement(bar$20507);
        $$$ct20388.assertEquals((2),added$20516.getChildren().size);
        users$20505.clear();
        $$$ct20388.assertEquals((0),added$20516.getChildren().size);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testForEach=testForEach;
testForEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testForEach']};};

//MethodDef testResolvePropertyInHierachy at testBindings.ceylon (109:0-124:0)
function testResolvePropertyInHierachy(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20520){
        
        //AttributeDecl view at testBindings.ceylon (111:8-117:9)
        var view$20521=(bindings$20522=getCarOwnerBinding(),content$20523=[(bindings$20524=getCarNameBinding(),name$20525=$$$cl20381.String("carName",7),$$$icm20382.InputText$view(name$20525,undefined,undefined,bindings$20524,undefined))].reifyCeylonType({Element:{t:$$$icm20382.InputText$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Div$view(undefined,undefined,bindings$20522,content$20523));
        var bindings$20522,content$20523,bindings$20524,name$20525;
        
        //AttributeDecl julien at testBindings.ceylon (118:8-118:68)
        var julien$20526=Person($$$icm20382.Property($$$cl20381.String("julien",6),{Value:{t:$$$cl20381.String}}),$$$icm20382.Property($$$cl20381.String("viet",4),{Value:{t:$$$cl20381.String}}));
        
        //AttributeDecl clio at testBindings.ceylon (119:8-119:58)
        var clio$20527=Car($$$icm20382.Property($$$cl20381.String("clio",4),{Value:{t:$$$cl20381.String}}),$$$icm20382.Property(julien$20526,{Value:{t:Person}}));
        
        //AttributeDecl dom at testBindings.ceylon (120:8-120:43)
        var dom$20528=view$20521.$apply(clio$20527).node;
        //assert at testBindings.ceylon (121:8-121:62)
        var firstNameNode$20529;
        if (!((firstNameNode$20529=dom$20528.getChildren().first)!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists firstNameNode = dom.getChildren().first\' at testBindings.ceylon (121:14-121:61)"),'121:8-121:62','testBindings.ceylon'); }
        $$$ct20388.assertEquals($$$cl20381.String("clio",4),firstNameNode$20529.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testResolvePropertyInHierachy=testResolvePropertyInHierachy;
testResolvePropertyInHierachy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testResolvePropertyInHierachy']};};

//MethodDef testResolveHandlerInHierachy at testBindings.ceylon (126:0-149:0)
function testResolveHandlerInHierachy(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20530){
        
        //ClassDef Parent at testBindings.ceylon (128:8-132:8)
        function Parent$20531(child, count, $$parent$20531){
            $init$Parent$20531();
            if ($$parent$20531===undefined)$$parent$20531=new Parent$20531.$$;
            $$parent$20531.child_=child;
            if(count===undefined){count=(0);}
            $$parent$20531.count_=count;
            return $$parent$20531;
        }
        Parent$20531.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$icm20382.Property,a:{Value:{t:Child$20532}}},$an:function(){return[$$$cl20381.shared()];}},{$nm:'count',$mt:'prm',$def:1,$t:{t:$$$cl20381.Integer},$an:function(){return[$$$cl20381.shared(),$$$cl20381.variable()];}}],d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Parent']};};
        function $init$Parent$20531(){
            if (Parent$20531.$$===undefined){
                $$$cl20381.initTypeProto(Parent$20531,'test.io.cayla.mvvm::testResolveHandlerInHierachy.4.Parent',$$$cl20381.Basic);
                (function($$parent$20531){
                    
                    //MethodDef foo at testBindings.ceylon (129:12-131:12)
                    $$parent$20531.foo=function foo(){
                        var $$parent$20531=this;
                        (oldcount$20533=$$parent$20531.count,$$parent$20531.count=oldcount$20533.successor,oldcount$20533);
                        var oldcount$20533;
                    };$$parent$20531.foo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$cont:Parent$20531,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Parent','$m','foo']};};
                    $$$cl20381.defineAttr($$parent$20531,'child',function(){return this.child_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:Child$20532}}},$cont:Parent$20531,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Parent','$at','child']};});
                    $$$cl20381.defineAttr($$parent$20531,'count',function(){return this.count_;},function(Parent$20534){return this.count_=Parent$20534;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Parent$20531,$an:function(){return[$$$cl20381.shared(),$$$cl20381.variable()];},d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Parent','$at','count']};});
                })(Parent$20531.$$.prototype);
            }
            return Parent$20531;
        }
        $init$Parent$20531();
        
        //ClassDef Child at testBindings.ceylon (133:8-134:8)
        function Child$20532($$child$20532){
            $init$Child$20532();
            if ($$child$20532===undefined)$$child$20532=new Child$20532.$$;
            return $$child$20532;
        }
        Child$20532.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Child']};};
        function $init$Child$20532(){
            if (Child$20532.$$===undefined){
                $$$cl20381.initTypeProto(Child$20532,'test.io.cayla.mvvm::testResolveHandlerInHierachy.4.Child',$$$cl20381.Basic);
            }
            return Child$20532;
        }
        $init$Child$20532();
        
        //AttributeDecl view at testBindings.ceylon (135:8-140:9)
        var view$20535=(bindings$20536=$$$icm20382.ClassExpression$expression({Type:{t:Parent$20531}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('child',Parent$20531.$$.prototype.$prop$getChild,{Container:{t:Parent$20531},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:Child$20532}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:Child$20532}}}}).bindTo($$$icm20382.getBinders$binding().$with({Value:{t:Child$20532}})),content$20537=[(bindings$20538=$$$icm20382.ClassExpression$expression({Type:{t:Parent$20531}}).method($$$cl20381.AppliedMethod$meta$model(Parent$20531.$$.prototype.foo,undefined,{Container:{t:Parent$20531},Type:{t:$$$cl20381.Anything},Arguments:{t:$$$cl20381.Empty}}),{Arguments:{t:$$$cl20381.Empty}}).bindTo($$$icm20382.getBinders$binding().click({Source:{t:$$$cl20381.Nothing}})),$$$icm20382.Button$view(undefined,undefined,undefined,bindings$20538,undefined))].reifyCeylonType({Element:{t:$$$icm20382.Button$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Div$view(undefined,undefined,bindings$20536,content$20537));
        var bindings$20536,content$20537,bindings$20538;
        
        //AttributeDecl child at testBindings.ceylon (141:8-141:29)
        var child$20539=Child$20532();
        
        //AttributeDecl parent at testBindings.ceylon (142:8-142:47)
        var parent$20540=Parent$20531($$$icm20382.Property(child$20539,{Value:{t:Child$20532}}));
        
        //AttributeDecl dom at testBindings.ceylon (143:8-143:45)
        var dom$20541=view$20535.$apply(parent$20540).node;
        //assert at testBindings.ceylon (144:8-144:58)
        var clickNode$20542;
        if (!((clickNode$20542=dom$20541.getChildren().first)!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists clickNode = dom.getChildren().first\' at testBindings.ceylon (144:14-144:57)"),'144:8-144:58','testBindings.ceylon'); }
        $$$ct20388.assertEquals((0),parent$20540.count);
        clickNode$20542.click();
        $$$ct20388.assertEquals((1),parent$20540.count);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testResolveHandlerInHierachy=testResolveHandlerInHierachy;
testResolveHandlerInHierachy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testResolveHandlerInHierachy']};};

//MethodDef testResolveListenerInHierachy at testBindings.ceylon (151:0-176:0)
function testResolveListenerInHierachy(){
    withFragment($$$cl20381.$JsCallable((function (fragment$20543){
        
        //ClassDef Parent at testBindings.ceylon (153:8-159:8)
        function Parent$20544(child, count, $$parent$20544){
            $init$Parent$20544();
            if ($$parent$20544===undefined)$$parent$20544=new Parent$20544.$$;
            $$parent$20544.child_=child;
            if(count===undefined){count=(0);}
            $$parent$20544.count_=count;
            return $$parent$20544;
        }
        Parent$20544.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$icm20382.Property,a:{Value:{t:Child$20545}}},$an:function(){return[$$$cl20381.shared()];}},{$nm:'count',$mt:'prm',$def:1,$t:{t:$$$cl20381.Integer},$an:function(){return[$$$cl20381.shared(),$$$cl20381.variable()];}}],d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Parent']};};
        function $init$Parent$20544(){
            if (Parent$20544.$$===undefined){
                $$$cl20381.initTypeProto(Parent$20544,'test.io.cayla.mvvm::testResolveListenerInHierachy.5.Parent',$$$cl20381.Basic);
                (function($$parent$20544){
                    
                    //MethodDef foo at testBindings.ceylon (154:12-158:12)
                    $$parent$20544.foo=function foo(c$20546){
                        var $$parent$20544=this;
                        if(c$20546.equals($$parent$20544.child.getValue())){
                            (oldcount$20547=$$parent$20544.count,$$parent$20544.count=oldcount$20547.successor,oldcount$20547);
                            var oldcount$20547;
                        }
                    };$$parent$20544.foo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:Child$20545},$an:function(){return[];}}],$cont:Parent$20544,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Parent','$m','foo']};};
                    $$$cl20381.defineAttr($$parent$20544,'child',function(){return this.child_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm20382.Property,a:{Value:{t:Child$20545}}},$cont:Parent$20544,$an:function(){return[$$$cl20381.shared()];},d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Parent','$at','child']};});
                    $$$cl20381.defineAttr($$parent$20544,'count',function(){return this.count_;},function(Parent$20548){return this.count_=Parent$20548;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Integer},$cont:Parent$20544,$an:function(){return[$$$cl20381.shared(),$$$cl20381.variable()];},d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Parent','$at','count']};});
                })(Parent$20544.$$.prototype);
            }
            return Parent$20544;
        }
        $init$Parent$20544();
        
        //ClassDef Child at testBindings.ceylon (160:8-161:8)
        function Child$20545($$child$20545){
            $init$Child$20545();
            if ($$child$20545===undefined)$$child$20545=new Child$20545.$$;
            return $$child$20545;
        }
        Child$20545.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl20381.Basic},$ps:[],d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Child']};};
        function $init$Child$20545(){
            if (Child$20545.$$===undefined){
                $$$cl20381.initTypeProto(Child$20545,'test.io.cayla.mvvm::testResolveListenerInHierachy.5.Child',$$$cl20381.Basic);
            }
            return Child$20545;
        }
        $init$Child$20545();
        
        //AttributeDecl view at testBindings.ceylon (162:8-167:9)
        var view$20549=(bindings$20550=$$$icm20382.ClassExpression$expression({Type:{t:Parent$20544}}).attribute($$$cl20381.$init$AppliedAttribute$meta$model()('child',Parent$20544.$$.prototype.$prop$getChild,{Container:{t:Parent$20544},Set:{t:$$$cl20381.Nothing},Get:{t:$$$icm20382.Property,a:{Value:{t:Child$20545}}}}),{Value:{t:$$$icm20382.Property,a:{Value:{t:Child$20545}}}}).bindTo($$$icm20382.getBinders$binding().$with({Value:{t:Child$20545}})),content$20551=[(bindings$20552=$$$icm20382.ClassExpression$expression({Type:{t:Parent$20544}}).method($$$cl20381.AppliedMethod$meta$model(Parent$20544.$$.prototype.foo,undefined,{Container:{t:Parent$20544},Type:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:Child$20545}]}}),{Arguments:{t:'T', l:[{t:Child$20545}]}}).bindTo($$$icm20382.getBinders$binding().click({Source:{t:Child$20545}})),$$$icm20382.Button$view(undefined,undefined,undefined,bindings$20552,undefined))].reifyCeylonType({Element:{t:$$$icm20382.Button$view},Absent:{t:$$$cl20381.Null}}),$$$icm20382.Div$view(undefined,undefined,bindings$20550,content$20551));
        var bindings$20550,content$20551,bindings$20552;
        
        //AttributeDecl child at testBindings.ceylon (168:8-168:29)
        var child$20553=Child$20545();
        
        //AttributeDecl parent at testBindings.ceylon (169:8-169:47)
        var parent$20554=Parent$20544($$$icm20382.Property(child$20553,{Value:{t:Child$20545}}));
        
        //AttributeDecl dom at testBindings.ceylon (170:8-170:45)
        var dom$20555=view$20549.$apply(parent$20554).node;
        //assert at testBindings.ceylon (171:8-171:58)
        var clickNode$20556;
        if (!((clickNode$20556=dom$20555.getChildren().first)!==null)) {throw $$$cl20381.wrapexc($$$cl20381.AssertionException("Assertion failed: \'exists clickNode = dom.getChildren().first\' at testBindings.ceylon (171:14-171:57)"),'171:8-171:58','testBindings.ceylon'); }
        $$$ct20388.assertEquals((0),parent$20554.count);
        clickNode$20556.click();
        $$$ct20388.assertEquals((1),parent$20554.count);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm20382.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl20381.Anything},Arguments:{t:'T', l:[{t:$$$icm20382.DomNode$dom}]}}));
}
exports.testResolveListenerInHierachy=testResolveListenerInHierachy;
testResolveListenerInHierachy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.shared(),$$$ct20388.test()];},d:['test.io.cayla.mvvm','testResolveListenerInHierachy']};};

//MethodDef run at run.ceylon (3:0-7:0)
function run(){
    
    //AttributeDecl runner at run.ceylon (5:4-5:94)
    var runner$20557=$$$ct20388.createTestRunner($$$cl20381.Tuple($$$cl20381.getModules$meta().find('test.io.cayla.mvvm','0.1.0').findPackage('test.io.cayla.mvvm'),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$cl20381.Package$meta$declaration},First:{t:$$$cl20381.Package$meta$declaration}}),$$$cl20381.Tuple($$$ct20388.SimpleLoggingListener(),$$$cl20381.getEmpty(),{Rest:{t:$$$cl20381.Empty},Element:{t:$$$ct20388.SimpleLoggingListener},First:{t:$$$ct20388.SimpleLoggingListener}}));
    runner$20557.run();
}
exports.run=run;
run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl20381.Anything},$ps:[],$an:function(){return[$$$cl20381.doc($$$cl20381.String("Run the module `test.io.cayla.mvvm`.",36)),$$$cl20381.shared()];},d:['test.io.cayla.mvvm','run']};};
exports.$pkg$ans$test$io$cayla$mvvm=function(){return[$$$cl20381.shared()];};
exports.$mod$ans$=[];
exports.$mod$imps=function(){return{
'io.cayla.mvvm/0.1.0':function(){return[$$$cl20381.shared()];},
'ceylon.test/1.0.0':[]
};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

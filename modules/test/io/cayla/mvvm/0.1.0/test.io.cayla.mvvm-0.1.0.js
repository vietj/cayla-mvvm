(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-version":"0.1.0","$mod-deps":["io.cayla.mvvm\/0.1.0","ceylon.test\/1.0.0","ceylon.language\/1.0.0"],"test.io.cayla.mvvm":{"testResolveListenerInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolveListenerInHierachy","$mt":"mthd","$c":{"Parent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Parent","$ps":[{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"child","$mt":"prm"},{"$def":"1","$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","$mt":"prm"}],"$at":{"count":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","var":"1","$mt":"attr"},"child":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"child","$mt":"attr"}},"$m":{"foo":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"foo","$ps":[[{"$t":{"$nm":"Child","$pk":"test.io.cayla.mvvm"},"$nm":"c","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"cls"},"Child":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Child","$mt":"cls"}}},"Group":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Group","$ps":[{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"ObservableList","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"users","$mt":"prm"}],"$at":{"users":{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"ObservableList","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"users","$mt":"attr"}},"$mt":"cls"},"carNameBinding":{"$t":{"$nm":"Binding","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.view"},"$nm":"carNameBinding","$mt":"attr"},"firstNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"AttributeExpression","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.expression"},"$nm":"firstNameExpr","$mt":"attr"},"withFragment":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"withFragment","$ps":[[{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"callback","$ps":[[{"$t":{"$nm":"DomNode","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.dom"},"$nm":"fragment","$mt":"prm"}]],"$pt":"f","$mt":"prm"}]],"$m":{"callback":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"callback","$ps":[[{"$t":{"$nm":"DomNode","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.dom"},"$nm":"fragment","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testMatchesSelector":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testMatchesSelector","$mt":"mthd"},"testInsertBefore":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testInsertBefore","$mt":"mthd"},"Meal":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"Meal","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"price","$mt":"prm"}],"$at":{"price":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"price","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"run":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"doc":["Run the module `test.io.cayla.mvvm`."]},"$nm":"run","$mt":"mthd"},"ViewModel":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ViewModel","$ps":[{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"prm"}],"$at":{"seats":{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"attr"}},"$mt":"cls"},"testPropertyChange":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testPropertyChange","$m":{"listener":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"listener","$ps":[[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"prop","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testQuerySelectorAllWrap":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testQuerySelectorAllWrap","$mt":"mthd"},"carNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},{"$nm":"Car","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"AttributeExpression","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.expression"},"$nm":"carNameExpr","$mt":"attr"},"carOwnerExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$mt":"tpm","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},{"$nm":"Car","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"AttributeExpression","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.expression"},"$nm":"carOwnerExpr","$mt":"attr"},"testObserveComputedObservable":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testObserveComputedObservable","$mt":"mthd"},"testComputedObservableList":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableList","$mt":"mthd"},"ReservationsViewModel":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"ReservationsViewModel","$ps":[{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"prm"}],"$at":{"seats":{"$t":{"$tp":[{"$nm":"SeatReservation","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"List","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"seats","$mt":"attr"}},"$mt":"cls"},"firstNameBinding":{"$t":{"$nm":"Binding","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.view"},"$nm":"firstNameBinding","$mt":"attr"},"AnHandler":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"AnHandler","$at":{"counter":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"counter","var":"1","$mt":"attr"}},"$m":{"m":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"m","$mt":"mthd"}},"$mt":"cls"},"testComputedObservable":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservable","$mt":"mthd"},"testWith":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testWith","$mt":"mthd"},"testForEach":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testForEach","$mt":"mthd"},"testStringPropertyBinding":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testStringPropertyBinding","$mt":"mthd"},"SeatReservation":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"SeatReservation","$ps":[{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$nm":"Meal","$pk":"test.io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"initialMeal","$mt":"prm"}],"$at":{"initialMeal":{"$t":{"$nm":"Meal","$pk":"test.io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"initialMeal","$mt":"attr"},"name":{"$t":{"$nm":"String","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"testResolvePropertyInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolvePropertyInHierachy","$mt":"mthd"},"testQuerySelectorAll":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testQuerySelectorAll","$mt":"mthd"},"testExpression":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testExpression","$mt":"mthd"},"testEventDelegation":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testEventDelegation","$m":{"f":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"f","$ps":[[{"$t":{"$nm":"DomEvent","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.dom"},"$nm":"event","$mt":"prm"}]],"$mt":"mthd"}},"$mt":"mthd"},"testComputedObservableTriangle":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableTriangle","$mt":"mthd"},"testComputedObservableCycle":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testComputedObservableCycle","$mt":"mthd"},"testResolveHandlerInHierachy":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testResolveHandlerInHierachy","$mt":"mthd","$c":{"Parent":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Parent","$ps":[{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"child","$mt":"prm"},{"$def":"1","$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","$mt":"prm"}],"$at":{"count":{"$t":{"$nm":"Integer","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"variable":[]},"$nm":"count","var":"1","$mt":"attr"},"child":{"$t":{"$tp":[{"$nm":"Child","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"child","$mt":"attr"}},"$m":{"foo":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[]},"$nm":"foo","$mt":"mthd"}},"$mt":"cls"},"Child":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Child","$mt":"cls"}}},"$pkg-shared":"1","carOwnerBinding":{"$t":{"$nm":"Binding","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.view"},"$nm":"carOwnerBinding","$mt":"attr"},"lastNameBinding":{"$t":{"$nm":"Binding","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.view"},"$nm":"lastNameBinding","$mt":"attr"},"lastNameExpr":{"$t":{"$tp":[{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$mt":"tpm","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"AttributeExpression","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm.expression"},"$nm":"lastNameExpr","$mt":"attr"},"Car":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Car","$ps":[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"name","$mt":"prm"},{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"owner","$mt":"prm"}],"$at":{"owner":{"$t":{"$tp":[{"$nm":"Person","$mt":"tpm","$pk":"test.io.cayla.mvvm"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"owner","$mt":"attr"},"name":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"name","$mt":"attr"}},"$mt":"cls"},"testDiff6":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff6","$mt":"mthd"},"testDiff5":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff5","$mt":"mthd"},"testDiff4":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff4","$mt":"mthd"},"testDiff3":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff3","$mt":"mthd"},"testDiff2":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff2","$mt":"mthd"},"testDiff1":{"$t":{"$nm":"Anything","$md":"ceylon.language","$pk":"ceylon.language"},"$an":{"shared":[],"test":[]},"$nm":"testDiff1","$mt":"mthd"},"Person":{"super":{"$nm":"Basic","$md":"ceylon.language","$pk":"ceylon.language"},"$nm":"Person","$ps":[{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"firstName","$mt":"prm"},{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"lastName","$mt":"prm"}],"$at":{"firstName":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"firstName","$mt":"attr"},"lastName":{"$t":{"$tp":[{"$nm":"String","$mt":"tpm","$md":"ceylon.language","$pk":"ceylon.language"}],"$nm":"Property","$md":"io.cayla.mvvm","$pk":"io.cayla.mvvm"},"$an":{"shared":[]},"$nm":"lastName","$mt":"attr"}},"$mt":"cls"}},"$mod-bin":"6.0","$mod-name":"test.io.cayla.mvvm"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl734=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl734.$addmod$($$$cl734,'ceylon.language/1.0.0');
var $$$icm735=require('io/cayla/mvvm/0.1.0/io.cayla.mvvm-0.1.0');
$$$cl734.$addmod$($$$icm735,'io.cayla.mvvm/0.1.0');

//MethodDef withFragment at withFragment.ceylon (2:0-16:0)
function withFragment(callback$736){
    
    //AttributeDecl bodyNode at withFragment.ceylon (3:4-3:20)
    var bodyNode$737;
    /*Begin dynamic block*/
    
    //AttributeDecl bodies at withFragment.ceylon (5:8-5:62)
    var bodies$738=(typeof document==='undefined'||document===null?$$$cl734.throwexc($$$cl734.Exception($$$cl734.String("Undefined or null reference: document")),'5:25-5:32','withFragment.ceylon'):document).getElementsByTagName($$$cl734.String("body",4).valueOf());
    
    //AttributeDecl body at withFragment.ceylon (6:8-6:32)
    var body$739=bodies$738[(0)];
    bodyNode$737=$$$icm735.DomNode$dom(body$739);/*End dynamic block*/
    
    //AttributeDecl fragmentNode at withFragment.ceylon (9:4-9:53)
    var fragmentNode$740=bodyNode$737.addElement($$$cl734.String("div",3));
    try{
        callback$736(fragmentNode$740);
    }finally{
        fragmentNode$740.detach();
    }
}
exports.withFragment=withFragment;
withFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl734.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','withFragment']};};
var $$$ct741=require('ceylon/test/1.0.0/ceylon.test-1.0.0');
$$$cl734.$addmod$($$$ct741,'ceylon.test/1.0.0');

//ClassDef Meal at tests.ceylon (7:0-8:0)
function Meal(name, price, $$meal){
    $init$Meal();
    if ($$meal===undefined)$$meal=new Meal.$$;
    $$meal.name_=name;
    $$meal.price_=price;
    return $$meal;
}
Meal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[$$$cl734.shared()];}},{$nm:'price',$mt:'prm',$t:{t:$$$cl734.Integer},$an:function(){return[$$$cl734.shared()];}}],$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','Meal']};};
exports.Meal=Meal;
function $init$Meal(){
    if (Meal.$$===undefined){
        $$$cl734.initTypeProto(Meal,'test.io.cayla.mvvm::Meal',$$$cl734.Basic);
        (function($$meal){
            $$$cl734.defineAttr($$meal,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.String},$cont:Meal,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','Meal','$at','name']};});
            $$$cl734.defineAttr($$meal,'price',function(){return this.price_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Meal,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','Meal','$at','price']};});
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
SeatReservation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[$$$cl734.shared()];}},{$nm:'initialMeal',$mt:'prm',$t:{t:Meal},$an:function(){return[$$$cl734.shared()];}}],$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','SeatReservation']};};
exports.SeatReservation=SeatReservation;
function $init$SeatReservation(){
    if (SeatReservation.$$===undefined){
        $$$cl734.initTypeProto(SeatReservation,'test.io.cayla.mvvm::SeatReservation',$$$cl734.Basic);
        (function($$seatReservation){
            $$$cl734.defineAttr($$seatReservation,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.String},$cont:SeatReservation,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','SeatReservation','$at','name']};});
            $$$cl734.defineAttr($$seatReservation,'initialMeal',function(){return this.initialMeal_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Meal},$cont:SeatReservation,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','SeatReservation','$at','initialMeal']};});
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
ReservationsViewModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'seats',$mt:'prm',$t:{t:$$$cl734.List,a:{Element:{t:SeatReservation}}},$an:function(){return[$$$cl734.shared()];}}],$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','ReservationsViewModel']};};
exports.ReservationsViewModel=ReservationsViewModel;
function $init$ReservationsViewModel(){
    if (ReservationsViewModel.$$===undefined){
        $$$cl734.initTypeProto(ReservationsViewModel,'test.io.cayla.mvvm::ReservationsViewModel',$$$cl734.Basic);
        (function($$reservationsViewModel){
            $$$cl734.defineAttr($$reservationsViewModel,'seats',function(){return this.seats_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:{t:SeatReservation}}},$cont:ReservationsViewModel,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','ReservationsViewModel','$at','seats']};});
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
ViewModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'seats',$mt:'prm',$t:{t:$$$cl734.List,a:{Element:{t:SeatReservation}}},$an:function(){return[$$$cl734.shared()];}}],$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','ViewModel']};};
exports.ViewModel=ViewModel;
function $init$ViewModel(){
    if (ViewModel.$$===undefined){
        $$$cl734.initTypeProto(ViewModel,'test.io.cayla.mvvm::ViewModel',$$$cl734.Basic);
        (function($$viewModel){
            $$$cl734.defineAttr($$viewModel,'seats',function(){return this.seats_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.List,a:{Element:{t:SeatReservation}}},$cont:ViewModel,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','ViewModel','$at','seats']};});
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
    $$anHandler.counter$742_=(0);
    $$anHandler.$prop$getCounter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:AnHandler,$an:function(){return[$$$cl734.shared(),$$$cl734.variable()];},d:['test.io.cayla.mvvm','AnHandler','$at','counter']};}};
    $$anHandler.$prop$getCounter.get=function(){return counter};
    return $$anHandler;
}
AnHandler.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','AnHandler']};};
exports.AnHandler=AnHandler;
function $init$AnHandler(){
    if (AnHandler.$$===undefined){
        $$$cl734.initTypeProto(AnHandler,'test.io.cayla.mvvm::AnHandler',$$$cl734.Basic);
        (function($$anHandler){
            
            //AttributeDecl counter at tests.ceylon (20:4-20:39)
            $$$cl734.defineAttr($$anHandler,'counter',function(){return this.counter$742_;},function(counter$743){return this.counter$742_=counter$743;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:AnHandler,$an:function(){return[$$$cl734.shared(),$$$cl734.variable()];},d:['test.io.cayla.mvvm','AnHandler','$at','counter']};});
            
            //MethodDef m at tests.ceylon (21:4-23:4)
            $$anHandler.m=function m(){
                var $$anHandler=this;
                (oldcounter$744=$$anHandler.counter,$$anHandler.counter=oldcounter$744.successor,oldcounter$744);
                var oldcounter$744;
            };$$anHandler.m.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:AnHandler,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','AnHandler','$m','m']};};
        })(AnHandler.$$.prototype);
    }
    return AnHandler;
}
exports.$init$AnHandler=$init$AnHandler;
$init$AnHandler();

//MethodDef testExpression at tests.ceylon (26:0-38:0)
function testExpression(){
    
    //AttributeDecl reservation at tests.ceylon (27:4-27:78)
    var reservation$745=SeatReservation($$$cl734.String("julien",6),Meal($$$cl734.String("pasta",5),(10)));
    
    //AttributeDecl vm at tests.ceylon (28:4-28:70)
    var vm$746=ViewModel($$$cl734.LazyList([reservation$745].reifyCeylonType({Element:{t:SeatReservation},Absent:{t:$$$cl734.Nothing}}),{Element:{t:SeatReservation}}));
    
    //AttributeDecl e1 at tests.ceylon (29:4-29:114)
    var e1$747=$$$icm735.ClassExpression$expression({Type:{t:SeatReservation}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('initialMeal',SeatReservation.$$.prototype.$prop$getInitialMeal,{Container:{t:SeatReservation},Set:{t:$$$cl734.Nothing},Get:{t:Meal}}),{Value:{t:Meal}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('price',Meal.$$.prototype.$prop$getPrice,{Container:{t:Meal},Set:{t:$$$cl734.Nothing},Get:{t:$$$cl734.Integer}}),{Value:{t:$$$cl734.Integer}});
    
    //AttributeDecl v1 at tests.ceylon (30:4-30:39)
    var v1$748=e1$747.traverse(reservation$745);
    $$$ct741.assertEquals((10),v1$748);
    
    //AttributeDecl handler at tests.ceylon (32:4-32:35)
    var handler$749=AnHandler();
    
    //AttributeDecl e4 at tests.ceylon (33:4-33:65)
    var e4$750=$$$icm735.ClassExpression$expression({Type:{t:AnHandler}}).method($$$cl734.AppliedMethod$meta$model(AnHandler.$$.prototype.m,undefined,{Container:{t:AnHandler},Type:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}),{Arguments:{t:$$$cl734.Empty}});
    
    //AttributeDecl v4 at tests.ceylon (34:4-34:35)
    var v4$751=$$$cl734.$JsCallable(e4$750.traverse(handler$749),[],{Return:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}});
    $$$ct741.assertEquals((0),handler$749.counter);
    v4$751();
    $$$ct741.assertEquals((1),handler$749.counter);
}
exports.testExpression=testExpression;
testExpression.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testExpression']};};

//MethodDef testPropertyChange at tests.ceylon (40:0-47:0)
function testPropertyChange(){
    
    //AttributeDecl p at tests.ceylon (41:4-41:29)
    var p$752=$$$icm735.Property($$$cl734.String("foo",3),{Value:{t:$$$cl734.String}});
    
    //MethodDef listener at tests.ceylon (42:4-44:4)
    function listener$753(prop$754){
        $$$ct741.assertEquals($$$cl734.String("bar",3),prop$754);
    };listener$753.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'prop',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],d:['test.io.cayla.mvvm','testPropertyChange','$m','listener']};};
    p$752.subscribe($$$cl734.$JsCallable(listener$753,[{$nm:'prop',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$cl734.String}]}}));
    p$752.setValue($$$cl734.String("bar",3));
}
exports.testPropertyChange=testPropertyChange;
testPropertyChange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testPropertyChange']};};
var $$$cc755=require('ceylon/collection/1.0.0/ceylon.collection-1.0.0');
$$$cl734.$addmod$($$$cc755,'ceylon.collection/1.0.0');

//MethodDef testComputedObservable at testObservable.ceylon (5:0-24:0)
function testComputedObservable(){
    
    //AttributeDecl mode at testObservable.ceylon (6:4-6:32)
    var mode$756=true;
    function setMode$756(mode$757){return mode$756=mode$757;};
    
    //AttributeDecl firstName at testObservable.ceylon (7:4-7:38)
    var firstName$758=$$$icm735.Property($$$cl734.String("dale",4),{Value:{t:$$$cl734.String}});
    
    //AttributeDecl lastName at testObservable.ceylon (8:4-8:39)
    var lastName$759=$$$icm735.Property($$$cl734.String("cooper",6),{Value:{t:$$$cl734.String}});
    
    //AttributeDecl name at testObservable.ceylon (9:4-9:125)
    var name$760=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return (opt$761=(mode$756?$$$cl734.StringBuilder().appendAll([firstName$758.getValue().string,$$$cl734.String(" ",1),lastName$759.getValue().string]).string:null),opt$761!==null?opt$761:$$$cl734.StringBuilder().appendAll([firstName$758.getValue().string]).string);
    }),[],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.String}});
    var opt$761;
    
    //AttributeDecl count at testObservable.ceylon (10:4-10:30)
    var count$762=(0);
    function setCount$762(count$763){return count$762=count$763;};
    name$760.subscribe($$$cl734.$JsCallable((function (s$764){
        return (oldcount$765=count$762,count$762=oldcount$765.successor,oldcount$765);
    }),[{$nm:'s',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],{Return:{t:$$$cl734.Integer},Arguments:{t:'T', l:[{t:$$$cl734.String}]}}));
    var oldcount$765;
    $$$ct741.assertEquals($$$cl734.String("dale cooper",11),name$760.getValue());
    firstName$758.setValue($$$cl734.String("sammy",5));
    $$$ct741.assertEquals((1),count$762);
    $$$ct741.assertEquals($$$cl734.String("sammy cooper",12),name$760.getValue());
    mode$756=false;
    $$$ct741.assertEquals($$$cl734.String("sammy cooper",12),name$760.getValue());
    lastName$759.setValue($$$cl734.String("milouze",7));
    $$$ct741.assertEquals($$$cl734.String("sammy",5),name$760.getValue());
    $$$ct741.assertEquals((2),count$762);
    firstName$758.setValue($$$cl734.String("scooby",6));
    $$$ct741.assertEquals($$$cl734.String("scooby",6),name$760.getValue());
    $$$ct741.assertEquals((3),count$762);
}
exports.testComputedObservable=testComputedObservable;
testComputedObservable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testComputedObservable']};};

//MethodDef testObserveComputedObservable at testObservable.ceylon (26:0-34:0)
function testObserveComputedObservable(){
    
    //AttributeDecl foo at testObservable.ceylon (27:4-27:31)
    var foo$766=$$$icm735.Property($$$cl734.String("foo",3),{Value:{t:$$$cl734.String}});
    
    //AttributeDecl bar at testObservable.ceylon (28:4-28:63)
    var bar$767=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$$cl734.StringBuilder().appendAll([$$$cl734.String("<bar>",5),foo$766.getValue().string,$$$cl734.String("</bar>",6)]).string;
    }),[],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.String}});
    
    //AttributeDecl juu at testObservable.ceylon (29:4-29:63)
    var juu$768=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$$cl734.StringBuilder().appendAll([$$$cl734.String("<juu>",5),bar$767.getValue().string,$$$cl734.String("</juu>",6)]).string;
    }),[],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.String}});
    $$$ct741.assertEquals($$$cl734.String("<juu><bar>foo</bar></juu>",25),juu$768.getValue());
    foo$766.setValue($$$cl734.String("oof",3));
    $$$ct741.assertEquals($$$cl734.String("<bar>oof</bar>",14),bar$767.getValue());
    $$$ct741.assertEquals($$$cl734.String("<juu><bar>oof</bar></juu>",25),juu$768.getValue());
}
exports.testObserveComputedObservable=testObserveComputedObservable;
testObserveComputedObservable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testObserveComputedObservable']};};

//MethodDef testComputedObservableTriangle at testObservable.ceylon (36:0-52:0)
function testComputedObservableTriangle(){
    
    //AttributeDecl count at testObservable.ceylon (37:4-37:30)
    var count$769=(0);
    function setCount$769(count$770){return count$769=count$770;};
    
    //AttributeDecl foo at testObservable.ceylon (38:4-38:31)
    var foo$771=$$$icm735.Property($$$cl734.String("foo",3),{Value:{t:$$$cl734.String}});
    
    //AttributeDecl bar at testObservable.ceylon (39:4-39:63)
    var bar$772=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$$cl734.StringBuilder().appendAll([$$$cl734.String("<bar>",5),foo$771.getValue().string,$$$cl734.String("</bar>",6)]).string;
    }),[],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.String}});
    
    //AttributeDecl juu at testObservable.ceylon (40:4-45:5)
    var juu$773=(compute$774=function (){
        (oldcount$775=count$769,count$769=oldcount$775.successor,oldcount$775);
        var oldcount$775;
        return $$$cl734.StringBuilder().appendAll([$$$cl734.String("<juu>",5),foo$771.getValue().string,$$$cl734.String("</juu><juu>",11),bar$772.getValue().string,$$$cl734.String("</juu>",6)]).string;
    },$$$icm735.computed(compute$774,{Value:{t:$$$cl734.String}}));
    var compute$774;
    $$$ct741.assertEquals((0),count$769);
    $$$ct741.assertEquals($$$cl734.String("<juu>foo</juu><juu><bar>foo</bar></juu>",39),juu$773.getValue());
    $$$ct741.assertEquals((1),count$769);
    foo$771.setValue($$$cl734.String("oof",3));
    $$$ct741.assertEquals($$$cl734.String("<juu>oof</juu><juu><bar>oof</bar></juu>",39),juu$773.getValue());
    $$$ct741.assertEquals((3),count$769);
}
exports.testComputedObservableTriangle=testComputedObservableTriangle;
testComputedObservableTriangle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testComputedObservableTriangle']};};

//MethodDef testComputedObservableCycle at testObservable.ceylon (54:0-65:0)
function testComputedObservableCycle(){
    
    //AttributeDecl foo at testObservable.ceylon (55:4-55:31)
    var foo$776=$$$icm735.Property($$$cl734.String("foo",3),{Value:{t:$$$cl734.String}});
    
    //AttributeDecl exp at testObservable.ceylon (56:4-56:41)
    var exp$777=$$$cl734.$JsCallable((function (){
        return $$$cl734.String("const",5);
    }),[],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}});
    function setExp$777(exp$778){return exp$777=exp$778;};
    
    //AttributeDecl bar at testObservable.ceylon (57:4-57:62)
    var bar$779=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$$cl734.StringBuilder().appendAll([exp$777().string,$$$cl734.String(" ",1),foo$776.getValue().string]).string;
    }),[],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.String}});
    
    //AttributeDecl juu at testObservable.ceylon (58:4-58:52)
    var juu$780=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$$cl734.StringBuilder().appendAll([bar$779.getValue().string]).string;
    }),[],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.String}});
    exp$777=$$$cl734.$JsCallable((function (){
        return juu$780.getValue();
    }),[/*VALUE Callable paramscom.redhat.ceylon.compiler.typechecker.model.Value*/],{Return:{t:$$$cl734.String},Arguments:{t:$$$cl734.Empty}});
    try{
        bar$779.getValue();
        $$$ct741.fail();
    }catch(ex$781){
        if (ex$781.getT$name === undefined) ex$781=$$$cl734.NativeException(ex$781);
        if($$$cl734.isOfType(ex$781,{t:$$$icm735.CyclicDependencyException})){}else{throw ex$781}
    }
}
exports.testComputedObservableCycle=testComputedObservableCycle;
testComputedObservableCycle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testComputedObservableCycle']};};

//MethodDef testComputedObservableList at testObservable.ceylon (67:0-84:0)
function testComputedObservableList(){
    
    //AttributeDecl list at testObservable.ceylon (68:4-68:41)
    var list$782=$$$icm735.ObservableList({Element:{t:$$$cl734.String}});
    list$782.add($$$cl734.String("aa",2));
    list$782.add($$$cl734.String("a",1));
    list$782.add($$$cl734.String("bb",2));
    list$782.add($$$cl734.String("b",1));
    
    //AttributeDecl filtered at testObservable.ceylon (73:4-73:108)
    var filtered$783=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return $$$cc755.LinkedList(list$782.getValue().$filter($$$cl734.$JsCallable((function (elem$784){
            return elem$784.size.remainder((2)).equals((0));
        }),[{$nm:'elem',$mt:'prm',$t:{t:$$$cl734.String},$an:function(){return[];}}],{Return:{t:$$$cl734.$Boolean},Arguments:{t:'T', l:[{t:$$$cl734.String}]}})),{Element:{t:$$$cl734.String}});
    }),[],{Return:{t:$$$cc755.LinkedList,a:{Element:{t:$$$cl734.String}}},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cc755.LinkedList,a:{Element:{t:$$$cl734.String}}}});
    
    //AttributeDecl count at testObservable.ceylon (74:4-74:58)
    var count$785=$$$icm735.computed($$$cl734.$JsCallable((function (){
        return filtered$783.getValue().size;
    }),[],{Return:{t:$$$cl734.Integer},Arguments:{t:$$$cl734.Empty}}),{Value:{t:$$$cl734.Integer}});
    $$$ct741.assertEquals($$$cc755.LinkedList([$$$cl734.String("aa",2),$$$cl734.String("bb",2)].reifyCeylonType({Element:{t:$$$cl734.String},Absent:{t:$$$cl734.Nothing}}),{Element:{t:$$$cl734.String}}),filtered$783.getValue());
    $$$ct741.assertEquals((2),count$785.getValue());
    $$$icm735.getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("filtered list is ",17),filtered$783.string]).string);
    $$$icm735.getLog().debug($$$cl734.StringBuilder().appendAll([$$$cl734.String("count list is ",14),count$785.string]).string);
    list$782.add($$$cl734.String("cc",2));
    $$$ct741.assertEquals($$$cc755.LinkedList([$$$cl734.String("aa",2),$$$cl734.String("bb",2),$$$cl734.String("cc",2)].reifyCeylonType({Element:{t:$$$cl734.String},Absent:{t:$$$cl734.Nothing}}),{Element:{t:$$$cl734.String}}),filtered$783.getValue());
    $$$ct741.assertEquals((3),count$785.getValue());
    list$782.removeElement($$$cl734.String("aa",2));
    $$$ct741.assertEquals($$$cc755.LinkedList([$$$cl734.String("bb",2),$$$cl734.String("cc",2)].reifyCeylonType({Element:{t:$$$cl734.String},Absent:{t:$$$cl734.Nothing}}),{Element:{t:$$$cl734.String}}),filtered$783.getValue());
}
exports.testComputedObservableList=testComputedObservableList;
testComputedObservableList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testComputedObservableList']};};

//MethodDef testQuerySelectorAll at testDom.ceylon (4:0-11:0)
function testQuerySelectorAll(){
    withFragment($$$cl734.$JsCallable((function (fragment$786){
        
        //AttributeDecl pre at testDom.ceylon (6:8-6:46)
        var pre$787=fragment$786.addElement($$$cl734.String("pre",3));
        pre$787.addClass($$$cl734.String("foo",3));
        
        //AttributeDecl nodes at testDom.ceylon (8:8-8:46)
        var nodes$788=$$$icm735.querySelectorAll$dom($$$cl734.String(".foo",4));
        $$$ct741.assertEquals($$$cl734.LazyList([pre$787].reifyCeylonType({Element:{t:$$$icm735.DomNode$dom},Absent:{t:$$$cl734.Nothing}}),{Element:{t:$$$icm735.DomNode$dom}}),$$$cl734.LazyList(nodes$788,{Element:{t:$$$icm735.DomNode$dom}}));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testQuerySelectorAll=testQuerySelectorAll;
testQuerySelectorAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testQuerySelectorAll']};};

//MethodDef testQuerySelectorAllWrap at testDom.ceylon (13:0-18:0)
function testQuerySelectorAllWrap(){
    withFragment($$$cl734.$JsCallable((function (fragment$789){
        
        //AttributeDecl nodes at testDom.ceylon (15:8-15:46)
        var nodes$790=$$$icm735.querySelectorAll$dom($$$cl734.String("body",4));
        $$$ct741.assertEquals((1),nodes$790.size);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testQuerySelectorAllWrap=testQuerySelectorAllWrap;
testQuerySelectorAllWrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testQuerySelectorAllWrap']};};

//MethodDef testMatchesSelector at testDom.ceylon (20:0-33:0)
function testMatchesSelector(){
    withFragment($$$cl734.$JsCallable((function (fragment$791){
        
        //AttributeDecl pre at testDom.ceylon (22:8-22:46)
        var pre$792=fragment$791.addElement($$$cl734.String("pre",3));
        pre$792.addClass($$$cl734.String("foo",3));
        $$$ct741.assertTrue(pre$792.matchesSelector($$$cl734.String("pre",3)));
        $$$ct741.assertTrue(pre$792.matchesSelector($$$cl734.String(".foo",4)));
        $$$ct741.assertTrue(pre$792.matchesSelector($$$cl734.String("pre.foo",7)));
        $$$ct741.assertFalse(pre$792.matchesSelector($$$cl734.String("div",3)));
        $$$ct741.assertFalse(pre$792.matchesSelector($$$cl734.String("div.foo",7)));
        $$$ct741.assertFalse(pre$792.matchesSelector($$$cl734.String("pre.bar",7)));
        $$$ct741.assertFalse(pre$792.matchesSelector($$$cl734.String(".bar",4)));
        $$$ct741.assertFalse(pre$792.matchesSelector($$$cl734.String("div.bar",7)));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testMatchesSelector=testMatchesSelector;
testMatchesSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testMatchesSelector']};};

//MethodDef testEventDelegation at testDom.ceylon (35:0-55:0)
function testEventDelegation(){
    withFragment($$$cl734.$JsCallable((function (fragment$793){
        
        //AttributeDecl ul at testDom.ceylon (37:8-37:46)
        var ul$794=fragment$793.addElement($$$cl734.String("ul",2));
        
        //AttributeDecl li at testDom.ceylon (38:8-38:40)
        var li$795=ul$794.addElement($$$cl734.String("li",2));
        
        //AttributeDecl div at testDom.ceylon (39:8-39:42)
        var div$796=li$795.addElement($$$cl734.String("div",3));
        
        //AttributeDecl count at testDom.ceylon (40:8-40:34)
        var count$797=(0);
        function setCount$797(count$798){return count$797=count$798;};
        
        //MethodDef f at testDom.ceylon (41:8-43:8)
        function f$799(event$800){
            (oldcount$801=count$797,count$797=oldcount$801.successor,oldcount$801);
            var oldcount$801;
        };f$799.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'event',$mt:'prm',$t:{t:$$$icm735.DomEvent$dom},$an:function(){return[];}}],d:['test.io.cayla.mvvm','testEventDelegation','$m','3','$m','f']};};
        li$795.addEventHandler($$$cl734.String("click",5),$$$cl734.$JsCallable(f$799,[{$nm:'event',$mt:'prm',$t:{t:$$$icm735.DomEvent$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomEvent$dom}]}}),$$$cl734.String(".foo",4));
        ul$794.click();
        $$$ct741.assertEquals((0),count$797);
        li$795.click();
        $$$ct741.assertEquals((0),count$797);
        div$796.click();
        $$$ct741.assertEquals((0),count$797);
        div$796.addClass($$$cl734.String("foo",3));
        div$796.click();
        $$$ct741.assertEquals((1),count$797);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testEventDelegation=testEventDelegation;
testEventDelegation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testEventDelegation']};};

//MethodDef testInsertBefore at testDom.ceylon (57:0-81:0)
function testInsertBefore(){
    withFragment($$$cl734.$JsCallable((function (fragment$802){
        
        //AttributeDecl div at testDom.ceylon (59:8-59:48)
        var div$803=fragment$802.addElement($$$cl734.String("div",3));
        
        //AttributeDecl span at testDom.ceylon (60:8-60:45)
        var span$804=div$803.addElement($$$cl734.String("span",4));
        
        //AttributeDecl h1 at testDom.ceylon (61:8-61:34)
        var h1$805=$$$icm735.element$dom($$$cl734.String("h1",2));
        div$803.insertBefore(h1$805,span$804);
        
        //AttributeDecl children at testDom.ceylon (63:8-63:54)
        var children$806=div$803.getChildren().sequence;
        function setChildren$806(children$807){return children$806=children$807;};
        $$$ct741.assertEquals((2),children$806.size);
        $$$ct741.assertEquals(h1$805,children$806.$get((0)));
        $$$ct741.assertEquals(span$804,children$806.$get((1)));
        
        //AttributeDecl h2 at testDom.ceylon (67:8-67:34)
        var h2$808=$$$icm735.element$dom($$$cl734.String("h2",2));
        div$803.insertBefore(h2$808);
        children$806=div$803.getChildren().sequence;
        $$$ct741.assertEquals((3),children$806.size);
        $$$ct741.assertEquals(h1$805,children$806.$get((0)));
        $$$ct741.assertEquals(span$804,children$806.$get((1)));
        $$$ct741.assertEquals(h2$808,children$806.$get((2)));
        div$803.insertBefore(span$804);
        children$806=div$803.getChildren().sequence;
        $$$ct741.assertEquals((3),children$806.size);
        $$$ct741.assertEquals(h1$805,children$806.$get((0)));
        $$$ct741.assertEquals(h2$808,children$806.$get((1)));
        $$$ct741.assertEquals(span$804,children$806.$get((2)));
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testInsertBefore=testInsertBefore;
testInsertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testInsertBefore']};};

//MethodDef testDiff1 at testDiff.ceylon (4:0-10:0)
function testDiff1(){
    
    //AttributeDecl a at testDiff.ceylon (5:4-5:16)
    var a$809=$$$cl734.String("",0);
    
    //AttributeDecl b at testDiff.ceylon (6:4-6:17)
    var b$810=$$$cl734.String("a",1);
    
    //AttributeDecl i at testDiff.ceylon (7:4-7:35)
    var i$811=$$$icm735.Diff$diff(a$809,b$810,{E:{t:$$$cl734.Character}});
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(97),$$$cl734.Tuple($$$icm735.getAdded$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$811.next());
    $$$ct741.assertEquals($$$cl734.getFinished(),i$811.next());
}
exports.testDiff1=testDiff1;
testDiff1.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testDiff1']};};

//MethodDef testDiff2 at testDiff.ceylon (12:0-18:0)
function testDiff2(){
    
    //AttributeDecl a at testDiff.ceylon (13:4-13:17)
    var a$812=$$$cl734.String("a",1);
    
    //AttributeDecl b at testDiff.ceylon (14:4-14:16)
    var b$813=$$$cl734.String("",0);
    
    //AttributeDecl i at testDiff.ceylon (15:4-15:35)
    var i$814=$$$icm735.Diff$diff(a$812,b$813,{E:{t:$$$cl734.Character}});
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(97),$$$cl734.Tuple($$$icm735.getRemoved$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$814.next());
    $$$ct741.assertEquals($$$cl734.getFinished(),i$814.next());
}
exports.testDiff2=testDiff2;
testDiff2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testDiff2']};};

//MethodDef testDiff3 at testDiff.ceylon (20:0-26:0)
function testDiff3(){
    
    //AttributeDecl a at testDiff.ceylon (21:4-21:17)
    var a$815=$$$cl734.String("a",1);
    
    //AttributeDecl b at testDiff.ceylon (22:4-22:17)
    var b$816=$$$cl734.String("a",1);
    
    //AttributeDecl i at testDiff.ceylon (23:4-23:35)
    var i$817=$$$icm735.Diff$diff(a$815,b$816,{E:{t:$$$cl734.Character}});
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(97),$$$cl734.Tuple($$$icm735.getSame$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$817.next());
    $$$ct741.assertEquals($$$cl734.getFinished(),i$817.next());
}
exports.testDiff3=testDiff3;
testDiff3.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testDiff3']};};

//MethodDef testDiff4 at testDiff.ceylon (28:0-35:0)
function testDiff4(){
    
    //AttributeDecl a at testDiff.ceylon (29:4-29:17)
    var a$818=$$$cl734.String("b",1);
    
    //AttributeDecl b at testDiff.ceylon (30:4-30:18)
    var b$819=$$$cl734.String("ab",2);
    
    //AttributeDecl i at testDiff.ceylon (31:4-31:35)
    var i$820=$$$icm735.Diff$diff(a$818,b$819,{E:{t:$$$cl734.Character}});
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(97),$$$cl734.Tuple($$$icm735.getAdded$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$820.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(98),$$$cl734.Tuple($$$icm735.getSame$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$820.next());
    $$$ct741.assertEquals($$$cl734.getFinished(),i$820.next());
}
exports.testDiff4=testDiff4;
testDiff4.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testDiff4']};};

//MethodDef testDiff5 at testDiff.ceylon (37:0-44:0)
function testDiff5(){
    
    //AttributeDecl a at testDiff.ceylon (38:4-38:18)
    var a$821=$$$cl734.String("ab",2);
    
    //AttributeDecl b at testDiff.ceylon (39:4-39:17)
    var b$822=$$$cl734.String("b",1);
    
    //AttributeDecl i at testDiff.ceylon (40:4-40:35)
    var i$823=$$$icm735.Diff$diff(a$821,b$822,{E:{t:$$$cl734.Character}});
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(97),$$$cl734.Tuple($$$icm735.getRemoved$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$823.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(98),$$$cl734.Tuple($$$icm735.getSame$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$823.next());
    $$$ct741.assertEquals($$$cl734.getFinished(),i$823.next());
}
exports.testDiff5=testDiff5;
testDiff5.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testDiff5']};};

//MethodDef testDiff6 at testDiff.ceylon (46:0-60:0)
function testDiff6(){
    
    //AttributeDecl a at testDiff.ceylon (47:4-47:22)
    var a$824=$$$cl734.String("abcdef",6);
    
    //AttributeDecl b at testDiff.ceylon (48:4-48:22)
    var b$825=$$$cl734.String("a_b_e_",6);
    
    //AttributeDecl i at testDiff.ceylon (49:4-49:35)
    var i$826=$$$icm735.Diff$diff(a$824,b$825,{E:{t:$$$cl734.Character}});
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(97),$$$cl734.Tuple($$$icm735.getSame$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(95),$$$cl734.Tuple($$$icm735.getAdded$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(98),$$$cl734.Tuple($$$icm735.getSame$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(99),$$$cl734.Tuple($$$icm735.getRemoved$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(100),$$$cl734.Tuple($$$icm735.getRemoved$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(95),$$$cl734.Tuple($$$icm735.getAdded$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(101),$$$cl734.Tuple($$$icm735.getSame$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(102),$$$cl734.Tuple($$$icm735.getRemoved$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.Tuple($$$cl734.Character(95),$$$cl734.Tuple($$$icm735.getAdded$diff(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$icm735.Change$diff},First:{t:$$$icm735.Change$diff}}),{Rest:{t:'T', l:[{t:$$$icm735.Change$diff}]},Element:{t:'u', l:[{t:$$$cl734.Character},{t:$$$icm735.Change$diff}]},First:{t:$$$cl734.Character}}),i$826.next());
    $$$ct741.assertEquals($$$cl734.getFinished(),i$826.next());
}
exports.testDiff6=testDiff6;
testDiff6.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testDiff6']};};

//ClassDef Person at testBindings.ceylon (11:0-12:0)
function Person(firstName, lastName, $$person){
    $init$Person();
    if ($$person===undefined)$$person=new Person.$$;
    $$person.firstName_=firstName;
    $$person.lastName_=lastName;
    return $$person;
}
Person.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'firstName',$mt:'prm',$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$an:function(){return[$$$cl734.shared()];}},{$nm:'lastName',$mt:'prm',$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$an:function(){return[$$$cl734.shared()];}}],d:['test.io.cayla.mvvm','Person']};};
function $init$Person(){
    if (Person.$$===undefined){
        $$$cl734.initTypeProto(Person,'test.io.cayla.mvvm::Person',$$$cl734.Basic);
        (function($$person){
            $$$cl734.defineAttr($$person,'firstName',function(){return this.firstName_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$cont:Person,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','Person','$at','firstName']};});
            $$$cl734.defineAttr($$person,'lastName',function(){return this.lastName_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$cont:Person,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','Person','$at','lastName']};});
        })(Person.$$.prototype);
    }
    return Person;
}
exports.$init$Person=$init$Person;
$init$Person();

//ClassDef Group at testBindings.ceylon (14:0-15:0)
function Group(users, $$group){
    $init$Group();
    if ($$group===undefined)$$group=new Group.$$;
    $$group.users_=users;
    return $$group;
}
Group.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'users',$mt:'prm',$t:{t:$$$icm735.ObservableList,a:{Element:{t:Person}}},$an:function(){return[$$$cl734.shared()];}}],d:['test.io.cayla.mvvm','Group']};};
function $init$Group(){
    if (Group.$$===undefined){
        $$$cl734.initTypeProto(Group,'test.io.cayla.mvvm::Group',$$$cl734.Basic);
        (function($$group){
            $$$cl734.defineAttr($$group,'users',function(){return this.users_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.ObservableList,a:{Element:{t:Person}}},$cont:Group,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','Group','$at','users']};});
        })(Group.$$.prototype);
    }
    return Group;
}
exports.$init$Group=$init$Group;
$init$Group();

//ClassDef Car at testBindings.ceylon (17:0-18:0)
function Car(name, owner, $$car){
    $init$Car();
    if ($$car===undefined)$$car=new Car.$$;
    $$car.name_=name;
    $$car.owner_=owner;
    return $$car;
}
Car.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$an:function(){return[$$$cl734.shared()];}},{$nm:'owner',$mt:'prm',$t:{t:$$$icm735.Property,a:{Value:{t:Person}}},$an:function(){return[$$$cl734.shared()];}}],d:['test.io.cayla.mvvm','Car']};};
function $init$Car(){
    if (Car.$$===undefined){
        $$$cl734.initTypeProto(Car,'test.io.cayla.mvvm::Car',$$$cl734.Basic);
        (function($$car){
            $$$cl734.defineAttr($$car,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},$cont:Car,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','Car','$at','name']};});
            $$$cl734.defineAttr($$car,'owner',function(){return this.owner_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:Person}}},$cont:Car,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','Car','$at','owner']};});
        })(Car.$$.prototype);
    }
    return Car;
}
exports.$init$Car=$init$Car;
$init$Car();

//AttributeDecl carNameExpr at testBindings.ceylon (20:0-20:100)
var carNameExpr$827;function $valinit$carNameExpr$827(){if (carNameExpr$827===undefined)carNameExpr$827=$$$icm735.ClassExpression$expression({Type:{t:Car}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('name',Car.$$.prototype.$prop$getName,{Container:{t:Car},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}}});return carNameExpr$827;};$valinit$carNameExpr$827();
function getCarNameExpr(){return $valinit$carNameExpr$827();}
var $prop$getCarNameExpr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.AttributeExpression$expression,a:{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},Source:{t:Car}}},d:['test.io.cayla.mvvm','carNameExpr']};}};
exports.$prop$getCarNameExpr=$prop$getCarNameExpr;
$prop$getCarNameExpr.get=function(){return carNameExpr$827};

//AttributeDecl carNameBinding at testBindings.ceylon (21:0-21:56)
var carNameBinding$828;function $valinit$carNameBinding$828(){if (carNameBinding$828===undefined)carNameBinding$828=getCarNameExpr().bindTo($$$icm735.getBinders().val);return carNameBinding$828;};$valinit$carNameBinding$828();
function getCarNameBinding(){return $valinit$carNameBinding$828();}
exports.getCarNameBinding=getCarNameBinding;
var $prop$getCarNameBinding={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Binding$view},d:['test.io.cayla.mvvm','carNameBinding']};}};
exports.$prop$getCarNameBinding=$prop$getCarNameBinding;
$prop$getCarNameBinding.get=getCarNameBinding;
getCarNameBinding.$$metamodel$$=$prop$getCarNameBinding.$$metamodel$$;

//AttributeDecl carOwnerExpr at testBindings.ceylon (22:0-22:103)
var carOwnerExpr$829;function $valinit$carOwnerExpr$829(){if (carOwnerExpr$829===undefined)carOwnerExpr$829=$$$icm735.ClassExpression$expression({Type:{t:Car}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('owner',Car.$$.prototype.$prop$getOwner,{Container:{t:Car},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:Person}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:Person}}}});return carOwnerExpr$829;};$valinit$carOwnerExpr$829();
function getCarOwnerExpr(){return $valinit$carOwnerExpr$829();}
var $prop$getCarOwnerExpr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.AttributeExpression$expression,a:{Value:{t:$$$icm735.Property,a:{Value:{t:Person}}},Source:{t:Car}}},d:['test.io.cayla.mvvm','carOwnerExpr']};}};
exports.$prop$getCarOwnerExpr=$prop$getCarOwnerExpr;
$prop$getCarOwnerExpr.get=function(){return carOwnerExpr$829};

//AttributeDecl carOwnerBinding at testBindings.ceylon (23:0-23:69)
var carOwnerBinding$830;function $valinit$carOwnerBinding$830(){if (carOwnerBinding$830===undefined)carOwnerBinding$830=getCarOwnerExpr().bindTo($$$icm735.getBinders().$with({Value:{t:Person}}));return carOwnerBinding$830;};$valinit$carOwnerBinding$830();
function getCarOwnerBinding(){return $valinit$carOwnerBinding$830();}
exports.getCarOwnerBinding=getCarOwnerBinding;
var $prop$getCarOwnerBinding={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Binding$view},d:['test.io.cayla.mvvm','carOwnerBinding']};}};
exports.$prop$getCarOwnerBinding=$prop$getCarOwnerBinding;
$prop$getCarOwnerBinding.get=getCarOwnerBinding;
getCarOwnerBinding.$$metamodel$$=$prop$getCarOwnerBinding.$$metamodel$$;

//AttributeDecl firstNameExpr at testBindings.ceylon (24:0-24:116)
var firstNameExpr$831;function $valinit$firstNameExpr$831(){if (firstNameExpr$831===undefined)firstNameExpr$831=$$$icm735.ClassExpression$expression({Type:{t:Person}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('firstName',Person.$$.prototype.$prop$getFirstName,{Container:{t:Person},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}}});return firstNameExpr$831;};$valinit$firstNameExpr$831();
function getFirstNameExpr(){return $valinit$firstNameExpr$831();}
var $prop$getFirstNameExpr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.AttributeExpression$expression,a:{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},Source:{t:Person}}},d:['test.io.cayla.mvvm','firstNameExpr']};}};
exports.$prop$getFirstNameExpr=$prop$getFirstNameExpr;
$prop$getFirstNameExpr.get=function(){return firstNameExpr$831};

//AttributeDecl firstNameBinding at testBindings.ceylon (25:0-25:60)
var firstNameBinding$832;function $valinit$firstNameBinding$832(){if (firstNameBinding$832===undefined)firstNameBinding$832=getFirstNameExpr().bindTo($$$icm735.getBinders().val);return firstNameBinding$832;};$valinit$firstNameBinding$832();
function getFirstNameBinding(){return $valinit$firstNameBinding$832();}
exports.getFirstNameBinding=getFirstNameBinding;
var $prop$getFirstNameBinding={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Binding$view},d:['test.io.cayla.mvvm','firstNameBinding']};}};
exports.$prop$getFirstNameBinding=$prop$getFirstNameBinding;
$prop$getFirstNameBinding.get=getFirstNameBinding;
getFirstNameBinding.$$metamodel$$=$prop$getFirstNameBinding.$$metamodel$$;

//AttributeDecl lastNameExpr at testBindings.ceylon (26:0-26:114)
var lastNameExpr$833;function $valinit$lastNameExpr$833(){if (lastNameExpr$833===undefined)lastNameExpr$833=$$$icm735.ClassExpression$expression({Type:{t:Person}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('lastName',Person.$$.prototype.$prop$getLastName,{Container:{t:Person},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}}});return lastNameExpr$833;};$valinit$lastNameExpr$833();
function getLastNameExpr(){return $valinit$lastNameExpr$833();}
var $prop$getLastNameExpr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.AttributeExpression$expression,a:{Value:{t:$$$icm735.Property,a:{Value:{t:$$$cl734.String}}},Source:{t:Person}}},d:['test.io.cayla.mvvm','lastNameExpr']};}};
exports.$prop$getLastNameExpr=$prop$getLastNameExpr;
$prop$getLastNameExpr.get=function(){return lastNameExpr$833};

//AttributeDecl lastNameBinding at testBindings.ceylon (27:0-27:58)
var lastNameBinding$834;function $valinit$lastNameBinding$834(){if (lastNameBinding$834===undefined)lastNameBinding$834=getLastNameExpr().bindTo($$$icm735.getBinders().val);return lastNameBinding$834;};$valinit$lastNameBinding$834();
function getLastNameBinding(){return $valinit$lastNameBinding$834();}
exports.getLastNameBinding=getLastNameBinding;
var $prop$getLastNameBinding={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Binding$view},d:['test.io.cayla.mvvm','lastNameBinding']};}};
exports.$prop$getLastNameBinding=$prop$getLastNameBinding;
$prop$getLastNameBinding.get=getLastNameBinding;
getLastNameBinding.$$metamodel$$=$prop$getLastNameBinding.$$metamodel$$;

//MethodDef testStringPropertyBinding at testBindings.ceylon (29:0-42:0)
function testStringPropertyBinding(){
    withFragment($$$cl734.$JsCallable((function (fragment$835){
        
        //AttributeDecl element at testBindings.ceylon (31:8-34:9)
        var element$836=(name$837=$$$cl734.String("foo",3),bindings$838=getFirstNameBinding(),$$$icm735.InputText$view(name$837,undefined,undefined,bindings$838,undefined));
        var name$837,bindings$838;
        
        //AttributeDecl user at testBindings.ceylon (35:8-35:66)
        var user$839=Person($$$icm735.Property($$$cl734.String("julien",6),{Value:{t:$$$cl734.String}}),$$$icm735.Property($$$cl734.String("viet",4),{Value:{t:$$$cl734.String}}));
        
        //AttributeDecl node at testBindings.ceylon (36:8-36:41)
        var node$840=element$836.$bind(user$839);
        
        //AttributeDecl added at testBindings.ceylon (37:8-37:47)
        var added$841=fragment$835.addChild(node$840);
        $$$ct741.assertEquals($$$cl734.String("julien",6),added$841.getValue());
        user$839.firstName.setValue($$$cl734.String("whatever",8));
        $$$ct741.assertEquals($$$cl734.String("whatever",8),added$841.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testStringPropertyBinding=testStringPropertyBinding;
testStringPropertyBinding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testStringPropertyBinding']};};

//MethodDef testWith at testBindings.ceylon (44:0-65:0)
function testWith(){
    withFragment($$$cl734.$JsCallable((function (fragment$842){
        
        //AttributeDecl view at testBindings.ceylon (46:8-56:9)
        var view$843=(bindings$844=getCarOwnerBinding(),content$845=[(bindings$846=getFirstNameBinding(),name$847=$$$cl734.String("firstName",9),$$$icm735.InputText$view(name$847,undefined,undefined,bindings$846,undefined)),(bindings$848=getLastNameBinding(),name$849=$$$cl734.String("lastName",8),$$$icm735.InputText$view(name$849,undefined,undefined,bindings$848,undefined))].reifyCeylonType({Element:{t:$$$icm735.InputText$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Div$view(undefined,undefined,bindings$844,content$845));
        var bindings$844,content$845,bindings$846,name$847,bindings$848,name$849;
        
        //AttributeDecl julien at testBindings.ceylon (57:8-57:68)
        var julien$850=Person($$$icm735.Property($$$cl734.String("julien",6),{Value:{t:$$$cl734.String}}),$$$icm735.Property($$$cl734.String("viet",4),{Value:{t:$$$cl734.String}}));
        
        //AttributeDecl clio at testBindings.ceylon (58:8-58:58)
        var clio$851=Car($$$icm735.Property($$$cl734.String("clio",4),{Value:{t:$$$cl734.String}}),$$$icm735.Property(julien$850,{Value:{t:Person}}));
        
        //AttributeDecl dom at testBindings.ceylon (59:8-59:37)
        var dom$852=view$843.$bind(clio$851);
        //assert at testBindings.ceylon (60:8-60:62)
        var firstNameNode$853;
        if (!((firstNameNode$853=dom$852.getChildren().first)!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists firstNameNode = dom.getChildren().first\' at testBindings.ceylon (60:14-60:61)"),'60:8-60:62','testBindings.ceylon'); }
        //assert at testBindings.ceylon (61:8-61:66)
        var lastNameNode$854;
        if (!((lastNameNode$854=dom$852.getChildren().rest.first)!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists lastNameNode = dom.getChildren().rest.first\' at testBindings.ceylon (61:14-61:65)"),'61:8-61:66','testBindings.ceylon'); }
        $$$ct741.assertEquals($$$cl734.String("julien",6),firstNameNode$853.getValue());
        $$$ct741.assertEquals($$$cl734.String("viet",4),lastNameNode$854.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testWith=testWith;
testWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testWith']};};

//MethodDef testForEach at testBindings.ceylon (67:0-101:0)
function testForEach(){
    withFragment($$$cl734.$JsCallable((function (fragment$855){
        
        //AttributeDecl a at testBindings.ceylon (70:8-70:111)
        var a$856=$$$icm735.ClassExpression$expression({Type:{t:Group}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('users',Group.$$.prototype.$prop$getUsers,{Container:{t:Group},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.ObservableList,a:{Element:{t:Person}}}}),{Value:{t:$$$icm735.ObservableList,a:{Element:{t:Person}}}});
        
        //AttributeDecl b at testBindings.ceylon (71:8-71:53)
        var b$857=a$856.bindTo($$$icm735.getBinders().foreach({Value:{t:Person}}));
        
        //AttributeDecl users at testBindings.ceylon (72:8-72:63)
        var users$858=$$$icm735.ObservableList({Element:{t:Person}});
        
        //AttributeDecl foo at testBindings.ceylon (73:8-73:58)
        var foo$859=Person($$$icm735.Property($$$cl734.String("foo",3),{Value:{t:$$$cl734.String}}),$$$icm735.Property($$$cl734.String("",0),{Value:{t:$$$cl734.String}}));
        users$858.add(foo$859);
        
        //AttributeDecl bar at testBindings.ceylon (75:8-75:58)
        var bar$860=Person($$$icm735.Property($$$cl734.String("bar",3),{Value:{t:$$$cl734.String}}),$$$icm735.Property($$$cl734.String("",0),{Value:{t:$$$cl734.String}}));
        users$858.add(bar$860);
        
        //AttributeDecl group at testBindings.ceylon (77:8-77:34)
        var group$861=Group(users$858);
        
        //AttributeDecl element at testBindings.ceylon (78:8-83:9)
        var element$862=(bindings$863=b$857,content$864=[(content$865=[(name$866=$$$cl734.String("foo",3),bindings$867=getFirstNameBinding(),$$$icm735.InputText$view(name$866,undefined,undefined,bindings$867,undefined))].reifyCeylonType({Element:{t:$$$icm735.InputText$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Li$view(undefined,undefined,undefined,content$865))].reifyCeylonType({Element:{t:$$$icm735.Li$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Ul$view(undefined,undefined,bindings$863,content$864));
        var bindings$863,content$864,content$865,name$866,bindings$867;
        
        //AttributeDecl node at testBindings.ceylon (84:8-84:42)
        var node$868=element$862.$bind(group$861);
        
        //AttributeDecl added at testBindings.ceylon (85:8-85:47)
        var added$869=fragment$855.addChild(node$868);
        //assert at testBindings.ceylon (86:8-86:56)
        var fooLi$870;
        if (!((fooLi$870=added$869.getChildren().first)!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists fooLi = added.getChildren().first\' at testBindings.ceylon (86:14-86:55)"),'86:8-86:56','testBindings.ceylon'); }
        $$$ct741.assertEquals((1),fooLi$870.getChildren().size);
        //assert at testBindings.ceylon (88:8-88:59)
        var fooInput$871;
        if (!((fooInput$871=fooLi$870.getChildren().first)!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists fooInput = fooLi.getChildren().first\' at testBindings.ceylon (88:14-88:58)"),'88:8-88:59','testBindings.ceylon'); }
        fooInput$871.setValue($$$cl734.String("foo_changed",11));
        fooInput$871.dispatchEvent($$$cl734.String("keyup",5));
        $$$ct741.assertEquals($$$cl734.String("foo_changed",11),foo$859.firstName.getValue());
        
        //AttributeDecl juu at testBindings.ceylon (92:8-92:58)
        var juu$872=Person($$$icm735.Property($$$cl734.String("juu",3),{Value:{t:$$$cl734.String}}),$$$icm735.Property($$$cl734.String("",0),{Value:{t:$$$cl734.String}}));
        users$858.add(juu$872);
        $$$ct741.assertEquals((3),added$869.getChildren().size);
        users$858.removeElement(bar$860);
        $$$ct741.assertEquals((2),added$869.getChildren().size);
        users$858.clear();
        $$$ct741.assertEquals((0),added$869.getChildren().size);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testForEach=testForEach;
testForEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testForEach']};};

//MethodDef testResolvePropertyInHierachy at testBindings.ceylon (103:0-118:0)
function testResolvePropertyInHierachy(){
    withFragment($$$cl734.$JsCallable((function (fragment$873){
        
        //AttributeDecl view at testBindings.ceylon (105:8-111:9)
        var view$874=(bindings$875=getCarOwnerBinding(),content$876=[(bindings$877=getCarNameBinding(),name$878=$$$cl734.String("carName",7),$$$icm735.InputText$view(name$878,undefined,undefined,bindings$877,undefined))].reifyCeylonType({Element:{t:$$$icm735.InputText$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Div$view(undefined,undefined,bindings$875,content$876));
        var bindings$875,content$876,bindings$877,name$878;
        
        //AttributeDecl julien at testBindings.ceylon (112:8-112:68)
        var julien$879=Person($$$icm735.Property($$$cl734.String("julien",6),{Value:{t:$$$cl734.String}}),$$$icm735.Property($$$cl734.String("viet",4),{Value:{t:$$$cl734.String}}));
        
        //AttributeDecl clio at testBindings.ceylon (113:8-113:58)
        var clio$880=Car($$$icm735.Property($$$cl734.String("clio",4),{Value:{t:$$$cl734.String}}),$$$icm735.Property(julien$879,{Value:{t:Person}}));
        
        //AttributeDecl dom at testBindings.ceylon (114:8-114:37)
        var dom$881=view$874.$bind(clio$880);
        //assert at testBindings.ceylon (115:8-115:62)
        var firstNameNode$882;
        if (!((firstNameNode$882=dom$881.getChildren().first)!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists firstNameNode = dom.getChildren().first\' at testBindings.ceylon (115:14-115:61)"),'115:8-115:62','testBindings.ceylon'); }
        $$$ct741.assertEquals($$$cl734.String("clio",4),firstNameNode$882.getValue());
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testResolvePropertyInHierachy=testResolvePropertyInHierachy;
testResolvePropertyInHierachy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testResolvePropertyInHierachy']};};

//MethodDef testResolveHandlerInHierachy at testBindings.ceylon (120:0-143:0)
function testResolveHandlerInHierachy(){
    withFragment($$$cl734.$JsCallable((function (fragment$883){
        
        //ClassDef Parent at testBindings.ceylon (122:8-126:8)
        function Parent$884(child, count, $$parent$884){
            $init$Parent$884();
            if ($$parent$884===undefined)$$parent$884=new Parent$884.$$;
            $$parent$884.child_=child;
            if(count===undefined){count=(0);}
            $$parent$884.count_=count;
            return $$parent$884;
        }
        Parent$884.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$icm735.Property,a:{Value:{t:Child$885}}},$an:function(){return[$$$cl734.shared()];}},{$nm:'count',$mt:'prm',$def:1,$t:{t:$$$cl734.Integer},$an:function(){return[$$$cl734.shared(),$$$cl734.variable()];}}],d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Parent']};};
        function $init$Parent$884(){
            if (Parent$884.$$===undefined){
                $$$cl734.initTypeProto(Parent$884,'test.io.cayla.mvvm::testResolveHandlerInHierachy.4.Parent',$$$cl734.Basic);
                (function($$parent$884){
                    
                    //MethodDef foo at testBindings.ceylon (123:12-125:12)
                    $$parent$884.foo=function foo(){
                        var $$parent$884=this;
                        (oldcount$886=$$parent$884.count,$$parent$884.count=oldcount$886.successor,oldcount$886);
                        var oldcount$886;
                    };$$parent$884.foo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$cont:Parent$884,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Parent','$m','foo']};};
                    $$$cl734.defineAttr($$parent$884,'child',function(){return this.child_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:Child$885}}},$cont:Parent$884,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Parent','$at','child']};});
                    $$$cl734.defineAttr($$parent$884,'count',function(){return this.count_;},function(Parent$887){return this.count_=Parent$887;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Parent$884,$an:function(){return[$$$cl734.shared(),$$$cl734.variable()];},d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Parent','$at','count']};});
                })(Parent$884.$$.prototype);
            }
            return Parent$884;
        }
        $init$Parent$884();
        
        //ClassDef Child at testBindings.ceylon (127:8-128:8)
        function Child$885($$child$885){
            $init$Child$885();
            if ($$child$885===undefined)$$child$885=new Child$885.$$;
            return $$child$885;
        }
        Child$885.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],d:['test.io.cayla.mvvm','testResolveHandlerInHierachy','$m','4','$c','Child']};};
        function $init$Child$885(){
            if (Child$885.$$===undefined){
                $$$cl734.initTypeProto(Child$885,'test.io.cayla.mvvm::testResolveHandlerInHierachy.4.Child',$$$cl734.Basic);
            }
            return Child$885;
        }
        $init$Child$885();
        
        //AttributeDecl view at testBindings.ceylon (129:8-134:9)
        var view$888=(bindings$889=$$$icm735.ClassExpression$expression({Type:{t:Parent$884}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('child',Parent$884.$$.prototype.$prop$getChild,{Container:{t:Parent$884},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:Child$885}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:Child$885}}}}).bindTo($$$icm735.getBinders().$with({Value:{t:Child$885}})),content$890=[(bindings$891=$$$icm735.ClassExpression$expression({Type:{t:Parent$884}}).method($$$cl734.AppliedMethod$meta$model(Parent$884.$$.prototype.foo,undefined,{Container:{t:Parent$884},Type:{t:$$$cl734.Anything},Arguments:{t:$$$cl734.Empty}}),{Arguments:{t:$$$cl734.Empty}}).bindTo($$$icm735.getBinders().click({Source:{t:$$$cl734.Nothing}})),$$$icm735.Button$view(undefined,undefined,undefined,bindings$891,undefined))].reifyCeylonType({Element:{t:$$$icm735.Button$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Div$view(undefined,undefined,bindings$889,content$890));
        var bindings$889,content$890,bindings$891;
        
        //AttributeDecl child at testBindings.ceylon (135:8-135:29)
        var child$892=Child$885();
        
        //AttributeDecl parent at testBindings.ceylon (136:8-136:47)
        var parent$893=Parent$884($$$icm735.Property(child$892,{Value:{t:Child$885}}));
        
        //AttributeDecl dom at testBindings.ceylon (137:8-137:39)
        var dom$894=view$888.$bind(parent$893);
        //assert at testBindings.ceylon (138:8-138:58)
        var clickNode$895;
        if (!((clickNode$895=dom$894.getChildren().first)!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists clickNode = dom.getChildren().first\' at testBindings.ceylon (138:14-138:57)"),'138:8-138:58','testBindings.ceylon'); }
        $$$ct741.assertEquals((0),parent$893.count);
        clickNode$895.click();
        $$$ct741.assertEquals((1),parent$893.count);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testResolveHandlerInHierachy=testResolveHandlerInHierachy;
testResolveHandlerInHierachy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testResolveHandlerInHierachy']};};

//MethodDef testResolveListenerInHierachy at testBindings.ceylon (145:0-170:0)
function testResolveListenerInHierachy(){
    withFragment($$$cl734.$JsCallable((function (fragment$896){
        
        //ClassDef Parent at testBindings.ceylon (147:8-153:8)
        function Parent$897(child, count, $$parent$897){
            $init$Parent$897();
            if ($$parent$897===undefined)$$parent$897=new Parent$897.$$;
            $$parent$897.child_=child;
            if(count===undefined){count=(0);}
            $$parent$897.count_=count;
            return $$parent$897;
        }
        Parent$897.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[{$nm:'child',$mt:'prm',$t:{t:$$$icm735.Property,a:{Value:{t:Child$898}}},$an:function(){return[$$$cl734.shared()];}},{$nm:'count',$mt:'prm',$def:1,$t:{t:$$$cl734.Integer},$an:function(){return[$$$cl734.shared(),$$$cl734.variable()];}}],d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Parent']};};
        function $init$Parent$897(){
            if (Parent$897.$$===undefined){
                $$$cl734.initTypeProto(Parent$897,'test.io.cayla.mvvm::testResolveListenerInHierachy.5.Parent',$$$cl734.Basic);
                (function($$parent$897){
                    
                    //MethodDef foo at testBindings.ceylon (148:12-152:12)
                    $$parent$897.foo=function foo(c$899){
                        var $$parent$897=this;
                        if(c$899.equals($$parent$897.child.getValue())){
                            (oldcount$900=$$parent$897.count,$$parent$897.count=oldcount$900.successor,oldcount$900);
                            var oldcount$900;
                        }
                    };$$parent$897.foo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:Child$898},$an:function(){return[];}}],$cont:Parent$897,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Parent','$m','foo']};};
                    $$$cl734.defineAttr($$parent$897,'child',function(){return this.child_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$icm735.Property,a:{Value:{t:Child$898}}},$cont:Parent$897,$an:function(){return[$$$cl734.shared()];},d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Parent','$at','child']};});
                    $$$cl734.defineAttr($$parent$897,'count',function(){return this.count_;},function(Parent$901){return this.count_=Parent$901;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Integer},$cont:Parent$897,$an:function(){return[$$$cl734.shared(),$$$cl734.variable()];},d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Parent','$at','count']};});
                })(Parent$897.$$.prototype);
            }
            return Parent$897;
        }
        $init$Parent$897();
        
        //ClassDef Child at testBindings.ceylon (154:8-155:8)
        function Child$898($$child$898){
            $init$Child$898();
            if ($$child$898===undefined)$$child$898=new Child$898.$$;
            return $$child$898;
        }
        Child$898.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl734.Basic},$ps:[],d:['test.io.cayla.mvvm','testResolveListenerInHierachy','$m','5','$c','Child']};};
        function $init$Child$898(){
            if (Child$898.$$===undefined){
                $$$cl734.initTypeProto(Child$898,'test.io.cayla.mvvm::testResolveListenerInHierachy.5.Child',$$$cl734.Basic);
            }
            return Child$898;
        }
        $init$Child$898();
        
        //AttributeDecl view at testBindings.ceylon (156:8-161:9)
        var view$902=(bindings$903=$$$icm735.ClassExpression$expression({Type:{t:Parent$897}}).attribute($$$cl734.$init$AppliedAttribute$meta$model()('child',Parent$897.$$.prototype.$prop$getChild,{Container:{t:Parent$897},Set:{t:$$$cl734.Nothing},Get:{t:$$$icm735.Property,a:{Value:{t:Child$898}}}}),{Value:{t:$$$icm735.Property,a:{Value:{t:Child$898}}}}).bindTo($$$icm735.getBinders().$with({Value:{t:Child$898}})),content$904=[(bindings$905=$$$icm735.ClassExpression$expression({Type:{t:Parent$897}}).method($$$cl734.AppliedMethod$meta$model(Parent$897.$$.prototype.foo,undefined,{Container:{t:Parent$897},Type:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:Child$898}]}}),{Arguments:{t:'T', l:[{t:Child$898}]}}).bindTo($$$icm735.getBinders().click({Source:{t:Child$898}})),$$$icm735.Button$view(undefined,undefined,undefined,bindings$905,undefined))].reifyCeylonType({Element:{t:$$$icm735.Button$view},Absent:{t:$$$cl734.Null}}),$$$icm735.Div$view(undefined,undefined,bindings$903,content$904));
        var bindings$903,content$904,bindings$905;
        
        //AttributeDecl child at testBindings.ceylon (162:8-162:29)
        var child$906=Child$898();
        
        //AttributeDecl parent at testBindings.ceylon (163:8-163:47)
        var parent$907=Parent$897($$$icm735.Property(child$906,{Value:{t:Child$898}}));
        
        //AttributeDecl dom at testBindings.ceylon (164:8-164:39)
        var dom$908=view$902.$bind(parent$907);
        //assert at testBindings.ceylon (165:8-165:58)
        var clickNode$909;
        if (!((clickNode$909=dom$908.getChildren().first)!==null)) {throw $$$cl734.wrapexc($$$cl734.AssertionException("Assertion failed: \'exists clickNode = dom.getChildren().first\' at testBindings.ceylon (165:14-165:57)"),'165:8-165:58','testBindings.ceylon'); }
        $$$ct741.assertEquals((0),parent$907.count);
        clickNode$909.click();
        $$$ct741.assertEquals((1),parent$907.count);
    }),[{$nm:'fragment',$mt:'prm',$t:{t:$$$icm735.DomNode$dom},$an:function(){return[];}}],{Return:{t:$$$cl734.Anything},Arguments:{t:'T', l:[{t:$$$icm735.DomNode$dom}]}}));
}
exports.testResolveListenerInHierachy=testResolveListenerInHierachy;
testResolveListenerInHierachy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.shared(),$$$ct741.test()];},d:['test.io.cayla.mvvm','testResolveListenerInHierachy']};};

//MethodDef run at run.ceylon (3:0-7:0)
function run(){
    
    //AttributeDecl runner at run.ceylon (5:4-5:94)
    var runner$910=$$$ct741.createTestRunner($$$cl734.Tuple($$$cl734.getModules$meta().find('test.io.cayla.mvvm','0.1.0').findPackage('test.io.cayla.mvvm'),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$cl734.Package$meta$declaration},First:{t:$$$cl734.Package$meta$declaration}}),$$$cl734.Tuple($$$ct741.SimpleLoggingListener(),$$$cl734.getEmpty(),{Rest:{t:$$$cl734.Empty},Element:{t:$$$ct741.SimpleLoggingListener},First:{t:$$$ct741.SimpleLoggingListener}}));
    runner$910.run();
}
exports.run=run;
run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl734.Anything},$ps:[],$an:function(){return[$$$cl734.doc($$$cl734.String("Run the module `test.io.cayla.mvvm`.",36)),$$$cl734.shared()];},d:['test.io.cayla.mvvm','run']};};
exports.$pkg$ans$test$io$cayla$mvvm=function(){return[$$$cl734.shared()];};
exports.$mod$ans$=[];
exports.$mod$imps=function(){return{
'io.cayla.mvvm/0.1.0':function(){return[$$$cl734.shared()];},
'ceylon.test/1.0.0':[]
};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));

import io.cayla.mvvm.dom { DomNode, element }
import io.cayla.mvvm.binding { Binding }

shared alias Bindings => Binding|<Binding[]>;

shared abstract class Element(
    shared String? id,
    shared String name, 
    shared String[] classNames,
    shared Bindings bindings, 
    shared {<String|Element>*} content) extends View() {
    
    shared default {<String->String>*} attrs = {};
    
    "Apply the current template element to the model"
    shared actual ViewContext apply(Object model) {
        DomNode node = element(name);
        ModelContextImpl modelContext = ModelContextImpl(model, null);
        ElementViewContext viewContext = ElementViewContext(modelContext, node, this);
        viewContext.init();
        return viewContext;
    }
}
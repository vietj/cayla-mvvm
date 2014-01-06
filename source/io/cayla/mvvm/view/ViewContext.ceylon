import io.cayla.mvvm.dom { DomNode }
import io.cayla.mvvm { ModelContext }

"""The view context provides interaction with the DOM as defined by the template.
   """
shared interface ViewContext {
    
    "The template as defined associated with this context"
    shared formal Element template;
    
    "The dom node instance of the template"
    shared formal DomNode node;
    
    shared formal variable Boolean createContent;
    
    shared formal void bind(ModelContext model);
}
shared class Section(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "section", classNames, bindings, content) {
}

shared class Header(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "header", classNames, bindings, content) {
}

shared class Footer(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "footer", classNames, bindings, content) {
}

shared class H1(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "h1", classNames, bindings, content) {
}

shared class Div(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "div", classNames, bindings, content) {
}

shared class P(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "p", classNames, bindings, content) {
}

shared class Span(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "span", classNames, bindings, content) {
}

shared class Strong(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "strong", classNames, bindings, content) {
}

shared class Input(
    String? name = null,
    String? id = null,
    String[] classNames = [], 
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "input", classNames, bindings, content) {
}

shared class InputText(
    String name,
    String? id = null,
    String[] classNames = [], 
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "input", classNames, bindings, content) {
    shared actual default {<String->String>*} attrs = {"name"->name, "type"->"text"};
}

shared class Button(
    String? name = null,
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "button", classNames, bindings, content) {
    shared actual default {<String->String>*} attrs {
        if (exists name) {
            return {"name"->name};
        } else {
            return {};
        }
    }
}

shared class A(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    String? href = null,
    {<String|Element>*} content = {})
        extends Element(id, "a", classNames, bindings, content) {
        shared actual default {<String->String>*} attrs {
            if (exists href) {
                return {"href"->href};
            } else {
                return {};
            }
        }
}

shared class CheckBox(
    String? name = null,
    String? id = null,
    String[] classNames = [], 
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "input", classNames, bindings, content) {
    shared actual default {<String->String>*} attrs {
        if (exists name) {
            return {"name"->name,"type"->"checkbox"};
        } else {
            return {"type"->"checkbox"};
        }
    }
}

shared class Ul(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "ul", classNames, bindings, content) {
}

shared class Li(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "li", classNames, bindings, content) {
}

shared class Label(
    String? id = null,
    String[] classNames = [],
    Bindings bindings = [],
    {<String|Element>*} content = {})
        extends Element(id, "label", classNames, bindings, content) {
}
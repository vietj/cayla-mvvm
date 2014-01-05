# Cayla MVVM

Cayla MVVM is a JavaScript module inspired for writing Single Page Application (SPA) in Ceylon that runs in a web browser. It is inspired by [Knockout](http://knockoutjs.com) and a touch of [Angular.js](http://angularjs.org).

Cayla MVVM is a succesfull experiment to show that it is possible and easy to create client side applications using Ceylon in an elegant and productive manner.

## Featuring

### Declarative bindings

Easily associates DOM elements with module using a Ceylon DSL

    Div {
      classNames = ["view"];
      CheckBox {
        classNames = ["toggle"];
        bindings = attribute(`Todo.completed`).bindTo(binders.checked);
       },
      Label {
        bindings = attribute(`Todo.title`).bindTo(binders.text);
      },
      Button {
        classNames = ["destroy"];
        bindings = method(`TodoList.remove`).bindTo(binders.click<Todo>());
      }
    }


### Automatic UI refresh

When your data model's state changes, your UI updates automatically

### Dependency tracking

Implicitly set up chains of relationships between model data to transform and combine it

## Todo MVC

An client side framework would be nothing without an implementation of the classic [TodoMVC](https://rawgithub.com/vietj/cayla-mvvm/master/todomvc.html) ([source](https://github.com/vietj/cayla-mvvm/tree/master/source/io/cayla/todomvc)).

## Overview

### View Model

Model objects are Ceylon classes exposing `io.cayla.mvvm.Observable` state.

A `Property` is a get/set observable:

    class Todo(String _title = "") {
      shared Property<String> title = Property(_title);
      shared Property<Boolean> completed = Property(false);
    }

An `ObservableList` turns a Ceylon `List` into an `Observable`:

    ObservableList<Todo> todos = ObservableList<Todo>();

A `ComputedObservable` turns a Ceylon function into an `Observable`:

    Observable<List<Todo>> filtered = computed(() => LinkedList(todos.filter(mode.getValue().accept)));

### Views

Views are buidl with a DSL that creates DOM objects.

    Footer {
      id = "info";
      P {
        "Part of ", A { href="http://todomvc.com"; "TodoMVC" }
      }
    }

### Binding

Automatic two ways binding between the model view and the view is achieved using dependency tracking. Binding objets encapsulate the binding logic and make it reusable

#### Rich bindings

Value binding

    Input {
      bindings = [ attribute(`TodoList.title`).bindTo(binders.val) ];
    }

---

Checked binding

    CheckBox {
      bindings = attribute(`Todo.completed`).bindTo(binders.checked);
    }

---

CSS binding

    Li {
      bindings = attribute(`Todo.completed`).bindTo(binders.css("completed"));
      ...
    }

---

Foreach binding

    Ul {
       bindings = attribute(`TodoList.filtered`).bindTo(binders.foreach<Todo>());
       Li { ... }
    }

---

Click binding

    Button {
      classNames = ["destroy"];
      bindings = method(`TodoList.remove`).bindTo(binders.click<Todo>());
    }

---

and many more...

#### Extensible bindings

Custom bindings can be provided by implementing the `Binder` interface:

    shared object enter satisfies Binder<Anything()> {
      shared actual void init(Anything() val, BindingContext context) {
        void f(DomEvent event) {
          assert(exists v = event.target.getValue());
          if (event.keyCode == 13) {
            val();
          }
        }
        context.node.addEventHandler("keyup", f);
      }
   }

### Observable

Observables provides automatic dependency tracking providing the glue between the Model and the View. The `Observable` interface allows to subscribe for notifications and to obtain the most recent computed value:

    shared interface Observable<out Value> given Value satisfies Object {

      shared formal Value getValue();

      shared formal Subscription subscribe(Anything(Value) subscriber);
    }

The `Observable` interface is implemented by the `Property` object, the `ObservableList` and the `ComputedObservable` interface. Custom implementations can be provided for covering specific needs.

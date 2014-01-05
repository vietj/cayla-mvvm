import io.cayla.mvvm.dom { DomNode, byId }
import io.cayla.mvvm { ... }
import io.cayla.mvvm.view { Input, Ul, Li, Label, CheckBox, Div, Button, Span, Section, Header, H1, Footer, Strong, A, P }
import io.cayla.mvvm.expression { ... }
import ceylon.collection { LinkedList }
class TodoList() {
    
    shared Property<String> title = Property("");
    shared Property<Mode> mode = Property<Mode>(all);
    shared ObservableList<Todo> todos = ObservableList<Todo>();
    shared Observable<List<Todo>> filtered = computed(() => LinkedList(todos.filter(mode.getValue().accept)));
    shared Observable<Integer> completedCount = computed(() => todos.count((Todo todo) => todo.completed.getValue()));
    shared Observable<Integer> remainingCount = computed(() => todos.size - completedCount.getValue());
    shared Observable<String> items = computed(() => remainingCount.getValue() > 1 then "items" else "item");
    shared Observable<Boolean> hasCompleted = computed(() => completedCount.getValue() > 0);
    shared Observable<Boolean> hasTodos = computed(() => todos.getValue().size > 0);
    shared Observable<Boolean> allMode = computed(() => mode.getValue() == all);
    shared Observable<Boolean> activeMode = computed(() => mode.getValue() == active);
    shared Observable<Boolean> completedMode = computed(() => mode.getValue() == completed);
    
    shared void create() {
        value t = title.getValue().trimmed;
        if (t.size > 0) {
            todos.add(Todo(t));
            title.setValue("");
        }
    }

    shared void showAll() {
        mode.setValue(all);
    }
    
    shared void showActive() {
        mode.setValue(active);
    }
    
    shared void showCompleted() {
        mode.setValue(completed);
    }
    
    shared void remove(Todo todo) {
        todos.removeElement(todo);
    }
    
    shared void removeCompleted() {
        value toRemove = LinkedList(todos.filter((Todo todo) => todo.completed.getValue()));
        for (completed in toRemove) {
            todos.removeElement(completed);
        }
    }

    shared void init() {
        
        value a = Div {
            Section {
                id = "todoapp";
                Header {
                    id = "header";
                    H1 { "todos" },
                    Input {
                        id = "new-todo";
                        name = "title";
                        bindings = [ attribute(`TodoList.title`).bindTo(binders.val), method(`TodoList.create`).bindTo(binders.enter) ];
                    }
                },
                Section {
                    id = "main";
                    Ul {
                        id = "todo-list";
                        bindings = attribute(`TodoList.filtered`).bindTo(binders.foreach<Todo>());
                        Li {
                            bindings = attribute(`Todo.completed`).bindTo(binders.css("completed"));
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
                        }
                    }
                },
                Footer {
                    id = "footer";
                    bindings = attribute(`TodoList.hasTodos`).bindTo(binders.visible());
                    Span {
                        id = "todo-count";
                        Strong {
                            bindings = attribute(`TodoList.remainingCount`).bindTo(binders.text);
                        },
                        " ",
                        Span {
                            bindings = attribute(`TodoList.items`).bindTo(binders.text);
                        },
                        " left"
                    },
                    Ul {
                        id = "filters";
                        Li {
                            A {
                                bindings = [attribute(`TodoList.allMode`).bindTo(binders.css("selected")), method(`TodoList.showAll`).bindTo(binders.click())];
                                href = "#";
                                "All" 
                            }
                        },
                        Li {
                            A {
                                bindings = [attribute(`TodoList.activeMode`).bindTo(binders.css("selected")), method(`TodoList.showActive`).bindTo(binders.click())];
                                href = "#";
                                "Active"
                            }
                        },
                        Li {
                            A {
                                bindings = [attribute(`TodoList.completedMode`).bindTo(binders.css("selected")), method(`TodoList.showCompleted`).bindTo(binders.click())];
                                href = "#";
                                "Completed"
                            }
                        }
                    },
                    Button {
                        id = "clear-completed";
                        bindings = [ attribute(`TodoList.hasCompleted`).bindTo(binders.visible()), method(`TodoList.removeCompleted`).bindTo(binders.click())];
                        "Clear completed (", Span { bindings = attribute(`TodoList.completedCount`).bindTo(binders.text); }, ")"
                    }
                }
            },
            Footer {
                id = "info";
                P {
                    "Part of ", A { href="http://todomvc.com"; "TodoMVC" }
                }
            }
        };
        
        DomNode formNode = a.bind(this);
        byId("body").addChild(formNode);
    }
}
import io.cayla.mvvm {
    Property,
    ObservableList
}
import io.cayla.mvvm.expression { ... }
import io.cayla.mvvm.dom { DomNode }
import io.cayla.mvvm.view {
    InputText,
    Ul,
    Li,
    Div,
    Button
}
import ceylon.test { ... }
import io.cayla.mvvm.binding { Binding, binders }

class Person(shared Property<String> firstName, shared Property<String> lastName) {
}

class Group(shared ObservableList<Person> users) {    
}

class Car(shared Property<String> name, shared Property<Person> owner) {
}

AttributeExpression<Property<String>,Car> carNameExpr = ClassExpression<Car>().attribute(`Car.name`);
Binding carNameBinding = carNameExpr.bindTo(binders.val);
AttributeExpression<Property<Person>, Car> carOwnerExpr = ClassExpression<Car>().attribute(`Car.owner`);
Binding carOwnerBinding = carOwnerExpr.bindTo(binders.with<Person>());
AttributeExpression<Property<String>,Person> firstNameExpr = ClassExpression<Person>().attribute(`Person.firstName`);
Binding firstNameBinding = firstNameExpr.bindTo(binders.val);
AttributeExpression<Property<String>,Person> lastNameExpr = ClassExpression<Person>().attribute(`Person.lastName`);
Binding lastNameBinding = lastNameExpr.bindTo(binders.val);

shared test void testStringPropertyBinding() {
    withFragment(void (DomNode fragment) {
        InputText element = InputText {
            name = "foo";
            bindings = firstNameBinding;
        };
        Person user = Person(Property("julien"), Property("viet"));
        DomNode node = element.apply(user).node;
        DomNode added = fragment.addChild(node);
        assertEquals("julien", added.getValue());
        user.firstName.setValue("whatever");
        assertEquals("whatever", added.getValue());
    });
}

shared test void testWith() {
    withFragment(void (DomNode fragment) {
        value view = Div {
            bindings = carOwnerBinding;
            InputText {
                bindings = firstNameBinding;
                name = "firstName";
            },
            InputText {
                bindings = lastNameBinding;
                name = "lastName";
            }
        };
        Person julien = Person(Property("julien"), Property("viet"));
        Car clio = Car(Property("clio"), Property(julien));
        DomNode dom = view.apply(clio).node;
        assert(exists firstNameNode = dom.getChildren().first);
        assert(exists lastNameNode = dom.getChildren().rest.first);
        assertEquals("julien", firstNameNode.getValue());
        assertEquals("viet", lastNameNode.getValue());
    });
}

shared test void testForEach() {
    
    withFragment(void (DomNode fragment) {
        AttributeExpression<ObservableList<Person>,Group> a = ClassExpression<Group>().attribute(`Group.users`);
        value b = a.bindTo(binders.foreach<Person>());
        ObservableList<Person> users = ObservableList<Person>();
        Person foo = Person(Property("foo"), Property(""));
        users.add(foo);
        Person bar = Person(Property("bar"), Property(""));
        users.add(bar);
        Group group = Group(users);
        Ul element = Ul {
            bindings = b;
            Li {
                InputText { name = "foo"; bindings = firstNameBinding; } 
            }
        };
        DomNode node = element.apply(group).node;
        DomNode added = fragment.addChild(node);
        assert(exists fooLi = added.getChildren().first);
        assertEquals(1, fooLi.getChildren().size);
        assert(exists fooInput = fooLi.getChildren().first);
        fooInput.setValue("foo_changed");
        fooInput.dispatchEvent("keyup");
        assertEquals("foo_changed", foo.firstName.getValue());
        Person juu = Person(Property("juu"), Property(""));
        users.add(juu);
        assertEquals(3, added.getChildren().size);
        users.removeElement(bar);
        assertEquals(2, added.getChildren().size);
        users.clear();
        assertEquals(0, added.getChildren().size);
    });
    
}

shared test void testResolvePropertyInHierachy() {
    withFragment(void (DomNode fragment) {
        value view = Div {
            bindings = carOwnerBinding;
            InputText {
                bindings = carNameBinding;
                name = "carName";
            }
        };
        Person julien = Person(Property("julien"), Property("viet"));
        Car clio = Car(Property("clio"), Property(julien));
        DomNode dom = view.apply(clio).node;
        assert(exists firstNameNode = dom.getChildren().first);
        assertEquals("clio", firstNameNode.getValue());
    });
}

shared test void testResolveHandlerInHierachy() {
    withFragment(void (DomNode fragment) {
        class Parent(shared Property<Child> child, shared variable Integer count = 0) {
            shared void foo() {
               count++;
            }
        }
        class Child() {
        }
        value view = Div {
            bindings = ClassExpression<Parent>().attribute(`Parent.child`).bindTo(binders.with<Child>());
            Button {
                bindings = ClassExpression<Parent>().method(`Parent.foo`).bindTo(binders.click());
            }
        };
        Child child = Child();
        Parent parent = Parent(Property(child));
        DomNode dom = view.apply(parent).node;
        assert(exists clickNode = dom.getChildren().first);
        assertEquals(0, parent.count);
        clickNode.click();
        assertEquals(1, parent.count);
    });
}

shared test void testResolveListenerInHierachy() {
    withFragment(void (DomNode fragment) {
        class Parent(shared Property<Child> child, shared variable Integer count = 0) {
            shared void foo(Child c) {
                if (c == child.getValue()) {
                    count++;
                }
            }
        }
        class Child() {
        }
        value view = Div {
            bindings = ClassExpression<Parent>().attribute(`Parent.child`).bindTo(binders.with<Child>());
            Button {
                bindings = ClassExpression<Parent>().method(`Parent.foo`).bindTo(binders.click<Child>());
            }
        };
        Child child = Child();
        Parent parent = Parent(Property(child));
        DomNode dom = view.apply(parent).node;
        assert(exists clickNode = dom.getChildren().first);
        assertEquals(0, parent.count);
        clickNode.click();
        assertEquals(1, parent.count);
    });
}
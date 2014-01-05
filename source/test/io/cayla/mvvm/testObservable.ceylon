import ceylon.test { ... }
import io.cayla.mvvm { ... }
import ceylon.collection { LinkedList }

shared test void testComputedObservable() {
    variable Boolean mode = true;
    value firstName = Property("dale");
    value lastName = Property("cooper");
    value name = computed(() => mode then "``firstName.getValue()`` ``lastName.getValue()``" else "``firstName.getValue()``");
    variable Integer count = 0;
    name.subscribe((String s) => count++);
    assertEquals("dale cooper", name.getValue());
    firstName.setValue("sammy");
    assertEquals(1, count);
    assertEquals("sammy cooper", name.getValue());
    mode = false;
    assertEquals("sammy cooper", name.getValue());
    lastName.setValue("milouze");
    assertEquals("sammy", name.getValue());
    assertEquals(2, count);
    firstName.setValue("scooby");
    assertEquals("scooby", name.getValue());
    assertEquals(3, count);
}

shared test void testObserveComputedObservable() {
    value foo = Property("foo");
    value bar = computed(() => "<bar>``foo.getValue()``</bar>");
    value juu = computed(() => "<juu>``bar.getValue()``</juu>");
    assertEquals("<juu><bar>foo</bar></juu>", juu.getValue());
    foo.setValue("oof");
    assertEquals("<bar>oof</bar>", bar.getValue());
    assertEquals("<juu><bar>oof</bar></juu>", juu.getValue());
}

shared test void testComputedObservableTriangle() {
    variable Integer count = 0;
    value foo = Property("foo");
    value bar = computed(() => "<bar>``foo.getValue()``</bar>");
    value juu = computed {
        String compute() {
            count++;
            return "<juu>``foo.getValue()``</juu><juu>``bar.getValue()``</juu>";
        }
    };
    assertEquals(0, count);
    assertEquals("<juu>foo</juu><juu><bar>foo</bar></juu>", juu.getValue());
    assertEquals(1, count);
    foo.setValue("oof");
    assertEquals("<juu>oof</juu><juu><bar>oof</bar></juu>", juu.getValue());
    assertEquals(3, count);
}

shared test void testComputedObservableCycle() {
    value foo = Property("foo");
    variable String() exp = () => "const";
    value bar = computed(() => "``exp()`` ``foo.getValue()``");
    value juu = computed(() => "``bar.getValue()``");
    exp = () => juu.getValue();
    try {
        bar.getValue();
        fail();
    } catch (CyclicDependencyException expected) {
    }
}

shared test void testComputedObservableList() {
    value list = ObservableList<String>();
    list.add("aa");
    list.add("a");
    list.add("bb");
    list.add("b");
    value filtered = computed(() => LinkedList(list.getValue().filter((String elem) => elem.size % 2 == 0)));
    value count = computed(() => filtered.getValue().size);
    assertEquals(LinkedList({"aa","bb"}), filtered.getValue());
    assertEquals(2, count.getValue());
    log.debug("filtered list is ``filtered``");
    log.debug("count list is ``count``");
    list.add("cc");
    assertEquals(LinkedList({"aa","bb","cc"}),filtered.getValue());
    assertEquals(3, count.getValue());
    list.removeElement("aa");
    assertEquals(LinkedList({"bb","cc"}),filtered.getValue());
}

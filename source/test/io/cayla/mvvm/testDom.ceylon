import io.cayla.mvvm.dom { DomNode, querySelectorAll, DomEvent, element }
import ceylon.test { test, assertTrue, assertFalse, assertEquals }

shared test void testQuerySelectorAll() {
    withFragment(void (DomNode fragment) {
        value pre = fragment.addElement("pre");
        pre.addClass("foo");
        value nodes = querySelectorAll(".foo");
        assertEquals(LazyList<DomNode>({pre}), LazyList<DomNode>(nodes));
    });
}

shared test void testQuerySelectorAllWrap() {
    withFragment(void (DomNode fragment) {
        value nodes = querySelectorAll("body");
        assertEquals(1, nodes.size);
    });
}

shared test void testMatchesSelector() {
    withFragment(void (DomNode fragment) {
        value pre = fragment.addElement("pre");
        pre.addClass("foo");
        assertTrue(pre.matchesSelector("pre"));
        assertTrue(pre.matchesSelector(".foo"));
        assertTrue(pre.matchesSelector("pre.foo"));
        assertFalse(pre.matchesSelector("div"));
        assertFalse(pre.matchesSelector("div.foo"));
        assertFalse(pre.matchesSelector("pre.bar"));
        assertFalse(pre.matchesSelector(".bar"));
        assertFalse(pre.matchesSelector("div.bar"));
    });
}

shared test void testEventDelegation() {
    withFragment(void (DomNode fragment) {
        DomNode ul = fragment.addElement("ul");
        DomNode li = ul.addElement("li");
        DomNode div = li.addElement("div");
        variable Integer count = 0;
        void f(DomEvent event) {
            count++;
        }
        li.addEventHandler("click", f, ".foo");
        ul.click();
        assertEquals(0, count);
        li.click();
        assertEquals(0, count);
        div.click();
        assertEquals(0, count);
        div.addClass("foo");
        div.click();
        assertEquals(1, count);
    });
}

shared test void testInsertBefore() {
    withFragment(void (DomNode fragment) {
        DomNode div = fragment.addElement("div");
        DomNode span = div.addElement("span");
        DomNode h1 = element("h1");
        div.insertBefore(h1, span);
        variable value children = [*div.getChildren()];
        assertEquals(2, children.size);
        assertEquals(h1, children[0]);
        assertEquals(span, children[1]);
        DomNode h2 = element("h2");
        div.insertBefore(h2);
        children = [*div.getChildren()];
        assertEquals(3, children.size);
        assertEquals(h1, children[0]);
        assertEquals(span, children[1]);
        assertEquals(h2, children[2]);
        div.insertBefore(span);
        children = [*div.getChildren()];
        assertEquals(3, children.size);
        assertEquals(h1, children[0]);
        assertEquals(h2, children[1]);
        assertEquals(span, children[2]);
    });
}

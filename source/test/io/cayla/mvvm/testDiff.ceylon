import ceylon.test { ... }
import io.cayla.mvvm.diff { Diff, same, added, removed }

shared test void testDiff1() {
    value a = "";
    value b = "a";
    value i = Diff<Character>(a, b);
    assertEquals(['a', added], i.next());
    assertEquals(finished, i.next());
}

shared test void testDiff2() {
    value a = "a";
    value b = "";
    value i = Diff<Character>(a, b);
    assertEquals(['a', removed], i.next());
    assertEquals(finished, i.next());
}

shared test void testDiff3() {
    value a = "a";
    value b = "a";
    value i = Diff<Character>(a, b);
    assertEquals(['a', same], i.next());
    assertEquals(finished, i.next());
}

shared test void testDiff4() {
    value a = "b";
    value b = "ab";
    value i = Diff<Character>(a, b);
    assertEquals(['a', added], i.next());
    assertEquals(['b', same], i.next());
    assertEquals(finished, i.next());
}

shared test void testDiff5() {
    value a = "ab";
    value b = "b";
    value i = Diff<Character>(a, b);
    assertEquals(['a', removed], i.next());
    assertEquals(['b', same], i.next());
    assertEquals(finished, i.next());
}

shared test void testDiff6() {
    value a = "abcdef";
    value b = "a_b_e_";
    value i = Diff<Character>(a, b);
    assertEquals(['a', same], i.next());
    assertEquals(['_', added], i.next());
    assertEquals(['b', same], i.next());
    assertEquals(['c', removed], i.next());
    assertEquals(['d', removed], i.next());
    assertEquals(['_', added], i.next());
    assertEquals(['e', same], i.next());
    assertEquals(['f', removed], i.next());
    assertEquals(['_', added], i.next());
    assertEquals(finished, i.next());
}
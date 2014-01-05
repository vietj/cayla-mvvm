import ceylon.test { ... }
import io.cayla.mvvm { ... }
import io.cayla.mvvm.expression { ... }
import io.cayla.mvvm.dom { ... }
import ceylon.language { List }

shared class Meal(shared String name, shared Integer price) {
}

shared class SeatReservation(shared String name, shared Meal initialMeal) {
}

shared class ReservationsViewModel(shared List<SeatReservation> seats) {
}

shared class ViewModel(shared List<SeatReservation> seats) {
}

shared class AnHandler() {
    shared variable Integer counter = 0;
    shared void m() {
        counter++;
    }
}

shared test void testExpression() {
    SeatReservation reservation = SeatReservation("julien", Meal("pasta", 10));
    ViewModel vm = ViewModel(LazyList<SeatReservation>({reservation}));
    value e1 = ClassExpression<SeatReservation>().attribute(`SeatReservation.initialMeal`).attribute(`Meal.price`);
    value v1 = e1.traverse(reservation);
    assertEquals(10, v1);
    AnHandler handler = AnHandler();
    value e4 = ClassExpression<AnHandler>().method(`AnHandler.m`);
    value v4 = e4.traverse(handler);
    assertEquals(0, handler.counter);
    v4();
    assertEquals(1, handler.counter);
}

shared test void testPropertyChange() {
    value p = Property("foo");
    void listener(String prop) {
        assertEquals("bar", prop);
    }
    p.subscribe(listener);
    p.setValue("bar");
}

abstract class Mode() of active | all | completed {
    shared formal Boolean accept(Todo todo);
}
object active extends Mode() {
    shared actual Boolean accept(Todo todo) => !todo.completed.getValue();
}
object all extends Mode() {
    shared actual Boolean accept(Todo todo) => true;
}
object completed extends Mode() {
    shared actual Boolean accept(Todo todo) => todo.completed.getValue();
}
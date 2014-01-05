import io.cayla.mvvm { Property }
class Todo(String _title = "") {
    
    shared Property<String> title = Property(_title);
    shared Property<Boolean> completed = Property(false);
    
    
}
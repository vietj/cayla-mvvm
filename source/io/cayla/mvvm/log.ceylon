shared object log {
    shared void debug(String message) {
        dynamic {
            if (isUndefined(console.debug)) {
                print("[DEBUG] ``message``");
            } else {
                console.debug(message);
            }
        }
    }
}
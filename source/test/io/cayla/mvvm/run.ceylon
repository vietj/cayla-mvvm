import ceylon.test { ... }

"Run the module `test.io.cayla.mvvm`."
shared void run() {
    value runner = createTestRunner([`package test.io.cayla.mvvm`], [SimpleLoggingListener()]);
    runner.run();
}
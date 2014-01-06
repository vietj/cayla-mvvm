import ceylon.collection { HashMap }
shared ComputedObservable<Value> computed<Value>(Value() compute)
        given Value satisfies Object
        => ComputedObservable(compute);

"""A computed observable turns a closure into an observable of the value produced by the function. The computed
   observable can depend on one or more other observables and it will automatically update whenever any of these
   dependencies change.
   """
shared class ComputedObservable<Value>(Value() closure) satisfies Observable<Value> given Value satisfies Object {

    value subscribers = Subscribers<Value>();
    variable Value? evaluation = null;
    variable Boolean evaluating = false;
    value dependencies = HashMap<Observable<Object>, Subscription>();
    shared actual Subscription subscribe(Anything(Value) subscriber) => subscribers.subscribe(subscriber);

    Value? evaluate() {
        if (evaluating) {
            return null;
        } else {
            log.debug("Computed ``this``:  starting evaluation");
            evaluating = true;
            Value e;
            Set<Observable<Object>> observed;
            try {
                dependant.begin();
                e = closure();
            }
            finally {
                observed = dependant.end();
                evaluating = false;
                log.debug("Computed ``this``: stopping evaluation");
            }
            for (dependency->subscription in HashMap(dependencies)) {
                if (!observed.contains(dependency)) {
                    log.debug("Computed ``this``: disposing subscription ``subscription``");
                    dependencies.remove(dependency);
                    subscription.dispose();
                }
            }
            for (o in observed) {
                if (exists dependency = dependencies[o]) {
                    //
                } else {
                    void update(Object o) {
                        Value? e = evaluate();
                        if (exists e) {
                            evaluation = e;
                            subscribers.notify(e);
                        } else {
                            // This shall be a cyclic dependency
                        }
                    }
                    value subscription = o.subscribe(update);
                    log.debug("Computed ``this``: subscribed ``subscription`` to ``o``");
                    dependencies.put(o, subscription);
                }
            }
            return e;
        }
    }
    
    shared actual Value getValue() {
        dependant.report(this);
        if (exists e = evaluation) {
            log.debug("Computed ``this``: returning cached evaluation ``e``");
            return e;
        } else {
            Value? e = evaluate();
            if (exists e) {
                evaluation = e;
                return e;
            } else {
                throw CyclicDependencyException();
            }
        }
    }
}
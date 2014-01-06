
"""A subscription, it can be disposed to terminate the effect of the subscriptio."""
shared interface Subscription {
    
    "Dispose the subscription"
    shared formal void dispose();
    
}
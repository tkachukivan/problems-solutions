// https://bigfrontend.dev/problem/create-an-Observable
class Observable {

    constructor(setup) {
        this.setup = setup;
    }

    subscribe(subscriber) {
        let isSubscribed = true;
        const subscription = {
            next(value) {
                if (!isSubscribed) return;
                if (typeof subscriber === 'function') subscriber(value);
                else if (subscriber.next) subscriber.next(value);
            },
            error(error) {
                if (!isSubscribed) return;
                this.unsubscribe();
                if (subscriber.error) subscriber.error(error);
            },
            complete() {
                if (!isSubscribed) return;
                this.unsubscribe();
                if (subscriber.complete) subscriber.complete();
            },
            unsubscribe() {
                isSubscribed = false;
            }
        }

        this.setup(subscription);

        return subscription;
    }
}
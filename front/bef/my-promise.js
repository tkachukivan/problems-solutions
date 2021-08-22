// https://bigfrontend.dev/problem/create-your-own-Promise
const statuses = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
}

class MyPromise {
    constructor(executor) {
        // your code here
        this.status = statuses.PENDING;
        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch (error) {
            this._reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        // your code here
        const isOnFulfilledFunction = typeof onFulfilled === 'function';
        const isOnRejectedFunction = typeof onRejected === 'function';

        this.onFulfilled = isOnFulfilledFunction ? onFulfilled : (value) => value;
        this.onRejected = isOnRejectedFunction ? onRejected : (error) => { throw error };

        return new MyPromise((resolve, reject) => {
            this.thenPromiseResolve = resolve;
            this.thenPromiseReject = reject;
        })
    }

    catch(onRejected) {
        // your code here
        return this.then(null, onRejected);
    }

    _resolve(value) {
        if (this.status !== statuses.PENDING) return;
        this.status = statuses.FULFILLED;
        this.result = value;

        queueMicrotask(() => {
            if (this.onFulfilled === undefined) return;

            try {
                const returnValue = this.onFulfilled(this.result);
                const isReturnValuePromise = returnValue instanceof MyPromise;

                if (!isReturnValuePromise) {
                    this.thenPromiseResolve(returnValue);
                } else {
                    returnValue.then(this.thenPromiseResolve, this.thenPromiseReject);
                }
            } catch (error) {
                this.thenPromiseReject(error);
            }
        });
    }

    _reject(error) {
        if (this.status !== statuses.PENDING) return;
        this.status = statuses.REJECTED;
        this.result = error;

        queueMicrotask(() => {
            if (this.onRejected === undefined) return;

            try {
                const returnValue = this.onRejected(this.result);
                const isReturnValuePromise = returnValue instanceof MyPromise;

                if (!isReturnValuePromise) {
                    this.thenPromiseResolve(returnValue);
                } else {
                    returnValue.then(
                        this.thenPromiseResolve,
                        this.thenPromiseReject,
                    );
                }
            } catch (error) {
                this.thenPromiseReject(error);
            }
        });
    }

    static resolve(value) {
        // your code here
        const isValuePromise = value instanceof MyPromise;

        if (isValuePromise) {
            return value;
        }

        return new MyPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(value) {
        // your code here
        return new MyPromise((_, reject) => {
            reject(value);
        });
    }
}

class MyPromise {
    constructor(executor) {
        try {
            executor(this._resolve.bind(this), this._reject.bind(this))
        } catch (e) {
            this._reject(e)
        }
    }

    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled;
        this.onRejected = this.onRejected || onRejected;
        return new MyPromise((resolve, reject) => {
            this.onFulfilledResolve = resolve;
            this.onFulfilledReject = reject;
        });
    }

    catch(onRejected) {
        this.onRejected = onRejected;
        return new MyPromise((resolve, reject) => {
            this.onRejectedResolve = resolve;
            this.onRejectedReject = reject;
        });
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(value) {
        return new MyPromise((resolve, reject) => reject(value));
    }

    _resolve(value) {
        if (this.fulfilled) return;
        this.fulfilled = true;
        setTimeout(() => {
            if (!this.onFulfilled && !this.onRejectedResolve) return;
            if (!this.onFulfilled) return this.onRejectedResolve(value);

            try {
                const result = this.onFulfilled(value);
                if (result instanceof MyPromise) {
                    result.then(this.onFulfilledResolve?.bind(this))
                    result.catch(this.onFulfilledReject?.bind(this))
                } else {
                    setTimeout(this.onFulfilledResolve?.bind(this, result))
                }
            } catch (error) {
                setTimeout(this.onFulfilledReject?.bind(this, error));
            }
        })
    }

    _reject(error) {
        if (this.fulfilled) return;
        this.fulfilled = true;
        setTimeout(() => {
            if (!this.onRejected && !this.onFulfilledReject) return;
            if (!this.onRejected) return this.onFulfilledReject(error);

            try {
                const result = this.onRejected(error);
                if (result instanceof MyPromise) {
                    result.then(this.onFulfilledResolve?.bind(this))
                    result.catch(this.onFulfilledReject?.bind(this))
                } else {
                    setTimeout(this.onRejectedResolve?.bind(this, result));
                }
            } catch (error) {
                setTimeout(this.onRejectedReject?.bind(this, error));
            }
        })
    }
}

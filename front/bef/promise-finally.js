/**
 * https://bigfrontend.dev/problem/implement-Promise-prototype-finally
 * @param {Promise<any>} promise
 * @param {() => void} onFinally
 * @returns {Promise<any>}
 */
function myFinally(promise, onFinally) {
    // your code here
    return new Promise((resolve, reject) => {
        promise.then((value) => {
            try {
                const result = onFinally();
                if (result instanceof Promise) {
                    result.then(() => resolve(value), (error) => reject(error));
                } else {
                    resolve(value);
                }
            } catch (error) {
                reject(error);
            }
        }, (error) => {
            const result = onFinally();
            if (result instanceof Promise) {
                result.then(undefined, (error) => reject(error));
            } else {
                reject(error);
            }
        })
    })
}


// compact
function myFinally(promise, onFinally) {
    return promise.then((value) => {
        return Promise.resolve(onFinally())
            .then(() => value)
    }, (reason) => {
        return Promise.resolve(onFinally())
            .then(() => Promise.reject(reason))
    })
}
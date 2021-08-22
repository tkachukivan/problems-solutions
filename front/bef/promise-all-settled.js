
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    // your code here
    return Promise.all(promises.map((promise) => {
        if (!(promise instanceof Promise)) return Promise.resolve({ status: 'fulfilled', value: promise });
        return promise.then((value) => ({ status: 'fulfilled', value }), (reason) => ({ status: 'rejected', reason }));
    }));
}


// without all
function allSettled(promises) {
    if (promises.length === 0) {
        return Promise.resolve([])
    }

    const results = []
    let completed = 0
    return new Promise((resolve) => {
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then(value => {
                    results[i] = { status: 'fulfilled', value }
                })
                .catch(reason => {
                    results[i] = { status: 'rejected', reason }
                })
                .finally(() => {
                    completed++
                    if (completed === promises.length) {
                        resolve(results)
                    }
                })
        }
    })
}
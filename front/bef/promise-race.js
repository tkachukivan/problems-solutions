/**
 * https://bigfrontend.dev/problem/implement-Promise-race
 * @param {Array<Promise>} promises
 * @returns {Promise}
 */
function race(promises) {
    let isSettled = false
    return new Promise((resolve, reject) => {
        promises.forEach(promise => promise.then((data) => {
            if (!isSettled) {
                resolve(data)
                isSettled = true
            }
        }, (error) => {
            if (!isSettled) {
                reject(error)
                isSettled = true
            }
        }))
    })
}

function race(promises) {
    return new Promise((resolve, reject) => {
        for (const item of promises) {
            if (typeof item === 'function' || item instanceof Promise) item.then(resolve, reject);
            else resolve(item);
        }
    });
}
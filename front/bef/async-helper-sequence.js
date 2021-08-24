
/*
https://bigfrontend.dev/problem/implement-async-helper-sequence
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
    // your code here
    return async function (callback, num) {
        let nextArg = num;

        for (const func of funcs) {
            const [error, result] = await new Promise((resolve) => {
                func((err, result) => resolve([err, result]), nextArg);
            });
            if (error) {
                callback(error);
                return;
            }
            nextArg = result;
        }

        callback(undefined, nextArg)
    }
}

// recursive
function sequence(funcs) {
    let idx = 0

    return function pipe(callback, data) {
        // all funcs are executed
        if (idx > funcs.length - 1) {
            return callback(undefined, data)
        }

        const cb = function (error, newData) {
            if (error) {
                return callback(error, undefined)
            }

            idx += 1
            pipe(callback, newData)
        }

        funcs[idx](cb, data);
    }
}

// with promisify

function sequence(funcs) {
    const promiseFuncs = funcs.map(promisify)

    return function (callback, input) {
        // init promise
        let promise = Promise.resolve(input)

        // add all promiseFuncs to promise
        promiseFuncs.forEach((promiseFunc) => {
            promise = promise.then(promiseFunc)
        })

        // handle resolved or rejected promise
        promise.then((data) => {
            callback(undefined, data)
        }).catch(callback)
    }
}

function promisify(callback) {
    return function (input) {
        return new Promise((resolve, reject) => {
            callback((err, data) => {
                if (err) {
                    reject(err)
                    return
                }

                resolve(data)
            }, input)
        })
    }
}
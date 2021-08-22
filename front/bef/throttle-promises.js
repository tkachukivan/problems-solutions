
/**
 * https://bigfrontend.dev/problem/throttle-Promises
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max) {
    // your code here
    return new Promise((resolve, reject) => {
        const n = funcs.length;
        const results = new Array(n);
        let promisesResolved = 0;
        let nextIndex = 0;
        const onResolved = (index) => (result) => {
            results[index] = result;
            promisesResolved++;
            if (promisesResolved === n) {
                resolve(results);
            } else if (nextIndex < n) {
                funcs[nextIndex]().then(onResolved(nextIndex), reject);
                nextIndex++;
            }
        }

        const queueCap = Math.min(n, max);
        for (; nextIndex < queueCap; nextIndex++) {
            funcs[nextIndex]().then(onResolved(nextIndex), reject);
        }
    });
}

/**
 * https://bigfrontend.dev/problem/implement-Promise-all
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
 function all(promises) {
    // your code here
    return new Promise((resolve, reject) => {
      const n = promises.length;
      if (n === 0) resolve([]);
      const values = new Array(n);
      let resolved = 0;
      const onResolve = (index) => (value) => {
        resolved++;
        values[index] = value;
        if (resolved === n) resolve(values);
      }
  
      promises.forEach((promise, index) => {
        if (promise instanceof Promise) {
          promise.then(onResolve(index), reject);
        } else {
          onResolve(index)(promise);
        }
      });
    });
  }
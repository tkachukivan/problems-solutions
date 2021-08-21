
/**
 * https://bigfrontend.dev/problem/implement-Promise-any
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function any(promises) {
    // your code here
    if (!promises || !promises.length) {
      return Promise.reject(new AggregateError('No Promise in Promise.any was resolved', []));
    }
  
    for (const item of promises) {
      if (!(item instanceof Promise)) return Promise.resolve(item);
    }
  
    return new Promise((resolve, reject) => {
      const errors = [];
      let errorsCount = 0
      let isResolved = false;
      const rejected = (index) => (error) => {
        errors[index] = error;
        errorsCount++;
        if (errorsCount === promises.length) {
          reject(new AggregateError('No Promise in Promise.any was resolved', errors));
        }
      }
      const resolved = (value) => {
        if (isResolved) return;
        isResolved = true;
        resolve(value);
      }
  
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(resolved, rejected(i));
      }
    });
  }
/**
 * https://bigfrontend.dev/problem/implement-curry
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {
    function inner(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return (...newArgs) => inner.apply(this, args.concat(newArgs));
      }
    }
  
    return inner;
  }
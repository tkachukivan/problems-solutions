/**
 * https://bigfrontend.dev/problem/implement-general-memoization-function
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver = (...arguments) => arguments.join('_')) {
    // your code here
    const cache = new Map();

    return function (...arguments) {
        const key = resolver(...arguments);
        if (cache.has(key)) return cache.get(key);
        const result = func.apply(this, arguments);

        cache.set(key, result);

        return result;
    }
}
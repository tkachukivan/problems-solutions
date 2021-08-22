/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
    // your code here
    const obj = Object.create(constructor.prototype);
    const result = constructor.apply(obj, args);
    if (result && typeof result === 'object') {
        return result;
    }

    return obj;
}
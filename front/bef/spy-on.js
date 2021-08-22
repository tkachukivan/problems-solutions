
/**
 * https://bigfrontend.dev/problem/implement-spyOn
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
    // your code here
    if (!obj[methodName]) throw Error('method does not exist on object');
    const spy = { calls: [] };
    const originalMethod = obj[methodName];
    obj[methodName] = function (...args) {
        spy.calls.push(args);
        originalMethod.apply(this, args);
    }

    return spy;
}
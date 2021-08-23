
/**
 * https://bigfrontend.dev/problem/implement-memoizeOne
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

function memoizeOne(func, isEqual) {
    // your code here
    let prevResult = null;
    let prevThis = null;
    let prevArgs = null;
    isEqual = isEqual || defaultIsEqual;

    function defaultIsEqual(args, newArgs) {
        if (!args && newArgs) return false;
        if (args.length !== newArgs.length) return false;
        return args.every((item, index) => item === newArgs[index]);
    }

    return function (...args) {
        if (prevThis === this && isEqual(prevArgs, args)) {
            return prevResult;
        } else {
            prevResult = func.apply(this, args);
            prevArgs = args;
            prevThis = this;
            return prevResult;
        }
    }
}
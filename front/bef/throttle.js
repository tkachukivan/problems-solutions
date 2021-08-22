
/**
 * https://bigfrontend.dev/problem/implement-basic-throttle
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
    // your code here
    let waiting = false;
    let latestArgs = null;
    let calledWhileWaiting = false;
    function inner(...args) {
        if (waiting) {
            latestArgs = args;
            calledWhileWaiting = true;
            return;
        }
        func.apply(this, args);
        waiting = true;
        calledWhileWaiting = false;

        setTimeout(() => {
            waiting = false;
            if (calledWhileWaiting) inner(latestArgs);
        }, wait);
    }

    return inner;
}
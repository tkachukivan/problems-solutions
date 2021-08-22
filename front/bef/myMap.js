// https://bigfrontend.dev/problem/implement-Array-prototype-map

Array.prototype.myMap = function (func, that) {
    // your code here
    if (!func) return [];
    if (!this.length) return [];
    const length = this.length;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        if (i in this) {
            result[i] = func.call(that, this[i], i, this)
        }
    }

    return result;
}

console.log([1, 2, 3].myMap(num => num * 2))

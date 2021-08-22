
/**
 * https://bigfrontend.dev/problem/implement-Array-prototype.flat
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    if (depth === 0) return arr;
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            acc.push(...flat(val, depth - 1));
        } else {
            acc.push(val);
        }

        return acc;
    }, []);
}

const arr = [1, [2], [3, [4, [5]]]];

console.log(flat(arr, 2));
/**
 * https://leetcode.com/problems/powerful-integers/
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
 var powerfulIntegers = function(x, y, bound) {
    const result = new Set();
    const aBound = x === 1 ? bound : Math.log(bound) / Math.log(x);
    const bBound = y === 1 ? bound : Math.log(bound) / Math.log(y);
    for (let i = 0; i < aBound; i++) {
        if (x ** i > bound) break;
        for (let j = 0; j < bBound; j++) {
            const candidate = x ** i + y ** j;
            if (candidate > bound) break;
            
            result.add(candidate);

            if (y === 1) {
                break;
            }
        }
        
        if (x === 1) {
            break;
        }
    }
    
    return [...result];
};

// var powerfulIntegers = function(x, y, bound) {
//     let ans = new Set()
//     for (let xi = 1; xi < bound; xi *= x) {
//         for (let yj = 1; xi + yj <= bound; yj *= y) {
//             ans.add(xi + yj)
//             if (y === 1) break
//         }
//         if (x === 1) break
//     }
//     return Array.from(ans)
// }
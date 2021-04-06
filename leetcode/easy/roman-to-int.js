/**
 * https://leetcode.com/problems/roman-to-integer
 * @param {string} s
 * @return {number}
 */

 const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

var romanToInt = function(s) {
    if (!s) return 0;
    let res = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let next = i + 1;
        if (next < s.length && map[s[next]] > map[s[i]]) {
            res += map[s[next]] - map[s[i++]];
        } else {
            res += map[s[i]];
        }
    }
    
    return res;
};
/**
 * https://leetcode.com/problems/happy-number
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    const checked = new Set();
    while(n !== 1) {
        if (checked.has(n)) return false;
        checked.add(n);
        let newN = 0;
        while(n > 0) {
            const num = n % 10;
            newN += num * num;
            n = Math.floor(n/10);
        }
        n = newN;
    }
    return true;
};
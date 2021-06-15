/**
 * https://leetcode.com/problems/matchsticks-to-square/
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    const m = 4;
    const n = matchsticks.length;

    let perimeter = 0;
    for (let i = 0; i < n; i++) perimeter += matchsticks[i];
    if (perimeter % 4) return false;
    const maxSide = perimeter / 4;
    
    const sides = new Array(m).fill(0);
    matchsticks.sort((a, b) => b - a); // reverse sort for faster exit
    return solve(0);
    
    function solve(current) {
        if (current === n) {
            return sides[0] === sides[1] && sides[1] === sides[2] && sides[2] === sides[3];
        }

        const matchstick = matchsticks[current];
        let result = false;
        
        for (let i = 0; i < m; i++) {
            if (maxSide >= sides[i] + matchstick) {
                sides[i] += matchstick;
                result = result || solve(current + 1);
                sides[i] -= matchstick;
            }

        }

        return result;
    }
};
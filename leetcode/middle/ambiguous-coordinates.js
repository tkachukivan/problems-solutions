/**
 * https://leetcode.com/problems/ambiguous-coordinates/
 * @param {string} s
 * @return {string[]}
 */
 var ambiguousCoordinates = function(s) {
    const result = [];
    
    for (let i = 2; i < s.length - 1; i++) {
        for (let left of make(1, i)) {
            for (let right of make(i, s.length - 1)) {
                result.push(`(${left}, ${right})`);
            }
        }
    }
    
    return result;
    
    function make(lo, hi) {
        const coordinates = [];
        
        for (let i = 1; i <= hi - lo; i++) {
            const left = s.substring(lo, lo + i);
            const right = s.substring(lo + i, hi);
            if ((!left.startsWith(0) || left === '0') && !right.endsWith('0')) {
                coordinates.push(`${left}${i < hi - lo ? '.' : ''}${right}`)
            }
        }
        
        return coordinates;
    }
};
/**
 * https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    const numbers = s.split(' ')
            .map(Number)
            .filter((num) => !Number.isNaN(num));
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] <= numbers[i - 1]) return false;
    }
        
    return true;
};
/**
 * https://leetcode.com/problems/maximum-number-of-balloons/
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    const counts = new Map();
    'balloon'.split('').forEach(countLetter);
    text.split('').forEach((letter) => {
        if (counts.has(letter)) {
            countLetter(letter);
        }          
    });
    let result = Infinity;
    
    for (const value of counts.values()) {
        result = Math.min(result, value);
    }
    
    return Math.floor(result) - 1;
    
    function countLetter(letter) {
        if (letter === 'l' || letter === 'o') {
            counts.set(letter, (counts.get(letter) || 0) + 0.5);
        } else {
            counts.set(letter, (counts.get(letter) || 0) + 1);
        }
    }
};
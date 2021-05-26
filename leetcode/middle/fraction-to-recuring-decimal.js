/**
 * https://leetcode.com/problems/fraction-to-recurring-decimal/
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
 var fractionToDecimal = function(numerator, denominator) {
    if (numerator % denominator === 0) return (numerator / denominator).toString();
    const seen = new Map();
    let result = '';
    
    if (Math.sign(numerator) !== Math.sign(denominator)) {
        result += '-';
    }
    
    // if (numerator < 0 ^ denominator < 0) {
    //     result += '-';
    // }

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    result += Math.floor(numerator / denominator) + '.';
    numerator %= denominator;
    numerator *= 10;
    
    while (numerator !== 0) {
        seen.set(numerator, result.length);
        result += Math.floor(numerator / denominator);
        numerator %= denominator;
        numerator *= 10;
        // if (numerator >= denominator) {
        //     result += Math.floor(numerator / denominator);
        //     numerator %= denominator;
        //     numerator *= 10;
        // } else {
        //     result += '0';
        //     numerator *= 10;
        // }

        if (seen.has(numerator)) {
            const index = seen.get(numerator);
            return `${result.substring(0, index)}(${result.substring(index)})`;
        }
    }
        
    return result;
};
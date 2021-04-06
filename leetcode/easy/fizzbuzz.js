/**
 * https://leetcode.com/problems/fizz-buzz
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        let ans = '';
        const devBy3 = i % 3 === 0;
        const devBy5 = i % 5 === 0;
        if (devBy3) {
            ans += 'Fizz';
        }
        
        if (devBy5) {
            ans += 'Buzz';
        }
        
        if (ans === '') {
            ans += i;    
        }
        
        result.push(ans);
    }
    return result;
};
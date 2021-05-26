/**
 * https://leetcode.com/problems/decode-ways/
 * @param {string} s
 * @return {number}
 */
// var numDecodings = function(s) {
//     const cache = new Uint32Array(s.length)
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '0' && (s[i - 1] !== '1' && s[i - 1] !== '2')) return 0;
//     }
    
//     return solve(s, 0);
    
//     function solve(s, current) {
//         if (current === s.length) return 1;
//         if (s[current] === '0') return 0;
//         if (cache[current]) return cache[current];
//         let resultWays = 0;
//         if (s[current + 1] !== '0') {
//             resultWays = solve(s, current + 1);
//         }
//         if (current + 1 >= s.length) return resultWays;
//         if (s[current] === '1' || (s[current] === '2' && s[current + 1] < '7')) {
//             resultWays += solve(s, current + 2);
//         }
//         cache[current] = resultWays;
        
//         return resultWays;
//     }
// };

// DP SC O(1) 
var numDecodings = function(s) {
    let n = s.length;
    
    // Empty string and string that start with 0 is not valid
    if (n === 0 || s[0] === '0') {
        return 0;
    }
    
    // Obviously
    if (n === 1) {
        return 1;
    }
    
    // way1 is the answer for s.slice(0, i)
    let way1 = 1;
    // way2 is the answer for s.slice(0, i - 1)
    let way2 = 1;
    
    // Iterate through each digit and calcuate the answer for s.slice(0, i + 1) for each iteration
    for (let i = 1; i < n; i++) {
        // Current digit is 0, and even if we combine it with the
        // previous digit we can't make a valid letter so we return 0 immediately
        if (s[i] === '0' && s[i - 1] != '1' && s[i - 1] != '2') {
            return 0;
        }
        
        let currWay;
        
        // In this iteration we are calculating the answer for s.slice(0, i + 1)
        // There 3 valid cases:
        
        // 1) Current digit is 0, it must be combined with last digit
        //    so the answer is same as the answer for the s.slice(0, i - 1)
        if (s[i] === '0') {
            currWay = way2;
        // 2) Current digit can be combined with last digist or 
        //    be used as a standalone digit so the answer is
        //    the total of the answer for s.slice(0, i) and s.slice(0, i - 1)
        } else if (s[i - 1] !== '0' && parseInt(s[i - 1] + s[i]) <= 26) {
            currWay = way1 + way2;
        // 3) Current digit can only be used as a standalone digit
        //    so the answer is the same as the answer for s.slice(0, i)
        } else {
            currWay = way1;
        }
        
        way2 = way1;
        way1 = currWay;
    }
    
    return way1;
};
// DP SC O(n) 
// function numDecodings(s) {
//   if (s == null || s.length === 0) return 0;
//   if (s[0] === '0') return 0;

//   const dp = new Uint32Array(s.length + 1);

//   dp[0] = 1;
//   dp[1] = 1;

//   for (let i = 2; i <= s.length; i++) {
//     if (s[i - 1] >= '1' && s[i - 1] <= '9') {
//       dp[i] += dp[i - 1];
//     }

//     if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] < '7')) {
//       dp[i] += dp[i - 2];
//     }
//   }

//   return dp[s.length];
// }
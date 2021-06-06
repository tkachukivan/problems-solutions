/**
 * https://leetcode.com/problems/wildcard-matching/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     const n = s.length;
//     const m = p.length;
//     const memo = Array.from({ length: n + 1 }, () => new Array(m + 1));
//     return match(0, 0);
    
//     function match(stringIndex, patternIndex) {
//         if (memo[stringIndex][patternIndex] !== undefined) return memo[stringIndex][patternIndex];
//         if (patternIndex === m) return stringIndex === n;
//         if (stringIndex === n) {
//             while (patternIndex < m && p[patternIndex] === '*') patternIndex++;
//             return patternIndex === m;
//         }
//         let result = false;

//         if (p[patternIndex] === '?' || s[stringIndex] === p[patternIndex]) {
//             result = match(stringIndex + 1, patternIndex + 1);
//         } else if (p[patternIndex] === '*') {
//             result = match(stringIndex, patternIndex + 1) || match(stringIndex + 1, patternIndex)
//         }
        
//         memo[stringIndex][patternIndex] = result;
//         return result;
//     }
// };

const isMatch = function (string, pattern) {
    let s = 0, p = 0;
    let starIdx = -1, pointer = -1;
  
    while (s < string.length) {
      if ((p < pattern.length && string[s] === pattern[p]) || pattern[p] === "?") {
        s++;
        p++;
      } else if (p < pattern.length && pattern[p] === "*") {
        starIdx = p;
        pointer = s;
        p++;
      } else if (starIdx === -1) return false;
      else {
        p = starIdx + 1;
        s = pointer + 1;
        pointer = s;
      }
    }
  
    for (let idx = p; idx < pattern.length; idx++) {
      if (pattern[idx] !== "*") return false;
    }
  
    return true;
  };
  
  // const isMatch = (text1, text2) => {
  //     const n = text1.length;
  //     const m = text2.length;
  // 	let dp = Array.from({ length: n + 1 }, () => new Array(m + 1));
  
  //     // blank to blank always true
  //     dp[0][0] = true;
      
  // 	// Only text2 will have `*` or `?`
  //     for (var col = 1; col <= dp[0].length; col ++) {
  //         if (text2[col - 1] === '*') {
  //             dp[0][col] = dp[0][col - 1];
  //         }
  //     }
  
  // 	for (let row = 1; row < dp.length; row++) {
  // 		for (let col = 1; col < dp[0].length; col++) {
  // 			let text1Letter = text1[row - 1],
  // 				text2Letter = text2[col - 1];
  
  // 			if (text1Letter == text2Letter || text2Letter == '?')
  // 				dp[row][col] = dp[row - 1][col - 1];
  // 			else if (text2Letter == '*')
  // 				dp[row][col] = dp[row][col - 1] || dp[row - 1][col];
  // 		}
  // 	}
  
  // 	return !!dp[n][m];
  // };
/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let maxLen = 1;
    let start = 0;
    let end = 1;
    
    for (let middle = 0; middle < s.length; middle++) {
//         const left = middle;
//         const right = middle + 1;
//         if (s[left] === s[right]) {
//             solve(left, right);
//         }
        
//         if (left > 0 && s[left -1] === s[right]) {
//             solve(left - 1, right);
//         }
        expandAroundCenter(middle, middle + 1);
        expandAroundCenter(middle - 1, middle + 1);
    }
    
    return s.substring(start, start + maxLen);
    
    function expandAroundCenter(left, right) {
        // while (left > 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
        //     left--;
        //     right++;
        // }
        // const len = (right + 1) - left;
        // if (len > maxLen) {
        //     maxLen = len;
        //     start = left;
        //     end = right + 1;
        // }
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        const len = right - left - 1;
        if (len > maxLen) {
            maxLen = len;
            start = left + 1;
        }
    }
};
// manachers
// const longestPalindrome = s => {
//   if (s.length === 2) {
//     if (s[0] === s[1]) {
//       return s;
//     } else {
//       return s[0];
//     }
//   } else if (s.length === 1) {
//     return s;
//   }
//   let result = '';
//   const center = s.length >> 1;
//   for (let i = 0; (i < center) && (result.length + i * 2 <= s.length); ++i) {
//     for (let a = -1; a < 2; a += 2) {
//       for (let j = 0; j < 2; ++j) {
//         let left = center + (a * i);
//         let right = center + (a * i) + (a * j);
//         while (s[left] && s[left] === s[right]) {
//           --left;
//           ++right;
//         }
//         if ((right - left - 1) > result.length) {
//           result = s.substring(left + 1, right);
//         }
//       }
//     }
//   }
//   return result;
// };
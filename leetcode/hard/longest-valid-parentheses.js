/**
 * https://leetcode.com/problems/longest-valid-parentheses
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    if (!s) return 0;
    let longest = 0;
    const stack = [-1];
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                longest = Math.max(longest, i - stack[stack.length - 1]);
            }
        }
    }

//     less space solution
//     let left = 0;
//     let right = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             left++;
//         } else {
//             right++
//         }
        
//         if (left === right) {
//             longest = Math.max(longest, left + right);
//         }
//         if (right > left) {
//             left = 0;
//             right = 0;
//         }
//     }
    
//     left = 0;
//     right = 0;
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (s[i] === '(') {
//             left++;
//         } else {
//             right++
//         }
        
//         if (left === right) {
//             longest = Math.max(longest, left + right);
//         }
//         if (left > right) {
//             left = 0;
//             right = 0;
//         }
//     }
    
    // dp
    // const dp = new Uint32Array(s.length);
    // for (let i = 1; i < s.length; i++) {
    //     if (s[i] === ')') {
    //         if (s[i - 1] === '(') {
    //             dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
    //         } else if (i - dp[i - 1] >= 1 && s[i - dp[i - 1] - 1] === '(') {
    //             dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
    //         }
                       
    //         longest = Math.max(longest, dp[i]);
    //     }
    // }
    
    return longest;
};
/**
 * https://leetcode.com/problems/max-consecutive-ones-iii
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
 var longestOnes = function(A, K) {
    let longest = 0;
    let k = K;
    let start = 0;
    let end = 0;
    
    while(end < A.length) {
        if (A[end] === 1) {
            end++;
        } else if (k > 0) {
            end++;
            k--;
        } else if (k + 1 <= K) {
            k = k + (A[start++] === 1 ? 0 : 1);
        } else {
            end++;
            start = end;
        }
        longest = Math.max(longest, end - start);
    }
    
    return longest;
    // shorter    
    // let start = 0, end = 0;

    // while (end < A.length) {
    //     if (A[end] === 0) K--;
    //     if (K < 0) {
    //         if (A[start] === 0) K++;
    //         start++;
    //     }
    //     end++;
    // }
    // return end-start;
};
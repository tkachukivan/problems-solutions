/**
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// var maxScore = function(cardPoints, k) {
//     const n = cardPoints.length;
//     const totalSum = cardPoints.reduce((acc, num) => acc + num);
//     let end = n - k;
//     let start = 0;
//     let windowSum = 0;
    
//     for (let i = start; i < end; i++) {
//         windowSum += cardPoints[i];
//     }
    
//     let answer = totalSum - windowSum;
    
//     while (end < n) {
//         windowSum = windowSum - cardPoints[start++] + cardPoints[end++];
//         answer = Math.max(answer, totalSum - windowSum);
//     }
    
//     return answer;
// };

function maxScore(cardPoints, k) {
    let left = k - 1;
    let right = cardPoints.length -1;
    let sum = 0;
      
    for (let i = 0; i < k; i++) sum += cardPoints[i];
      
    let max = sum;
    for (let i = 0; i < k; i++) {
      sum += cardPoints[right--] - cardPoints[left--];
      max = Math.max(max, sum);
    }
      
    return max;
  };
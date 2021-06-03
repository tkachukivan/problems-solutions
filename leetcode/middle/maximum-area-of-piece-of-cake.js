/**
 * https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    
    let maxHorizontalDiff = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length - 1]);
    let maxVerticalDiff = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length - 1]);
    
    for (let i = 1; i < horizontalCuts.length; i++) {
        maxHorizontalDiff = Math.max(maxHorizontalDiff, horizontalCuts[i] - horizontalCuts[i - 1]);
    }
    for (let i = 1; i < verticalCuts.length; i++) {
        maxVerticalDiff = Math.max(maxVerticalDiff, verticalCuts[i] - verticalCuts[i - 1]);
    }
    
    return maxHorizontalDiff * maxVerticalDiff % 1000000007;
};
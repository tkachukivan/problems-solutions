/**
 * https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    let maxRect = 0;
    let maxRectCount = 0;
    
    rectangles.forEach(([w, h]) => {
        const recSide = Math.min(w, h);
        if (recSide === maxRect) maxRectCount++;
        else if (recSide > maxRect) {
            maxRect = recSide;
            maxRectCount = 1;
        }
    });
    
    return maxRectCount;
};
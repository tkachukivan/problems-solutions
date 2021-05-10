/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    //     const n = height.length;
    //     let result = 0;    
    //     for (let i = 1; i < n; i++) {
    //         for (let j = 0; j < i; j++) {
    //             result = Math.max(result, (i - j) * Math.min(height[i], height[j]));
    //         }
    //     }
        
    //     return result;
        
        const n = height.length;
        let result = 0;
        let lo = 0; 
        let hi = n - 1;
        while(lo < hi) {
            result = Math.max(result, (hi - lo) * Math.min(height[lo], height[hi]));
            if (height[lo] < height[hi]) {
                lo++
            } else {
                hi--
            }
        }
        
        return result;
    };
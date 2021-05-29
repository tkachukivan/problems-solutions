/**
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
// stack, first try
// var trap = function(height) {
//     const n = height.length;
//     let result = 0;
//     let maxValue = height[0];
    
//     let currentArray = height;
//     let stack = [height[0]]
        
//     for (let i = 1; i < n; i++) {
//         if (maxValue > currentArray[i]) {
//             stack.push(currentArray[i]);
//         } else {
//             while (stack.length) {
//                 result += (maxValue - stack.pop());
//             }

//             maxValue = currentArray[i];
//             stack.push(currentArray[i]);
//         }
//     }
//        // use stack as array and go backwords to handle cases when from left side we have array with decriasing values ie 4 2 3 / 3 2 1 2 1
//     currentArray = stack;
//     stack = [];
//     maxValue = currentArray[currentArray.length - 1];
//     for (let i = currentArray.length - 1; i >= 0; i--) {
//         if (maxValue > currentArray[i]) {
//             stack.push(currentArray[i]);
//         } else {
//             while (stack.length) {
//                 result += (maxValue - stack.pop());
//             }

//             maxValue = currentArray[i];
//         }
//     }
    
//     return result;
// };

// geometric
// var trap = function(height) {
//     let landArea = 0;
//     let maxFromLeft = 0;
//     let maxAreaFromLeft = 0;
    
//     for (let h of height) {
//         landArea += h;
//         maxFromLeft = Math.max(maxFromLeft, h);
//         maxAreaFromLeft += maxFromLeft;
//     }
    
//     let maxFromRight = 0;
//     let maxAreaFromRight = 0;
    
//     for (let i = height.length - 1; i >= 0; i--) {
//         maxFromRight = Math.max(maxFromRight, height[i]);
//         maxAreaFromRight += maxFromRight;
//     }
    
//     const boundingArea = height.length * maxFromLeft;
//     const leftVoid = boundingArea - maxAreaFromLeft;
//     const rightVoid = boundingArea - maxAreaFromRight;
//     return boundingArea - leftVoid - rightVoid - landArea;
// };
// dp
// var trap = function(height) {
//   if (height.length < 3) return 0;
//   const maxHeightLeft = height.slice();
//   const maxHeightRight = height.slice();
//   for (let i = 1; i < height.length; i++) {
//     if (maxHeightLeft[i] < maxHeightLeft[i - 1])
//       maxHeightLeft[i] = maxHeightLeft[i - 1];
//   }
//   for (let i = height.length - 2; i >= 0; i--) {
//     if (maxHeightRight[i] < maxHeightRight[i + 1])
//       maxHeightRight[i] = maxHeightRight[i + 1];
//   }
//   return height.reduce(
//     (acc, cur, idx) =>
//       acc + Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - cur,
//     0
//   );
// };

// cleaner stack, but slower for leetcode...
// const trap = (heights) => {
//     const stack = [];
//     let result = 0;
//     for (let i = 0; i < heights.length; i++) {
//         while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
//             let center = heights[stack.pop()];
//             if (stack.length > 0) {
//                 let left = heights[stack[stack.length - 1]];
//                 let right = heights[i];
//                 result += Math.min(left - center, right - center) * (i - stack[stack.length - 1] - 1);
//             }
//         }
//         stack.push(i);
//     }
//     return result;
// };
// two pointers the fastest one, plus uses less memory and only one pass throw array
var trap = function(heights) {
	if (heights === null || heights.length === 0) {
		return 0;
	}
    let trapped = 0, low = 0, high = heights.length-1;
    let leftMax = 0, rightMax = 0;
    while (low < high) {
        if (heights[low] <= heights[high]) { 
            // we know that there is wall in the right that is either equal to
            // or higher than our tallest wall in the left
            // that's why our index has moved so far and we are in this conditional
            // statement
            if (leftMax > heights[low]) trapped += leftMax - heights[low];
            else leftMax = heights[low];
            low++;
        } else {
            // we know that there is wall in the left that is either equal to
            // or higher than our tallest wall in the right
            // that's why our index has moved so far and we are in this conditional
            // statement
            if (rightMax > heights[high]) trapped += rightMax - heights[high];
            else rightMax = heights[high];
            high--;
        }
    }
    return trapped;
    // Two Pointer
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}
/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//     let maxArea = 0;
//     const stack = [-1];
//     heights.push(0);
    
//     for (let i = 0; i < heights.length; i++) {
//         while (heights[stack[stack.length - 1]] > heights[i]) {
//             const height = heights[stack.pop()];
//             const width = i - stack[stack.length - 1] - 1;
//             maxArea = Math.max(maxArea, height * width);
//         }
//         stack.push(i);
//     }
    
//     heights.pop();
    
//     return maxArea;
// };

const largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = [];
    // Append shadow rectangle (height = 0) to both side
    heights = [0].concat(heights).concat([0]);
    for (let i = 0; i < heights.length; i++) {
        /**
         *  Check if height of last element in the stack bigger than height at current position
         *  Position in stack always smaller than current position at least 1
         *  For example we have heights array [2,5,6,2]
         *   1: Add shadow rectangle to array => [0,2,5,6,2,0]
         *   2:
         *      Expression: heights[stack[stack.length - 1]] > heights[i]
         *      i = 0 => stack = [0],
         *      i = 1 => heights[0] > heights[1] (0 > 2) => false => stack = [0,1]
         *      i = 2 => heights[1] > heights[2] (2 > 5) => false => stack = [0,1,2]
         *      i = 3 => heights[2] > heights[3] (5 > 6) => false => stack = [0,1,2,3]
         *      i = 4 => heights[3] > heights[4] (6 > 2) => true
         *   3: Because the previous height bigger than the current height (6 > 2) so that we can confirm that the next rectangle
         *      will only shrink area. Let calculate the result
         *      First we get the position from the stack and assign to variable "j" from original stack = [0,1,2,3]
         *      Expression: (i - stack[stack.length - 1] - 1) * heights[j]
         *       j = 3 => stack = [0,1,2] => (i - stack[3 - 1] - 1) *  => (4 - 2 - 1) * 6 = 6
         *      Explain:
         *      - We need to calculate area backward so that we take i - last stack (4 - 2) and because we already
         *      get a value from stack before so that we need to subtract 1 => (4 - 2 - 1)
         *      - The latest position in stack is the maximum height we can get (j = 3 => heights[3] = 6)
         *       => Area calculate equal (4 - 2 - 1) * 6 = 6 (1 bar)
         *      - Compare with the current max area (currently 0) => New max area = 6
         *
         *      Expression: heights[stack[stack.length - 1]] > heights[i] | stack = [0,1,2]
         *      heights[2] > heights[4] (5 > 2) => true
         *      j = 2 => stack = [0, 1] => (i - stack[2 - 1] - 1) * 5 => (4 - 1 - 1) * 5 = 10
         *      Area > MaxArea (10 > 6) => New max area = 10 (2 bar)
         *      Explain: Because the height in stack are sorted (We stop add position to stack if the next height is lower)
         *
         *      heights[1] > heights[4] (2 > 2) => false | stack = [0,1,2]
         *      Keep running and the final answer it is the max area you need
         */
        while (stack && heights[stack[stack.length - 1]] > heights[i]) {
            const j = stack.pop();
            maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[j], maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};

// /* MAIN FUNCTION */
// var largestRectangleArea = function(heights) {
//     // edge cases
//     if(!heights || heights.length == 0){return 0}
    
//     /* Helper Functions */
//     let nsr = nextSmallerToRight(heights) // gives array of Next Smaller to Right for every element
//     let nsl = nextSmallerToLeft(heights) // gives array of Next Smaller to Left for every element
    
//     // return currMax accumulator
//     return heights.reduce(function(currMax, height, index){
        
//         // apply formula on nsr and nsl of every element and build the currMax
//         currMax = Math.max(height * (nsr[index] - nsl[index]-1), currMax)
//         return currMax
//     }, Number.MIN_SAFE_INTEGER)
// };


// /* HELPER FUNCTION 1
// (we go from RIGHT -> LEFT)
// */ 
// var nextSmallerToRight = function(A){
//     let n = A.length
    
//     let nsr = [...Array(n)] // initialise new array
//     let stack = []
//     stack.push([A[n-1], n-1]) // we push the [last element, its index] in stack since it doesn't have any Next Smaller to right
//     nsr[n-1] = n // Also set its value in nsr array to be total length of array(this will help in our calculations)
//     let i = n-2 // start i ptr from A[n-2] instead of A[n-1]
//     while(i >= 0){
//         while(stack.length > 0 && stack[stack.length-1][0] >= A[i]){ // while stack exists and top element is greater or equal to curr A[i]
//             stack.pop() // keep popping until smaller found
//         }
        
//         if(stack.length === 0){ // if in case stack gets emptied, that means A[i] doesnot have any small element on right
//             nsr[i] = n // so, set its value in nsr array to be total length of array(this will help in our calculations)
//         }
//         else{
//             nsr[i] = stack[stack.length-1][1] // if found then add the value to nsr
//         }
//         stack.push([A[i],i]) // in any case, we still need to push the A[i] in the stack with its index
//         i-=1 // decrement index
//     }
    
//     return nsr
// }

// /* HELPER FUNCTION 2
// (Similar implementation to NSR, we just go from LEFT -> RIGHT)
// */
// var nextSmallerToLeft = function(A){
//     let n = A.length
    
//     let nsl = [...Array(n)]
//     nsl[0] = -1
//     let stack = []
//     stack.push([A[0],0])
//     let i = 1
    
//     while(i < n){
//         while(stack.length > 0 && stack[stack.length-1][0] >= A[i]){
//             stack.pop()
//         }
        
//         if(stack.length == 0){
//             nsl[i] = -1
//         }
//         else{
//             nsl[i] = stack[stack.length-1][1]
//         }
//         stack.push([A[i],i])
//         i+=1
//     }
    
//     return nsl
// }
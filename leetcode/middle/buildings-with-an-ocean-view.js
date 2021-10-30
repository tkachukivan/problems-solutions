/**
 * https://leetcode.com/problems/buildings-with-an-ocean-view/
 * @param {number[]} heights
 * @return {number[]}
 */
 var findBuildings = function(heights) {
    const result = [];
    let highest = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > highest) {
            highest = heights[i];
            result.push(i);
        }
    }
    
    result.reverse();
    
    return result;
};

var findBuildings = function(heights) {
    const stack = []
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] >= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        stack.push(i)
    }
    return stack
}
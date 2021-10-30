/**
 * https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/
 * @param {number[]} arr
 * @return {number}
 */
 var mctFromLeafValues = function(arr) {
    const stack = [];
    let result = 0;
    
    for (const num of arr) {
        while (stack.length && num > stack[stack.length - 1]) {
            const mid = stack.pop();
            if (stack.length) {
                result += mid * Math.min(num, stack[stack.length - 1]);
            } else {
                result += num * mid;
            }
        }
        
        stack.push(num);
    }
    
    while (stack.length > 1) {
        result += stack.pop() * stack[stack.length - 1];
    }
    
    return result;
};
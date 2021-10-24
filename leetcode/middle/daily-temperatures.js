/**
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const stack = [];
    const result = new Uint32Array(n);
    
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        
        stack.push(i);
    }
    
    return result;
};
// too smart for me
// var dailyTemperatures = function(temperatures) {
//     const n = temperatures.length;
//     const result = new Uint32Array(n);
//     let hottest = 0;
    
//     for (let i = n - 1; i >= 0; i--) {
//         const currTem = temperatures[i];
//         if (currTem >= hottest) {
//             hottest = currTem;
//             continue;
//         }
        
//         let days = 1;
//         while (temperatures[i + days] <= currTem) {
//             days += result[i + days];
//         }
        
//         result[i] = days;
//     }
    
//     return result;
// };
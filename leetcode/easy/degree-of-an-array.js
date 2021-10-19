/**
 * https://leetcode.com/problems/degree-of-an-array/
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    const counts = new Map();
    
    nums.forEach((num, index) => {
        if (!counts.has(num)) {
            counts.set(num, { degree: 1, firstIndex: index, lastIndex: index });
            return;
        }
        
        const { degree, firstIndex, lastIndex } = counts.get(num);
        counts.set(num, { degree: degree + 1, firstIndex, lastIndex: index });
    });
    let degrees = [];
    let maxDegree = 0;

    for (const { degree, firstIndex, lastIndex } of counts.values()) {
        if (degree > maxDegree) {
            maxDegree = degree;
            degrees = [(lastIndex - firstIndex) + 1];
        } else if (degree === maxDegree) {
            degrees.push((lastIndex - firstIndex) + 1);
        }
    }
    
    return Math.min(...degrees);
};

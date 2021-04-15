/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let result = [[]];
    
    nums.forEach(num => {
        const currentResults = result.length;
        
        for (let i = 0; i < currentResults; i++) {
            const copy = [...result[i]];
            copy.push(num);
            result.push(copy);
        }
    })
    
    return result;
    
//     const powerset = [];
// 	generatePowerset([], 0);

// 	function generatePowerset(path, index) {
// 		powerset.push(path);
// 		for (let i = index; i < nums.length; i++) {
// 			generatePowerset([...path, nums[i]], i + 1);
// 		}
// 	}

// 	return powerset;
};
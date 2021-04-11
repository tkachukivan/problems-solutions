/**
 * https://leetcode.com/problems/4sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    const result = [];
    if (nums.length < 4) return result;
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;
            let k = j + 1;
            let l = nums.length - 1;
            
            while(k < l) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);
                    while(k < l && nums[k] === nums[k + 1]) k++;
                    while(k < l && nums[l] === nums[l - 1]) l--;
                    l--;
                    k++;
                } else if (sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
        }
    }
    
    return result;
};

// kSum solution
// var fourSum = function(nums, target) {
//     nums.sort((a,b) => a-b)
    
// 	// we can exit out earlier if there is not enough nums for sum of 4
//     if (nums.length < 3) return []
    
//     return kSum(nums, target, 0, 4)
// };

// const kSum = (nums, target, start, k) => {
//     const result = []
    
//     if (
//         start === nums.length || // check if we done
//         nums[start]*k > target || // if k * smallest element is greater than target => imposiible to get target
//         target > nums[nums.length-1]*k // if k *largest element is less than target => imposiible to get target
//     ) return result
    
//     // eventually we will make it to k = 2
//     if (k === 2) return twoSum(nums, target, start)
    
//     for (let i=start; i < nums.length; i++) {
//         // skip duplicates
//         if (i === start || nums[i-1] !== nums[i]) {
//             /*
//                 calculate sums for whatever is left after we use current nums[i];
//                 we are making k-2 nested loops because of the recursion
//             */
//             for (let subSet of kSum(nums, target - nums[i], i+1, k-1)) {
//                 subSet.push(nums[i])
//                 result.push(subSet)
//             }
//         }
//     }
//     return result
// }

// const twoSum = (nums, target, start) => {
//     const result = []
//     let lo = start,
//         hi = nums.length-1
    
//     while (lo < hi) {
//         const sum = nums[lo] + nums[hi]
        
//         // base || filter out duplicates
//         if (sum < target || (lo > start && nums[lo] === nums[lo-1])) {
//             lo++
//         } else if (sum > target || (hi < nums.length-1 && nums[hi] === nums[hi+1])) {
//             hi--
//         } else {
//             result.push([nums[lo], nums[hi]])
//             lo++
//             hi--
//         }
//     }
    
//     return result
// }
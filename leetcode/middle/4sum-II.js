/**
 * https://leetcode.com/problems/4sum-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    //     O(n^3)
    //     let result = 0;
    //     let n = nums1.length;
    //     let nums4Map = new Map();
        
    //     for (let i = 0; i < n; i++) {
    //         nums4Map.set(nums4[i], (nums4Map.get(nums4[i]) || 0) + 1);
    //     }
        
    //     for (let i = 0; i < n; i++) {
    //         for (let j = 0; j < n; j++) {
    //             for (let k = 0; k < n; k++) {
    //                 if (nums4Map.has(0 - (nums1[i] + nums2[j] + nums3[k]))) result += nums4Map.get(0 - (nums1[i] + nums2[j] + nums3[k]));
    //             }
    //         }
    //     }
        
    //     return result;
        
        // O(n^2)
        let result = 0;
        let n = nums1.length;
        let numsSum = new Map();
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const sum = 0 - (nums1[i] + nums2[j]);
                numsSum.set(sum, (numsSum.get(sum) || 0) + 1);
            }
        }
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const sum = nums3[i] + nums4[j];
                if (numsSum.has(sum)) result += numsSum.get(sum);
            }
        }
        
        return result;
    };
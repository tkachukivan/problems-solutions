/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// merge to arrays m + n;
// function findMedianSortedArrays(nums1, nums2) {
//   const len = nums1.length + nums2.length;
//   const nums = [];
//   let l = 0, r = 0;
//   // Merge arrays
//   while (nums.length < len) {
//     if (nums1[l] < nums2[r] || r >= nums2.length) {
//       nums.push(nums1[l++]);
//     }
//     else if (nums1[l] >= nums2[r] || l >= nums1.length) {
//       nums.push(nums2[r++]);
//     }
//   }
//   // Calculate and return median
//   return (len % 2
//     ? nums[Math.floor(len / 2)]
//     : (nums[len / 2 - 1] + nums[len / 2]) / 2);
// };
// bs O(log m + n)
var findMedianSortedArrays = function(nums1, nums2) {
    // Specify the shorter array we will perform BS on
    const nums1Shorter = nums1.length <= nums2.length;
    const shortArray = nums1Shorter ? nums1 : nums2;
    const longArray = nums1Shorter ? nums2 : nums1;
    // We need to take the average median if there is an even total number of nums
    const total = nums1.length + nums2.length;
    const even = total % 2 === 0;
    
    // Both indices are inclusive; this makes sure we are always halving the search space
    let start = 0;
    let end = shortArray.length - 1;
    // Start performing BS and return median when found
    while (true) {
      // Position partition between the start and end indices
      const shortPartition = Math.ceil((start + end) / 2)
      // Get left and right sides of partition
      // If out of bounds, use negative or positive infinity to let the other array win the max/min comparisons
      const shortLeft = shortArray[shortPartition - 1] !== undefined
        ? shortArray[shortPartition - 1]
        : Number.NEGATIVE_INFINITY;
      const shortRight = shortArray[shortPartition] !== undefined
        ? shortArray[shortPartition]
        : Number.POSITIVE_INFINITY;
      
      // Partition long array at total Math.ceil(total / 2) - shortPartition
      // This guarantees we will have an equal number of elements on each side if even,
      // or one more element on the left if odd
      const longPartition = Math.ceil(total / 2) - shortPartition;
      // We also include the infinity trick here to handle the edge case
      // where shorter is an empty array
      const longLeft = longArray[longPartition - 1] !== undefined
        ? longArray[longPartition - 1]
        : Number.NEGATIVE_INFINITY;
      const longRight = longArray[longPartition] !== undefined
        ? longArray[longPartition]
        : Number.POSITIVE_INFINITY;
      
      // If shortLeft <= longRight and longLeft <= shortRight,
      // our partition is at the median
      if (shortLeft <= longRight && longLeft <= shortRight) {
        // If even, take averages of max of left nums and min of right nums
        if (even) {
          return (Math.max(shortLeft, longLeft) + Math.min(shortRight, longRight)) / 2;
        }
        // If odd, take the max of the left nums
        else {
          return Math.max(shortLeft, longLeft);
        }
      }
      // Move partition to the middle of the left elements
      else if (shortLeft > longRight) {
        end = shortPartition - 1;
      // Move partition to the middle of the right elements
      } else {
        start = shortPartition + 1;
      }
    };
  };
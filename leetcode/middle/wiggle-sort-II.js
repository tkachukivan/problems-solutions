/**
 * https://leetcode.com/problems/wiggle-sort-ii/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var wiggleSort = function(nums) {
    const tmp = [...nums];
    const n = nums.length;
    tmp.sort((a, b) => a - b);
    const median = n % 2 === 0 ? Math.floor(n / 2) - 1 : Math.floor(n / 2);
    let left = median;
    let right = n - 1;
    let current = 0;
    while (right > median) {
        nums[current++] = tmp[left--];
        nums[current++] = tmp[right--];
    }
    
    if (current != n) nums[current] = tmp[left];
};

// var wiggleSort = function(nums) {
//     const n = nums.length, m = (n + 1) >> 1;
//     const median = kthSmallestNumber(nums, m);
    
//     for (let i = 0, j = 0, k = n - 1; j <= k;) {
//         if (nums[getIndex(j, n)] > median) {
//             swap(nums, getIndex(i++, n), getIndex(j++, n));
//         } else if (nums[getIndex(j, n)] < median) {
//             swap(nums, getIndex(j, n), getIndex(k--, n));
//         } else {
//             j++;
//         }
//     }
// }

// function getIndex(i, n) {
//     return (2 * i + 1) % (n | 1);
// }

// function swap(array, a, b) {
//     [array[a], array[b]] = [array[b], array[a]];
// }

// function kthSmallestNumber(nums, k) {
//     let start = 0, end = nums.length - 1;
//     k--;
        
//     while (start < end) {
//         const m = partition(nums, start, end);
        
//         if (m < k) {
//             start = m + 1;
//         } else if (m > k) {
//             end = m - 1;
//         } else {
//             break;
//         }
//     }
    
//     return nums[k];
// }

// function partition(nums, start, end) {
//     let i = start;
    
//     for (let j = start + 1; j <= end; j++) {
//         if (nums[j] < nums[start]) swap(nums, ++i, j);
//     }
    
//     swap(nums, start, i);
//     return i;
// }
/**
 * https://leetcode.com/problems/maximum-gap/
 * @param {number[]} nums
 * @return {number}
 */
// var maximumGap = function(nums) {
//     nums.sort((a, b) => a - b);
//     let max = 0;
//     for (let i = 1; i < nums.length; i++) {
//         max = Math.max(nums[i] - nums[i - 1], max);
//     }
    
//     return max;
// };

// radix sort
// var maximumGap = function(nums) {
//     const n = nums.length;
//     const BITS_PER_BYTE = 8;
//     const BITS = 32;                 // each int is 32 bits 
//     const R = 1 << BITS_PER_BYTE;    // each bytes is between 0 and 255
//     const MASK = R - 1;              // 0xFF
//     const w = BITS / BITS_PER_BYTE; 
//     const aux = new Array(n);
    
//     for (let d = 0; d < w; d++) {
//         const count = new Uint32Array(R + 1);
//         // compute frequency counts
//         for (let i = 0; i < n; i++) {
//             const c = (nums[i] >> BITS_PER_BYTE*d) & MASK;
//             count[c + 1]++;
//         }
//         // compute cumulates
//         for (let i = 1; i < count.length; i++) {
//             count[i] += count[i - 1];
//         }
        
//         // for most significant byte, 0x80-0xFF comes before 0x00-0x7F
//         if (d == w-1) {
//             const shift1 = count[R] - count[R/2];
//             const shift2 = count[R/2];
//             for (let r = 0; r < R/2; r++)
//                 count[r] += shift1;
//             for (let r = R/2; r < R; r++)
//                 count[r] -= shift2;
//         }

//         // move data
//         for (let i = 0; i < n; i++) {
//             const c = (nums[i] >> BITS_PER_BYTE*d) & MASK;
//             aux[count[c]++] = nums[i];
//         }

//         // copy back
//         for (let i = 0; i < n; i++) {
//             nums[i] = aux[i];
//         }
//     }
    

//     let result = 0;
//     for (let i = 1; i < n; i++) {
//         result = Math.max(nums[i] - nums[i - 1], result);
//     }
    
//     return result;
// };


// bucket sort
var maximumGap = function(nums) {
    if (nums.length < 2) return 0
    let hi = 0, lo = 2e9, ans = 0
    for (let n of nums)
        hi = Math.max(hi, n), lo = Math.min(lo, n)
    let bsize = ~~((hi - lo) / (nums.length - 1)) || 1,
        buckets = Array.from({length: ~~((hi - lo) / bsize) + 1}, () => [])
    for (let n of nums)
        buckets[~~((n - lo) / bsize)].push(n)
    let currhi = 0
    for (let b of buckets) {
        if (!b.length) continue
        let prevhi = currhi || b[0], currlo = b[0]
        for (let n of b) 
            currhi = Math.max(currhi, n), currlo = Math.min(currlo, n)
        ans = Math.max(ans, currlo - prevhi)
    }
    return ans
};
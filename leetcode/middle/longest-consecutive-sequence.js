/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
// with set
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let longestSequence = 0;
    
    for (let num of numsSet) {
        if (numsSet.has(num - 1)) continue;
        let currentSequence = 1;
        let currentNum = num;
        while (numsSet.has(currentNum + 1)) {
            currentNum++;
            currentSequence++;
        }
        
        longestSequence = Math.max(longestSequence, currentSequence);
    }
    
    return longestSequence;
};
// sorting with radix sort
// var longestConsecutive = function(nums) {
//     const n = nums.length;
//     if (n === 0) return 0;
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

//     let longestStreak = 1;
//     let currentStreak = 1;

//     for (let i = 1; i < n; i++) {
//         if (nums[i] != nums[i - 1]) {
//             if (nums[i] == nums[i - 1] + 1) {
//                 currentStreak++;
//             } else {
//                 longestStreak = Math.max(longestStreak, currentStreak);
//                 currentStreak = 1;
//             }
//         }
//     }
    
//     return Math.max(longestStreak, currentStreak);
// };
// union find
// var longestConsecutive = function(nums) {
//     if (nums.length===0) return 0;
//     let parent = {};
//     let size = {};

//     const UnionFind = function(nums){
//         for (let num of nums){
//             parent[num] = num;
//             size[num] = 1;
//         }

//         this.find = (n) => {
//             if (parent[n] === n) return n;
//             parent[n] = this.find(parent[n]);
//             return parent[n];
//         }

//         this.union = (m,n) => {
//             const rootM = this.find(m);
//             const rootN = this.find(n);

//             // rank
//             if (rootM === rootN) return;
//             if (size[rootM] < size[rootN]){
//                 size[rootN] += size[rootM];
//                 parent[rootM] = rootN;
//             }else{
//                 size[rootM] += size[rootN];
//                 parent[rootN] = rootM;
//             }
//         }
//     }

//     const uf = new UnionFind(nums);

//     for (let num of nums){
//         if (num-1 in parent){
//             uf.union(num-1, num);
//         }
//     }

//     let max = 0;
//     for (let num of nums){
//         max = Math.max(max, size[num]);
//     }

//     return max;
// };
// map extend boundaries
// function longestConsecutive(nums) {
//   let max = 0;
//   const lens = {};
  
//   for (let n of nums) {
//     if (lens[n] != null) continue;

//     const l = lens[n - 1] || 0;   // left length
//     const r = lens[n + 1] || 0;   // right length

//     const len = l + r + 1;

//     // extend the length to the boundaries
//     lens[n - l] = len;
//     lens[n] = len;
//     lens[n + r] = len;

//     max = Math.max(max, len);
//   }

//   return max;
// }
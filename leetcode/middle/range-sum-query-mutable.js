// /**
//  * https://leetcode.com/problems/range-sum-query-mutable/
//  * @param {number[]} nums
//  */
// // brute force
// var NumArray = function(nums) {
//     this.nums = nums;
//     this.sum = new Int32Array(nums.length);
//     this.sum[0] = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         this.sum[i] = this.sum[i - 1] + nums[i];
//     }
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// NumArray.prototype.update = function(index, val) {
//     const diff = val - this.nums[index];
//     this.nums[index] = val;
//     for (let i = index; i < this.nums.length; i++) {
//         this.sum[i] += diff;
//     }
// };

// /** 
//  * @param {number} left 
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(left, right) {
//     return this.sum[right] - (this.sum[left - 1] || 0);
// };

// /** 
//  * Your NumArray object will be instantiated and called as such:
//  * var obj = new NumArray(nums)
//  * obj.update(index,val)
//  * var param_2 = obj.sumRange(left,right)
//  */
// binary index tree
class NumArray {
    constructor(nums) {
      const BIT = Array(nums.length + 1).fill(0)
      const vals = Array(nums.length).fill(0)
  
      this.update = (i, val) => {
        const delta = val - vals[i]
        vals[i] = val
        for (i += 1; i <= nums.length; i += -i & i) BIT[i] += delta
      }
  
      const prefixSum = i => {
        let sum = 0
        for (i += 1; i > 0; i -= -i & i) sum += BIT[i]
        return sum
      }
  
      this.sumRange = (i, j) => prefixSum(j) - prefixSum(i - 1)
  
      nums.forEach((n, i) => this.update(i, n))
    }
  }
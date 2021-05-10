/**
 * https://leetcode.com/problems/shuffle-an-array/
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.original = nums;
    this.current = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.current = [...this.original];
    return this.current;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = 0; i < this.current.length; i++) {
        const newI = Math.floor(Math.random() * (this.current.length - i)) + i;
        
        [this.current[i], this.current[newI]] = [this.current[newI], this.current[i]];
    }
    
    return this.current;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
/**
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
    this.numbers = new Map();
    this.numbersArray = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.numbers.has(val)) return false;
    this.numbersArray.push(val);
    this.numbers.set(val, this.numbersArray.length - 1);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.numbers.has(val)) return false;
    if (this.numbers.size > 1) {
        const index = this.numbers.get(val);
        const lastElement = this.numbersArray.length - 1;
        [this.numbersArray[index], this.numbersArray[lastElement]] = [this.numbersArray[lastElement], this.numbersArray[index]];
        this.numbers.set(this.numbersArray[index], index);
    }
    
    this.numbersArray.pop();
    this.numbers.delete(val);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random() * this.numbers.size);
    return this.numbersArray[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
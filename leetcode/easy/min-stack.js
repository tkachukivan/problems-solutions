/**
 * https://leetcode.com/problems/min-stack
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push([val, Math.min(val, this.getMin())]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const [value, prevMin] = this.stack.pop();
    if (value === this.min) {
        this.min = prevMin;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack.length ? this.stack[this.stack.length - 1][1] : Infinity;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
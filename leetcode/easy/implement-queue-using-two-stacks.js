/**
 * https://leetcode.com/problems/implement-queue-using-stacks/
 * Initialize your data structure here.
 */
 var MyQueue = function() {
    this.stack = [];
    this.stackReversed = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // while (this.stackReversed.length) {
    //     this.stack.push(this.stackReversed.pop());
    // }
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.stackReversed.length) {
        while (this.stack.length) {
            this.stackReversed.push(this.stack.pop());
        }
    }
    return this.stackReversed.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
     if (!this.stackReversed.length) {
        while (this.stack.length) {
            this.stackReversed.push(this.stack.pop());
        }
    }
    return this.stackReversed[this.stackReversed.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stackReversed.length && !this.stack.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
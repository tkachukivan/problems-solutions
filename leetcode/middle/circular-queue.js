/**
 * https://leetcode.com/problems/design-circular-queue/
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.queue = new Array(k).fill(null);
    this.read = 0;
    this.write = 0;
    this.size = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    this.size++;
    this.queue[this.write++] = value;
    if (this.write === this.queue.length) {
       this.write = 0;
    }
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    this.size--;
    this.queue[this.read++] = null;
    if (this.read === this.queue.length) {
       this.read = 0;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.read];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    let last = this.write - 1;
    if (last < 0) {
        last = this.queue.length - 1;
    }
    return this.queue[last];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.queue.length;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
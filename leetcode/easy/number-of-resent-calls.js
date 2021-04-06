// https://leetcode.com/problems/number-of-recent-calls
var RecentCounter = function() {
    this.root = null;
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */

RecentCounter.prototype.getNode = function(t) {
    return { t, next: null };
};

RecentCounter.prototype.ping = function(t) {
    const node = this.getNode(t);
    if (!this.size) {
        this.root = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.size++
    
    while(t - this.root.t > 3000) {
        this.size--;
        this.root = this.root.next;
    }
    
    if (this.size === 1) {
       this.tile = this.root;
    }
    
    return this.size;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
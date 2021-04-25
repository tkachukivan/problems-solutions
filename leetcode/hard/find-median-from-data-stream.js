/**
 * https://leetcode.com/problems/find-median-from-data-stream/
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    // this.nums = [];
    this.lo = new Heap(Heap.less); // max heap
    this.hi = new Heap(Heap.greater); // min heap
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
// can be improved with binary search
//     let i = 0;
//     for (; i < this.nums.length; i++) {
//         if (num > this.nums[i]) break;
//     }
    
//     this.nums.splice(i, 0, num);
    this.lo.add(num);
    this.hi.add(this.lo.pop());
    if (this.lo.size() < this.hi.size()) {
        this.lo.add(this.hi.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // const middle = Math.floor(this.nums.length / 2);
    // if (this.nums.length % 2 === 0) {
    //     return (this.nums[middle] + this.nums[middle - 1]) / 2
    // } else {
    //     return this.nums[middle];
    // }
    
    return this.lo.size() > this.hi.size() ? this.lo.top() : (this.lo.top() + this.hi.top()) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
    static less(a, b) { return a < b; }
    static greater(a, b) { return a > b; }
    heap = [null];
    n = 0;
    #compare;
    constructor(comparator) {
        this.#compare = comparator;
    }

    top() {
        return this.heap[1];
    }
    
    size() {
        return this.n;
    }
    
    add(num) {
        this.heap[++this.n] = num;
        this.#swim(this.n);
    }
    
    pop() {
        const val = this.heap[1];
        [this.heap[1], this.heap[this.n]] = [this.heap[this.n], this.heap[1]];
        this.heap[this.n--] = null;
        this.#sink(1);
        return val;
    }
    
    #sink(k) {
        let j = k * 2;
        while(j <= this.n) {
            if (j < this.n && this.#compare(this.heap[j], this.heap[j + 1])) j++;
            if (!this.#compare(this.heap[k], this.heap[j])) break;
            [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
            k = j;
            j = k * 2;
        }
    }

    #swim(k) {
        let j = Math.floor(k / 2);
        while(k > 1 && this.#compare(this.heap[j], this.heap[k])) {
            [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
            k = j;
            j = Math.floor(k / 2);
        }
    }
}

/**
 * https://leetcode.com/problems/construct-target-array-with-multiple-sums/
 * @param {number[]} target
 * @return {boolean}
 */
 var isPossible = function(target) {
    const n = target.length;
    const heap = new MaxHeap(n);
    let sumOfAll = 0;
    for (let i = 0; i < n; i++) {
        sumOfAll += target[i];
        if (target[i] !== 1) heap.add(target[i]);
    }
    
    while(!heap.empty()) {
        let current = heap.pop();
        sumOfAll -= current;
        if (current <= sumOfAll || sumOfAll < 1) return false
        current %= sumOfAll;
        sumOfAll += current;
        if (current > 1) heap.add(current);
    }
    
    return true;
};

class MaxHeap {
    n = 0;
    constructor(size) {
        this.heap = new Array(size + 1);
    }

    add(value) {
        this.heap[++this.n] = value;
        this.swim(this.n);
    }

    empty() {
        return this.n === 0;
    }

    pop() {
        const value = this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.heap[this.n--] = null;
        this.sink(1);
        return value;
    }

    less(i, j) {
        return this.heap[i] < this.heap[j];
    }

    sink(k) {
        let j = 2 * k;
        
        while(j <= this.n) {
            if (j < this.n && this.less(j, j + 1)) j++;
            if (!this.less(k, j)) break;
            [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
            k = j;
            j = 2 * k;
        }
    }

    swim(k) {
        let j = Math.floor(k / 2);

        while(k > 1 && this.less(j, k)) {
            [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
            k = j;
            j = Math.floor(k / 2);
        }
    }
}
/**
 * https://leetcode.com/problems/furthest-building-you-can-reach/
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
 var furthestBuilding = function(heights, bricks, ladders) {
    const minPQ = new MinHeap(ladders + 1);
    let i = 0;
    for (; i < heights.length - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff <= 0) continue;
        minPQ.add(diff);
        if (minPQ.size() > ladders) {
            bricks -= minPQ.pop();
        }
        if (bricks < 0) break;
    }
    
    return i;
};

class MinHeap {
    #n = 0;
    #heap;
    constructor(size) {
        this.#heap = new Array(size + 1);
    }
    
    add(num) {
        this.#heap[++this.#n] = num;
        let k = this.#n;
        let j = Math.floor(k / 2);
        while(k > 1 && this.#less(k, j)) {
            [this.#heap[k], this.#heap[j]] = [this.#heap[j], this.#heap[k]];
            k = j;
            j = Math.floor(k / 2);
        }
    }

    pop() {
        const value = this.#heap[1];
        this.#heap[1] = this.#heap[this.#n];
        this.#heap[this.#n--] = null;
        
        let k = 1;
        let j = 2 * k;
        while (j <= this.#n) {
            if (j < this.#n && this.#less(j + 1, j)) j++; 
            if (!this.#less(j, k)) break;
            [this.#heap[k], this.#heap[j]] = [this.#heap[j], this.#heap[k]];
            k = j;
            j = 2 * k;
        }
        
        
        return value;
    }
    
    size() {
        return this.#n;
    }
    
    top() {
        return this.#heap[1] || Infinity;
    }

    #less(i, j) {
        return this.#heap[i] < this.#heap[j];
    }
}

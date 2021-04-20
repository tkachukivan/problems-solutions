/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    //     const result = [];
    //     const queue = new IndexedMaxPQ(nums.length);
    //     let start = 0;
    //     let end = 0;
    
    //     while (queue.size() < k) {
    //         queue.insert(end, nums[end++]);
    //     }
        
    //     result.push(queue.max());
    
    //     while(end < nums.length) {
    //         queue.delete(start++);
    //         queue.insert(end, nums[end++]);
    //         result.push(queue.max());
    //     }
    
    //     return result;
        const result = [];
        const queue = []; // performance can be improved if using normal dequeue(based on linked list) instead of array
        
        for (let i = 0; i < nums.length; i++) {
            if (queue.length && queue[0] === i - k) {
                queue.shift();
            }
            
            while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
                  queue.pop();
            }
            
            queue.push(i);
            if (i >= k - 1) {
                result.push(nums[queue[0]]);
            }
        }
        
        return result;
    };
    
    // class IndexedMaxPQ {
    //     constructor(size) {
    //         this.n = 0;
    //         this.pq = new Array(size + 1);
    //         this.qp = new Array(size + 1).fill(-1);
    //         this.keys = new Array(size + 1);
    //     }
        
    //     max() {
    //         return this.keys[this.pq[1]];
    //     }
        
    //     size() {
    //         return this.n;
    //     }
        
    //     insert(index, value) {
    //         this.n++;
    //         this.qp[index] = this.n;
    //         this.pq[this.n] = index;
    //         this.keys[index] = value;
    //         this.swim(this.n);
    //     }
        
    //     delete(i) {
    //         const index = this.qp[i];
    //         this.exch(index, this.n--);
    //         this.swim(index);
    //         this.sink(index);
    //         this.keys[i] = null;
    //         this.qp[i] = -1;
    //     }
        
    //     exch(i, j) {
    //         const tmp = this.pq[i];
    //         this.pq[i] = this.pq[j];
    //         this.pq[j] = tmp;
    //         this.qp[this.pq[i]] = i;
    //         this.qp[this.pq[j]] = j;
    //     }
        
    //     less(i, j) {
    //         return this.keys[this.pq[i]] < this.keys[this.pq[j]];
    //     }
        
    //     swim(k) {
    //         let j = Math.floor(k / 2);
    //         while (k > 1 && this.less(j, k)) {
    //             this.exch(k, j);
    //             k = j;
    //             j = Math.floor(k / 2);
    //         }
    //     }
        
    //     sink(k) {
    //         let j = 2 * k;
    //         while(j <= this.n) {
    //             if (j < this.n && this.less(j, j + 1)) j++;
    //             if (!this.less(k, j)) break;
    //             this.exch(k, j);
    //             k = j;
    //             j = 2 * k;
    //         }
    //     }
    // }
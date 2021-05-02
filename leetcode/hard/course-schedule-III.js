/**
 * https://leetcode.com/problems/course-schedule-iii/
 * @param {number[][]} courses
 * @return {number}
 */
 var scheduleCourse = function(courses) {
    courses.sort((a, b) => a[1] - b[1]);
    const heap = new MaxHeap(courses.length);
    
    let days = 0;
    for (let course of courses) {
        if (days + course[0] <= course[1]) {
            heap.add(course[0]);
            days += course[0];
        } else if (heap.size() !== 0 && heap.top() > course[0]) {
            days += course[0] - heap.pop();
            heap.add(course[0]);
        }
    }
    
    return heap.size();
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

    top() {
        return this.heap[1];
    }

    pop() {
        const value = this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.heap[this.n--] = null;
        
        this.sink(1);

        return value;
    }

    size() {
        return this.n;
    }

    swim(k) {
        let j = Math.floor(k / 2);

        while (k > 1 && this.less(j, k)) {
            [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
            k = j;
            j = Math.floor(k / 2);
        }
    }

    sink(k) {
        let j = 2 * k;
        while (j <= this.n) {
            if (j < this.n && this.less(j, j + 1)) j++;
            if (this.less(j, k)) break;
            [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
            k = j;
            j = 2 * k;
        }
    }

    less(i, j) {
        return this.heap[i] < this.heap[j];
    }
}
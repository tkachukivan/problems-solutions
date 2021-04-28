/**
 * https://leetcode.com/problems/single-threaded-cpu/
 * @param {number[][]} tasks
 * @return {number[]}
 */
 var getOrder = function(tasks) {
    const tasksList = tasks
                        .map((task, i) => [task[0], task[1], i])
                        .sort((a,b) => a[0] - b[0]);
    const result = [];
    const min = new MinHeap();
    let currentTask = 0;
    let proceededTasks = 0;
    let currentTime = tasksList[0][0];
    
    while(proceededTasks < tasksList.length) {
        while(proceededTasks < tasksList.length && tasksList[proceededTasks][0] <= currentTime) {
            min.add([tasksList[proceededTasks][2], tasksList[proceededTasks++][1]]);
        }
        
        if (min.size() !== 0) {
            const task = min.pop()
            currentTime += task[1];
            result.push(task[0]);
        } else {
            currentTime = tasksList[proceededTasks][0];
        }
    }
    
    while (min.size() !== 0) {
        result.push(min.pop()[0]);
    }
    
    return result;
};

class MinHeap {
    heap = [null];
    n = 0;

    add(value) {
        this.heap[++this.n] = value;
        this.swim(this.n);
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
        while (k > 1 && this.less(k, j)) {
            [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
            k = j;
            j = Math.floor(k / 2);
        }
    }

    sink(k) {
        let j = 2 * k;
        while (j <= this.n) {
            if (j < this.n && this.less(j + 1, j)) j++;
            if (this.less(k, j)) break;
            [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
            k = j;
            j = 2 * k;
        }
    }

    less(i, j) {
        if (this.heap[i][1] !== this.heap[j][1]) {
            return this.heap[i][1] < this.heap[j][1];
        }

        return this.heap[i][0] < this.heap[j][0];
    }
}
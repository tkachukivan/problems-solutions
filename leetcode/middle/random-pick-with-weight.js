/**
 * https://leetcode.com/problems/random-pick-with-weight
 * @param {number[]} w
 */
 var Solution = function(w) {
    this.weights = [];
    this.sum = 0;
    for (let i = 0; i < w.length; i++) {
        this.sum += w[i];
        this.weights.push(this.sum);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = Math.floor(Math.random() * this.sum);
    let lo = 0;
    let hi = this.weights.length - 1;

    while(lo <= hi) {
        const mid = lo + Math.floor((hi - lo)/2);
        if (target < this.weights[mid]) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    
    return lo;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
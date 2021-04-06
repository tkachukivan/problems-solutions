/**
 * https://leetcode.com/problems/advantage-shuffle
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
 var advantageCount = function(A, B) {
    const n = A.length;
    const indices  = new Uint32Array(n);
    const result = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
        indices[i] = i;
    }
    indices.sort((a, b) => B[b] - B[a]);
    A.sort((a, b) => a - b);
    let low = 0;
    let hi = n - 1;
    for (let idx of indices) {
        A[hi] > B[idx] ? result[idx] = A[hi--] : result[idx] = A[low++];
    }
    
    return result;
};
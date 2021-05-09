/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(matrix, k) {
//     const n = matrix.length;
//     let size = 0;
//     const heap = [null];
//     for (let i = 0; i < n; i++) {
//         add([0, i]);
//     }
    
//     while(true) {
//         const [x, y] = pop();
//         k--;
//         if (k === 0) return matrix[x][y];
//         if (x + 1 < n) {
//             add([x + 1, y]);
//         }
//     }

//     function add(value) {
//         heap[++size] = value;
//         swim(size);
//     }

//     function pop() {
//         const value = heap[1];
//         heap[1] = heap[size];
//         heap[size--] = null;
//         sink(1);
//         return value;
//     }

//     function less(i, j) {
//         const [x1, y1] = heap[i];
//         const [x2, y2] = heap[j];

//         return matrix[x1][y1] < matrix[x2][y2];
//     }

//     function sink(k) {
//         let j = 2 * k;
        
//         while(j <= size) {
//             if (j < size && less(j + 1, j)) j++;
//             if (!less(j, k)) break;
//             [heap[k], heap[j]] = [heap[j], heap[k]];
//             k = j;
//             j = 2 * k;
//         }
//     }

//     function swim(k) {
//         let j = Math.floor(k / 2);

//         while(k > 1 && less(k, j)) {
//             [heap[k], heap[j]] = [heap[j], heap[k]];
//             k = j;
//             j = Math.floor(k / 2);
//         }
//     }
// };

// binary search
var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0];
    let hi = matrix[matrix.length-1][matrix[0].length-1] + 1; // +1 because we don't want to forget the last number
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        let count = 0;
        for (let i = 0;i<matrix.length;i++) {
            for (let j=0;j<matrix.length;j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count < k) lo = mid+1;
        else hi = mid;
    }
    return lo
};

// var kthSmallest = function (matrix, k) {
//     return matrix.flatMap(x => x).sort((a, b) => a - b)[k - 1]
// };
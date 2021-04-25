/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const frequencies = new Map();
    let heapSize = 0;
    const heap = new Array(k + 1);

    for (let num of nums) {
        frequencies.set(num, (frequencies.get(num) || 0) + 1);
    }
    for (let num of frequencies.keys()) {
        if (heapSize < k) {
            add(num)
        } else if (frequencies.get(heap[1]) < frequencies.get(num)) {
            pop();
            add(num);
        }
    }
        
    return heap.slice(1);
    
    function add(num) {
        heap[++heapSize] = num;
        let k = heapSize;
        let j = Math.floor(k / 2);
        while (k > 1 && frequencies.get(heap[k]) < frequencies.get(heap[j])) {
            [heap[k], heap[j]] = [heap[j], heap[k]];
            k = j;
            j = Math.floor(k / 2);
        }
    }
    
    function pop() {
        heap[1] = heap[heapSize];
        heap[heapSize--] = null;

        let k = 1;
        let j = 2 * k
        
        while (j <= heapSize) {
            if (j < heapSize && frequencies.get(heap[j]) > frequencies.get(heap[j + 1])) j++;
            if (frequencies.get(heap[j]) > frequencies.get(heap[k])) break;
            [heap[k], heap[j]] = [heap[j], heap[k]];
            k = j;
            j = 2 * k;
        }
    }
};
// O(n) quickselect
// var topKFrequent = function(nums, k) {
//     const map = new Map();
//     for(let n of nums) map.set(n, (map.get(n) || 0) + 1);
//     const keys = [...map.keys()], finalIdx = keys.length - k;
//     let start = 0, end = keys.length-1;
    
//     while(start <= end) {
//         const pivot = Math.floor(Math.random() * (end - start + 1)) + start;
//         const pivotIdx = pivotHelper(pivot, start, end);
        
//         if(pivotIdx === finalIdx) return keys.slice(finalIdx);
//         if(pivotIdx < finalIdx) start = pivotIdx + 1;
//         else end = pivotIdx - 1;
//     }
    
//     function pivotHelper(pivot, start, end) {
//         // move pivot away to the end
//         swap(pivot, end);
//         let swapIdx = start;
        
//         for(let i = start; i < end; i++) {
//             if(map.get(keys[i]) < map.get(keys[end])) {
//                 swap(swapIdx, i); swapIdx++;
//             }
//         }
//         swap(swapIdx, end);
//         return swapIdx;
//     }
    
//     function swap(i, j) {
//         [keys[i], keys[j]] = [keys[j], keys[i]];
//     }
// };
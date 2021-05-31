/**
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 * @param {number[]} nums
 * @return {number[]}
 */
// brute force TLE
// var countSmaller = function(nums) {
//     const n = nums.length;
//     const counts = new Uint32Array(n);
//     let maxSeen = -Infinity;
//     for (let i = 0; i < n; i++) {
//         if (nums[i] > maxSeen) {
//             maxSeen = nums[i];
//             continue;
//         }
//         for (let j = 0; j < i; j++) {
//             if (nums[j] > nums[i]) {
//                 counts[j]++;    
//             }
//         }
//     }
    
//     return counts;
// };

// binary search
// var countSmaller = function(nums) {
//     let sorted = [], result = [];
//     for (let i=nums.length-1;i>=0;i--) {
//         let left = 0, right = sorted.length;
//         while(left < right) {
//             let mid = left + Math.floor((right-left)/2);
//             if (nums[i] > sorted[mid]) {
//                 left = mid + 1;
//             } else {
//                 right = mid;
//             }
//         }
//         result[i] = left;
//         sorted.splice(left, 0, nums[i]);
//     }
//     return result;
// }
// creating BST from back, had this idea, but didn't figure out what to do with dublicates
// var countSmaller = function(nums) {
//     var Node = function(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//         this.count = 0;
//         this.dup = 0;
//     }

//     var insert = function(val) {
//         let root = bst;
//         let newNode = new Node(val);

//         // initialize node
//         if (!root) {
//             bst = newNode;
//             return 0;
//         }

//         var smaller = 0;
//         while(root) {
//             if (val < root.val) { // go left
//                 root.count++; // add 1 to root since it has 1 more element in its left subtree
//                 if (!root.left) {
//                     root.left = newNode;
//                     return smaller;
//                 } else {
//                     root = root.left
//                 }
//             } else if (val > root.val){ // go to right
//                 smaller+=root.count+1; // update total smaller numbers
//                 if (!root.right) {
//                     root.right = newNode;
//                     return smaller;
//                 } else {
//                     root = root.right;
//                 }
//             } else {
//                 // add up the current total smaller numbers and remove duplicate numbers
//                 return smaller+(root.count++)-(root.dup++);
//             }
//         }
//     }

//     let bst = null, count = [];
//     for (let i=nums.length-1;i>=0;i--) {
//         count[i] = insert(nums[i]);
//     }

//     return count;
// }
// segment tree
class SegmentTreeNode {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.count = 0;
        this.left = this.right = null;
    }
}

class SegmentTree {
    constructor(start, end) {
        this.root = this.build(start, end);
    }
    
    build(start, end) {
        const root = new SegmentTreeNode(start, end);
        if(start !== end) {
            const mid = Math.floor((start+end)/2);
            root.left = this.build(start, mid);
            root.right = this.build(mid+1, end);
        }
        return root;
    }
    
    insert(val) {
        this._insertHelper(this.root, val);
    }
    
    _insertHelper(node, val) {
        if(val < node.start || val > node.end) return;
        if(node.start === node.end) {
            node.count++;
            return;
        }
        const mid = Math.floor((node.start+node.end)/2);
        if(val <= mid) this._insertHelper(node.left, val);
        if(val > mid) this._insertHelper(node.right, val);
        node.count = node.left.count + node.right.count;
    }
    
    query(start, end) {
        return this._queryHelper(this.root, start, end);
    }
    
    _queryHelper(node, start, end) {
        if(start > end) return 0;
        if(node.start === start && node.end === end) return node.count;
        const mid = Math.floor((node.start + node.end)/2);
        let count = 0;
        if(start <= mid) count += this._queryHelper(node.left, start, Math.min(mid, end));
        if(end > mid) count += this._queryHelper(node.right, Math.max(start, mid+1), end);
        return count;
    }
}

var countSmaller = function(nums) {
    if(!nums || !nums.length) return [];
    let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER, res = new Array(nums.length);
    nums.forEach(num => {
        max = Math.max(max, num);
        min = Math.min(min, num);
    });
    const st = new SegmentTree(min, max);
    st.insert(nums[nums.length-1]);
    res[nums.length-1] = 0;
    for(let i=nums.length-2; i>=0; i--) {
        res[i] = st.query(min, nums[i]-1);
        st.insert(nums[i]);
    }
    return res;
};

// merge sort
// var countSmaller = function(nums) {
//     const n = nums.length;
//     const counts = new Uint32Array(n);
//     const indices = new Uint32Array(n);
//     for (let i = 0; i < n; i++) {
//         indices[i] = i;
//     }
    
//     mergeSort(indices, 0, n - 1, counts, nums);
    
//     return counts;
// };

// function mergeSort(indices, left, right, result, nums) {
//     if (left >= right) return;
    
//     const mid = left + Math.floor((right - left) / 2);
//     mergeSort(indices, left, mid, result, nums);
//     mergeSort(indices, mid + 1, right, result, nums);
//     merge(indices, left, right, mid, result, nums);
// }

// function merge(indices, left, right, mid, result, nums) {
//     let i = left;
//     let j = mid + 1;
//     const tmp = [];
//     while (i <= mid && j <= right) {
//         if (nums[indices[i]] <= nums[indices[j]]) {
//             result[indices[i]] += j - 1 - mid;
//             tmp.push(indices[i]);
//             i++;
//         } else {
//             tmp.push(indices[j]);
//             j++;
//         }
//     }
    
//     while (i <= mid) {
//         result[indices[i]] += j - 1 - mid;
//         tmp.push(indices[i]);
//         i++;
//     }
    
//     while (j <= right) {
//         tmp.push(indices[j]);
//         j++;
//     }
    
//     for (let k = left; k <= right; k++) {
//         indices[k] = tmp[k - left];
//     }
// }

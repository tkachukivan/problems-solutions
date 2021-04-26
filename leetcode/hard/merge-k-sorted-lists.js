/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    const minHeap = new MinHeap();
    for (let list of lists) {
        if (list) minHeap.add(list);
    }
    const dh = { next: null };
    let current = dh;
    while (minHeap.size() !== 0) {
        const node = minHeap.pop();
        current.next = node;
        current = current.next;
        if (node.next) minHeap.add(node.next);
    }

    return dh.next;
};

class MinHeap {
    #n = 0;
    #heap = [null];
    
    add(node) {
        this.#heap[++this.#n] = node;
        
        let k = this.#n;
        let j = Math.floor(k / 2);
        while(k > 1 && this.#less(k, j)) {
            [this.#heap[k], this.#heap[j]] = [this.#heap[j], this.#heap[k]];
            k = j;
            j = Math.floor(k / 2);
        }
    }

    pop() {
        const node = this.#heap[1];
        this.#heap[1] = this.#heap[this.#n];
        this.#heap[this.#n--] = null;
        
        let k = 1;
        let j = 2 * k;
        while (j <= this.#n) {
            if (j < this.#n && this.#less(j + 1, j)) j++;
            if (!this.#less(j,k)) break;
            [this.#heap[k], this.#heap[j]] = [this.#heap[j], this.#heap[k]];
            k = j;
            j = 2 * k;
        }
        
        return node;
    }

    size() {
        return this.#n;
    }
    
    #less(i, j) {
        return this.#heap[i].val < this.#heap[j].val;
    }
}
// another approach with creating list, sorting it and then recreating new list from it;
// var mergeKLists = function(lists) {
//     const flattenedArr = []; //temporarily take out of Linked List structure
    
//     for (let i = 0; i < lists.length; i++) {
//         while (lists[i]) {
//             flattenedArr.push(lists[i].val);
//             lists[i] = lists[i].next;
//         }
//     }
    
//     flattenedArr.sort((a, b) => {return a - b}); // sort into ascending order
    
//     const numTotalNodes = flattenedArr.length;
    
//     if (numTotalNodes === 0 ) {
//         const emptyNode = new ListNode(undefined, undefined);
//         return emptyNode.next;
//     }
    
//     let prevNode = new ListNode(flattenedArr[numTotalNodes - 1], undefined);
    
//     for (let i = flattenedArr.length - 2; i >= 0; i--) {
//         // recreate the linked list (flattened)
//         prevNode = new ListNode(flattenedArr[i], prevNode);
//     }
    
//     return prevNode;
// };
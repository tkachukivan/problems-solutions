/**
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

 var sortedListToBST = function(head) {
    if (!head) return null;
    const values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    
    return collect(0, values.length - 1);;
    
    function collect(lo, hi) {
        if (lo > hi) return null;
        
        const mid = lo + Math.floor((hi - lo) / 2);
        let node = new TreeNode(values[mid]);
        node.left = collect(lo, mid - 1);
        node.right = collect(mid + 1, hi);

        return node;
    }
};

// var sortedListToBST = function(head) {
//     const numOfNodes = countNodes(head)
//     return traverse(numOfNodes)
    
//     function traverse(n) {
//         if (n <= 0) return null
        
//         const left = traverse(Math.floor(n / 2))
//         const root = new TreeNode(head.val)       
//         root.left = left
//         head = head.next
//         root.right = traverse(n - Math.floor(n / 2) - 1)
        
//         return root
//     }
    
//     function countNodes(node) {
//         let curr = head, count = 0
//         while (curr) curr = curr.next, count++
//         return count;
//     }
// }
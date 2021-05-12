/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// BFS
var connect = function(root) {
    if (!root) return root;
    const queue = [root];

    while(queue.length) {
        let size = queue.length;
        while(size) {
            size--;
            const node = queue.shift();
            node.next = size ? queue[0] : null;
            if (node.left) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }

    return root;
};

// iterative
// var connect = function(root) {
//     let ptr = root;
//     while(root && root.left){
//         let temp = root;
//         while(temp) {
//             temp.left.next = temp.right;
//             temp.right.next = temp.next ? temp.next.left : null;
//             temp = temp.next;
//         }
//         root = root.left;
//     }
//     return ptr;
// }

// DFS
// var connect = function(root) {
//     setPointer(root);
//     return root;
    
//     function setPointer(root) {
//         if (!root || !root.left || !root.right) return;
//         let left = root.left;
//         let right = root.right;
//         left.next = right;
//         if (root.next) right.next = root.next.left;
//         setPointer(root.left);
//         setPointer(root.right);
//     }
//     // Time Complexity: O(N), we visit every node exactly once
//     // Space Complexity: O(1), we simply relink given nodes
// };
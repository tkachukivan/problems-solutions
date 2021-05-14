/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if (!root) return null;
    const left = root.left;
    const right = root.right;
    root.left = null;
    root.right = flatten(left);
    let current = root;

    while (current.right) {
        current = current.right;
    }

    current.right = flatten(right);
    
    return root;
};

// const flatten = (root) => {
//     const list = [];
//     helper(root, list);
    
//     if(list.length === 0 ) return;
    
//     for(let i = 0; i < list.length - 1; i++) {
//         const node = list[i];
//         node.left = null;
//         node.right = list[i + 1];
//     }
    
//     const lastNode = list[list.length -1];
//     lastNode.left = null;
//     lastNode.right = null;
// };

// const helper = (node, list) => {
//     if(!node) return;
    
//     list.push(node);
//     helper(node.left, list);
//     helper(node.right, list);
// }

// var flatten = function(root) {
//     // right, left, root -> postorder dfs
//     // set left child to null & set right child to the previous node
//     let prev = null;
//     const traverse = node => {
//         if (node === null) {
//             return;
//         }
        
//         traverse(node.right);
//         traverse(node.left);
        
//         // task
//         node.left = null;
//         node.right = prev;
//         prev = node;
        
//     } 
    
//     traverse(root);
// };
/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    
    while(queue.length) {
        let items = queue.length;
        const level = [];
        for (let i = 0; i < items; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    
    return result;
//     as we need to visit every node dfs will work as well    
//     if (!root) return [];
//     const result = [];
//     dfs(root, 0);
//     return result;
//     function dfs(node, level) {
//         if (!result[level]) {
//             result[level] = [];
//         }
//         result[level].push(node.val);
//         if (node.left) dfs(node.left, level + 1);
//         if (node.right) dfs(node.right, level + 1);
//     }
};
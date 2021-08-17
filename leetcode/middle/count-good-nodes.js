/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var goodNodes = function(root) {
    let result = 0;
    
    traverse(root, -Infinity);
    
    return result;
    
    function traverse(node, maxVal) {
        if (node.val >= maxVal) result++;
        const newMax = Math.max(maxVal, node.val);
        node.left && traverse(node.left, newMax);
        node.right && traverse(node.right, newMax);
    }
};
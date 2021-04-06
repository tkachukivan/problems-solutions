/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree
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
 var maxDepth = function(root) {
    if (!root) return 0; 
    return getDepth(root, 0);
    
    function getDepth(node, level) {
        level++;
        const left = node.left ? getDepth(node.left, level) : level;
        const right = node.right ? getDepth(node.right, level) : level;
        
        return Math.max(left, right);
    }
};
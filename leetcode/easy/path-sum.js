/**
 * https://leetcode.com/problems/path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    return dfs(root, 0);
    
    function dfs(node, currentTarget) {
        if (!node) return false;
        const newTarget = currentTarget + node.val;
        if (!node.left && !node.right && newTarget === targetSum) {
            return true;
        }

        return dfs(node.left, newTarget) || dfs(node.right, newTarget);
    }
};
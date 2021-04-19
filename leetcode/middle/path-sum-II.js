/**
 * https://leetcode.com/problems/path-sum-ii
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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    const result = [];
    dfs([], root, 0);
    
    return result;
    
    function dfs(nums, node, currentSum) {
        if (!node) return;
        const newTarget = currentSum + node.val;
        nums.push(node.val);
        if (!node.left && !node.right && newTarget === targetSum) {
            result.push([...nums]);
            nums.pop();
            return;
        }
        
        dfs(nums, node.left, newTarget);
        dfs(nums, node.right, newTarget);
        nums.pop();
    }
};
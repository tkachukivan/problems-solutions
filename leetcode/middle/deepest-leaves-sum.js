/**
 * https://leetcode.com/problems/deepest-leaves-sum
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
 var deepestLeavesSum = function(root) {
    let maxLevelSum = root.val;
    let maxLevel = 0;
    
    dfs(root, 0);

    return maxLevelSum;
    
    function dfs(node, level) {
        if (level > maxLevel) {
            maxLevel = level;
            maxLevelSum = 0;
        }
        if (level === maxLevel) {
            maxLevelSum += node.val;
        }
        if (node.left) dfs(node.left, level + 1);
        if (node.right) dfs(node.right, level + 1); 
    }
};
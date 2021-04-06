/**
 * https://leetcode.com/problems/validate-binary-search-tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root, Infinity, -Infinity);
    
    function validate(node, smaller, bigger) {
        if (!node) return true;
        if (node.val <= bigger || node.val >= smaller) return false;
        
        return validate(node.left, Math.min(smaller, node.val), bigger) && validate(node.right, smaller, Math.max(bigger, node.val));
    }
};
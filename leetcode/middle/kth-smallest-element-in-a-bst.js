/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let index = 0;
    let result = null;
    inorder(root);
    
    return result;
    
    function inorder(node) {
        if (!node) return;
        if (result !== null) return;
        inorder(node.left);
        index++;
        if (index === k) {
            result = node.val;
            return;
        }
        inorder(node.right);
    }
};

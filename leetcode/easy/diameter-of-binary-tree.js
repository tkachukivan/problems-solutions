/**
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
 var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    getDiameter(root);
    
    return diameter;
    
    function getDiameter(node) {
        if (!node) return 0;
        const left = getDiameter(node.left);
        const right = getDiameter(node.right);
        diameter = Math.max(diameter, left + right);
        
        return Math.max(left, right) + 1;
    }
};
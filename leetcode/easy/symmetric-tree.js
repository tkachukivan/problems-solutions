/**
 * https://leetcode.com/problems/symmetric-tree
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
 var isSymmetric = function(root) {
     // we can use stack or queue here and use two of them
    const stack = [root.left, root.right];
    while(stack.length) {
        const left = stack.pop();
        const right = stack.pop();
        if (left === null && right === null) continue;
        if (right === null || left === null) return false
        if (left.val !== right.val) return false;
        stack.push(left.left);
        stack.push(right.right);
        stack.push(left.right);
        stack.push(right.left);
    }
    
    return true;
    
//     if (!root) return root;
    
//     const isMirrored = (left, right) => {
//         if (!left && !right) return true;
//         if (!left || !right) return false;
//         return (left.val === right.val && 
//                 isMirrored(left.left, right.right) && 
//                 isMirrored(left.right, right.left))
//     }
    
//     return isMirrored(root.left, root.right);
};
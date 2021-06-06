/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
 var maxPathSum = function(root) {
    let max = -Infinity;
    solve(root);
    return max;
    
    function solve(node) {
        let left = -Infinity;
        let right = -Infinity;
        let sum = node.val;
        let sumLeft = node.val;
        let sumRight = node.val;
        if (node.left) {
            left = solve(node.left);
            sum += left;
            sumLeft += left;
        }
        
        if (node.right) {
            right = solve(node.right);
            sum += right;
            sumRight += right;
        }
        max = Math.max(max, sum, sumLeft, sumRight, node.val);
        
        return Math.max(node.val, sumLeft, sumRight)
    }
};

// var maxPathSum = function(root) {
//   var max = -Infinity // Initialize to a very small number to handle a path of negative values
//   getMaxSum(root) // Call our recursive fn to start the program
  
//   return max // Once we have popped out of our recursive calls, `max` contains our maximum path sum
  
//   function getMaxSum(tree) {
//     if (tree == null) { return 0 } // Termination condition
    
//     const leftBranch = Math.max(0, getMaxSum(tree.left)) // calculate the root to leaf sum where root is the left node
//     const rightBranch = Math.max(0, getMaxSum(tree.right)) // calculate the root to leaf sum where root is the right node
//     const currentPath = leftBranch + tree.val + rightBranch  // Sum the path: left -> root -> right (leaf to leaf)
    
//     max = Math.max(max, currentPath) // if the current path is greater than the previous value of `max`, update `max` to the current path sum
//     return tree.val + Math.max(leftBranch, rightBranch)
//   }
// };
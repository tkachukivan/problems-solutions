/**
 * https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/
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
// var maxProduct = function(root) {
//     const MOD = 10 ** 9 + 7;
//     let result = 0;
//     countTreeSum(root);
//     getMaxProduct(root, 0);
    
    
//     return result % MOD;
    
//     function countTreeSum(node) {
//         if (!node) return 0;
        
//         node.sum = node.val + countTreeSum(node.left) + countTreeSum(node.right);
        
//         return node.sum;
//     }
    
//     function getMaxProduct(node, otherTreeSum) {
//         const fullTree = otherTreeSum + node.sum;
//         let left = 0;
//         let right = 0;
//         if (node.left) {
//             left = (fullTree - node.left.sum) * node.left.sum;
//             getMaxProduct(node.left, fullTree - node.left.sum)
//         }
        
//         if (node.right) {
//             right = (fullTree - node.right.sum) * node.right.sum;
//             getMaxProduct(node.right, fullTree - node.right.sum)
//         }
        
//         result = Math.max(left, right, result);
//     }
// };

// var maxProduct = function(root) {
//     const MOD = 10 ** 9 + 7;
//     let result = 0;
//     const treeSum = countTreeSum(root);
//     getMaxProduct(root, 0);
    
    
//     return result % MOD;
    
//     function countTreeSum(node) {
//         if (!node) return 0;
        
//         return node.val + countTreeSum(node.left) + countTreeSum(node.right);
//     }
    
//     function getMaxProduct(node) {
//         if (!node) return 0;
//         const currentSum = node.val + getMaxProduct(node.left) + getMaxProduct(node.right);
//         result = Math.max(result, (treeSum - currentSum) * currentSum);
//         return currentSum;
//     }
// };

var maxProduct = function(root) {
    if (root == null) {
        return 0;
    }
    
    let subSums = [];
    let totalSum = (function dfs(node) {
        if (node == null) {
            return 0;
        }
        
        let sum = node.val + dfs(node.left) + dfs(node.right);
        subSums.push(sum);
        return sum;
    })(root);
    
    let maxProd = 0;
    for (let subSum of subSums) {
        maxProd = Math.max(maxProd, subSum * (totalSum - subSum));
    }
    
    return maxProd % (1e9 + 7);
};
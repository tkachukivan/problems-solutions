/**
 * https://leetcode.com/problems/binary-tree-cameras/
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
 var minCameraCover = function(root) {
    const covered = new Set();
    covered.add(null);
    let result = 0;
    
    place(root, null);
    
    return result;
    
    function place(node, parent) {
        if (!node) return;
        place(node.left, node);
        place(node.right, node);
        if ((parent === null && !covered.has(node)) || !covered.has(node.left) || !covered.has(node.right)) {
            result++;
            covered.add(node);
            covered.add(node.left);
            covered.add(node.right);
            covered.add(parent);
        }
    }
};

// dp
// var minCameraCover = function(root) {
//     const result = place(root);
    
//     return Math.min(result[1], result[2]);
    
//     function place(node) {
//         if (!node) return [0, 0, 999999];
        
//         const left = place(node.left);
//         const right = place(node.right);
        
//         let minLeft = Math.min(left[1], left[2]);
//         let minRight = Math.min(right[1], right[2]);
        
//         return [
//             left[1] + right[1], // 0: Strict ST; All nodes below this are covered, but not this one
//             Math.min(left[2] + minRight, right[2] + minLeft), // 1: Normal ST; All nodes below and incl this are covered - no camera
//             1 + Math.min(left[0], minLeft) + Math.min(right[0], minRight), // 2: Placed camera; All nodes below this are covered, plus camera here
//         ];
//     }
// };

/** 
* There are 3 states a node could be
* state 0 : the node is not monitored
* state 1 : the node has a camera
* state 2 : the node is monitored by neighbour
* 
* Main Idea, travel from bottom to up, because leaf level has most nodes, we should not add 
* camera on leaf
*/
// var minCameraCover = function(root) {
//     var result = 0;
//     /** tree travel function that return the state of a node */
//     var travel = function(node) {
//         if(!node) {
//             return 2; 
//             //if return 0, we will need to add camera on leaf, 
//             //if return 1, means the leaf nodes will be monitored, and we will not add camera on leaf's parent node, so we have to return 2 here
//         }
//         var left = travel(node.left);
//         var right = travel(node.right);
//         // both childs are monitored
//         if(left === 2 && right === 2) {
//             return 0;
//         }
//         // one of the child is not monitored
//         if(left === 0 || right === 0) {
//             result++;
//             return 1
//         }
//         // one of the child has camera
//         if(left === 1 || right === 1) {
//             return 2;
//         }
//         return; //I add a return here for my coding style, we have covered all the cases of childs, we must return either 0 or 1 or 2
//     }
//     //in case the root doesn't get monitored
//     if(travel(root) === 0) result++;
//     return result;
// };
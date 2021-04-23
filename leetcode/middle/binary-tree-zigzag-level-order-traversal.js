/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    const result = [];
    if (!root) return result;
    let isLeft = true;
    const queueL = [root];
    const queueR = []
    
    while (queueL.length || queueR.length) {
        const level = [];
        if (isLeft) {
            isLeft = false;
            while(queueL.length) {
                const node = queueL.pop();
                level.push(node.val);
                if(node.left) queueR.push(node.left);
                if(node.right) queueR.push(node.right);
            }
        } else {
            isLeft = true;
            while(queueR.length) {
                const node = queueR.pop();
                level.push(node.val);
                if(node.right) queueL.push(node.right);
                if(node.left) queueL.push(node.left);
            }
        }
        result.push(level);
    }
    
    return result;
};
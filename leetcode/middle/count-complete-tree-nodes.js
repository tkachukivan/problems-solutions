/**
 * https://leetcode.com/problems/count-complete-tree-nodes/
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
// var countNodes = function(root) {
//     if (!root) return 0;
//     return 1 + countNodes(root.left) + countNodes(root.right);
// };

var countNodes = function(root) {
    if (!root) return 0;
    const h = getHeight(root);
    if (h === 0) return 1;
    let left = 1;
    let right = (2 ** h) - 1;
    
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (exist(mid, h, root)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return (2 ** h) - 1 + left;
};

function getHeight(root) {
    let h = 0;
    while (root.left) {
        h++;
        root = root.left;
    }
    
    return h;
}

function exist(val, h, node) {
    let left = 0;
    let right = (2 ** h) - 1;
    
    for (let i = 0; i < h; i++) {
        let mid = left + Math.floor((right - left) / 2);
        if (val <= mid) {
            node = node.left;
            right = mid;
        } else {
            node = node.right;
            left = mid + 1;
        }
    }
    
    return node !== null;
}
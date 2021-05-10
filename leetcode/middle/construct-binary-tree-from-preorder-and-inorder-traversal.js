/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    const n = preorder.length;
    let current = 0;
    const indexes = new Map();
    for (let i = 0; i < n; i++) {
        indexes.set(inorder[i], i);
    }
    
    return add(0, n - 1);
    
    function add(lo, hi) {
        if (lo > hi) return null;
        const node = new TreeNode(preorder[current]);
        const rootIndex = indexes.get(preorder[current++]);

        node.left = add(lo, rootIndex - 1);
        node.right = add(rootIndex + 1, hi);

        return node;
    }
};
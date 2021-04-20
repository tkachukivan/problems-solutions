/**
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
 var preorder = function(root) {
    const result = [];
    if (!root) return result;
    dfs(root);
    return result;
    
    function dfs(node) {
        result.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            dfs(node.children[i]);
        }
    }
};
/**
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const result = [];
    if (!root) return result;
    const queue = [root];
    
    while (queue.length) {
        const level = [];
        let size = queue.length;
        while (size) {
            size--;
            const node = queue.shift();
            level.push(node.val);
            if (!node.children) continue;

            for (let child of node.children) {
                queue.push(child);
            }
        }
        
        result.push(level);
    }
    
    
    return result;
};
/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    return hasTarget(root);
    
    function hasTarget(node) {
        if (!node) return false;
        if (find(root, k - node.val, node)) return true;
        
        return hasTarget(node.left) || hasTarget(node.right);
    }
    
    function find(node, value, current) {
        if (!node) return false;
        if (node.val === value) {
            return node !== current;
        }
        if (node.val < value) return find(node.right, value, current);
        else return find(node.left, value, current)
    }
};

var findTarget = (root, k, nums = new Map([])) => {
    if (!root) return false;
    if (nums.has(root.val)) return true;
    nums.set(k - root.val, 0);
    return findTarget(root.left, k, nums) || findTarget(root.right, k, nums);
};

var findTarget = function(root, k) {
  if (!root) return false;
  const set = new Set();
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};
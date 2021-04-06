/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    return addToBST(0, nums.length -1);
    
    function addToBST(lo, hi) {
        const mid = Math.floor((lo + hi)/2);
        const node = new TreeNode(nums[mid]);
        if (lo <= mid - 1) {
             node.left = addToBST(lo, mid-1);
        }
        if (mid+1 <= hi) {
            node.right = addToBST(mid + 1, hi);
        }
        
        return node;
    }
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
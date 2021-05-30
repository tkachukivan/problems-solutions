/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 const SPLIT = ','

 var serialize = function(root) {
     if (!root) return '';
     const values = [];
     traverse(root);
     
     return values.join(SPLIT);
     
     function traverse(node) {
         if (!node) {
             values.push(null);
             return;
         }
         
         values.push(node.val);
         traverse(node.left);
         traverse(node.right);
     }
 };
 
 /**
  * Decodes your encoded data to tree.
  *
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function(data) {
     if (!data) return null;
 
     const values = data.split(SPLIT); // can be queue so we will be able to not use currentElement index
     let currentElement = 0;
 
     return recreateTree();
     
     function recreateTree() {
         if (!values[currentElement]) {
             currentElement++;
             return null;
         }
         
         const node = new TreeNode(Number(values[currentElement++]));
         node.left = recreateTree();
         node.right = recreateTree();
         
         return node;
     }
 };
 
 /**
  * Your functions will be called as such:
  * deserialize(serialize(root));
  */
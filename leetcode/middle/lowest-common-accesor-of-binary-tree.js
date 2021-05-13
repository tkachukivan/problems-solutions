/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     const pPath = [];
//     const qPath = [];
    
//     find(root, pPath, p.val);
//     find(root, qPath, q.val);

//     let smaller, bigger;
//     if (pPath.length > qPath.length) {
//         smaller = qPath;
//         bigger = pPath;
//     } else {
//         smaller = pPath;
//         bigger = qPath;
//     }
    
//     let smallerIndex = 0;
//     let biggerIndex = bigger.length - smaller.length;
    
//     while (smallerIndex < smaller.length) {
//         if (smaller[smallerIndex] === bigger[biggerIndex]) return bigger[biggerIndex];
//         smallerIndex++;
//         biggerIndex++;
//     }
          
//     return -1;
    
//     function find(node, path, value) {
//         if (node.val === value) {
//             path.push(node);
//             return true;
//         }
        
//         if ((node.left && find(node.left, path, value)) || (node.right && find(node.right, path, value))) {
//             path.push(node);
//             return true;
//         }
        
//         return false;
//     }
// };

const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (!left) return right  // p and q are in the right subtree
    if (!right) return left  // p and q are in the left subtree
    return root              // p is in one side and q is in the other
};

// function lowestCommonAncestor(root, p, q) {

//     //idea: find all the parents in a map

//     let parents = new Map();
//     findParents(root, parents);

//     //choose a node to be compared against the other
//     let node = p;
    
//     while(node !== null){

//         //if the other node (q) is descendant of node (originally p), then the node must be the LCA
//         if(node === root || isDescendant(node, q)){
//             return node;
//         }
//         //otherwise repeat using the parent of node (an ancestor of node p)
//         node = parents.get(node);
//     }

//     return null;

// };


// function findParents(root, parentMap){

//     if (parentMap.size==0){
//         parentMap.set(root, null);
//     }

//     if(root===null){
//         return
//     }

//     if(root.left){
//         parentMap.set(root.left, root);
//         findParents(root.left, parentMap);
//     }

//     if(root.right){
//         parentMap.set(root.right, root)
//         findParents(root.right, parentMap);
//     }

// }


// function isDescendant(root, q){ //check if q is descendant of root

//     if(root === null){
//         return false;
//     }

//     if(q === root){
//         return true
//     }

//     return isDescendant(root.left, q) || isDescendant(root.right, q);

// }
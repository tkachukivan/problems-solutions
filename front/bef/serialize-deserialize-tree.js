// This is the class for the node
// you can use this directly as it is bundled with your code
// https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree
// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
    // your code here
    const result = [];
    traverse(root);

    return result.join();

    function traverse(node) {
        if (!node) {
            result.push(null);
            return;
        }
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
    }
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
    // your code here
    const arrayTree = str.split();
    let currentIndex = 0;

    return buildTree();

    function buildTree() {
        if (!arrayTree[currentIndex]) {
            currentElement++;
            return null;
        }
        const node = new Node(arrayTree[currentIndex++]);

        node.left = buildTree();
        node.right = buildTree();

        return node;
    }
}

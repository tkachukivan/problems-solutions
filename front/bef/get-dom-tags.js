/**
 * https://bigfrontend.dev/problem/get-DOM-tags
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
    // your code here
    const tags = new Set();

    traverseTree(tree);

    return [...tags];

    function traverseTree(node) {
        tags.add(node.tagName.toLowerCase());

        for (let child of node.children) {
            traverseTree(child);
        }
    }
}
/**
 * https://bigfrontend.dev/problem/Next-Right-Sibiling
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
    // your code here
    const result = null;
    if (!root) return result;
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        if (node === target) return queue.shift() || null;
        for (const child of node.children) {
            queue.push(child);
        }
    }
}
/**
 * https://bigfrontend.dev/problem/Traverse-DOM-level-by-level
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
 function flatten(root) {
    // your code here
    const result = [];
    if (!root) return result;
    const queue = [root];
  
    while (queue.length) {
      const node = queue.shift();
      result.push(node);
      for (const child of node.children) {
        queue.push(child);
      }
    }
  
  
    return result;
  }
/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (!head) return head;
    
    const cloneNodes = new Map();
    const dHead = new Node();

    let current = head;
    let currentNew = dHead;
    while (current) {
        const node = new Node(current.val);
        currentNew.next = node
        currentNew = currentNew.next;
        cloneNodes.set(current, node);
        current = current.next;
    }
    
    current = head;
    while (current) {
        if (current.random !== null) {
            cloneNodes.get(current).random = cloneNodes.get(current.random);
        }

        current = current.next;
    }
    
    return dHead.next;
};

// without map
// var copyRandomList = function(head) {
//     if (!head) return null;
//     let curr = head;
//     while (curr) {
//         let copy = new Node(curr.val, curr.next, null);
//         copy.next = curr.next;
//         curr.next = copy;
//         curr = curr.next;
//         curr = curr.next;
//     }
    
//     curr = head;
//     while(curr) {
//         curr.next.random = curr.random ? curr.random.next : null;
//         curr = curr.next.next;
//     }
    
//     curr = head;
//     let result = head.next;
//     let resPtr = result;
//     while(curr) {
//         curr.next = curr.next.next;
//         curr = curr.next;
//         resPtr.next = resPtr.next ? resPtr.next.next : null;
//         resPtr = resPtr.next;
//     }
    
//     return result;
// };

// a bit different but with map
var copyRandomList = function(head) {
    if(!head) {
      return null;
    }
    const clones = new Map();
    let n = head;
    while(n) {
      clones.set(n, new Node(n.val));
      n = n.next
    }
    n = head;
    while(n) {
      clones.get(n).next = clones.get(n.next) || null;
      clones.get(n).random = clones.get(n.random) || null;
      n = n.next
    }
    return clones.get(head);
};
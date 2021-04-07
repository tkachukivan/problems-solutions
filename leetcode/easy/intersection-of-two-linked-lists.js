/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    const nodes = new Set();
    let current = headA;
    while(current) {
        nodes.add(current);
        current = current.next;
    }
    
    current = headB;
    while(current) {
        if (nodes.has(current)) return current;
        current = current.next;
    }
    
    return null;
    // O(1) space solution
    // let curA = headA;
    // let curB = headB;
    // while (curA !== curB) {
    //     curA = curA === null ? headB : curA.next;
    //     curB = curB === null ? headA : curB.next;
    // }
    // return curA;
};
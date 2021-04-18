/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    const dummy = { next: head };
    let right = dummy;
    let left = dummy;
    while (n >= 0) {
        n--;
        right = right.next;
    }
    
    while (right) {
        right = right.next;
        left = left.next;
    }
    
    left.next = left.next.next;
    return dummy.next;
};
/**
 * https://leetcode.com/problems/partition-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    if (!head) return null;
    const dummyLeftHead = { next: null };
    const dummyRightHead = { next: null };
    let left = dummyLeftHead;
    let right = dummyRightHead;
    let current = head;
    
    while(current) {
        if (current.val < x) {
            left.next = current;
            left = left.next;
        } else {
            right.next = current;
            right = right.next;
        }
        current = current.next;
    }
    right.next = null;
    
    left.next = dummyRightHead.next;

    return dummyLeftHead.next;
};
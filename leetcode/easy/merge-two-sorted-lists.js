/**
 * https://leetcode.com/problems/merge-two-sorted-lists
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let head = { next: null };
    let currentMerged = head;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            currentMerged.next = l1;
            l1 = l1.next;
        } else {
            currentMerged.next = l2;
            l2 = l2.next;
        }
        currentMerged = currentMerged.next;
    }
    
    if (l1) currentMerged.next = l1;
    if (l2) currentMerged.next = l2;
    
    return head.next;
};
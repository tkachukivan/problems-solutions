/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head.next;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    
    return false;
};
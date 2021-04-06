/**
 * https://leetcode.com/problems/reverse-linked-list
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (!head || !head.next) return head;
    let current = head;
    let prev = null;
    let tmp = null;
    while(current) {
        tmp = current.next;
        current.next = prev;
        prev = current;
        current = tmp;
    };

    return prev;
};
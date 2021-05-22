/**
 * https://leetcode.com/problems/add-two-numbers/
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
 var addTwoNumbers = function(l1, l2) {
    const dHead = new ListNode();
    let current = dHead;
    let l1Node = l1;
    let l2Node = l2;
    let carry = 0;

    while (l1Node || l2Node) {
        const x = l1Node ? l1Node.val : 0;
        const y = l2Node ? l2Node.val : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1Node) l1Node = l1Node.next;
        if (l2Node) l2Node = l2Node.next;
    }
    
    if (carry) {
        current.next = new ListNode(carry);
    }
    
    return dHead.next;
};
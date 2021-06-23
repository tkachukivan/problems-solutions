/**
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if (right - left === 0) return head;
    
    let prev = null;
    let currentNode = head;
    let currentNumber = 1;
    
    while (currentNumber < left) {
        prev = currentNode;
        currentNode = currentNode.next;
        currentNumber++;
    }
    
    let con = prev, tail = currentNode;
    
    while (currentNumber <= right) {
        const tmp = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = tmp;
        currentNumber++;
    }
    
    // Adjust the final connections as explained in the algorithm
    if (con != null) {
        con.next = prev;
    } else {
        head = prev;
    }

    tail.next = currentNode;
    
    return head;
};
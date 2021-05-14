/**
 * https://leetcode.com/problems/sort-list/
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
// var sortList = function(head) {
//     if (!head) return null;
//     const values = [];
//     let current = head;
//     while (current) {
//         values.push(current.val);
//         current = current.next;
//     }
    
//     values.sort((a, b) => a - b);
    
//     const dHead = new ListNode();
//     current = dHead;
    
//     for (let i = 0; i < values.length; i++) {
//         current.next = new ListNode(values[i]);
//         current = current.next;
//     }
    
//     return dHead.next;
// };

var sortList = function(head) {
    if (!head || !head.next) return head;
    
    const midNode = getMid(head);
    const left = sortList(head);
    const right = sortList(midNode);
    
    return mergeLists(left, right);
};

function getMid(node) {
    let prev = null;
    let slow = node;
    let fast = node;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null
    return slow;
}

function mergeLists(left, right) {
    const dHead = new ListNode();
    let current = dHead;
    let currentLeft = left;
    let currentRight = right;

    while (currentLeft && currentRight) {
        if (currentLeft.val < currentRight.val) {
            // current.next = new ListNode(currentLeft.val);
            current.next = currentLeft;
            currentLeft = currentLeft.next;
        } else {
            // current.next = new ListNode(currentRight.val);
            current.next = currentRight;
            currentRight = currentRight.next;
        }
            
        current = current.next;
    }
    
    current.next = currentLeft ? currentLeft : currentRight;
    
    return dHead.next;
}
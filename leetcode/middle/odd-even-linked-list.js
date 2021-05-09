/**
 * https://leetcode.com/problems/odd-even-linked-list/
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
 var oddEvenList = function(head) {
    if (!head) return null;
    const dummyOdd = new ListNode(null);
    const dummyEven = new ListNode(null);
    let isOdd = true;
    let current = head;
    let currentOdd = dummyOdd;
    let currentEven = dummyEven;
    
    while (current) {
        const node = new ListNode(current.val);
        if (isOdd) {
            currentOdd.next = node;
            currentOdd = currentOdd.next;
        } else {
            currentEven.next = node;
            currentEven = currentEven.next;
        }
        
        isOdd = !isOdd;
        current = current.next;
    }
    
    currentOdd.next = dummyEven.next;
    
    return dummyOdd.next;
};

// function oddEvenList(head) {
//   if (!head) return head;

//   var odd = head;
//   var even = head.next;
//   while (odd.next && odd.next.next) {
//     var tmp = odd.next;
//     odd.next = odd.next.next;
//     odd = odd.next;
//     tmp.next = odd.next;
//   }
//   odd.next = even;
//   return head;
// }
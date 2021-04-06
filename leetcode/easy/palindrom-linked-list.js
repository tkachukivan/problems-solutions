/**
 * https://leetcode.com/problems/palindrome-linked-list
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    let middle, last;
    middle = last = head;
    while(last.next) {
        if (last.next.next) {
            middle = middle.next;
            last = last.next.next;
        } else {
            last = last.next;
        }
    }
    
    reverse(middle.next);
    // let result = true;
    let node1 = head;
    let node2 = last;
    while(node2) {
         if (node1.val !== node2.val) {
            // result = false;
            return false;
            // break;
         }
        
        node1 = node1.next;
        node2 = node2.next;
    }
    
    // reverse(last); reverse linked list back
    
    // return result;
    return true;
    
    function reverse(node) {
        let prev = null;
        let current = node;
        let tmp;
        while(current) {
            tmp = current;
            current = current.next;
            tmp.next = prev;
            prev = tmp;
        }
    }
    
    // can be done simpler but with O(n) memory
    // if (!head || !head.next) return true;
    // let current = head;
    // const values = [];
    // while(current) {
    //     values.push(current.val);
    //     current = current.next;
    // }
    // let lo = 0, hi = values.length - 1;
    // while(lo <= hi) {
    //     if (values[lo++] !== values[hi--]) return false;
    // }
    // return true;
};
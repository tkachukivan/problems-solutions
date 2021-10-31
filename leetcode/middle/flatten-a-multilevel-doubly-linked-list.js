/**
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
    if (!head) return null;
    let current = head;
    
    while (current) {
        if (!current.child) {
            current = current.next;
            continue;
        }
        
        const flattenedList = flatten(current.child);
        flattenedList.prev = current;
        current.child = null;
        const next = current.next;
        let flattenedListEnd = flattenedList;
        
        while (flattenedListEnd.next) {
            flattenedListEnd = flattenedListEnd.next;
        }
        
        flattenedListEnd.next = next;
        if (next) next.prev = flattenedListEnd;
        current.next = flattenedList;
        current = next;
    }
    
    return head;
};
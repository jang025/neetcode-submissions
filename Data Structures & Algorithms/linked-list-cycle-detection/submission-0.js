/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // pseudocode 
        // fast and slow pointer 
        // slow --> this.next
        // fast --> this.next.next

        // in a cycle , fast pointers would eventually catch up with slow pointers

        let slow = head;
        let fast = head;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true;
        }
        return false;
    }
}

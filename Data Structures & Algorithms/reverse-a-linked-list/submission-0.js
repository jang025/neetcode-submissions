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
     * @return {ListNode}
     */
    reverseList(head) {
        // pseudocode 
        // at any step you need 3 variables 
        // 1) prev (node behind your current node)(starts at null)
        // 2) cur (node you're currently at, starts at head)
        // 3) next (node after you)

        // At each iteration
        // save next to be current.next
        // reverse the pointer from current.next to prev
        // move prev forward
        // move current forward

        // at the end , cur is null and prev is the new head
        // return prev

        let prev = null;
        let cur = head;
        let next;
        while(cur !== null){
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev
    }
}

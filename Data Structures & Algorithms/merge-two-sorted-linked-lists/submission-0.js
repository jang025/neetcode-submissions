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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // pseudocode
        // dummy -> [0]
        //current -> [0]
        // after first iteration, you've attached node [1] from list1
        //dummy -> [0] -> [1]
        //current -> [1]       ← current moves forward, dummy stays

        // after second iteration, you've attached node [1] from list2
        // dummy -> [0] -> [1] -> [1]
        //current -> [1]       ← current moves forward again, dummy stays

        // while iterating , need to check that both list1 and list2 still have nodes
        // inside the loop
        // 1) attach the node of the linked list that is smaller
        // 2) Advance that linked list pointer to the next node within that linked list
        // 3) Advance the current pointer

        // After iterating through the loop
        // 1) Append the remaining nodes from list1 (if list2 is empty)
        // 2) Append the remaining nodes from list2 (if list1 is empty)

        const dummy = new ListNode(0);
        let current = dummy;
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        if (list1 !== null) current.next = list1;
        if (list2 !== null) current.next = list2;
        return dummy.next;
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        /*
        Pseudocode 
        If a node is null, there are no nodes in that subtree , so you return 0.
        That's what gets bubbled up to the parent

        So the complete logic is just two things:

        1) Base case : If a node is null --> return 0 
        2) Recursive case : return max(depth of left subtree, depth of right subtree) + 1
        */
        if (root === null) return 0;
        return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
    }
}

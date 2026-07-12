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
     * @return {TreeNode}
     */
    invertTree(root) {
        // when i hit base case: if root is null return null
        // recursive case : At the current node , 1. swap the left and right children 2. Recurse into both children so the swap happens at every level below too
        if(root === null) return null;
        const left = this.invertTree(root.left)
        const right = this.invertTree(root.right)
        root.left = right
        root.right = left
        return root
    }
}

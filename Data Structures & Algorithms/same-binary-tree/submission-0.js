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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // if both p and q are null , return true 
        if(p === null && q === null) return true;
        // if only one is null , return false
        if((p === null && q !== null) || (p !== null && q === null)) return false;
        // check for p.val and q.val , if they are not the same return false
        if(p.val !== q.val) return false;
        const leftSame = this.isSameTree(p.left, q.left);
        const rightSame = this.isSameTree(p.right, q.right);
        return leftSame && rightSame;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // initial thoughts
        // binary search only works for sorted data(sorted arrays)
        // divide and conquer algorithm
        // O(logn) time algo

        // pseudocode
        // have left pointer pointing at the first element of the array
        // have right pointer pointing at the last element of the array

        // iterate through the array
        // have a variable mid , point to the middle of the array
        // check mid against the target,
        // if its the same as the target , return mid
        // if its less than the target , have the left pointer pointing at mid + 1
        // if its more than the target, have the right pointer pointing at mid - 1

        let leftPointer = 0;
        let rightPointer = nums.length - 1;

        for (let i = 0; i < nums.length; i++) {
            const mid = Math.floor((leftPointer + rightPointer) / 2);
            if (nums[mid] < target) {
                leftPointer = mid + 1;
            } else if (nums[mid] > target) {
                rightPointer = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}

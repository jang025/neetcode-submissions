class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Pseudocode

        // Sum equals target -> return the indices
        // Sum less than target -> move the left pointer right
        // Sum greater than target -> move the right pointer left
        // solution wants to return the indices(1-indexed) but arrays in js are still 0-indexed
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;
        while (leftPointer < rightPointer) {
            const sum = numbers[leftPointer] + numbers[rightPointer];
            if (sum > target) {
                rightPointer--;
            } else if (sum < target) {
                leftPointer++;
            } else {
                return [leftPointer + 1, rightPointer + 1];
            }
        }
    }
}

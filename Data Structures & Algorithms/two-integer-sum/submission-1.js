class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // iterate through the array , for every existing element in the array ,
        //  i want to calculate the complement of the existing element and the target
        // i want to check , if this complement already exists in a hash map , i will return
        // the index of the complement , and the index of the current element iterated
        // if the complement does not exist , i will store the value of the existing element in the hash map as a key
        // with the value being the index
        const hashMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const complement = target - num;
            if (hashMap.has(complement)) {
                return [hashMap.get(complement), i];
            }
            hashMap.set(num, i);
        }
    }
}

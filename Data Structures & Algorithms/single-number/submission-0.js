class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // XOR  (0 ^ 0 === 0) (1 ^ 0 === 1) (1 ^ 1 === 0) (0 ^ 1 === 1)
        // start with 0
        let xorResult = 0;
        for(const num of nums){
            xorResult ^= num;
        }
        return xorResult;
    }
}

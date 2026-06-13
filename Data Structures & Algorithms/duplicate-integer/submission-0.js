class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Pseudocode 
        // use a Map or a Set to store the integers, Set is better as it doesnt store duplicates
        // iterate through the array , for every element ,
        // if the current element exists in the set , return true
        // if it doesnt exist in the set , return false once the loop has finished running
        const set = new Set();

        for(let i = 0; i < nums.length; i++){
            const num = nums[i];
            if(set.has(num)){
                return true;
            }else {
                set.add(num)
            }
        }
        return false;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //Pseudocode
        // i need to clean the string , remove non alphanumeric characters in the string
        // and convert the string either to lowercase or uppercase

        //solution 1 pseudocode
        // convert the string into an array of characters
        // reverse the array then convert it back to a string,
        // if the reverse is equal to the cleaned string , return true
        // else return false

        // solution 2 pseudocode
        // convert the string into an array of characters
        // store a left pointer at the start of the array and a right pointer at the end of the array
        // iterate through the array, moving the left pointer to the right and the right pointer to the left
        // at every iteration compare the characters, if equal continue forward until the left >= right , return true
        // if not equal , return false

        const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        // solution 1
        // const reverseCleanedStr = cleanedStr.split("").reverse().join("");
        // return cleanedStr === reverseCleanedStr;
        // solution 2
        const cleanedStrArr = cleanedStr.split("");
        let left = 0;
        let right = cleanedStrArr.length - 1;
        while (left < right) {
            if (cleanedStrArr[left] === cleanedStrArr[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }
}

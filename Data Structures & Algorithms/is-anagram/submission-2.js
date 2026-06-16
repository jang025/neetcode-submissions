class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check the length of s and t , if its not equal , return false
        // create a hashmap , iterating through the first string
        // and counting the frequency of each character of the first string
        // iterate through the second string , if one of the characters of the second string exists in the hashmap
        // reduce the frequency by one
        // if a character in the second string string does not exist in the hashmap , return false
        if (s.length !== t.length) return false;
        const hashmap = new Map();
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (hashmap.has(char)) {
                hashmap.set(char, hashmap.get(char) + 1);
            } else {
                hashmap.set(char, 1);
            }
        }
        for (let j = 0; j < t.length; j++) {
            const char = t[j];
            if (hashmap.has(char) && hashmap.get(char) >= 1) {
                hashmap.set(char, hashmap.get(char) - 1);
            } else {
                return false;
            }
        }
        return true;
    }
}

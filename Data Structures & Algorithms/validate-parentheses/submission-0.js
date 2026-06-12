class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const charMap = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        const stack = [];
        // pseudo-code
        //Iterate through each character
        //If it's an opening bracket → push it onto the stack
        //If it's a closing bracket → check if the top of the stack is its matching opener
        //If it matches → pop the stack and continue
        //If it doesn't match → return false
        //At the end → the stack should be empty (length -->0)
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            }else if (
                stack[stack.length - 1] === charMap[char]
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
        return stack.length === 0;
    }
}

class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */


    // helper function to process the digits 
    sumOfSquares(n) {
        // start at 0
        let num = 0;
        while(n > 0){
            const rightMostDigit = n % 10
            num += Math.pow(rightMostDigit , 2)
            // remove the rightmost digit 
            n = Math.floor(n / 10 )
        }
        return num;
    }
    isHappy(n) {
        // SET data structure to store the numbers and check for duplicates
        const mySet = new Set();
        // start at the number n 
        let numOutput = n;
        while(numOutput !== 1){
            numOutput = this.sumOfSquares(numOutput);
            if(!mySet.has(numOutput)){
                mySet.add(numOutput)
            }else{
                return false;
            }
        }
        return true;
    }
}

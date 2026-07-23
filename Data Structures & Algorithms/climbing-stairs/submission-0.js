class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // climbStairs(n) {
    //     // every distinct path(number of distinct ways) to reach steps n -1 and every distinct path (number of distinct ways) to reach steps n - 2 are mutually exclusive
    //     // ways(n) = ways(n - 1) + ways(n - 2); recurrence relationship 


    //     // ways(1) = 1  1 way to reach 1 step
    //    //  ways(2) = 2   2 ways to reach 2 steps

    //     // bottom-up approach (tabulation) (iteratively)
    //      Inital values 
    //     if(n === 1) return 1; // 1 step
    //     if(n === 2) return 2; // 1 + 1 step or 2 steps


    //     let prev2 = 1; // 2 steps from where i am supposed to be which is ways(n - 2)
    //     let prev1 = 2; // 1 step from where i am supposed to be which is ways(n - 1)

    //     for(let i = 3; i <= n; i++){
    //         const currentStep = prev2 + prev1
    //         prev2 = prev1;
    //         prev1 = currentStep;
    //     }
    //     return prev1;
    // }
    climbStairs(n, memo = {}) {
        // top-down approach : recursion with memoization 
        // check cache first
        if(n in memo) return memo[n];

        // base cases
        if(n === 1) return 1;
        if (n === 2) return 2;

        // recursive case, store in memo before returning
        // to call methods that live within the class , must use the this keyword
        memo[n] = this.climbStairs(n - 1, memo) + this.climbStairs(n - 2, memo);
        return memo[n];
    }
}

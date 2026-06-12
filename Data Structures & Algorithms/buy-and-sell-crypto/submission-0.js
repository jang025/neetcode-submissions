class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // pseudocode
        // store the current max profit as 0
        // store the minimum price as prices[0]
        // Iterate through the array , updating the minimum price when a minimum price is found
        // compare the max profit against the current profit if sold today
        // update the max profit if a bigger one is found 
        let maxProfit = 0;
        let minPrice = prices[0]
        for(let i = 0; i < prices.length; i++){
            const price = prices[i];
            if(price < minPrice){
                minPrice = price;
            }
            const profit = price - minPrice;
            if(profit > maxProfit){
                maxProfit = profit;
            }
        }
        return maxProfit;
    }
}

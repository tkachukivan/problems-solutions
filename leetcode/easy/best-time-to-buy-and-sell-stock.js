/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let smallestPrise = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit = Math.max(maxProfit, prices[i] - smallestPrise);
        } else {
            smallestPrise = Math.min(smallestPrise, prices[i]);
        }
    }
    return maxProfit;
};
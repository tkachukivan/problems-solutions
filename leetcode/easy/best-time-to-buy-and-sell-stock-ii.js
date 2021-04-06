/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0;
    // let buyPrice = 0;
    // let buy = true;

    // for (let i = 0; i < prices.length; i++) {
    //     const current = prices[i];
    //     const next = prices[i + 1];
    //     if (buy && current < next) {
    //         buyPrice = current;
    //         buy = false;
    //     } else if (!buy && (!next || current > next)) {
    //         buy = true;
    //         profit += current - buyPrice;
    //     }
    // }
    // let valley = prices[0];
    // let peak = prices[0];
    // let i = 0;
    // while(i < prices.length - 1) {
    //     while(i < prices.length - 1 && prices[i] >= prices[i + 1]) {
    //         i++
    //     }
    //     valley = prices[i];
    //     while(i < prices.length - 1 && prices[i] <= prices[i + 1]) {
    //         i++
    //     }
    //     peak = prices[i];
        
    //     profit += peak - valley;
    // }
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    } 
    
    return profit;
};
//Best time to buy and sell stockYou are given an array prices
// where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy
//one stock andchoosing a different day in the future to sell that
//stock.Return the maximum profit youcan achieve from this transaction.
//If you cannot achieve any profit, return 0.
//Example 1: Input: prices = [7,1,5,3,6,4] Output: 5
//Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6),
//profit = 6-1 = 5. Note that buying on day 2 and selling onday 1 is not
//allowed because you must buy before you sell.
//Example 2: Input: prices =[7,6,4,3,1] Output: 0 Explanation: In this case,
//no transactions are done and the maxprofit = 0
//Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104

let prices = [7, 6, 4, 3, 1, 14, 25, 67, 1, 50, 4, 16, 78, 89, 57];

function maxProfit(prices) {
  let buy = prices[0];
  let sell = 0;
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > buy) {
      if (prices[i] > sell) {
        sell = prices[i];
        maxProfit = Math.max(maxProfit, sell - buy);
      }
    } else {
      buy = prices[i];
    }
  }
  return maxProfit;
}

console.log(maxProfit(prices));

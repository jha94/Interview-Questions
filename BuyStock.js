var maxProfit = function(prices) {
    let price = prices[0];
    let profit = 0;
    for(let index=1;index<prices.length;index++){
        let currentPrice = prices[index];
        let currentProfit = currentPrice-price;
        if(price>currentPrice){
            price = currentPrice
        }
        if(currentProfit>profit){
            profit = currentProfit
        }
    }
    return profit
};

// console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([7,1,5,3,6,4]))


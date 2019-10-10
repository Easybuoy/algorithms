def find_max_profit(prices):
    maxProfit = 0

    for i in range(0, len(prices)):
        for j in range(i+1, len(prices)):
            if (i+1 < len(prices)):
                if (maxProfit == 0):
                    maxProfit = prices[j] - prices[i]
                if (maxProfit < prices[j] - prices[i]):
                    maxProfit = prices[j] - prices[i]

    return maxProfit


print(find_max_profit([1050, 270, 1540, 3800, 2]))
# print(find_max_profit([100, 90, 80, 50, 20, 10]))
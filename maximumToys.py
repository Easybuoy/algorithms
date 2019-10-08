def maximumToys(prices, k):
    prices = sorted(prices)
    numofItemsThatCanBePurchasedCount = 0
    sumOfItemsToBePurchased = 0
    for price in prices:
        if (price + sumOfItemsToBePurchased < k):
            sumOfItemsToBePurchased += price
            numofItemsThatCanBePurchasedCount += 1
        else:
            return numofItemsThatCanBePurchasedCount


print(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
makeChange = (coins, amount) => {
    coins.sort((a,b) => b-a)
    let coinTotal = 0;
    let index = 0;
    while (amount > 0) {
      if (coins[index] <= amount) {
        amount -= coins[index];
        coinTotal++
      } else {
        index++;
      }
    }
    return coinTotal;
  }
  
  console.log(makeChange([5,10,25], 40))
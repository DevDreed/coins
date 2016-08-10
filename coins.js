/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  //convert ammount to pennies for simple math
  var amountInPennies = amount * 100; 

  var quarters = parseInt(amountInPennies / 25); 
  var dimes = parseInt((amountInPennies % 25) / 10); 
  var nickels = parseInt(((amountInPennies% 25) % 10) / 5); 
  var pennies = parseInt(amountInPennies % 5 ); 

  coinPurse.quarters = quarters;
  coinPurse.dimes = dimes;
  coinPurse.nickels = nickels;
  coinPurse.pennies = pennies;

  return coinPurse;
}

var coins = coinCounter(0.67);
console.log(coins);

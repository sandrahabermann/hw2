
let blockchain = [
  { fromUser: null, toUser: "brian", amount: 21000 },
  { fromUser: "brian", toUser: "ben", amount: 9000 },
  { fromUser: "brian", toUser: "jeff", amount: 7000 },
  { fromUser: "ben", toUser: "jeff", amount: 400 },
  { fromUser: "brian", toUser: "jeff", amount: 1500 },
  { fromUser: "jeff", toUser: "brian", amount: 4500 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 }
]

// Write a function that, when given a username (i.e. brian, ben, or jeff),
// returns the number of KelloggCoin that user has in their KelloggCoin "wallet".

// HINT! You will have to use all the JavaScript programming fundamentals we've
// learned about so far, i.e. variables, arrays, objects, conditionals, loops,
// and functions, to complete this task. There are ways to do this using some
// more advanced array functions, and by all means, experiment with this, but
// get it done using just the basics first.

// To get to the name I go over blockchain[i].toUser     console.log(blockchain[0].toUser);
// let briansum = 0;
// let getBalance = function(name){
//
//   for (let i=0;i<blockchain.length;i++){
//
//   if (blockchain[i].toUser===name){
//   briansum = briansum + blockchain[i].amount
//
// } else if (blockchain[i].fromUser===name){
//   briansum = briansum - blockchain[i].amount
//
//   } else{
//       console.log("pity");
//   }
//   }
//
//   return briansum;
// }
//
//
//
//   console.log(getbalance("brian")briansum);
  // console.log(getBalance("brian"));
// It should print out:
// Brian's KelloggCoin balance is 8000
// Ben's KelloggCoin balance is 10350
// Jeff's KelloggCoin balance is 2650




let sum = 0
let getBalance = function (name){
  for (let i=0;i<blockchain.length;i++){

  if (blockchain[i].toUser===name){
  sum = sum + blockchain[i].amount

} else if (blockchain[i].fromUser===name){
  sum = sum - blockchain[i].amount

  } else{
  }
  }

    return sum;
  }

console.log("Brian's KelloggCoin balance is " + getBalance("brian"));
sum=0;
console.log("Ben's KelloggCoin balance is " + getBalance("ben"));
sum=0;
console.log("Jeff's KelloggCoin balance is " + getBalance("jeff"));

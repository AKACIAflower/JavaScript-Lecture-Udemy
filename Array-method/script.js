// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Array method practice

// 1. Find bank deposit sum
const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur);

// Make the above variable simpler
const bankDepositSum1 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum, bankDepositSum1);

// 2. Find the number of deposits over $1,000

// 2-1. Way 1
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

// console.log(numDeposits1000);

// 2-2. Way 2
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// 3. Make the sum of deposits and the sum of withdrawals into an object form.
// 3-1. Way 1
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// 3-2. Way 2
const sums1 = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums1);

// Challenge 1
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  console.log(titleCase);
};

convertTitleCase("and this and is a nice title");

// Challenge 2
const dogs = [
  { weight: 22, curFood: 250, owner: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owner: ["Matilda"] },
  { weight: 13, curFood: 275, owner: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owner: ["Michael"] },
];

// 1. dogs??? recFood ????????????
dogs.forEach((dog) => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// 2. Sarah??? ?????? ?????? ????????? ?????? ????????? ??????
const dogSarah = dogs.find((dog) => dog.owner.includes("Sarah"));

console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

// 3. ???????????? ??? ?????? ?????? ?????? ?????? ??? ?????? ?????? ?????? ?????? ????????? ????????? ??????
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owner);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owner);
console.log(ownersEatTooLittle);

// 4. ????????? ?????? ?????? ?????? ?????? ????????? ??????
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 5. ???????????? ?????? ????????? ???????????? ?????? ????????? (????????? : ?????? ?????? 90%?????? ?????? 110%?????? ??????.)
const checkEatingOkay = (dog) =>
  dog.recFood * 0.9 < dog.curFood && dog.recFood * 1.1 > dog.curFood;

const eatingOkayDogs = dogs.filter(checkEatingOkay);
console.log(eatingOkayDogs);

// 6. ????????? ?????? ????????? ???????????? ????????? ????????????
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

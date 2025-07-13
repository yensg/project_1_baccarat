// const cardsOnHand = [
//   [10, 4],
//   [2, 3],
//   [3, 2],
// ];

// const cardSuite = cardsOnHand.map(([num, suite]) => {
//   return suite;
// });

// const cardNum = cardsOnHand.map(([num, suite]) => {
//   return num;
// });

// console.log(cardSuite);
// console.log(cardNum);

// const totalNum = cardNum.reduce((total, num) => {
//   return (total += num);
// });

// console.log(totalNum);

const cardsOnHand = [
  [10, 4],
  [2, 3],
  [3, 2],
];

cardTypes = {
  spadeA: [1, 4],
  spade2: [2, 4],
  spade3: [3, 4],
  spade4: [4, 4],
  spade5: [5, 4],
  spade6: [6, 4],
  spade7: [7, 4],
  spade8: [8, 4],
  spade9: [9, 4],
  spade10: [10, 4],
  spadeJ: [11, 4],
  spadeQ: [12, 4],
  spadeK: [13, 4],
};

console.log(cardTypes);

let checkcards;

for (const [key, value] of Object.entries(cardTypes)) {
  if (value === cardsOnHand[1]) {
    checkcards = key;
    console.log(value);
    console.log(cardsOnHand[1]);
  }
}

console.log(checkcards);

// let number = 8;
// number = number % 10;

// console.log(number);

// const cardsTotalFn = (array) => {
//   return array.reduce((total = 0, value) => {
//     if (value === 11 || value === 12 || value === 13) {
//       value = 10;
//     }
//     return (total += value);
//   }, 0);
// };

// const test1 = [11, 12, 13];

// console.log(cardsTotalFn(test1));

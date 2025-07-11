const cardsOnHand = [
  [10, 4],
  [2, 3],
  [3, 2],
];

const cardSuite = cardsOnHand.map(([num, suite]) => {
  return suite;
});

const cardNum = cardsOnHand.map(([num, suite]) => {
  return num;
});

console.log(cardSuite);
console.log(cardNum);

const totalNum = cardNum.reduce((total, num) => {
  return (total += num);
});

console.log(totalNum);

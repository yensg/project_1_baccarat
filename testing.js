// // CardTypes
// const spadeA = [1, 4];
// const spade2 = [2, 4];
// const spade3 = [3, 4];
// const spade4 = [4, 4];
// const spade5 = [5, 4];
// const spade6 = [6, 4];
// const spade7 = [7, 4];
// const spade8 = [8, 4];
// const spade9 = [9, 4];
// const spade10 = [10, 4];
// const spadeJ = [11, 4];
// const spadeQ = [12, 4];
// const spadeK = [13, 4];

// const heartA = [1, 3];
// const heart2 = [2, 3];
// const heart3 = [3, 3];
// const heart4 = [4, 3];
// const heart5 = [5, 3];
// const heart6 = [6, 3];
// const heart7 = [7, 3];
// const heart8 = [8, 3];
// const heart9 = [9, 3];
// const heart10 = [10, 3];
// const heartJ = [11, 3];
// const heartQ = [12, 3];
// const heartK = [13, 3];

// const clubA = [1, 2];
// const club2 = [2, 2];
// const club3 = [3, 2];
// const club4 = [4, 2];
// const club5 = [5, 2];
// const club6 = [6, 2];
// const club7 = [7, 2];
// const club8 = [8, 2];
// const club9 = [9, 2];
// const club10 = [10, 2];
// const clubJ = [11, 2];
// const clubQ = [12, 2];
// const clubK = [13, 2];

// const diamondA = [1, 1];
// const diamond2 = [2, 1];
// const diamond3 = [3, 1];
// const diamond4 = [4, 1];
// const diamond5 = [5, 1];
// const diamond6 = [6, 1];
// const diamond7 = [7, 1];
// const diamond8 = [8, 1];
// const diamond9 = [9, 1];
// const diamond10 = [10, 1];
// const diamondJ = [11, 1];
// const diamondQ = [12, 1];
// const diamondK = [13, 1];

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

const altMap = (array) => {
  const retArray = [];
  for (const item of array) {
    return retArray.push(item[0]);
  }
};

console.log(altMap(cardsOnHand));

// cardTypes = {
//   spadeA: [1, 4],
//   spade2: [2, 4],
//   spade3: [3, 4],
//   spade4: [4, 4],
//   spade5: [5, 4],
//   spade6: [6, 4],
//   spade7: [7, 4],
//   spade8: [8, 4],
//   spade9: [9, 4],
//   spade10: [10, 4],
//   spadeJ: [11, 4],
//   spadeQ: [12, 4],
//   spadeK: [13, 4],
// };

// console.log(cardTypes);

// const checkCardsFn = () => {
//   let checkcards;
//   for (const [key, value] of Object.entries(cardTypes)) {
//     // console.log(JSON.stringify(value));
//     // console.log(JSON.stringify(cardsOnHand[0]));

//     if (JSON.stringify(value) === JSON.stringify(cardsOnHand[0])) {
//       return (checkcards = key);
//       // console.log(value);
//       // console.log(cardsOnHand[0]);
//     }
//   }
//   // return checkcards;
// };

// console.log(checkCardsFn());

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

// A = 9;

// B = 8;

// C = 9;

// if (A !== (8 || 9)) {
//   console.log(A);
// } else {
//   console.log(false);
// }

// a = [1, 2, 3];
// const same = (numArray) => (num[0] === num[1]) === num[2];
// // console.log(a.every((num = num)));
// console.log(a.every(same));

// same(a);

// const samePair = 3;
// const sameSuites = 3;
// const samePairSameSuites = 5;

// b = [2, 2, 4];

// const tallyOdds = (array1, array2) => {
//   if (array1[0] === array1[1] && array2[0] === array2[1]) {
//     return samePairSameSuites;
//   } else if (array1[0] === array1[1]) {
//     return samePair;
//   } else if (array2[0] === array2[1]) {
//     return sameSuites;
//   } else {
//     return 2;
//   }
// };

// console.log(tallyOdds(a, b));

// c = 99 % 10;
// console.log(c);

if (
  player2ResultStatus === "" &&
  (player2CardsTotal % 10 === 9 || player2CardsTotal % 10 === 8)
) {
  if (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) {
    messages.innerHTML += "Player 2 tie!" + "\n";
    player2ResultStatus = "tie";
    player2TotalToken += player2CurrTokenAmt;
  } else {
    messages.innerHTML += "Player 2 won!" + "\n";
    player2ResultStatus = "won";
    if (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) === 1) {
      player2TotalToken += 2 * player2CurrTokenAmt;
      document.querySelector("#player2TokenDisplay").innerText =
        player2TotalToken;
      messages.innerHTML += player2CurrTokenAmt + "!";
    } else {
      player2TotalToken +=
        tallyOddsFinal(dealerCardsValue, dealerCardsSuites) *
        player2CurrTokenAmt;
      document.querySelector("#player2TokenDisplay").innerText =
        player2TotalToken;
      messages.innerHTML +=
        tallyOddsFinal(dealerCardsValue, dealerCardsSuites) *
          player2CurrTokenAmt +
        "!";
    }
  }
} else if (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) {
  if (player2PlayingStatus === "play") {
    messages.innerHTML += "Player 2 lost!" + "\n";
    if (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) !== 1) {
      player2TotalToken -
        player2CurrTokenAmt *
          (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) - 1);
      document.querySelector("#player2TokenDisplay").innerText =
        player2TotalToken;
      messages.innerHTML =
        player2CurrTokenAmt *
          (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) - 1) +
        "!";
    } else {
      messages.innerHTML = player2CurrTokenAmt;
    }
    dealerP2ResultStatus = "won";
  }
}

// Variables
let dealerCards = "";
let dealerCardsValue = "";
let dealerCardsSuites = "";

let messages = "";
let randomIndex = 0;
let cardsValue;

let player1Cards = [];
let player1CardsValue = "";
let player1CardsSuites = "";
let player1ActionSelection = "";

let player1PlayingStatus = "";
let player1SelectedTokenType = 0;
let player1CurrTokenAmt = 0;
let player1TotalToken = 1000;
document.querySelector("#player1TokenDisplay").innerText = player1TotalToken;
let player1AddMinusToken = "+";

let player2Cards = "";
let player2CardsValue = "";
let player2CardsSuites = "";
let player2ActionSelection = "";
let player2SelectedTokenAmt = 0;
let player2CurrTokenAmt = 0;
let player2TotalToken = 1000;
document.querySelector("#player2TokenDisplay").innerText = player1TotalToken;
let player2AddMinusToken = "+";

let turn = "player1";

// CardsOdds
const samePair = 2;
const sameSuites = 2;
const samePairSameSuites = 5;

const sameTriple = 5;
const consecutiveTripleSameSuites = 10;
const sameTripleSameSuites = 7;
const tripleSameSuites = 3;
const consecutiveTriple = 5;

// CardTypes
const spadeA = [1, 4];
const spade2 = [2, 4];
const spade3 = [3, 4];
const spade4 = [4, 4];
const spade5 = [5, 4];
const spade6 = [6, 4];
const spade7 = [7, 4];
const spade8 = [8, 4];
const spade9 = [9, 4];
const spade10 = [10, 4];
const spadeJ = [11, 4];
const spadeQ = [12, 4];
const spadeK = [13, 4];

const heartA = [1, 3];
const heart2 = [2, 3];
const heart3 = [3, 3];
const heart4 = [4, 3];
const heart5 = [5, 3];
const heart6 = [6, 3];
const heart7 = [7, 3];
const heart8 = [8, 3];
const heart9 = [9, 3];
const heart10 = [10, 3];
const heartJ = [11, 3];
const heartQ = [12, 3];
const heartK = [13, 3];

const clubA = [1, 2];
const club2 = [2, 2];
const club3 = [3, 2];
const club4 = [4, 2];
const club5 = [5, 2];
const club6 = [6, 2];
const club7 = [7, 2];
const club8 = [8, 2];
const club9 = [9, 2];
const club10 = [10, 2];
const clubJ = [11, 2];
const clubQ = [12, 2];
const clubK = [13, 2];

const diamondA = [1, 1];
const diamond2 = [2, 1];
const diamond3 = [3, 1];
const diamond4 = [4, 1];
const diamond5 = [5, 1];
const diamond6 = [6, 1];
const diamond7 = [7, 1];
const diamond8 = [8, 1];
const diamond9 = [9, 1];
const diamond10 = [10, 1];
const diamondJ = [11, 1];
const diamondQ = [12, 1];
const diamondK = [13, 1];

const totalCards = [
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4],
  [5, 4],
  [6, 4],
  [7, 4],
  [8, 4],
  [9, 4],
  [10, 4],
  [11, 4],
  [12, 4],
  [13, 4],

  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
  [7, 3],
  [8, 3],
  [9, 3],
  [10, 3],
  [11, 3],
  [12, 3],
  [13, 3],

  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [5, 2],
  [6, 2],
  [7, 2],
  [8, 2],
  [9, 2],
  [10, 2],
  [11, 2],
  [12, 2],
  [13, 2],

  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1],
  [6, 1],
  [7, 1],
  [8, 1],
  [9, 1],
  [10, 1],
  [11, 1],
  [12, 1],
  [13, 1],
];

// Functions

// Decides how much tokens to play against total token on hand
const player1TokenSelection = (event) => {
  player1SelectedTokenType = parseFloat(event.target.innerText);
  if (player1AddMinusToken === "+") {
    player1CurrTokenAmt += player1SelectedTokenType;
  }
  if (player1AddMinusToken === "-") {
    player1CurrTokenAmt -= player1SelectedTokenType;
  }
  if (player1CurrTokenAmt <= 0) {
    player1CurrTokenAmt = 0;
    document.querySelector("#player1PlayButton").innerText =
      player1CurrTokenAmt;
  } else if (player1CurrTokenAmt > player1TotalToken) {
    player1CurrTokenAmt = player1TotalToken;
  } else {
    document.querySelector("#player1PlayButton").innerText =
      player1CurrTokenAmt;
  }
};

// toggle between add and minus
const addMinus = () => {
  if (player1AddMinusToken === "+") {
    player1AddMinusToken = "-";
  } else {
    player1AddMinusToken = "+";
  }
  document.querySelector("#player1AddMinus").innerText = player1AddMinusToken;
};

// dealing first card out.
const randomlyDealCard = () => {
  randomIndex = Math.floor(Math.random() * totalCards.length);
  console.log(randomIndex);
};
randomlyDealCard();
console.log(totalCards.length);

// player 1 plays

const player1Play = () => {
  player1PlayingStatus = "play";
  randomlyDealCard();
  player1Cards.push(totalCards[randomIndex]);
};

// Function to get array of the cards' values
const cardsValueFn = (array) => {
  return array.map(([num, suites]) => {
    return num;
  });
};

// Function to get array of the cards' suites
const cardsSuitesFn = (array) => {
  return array.map(([num, suites]) => {
    return suites;
  });
};

player1Play();
player1Play();
player1CardsValue = cardsValueFn(player1Cards);
player1CardsSuites = cardsSuitesFn(player1Cards);

console.log(player1Cards);
console.log(player1CardsValue);
console.log(player1CardsSuites);

// const addMinus = (event) => {
//   player1AddMinusToken = event.target.innerText;
//   console.log(player1AddMinusToken);
// };

// Event Listeners
document.querySelector("#player1AddMinus").addEventListener("click", addMinus);
document
  .querySelector("#player1CoinsSelections")
  .addEventListener("click", player1TokenSelection);
// document.querySelector("#player1PlayButton").addEventListener("click",);

// document.querySelector(".player1").addEventListener("click", function (event) {
//   console.log(event.target, event.currentTarget);
// });

// document.querySelector(".player2").addEventListener("click", function (event) {
//   console.log(event.target, event.currentTarget);
// });

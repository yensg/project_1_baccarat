// Variables
let dealerCards = [];
let dealerCardsValue = "";
let dealerCardsTotal = "";
let dealerCardsSuites = "";

const messages = document.querySelector("#message");
let randomIndex = 0;
let cardsValue;

let player1Cards = [];
let player1CardsValue = "";
let player1CardsTotal = "";
let player1CardsSuites = "";
let player1ActionSelection = "";

let player1PlayingStatus = "";
let player1SelectedTokenType = 0;
let player1CurrTokenAmt = 0;
let player1TotalToken = 1000;
document.querySelector("#player1TokenDisplay").innerText = player1TotalToken;
let player1AddMinusToken = "+";

let player2Cards = [];
let player2CardsValue = "";
let player2CardsTotal = "";
let player2CardsSuites = "";
let player2ActionSelection = "";

let player2PlayingStatus = "noPlay";
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
  //   console.log(randomIndex);
};
randomlyDealCard();
// console.log(totalCards.length);

// start the game
const startGame = () => {
  if (player1PlayingStatus === "" || player2PlayingStatus === "") {
    return;
  }
  // generate first card
  if (player1PlayingStatus === "play") {
    randomlyDealCard();
    player1Cards.push(totalCards[randomIndex]);
    player1CardsValue = cardsValueFn(player1Cards);
    player1CardsSuites = cardsSuitesFn(player1Cards);
    document.querySelector("#player1Card1").innerText = player1Cards[0];
    // generate Second card
    randomlyDealCard();
    player1Cards.push(totalCards[randomIndex]);
    player1CardsValue = cardsValueFn(player1Cards);
    player1CardsSuites = cardsSuitesFn(player1Cards);
    player1CardsTotal = cardsTotalFn(player1CardsValue);
    console.log(player1Cards);
    console.log(player1CardsValue);
    // console.log(player1CardsSuites);
    console.log(player1CardsTotal);
    document.querySelector("#player1Card2").innerText = player1Cards[1];
  }
  // generate first card
  if (player2PlayingStatus === "play") {
    randomlyDealCard();
    player2Cards.push(totalCards[randomIndex]);
    player2CardsValue = cardsValueFn(player2Cards);
    player2CardsSuites = cardsSuitesFn(player2Cards);
    document.querySelector("#player2Card1").innerText = player1Cards[0];
    // generate Second card
    randomlyDealCard();
    player2Cards.push(totalCards[randomIndex]);
    player2CardsValue = cardsValueFn(player2Cards);
    player2CardsSuites = cardsSuitesFn(player2Cards);
    player2CardsTotal = cardsTotalFn(player2CardsValue);
    console.log(player2Cards);
    console.log(player2CardsValue);
    // console.log(player2CardsSuites);
    console.log(player2CardsTotal);
    document.querySelector("#player2Card2").innerText = player1Cards[1];
  }
  // generate first card
  if (player1PlayingStatus !== "" && player2PlayingStatus !== "") {
    randomlyDealCard();
    dealerCards.push(totalCards[randomIndex]);
    dealerCardsValue = cardsValueFn(dealerCards);
    dealerCardsSuites = cardsSuitesFn(dealerCards);
    document.querySelector("#dealerCard1").innerText = dealerCards[0];
    // generate Second card
    randomlyDealCard();
    dealerCards.push(totalCards[randomIndex]);
    dealerCardsValue = cardsValueFn(dealerCards);
    dealerCardsSuites = cardsSuitesFn(dealerCards);
    dealerCardsTotal = cardsTotalFn(dealerCardsValue);
    console.log(dealerCards);
    console.log(dealerCardsValue);
    // console.log(dealerCardsSuites);
    console.log(dealerCardsTotal);
    document.querySelector("#dealerCard2").innerText = dealerCards[1];
  }
  player2CardsTotal = 9;
  tallyResults2Cards();
};

const noPlaySelection = (event) => {
  // have to put ""? how about the inner.Text?
  if (event.target.id === "player1NoPlayButton") {
    player1PlayingStatus = "noPlay";
  }
  if (event.target.id === "player2NoPlayButton") {
    player2PlayingStatus = "noPlay";
  }
  console.log(event.target.id);
  console.log(player1PlayingStatus);
  console.log(player2PlayingStatus);
};

// player 1 plays
const player1Play = () => {
  if (player1TotalToken === 0) {
    player1PlayingStatus = "noPlay";
  }
  //   if (player1PlayingStatus === "noPlay" || player1Cards.length === 2) {
  //     return;
  //   }
  if (player1Cards.length === 2) {
    return;
  }
  player1PlayingStatus = "play";
  player1TotalToken -= player1CurrTokenAmt;
  document.querySelector("#player1TokenDisplay").innerText = player1TotalToken;
  startGame();
};

// Function to get array of the cards' values
const cardsValueFn = (array) => {
  return array.map(([num, suites]) => {
    return num;
  });
};

const cardsTotalFn = (array) => {
  return array.reduce((total, value) => {
    if (value === 11 || value === 12 || value === 13) {
      value = 10;
    }
    return (total += value);
  }, 0);
};

// Function to get array of the cards' suites
const cardsSuitesFn = (array) => {
  return array.map(([num, suites]) => {
    return suites;
  });
};

const tallyResults2Cards = () => {
  messages.innerText = "";
  if (
    (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) &&
    (player1CardsTotal % 10 === 9 || player1CardsTotal % 10 === 8)
  ) {
    messages.innerText = "Player 1 tie!";
  } else if (
    (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) &&
    (player2CardsTotal % 10 === 9 || player2CardsTotal % 10 === 8)
  ) {
    messages.innerText += "Player 2 tie!";
  } else if (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) {
    messages.innerText = "Dealer won!";
    return; // how to do it in a way that any of these 3 happens then stop?
  }
  if (player1CardsTotal % 10 === 9 || player1CardsTotal % 10 === 8) {
    messages.innerText = "Player 1 won!";
  }
  if (player2CardsTotal % 10 === 9 || player2CardsTotal % 10 === 8) {
    messages.innerText += "Player 2 won!";
  }
};

const reset = (event) => {
  dealerCards = [];
  dealerCardsValue = "";
  dealerCardsTotal = "";
  dealerCardsSuites = "";
  document.querySelector("#dealerCard1").innerText = "blank";
  document.querySelector("#dealerCard2").innerText = "blank";
  document.querySelector("#dealerCard3").innerText = "blank";

  messages.innerText = "Place your tokens!";
  randomIndex = 0;
  cardsValue;

  player1Cards = [];
  player1CardsValue = "";
  player1CardsTotal = "";
  player1CardsSuites = "";
  player1ActionSelection = "";

  player1PlayingStatus = "";
  player1SelectedTokenType = 0;
  player1CurrTokenAmt = 0;
  player1TotalToken = 1000;
  document.querySelector("#player1TokenDisplay").innerText = player1TotalToken;
  document.querySelector("#player1PlayButton").innerText = "&nbsp;";
  document.querySelector("#player1Card1").innerText = "blank";
  document.querySelector("#player1Card2").innerText = "blank";
  document.querySelector("#player1Card3").innerText = "blank";
  player1AddMinusToken = "+";

  player2Cards = [];
  player2CardsValue = "";
  player2CardsTotal = "";
  player2CardsSuites = "";
  player2ActionSelection = "";

  player2PlayingStatus = "noPlay";
  player2SelectedTokenAmt = 0;
  player2CurrTokenAmt = 0;
  player2TotalToken = 1000;
  document.querySelector("#player2TokenDisplay").innerText = player2TotalToken;
  document.querySelector("#player2PlayButton").innerText = "&nbsp;";
  document.querySelector("#player2Card1").innerText = "blank";
  document.querySelector("#player2Card2").innerText = "blank";
  document.querySelector("#player2Card3").innerText = "blank";
  player2AddMinusToken = "+";
};

// player1Play();
// player1Play();
// player1CardsValue = cardsValueFn(player1Cards);
// player1CardsSuites = cardsSuitesFn(player1Cards);

// console.log(player1Cards);
// console.log(player1CardsValue);
// console.log(player1CardsSuites);

// Event Listeners
document.querySelector("#player1AddMinus").addEventListener("click", addMinus);
document
  .querySelector("#player1CoinsSelections")
  .addEventListener("click", player1TokenSelection);
document
  .querySelector("#player1PlayButton")
  .addEventListener("click", player1Play);
document
  .querySelector("#player1NoPlayButton")
  .addEventListener("click", noPlaySelection);
document
  .querySelector("#player2NoPlayButton")
  .addEventListener("click", noPlaySelection);

document.querySelector("#reset").addEventListener("click", reset);
// document
//   .querySelector("playersTable")
//   .addEventListener("click", function (event) {
//     console.log(event.target, event.currentTarget);
//   });

// document.querySelector(".player2").addEventListener("click", function (event) {
//   console.log(event.target, event.currentTarget);
// });

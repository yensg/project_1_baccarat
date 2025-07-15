// Dealer
let dealerCards = [];
let dealerCardsValue = "";
let dealerCardsTotal = "";
let dealerCardsSuites = "";
let dealerP2ResultStatus = "";
let dealerP1ResultStatus = "";

// Common Variables
let turn = "";
const messages = document.querySelector("#message");
let randomIndex = 0;
let cardsValue;

// Player 1
let player1Cards = [];
let player1CardsValue = "";
let player1CardsTotal = "";
let player1CardsSuites = "";
let player1ActionSelection = "";
let player1ResultStatus = "";
let player1HitOrStay = "";

let player1PlayingStatus = "";
let player1SelectedTokenType = 0;
let player1CurrTokenAmt = 0;
let player1TotalToken = 1000;
document.querySelector("#player1TokenDisplay").innerText = player1TotalToken;
let player1AddMinusToken = document.querySelector("#player1AddMinus").innerText;

// Player 2
let player2Cards = [];
let player2CardsValue = "";
let player2CardsTotal = "";
let player2CardsSuites = "";
let player2ActionSelection = "";
let player2ResultStatus = "";
let player2HitOrStay = "";

let player2PlayingStatus = ""; //updated by PlayButton either play or noPlay
let player2SelectedTokenAmt = 0;
let player2CurrTokenAmt = 0;
let player2TotalToken = 1000;
document.querySelector("#player2TokenDisplay").innerText = player2TotalToken;
let player2AddMinusToken = document.querySelector("#player2AddMinus").innerText;

// CardsOdds
// 2Cards
const samePair = 2;
const sameSuites = 2;
const samePairSameSuites = 5;
// 3Cards
const sameTriple = 5;
const consecutiveTripleSameSuites = 10;
const sameTripleSameSuites = 7;
const tripleSameSuites = 3;
const consecutiveTriple = 5;

// CardTypes kvp
const cardTypes = {
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

  heartA: [1, 3],
  heart2: [2, 3],
  heart3: [3, 3],
  heart4: [4, 3],
  heart5: [5, 3],
  heart6: [6, 3],
  heart7: [7, 3],
  heart8: [8, 3],
  heart9: [9, 3],
  heart10: [10, 3],
  heartJ: [11, 3],
  heartQ: [12, 3],
  heartK: [13, 3],

  clubA: [1, 2],
  club2: [2, 2],
  club3: [3, 2],
  club4: [4, 2],
  club5: [5, 2],
  club6: [6, 2],
  club7: [7, 2],
  club8: [8, 2],
  club9: [9, 2],
  club10: [10, 2],
  clubJ: [11, 2],
  clubQ: [12, 2],
  clubK: [13, 2],

  diamondA: [1, 1],
  diamond2: [2, 1],
  diamond3: [3, 1],
  diamond4: [4, 1],
  diamond5: [5, 1],
  diamond6: [6, 1],
  diamond7: [7, 1],
  diamond8: [8, 1],
  diamond9: [9, 1],
  diamond10: [10, 1],
  diamondJ: [11, 1],
  diamondQ: [12, 1],
  diamondK: [13, 1],
};

// Based cards
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
  // add else

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

const player2TokenSelection = (event) => {
  player2SelectedTokenType = parseFloat(event.target.innerText);
  if (player2AddMinusToken === "+") {
    player2CurrTokenAmt += player2SelectedTokenType;
  }

  if (player2AddMinusToken === "-") {
    player2CurrTokenAmt -= player2SelectedTokenType;
  }
  if (player2CurrTokenAmt <= 0) {
    player2CurrTokenAmt = 0;
    document.querySelector("#player2PlayButton").innerText =
      player2CurrTokenAmt;
  } else if (player2CurrTokenAmt > player2TotalToken) {
    player2CurrTokenAmt = player2TotalToken;
  } else {
    document.querySelector("#player2PlayButton").innerText =
      player2CurrTokenAmt;
  }
};

// // combine functions together
// const playerTokenSelection = (event) => {
//   if(event.currentTarget === "player2CoinsSelections"){
//     if (player2AddMinusToken === "+") {
//     player2CurrTokenAmt += parseFloat(event.target.innerText);
//   } else if (player2AddMinusToken === "-") {
//     player2CurrTokenAmt -= parseFloat(event.target.innerText);
//   }
//  else
//   if (player1AddMinusToken === "+") {
//     player1CurrTokenAmt += parseFloat(event.target.innerText);
//   }
//   if (player1AddMinusToken === "-") {
//     player1CurrTokenAmt -= pparseFloat(event.target.innerText);
//   }

//   if (player2CurrTokenAmt <= 0) {
//     player2CurrTokenAmt = 0;
//     document.querySelector("#player2PlayButton").innerText =
//       player2CurrTokenAmt;
//   } else if (player2CurrTokenAmt > player2TotalToken) {
//     player2CurrTokenAmt = player2TotalToken;
//   } else {
//     document.querySelector("#player2PlayButton").innerText =
//       player2CurrTokenAmt;
//   }
// };

// toggle between add and minus
const addMinus = (event) => {
  if (event.target.innerText === "+") {
    event.target.innerText = "-";
    player1AddMinusToken = document.querySelector("#player1AddMinus").innerText;
    player2AddMinusToken = document.querySelector("#player2AddMinus").innerText;
  } else {
    event.target.innerText = "+";
    player1AddMinusToken = document.querySelector("#player1AddMinus").innerText;
    player2AddMinusToken = document.querySelector("#player2AddMinus").innerText;
  }
};

// dealing first card out.
const randomlyDealCard = () => {
  randomIndex = Math.floor(Math.random() * totalCards.length);
};

// start the game
const startGame = () => {
  // generate first card
  if (player1PlayingStatus === "play") {
    player1Deal3Cards();
    document.querySelector("#player1Card1").innerText =
      displayCards(player1Cards[0]) + " | " + player1Cards[0];
    // generate Second card
    player1Deal3Cards();
    document.querySelector("#player1Card2").innerText =
      displayCards(player1Cards[1]) + " | " + player1Cards[1];
  }
  // generate first card
  if (player2PlayingStatus === "play") {
    player2Deal3Cards();
    document.querySelector("#player2Card1").innerText =
      displayCards(player2Cards[0]) + " | " + player2Cards[0];
    // generate Second card
    player2Deal3Cards();
    document.querySelector("#player2Card2").innerText =
      displayCards(player2Cards[1]) + " | " + player2Cards[1];
  }
  // generate first card
  if (player1PlayingStatus !== "" && player2PlayingStatus !== "") {
    dealerDeal3Cards();
    document.querySelector("#dealerCard1").innerText =
      displayCards(dealerCards[0]) + " | " + dealerCards[0];
    // generate Second card
    dealerDeal3Cards();
    document.querySelector("#dealerCard2").innerText =
      displayCards(dealerCards[1]) + " | " + dealerCards[1];
  }
  tallyResults2Cards();
};

const player1Deal3Cards = () => {
  randomlyDealCard();
  player1Cards.push(totalCards[randomIndex]);
  player1CardsValue = cardsValueFn(player1Cards);
  player1CardsSuites = cardsSuitesFn(player1Cards);
  player1CardsTotal = cardsTotalFn(player1CardsValue);
};

const player2Deal3Cards = () => {
  randomlyDealCard();
  player2Cards.push(totalCards[randomIndex]);
  player2CardsValue = cardsValueFn(player2Cards);
  player2CardsSuites = cardsSuitesFn(player2Cards);
  player2CardsTotal = cardsTotalFn(player2CardsValue);
};
const dealerDeal3Cards = () => {
  randomlyDealCard();
  dealerCards.push(totalCards[randomIndex]);
  dealerCardsValue = cardsValueFn(dealerCards);
  dealerCardsSuites = cardsSuitesFn(dealerCards);
  dealerCardsTotal = cardsTotalFn(dealerCardsValue);
};

const noPlaySelection = (event) => {
  // have to put ""? how about the inner.Text?
  if (event.target.id === "player1NoPlayButton") {
    player1PlayingStatus = "noPlay";
    turn = "player2";
    document.querySelector("#player1PlayButton").style.display = "none";
    document.querySelector("#player1NoPlayButton").style.display = "none";
  } else if (event.target.id === "player2NoPlayButton") {
    player2PlayingStatus = "noPlay";
    turn = "player1";
    document.querySelector("#player2PlayButton").style.display = "none";
    document.querySelector("#player2NoPlayButton").style.display = "none";
  }
  if (
    (player1PlayingStatus === "play" && player2PlayingStatus === "noPlay") ||
    (player2PlayingStatus === "play" && player1PlayingStatus === "noPlay")
  ) {
    startGame();
  }
};

const player1Play = () => {
  if (player1Cards.length === 2 || player1PlayingStatus === "play") {
    return;
  }
  if (player1TotalToken === 0) {
    player1PlayingStatus = "noPlay";
    document.querySelector("#player1PlayButton").style.display = "none";
  }
  player1PlayingStatus = "play";
  player1TotalToken -= player1CurrTokenAmt;
  document.querySelector("#player1TokenDisplay").innerText = player1TotalToken;
  document.querySelector("#player1NoPlayButton").style.display = "none";
  if (player2PlayingStatus !== "") {
    startGame();
  }
};

const player2Play = () => {
  if (player2Cards.length === 2 || player2PlayingStatus === "play") {
    return;
  }
  if (player2TotalToken === 0) {
    player2PlayingStatus = "noPlay";
    document.querySelector("#player2PlayButton").style.display = "none";
  }
  player2PlayingStatus = "play";
  player2TotalToken -= player2CurrTokenAmt;
  document.querySelector("#player2TokenDisplay").innerText = player2TotalToken;
  document.querySelector("#player2NoPlayButton").style.display = "none";
  if (player1PlayingStatus !== "") {
    startGame();
  }
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

// locate the card description via checking the each card array
const displayCards = (array) => {
  let card = "";
  for (const [key, value] of Object.entries(cardTypes)) {
    if (JSON.stringify(value) === JSON.stringify(array)) {
      return (card = key);
    }
  }
};

const tallyResults2Cards = () => {
  messages.innerText = "";
  //if player1 = 9/8
  if (player1CardsTotal % 10 === 9 || player1CardsTotal % 10 === 8) {
    //if player1 same as dealer, tie
    if (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) {
      messages.innerHTML += "Player 1 tie!" + "\n";
      player1ResultStatus = "tie";
      player1TotalToken += player1CurrTokenAmt;
    } else {
      //otherwise player1 won
      messages.innerHTML += "Player 1 won!" + "\n";
      player1ResultStatus = "won";
      if (tallyOdds(player1CardsValue, player1CardsSuites) === 1) {
        player1TotalToken += 2 * player1CurrTokenAmt;
        document.querySelector("#player1TokenDisplay").innerText =
          player1TotalToken;
        document.querySelector("#player1Card3").style.display = "none";
        messages.innerHTML += "+" + player1CurrTokenAmt + "!";
      } else {
        player1TotalToken +=
          tallyOdds(dealerCardsValue, dealerCardsSuites) * player1CurrTokenAmt;
        document.querySelector("#player1TokenDisplay").innerText =
          player1TotalToken;
        document.querySelector("#player1Card3").style.display = "none";
        messages.innerHTML +=
          "+" +
          tallyOdds(dealerCardsValue, dealerCardsSuites) * player1CurrTokenAmt +
          "!";
      }
    }
    // if player 1 not 9/8 amd dealer is 9/8
  } else if (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) {
    // if player1 selected to play,
    if (player1PlayingStatus === "play") {
      player1ResultStatus = "lost";
      messages.innerHTML += "Player 1 lost!" + "\n";
      if (tallyOdds(dealerCardsValue, dealerCardsSuites) !== 1) {
        player1TotalToken -
          player1CurrTokenAmt *
            (tallyOdds(dealerCardsValue, dealerCardsSuites) - 1);
        document.querySelector("#player1TokenDisplay").innerText =
          player1TotalToken;
        document.querySelector("#dealerCard3").style.display = "none";
        messages.innerHTML +=
          "-" +
          player1CurrTokenAmt * tallyOdds(dealerCardsValue, dealerCardsSuites) +
          "!";
      } else {
        messages.innerHTML += "-" + player1CurrTokenAmt;
      }
      dealerP1ResultStatus = "won";
    }
    // if player1 not 9/8 and deler not 9/8, and if player1 playing then means need 3rd card. so pass the turn to player2.
  } else if (player1PlayingStatus === "play") {
    turn = "player1";
    messages.innerHTML += "Player 1, Choose your selection!" + "\n";
  }

  if (player2CardsTotal % 10 === 9 || player2CardsTotal % 10 === 8) {
    if (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) {
      messages.innerHTML += "Player 2 tie!" + "\n";
      player2ResultStatus = "tie";
      player2TotalToken += player2CurrTokenAmt;
    } else {
      messages.innerHTML += "Player 2 won!" + "\n";
      player2ResultStatus = "won";
      if (tallyOdds(dealerCardsValue, dealerCardsSuites) === 1) {
        player2TotalToken += 2 * player2CurrTokenAmt;
        document.querySelector("#player2TokenDisplay").innerText =
          player2TotalToken;
        document.querySelector("#player2Card3").style.display = "none";
        messages.innerHTML += "+" + player2CurrTokenAmt + "!";
      } else {
        player2TotalToken +=
          tallyOdds(dealerCardsValue, dealerCardsSuites) * player2CurrTokenAmt;
        document.querySelector("#player2TokenDisplay").innerText =
          player2TotalToken;
        document.querySelector("#player2Card3").style.display = "none";
        messages.innerHTML +=
          "+" +
          tallyOdds(dealerCardsValue, dealerCardsSuites) * player2CurrTokenAmt +
          "!";
      }
    }
  } else if (dealerCardsTotal % 10 === 9 || dealerCardsTotal % 10 === 8) {
    if (player2PlayingStatus === "play") {
      player2ResultStatus = "lost";
      messages.innerHTML += "Player 2 lost!" + "\n";
      if (tallyOdds(dealerCardsValue, dealerCardsSuites !== 1)) {
        player2TotalToken -
          player2CurrTokenAmt *
            (tallyOdds(dealerCardsValue, dealerCardsSuites) - 1);
        document.querySelector("#player2TokenDisplay").innerText =
          player2TotalToken;
        document.querySelector("#dealerCard3").style.display = "none";
        messages.innerHTML +=
          "-" +
          player2CurrTokenAmt * tallyOdds(dealerCardsValue, dealerCardsSuites) +
          "!";
      } else {
        messages.innerHTML += "-" + player2CurrTokenAmt;
      }
      dealerP2ResultStatus = "won";
    }
  } else if (player2PlayingStatus === "play") {
    turn = "player2";
    messages.innerHTML += "Player 2, Choose your selection!" + "\n";
  }

  if (
    (dealerP1ResultStatus === "won" && dealerP2ResultStatus === "won") ||
    (player1ResultStatus === "won" && player2ResultStatus === "tie") ||
    (player2ResultStatus === "won" && player1ResultStatus === "tie") ||
    (player1ResultStatus === "won" && player2PlayingStatus === "noPlay") ||
    (player2ResultStatus === "won" && player1PlayingStatus === "noPlay") ||
    (player2ResultStatus === "won" && player1ResultStatus === "won")
  ) {
  }
};

const tallyOdds = (array1, array2) => {
  if (array1[0] === array1[1] && array2[0] === array2[1]) {
    return samePairSameSuites;
  } else if (array1[0] === array1[1]) {
    return samePair;
  } else if (array2[0] === array2[1]) {
    return sameSuites;
  } else {
    return 1;
  }
};

const midGame = (event) => {
  //   console.log(turn);
  //   console.log(player1PlayingStatus); // 3 play or noPlay or ""
  //   console.log(player1ResultStatus); // 4 win or tie or lost or ""
  //   console.log(dealerP1ResultStatus); //2 win or ""
  //   console.log(player2PlayingStatus);
  //   console.log(player2ResultStatus);
  //   console.log(dealerP2ResultStatus);

  //   console.warn(typeof player2PlayingStatus, player2ResultStatus);

  if (player1PlayingStatus === "play" && player1ResultStatus === "") {
    if (event.target.id === "player1HitButton") {
      player1HitOrStay = "hit";
      player1Deal3Cards();
      document.querySelector("#player1Card3").innerText =
        displayCards(player1Cards[2]) + " | " + player1Cards[2];
      if (
        player2PlayingStatus === "play" &&
        player2ResultStatus === "" &&
        player2Cards.length === 2
      ) {
        messages.innerText = "Player 2, Choose your selection!";
      } else {
        messages.innerText = "";
        dealerDeal3Cards();
        document.querySelector("#dealerCard3").innerText =
          displayCards(dealerCards[2]) + " | " + dealerCards[2];
      }
    } else if (event.target.id === "player1StayButton") {
      player1HitOrStay = "stay";
      if (player1CardsTotal % 10 < 5) {
        player1Deal3Cards();
        document.querySelector("#player1Card3").innerText =
          displayCards(player1Cards[2]) + " | " + player1Cards[2];
      } else if (
        (player2PlayingStatus === "play" &&
          player2ResultStatus === "" &&
          player2Cards.length === 2) ||
        player2ResultStatus === "won" ||
        player2PlayingStatus === "noPlay"
      ) {
        messages.innerText = "";
        dealerDeal3Cards();
        document.querySelector("#dealerCard3").innerText =
          displayCards(dealerCards[2]) + " | " + dealerCards[2];
        document.querySelector("#player1Card3").style.display = "none";
      }
    }
  }
  // cannot do else if here because we are checking a "fixed variables" so have to spilt it
  if (player2PlayingStatus === "play" && player2ResultStatus === "") {
    if (event.target.id === "player2HitButton") {
      player2HitOrStay = "hit";
      player2Deal3Cards();
      console.log(player2Cards);
      document.querySelector("#player2Card3").innerText =
        displayCards(player2Cards[2]) + " | " + player2Cards[2];
      if (
        player1PlayingStatus === "play" &&
        player1ResultStatus === "" &&
        player1Cards.length === 2
      ) {
        messages.innerText = "Player 1, Choose your selection!";
      } else {
        messages.innerText = "";
        dealerDeal3Cards();
        document.querySelector("#dealerCard3").innerText =
          displayCards(dealerCards[2]) + " | " + dealerCards[2];
      }
    } else if (event.target.id === "player2StayButton") {
      player2HitOrStay = "stay";
      if (player2CardsTotal % 10 < 5) {
        player2Deal3Cards();
        document.querySelector("#player2Card3").innerText =
          displayCards(player2Cards[2]) + " | " + player2Cards[2];
      } else if (
        (player1PlayingStatus === "play" &&
          player1ResultStatus === "" &&
          player1Cards.length === 2) ||
        player1ResultStatus === "won" ||
        player1PlayingStatus === "noPlay"
      ) {
        messages.innerText = "";
        dealerDeal3Cards();
        document.querySelector("#dealerCard3").innerText =
          displayCards(dealerCards[2]) + " | " + dealerCards[2];
        document.querySelector("#player2Card3").style.display = "none";
      }
    }
  }
  if (
    (player1HitOrStay === "stay" || player1HitOrStay === "hit") &&
    (player2HitOrStay === "stay" || player2HitOrStay === "hit")
  ) {
    messages.innerText = "";
    dealerDeal3Cards();
    document.querySelector("#dealerCard3").innerText =
      displayCards(dealerCards[2]) + " | " + dealerCards[2];
  }
  if (
    (player1PlayingStatus === "play" &&
      player1ResultStatus === "" &&
      player1Cards.length === 3 &&
      player2PlayingStatus === "play" &&
      player2ResultStatus === "" &&
      player2Cards.length === 3) ||
    (player1PlayingStatus === "play" &&
      player1ResultStatus === "" &&
      player1Cards.length === 3 &&
      (player2ResultStatus === "" || player2ResultStatus === "tie")) ||
    (player2PlayingStatus === "play" &&
      player2ResultStatus === "" &&
      player2Cards.length === 3 &&
      (player1ResultStatus === "" || player1ResultStatus === "tie"))
  ) {
    // tallyResults3Cards();
  }
};

const tallyResults3Cards = () => {
  //   messages.innerText = "";
  console.log(player1CardsTotal);
  console.log(player1CardsTotal % 10);
  console.log(player1CardsValue);
  console.log(player1CardsSuites);
  console.log(dealerCardsTotal);
  console.log(dealerCardsTotal % 10);
  console.log(dealerCardsValue);
  console.log(dealerCardsSuites);

  if (player1ResultStatus === "") {
    if (dealerCardsTotal % 10 === player1CardsTotal % 10) {
      console.log(1);
      messages.innerHTML += "Player 1 tie!" + "\n";
      player1ResultStatus = "tie";
      player1TotalToken += player1CurrTokenAmt;
    } else if (player1CardsTotal % 10 > dealerCardsTotal % 10) {
      console.log(2);
      messages.innerHTML += "Player 1 won!" + "\n";
      player1ResultStatus = "won";
      if (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) === 1) {
        console.log(3);
        player1TotalToken += 2 * player1CurrTokenAmt;
        document.querySelector("#player1TokenDisplay").innerText =
          player1TotalToken;
        messages.innerHTML += player1CurrTokenAmt + "!";
      } else {
        console.log(4);
        player1TotalToken +=
          tallyOddsFinal(dealerCardsValue, dealerCardsSuites) *
          player1CurrTokenAmt;
        document.querySelector("#player1TokenDisplay").innerText =
          player1TotalToken;
        messages.innerHTML +=
          tallyOddsFinal(dealerCardsValue, dealerCardsSuites) *
            player1CurrTokenAmt +
          "!";
      }
    } else if (dealerCardsTotal % 10 > player1CardsTotal % 10) {
      console.log(5);
      if (player1PlayingStatus === "play") {
        console.log(6);
        messages.innerHTML += "Player 1 lost!" + "\n";
        if (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) !== 1) {
          console.log(7);
          player1TotalToken -
            player1CurrTokenAmt *
              (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) - 1);
          document.querySelector("#player1TokenDisplay").innerText =
            player1TotalToken;
          messages.innerHTML +=
            player1CurrTokenAmt *
              (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) - 1) +
            "!";
        } else {
          console.log(8);
          messages.innerHTML = player1CurrTokenAmt;
        }
        dealerP1ResultStatus = "won";
      }
    }
  }

  if (player2ResultStatus === "") {
    if (dealerCardsTotal % 10 === player2CardsTotal % 10) {
      messages.innerHTML += "Player 2 tie!" + "\n";
      player2ResultStatus = "tie";
      player2TotalToken += player2CurrTokenAmt;
    } else if (player2CardsTotal % 10 > dealerCardsTotal % 10) {
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
    } else if (dealerCardsTotal % 10 > player2CardsTotal % 10 === 8) {
      if (player2PlayingStatus === "play") {
        messages.innerHTML += "Player 2 lost!" + "\n";
        if (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) !== 1) {
          player2TotalToken -
            player2CurrTokenAmt *
              (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) - 1);
          document.querySelector("#player2TokenDisplay").innerText =
            player2TotalToken;
          messages.innerHTML +=
            player2CurrTokenAmt *
              (tallyOddsFinal(dealerCardsValue, dealerCardsSuites) - 1) +
            "!";
        } else {
          messages.innerHTML = player2CurrTokenAmt;
        }
        dealerP2ResultStatus = "won";
      }
    }
  }
  //   endGame();
};

// values, suites
const tallyOddsFinal = (array1, array2) => {
  if (
    (array1[1] === array1[0] + 1 &&
      array1[2] === array1[1] + 1 &&
      array2[0] === array2[1] &&
      array2[1] === array2[2]) ||
    (array1[0] === 12 &&
      array1[1] === 13 &&
      array1[2] === 1 &&
      array2[0] === array2[1] &&
      array2[1] === array2[2])
  ) {
    return consecutiveTripleSameSuites;
  } else if (
    array1[0] === array1[1] &&
    array1[1] === array1[2] &&
    array2[0] === array2[1] &&
    array2[1] === array2[2]
  ) {
    return sameTripleSameSuites;
  } else if (
    (array1[1] === array1[0] + 1 && array1[2] === array1[1] + 1) ||
    (array1[0] === 12 && array1[1] === 13 && array1[2] === 1)
  ) {
    return consecutiveTriple;
  } else if (array2[0] === array2[1] && array2[1] === array2[2]) {
    return sameTriple;
  } else {
    return 1;
  }
};

const reset = (event) => {
  endGame();
  //   player1TotalToken = 1000;
  //   player2TotalToken = 1000;
};

const endGame = () => {
  dealerCards = [];
  dealerCardsValue = "";
  dealerCardsTotal = "";
  dealerCardsSuites = "";
  dealerP2ResultStatus = "";
  dealerP1ResultStatus = "";
  document.querySelector("#dealerCard1").innerText = "blank";
  document.querySelector("#dealerCard2").innerText = "blank";
  document.querySelector("#dealerCard3").innerText = "blank";
  document.querySelector("#dealerCard3").style.display = "";

  // messages.innerText = "Place your tokens!";
  //   messages.innerText = "Place your tokens!";
  turn = "";
  randomIndex = 0;
  cardsValue;

  player1Cards = [];
  player1CardsValue = "";
  player1CardsTotal = "";
  player1CardsSuites = "";
  player1ActionSelection = "";
  player1ResultStatus = "";

  player1PlayingStatus = "";
  player1SelectedTokenType = 0;
  player1CurrTokenAmt = 0;
  //   player1TotalToken = 1000;
  document.querySelector("#player1TokenDisplay").innerText = player1TotalToken;
  document.querySelector("#player1PlayButton").innerText = "";
  document.querySelector("#player1Card1").innerText = "blank";
  document.querySelector("#player1Card2").innerText = "blank";
  document.querySelector("#player1Card3").innerText = "blank";
  document.querySelector("#player1PlayButton").style.display = "";
  document.querySelector("#player1NoPlayButton").style.display = "";
  document.querySelector("#player1Card3").style.display = "";
  player1AddMinusToken = "+";

  player2Cards = [];
  player2CardsValue = "";
  player2CardsTotal = "";
  player2CardsSuites = "";
  player2ActionSelection = "";
  player2ResultStatus = "";

  player2PlayingStatus = "";
  player2SelectedTokenAmt = 0;
  player2CurrTokenAmt = 0;
  //   player2TotalToken = 1000;
  document.querySelector("#player2TokenDisplay").innerText = player2TotalToken;
  document.querySelector("#player2PlayButton").innerText = "";
  document.querySelector("#player2Card1").innerText = "blank";
  document.querySelector("#player2Card2").innerText = "blank";
  document.querySelector("#player2Card3").innerText = "blank";
  document.querySelector("#player2PlayButton").style.display = "";
  document.querySelector("#player2NoPlayButton").style.display = "";
  document.querySelector("#player2Card3").style.display = "";
  player2AddMinusToken = "+";
};

// Event Listeners
document.querySelector("#player1AddMinus").addEventListener("click", addMinus);
document.querySelector("#player2AddMinus").addEventListener("click", addMinus);

document
  .querySelector("#player1CoinsSelections")
  .addEventListener("click", player1TokenSelection);
document
  .querySelector("#player2CoinsSelections")
  .addEventListener("click", player2TokenSelection);

document
  .querySelector("#player1PlayButton")
  .addEventListener("click", player1Play);
document
  .querySelector("#player2PlayButton")
  .addEventListener("click", player2Play);

document
  .querySelector("#player1NoPlayButton")
  .addEventListener("click", noPlaySelection);
document
  .querySelector("#player2NoPlayButton")
  .addEventListener("click", noPlaySelection);

document.querySelector("#reset").addEventListener("click", reset);

document.querySelector("#player1HitButton").addEventListener("click", midGame);
document.querySelector("#player2HitButton").addEventListener("click", midGame);
document.querySelector("#player1StayButton").addEventListener("click", midGame);
document.querySelector("#player2StayButton").addEventListener("click", midGame);

// document
//   .querySelector("#player2NoPlayButton")
//   .addEventListener("click", function (event) {
//     console.log(event.target, event.currentTarget);
//   });

# Project 1: Baccarat

![Website Layout](Pictures/project_1_barrarat_layout.png)

## User Experience

How to play?

Action based:

1. Select a seat (phase 2)

   - type in name
   - given 100 tokens

---

2. Start playing

3. Issing cards to players

   - First cards issued to players and banker
   - Second cards and stop.
   - Last card is empty

4. Players need to decide if >= 5 to

   - if < 5 will auto issue card
   - hit: get another cards
   - stay: not get another cards.

5. After that reveal results and payout tokens

6. Continue to play or exit.

7. Score to be recorded

---

## Rules of the games

- When first 2 cards are dealt.

  - if the digit at the ones of 2 cards total is 9 or 8 means won.
  - if banker wins with 2 cards, game ends.
    - **_Winning conditions 1_**
      - 2 cards
        - 9 > 8
        - same dight && same suites > same digit > same suites
  - if banker didnt win by 9 or 8, game continues

- When 3rd card is dealt

  - if the digit at the ones of 2 cards total less than 4 means have to hit.
  - Otherwise, player can choose
    - hit or,
    - stay.
  - banker will only hit if less than 4, otherwise stay.

- Game ends and check for winning conditions
  - if same score, it's a tie.
  - after 2nd or 3rd card: the digit at the ones of 2 or 3 cards total
    - 9 being the Highest; higher than bank means win
      - **_Collate scores: winning conditions 2_**
        - Spades > heart > club > diamond
        - 2 cards (lowest tier)
          - same dight && same suites > same digit > same suites
        - 3 cards (highest tier)
          - same suites && consecutive (lowest must start from 1) > same digit && same suites > same suites > consecutive
            - same suites && consective Q K A > 1 2 3
            - same digit && same suites A A A > 10 10 10

---

## Pseudocodes

1. Define variables

   - Dealer's cards
   - Dealer's cards value
   - Messages
   - Player 1's cards
   - Player 1's card value
   - Player 1's action selection
   - Player 1's current token amount
   - Player 1's total token playing amount
   - Which players' turn now

2. Define constants

   - Card pictures to each card array
   - Cards odds

3. Define functions

   - Add token amount to play button

   - Click play button to trigger random distributions of card

     - distributes card by waves
     - update the html cards
     - auto trigger winning conditions 1
       - exit for those who already won
     - update the scores
     - update message
     - continue for those who still in the game
       - to select hit or stay
       - if < 5 and didnt press hit, will auto given a card

   - auto trigger winning conditions 2
     - update the scores
     - update message

---

Event flow

- player2TokenSelection()

  - adds token to play button
  - cannot exceed the player2TotalToken's range

- click on #player1PlayButton or #player2PlayButton

  - player2Play()
    - if player2PlayingStatus "" means its the start
    - if already issued 2 cards then it's in the midst of the game
    - if no more tokens then change status to noPlay
    - then check on another play if already selected play or noPlay
    - if both playingStatus have been updated, proceed with gameStart()

- click on #player1NoPlayButton or #player2NoPlayButton

  - if player1 noPlay, then **turn** will fixed to the other player
  - to change player2playingStatus to noPlay so that player2Play() can proceed to gameStart()

- gameStart() trigger by #player1PlayButton or #player2PlayButton

  - if playingStatus === play
    - randomlyDealCard()
    - update cards array
    - update card value array & suites array
    - update card picture
  - if both players' playingStatus is filled
    - dealer will issue dealer's cards.
  - immediately tallyResults2Cards()

- tallyResults2Cards()

  - if player1 has 9/8 and dealer has 9/8, tie
    - otherwise, player1 with 9/8 wins and tally score
    - update player1TotalToken based on odds and player1CurrTokenAmt
    - update **player1ResultStatus**
  - But if dealer has 9/8, then player 1 loses
    - if odd = 1 then no action needed
    - if odd >1 then deduct more from the TotalTokens
    - update **dealerP1ResultStatus** = "won"
  - if dealer wins both sides then endGame()
  - Update turns here.

- click on player1HitButton to trigger midGame()
  - if player1 didnt win with 2 cards then can decide to hit or stay
  - if hit, he will get next card
  - if stay, he might still get the next card if his score is below 5.
  - either way, he will update the HitOrStay variable.

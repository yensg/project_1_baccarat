# Project 1: Baccarat

![Website Layout](Pictures/project_1_barrarat_layout.png)

## User Experience

How to play?

Action based:

1. Select a seat

   - type in name
   - given 100 tokens

2. Start playing

3. First cards issued to players and banker and another round to finish with 2 cards.

   - last card is empty

4. Players need to decide if >= 5 to

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
    - **_Winning conditions_**
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
      - **_Collate scores: winning conditions_**
        - Spades > heart > club > diamond
        - 2 cards (lowest tier)
          - same dight && same suites > same digit > same suites
        - 3 cards (highest tier)
          - same suites && consecutive (lowest must start from 1) > same digit && same suites > same suites > consecutive
            - same suites && consective Q K A > 1 2 3
            - same digit && same suites A A A > 10 10 10

---

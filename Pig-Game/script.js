'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  //Starting Conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

init();

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //step 1: Generating Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //step 2: Displaying Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //step3: Checking for rolled 1
    if (dice !== 1) {
      //Adding dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switching to next player
      switchPlayer();
    }
  }
});

//Button Hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    //Step 1: Adding current score to active player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Step 2: Checking if player's score is >= 50
    if (scores[activePlayer] >= 50) {
      //Finishing the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //Switching to the next player
      switchPlayer();
    }
  }
});

//New game button functionality
btnNew.addEventListener('click', init);

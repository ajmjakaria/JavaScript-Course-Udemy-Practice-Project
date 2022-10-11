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

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activeplayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
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
    document.getElementById(`current--${activeplayer}`).textContent =
      currentScore;
  } else {
    //Switching to next player
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

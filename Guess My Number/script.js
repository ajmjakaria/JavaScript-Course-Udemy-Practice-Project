'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 17;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 10;
*/
// document.querySelector('.check').addEventListener('click');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Function for displaing message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('check').addEventListener('click', function () {});

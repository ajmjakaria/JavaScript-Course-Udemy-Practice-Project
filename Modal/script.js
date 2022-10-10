'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

//opening model
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//closing model
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//loop for handling click events in all button
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//to close modal by clicking in closing button
btnCloseModal.addEventListener('click', closeModal);

//to close modal by clicking in overlay
overlay.addEventListener('click', closeModal);

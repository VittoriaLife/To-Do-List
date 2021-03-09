'use strict';

const list = document.querySelector('.list');
const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');


function addListItem() {
  const li = document.createElement('li');
  li.classList.add('list__item');

  if (formInput.value === '') {
    formInput.setCustomValidity('Enter your task')
  } else {
    li.innerText = formInput.value;
    list.append(li);
    formInput.value = ' ';
  }
};


formBtn.addEventListener('click', function(evt) {
  // evt.preventDefault();

  addListItem();
});








// function setId() {
//   const listLength = list.children.length;
//   let listItems = document.querySelectorAll('.list__item');

//   for(let i = 0; i < listLength; i++) {
//     listItems[i].setAttribute('id', i);
//   }

//   return listItems;
// };

// function putInLocalStorage() {
//   const storage = localStorage;

//   storage.setItem(listItems.getElementById('id'), listItems.getAttribute('id'))

// };

// formBtn.addEventListener('click', function() {
//   addListItem();
//   // setId();
//   // putInLocalStorage();
// });








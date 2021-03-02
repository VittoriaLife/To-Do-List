'use strict';

const list = document.querySelector('.list');
const listItem = document.querySelector('.list__item');
const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');


function addListItem() {
  formBtn.addEventListener('change', function() {
    const li = document.createElement('li');
    li.classList.add('list__item');
    li.innerText = formBtn.value;
    list.appendChild(li);
  })

  return li;
};



formBtn.addEventListener('click', function() {
  addListItem();

  // list.append(li);
})

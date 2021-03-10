'use strict';

const list = document.querySelector('.list');
const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');
const itemsIdArray = [];
const buttonsIdArray = []


function addListItem() {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  li.classList.add('list__item');
  p.classList.add('list__text');
  btn.classList.add('list__btn-delete');

  p.innerText = formInput.value;
  li.append(p);
  li.append(btn);
  list.append(li);
  formInput.value = ' ';
};



function setId() {
  let liItems = document.querySelectorAll('.list__item');
  let deleteButtons = document.querySelectorAll('.list__btn-delete');

  for(let i = 0; i < liItems.length; i++) {
    liItems[i].setAttribute('id', i);
    deleteButtons[i].setAttribute('id', i);
  }

  for(let k = 0; k < liItems.length; k++){
    let item = liItems[k].getAttribute('id');
    let button = deleteButtons[k].getAttribute('id');
    
    itemsIdArray[k] = item;
    buttonsIdArray[k] = button;
  };
};




formBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  addListItem();
  setId();
 
});



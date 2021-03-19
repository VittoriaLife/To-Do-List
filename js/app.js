'use strict';

import {getData, recordData, deleteToDoItem} from './database.js';

const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');

function init(params) {
  const dataStore = getData('todo');

  if(!dataStore) {
    return;
  }

  dataStore.forEach((toDo) => {
    createToDo(toDo.id, toDo.text);
  })
}

init();

function createToDo(id, text) {
  const list = document.querySelector('.list');

  const listItem = document.createElement('li');
  listItem.classList.add('list__item');
  listItem.setAttribute('toDoId', id);
  
  const listText = document.createElement('p');
  listText.textContent = text;

  const listButton = document.createElement('button');
  listButton.classList.add('list__btn-delete');
  listButton.setAttribute('toDoId', id);

  listButton.addEventListener('click', (evt) => {
    const getId = evt.target.getAttribute('toDoId');
    deleteToDo(getId);
  });

  listItem.append(listText);
  listItem.append(listButton);

  list.append(listItem);
};

function deleteToDo(id) {
  deleteToDoItem(id, 'todo');

  const list = document.querySelector('.list');
  const listItem = list.querySelector(`[toDoId='${id}']`);

  listItem.remove();
};

formBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  const id = recordData(formInput.value, 'todo');
  createToDo(id, formInput.value);
  
  formInput.value = '';
});


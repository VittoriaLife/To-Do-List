'use strict';

import {getData, recordData, deleteToDoItem} from './database.js';

const formInput = document.querySelector('.form__input'); 
const formBtn = document.querySelector('.form__btn');


// функция которая создает/сохраняет пункты списка при отктрытии/перезагрузке страницы, если localStorage не пустой
function init(params) {

  // получаем данные из localStorage
  const dataStore = getData('todo');

  // если localStorage пуст, то останавливаем выполнение функции
  if(!dataStore) {
    return;
  }

  // Если localStorage не пуст, то вызываем функцию создания пунктов меню. Берем из localStorage id и текст
  dataStore.forEach((toDo) => {
    createToDo(toDo.id, toDo.text);
  })
};

init();


// функция удаляющая пункт списка
function deleteToDo(id) {

  // передаем id кнопки и ключ списка
  deleteToDoItem(id, 'todo');

  const list = document.querySelector('.list');

  // находим такой же пункт списка с тем же id, что и у нажатой кнопки удаления
  const listItem = list.querySelector(`[toDoId='${id}']`);

  // удаляем нужный пункт из списка
  listItem.remove();
};


function editToDoItem(input) {
  const items = getData('todo');
  const activeItemId = input.getAttribute('toDoId');

  const newItem = items.map(el => {
    if(el.id === activeItemId) {
      el.text = input.value;
    }
    return el;
  });

  localStorage.setItem('todo', JSON.stringify(newItem));
};


// функция создания пункта списка и пунктов меню
function createToDo(id, text) {
  const list = document.querySelector('.list');

  const listItem = document.createElement('li');
  listItem.classList.add('list__item');

  // задаем id
  listItem.setAttribute('toDoId', id);
  
  const listText = document.createElement('input');
  listText.classList.add('list__text');
  listText.setAttribute('toDoId', id);

  listText.value = text;

  //
  const listButton = document.createElement('button');
  listButton.classList.add('list__btn-delete');

  // задаем такой же id как и у пункта меню
  listButton.setAttribute('toDoId', id);

  // навешиваем слушатель на кнопку, чтобы получить id кнопки, затем найти в функции deleteToDo пункт списка с таким же id и удалить его
  listButton.addEventListener('click', (evt) => {
    //
    const getId = evt.target.getAttribute('toDoId');

    deleteToDo(getId);
  });


  listText.addEventListener('change', (evt) => {
    const activeItem = evt.target;

    editToDoItem(activeItem);
  });


  listItem.append(listText);
  listItem.append(listButton);
  list.append(listItem);
};


// навешиваем слушателя на кнопку добавления пункта меню
formBtn.addEventListener('click', function(evt) {
  //
  // evt.preventDefault();

 if(!formInput.value) {
   formInput.setCustomValidity('Enter a new task');
   return;
  }
  // 
  const id = recordData(formInput.value, 'todo');

  //
  createToDo(id, formInput.value);
  
  //
  formInput.value = '';
});



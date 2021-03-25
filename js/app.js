'use strict';

import {getData, recordData, deleteToDoItem, editToDoItem, doneToDoItem} from './database.js';

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


// функция создания пункта списка и пунктов меню
function createToDo(id, text) {
  const list = document.querySelector('.list');

  const listItem = document.createElement('li');
  listItem.classList.add('list__item');
  // задаем атрибут id
  listItem.setAttribute('toDoId', id);
  
  const listText = document.createElement('input');
  listText.classList.add('list__text');
  listText.setAttribute('toDoId', id);
  listText.setAttribute('type', 'text');
  listText.value = text;

  const listButton = document.createElement('button');
  listButton.classList.add('list__btn-delete');
  // задаем такой же id как и у пункта меню
  listButton.setAttribute('toDoId', id);


  // навешиваем событие клик на кнопку, чтобы получить id кнопки, затем найти в функции deleteToDo пункт списка с таким же id и удалить его
  listButton.addEventListener('click', (evt) => {

    const getId = evt.target.getAttribute('toDoId');
    deleteToDo(getId);

  });

  // событие на изменение текста 
  list.addEventListener('change', (evt) => {
    const activeItem = evt.target;
    const activeItemId = activeItem.getAttribute('toDoId');
    
    editToDoItem(activeItemId, 'todo', activeItem);
  });

  listItem.addEventListener('click', (evt) => {
    if(evt.ctrlKey) {
      const activeElement = evt.target;
      const activeElementId = activeElement.getAttribute('toDoId');

      doneToDoItem(activeElementId, 'todo', activeElement, listItem);
    };
 });

  listItem.append(listText);
  listItem.append(listButton);
  list.append(listItem);
};


// навешиваем слушателя на кнопку добавления пункта меню
formBtn.addEventListener('click', function(evt) {

 if(!formInput.value) {
   formInput.setCustomValidity('Enter a new task');
   return;
  }

  const id = recordData(formInput.value, 'todo');

  createToDo(id, formInput.value);
  
  formInput.value = '';
});



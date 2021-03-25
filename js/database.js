'use strict';

// функция получения данных из localStorage, принимает в себя ключ(имя)
export function getData(key) {
  return JSON.parse(localStorage.getItem(key));
}


// функция создания данных для localStorage
export function recordData(text, key) { 

  // создание id путем генерации числа в миллисекундах из даты, превращения этого числа в строку с использованием 16 системы исчисления
  const id = (+new Date()).toString(16); 

  // новый пункт списка в виде объекта
  const newToDo = { 
    text,
    id,
    done: false
  }

  // получаем в переменную данные из LocalStorage
  let list = getData(key);

  //если переменная list пуста(false), то list становится пустым массивом
  if(!list) {
    list = [];
  }

  // записываем в пустой массив list новые пункты списка в виде объектов
   list.push(newToDo);


   // записываем в LocalStorage имя ключа(key), массив объектов (значение ключа(key)) list в виде строки.
  localStorage.setItem(key, JSON.stringify(list));


  // возвращаем id для дальнейшщего использования
  return id;
}


// функция записывающая в localStorage все ненужные на данный момент пункты (удаляющая нужный пункт списка из localStorage)
export function deleteToDoItem(id, key) {

  // получаем в переменную данные из LocalStorage
  const allItems = getData(key);

  // создаем новый массив элементов, оставляя в нем только те элементы чьи id не совпадают(false)
  const newList = allItems.filter(todo => {
    return todo.id !== id;
  });

  // записываем в localStorage новый массив элементов
  localStorage.setItem(key, JSON.stringify(newList));
}

// функция редактирования текста и записи отредактированной весрии в localStorage
export function editToDoItem(id, key, text) {
  const items = getData(key);
  
  const newItem = items.map(el => {
    if(el.id === id) {
      el.text = text.value;
    }
    return el;
  });

  localStorage.setItem(key, JSON.stringify(newItem));
};



export function doneToDoItem(id, key, input, item) {
  const elements = getData(key);
  item.classList.toggle('list__item--done');
  input.toggleAttribute('disabled');

  const newList = elements.map(el => {
    if(el.id === id) {
      el.done = true;
    }

    return el;
  });
  

  localStorage.setItem(key, JSON.stringify(newList));
};

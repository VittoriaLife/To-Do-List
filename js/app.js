'use strict';

const list = document.querySelector('.list')
const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');
let toDoArrayList = [];


// if(localStorage.getItem('todo')) {
//   toDoArrayList = JSON.parse(localStorage.getItem('todo'));

//   addItem();
// }


// функция создания, вставки в список пункта 
function createItem() {
  const listItem = document.createElement('li').classList.add('list__item');
  // const itemText = document.createElement('p');
  const itemBtn = document.createElement('button').classList.add('list__btn-delete');

  let textValue = formInput.value;

  if(textValue) {
    // listItem.append(itemText);
    listItem.append(itemBtn);
    itemText.textContent = textValue;
  } else {
    alert('error')
  }

  list.append(listItem);
  

  // listItem.setAttribute('id', toDoArrayList.id);


  // let toDoItem;
  // toDoArrayList.forEach(function(item, i) {
  //   let toDoItem; 
  //   toDoItem = `
  //   <li class="list__item" id="item_${i}">
  //     <p>${item.text}</p>
  //     <button class="list__btn-delete"></button>
  //   </li>`
  //   list.append(toDoItem);
  //   toDoItem = '';
  //   });

};

// функция вставки 
// function pushInArray(item, id) {
//   let toDolist = {
//     text: item.value,
//     trash: false,
//     important: false,
//     id: id
//   }

//   toDoArrayList.push(toDolist);
//  };


formBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  createItem();

  // formInput.value = '';
  // localStorage.setItem('todo', JSON.stringify(toDoArrayList));
});
















// const addMessage = document.querySelector('.message');
// const addButton = document.querySelector('.add');
// const todo = document.querySelector('.todo');
// let todoList = [];

// if(localStorage.getItem('todo')) {
//   todoList = JSON.parse(localStorage.getItem('todo'));

//   displayMessages();
// }

// addButton.addEventListener('click', function(evt) {
//   evt.preventDefault();

//   if(!addMessage.value) {
//     return;
//   }
//   let newToDo = {
//     todo: addMessage.value,
//     checked: false,
//     important: false
//   }

//   todoList.push(newToDo);

//   displayMessages();
//   localStorage.setItem("todo", JSON.stringify(todoList));
//   addMessage.value = '';
// });


// function displayMessages() {
//   let displayMessage = '';
//   if(todoList.length === 0) {
//     todo.innerHTML = '';
//   }
//   todoList.forEach(function(item, i) {
//       displayMessage += `
//         <li>
//           <input type="checkbox" id="item_${i}" ${item.checked ? "checked" : ""}>
//           <label for="item_${i}" class="${item.important ? "important" : ""}">${item.todo}</label>
//         </li>
//       `
//       todo.innerHTML = displayMessage;
//   });
// }

// todo.addEventListener('change', function(evt) {
//   let idInput = evt.target.getAttribute('id');
//   let forLabel = todo.querySelector('[for='+ idInput +']');
//   let valueLabel = forLabel.innerHTML;

//   todoList.forEach(function(item) {
//     if(item.todo === valueLabel) {
//       item.checked = !item.checked;
//       localStorage.setItem('todo', JSON.stringify(todoList));
//     }
//   });
// });


// todo.addEventListener('contextmenu', function(evt) {
//     evt.preventDefault();

//     todoList.forEach(function(item, i) {
//       if(item.todo === evt.target.innerHTML) {
//         if(evt.ctrlKey || evt.metaKey) {
//             todoList.splice(i, 1);
//         } else {
//           item.important = !item.important;
//         }
        
//         displayMessages();
//         localStorage.setItem('todo', JSON.stringify(todoList));
//       }
//     }); 
// });















// function deleteItem(listItem) {
//   listItem.addEventListener('click', function name(params) {
//     listItem.removeChild();
//   });
// };


// function setId() {
//   let liItems = document.querySelectorAll('.list__item');
//   let deleteButtons = document.querySelectorAll('.list__btn-delete');

//   for(let i = 0; i < liItems.length; i++) {
//     liItems[i].setAttribute('id', i);
//     deleteButtons[i].setAttribute('id', i);
//   }

//   for(let k = 0; k < liItems.length; k++){
//     let item = liItems[k].getAttribute('id');
//     let button = deleteButtons[k].getAttribute('id');
    
//     itemsIdArray[k] = item;
//     buttonsIdArray[k] = button;
//   };
// };

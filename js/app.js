'use strict';

const list = document.querySelector('.list')
const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');
let itemsList= [];


if(localStorage.getItem('todo')) {
  itemsList = JSON.parse(localStorage.getItem('todo'));

  createToDo();
}

function createToDo() {
let listItem;

itemsList.forEach(function(item, i)
  {
    list.insertAdjacentHTML('beforeend', `<li class="list__item" id="item_${i}">
 <p>${item.name}</p>
 <button class="list__btn-delete"></button>    
</li>`);
  }); 
  

 formInput.value = '';

};


function putInArray() {
  let newToDo = {
    name: formInput.value,
    done: false,
    trash: false
  }

  itemsList.push(newToDo);
}

formBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  putInArray();
  createToDo();
  
  localStorage.setItem('todo', JSON.stringify(itemsList));
});



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

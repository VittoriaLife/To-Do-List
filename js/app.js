'use strict';

const list = document.querySelector('.list')
const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');
const itemsIdArray = [];
const buttonsIdArray = []


function addListItem() {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const btn = document.createElement('button');
  let toDoValue = formInput.value;

  li.classList.add('list__item');
  p.classList.add('list__text');
  btn.classList.add('list__btn-delete');

  if(toDoValue) {
    p.innerText = formInput.value;
    li.append(p);
    li.append(btn);
    list.append(li);
    formInput.value = ' ';
    formInput.setCustomValidity('');
  } else {
    formInput.setCustomValidity('Please, enter to-do');
  }

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
  // evt.preventDefault();

  addListItem();
  // setId();
 
});




// const clear = document.querySelector('.clear');
// const dateElement = document.getElementById('date');
// const list = document.getElementById('list');
// const input = document.getElementById('input');
// const CHECK = 'fa-check-cirkle';
// const UNCHEK = 'fa-circle-thin';
// const LINE__THROUGH = 'lineThrough';

// let LIST = [];
// let id = 0;




// function addToDo (toDo, id, done, trash) {

//   if(trash) {
//     return;
//   }

//   const DONE = done ? CHECK : UNCHEK;
//   const LINE  = done ? LINE__THROUGH : '';

//   const text = `<li class="item">
//                   <i class="fa ${DONE} complete" job="complite id="${id}"></i>
//                   <p class="text ${LINE}">${toDo}</p>
//                   <i class="fa fa-trash-o delete" job="delete" id="${id}"></i>
//               </li>`
              
//   const position = 'beforeend';

//   list.insertAdjacentHTML(position, text);
// };


// function completeToDO(element) {
//   element.classList.toggle(CHECK);
//   element.classList.toggle(UNCHEK);

//   element.parentNode.querySelector('.text').classList.toggle(LINE__THROUGH);
//   LIST[element.id].done = LIST[element.id].done ? false : true;
// };

// function removeToDo(el) {
//   el.parentNode.parentNode.removeChild(el.parentNode);

//   LIST[el.id].trash = true;
// }


// list.addEventListener('click', function name(evt) {
//   let element = evt.target;

//   const elementJob = evt.target.attributes.job.value;

//   if(elementJob === 'complete') {
//       completeToDO(element);
//   } else if(elementJob === 'delete') {
//       removeToDo(element);
//   }
// });


// document.addEventListener('keyup', function(evt) {
//   if(evt.keyCode === 13){
//     const toDo = input.value;
//       if(toDo) {
//         addToDo(toDo, id, false, false);

//         LIST.push( 
//           {
//             name: toDo,
//             id: id,
//             done: false,
//             trash: false
//           }
//         );
//         input.value = '';
//         id++;
//       }
//   }
// });

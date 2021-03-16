'use strict';

// const clear = // clean btn
//const date

const list = document.querySelector('.list');
const formInput = document.querySelector('.form__input');
let LIST = [];
let id = 0;




function addToDo (toDo) {
  const text = `<li class="list__item">
                <p class="list__text">${toDo}</p>
              </li>`
              
  const position = "beforeend";

  list.insertAdjacentHTML(position, text);
};



document.addEventListener('keyup', function(evt) {
  if(evt.keyCode === 13){
    const toDo = formInput.value;
      if(toDo) {
        addToDo(toDo, id, false, false);

        LIST.push( 
          {
            name: toDo,
            id: id,
            done: false,
            trash: false
          }
        );
        formInput.value = '';
        id++;
      }
     
  }
});



// const formBtn = document.querySelector('.form__btn');
// const itemsIdArray = [];
// const buttonsIdArray = []


// function addListItem() {
//   const li = document.createElement('li');
//   const p = document.createElement('p');
//   const btn = document.createElement('button');

//   li.classList.add('list__item');
//   p.classList.add('list__text');
//   btn.classList.add('list__btn-delete');

//   if(formInput) {
//     p.innerText = formInput.value;
//     li.append(p);
//     li.append(btn);
//     list.append(li);
//     formInput.value = ' ';
//   }

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




// formBtn.addEventListener('click', function(evt) {
//   evt.preventDefault();

//   addListItem();
//   // setId();
 
// });



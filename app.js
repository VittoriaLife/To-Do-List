'use strict';




function getInfo() {
  fetch('https://run.mocky.io/v3/c77c21cc-3fe1-4496-ae53-92f018b6248a').then(response => response.json()).then(toDoList => {
    const list = document.querySelector('.todos');

    toDoList.forEach(element => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const button = document.createElement('button');

      span.textContent = element.description;
      button.textContent = 'Удалить';

      li.append(span);
      li.append(button);
      list.append(li);

      button.addEventListener('click', () => {
        deleteToDoListElement(element._id)
          .then(response => response.json())
          .then(data => {
            list.textContent = null;
            getInfo();
          });
      })
    });
  });
};

getInfo();
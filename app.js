'use strict';

let localItems = window.localStorage;

function getInfo() {
  fetch('').then(response => response.json()).then(list => console.log(list));
};

getInfo();
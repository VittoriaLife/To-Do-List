export function getData(key) {
  return JSON.parse(localStorage.getItem(key));
}


export function recordData(text, key) {
  const id = (+new Date()).toString(16);

  const newToDo = {
    text,
    id,
    done: false
  }

  let list = getData(key);

  if(!list) {
    list = [];
  }
   list.push(newToDo);

  localStorage.setItem(key, JSON.stringify(list));

  return id;
}

export function deleteToDoItem(id, key) {
  const allItems = getData(key);

  const newList = allItems.filter((todo) => {
    return todo.id !== id;
  });

  localStorage.setItem(key, JSON.stringify(newList));
}
const addBtn = document.getElementById('add');

const htmlCollection = document.getElementsByClassName('para');
console.log('HTMLCollection: ', htmlCollection);

const nodeList = document.querySelectorAll('.para');
console.log('NodeList: ', nodeList);

const todoCount = document.getElementById('todo-count');

addBtn.addEventListener('click', () => {
  const newPara = document.createElement('p');
  newPara.textContent = 'Para three';
  newPara.classList.add('para');

  const paraContainer = document.querySelector('div');

  paraContainer.prepend(newPara);
  todoCount.textContent = htmlCollection.length;
});

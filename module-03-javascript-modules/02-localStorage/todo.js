const form = document.querySelector('form');
const todoContainer = document.getElementById('todo-container');

const createTodo = (todoText) => {
  const todo = document.createElement('li');
  todo.textContent = todoText;
  todoContainer.prepend(todo);
};

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = event.target['todo-input'].value;

  createTodo(inputValue);

  event.target['todo-input'].value = '';

  // # localStorage
  let todoArray = [];

  if (localStorage.getItem('todos')) {
    const existingTodosJSON = localStorage.getItem('todos');
    const existingTodosJavaScript = JSON.parse(existingTodosJSON);
    todoArray = [...existingTodosJavaScript];
  }
  todoArray.push(inputValue);
  localStorage.setItem('todos', JSON.stringify(todoArray));
}

form.addEventListener('submit', handleSubmit);

// form.onsubmit = (event) => {}

window.addEventListener('load', () => {
  if (!localStorage.getItem('todos')) return;

  const existingTodosJSON = localStorage.getItem('todos');
  const existingTodosJavaScript = JSON.parse(existingTodosJSON);
  // console.log(existingTodosJavaScript);
  existingTodosJavaScript.forEach((eachTodo) => {
    createTodo(eachTodo);
  });
});

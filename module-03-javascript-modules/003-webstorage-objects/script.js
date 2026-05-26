// # Konstante
const LOCALSTORAGE_TASKS = 'tasks';

// # DOM-Elemente
const form = document.querySelector('form');
const userInput = document.getElementById('userInput');
const ul = document.querySelector('ul');
const reloadBtn = document.getElementById('reload');

// # Hilfsfunktion: Daten aus localStorage lesen und als  Array zurück geben
const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];

// true || "hallo" // true
// false || "hallo" // "hallo"
// 0 || 42 // 42
// "" || "hi" // "hi"
// null || "hi" //  "hi"

// true ?? "hallo" // true
// false ?? "hallo" // false
// 0 ?? 42 // 0
// "" ?? "hi" // ""
// null ?? "hi" //  "hi"

const writeToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// # Form submit
const handleFormSubmit = (e) => {
  e.preventDefault();
  const inputVal = userInput.value.trim();

  if (!inputVal) {
    alert('Input field cannot be empty');
    return;
  }

  const newTask = {
    content: inputVal,
    id: `task-${crypto.randomUUID()}`,
  };

  // * Bestehende Tasks aus localStorage holen
  //   let tasks = localStorage.getItem('tasks');
  //   if (!tasks) {
  //     tasks = [];
  //   } else {
  //     tasks = JSON.parse(tasks);
  //   }
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);
  // * bestehende Tasks modifizieren
  tasks.push(newTask);
  // * modifiziertes Tasks Array zurueck ins localStorage schreiben
  writeToStorage(LOCALSTORAGE_TASKS, tasks);

  // * UI aktualisieren
  createLi(newTask);

  // * Form rest
  form.reset();
};

// # Create li
const createLi = (task) => {
  // * DOM-Element für eine Task erstellen
  // <li><p></p><button></button></li>
  const newLi = document.createElement('li');
  const newP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  newLi.className = 'flex gap-4 items-baseline px-4 justify-between';

  newP.textContent = task.content;

  deleteBtn.className =
    'mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded cursor-pointer';
  deleteBtn.textContent = 'Delete';

  // * Delete-Funktionalitaet: task entfernen
  deleteBtn.addEventListener('click', () => {
    newLi.remove();
    const tasks = getFromStorage(LOCALSTORAGE_TASKS);
    // Alle Tasks außer der gelöschten behalten
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    writeToStorage(LOCALSTORAGE_TASKS, updatedTasks);
  });

  // * Elemente zusammensetzen
  newLi.append(newP, deleteBtn);
  // * Am Anfang der Liste einfügen (neuste Tasks oben)
  ul.prepend(newLi);
};

// # renderStorage
const renderStorage = () => {
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);

  tasks.forEach((t) => {
    createLi(t);
  });
};

// # Event Listener
form.addEventListener('submit', handleFormSubmit);
// document.addEventListener('DOMContentLoaded', renderStorage);
window.addEventListener('load', renderStorage);
// renderStorage();

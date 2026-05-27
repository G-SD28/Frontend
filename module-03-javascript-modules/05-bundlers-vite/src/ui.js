import { LOCALSTORAGE_TASKS } from './config.js';
import { getFromStorage, writeToStorage } from './utils.js';

const ul = document.querySelector('ul');

// # Create Li
export const createLi = (task) => {
  // * DOM-Elemente für eine Task erstellen
  const newLi = document.createElement('li');
  const newP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  newLi.className = 'flex gap-4 items-baseline px-4 justify-between';
  newP.textContent = task.content;
  deleteBtn.className =
    'mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded cursor-pointer';
  deleteBtn.textContent = 'Delete';

  const someSpan = document.createElement('span');
  someSpan.textContent = ' 🤷';
  deleteBtn.append(someSpan);

  // * Delete-Funktionalität: Task aus localStorage entfernen
  deleteBtn.addEventListener('click', (e) => {
    // console.log('Target:', e.target);
    // console.log(e.target.closest('button'));
    const tasks = getFromStorage(LOCALSTORAGE_TASKS);
    // Alle Tasks außer der gelöschten behalten
    // (task ist Verfügbar hier im Scope -> Closure)
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    writeToStorage(LOCALSTORAGE_TASKS, updatedTasks);

    // Element aus dem DOM entfernen
    newLi.remove();
  });

  // * Elemente zusammensetzen
  newLi.append(newP, deleteBtn);

  // * Am Anfang der Liste einfügen (neueste Tasks oben)
  ul.prepend(newLi);
};

// # renderStorage
// Beim Laden der Seite: Alle gespeicherten Tasks aus localStorage anzeigen
export const renderStorage = () => {
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);
  tasks.forEach((t) => {
    createLi(t);
  });
};

// export { createLi,renderStorage}

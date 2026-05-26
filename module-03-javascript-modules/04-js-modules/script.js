import { LOCALSTORAGE_TASKS } from './scr/config.js';
import { createLi, renderStorage } from './scr/ui.js';
import { getFromStorage, writeToStorage } from './scr/utils.js';

// # DOM-Elemente
const form = document.querySelector('form');
const userInput = document.getElementById('userInput');

// # Form Submit
const handleFormSubmit = (e) => {
  e.preventDefault(); // Verhindert Standard-Formularverhalten (Seiten-Reload)

  const inputVal = userInput.value.trim();

  // Validierung: Leere Eingaben verhindern
  if (!inputVal) {
    alert('Input field cannot be empty');
    return;
  }

  // * Neues Task-Objekt mit eindeutiger ID erstellen
  const newTask = {
    content: inputVal,
    id: `task-${crypto.randomUUID()}`,
  };

  // * Bestehende Tasks aus localStorage holen
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);

  // * Neue Task hinzufügen und wieder speichern
  tasks.push(newTask);
  writeToStorage(LOCALSTORAGE_TASKS, tasks);

  // * UI aktualisieren
  createLi(newTask);

  // * Formular zurücksetzen (Input-Feld leeren)
  form.reset();
};

// # Event Listener
form.addEventListener('submit', handleFormSubmit);
window.addEventListener('load', renderStorage);

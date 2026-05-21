// # items lesen
const userName = localStorage.getItem('name');
const email = localStorage.getItem('email');
const age = localStorage.getItem('age'); // null

console.log(userName, email, age);

// # ein item setzten
localStorage.setItem('isStudent', false);

// # Ein item entfernen
localStorage.removeItem('name');

// # ALLE items löschen
localStorage.clear();

// # item mutieren
localStorage.setItem('name', 'Renke');
localStorage.setItem('name', 'Marinel');

// # Lernkonzept: JavaScript-Objekte
// * Diese Datei zeigt, wie Objekte Daten und Verhalten bündeln und warum Referenzen bei Objekten anders funktionieren als primitive Werte.

// # Primitive Werte als Vergleichsbasis
// string
// number
// BigInt
// boolean
// undefined
// null
// symbol

// # Objekte als Referenzwerte
// * Objekte werden über ihre Speicheradresse verglichen, nicht über identischen Inhalt.
// Object
// Array
// Function -> first-class citizen
// Date
// RegExp
// ...

let a = 10;
let b = 10;
console.log(a === b); // true

let obj1 = { value: 10 };
let obj2 = { value: 10 };
// ! Zwei gleich aussehende Objekte sind nicht automatisch dasselbe Objekt.
console.log(obj1 === obj2); // false (verschiedene Objekte im Speicher)

let obj3 = obj1;
console.log(obj1 === obj3); // true (selbe Adresse zu einem Objekt)

// # Eigene Objektmethoden
// * Methoden machen aus einem Objekt mehr als eine Datensammlung: Das Objekt kann eigenes Verhalten ausführen.
const person = {
  firstName: 'Sebastian',
  age: 42,
  isStudent: true,
  //   hasAdminRights: false
  adress: { street: 'Sesame street', houseNo: '40c', city: 'Berlin' },
  languages: ['english', 'german', 'spanish'],
  'user-id': '00324356',
  // sayHi: function() {
  sayHi() {
    console.log(`Hi, my name is ${person.firstName}`);
  },
  sayHiThis() {
    // * `this` macht die Methode wiederverwendbar, weil der konkrete Aufrufer entscheidet, auf welches Objekt zugegriffen wird.
    console.log(`Hi, my name is ${this.firstName}`);
  },
  getBasicPersonInfo() {
    console.log(`${this.firstName}s Alter ist ${this.age}`);
  },
  setAge(newAge) {
    this.age = newAge;
    console.log(`${this.firstName}s Alter wurde auf ${this.age} aktualisiert.`);
  },
};

const person2 = {
  firstName: 'Mary',
  age: 57,
  isStudent: true,
  //   hasAdminRights: false
  adress: { street: 'Sesame street', houseNo: '40c', city: 'Berlin' },
  languages: ['english', 'german', 'spanish'],
  'user-id': '00324356',
  // sayHi: function() {
  sayHi() {
    // ! Diese Methode ist fest an `person` gekoppelt und würde bei `person2` trotzdem Sebastians Namen lesen.
    console.log(`Hi, my name is ${person.firstName}`);
  },
  sayHiThis() {
    console.log(`Hi, my name is ${this.firstName}`);
  },
};

console.log(person.age);
person.age = 99;
person.sayHiThis();

person.sayHi();
person.sayHiThis();

person2.sayHi();
person2.sayHiThis();
person.getBasicPersonInfo();
person.setAge(9001);

const person3 = {
  firstName: 'Grace',
  say() {
    console.log(`Hello, my name is ${this.firstName}`);
  },
  sayArrow: () => {
    // ! Arrow Functions haben kein eigenes `this`; als Objektmethode lesen sie deshalb nicht automatisch das Objekt links vom Punkt.
    console.log(`Hello, my name is ${this.firstName}`);
  },
};

person3.say();
person3.sayArrow();
// console.log(this === window);
// console.log(this);

const user = {
  name: 'Alice',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet();

const anotherUser = { name: 'Bob' };
anotherUser.name = 'Renke';
console.log(anotherUser);
anotherUser.sayHello = user.greet;
console.log(anotherUser);
// * Beim Methodenaufruf zählt das Objekt links vom Punkt: Hier wird `this` zu `anotherUser`.
anotherUser.sayHello();

// # Zugriff auf Objektwerte
// * Punktnotation ist lesbar, Bracket-Notation wird wichtig, wenn Property-Namen Sonderzeichen enthalten oder dynamisch sind.
console.log(person.firstName);
console.log(person['firstName']);
console.log(person.adress.city);
console.log(person['whatUserClickedOn']);
console.log(person['user-id']);

// # Objektwerte ändern
// * Bei Objekten können Properties nachträglich geändert werden, solange das Objekt nicht eingefroren oder geschützt wurde.
console.log('Alter vor der Änderung:', person.age);
person.age = 45;
console.log('Alter nach der Änderung:', person.age);

const array = [1, 4, 7];
array[1] = 8;
console.log(array);

const make = 'Toyota';
const model = 'Corolla';
const year = 2025;

const car = {
  make,
  model,
  year,
};

console.log(car.year);
car.color = 'Yellow';
console.log(car);

const carBlueprint = {
  make: 'none',
  model: 'none',
  year: 'unknown',
};

const car1 = { ...carBlueprint, make: 'Tesla', model: 'Model 3', year: 2024 };
const car2 = { ...carBlueprint, make: 'Volkswagen', model: 'ID.3', year: 2022, color: 'grey' };
console.log(car1);
console.log(car2);

// # Object Methods
// * Eingebaute Objektmethoden helfen dabei, Objektstruktur zu untersuchen oder Objekte gegen Änderungen abzusichern.
console.log(Object.entries(car1));
Object.freeze(car1);
console.log(Object.keys(car1).length);

// # Eingebaute JavaScript Objekte
// * `Math` und `Date` sind fertige Objekte/APIs, die häufige Aufgaben kapseln, statt dass wir sie selbst implementieren.
console.log(Math.random());
console.log(Math.round(4.5));
console.log(Math.max(1, 5, 28));
console.log(Math.min(1, 5, 28));

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getSeconds());

const birthDay = new Date('2000-01-01');
console.log(birthDay.getFullYear());

const date2 = Date();
console.log(typeof date);
console.log(typeof date2);

// # Destructuring
const personD = {
  firstName: 'Sebastian',
  age: 42,
  isStudent: true,
  //   hasAdminRights: false
  adress: { street: 'Sesame street', houseNo: '40c', city: 'Berlin' },
  languages: ['english', 'german', 'spanish'],
  'user-id': '00324356',
  sayHiThis() {
    console.log(`Hi, my name is ${this.firstName}`);
  },
};

// const userName = personD.firstName;
// const age = personD.age;
// const isStudent = personD.isStudent;
// const city = personD.adress.city;
// const nationality = personD.nationaliy || 'Unknown nationality';

// # Object-Destructuring
// * Destructuring zieht relevante Properties gezielt aus einem Objekt und kann sie dabei umbenennen oder mit Defaults absichern.
// personD.nationality = 'German';

const {
  // * Alias, Nested Destructuring und Default-Werte machen die entnommenen Daten direkt passend für die Weiterverarbeitung.
  firstName: userName,
  age,
  isStudent,
  adress: { city },
  nationality = 'Unknown nationality',
} = personD;

console.log(userName, age, isStudent, city, nationality);

// # Array-Destructuring
// * Array-Destructuring lohnt sich, wenn Positionen eine Bedeutung haben und nur bestimmte Werte gebraucht werden.
const array = [3, 7, 9, 16];

// const firstNumber = array[0];
// const secondNumber = array[1];

const [, , , fourth] = array;
// const { 3: fourth } = array;

console.log(fourth);

const myArray = [
  // ... 56 Elemente
  'item at index 56',
  'item at index 57',
  // ... noch mehr Elemente
];

const { 57: item } = myArray;
console.log(item);

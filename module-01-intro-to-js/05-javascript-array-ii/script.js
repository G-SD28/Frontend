function add(num1, num2) {
  console.log('Function start');

  if (num1 === 0 && num2 === 0) {
    console.log('Please add positive integers');
  }
  return (num1 + num2) * 2;
}

// console.log(add(0, 0));
// console.log(add(1, 7));

// # Arrow Functions

const addArrowFunc = (num1, num2) => {
  return (num1 + num2) * 2;
};

const shortAddArrowFunc = (num1, num2) => (num1 + num2) * 2;

// console.log(shortAddArrowFunc(4, 5));

// # Higher-Order functions
// * 1. Nimmt eine andere Funktion als Argument entgegen (Callback)
// * 2. Oder gibt eine komplett andere Funktion zurück

// 1. Callback Function
function higherOrderFunc(func) {
  func();
}

function callbackFunction() {
  console.log(`Hi, I'm a regular function!`);
}

higherOrderFunc(callbackFunction);

higherOrderFunc(function () {
  console.log(`Hi, I'm a regular function! 2`);
});

higherOrderFunc(() => {
  console.log(`Hi, I'm a regular function! 3`);
});

higherOrderFunc(() => console.log(`Hi, I'm a regular function! 4`));

// 2. Eine funktion, die eine andere Funktion zurückgibt
function multiplier(factor) {
  return (number) => {
    return number * factor;
  };
}

console.log(multiplier(2));
/*
(number) => {
    return number * 2
    }
*/

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(3));
/*
(3) => {
    return 3 * 2
    }
*/
console.log(triple(4));

// * ALTERNATIVE:
const doubleShort = multiplier(2)(3);
console.log(doubleShort);

// # Higher-Order Array Methoden
const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// * forEach()
// numbers.forEach(function (num) {
//   console.log(num);
// });
numbers.forEach((num, index) => {
  //   console.log(`Element at index ${index}: ${num}`);
  //   console.log(num * 10);
  numbers[index] = num * 10;
});
// console.log(numbers);

// * map() - Erstelt ein neues Array, indem jedes element transformiert wird
const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

console.log('Original array: ', numbers);
console.log('New array: ', doubleNumbers);

// const winterSale = numbers.map((price) => {
//   return {
//     price: price,
//     priceWSale: price * 0.8,
//     currency: 'EUR',
//   };
// });
const winterSale = numbers.map((price) => ({
  price: price,
  priceWSale: price * 0.8,
  currency: 'EUR',
}));
console.log(winterSale);
console.log('Original array: ', numbers);

const people = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 20 },
];

// Ziel: ["ALICE", "BOB", ...]
const namesToUpperCase = people.map((chicken) => chicken.name.toUpperCase());
// console.log(namesToUpperCase);

// const person1 = people[0].name.toUpperCase();
// const person2 = people[1].name.toUpperCase();

// * map mit for - Schleife
const namesUpperCaseFor = [];
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  namesUpperCaseFor.push(person.name.toUpperCase());
}
// console.log(namesUpperCaseFor);

// # spread syntax
const animals = ['tiger', 'zebra', 'lion', 'girafe'];

// const copyOfAnimals = animals;

// copyOfAnimals[0] = 'elephant';
// console.log(animals);
// console.log(copyOfAnimals);
// console.log(animals === copyOfAnimals);

const copyOfAnimals = [...animals];
copyOfAnimals[0] = 'elephant';
// console.log(animals);
// console.log(copyOfAnimals);
// console.log(animals === copyOfAnimals);

const person = { firstName: 'John', age: 40 };

// const copyOfPerson = { firstName: 'John', age: 40, age: 41, isStudent: false };
const copyOfPerson = { ...person, age: 41, isStudent: false };
// console.log(copyOfPerson);

const people2 = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 20 },
];

const updatedPeople = people2.map((person) => {
  return { ...person, age: person.age + 1, isStudent: false };
});
console.log('Updated peope: ', updatedPeople);

const personExample = {
  firstName: 'John',
  age: 40,
  address: {
    street: 'Allee',
  },
};
const copyOfPersonShallow = { ...personExample };
const copyOfPersonDeep = {
  ...personExample,
  address: { ...personExample.address },
};
copyOfPersonShallow.address.street = 'Strasse';
// console.log(personExample.address.street); // Strasse weil shallow
copyOfPersonDeep.address.street = 'Platz';
// console.log(personExample.address.street); // bleibt Strasse weil deep

// # .find() - Gibt das erste Element zurück, das eine Bedingung erfüllt
const peopleFind = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 30 },
];

const firstPersonOver25 = peopleFind.find((person) => person.age > 25);
console.log(firstPersonOver25);

const personIs30YearsOld = peopleFind.find((person) => person.age === 30);
console.log(personIs30YearsOld);

for (const user of peopleFind) {
  if (user.name === 'Bob') {
    console.log(`Found Bob, who is ${user.age} years old`);
    break;
  }
}

// # .filter() - Erstellt eine neues Array mit ALLEN Elementen, die einen Test bestehen
const allPeopleOver25 = peopleFind.filter((person) => person.age > 25);
console.log(allPeopleOver25);

const allPeopleOver25Manuel = [];
let index = 0;
while (index < peopleFind.length) {
  const person = peopleFind[index]; // holt die aktuelle Person
  if (person.age > 25) {
    allPeopleOver25Manuel.push(person);
  }
  index++;
}
console.log(allPeopleOver25Manuel);

// const peopleFind = [
//   { name: 'Alice', age: 15 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
//   { name: 'Dave', age: 30 },
// ];

// # .reduce() - Reduziert das Array auf einen eiznelnen Wert
const totalAge = peopleFind.reduce((acc, curr, index) => {
  console.log(`Step ${index + 1}: acc = ${acc}, curr = ${curr.age}`);
  const newAcc = acc + curr.age;
  console.log(`Step ${index + 1}: result = ${newAcc}`);
  return newAcc;
}, 0);
console.log('Final total age: ', totalAge);
// Iteration 1: acc 0 + Alice 15 => 15
// Iteration 2: acc 15 + Bob 30 => 45
// Iteration 3: acc 45 + Carol 35 => 80
// Iteration 4: acc 80 + Dave 30 => 110

// # .some() & .every()
// * .some() - Prüft, ob mindestens ein element den Test besteht -> boolean (true/false)
const isAnyoneAChild = peopleFind.some((person) => person.age < 18);
console.log(isAnyoneAChild);

// * .every() - Prüft, ob ALLE Elemente den Test bestehen -> boolean (true/false)
const areAllAdults = peopleFind.every((person) => person.age >= 18);
console.log(areAllAdults);

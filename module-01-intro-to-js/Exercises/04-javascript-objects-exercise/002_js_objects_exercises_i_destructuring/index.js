// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// # Simple Array Destructuring
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

// # Skipping Elements in Array Destructuring
const [firstFruit, , thirdFruit] = fruits;
// const { 0: firstFruit, 2: thirdFruit } = fruits;
console.log(firstFruit, thirdFruit);

// # -------------

// # Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
  // profession: 'Studend',
  isActive: true,
  toggleActiveStatus() {
    this.isActive = !this.isActive;
  },
};

console.log(person.isActive);
person.toggleActiveStatus();
console.log(person.isActive);

// # Simple Object Destructuring
// # Nested Object Destructuring
// const {
//   name,
//   age,
//   address: { city, zip: postalcode },
//   profession = 'Unemployed',
// } = person;

// console.log(name, age, city, postalcode, profession);

// const profession = person.profession || 'Unemployed';

// const postalcode = person.address.zip;
// console.log(postalcode);

// const { address } = person;
// const { city } = address;
// console.log(city);

// const {
//   adress: { city },
// } = person;

// # -------------
// # Initial function
// # Destructuring in Function Parameters
function displayPerson({
  name: firstName = 'Unkown',
  age = 'Unkown',
  address: { zip: postalcode = 'Unkown' },
  profession = 'Unemployed',
}) {
  console.log(`Name: ${firstName}, Age: ${age}, PLZ: ${postalcode}, Profession: ${profession}`);
}

displayPerson(person);
// displayPerson(person2);
// displayPerson(person3);

// # ---

function displayPerson2({ name, age, ...stegosaurus }) {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log('Other data:', stegosaurus);
}
displayPerson2(person);

function displayPerson3({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayPerson3(person);

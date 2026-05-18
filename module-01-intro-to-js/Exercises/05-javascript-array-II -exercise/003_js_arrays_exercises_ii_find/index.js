const numbers = [10, 20, 30, 40, 50];

// # 2. Use the find Method to Locate a Number Greater Than 25
const numberGreaterThan25 = numbers.find((number) => number > 25);
console.log('Erste Zahl größer als 25: ', numberGreaterThan25);

// # 3. Initialize an Array of Objects:
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

// # 4. Use the find Method to Locate a Person Named "Charlie"
const personNamedCharlie = people.find(function (people) {
  return people.name === 'Charlie';
});
console.log('Person namens Charlie:', personNamedCharlie);

const users = [
  { id: 1, email: 'sue@gmail.com', role: 'Admin' },
  { id: 2, email: 'bob@mail.com', role: 'user' },
  { id: 3, email: 'charlie@example.com', role: 'moderator' },
];

const loginEmail = 'bob@mail.com';
const authenticatedUser = users.find((user) => user.mail === loginEmail);
if (authenticatedUser) {
  console.log(`Willkommen ${authenticatedUser.email}! Rolle: ${authenticatedUser.role}`);
} else {
  console.log('User nicht gefunden. Bitte uebrepuefe deine E-Mail');
}

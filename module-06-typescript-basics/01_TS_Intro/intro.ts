// function sum(a: number, b: number) {
//   return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum('1', 2));

let firstName: string = 'Mira';
let age: number = 25;
let isActive: boolean = true;

let language: string = 'TypeScript';

// TYPE INFERENCE

let city = 'London'; // wird als string erkannt
let score = 90; // wird als number erkannt

// console.log(city.toUpperCase());
// console.log(score.toFixed(2));

// ANY?
let data;
data = 'hello';
data = 10;

// FUNCTION WITH TYPES
function sum(a: number, b: number) {
  return a + b;
}

// console.log(sum(10, 10));
// console.log(sum('1', 2));

function greet(name: string): string {
  return `Hello, ${name}`;
}

// console.log(greet('Wei'));

function logMessage(message: string): void {
  console.log(message);
}

// logMessage('hello?!');

function isOldEnough(age: number): string {
  if (age >= 18) {
    return 'You are old enough';
  } else {
    return 'you are too young';
  }
}

// ARRAYS & TUPLES
const scores: number[] = [10, 20, 30];
const names: string[] = ['Victoria', 'Philipp'];

// scores.push(40);
// names.push(50);

const user2: [string, number] = ['Test', 10];

let result: [boolean, string];
result = [true, 'success'];
// result = ['Fail', false];

// OBJECT WITH TYPES

const user: { name: string; age: number } = {
  name: 'Jamal',
  age: 30,
};

const product: { name: string; description?: string } = {
  name: 'Laptop',
};

// console.log(product.description?.toUpperCase()); // undefined
// console.log(product.description ?? 'no description available for this product');
// if (product.description) {
//   console.log(product.description.toUpperCase);
// } else {
//   console.log('no description');
// }

const settings: { readonly theme: string } = {
  theme: 'light',
};

// settings.theme = 'dark';

// TYPE ALIAS

const product1: { id: number; name: string; price: number } = {
  id: 1,
  name: 'Laptop',
  price: 999.99,
};

const product2: { id: number; name: string; price: number } = {
  id: 2,
  name: 'Headphones',
  price: 99.99,
};

const product3: { id: number; name: string; price: number } = {
  id: 3,
  name: 'Monitor',
  price: 199.99,
};

type Product = {
  id: number;
  name: string;
  price: number;
  //   test: boolean;
};

const product4: Product = { id: 4, name: 'Hard Drive', price: 99.99 };
const product5: Product = { id: 5, name: 'Macbook', price: 999.99 };
const product6: Product = { id: 6, name: 'Something', price: 99.99 };

const products: Product[] = [
  { id: 1, name: 'something', price: 99.99 },
  { id: 2, name: 'something else', price: 99.99 },
];

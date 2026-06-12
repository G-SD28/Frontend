// ============================================================
// Arrays Exercise — Higher Order Array Methods
// ============================================================
// Use the products array below to complete all exercises.

// MDN Dokumentation:
// map()    → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// filter() → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// find()   → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// some()   → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// every()  → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// reduce() → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// ============================================================

const products = [
  {
    id: 1,
    title: 'Fjallraven Backpack',
    price: 109.95,
    category: "men's clothing",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'Mens Casual T-Shirts',
    price: 22.3,
    category: "men's clothing",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    category: "men's clothing",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    category: "men's clothing",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: 'Gold & Silver Bracelet',
    price: 695.0,
    category: 'jewelery',
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave',
    price: 168.0,
    category: 'jewelery',
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    category: 'jewelery',
    rating: { rate: 3.0, count: 400 },
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold',
    price: 10.99,
    category: 'jewelery',
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: 'WD 2TB External Hard Drive',
    price: 64.0,
    category: 'electronics',
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB',
    price: 109.0,
    category: 'electronics',
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: 'Silicon Power 256GB SSD',
    price: 109.0,
    category: 'electronics',
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive',
    price: 114.0,
    category: 'electronics',
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: 'Acer SB220Q Monitor',
    price: 599.0,
    category: 'electronics',
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title: 'Samsung Curved Monitor',
    price: 999.99,
    category: 'electronics',
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: 'Snowboard Jacket',
    price: 56.99,
    category: "women's clothing",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title: 'Faux Leather Moto Jacket',
    price: 29.95,
    category: "women's clothing",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: 'Rain Jacket Windbreaker',
    price: 39.99,
    category: "women's clothing",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: 'MBJ Solid Short Sleeve',
    price: 9.85,
    category: "women's clothing",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: 'Opna Short Sleeve Moisture',
    price: 7.95,
    category: "women's clothing",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: 'DANVOUY Womens T Shirt',
    price: 12.99,
    category: "women's clothing",
    rating: { rate: 3.6, count: 145 },
  },
];

// ============================================================
// 🟡 Exercise 1 — map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// const numbers = [1, 2, 3, 4];
// console.log(numbers);

// const doubled = numbers.map((n) => n * 2);
// console.log(doubled);

// Get an array of all product titles.
// Expected: ['Fjallraven Backpack', 'Mens Casual T-Shirts', ...]
// ============================================================

// const titles = products.map((product) => product.title);
// console.log('Exercise 1 — titles:', titles);

// const students = [
//   'Mira',
//   'Vladimir',
//   'Wei',
//   'Jamal',
//   'Marinel',
//   'Sebastian',
//   'Victoria',
//   'Onur',
// ];

// const test = students.map((a, b, c) => console.log(a, b, c));

// ============================================================
// 🟡 Exercise 2 — map()
// Get an array of objects with only the title and price of each product.
// Expected: [{ title: 'Fjallraven Backpack', price: 109.95 }, ...]
// ============================================================

// const titlesAndPrices = products.map((product) => ({
//   title: product.title,
//   price: product.price,
// }));
// console.log('Exercise 2 — titlesAndPrices:', titlesAndPrices);

// ============================================================
// 🟠 Exercise 3 — filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//
// Get all products in the 'electronics' category.
// ============================================================

// const numbers = [1, 2, 3, 4];
// const bigNumbers = numbers.filter((n) => n > 2);
// console.log(bigNumbers);

// const electronics = products.filter(
//   (product) => product.category === 'electronics',
// );
// console.log('Exercise 3 — electronics:', electronics);

// ============================================================
// 🟠 Exercise 4 — filter()
// Get all products that cost less than $20.
// ============================================================

// const affordable = products.filter((product) => product.price < 20);
// console.log('Exercise 4 — affordable:', affordable);

// ============================================================
// 🟠 Exercise 5 — find()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//
// Find the product with id 12.
// ============================================================

// const numbers = [1, 2, 3];
// const result = numbers.find((n) => n > 1);
// console.log(result);

// const productById = products.find((product) => product.id === 12);
// console.log('Exercise 5 — productById:', productById);

// ============================================================
// 🟠 Exercise 6 — find()
// Find the first product with a rating above 4.5.
// ============================================================

// const highlyRated = products.find((product) => product.rating.rate > 4.5);
// console.log('Exercise 6 — highlyRated:', highlyRated);

// ============================================================
// 🔵 Exercise 7 — some()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//
// Check if there is any product that costs more than $500.
// Expected: true or false
// ============================================================

// const numbers = [1, 2, 3];
// const result = numbers.some((n) => n > 2);
// console.log(result);

// const hasExpensive = products.find((product) => product.price > 500);
// console.log('Exercise 7 — hasExpensive:', hasExpensive);

// ============================================================
// 🔵 Exercise 8 — every()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// const evens = [2, 4, 6];
// const result = evens.every((n) => n % 2 === 0);
// console.log(result);

// console.log(4 % 2);
// console.log(5 % 2);

//
// Check if all products have a rating above 1.
// Expected: true or false
// ============================================================

// const allRated = products.every((product) => product.rating.rate > 1.8);
// console.log('Exercise 8 — allRated:', allRated);

// ============================================================
// 🔴 Exercise 9 — reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// const numbers = [1, 2, 3];

// const total = numbers.reduce((sum, n) => sum + n, 0);

// Step 1: sum = 0, n = 1 => sum + n = 1
// Step 2: sum = 1, n = 2 => sum + n = 3
// Step 3: sum = 3, n = 3 => sum + n = 6

// console.log(total);

// Calculate the total price of all products combined.
// Expected: a single number
// ============================================================

// const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
// console.log('Exercise 9 — totalPrice:', totalPrice.toFixed(2));

// ============================================================
// 🔴 Exercise 10 — reduce()
// Calculate the average rating of all products.
// Expected: a single number rounded to 2 decimal places
// Hint: use toFixed(2)
// ============================================================

// const averageRating =
//   products.reduce((sum, product) => sum + product.rating.rate, 0) /
//   products.length;
// console.log('Exercise 10 — averageRating:', averageRating.toFixed(2));

// ============================================================
// ⭐ Exercise 11 — Chaining
// Get the titles of all 'jewelery' products that cost less than $100.
// Expected: ['White Gold Plated Princess', 'Pierced Owl Rose Gold']
// ============================================================

// const cheapJewelery = products
//   .filter((product) => product.category === 'jewelery' && product.price < 100)
//   .map((product) => product.title);
// console.log('Exercise 11 — cheapJewelery:', cheapJewelery);

// ============================================================
// ⭐ Exercise 12 — Chaining
// Get the total price of all 'electronics' products.
// Expected: a single number
// Hint: filter first, then reduce
// ============================================================

// const electronicsTotalPrice = products

//   .filter((product) => product.category === 'electronics')
//   .reduce((sum, product) => sum + product.price, 0);
// console.log('Exercise 12 — electronicsTotalPrice:', electronicsTotalPrice);

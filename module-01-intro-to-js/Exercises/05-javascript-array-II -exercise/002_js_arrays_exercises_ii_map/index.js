const numbers = [1, 2, 3, 4, 5];

// # 2. Use the map Method to Create a New Array with Doubled Values
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

// # 3. Use the map Method to Create a New Array of Strings
// const stringNumbers = numbers.map((number) => number.toString());
const stringNumbers = numbers.map((number) => `${number}`);
console.log(stringNumbers);

// # 4. Use the map Method to Create a New Array of Objects
// const numberObjects = numbers.map((number) => {
//   return {
//     original: number,
//     squared: number ** 2,
//   };
// });
const numberObjects = numbers.map((number) => ({
  original: number,
  squared: number ** 2,
}));
console.log(numberObjects);

// [
//     {original: 1,
//         squared: 1
//     },
//      {original: 2,
//         squared: 4
//     }
// ]

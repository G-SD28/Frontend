// # 1 Initialize an Array of Numbers

const numbers = [1, 2, 3, 4, 5];

// # 2 Use the forEach Method to Print Each Number

numbers.forEach(function (number) {
  console.log(number);
});

// # 3 Use the forEach Method to Calculate the Sum of the Numbers
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log('Summe: ', sum);

// # 4 Use the forEach Method to Create a New Array with Squared Values
const squarendNumbers = [];
numbers.forEach(function (number) {
  squarendNumbers.push(number * number);
});
console.log('Quadrierte Zahlen: ', squarendNumbers);

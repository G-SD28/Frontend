// You can work here or download the template!
// Array 1: Use reverse() method
const array1 = [1, 2, 3, 4, 5];
// Reverse array1 in place and print the result

// Array 2: Use toReversed() method
const array2 = ['a', 'b', 'c', 'd', 'e'];

// # 01. Reverse the First Array in Place
console.log('Original array:', array1);
array1.reverse();
console.log('Reversed array1:', array1);

console.log('\n');

// # 02. Create a Reversed Copy of the Second Array
console.log('Original array:', array2);
const reversedCopy = array2.toReversed();
console.log('Original array2 after .toReversed():', array2);
console.log('.toReversed() array2:', reversedCopy);

console.log('\n');

// # 🌟 Reverse a String
const myName = 'JavaScript';
const reversedName = myName
  .split('') // ["J", "a", "v", ..]
  .toReversed() // ["t", "p", "i", ...]
  .join(''); // "tpircSavaJ"

console.log(`The name "${myName}" reversed is "${reversedName}"`);

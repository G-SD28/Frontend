// You can work here or download the template!

// # 01. Remove the element at index 2 and add 35 and 36
const spliceArray = [10, 20, 30, 40, 50];
console.log('Original spliceArray:', spliceArray);

// At index 2, delete 1 element & add 35, and 36

const deleteItems = spliceArray.splice(2, 1, 35, 36);
console.log('\n');
console.log('Array after .splice():', spliceArray);
console.log('Return value of .splice() (deleted items):', deleteItems);
console.log('\n');

// # 02. Remove the element at index 1 and add b and c with toSpliced
// array.toSpliced(start, deleteCount, item1, item2, ...)
const toSplicedArray = ['x', 'y', 'z'];
console.log('Original toSplicedArray:', toSplicedArray);

const newSplicedArray = toSplicedArray.toSpliced(1, 1, 'b', 'c');

console.log('New array from .toSpliced():', newSplicedArray);
console.log('Original array after .toSpliced()', toSplicedArray);
console.log('\n');

// # 🌟 Mit splice hinzufuegen, ohne zu loeschen
const challengeArray = [1, 2, 3, 4, 5];
challengeArray.splice(2, 0, '🦒');
console.log('Challenge Array:', challengeArray);

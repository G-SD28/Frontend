// # 01 Initialize an Array
const newArray = [42, 'Hello, world!', true, 3.14, 'JavaScript'];

// # 02. Print the Array
console.log(newArray);

// # 03. Access Array Elements
// console.log(newArray[0]);
// console.log(newArray[1]);
// console.log(newArray[2]);
// console.log(newArray[3]);
// console.log(newArray[4]);

console.log('\n');

// * for-loop
for (let i = 0; i < newArray.length; i++) {
  console.log(`Element at index ${i} is: ${newArray[i]}`);
}

console.log('\n');

// # 04. Modify an Array Element
newArray[1] = 'Neuer Wert';
console.log(newArray);

// # 🌟 Wie bekomme ich das letzte Element eines Arrays?
console.log('Letztes Element:', newArray[newArray.length - 1]);

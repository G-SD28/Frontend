const numberArray = [10, 20, 30, 40, 50];

// # Iterate Over the Array with a `for` Loop
for (let i = 0; i < numberArray.length; i++) {
  console.log(`Index ${i}, Value: ${numberArray[i]}`);
}

// # Iterate Over the Array with a `for...of` Loop
for (const num of numberArray) {
  console.log(`Value: ${num}`);
}

// # mit Objekten
const objectArray = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

for (let index = 0; index < objectArray.length; index++) {
  console.log(`Name: ${objectArray[index].name}, Age: ${objectArray[index].age}`);
}

// const name = objectArray.name;
// const age = objectArray.age;

for (const { name, age } of objectArray) {
  console.log(`Name: ${name}, Age ${age}`);
}

for (const user of objectArray) {
  if (user.name === 'Bob') {
    console.log(`Bob gefunden. Er ist ${user.age} Jahre alt.`);
    break;
  }
}

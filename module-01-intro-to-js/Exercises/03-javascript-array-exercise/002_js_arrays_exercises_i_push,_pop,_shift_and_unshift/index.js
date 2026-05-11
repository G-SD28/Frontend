const myArray = [1, 2, 3, 4, 5];

// # 02. Add Elements to the End of the Array:
myArray.push(6);
myArray.push(7);

console.log('After push:', myArray);

// # 03. Remove the Last Element from the Array
myArray.pop();

console.log('\n', myArray);

// # 04. Remove the First Element from the Array
myArray.shift();
console.log('\n', myArray);

// # 05. Add Elements to the Beginning of the Array
myArray.unshift(0);
myArray.unshift(-1);
console.log('\n', myArray);

// # 🌟 Extra Challenge

const shoppingList = ['🥛', '🥚'];
shoppingList.push('🍞');
shoppingList.unshift('🧃');
const lastItem = shoppingList.pop();

console.log(`Das letzte Item war: ${lastItem}`); // "🍞"
console.log(`Die finale Liste ist: ${shoppingList}`); // "🧃", "🥛", "🥚"

// .splice() - original - loschen, einfuegen, hinzufuegen
// .toSplice() - immutable
// .slice() - immutable - extrahiert einen Teil des arrays

const numbersSlice = [2, 4, 6, 8, 10, 12, 14, 16];

// # 2. Use the `slice` method to extract different portions of the array.
const sliced1 = numbersSlice.slice(1, 4);
console.log(sliced1);

const sliced2 = numbersSlice.slice(3);
console.log(sliced2);

const sliced3 = numbersSlice.slice(-4);
console.log(sliced3);

console.log('\nOriginal numbers array:', numbersSlice);

// # 🌟 Pagination

const products = ['Book', 'Laptop', 'Headphones', 'Mouse', 'Keyboard', 'Monitor'];
const itemsPerPage = 3;

const page1 = products.slice(0, itemsPerPage);
console.log(page1);

const page2 = products.slice(itemsPerPage, itemsPerPage * 2);
console.log('Products on page 2:', page2);

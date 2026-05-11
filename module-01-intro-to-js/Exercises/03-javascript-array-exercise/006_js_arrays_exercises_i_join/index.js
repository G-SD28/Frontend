// You can work here or download the template!
const words = ['apple', 'banana', 'cherry', 'date'];
console.log('Original words array:', words);

// Create different strings by joining the array elements with various delimiters
// Default delimiter (comma)
const joinedWithComma = words.join();
console.log('joinedWithComma', joinedWithComma);

// Using dash as delimiter
const joinedwithDash = words.join('-');
console.log('Joined with dash:', joinedwithDash);

// Using space as delimiter;
const joinedwithSpace = words.join(' ');
console.log('Joined with space:', joinedwithSpace);

// Using ' and ' as delimiter
const joinedWithAnd = words.join(' and ');
console.log('Joined with  " and ":', joinedWithAnd);

// Without any delimiter
const joinedWithoutDeleminiter = words.join('');
console.log('Joined without:', joinedWithoutDeleminiter);

// # 🌟 URL slug
const pageTitle = ['My', 'First', 'Blog', 'Post'];
const slug = pageTitle.join('-').toLocaleLowerCase();
console.log('The URL slug is:', slug);

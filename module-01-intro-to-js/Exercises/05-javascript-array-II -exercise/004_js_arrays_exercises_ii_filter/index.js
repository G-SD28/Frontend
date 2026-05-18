const numbers = [5, 10, 15, 20, 25, 30];

// # 2. Use the filter Method to Create a New Array with Numbers Greater Than 15
const numberGreaterThan15 = numbers.filter((stegosaurus) => stegosaurus > 15);
console.log('Zahlen größer als 15:', numberGreaterThan15);

// # 3
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 88 },
  { name: 'Eve', grade: 95 },
];

// # 4. Use the filter Method to Create a New Array with Students Who Scored Above 80:
const studentsAbove80 = students.filter((student) => student.grade > 80);
// const studentsAbove80 = students.filter(({ grade }) => grade > 80);
console.log('Student:innen mit Note über 80:', studentsAbove80);

// products.filter(product => product.category === xxxx && products.price <= xxxxx && product.inStock)

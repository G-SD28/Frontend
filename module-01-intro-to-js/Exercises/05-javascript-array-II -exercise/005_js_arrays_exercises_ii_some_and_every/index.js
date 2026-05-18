// * some: gibt true zurueck, wenn MINDESTENS EIN Element die Bedingung besteht
// * every: gibt true zurueck, wenn ALLE Elemente die Bedingung bestehen

const numbers = [4, 8, 15, 16, 23, 42];

// # 2. Use the some Method to Check for Numbers Greater Than 20
const hasNumberGreaterThan20 = numbers.some((chicken) => chicken > 20);
console.log('Gibt es eine Zahl, größer als 20?', hasNumberGreaterThan20);

// # 3. Use the every Method to Check for Numbers Less Than 50
const allNumbersLessThan50 = numbers.every((trex) => trex < 50);
console.log('Sind alle Zahlen kleiner als 50?', allNumbersLessThan50);

// # 4.
const studends = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Charlie', age: 27, passed: true },
  { name: 'David', age: 20, passed: true },
];

// # 5. Use the some Method to Check if Any Student Failed
const hasAnyStudentFailed = studends.some((studend) => studend.passed === false);
// const hasAnyStudentFailed = studends.some((studend) => !studend.passed);
console.log('Ist jemand durchgefallen?', hasAnyStudentFailed);

// # 6. Use the every Method to Check if All Students are Older Than 18
const allStudentsOlderThan18 = studends.every((student) => student.age > 18);
console.log('Sind alle über 18?', allStudentsOlderThan18);

// # Beispiel methoden chaining
const userData = [
  '    justus_winter ',
  '   emma_davis  ',
  null,
  'liam_müller',
  undefined,
  'olivia_jones',
];

const cleandData = userData
  .filter((entry) => typeof entry === 'string')
  .map((username) => username.trim());

console.log(cleandData);

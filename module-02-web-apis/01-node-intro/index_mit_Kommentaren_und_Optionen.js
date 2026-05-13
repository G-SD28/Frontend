const args = process.argv.slice(2);
// console.log(args);

// const [, , a, b] = process.argv

// if (a === undefined || b === undefined){
//      console.error(`❌ Bitte gib genau zwei Argumente an.`);
// }

if (args.length !== 2) {
  console.error(`❌ Bitte gib genau zwei Argumente an.`);
  console.log(`Verwendung: node index.js <Zahl1> <Zahl2>`);
  process.exit(2);
}

// const inputOne = args[0]
// const inputTwo = args[1]
const [inputOne, inputTwo] = args;

// if (!inputOne || !inputTwo) {
//   console.error(`❌ Bitte gib genau zwei Argumente an.`);
//   console.log(`Verwendung: node index.js <Zahl1> <Zahl2>`);
//   process.exit(2);
// }1

// * Konvertiere strings zu numbers
const num1 = Number(inputOne);
const num2 = Number(inputTwo);
// const num1 = +inputOne;
// const num2 = +inputTwo;

// Number() -> wenn es keine Zahl, dann: `NaN`
// parseInt() -> konvertiert `42.2px` zu `42`
// parsefloat() -> konvertiert `42.2px` zu `42.2`

// * Auf NaN pruefen
if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.error(`❌ Beide Argumente müssen gültige Zahlen sein.`);
  // return; // Beendet Script ohne Fehlercode
  process.exit(2); // Beendet Script mit Fehlercode
}

// const nums = args.map(Number);
// if (nums.some(Number.isNaN)) {
//   console.error(`❌ Beide Argumente müssen gültige Zahlen sein.`);
//   process.exit(2); // Beendet Script mit Fehlercode
// }

// typeof NaN === "number" ist ungeeignet, weil:
// console.log(typeof 5); // number
// console.log(typeof NaN);// number

// isNaN()
//    isNaN("hello") -> true
//    isNaN("5") -> false
//    isNaN("NaN") -> true
// Number.isNaN()
//    Number.isNaN("hello") -> false
//    Number.isNaN("5") -> false
//    Number.isNaN("NaN") -> true

// * addiere Zahlen
const sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);
process.exit(0);

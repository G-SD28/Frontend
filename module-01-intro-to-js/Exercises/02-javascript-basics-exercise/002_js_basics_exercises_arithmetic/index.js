// --- Addition mit gemischten Typen ---
let num = 10;
let strNum = '5';
let resultAddition = num + strNum;
console.log("Addition (10 + '5'):", resultAddition); // Ergebnis: "105" (String-Konkatenation)

// ---------------------------------------------------

// --- Subtraktion mit gemischten Typen ---
let resultSubtraction = num - strNum;
console.log("Subtraktion (10 - '5'):", resultSubtraction); // Ergebnis: 5 (implizite Umwandlung in Zahl)

// ---------------------------------------------------

// --- Multiplikation mit einem String ---
let resultMultiplication = strNum * 3;
console.log("Multiplikation ('5' * 3):", resultMultiplication); // Ergebnis: 15

// ---------------------------------------------------

// --- Division durch einen String ---
let resultDivision = 20 / strNum;
console.log("Division (20 / '5'):", resultDivision); // Ergebnis: 4

// ---------------------------------------------------

// --- Modulus Operation ---
let numA = 10;
let numB = 3;
console.log('Modulus (10 % 3):', numA % numB); // Ergebnis: 1 (Restwert)

let strNumB = '3';
console.log("Modulus mit String (10 % '3'):", numA % strNumB); // Ergebnis: 1

// ---------------------------------------------------

// --- Serie von numerischen Operationen ---
let x = 12;
let y = 4;
let z = 2;

console.log('Kombiniert (Addition/Subtraktion):', x + y - z); // 14
console.log('Kombiniert (Punkt-vor-Strich):', x + y * z); // 20 (4 * 2 zuerst)
console.log('Kombiniert (mit Klammern):', (x + y) / z); // 8

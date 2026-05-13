// Extrahiere Befehlszeilenargumente (überspringe die ersten zwei)
const args = process.argv.slice(2);

// Überprüfe, ob genau zwei Argumente vorhanden sind
if (args.length !== 2) {
  console.error('❌ Bitte gib genau zwei Argumente an.');
  console.log('Verwendung: node index.js <Zahl1> <Zahl2>');
  process.exit(2);
}

// Destructure & konvertiere in Zahlen
const [inputOne, inputTwo] = args;
const num1 = Number(inputOne);
const num2 = Number(inputTwo);

// Überprüfe, ob beide Eingaben echte Zahlen sind
if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.error('❌ Beide Argumente müssen gültige Zahlen sein.');
  console.log(`Eingaben: "${num1}" und "${num2}"`);
  process.exit(2);
}

// Berechne und gib das Ergebnis aus
const sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);
process.exit(0); // Programm wurde erfolgreich beendet.

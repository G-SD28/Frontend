// Variable definieren (Beispielwert in Grad Celsius)
let temperature = 20;

// --- Task 1: Einfaches if/else ---
if (temperature < 15) {
  console.log('Empfehlung (einfach): Bitte trag einen Mantel.');
} else {
  console.log('Empfehlung (einfach): Du brauchst heute keinen Mantel.');
}

// ---------------------------------------------------

// --- Task 2: if / else if / else (Drei Temperaturbereiche) ---
if (temperature < 15) {
  console.log('Es ist kalt, zieh einen Mantel an.');
} else if (temperature >= 15 && temperature <= 25) {
  console.log('Mildes Wetter, ein Pullover reicht aus.');
} else {
  console.log('Es ist warm, ein T-Shirt ist perfekt!');
}

// ---------------------------------------------------

// --- Task 3: Switch Statement (Spezifische Werte) ---
// Hinweis: Switch prüft auf exakte Übereinstimmung (Equality)
switch (temperature) {
  case 10:
    console.log('Punktlandung 10 Grad: Definitiv Mantel-Wetter!');
    break;
  case 20:
    console.log('Punktlandung 20 Grad: Ein schöner Tag für einen Pullover.');
    break;
  case 30:
    console.log('Punktlandung 30 Grad: Viel zu heiß! Ab ins T-Shirt.');
    break;
  default:
    console.log(
      'Keine spezielle Empfehlung für genau ' + temperature + ' Grad.',
    );
}

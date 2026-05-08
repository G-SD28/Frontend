// --- 1. ARRAY ERSTELLEN UND ZUGREIFEN ---
const fruits = ['Apple', 'Banana', 'Cherry'];

// Auf ein Element zugreifen (Index beginnt bei 0)
const firstItem = fruits[0];
console.log('Erstes Element:', firstItem); // Output: Apple

// Ein Element ändern
fruits[1] = 'Berry';
console.log('Nach Änderung:', fruits); // Output: ['Apple', 'Berry', 'Cherry']

// --- 2. ARRAY METHODEN: ELEMENTE HINZUFÜGEN UND ENTFERNEN ---
// push() - Fügt am Ende ein Element hinzu
fruits.push('Mango');
console.log('Nach push():', fruits);

// pop() - Entfernt das letzte Element
const deletedItem = fruits.pop();
console.log('Gelöschtes Element:', deletedItem); // Output: Mango

// unshift() - Fügt am Anfang ein Element hinzu
const newLength = fruits.unshift('Orange');
console.log('Nach unshift():', fruits);
console.log('Neue Länge:', newLength);

// shift() - Entfernt das erste Element
fruits.shift();
console.log('Nach shift():', fruits);

// --- 3. ARRAY UMKEHREN ---
const colors = ['Red', 'Blue', 'Green', 'Orange'];
const reversedColors = colors.toReversed();
console.log('Original:', colors);
console.log('Umgekehrt:', reversedColors);

// --- 4. SPREAD OPERATOR - ARRAY KOPIEREN ---
const numbers = [3, 5, 8];
const numbers2 = [...numbers]; // Erstellt eine Kopie
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax

numbers2[1] = 7; // Ändert nur numbers2
console.log('Original numbers:', numbers);
console.log('Kopie numbers2:', numbers2);

// --- 5. SCHLEIFEN - DURCH ARRAY ITERIEREN ---

// Klassische for-Schleife
console.log('Klassische for-loop');
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i].toUpperCase());
}

// for...of Schleife (einfacher und moderner)
console.log('for...of loop');
for (const color of colors) {
  console.log(color.toUpperCase());
}

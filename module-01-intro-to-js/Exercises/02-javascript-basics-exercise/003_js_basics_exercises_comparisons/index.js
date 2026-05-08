// You can work here or download the template!
// Werte für den Vergleich
const val5 = 5;
const str5 = '5';
const val10 = 10;
const str10 = '10';

// ---------------------------------------------------

// Einfache vs. Strenge Gleichheit
console.log("Einfache Gleichheit (5 == '5'):", val5 == str5); // true
console.log("Strenge Gleichheit (5 === '5'):", val5 === str5); // false

// ---------------------------------------------------

// Einfache vs. Strenge Ungleichheit
console.log("Einfache Ungleichheit (10 != '10'):", val10 != str10); // false
console.log("Strenge Ungleichheit (10 !== '10'):", val10 !== str10); // true

// ---------------------------------------------------

// Größer als Vergleiche
console.log('Ist 5 > 3?', 5 > 3); // true
console.log("Ist '5' > '3'?", '5' > '3'); // true (alphabetischer Vergleich)

// ---------------------------------------------------

// Kleiner als Vergleiche
console.log('Ist 10 < 20?', 10 < 20); // true
console.log("Ist '10' < '20'?", '10' < '20'); // true (Zeichenvergleich '1' vs '2')

// ---------------------------------------------------

// Größer gleich / Kleiner gleich
console.log('Ist 5 >= 5?', 5 >= 5); // true
console.log("Ist '5' >= 5?", '5' >= 5); // true (String wird zur Zahl für Mathe)
console.log('Ist 10 <= 20?', 10 <= 20); // true
console.log("Ist '10' <= '20'?", '10' <= '20'); // true

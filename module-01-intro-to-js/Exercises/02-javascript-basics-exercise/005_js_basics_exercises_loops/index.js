const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

// Task 1: for-loop (Gesamtanzahl)
let totalCount = 0;
for (let i = 0; i < animals.length; i++) {
  totalCount++;
}
console.log('Gesamtanzahl der Tiere:', totalCount);

// ---------------------------------------------------

// Task 2: while-loop (Namen mit 5 oder mehr Buchstaben)
let longNameCount = 0;
let j = 0;
while (j < animals.length) {
  if (animals[j].length >= 5) {
    longNameCount++;
  }
  j++;
}
console.log('Tiere mit 5+ Buchstaben:', longNameCount);

// ---------------------------------------------------

// Task 3: do...while-loop (Zählen bis ein Tier mit 'm' beginnt)
let countUntilM = 0;
let k = 0;
do {
  if (animals[k][0] === 'm') {
    break; // Stop, wenn wir ein 'm' finden
  }
  countUntilM++;
  k++;
} while (k < animals.length);
console.log("Anzahl Tiere bis zum ersten 'm':", countUntilM);

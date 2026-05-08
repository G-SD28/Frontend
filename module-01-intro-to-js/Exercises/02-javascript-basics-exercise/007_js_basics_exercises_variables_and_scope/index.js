// 1. Globaler und Funktions-Scope mit var
var globalVar = 'Ich bin global';

function testScope() {
  var globalVar = 'Ich bin lokal in der Funktion';
  console.log('Innerhalb der Funktion:', globalVar);
}
testScope();
console.log('Globaler Wert nach Funktion:', globalVar); // Bleibt unverändert

// ---------------------------------------------------

// 2. Block Scope mit let und const
if (true) {
  let blockLet = 'Sichtbar nur im Block';
  const blockConst = 'Ebenfalls nur im Block';
  // let blockLet = "Fehler"; // Würde Error werfen (Redeklaration nicht erlaubt)
  console.log(blockLet);
}
// console.log(blockLet); // Error: blockLet is not defined

// ---------------------------------------------------

// 3. Redeklaration mit var (Vorsicht: Scope Leakage)
var originalVar = 'Start';
if (true) {
  var originalVar = 'Überschrieben im Block'; // Überschreibt die äußere Variable!
}
console.log('Wert nach dem Block:', originalVar); // "Überschrieben im Block"

// ---------------------------------------------------

// 4. Mutabilität bei const (Arrays & Objekte)
const myTeam = ['Alice', 'Bob'];
myTeam.push('Charlie'); // Erlaubt: Inhalt ändert sich
console.log('Team nach Änderung:', myTeam);

const config = { theme: 'dark' };
config.theme = 'light'; // Erlaubt: Eigenschaft ändert sich
console.log('Config nach Änderung:', config);

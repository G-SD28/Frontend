// # ==========================================
// # JAVASCRIPT-GRUNDLAGEN
// # ==========================================
//
// Dieses Script behandelt grundlegende JavaScript-Konzepte.

// # ==========================================
// # JAVASCRIPT-SYNTAX-GRUNDBAUSTEINE
// # ==========================================
//
// Die JavaScript-Syntax besteht aus:
// - Literals: feste Werte, die direkt im Code stehen (z. B. Zahlen, Strings)
// - Variablen: Container, um Werte zu speichern
// - Operatoren: Symbole, die Operationen ausführen
// - Ausdrücke (Expressions): Kombinationen aus Werten, Variablen und Operatoren
// - Schlüsselwörter (Keywords): reservierte Wörter mit spezieller Bedeutung
// - Kommentare: Hinweise im Code, die von der JS-Engine ignoriert werden

console.info('JAVASCRIPT-SYNTAX-GRUNDBAUSTEINE');

// Beispiel für Syntax:
let result = 10 + 1; // Ausdruck mit Literals, Variablen und Operatoren
console.log(result); // Ausgabe: 11

// # ==========================================
// # VARIABLEN
// # ==========================================
//
// Variablen sind Container zum Speichern von Werten.
// In JavaScript kannst du sie auf drei Arten deklarieren:
// - let: für Werte, die sich ändern können
// - const: für Werte, die unveränderlich bleiben sollen
// - var: veraltete Syntax – bitte vermeiden

console.info('VARIABLEN');

// Verwendung von let (kann neu zugewiesen werden)
let score = 10 + 1;
console.log(score); // Ausgabe: 11
score = 20; // Neuzuweisung
console.log(score); // Ausgabe: 20

// Verwendung von const (kann NICHT neu zugewiesen werden)
const myConst = 'Das ist eine Konstante!';
console.log(myConst);
// myConst = "Etwas anderes!"; // → Fehler, da const nicht neu zuweisbar ist

// Verwendung von var (nicht empfohlen)
// var dontUseVar = ":(";

// # ==========================================
// # DATENTYPEN
// # ==========================================
//
// JavaScript hat mehrere eingebaute Datentypen:
// - Number: für Zahlenwerte
// - String: für Text
// - Boolean: für Wahr/Falsch
// - Object: für komplexe Datenstrukturen
// - Undefined: Variable deklariert, aber ohne Wert
// - Null: bewusste Abwesenheit eines Wertes

console.info('DATENTYPEN');

// Beispiele verschiedener Datentypen
let num = 42; // Number
let text = 'Hallo'; // String
let isTrue = true; // Boolean
let person = { name: 'John', age: 30 }; // Object
let notDefined; // Undefined
let empty = null; // Null

// Typprüfung mit typeof
console.log(typeof num); // "number"
console.log(typeof text); // "string"
console.log(typeof isTrue); // "boolean"
console.log(typeof person); // "object"
console.log(typeof notDefined); // "undefined"
console.log(typeof empty); // "object" (bekannte Eigenheit von JS)

// # ==========================================
// # OPERATOREN
// # ==========================================
//
// ---- Arithmetische Operatoren ----
// +  Addition
// -  Subtraktion
// *  Multiplikation
// /  Division
// %  Modulus (Restwert)
// ++ Inkrementieren
// -- Dekrementieren

console.info('OPERATOREN – Arithmetik');

// Beispiele arithmetischer Operatoren
result = 10 * 2; // Multiplikation
console.log(result); // Ausgabe: 20

let counter = 1;
counter++; // Erhöhen um 1
console.log(counter); // 2
counter--; // Verringern um 1
console.log(counter); // 1

// ---- Zuweisungsoperatoren ----
// =   weist einen Wert zu
// +=  addiert und weist zu
// -=  subtrahiert und weist zu
// *=  multipliziert und weist zu
// /=  dividiert und weist zu

console.info('OPERATOREN – Zuweisung');

// Beispiele
let x = 10;
x += 5; // dasselbe wie x = x + 5
console.log(x); // Ausgabe: 15

// ==========================================
// AUSDRÜCKE (Expressions)
// ==========================================
//
// Ein Ausdruck ist eine Kombination aus Werten, Variablen und Operatoren,
// die zu einem Ergebniswert führt.

console.info('AUSDRÜCKE');

let sum = 10 + 1; // ergibt 11

// # ==========================================
// # SCHLÜSSELWÖRTER (KEYWORDS)
// # ==========================================
//
// Bestimmte Wörter sind in JavaScript reserviert und dürfen nicht als Variablennamen benutzt werden.
// Beispiele:
// - let, const, var       → Variablen-Deklaration
// - if, else, switch      → Kontrollfluss
// - function, return      → Funktionen
// - try, catch            → Fehlerbehandlung
// - for, while, do        → Schleifen
// - break, continue       → Schleifenkontrolle

console.info('SCHLÜSSELWÖRTER');

// # ==========================================
// # KOMMENTARE
// # ==========================================

console.info('KOMMENTARE');

// Einzeiliger Kommentar

/* Mehrzeiliger
   Kommentar
   über mehrere Zeilen */

// # ==========================================
// # IDENTIFIERS
// # ==========================================
//
// Bezeichner (Identifiers) sind Namen, die Variablen, Funktionen usw. zugewiesen werden.
// Regeln:
// - Muss mit Buchstabe, Unterstrich (_) oder Dollarzeichen ($) beginnen
// - Danach dürfen auch Ziffern vorkommen
// - Groß- und Kleinschreibung spielt eine Rolle
// - Dürfen keine reservierten Schlüsselwörter sein

console.info('IDENTIFIERS');

// Konvention: camelCase
let myVariable; // gut
let my_variable; // wird seltener verwendet (snake_case)
let MyVariable; // nicht empfohlen (PascalCase)

// # ==============================================================================
// # ABSCHNITT 1: KOMMENTARE UND BASIS-AUSGABEN
// # ==============================================================================
//
// Kommentare sind wichtig, um Code zu erklären. Die JavaScript-Engine ignoriert sie.
//
// Einzeilige Kommentare: für kurze Hinweise
/*
  Mehrzeilige Kommentare:
  für längere Erklärungen über mehrere Zeilen.
*/

// console.log(): Eine grundlegende Funktion, um Text oder Werte in der Konsole
// des Browsers (oder in Node.js im Terminal) auszugeben.
// Sehr hilfreich zum Debuggen oder Nachvollziehen des Programmablaufs.
console.log('--- ABSCHNITT 1: Grundausgabe ---');
console.log(20 + 5); // Gibt 25 in der Konsole aus.

// # ==============================================================================
// # ABSCHNITT 2: VARIABLEN – DATEN SPEICHERN UND VERWALTEN
// # ==============================================================================
//
// Variablen sind benannte Speicherorte für Werte.
// JavaScript bietet drei Schlüsselwörter dafür, mit unterschiedlichem Verhalten:
// - let: Block-Scope, kann neu zugewiesen werden
// - const: Block-Scope, nicht neu zuweisbar
// - var: Funktions-Scope (ältere Syntax, vermeiden)

console.log('\n--- ABSCHNITT 2: Variablen ---');

// * 2.1 let – Block-Scope-Variable, neu zuweisbar
result = 20 + 5; // Deklaration + Initialisierung
console.log('let-Variable result (Anfang):', result); // 25

result = 30; // neue Zuweisung
console.log('let-Variable result (neu):', result); // 30

// * 2.2 const – nicht neu zuweisbar
const constVar = 'Ich bin die paradoxe konstante Variable';
console.log('const-Variable constVar:', constVar);

// constVar = "Etwas Neues"; // → TypeError (nicht erlaubt)

// * 2.3 var – alte Syntax, Function Scope
var imOld = 'Benutz mich nicht!';
console.log('var-Variable imOld:', imOld);

// # ==============================================================================
// # ABSCHNITT 3: DATENTYPEN – INFORMATIONEN KATEGORISIEREN
// # ==============================================================================
//
// JavaScript ist dynamisch typisiert: Der Typ wird erst zur Laufzeit bestimmt.
// Zu den Basis-Datentypen gehören Number, String, Boolean, Undefined, Null, Object, Array.

console.log('\n--- ABSCHNITT 3: Datentypen ---');

// * 3.1 Number
result = 25;
console.log('result als Number:', result);
console.log('Typ von result:', typeof result);

// * 3.2 String
result = '25';
console.log('result als String:', result);
console.log('Typ von result:', typeof result);

// * 3.3 Object – Schlüssel-Wert-Paare
let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2005,
};
console.log('Objekt car:', car);
console.log('Zugriff auf car.make:', car.make);

// * 3.4 Array – geordnete Liste von Werten
let fruits = ['Banana', 'Apple', 'Orange', 25];
console.log('Array fruits:', fruits);
console.log('Erstes Element fruits[0]:', fruits[0]);
console.log('Typ von fruits:', typeof fruits); // technisch: object

// # ==============================================================================
// # ABSCHNITT 4: ARITHMETISCHE OPERATOREN
// # ==============================================================================
//
// Dienen mathematischen Berechnungen.

console.log('\n--- ABSCHNITT 4: Arithmetische Operatoren ---');

num = 1;
console.log('Anfangswert num:', num);

// Inkrementieren / Dekrementieren
num++; // entspricht num = num + 1
console.log('Nach num++:', num);

// num--; // num = num – 1
// console.log("Nach num--:", num);

// Kombinierte Zuweisung
num += 7; // num = num + 7
console.log('Nach num += 7:', num); // 9

// # ==============================================================================
// # ABSCHNITT 5: VERGLEICHSOPERATOREN
// # ==============================================================================
//
// Vergleiche zweier Werte liefern ein Boolean-Ergebnis (true/false).

console.log('\n--- ABSCHNITT 5: Vergleichs-Operatoren ---');

// lose Gleichheit (==) → wandelt Typen automatisch um (type coercion)
console.log("10 == '10':", 10 == '10'); // true

// strikte Gleichheit (===) → vergleicht Wert UND Typ
console.log("10 === '10':", 10 === '10'); // false
console.log('0 === false:', 0 === false); // false

// # ==============================================================================
// # ABSCHNITT 6: LOGISCHE OPERATOREN
// # ==============================================================================
//
// Dienen zum Kombinieren mehrerer Bedingungen.

console.log('\n--- ABSCHNITT 6: Logische Operatoren ---');

// UND (&&) – true, wenn beide true
console.log("10 === '10' && 0 === false:", 10 === '10' && 0 === false); // false
console.log('10 === 10 && 0 === 0:', 10 === 10 && 0 === 0); // true

// ODER (||) – true, wenn mindestens eine true
console.log('10 === 10 || 0 === 0:', 10 === 10 || 0 === 0); // true
console.log("10 === '10' || 0 === 0:", 10 === '10' || 0 === 0); // true
console.log("10 === '10' || 0 === false:", 10 === '10' || 0 === false); // false

// NICHT (!) – kehrt den Boolean-Wert um
console.log('!true:', !true); // false
console.log('!false:', !false); // true

// Typumwandlung zu Boolean (truthy / falsy)
console.log('!0 (0 ist falsy):', !0); // true
console.log('!1 (1 ist truthy):', !1); // false
console.log('!-3 (-3 ist truthy):', !-3); // false
console.log('!null (null ist falsy):', !null); // true
console.log('!undefined (undefined ist falsy):', !undefined); // true

// # ==============================================================================
// # ABSCHNITT 7: BEDINGUNGEN (CONDITIONALS)
// # ==============================================================================
//
// Damit kann das Programm auf unterschiedliche Situationen reagieren.

console.log('\n--- ABSCHNITT 7: Bedingungen ---');

// * 7.1 if-Statement
console.log('--- If-Statement ---');
let weatherToday;
let temp = 50;
const imALocal = 'Ich bin eine globale Konstante!';

if (temp >= 20) {
  const imLocal = 'Ich bin eine lokale Konstante!';
  weatherToday = 'toasty';
  console.log('Innerhalb des if-Blocks (imLocal):', imLocal);
}

console.log('Außerhalb des if-Blocks (imALocal):', imALocal);
console.log('Wetter nach if:', weatherToday);
// console.log(imLocal); // → ReferenceError (out of scope)

// * 7.2 if-else
console.log('--- If-Else Statement ---');
let isPlaytime = true;

if (isPlaytime) {
  console.log('Yay! Zeit zum Spielen!');
} else {
  console.log('Oh nein, ich muss arbeiten :(');
}

// * 7.3 Ternary Operator
console.log('--- Ternary Operator ---');
isPlaytime ? console.log('Yay! Zeit zum Spielen!') : console.log('Oh nein, ich muss arbeiten :(');

// * 7.4 if-else-if-Kette
console.log('--- If-Else-If Kette ---');
temp = 12;

if (temp >= 20) {
  weatherToday = 'toasty';
} else if (temp >= 10 && temp < 20) {
  weatherToday = 'a bit chilly';
} else {
  weatherToday = 'uncertain';
}

console.log(`Das Wetter heute ist ${weatherToday}.`);

// * 7.5 switch-Statement
console.log('--- Switch Statement ---');
const charClass = 'paladin';

switch (charClass) {
  case 'fighter':
    console.log('Ich bin sehr strategisch!');
    break;
  case 'monk':
    console.log('Ich kämpfe mit meinen Fäusten!');
    break;
  case 'wizard':
    console.log('Ich beziehe meine Magie aus Büchern!');
    break;
  case 'sorcerer':
  case 'warlock':
    console.log('Ich kann mächtige Magie wirken!');
    break;
  default:
    console.log('Ich liebe DnD!'); // Ausgabe bei paladin
}

// # ==============================================================================
// # ABSCHNITT 8: FUNKTIONEN – WIEDERVERWENDBARE CODE-BLÖCKE
// # ==============================================================================
//
// Funktionen sind zentrale Bausteine in JavaScript.
// Sie kapseln Code, der mehrfach ausgeführt werden kann,
// und machen Programme modular und übersichtlich.

console.log('\n--- ABSCHNITT 8: Funktionen ---');

// * 8.1 Function Declaration (Deklaration – „gehoisted“)
// Funktionen, die so geschrieben werden, sind „gehoisted“ –
// sie können also bereits aufgerufen werden, bevor sie im Code stehen.
console.log('--- Function Declaration (Hoisting) ---');
sayHelloWorld(); // funktioniert, obwohl die Definition erst später folgt

function sayHelloWorld() {
  console.log('Hallo Welt!');
}

// Funktionen können Werte zurückgeben (return)
function writeMessage() {
  return 'Hallo Welt aus writeMessage!';
}

const myMessage = writeMessage(); // Rückgabewert in Variable speichern
console.log('Rückgabewert aus writeMessage:', myMessage);

// * 8.2 Function Expression
// Hier wird eine anonyme (oder benannte) Funktion einer Variablen zugewiesen.
// Sie ist nicht „gehoisted“ – kann also erst nach der Deklaration verwendet werden.
console.log('--- Function Expression ---');

const goodByWorld = function () {
  console.log('Auf Wiedersehen, wunderbare Welt!');
};

goodByWorld();

// * 8.3 Arrow Function (Pfeilfunktion, ES6+)
// Kürzere, modernere Schreibweise für Funktionen.
// Sehr beliebt für kompakte Funktionen und Callback-Strukturen.
// Pfeilfunktionen übernehmen das this ihres umgebenden Scopes („lexical this“).
console.log('--- Arrow Functions ---');

const sudoMakeMeASandwich = () => {
  console.log('Hier ist dein Sandwich!');
};

sudoMakeMeASandwich();

// * 8.4 Parameter & Arguments
// Parameter = Platzhalter in der Funktionsdefinition
// Arguments = übergebene Werte beim Aufruf
console.log('--- Funktionsparameter und Argumente ---');

// Funktion mit einem Parameter
const squareNum = (parameter) => {
  return parameter * parameter;
};

// Kurzform (Single-Expression Arrow Function):
// const squareNum = parameter => parameter * parameter;

const squaredNum = squareNum(8);
console.log('Quadrat von 8:', squaredNum); // 64

// Beispiel für NaN („Not a Number“), wenn kein numerischer Wert übergeben wird:
// const squaredNum = squareNum("acht"); → NaN

// Funktion mit mehreren Parametern
const multiply = (parameter1, parameter2) => {
  return parameter1 * parameter2;
};

const multNum = multiply(5, 6);
console.log('5 * 6 =', multNum);

// # ==============================================================================
// # ABSCHNITT 9: LOOPS – WIEDERHOLTE CODEAUSFÜHRUNG
// # ==============================================================================
//
// Schleifen dienen dazu, Code mehrfach auszuführen,
// solange eine bestimmte Bedingung erfüllt ist.

console.log('\n--- ABSCHNITT 9: Loops ---');

// * 9.1 for-Schleife
// Wird verwendet, wenn du weißt, wie oft sie laufen soll.
/*
  Syntax:
  for (Initialisierung; Bedingung; Inkrement/Dekrement) {
    // Code, der bei jedem Durchlauf ausgeführt wird
  }
*/
console.log('--- For Loop ---');
for (let i = 0; i < 5; i++) {
  console.log('for-Durchlauf:', i); // 0–4
}

// break → beendet die Schleife sofort
console.log('--- For Loop mit break ---');
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log('Abbruch bei i = 5');
    break;
  }
  console.log('Wert von i:', i);
}

// continue → überspringt den aktuellen Durchlauf
console.log('--- For Loop mit continue ---');
for (let i = 0; i < 5; i++) {
  if (i == 2) {
    console.log('Überspringe i = 2');
    continue;
  }
  console.log('Wert:', i);
}

// * 9.2 while-Schleife
// Wird ausgeführt, solange die Bedingung true ist.
/*
  Syntax:
  while (Bedingung) {
    // Codeblock
  }
*/
console.log('--- While Loop ---');

let i = 0;
while (i < 5) {
  console.log('while-Durchlauf:', i);
  i++;
} // Ausgabe: 0–4

// * 9.3 do-while-Schleife
// Wie while, aber sie läuft mindestens einmal, auch wenn die Bedingung direkt false ist.
/*
  Syntax:
  do {
    // Codeblock
  } while (Bedingung);
*/
console.log('--- Do-While Loop ---');
i = 0;
do {
  console.log('do-while-Durchlauf:', i);
  i++;
} while (i < 5);
// Ausgabe: 0–4

// * 9.4 for...of-Schleife
// Dient zum Iterieren über „iterable objects“ (z. B. Arrays, Strings, Sets, Maps)
console.log('--- For...of Loop ---');

let fruits2 = ['Banana', 'Apple', 'Orange', 25];

// klassische for-Schleife (über Index)
console.log('Iteration mit klassischer for-Schleife:');
for (let j = 0; j < fruits2.length; j++) {
  console.log(fruits2[j]);
}

// for...of – direkter Zugriff auf Werte
console.log('Iteration mit for...of:');
for (const fruit of fruits2) {
  console.log(fruit);
}

// Beispiel mit String
const myString = 'hello';
for (const char of myString) {
  console.log(char);
}

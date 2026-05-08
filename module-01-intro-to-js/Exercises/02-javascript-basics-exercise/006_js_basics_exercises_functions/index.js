// --- Part 1: Function Declarations ---

// Keine Parameter, keine Return
function greet() {
  console.log('Hello, World!');
}
greet();

// ---------------------------------------------------

// Ein Parameter mit Return (Quadratzahl)
function square(number) {
  return number * number;
}
const mySquare = square(5);
console.log('Quadrat von 5:', mySquare);

// ---------------------------------------------------

// Switch
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Sonntag';
    case 1:
      return 'Montag';
    case 2:
      return 'Dienstag';
    case 3:
      return 'Mittwoch';
    case 4:
      return 'Donnerstag';
    case 5:
      return 'Freitag';
    case 6:
      return 'Samstag';
    default:
      return 'Ungültiger Tag';
  }
}
console.log('Tag 3 ist:', getDayName(3));

// ---------------------------------------------------

// --- Part 2: Function Expressions ---

const greetExpression = function () {
  console.log('Hello, World! (Expression)');
};

const squareExpression = function (number) {
  return number * number;
};

const getDayNameExpression = function (dayNumber) {
  // Logik bleibt gleich wie oben
  const days = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ];
  return days[dayNumber] || 'Ungültiger Tag';
};

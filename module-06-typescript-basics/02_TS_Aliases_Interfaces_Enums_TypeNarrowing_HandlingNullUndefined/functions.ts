function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

function getGreeting(name: string): string {
  if (!name) return 'Hello';
  return `Hello, ${name}`;
}

// console.log(getFullName('Test', 'Testy'));
// console.log(getGreeting('Testo'));

// OPTIONAL PARAMETER WITH "?"
function logMessage(message: string, userId?: number): void {
  console.log(`${message} ${userId ? `from user ${userId}` : ''}`);
}

// logMessage('Hello there');
// logMessage('something', 4);

// DEFAULT PARAMETER
function greetUser(name: string = 'guest'): string {
  return `Welcome, ${name}!`;
}

// console.log(greetUser());
// console.log(greetUser('Marinel'));

function increment(x: number, step: number = 1): number {
  return x + step;
}

// console.log(increment(5)); // 6
// console.log(increment(5, 3)); // 8

type Greeter = (name: string) => string;

const greet: Greeter = (name) => `Hello, ${name}`;

console.log(greet('Jamal'));

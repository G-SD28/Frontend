// function printValue(value: string | number) {
//   console.log(value.toUpperCase());
// }

//typeof
function printValue(value: string | number): void {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// printValue('hello');
// printValue(3.239237923723);

// truthiness narrowing

function greeto(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log('Hello, stranger');
  }
}

// greeto('Mira');
// greeto();

// in operator

// type Dog = {
//   bark: () => void;
// };

// type Cat = {
//   meow: () => void;
// };

// function speak(pet: Dog | Cat): void {
//   if ('bark' in pet) {
//     pet.bark();
//   } else {
//     pet.meow();
//   }
// }

// kind identity
type Dog = { kind: 'dog'; bark: () => void };
type Cat = { kind: 'cat'; meow: () => void };

function speak(pet: Dog | Cat): void {
  if (pet.kind === 'dog') {
    pet.bark();
  } else {
    pet.meow();
  }
}

// instanceof

function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toLocaleDateString();
  } else {
    return value.trim();
  }
}

console.log(formatDate(new Date()));
console.log(formatDate('            hello             '));

// const user = {
//   name: 'Someone',
//   age: 30,
// };

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const jamal = new User('Jamal', 30);
const philipp = new User('Philipp', 30);

// jamal.greet();
// philipp.greet();

// READONLY & OPTIONAL PROPERTYS

class Book {
  readonly title: string;
  author?: string;

  constructor(title: string, author?: string) {
    this.title = title;
    this.author = author;
  }
}

const myBook = new Book('A Bear Called Paddington', 'Michael Bond');

// myBook.title = 'something else';

// ACCESS MODIFIERS => wer darf was sehen?
// public => überall zugänglich (standard)
// private => nur innerhalb der Klasse
// protected => innerhalb der Klasse und Unterklassen zugänglich

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// const account = new BankAccount(1000);
// account.deposit(500);
// console.log(account.getBalance());

// console.log(account.balance)

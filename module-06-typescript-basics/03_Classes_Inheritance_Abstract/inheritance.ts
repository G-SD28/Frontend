class ContentCreator {
  constructor(public username: string) {}

  post(): void {
    console.log(`${this.username} posted something!`);
  }
}

class Youtuber extends ContentCreator {
  post(): void {
    console.log(`${this.username} uploaded a new Video!`);
  }
}

class Blogger extends ContentCreator {
  post(): void {
    console.log(`${this.username} published a new blogpost`);
  }
}

const youtuber = new Youtuber('devGuru');
// youtuber.post();

const blogger = new Blogger('techWriter');
// blogger.post();

// SUPER()

class Animal {
  constructor(
    public name: string,
    public age: number,
  ) {}

  sleep(): void {
    console.log(`${this.name} is sleeping...`);
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound!`);
  }
}

class Dog extends Animal {
  constructor(
    name: string,
    age: number,
    public breed: string,
  ) {
    super(name, age);
  }

  makeSound(): void {
    console.log(`${this.name} barks!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} meoows!`);
  }
}

const dog = new Dog('Doggo', 3, 'labrador');
// dog.sleep();
// dog.makeSound();

const cat = new Cat('catty', 5);
// cat.sleep();
// cat.makeSound();

// PROTECTED

class GameCharacter {
  protected energy: number = 100;

  charge(amount: number): void {
    this.energy += amount;
  }
}

class Mage extends GameCharacter {
  castSpell(): void {
    if (this.energy >= 20) {
      this.energy -= 20;
      console.log('spell cast!');
    } else {
      console.log('not enough energy');
    }
  }

  showEnergy(): void {
    console.log(`${this.energy} energy remaining`);
  }
}

const wizard = new Mage();

wizard.castSpell();
wizard.castSpell();
wizard.castSpell();
wizard.castSpell();
wizard.castSpell();
wizard.castSpell();
wizard.showEnergy();

// wizard.energy = 1000000000;

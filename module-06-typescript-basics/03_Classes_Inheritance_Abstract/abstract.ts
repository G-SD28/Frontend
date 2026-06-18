abstract class Notify {
  constructor(public recipient: string) {}

  abstract send(): void;

  log(): void {
    console.log(`Sending notification to ${this.recipient}...`);
  }
}

class EmailNotification extends Notify {
  send(): void {
    console.log(`Email sent to ${this.recipient}...`);
  }
}

class SMSNotification extends Notify {
  send(): void {
    console.log(`SMS sent to ${this.recipient}`);
  }
}

const email = new EmailNotification('test@mail.com');
const sms = new SMSNotification('+49123456789');

// email.log();
// email.send();

// sms.log();
// sms.send();

interface Drawable {
  draw(): void;
}

interface Resizable {
  resize(factor: number): void;
}

class Circle implements Drawable {
  draw(): void {
    console.log('Drawing a circle');
  }
}

class Square implements Drawable {
  draw(): void {
    console.log('Drawing a square');
  }
}

class Canvas implements Drawable, Resizable {
  draw(): void {
    console.log('drwaing...');
  }

  resize(factor: number): void {
    console.log(`Resizing by ${factor}`);
  }
}

const test = new Canvas();

// test.draw();
// test.resize(5);

abstract class Tool {
  constructor(public name: string) {}

  abstract use(): void;

  describe(): void {
    console.log(`${this.name} is a tool`);
  }
}

class Hammer extends Tool {
  use(): void {
    console.log('hammering nails');
  }
}

const hammer = new Hammer('Hammer');
hammer.describe();
hammer.use();

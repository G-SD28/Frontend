type User = {
  name: string;
  email: string;
  phone?: string;
};

const user: User = {
  name: 'someone',
  email: 'someoen@mail.com',
};

type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductList = Product[];

const products: ProductList = [
  { id: 1, title: 'Headphones', price: 99.99 },
  { id: 2, title: 'Keyboard', price: 29.99 },
  { id: 3, title: 'Monitor', price: 149.99 },
];

type Admin = User & { role: 'admin' };

// INTERFACES

interface User2 {
  name: string;
  email: string;
}

// const user2: User2 = { name: 'Victoria', email: 'victoria@mail.com' };

interface User2 {
  age: number;
}

// type User = {age: string}

interface Admin2 extends User2 {
  role: 'admin';
}

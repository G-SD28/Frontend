// OPTIONAL CHAINING "?"

type User3 = {
  name: string;
  adress?: {
    street: string;
    city: string;
  };
};

// const user = { name: 'Wei' };

const user3: User3 = { name: 'Wei' };

// console.log(user3.adress.street);
// console.log(user3.adress?.street);

// NULLISH ??
const street = user3.adress?.street ?? 'Street not provided';
// console.log(street);

// UNKNOWN??

let value: unknown = 'hello';

// if (typeof value === 'string') {
//   console.log(value.toUpperCase());
// }

export {};

try {
  const res = await fetch('https://fakestoreapi.com/pr2oducts');
  const products = (await res.json()) as Products[];

  products.forEach((p) => console.log(p.title));
} catch (error) {
  if (error instanceof Error) {
    console.error('Something went wrong', error.message);
  } else {
    console.error('an unexpected error happened');
  }
}

// ANY ? => VERMEIDEN!
let a: any = 'hello';
a.toUpperCase();

let b: unknown = 'hello';

if (typeof b === 'string') {
  b.toUpperCase();
}

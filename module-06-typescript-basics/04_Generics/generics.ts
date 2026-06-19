// function identityString(value: string): string {
//   return value;
// }

// function identityNumber(value: number): number {
//   return value;
// }

// function identityBoolean(value: boolean): boolean {
//   return value;
// }

// console.log(identityString('hello'));
// console.log(identityNumber(10));
// console.log(identityBoolean(true));

function identity<T>(value: T): T {
  return value;
}

// console.log(identity('hello')); // T => string
// console.log(identity(true)); // T => boolean
// console.log(identity(10)); // T => number

// function firstString(arr: string[]): string {
//   return arr[0];
// }

// function firstNumber(arr: number[]): number {
//   return arr[0];
// }

// console.log(firstString(['Test', 'Test2', 'Test3']));
// console.log(firstNumber([1, 2, 3, 4, 5]));

function first<T>(arr: T[]): T {
  return arr[0];
}

// console.log(first(['test', 'test2', 'test3']));
// console.log(first([1, 2, 3, 4, 5]));

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Fetch failed');

  return res.json();
}

type Post = { id: number; title: string; body: string };
type User = { id: number; name: string; email: string };
type Product = { id: number; title: string; price: number };

async function main() {
  const posts = await fetchData<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  console.log(first(posts));

  const users = await fetchData<User[]>(
    'https://jsonplaceholder.typicode.com/users/',
  );

  console.log(first(users));

  const products = await fetchData<Product[]>(
    'https://fakestoreapi.com/products',
  );

  console.log(first(products));
}

main();

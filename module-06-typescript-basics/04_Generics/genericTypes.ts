type Box<T> = {
  value: T;
};

// type stringBox = {
//   value: string;
// };

// type numberBox = {
//   value: number;
// };

// type booleanBox = {
//   value: boolean;
// };

const stringBox: Box<string> = { value: 'Hello' };
const numberBox: Box<number> = { value: 10 };
const booleanBox: Box<boolean> = { value: true };

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type Post2 = { id: number; title: string; body: string };
type User2 = { id: number; name: string; email: string };

const postResponse: ApiResponse<Post2> = {
  success: true,
  data: { id: 1, title: 'Hello TS', body: 'Generics' },
};

const userResponse: ApiResponse<User2[]> = {
  success: true,
  data: [{ id: 1, name: 'Wei', email: 'wei@example.com' }],
};

// CONSTRATINTS

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

// console.log(getLength('hello'));
// console.log(getLength([1, 2, 3, 4]));

// DEFAULT GENERIC TYPES

type ApiResponse2<T = string> = {
  status: number;
  data: T;
};

const textResponse: ApiResponse2 = {
  status: 200,
  data: 'operation succesfull',
};

const userResponse2: ApiResponse2<User2> = {
  status: 200,
  data: { id: 1, name: 'someone', email: 'something@mail.com' },
};

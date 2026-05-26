// # Konstante für den localStorage-Schlüssel, um Tippfehler zu vermeiden
export const LOCALSTORAGE_TASKS = 'tasks';

export function add(a, b) {
  return a + b;
}

export default function writeToLocalStorage(key, data) {
  console.log('Writing to LocalStorage');
}

// export { LOCALSTORAGE_TASKS, add };

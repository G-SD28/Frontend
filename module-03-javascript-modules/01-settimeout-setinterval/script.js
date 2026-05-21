// # Set Timeout
// setTimeout(() => {
//   console.log('Test');
// }, 2000);

const callbackFunc = () => {
  console.log('Hallo');
};

const milliseconds = 2000;

setTimeout(callbackFunc, milliseconds);

// setTimeout(() => {
//   console.log('Hello again');
//   setTimeout(() => {
//     console.log('Hello again!!!!!');
//   }, 3000);
// }, 3000);

// setTimeout(() => {
//   console.log('Hello again');
// }, 3000);

// setTimeout(() => {
//   console.log('Hello again!!!');
// }, 4000);

// # Set Interval
const number = document.getElementById('number');

const interval = setInterval(() => {
  number.textContent = Number(number.textContent) + 1;
}, 1000);

clearTimeout();

setTimeout(() => {
  clearInterval(interval);
}, 10000);

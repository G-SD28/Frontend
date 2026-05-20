// const heading = document.querySelector('.p-4');
// const heading = document.getElementsByClassName('p-4'); // HTMLCollection - LIVE
// const headingByClass = Array.from(document.getElementsByClassName('p-4')); // direkt in Array abspeichern
const heading = document.querySelectorAll('.p-4');

const button = document.querySelector('button');

console.log(heading);

for (const singleHeading of heading) {
  if (singleHeading.textContent !== 'This is a heading two') {
    continue;
  }
  console.log(singleHeading.textContent);
}

heading.forEach((singleHeading) => {
  console.log(singleHeading.textContent);
  singleHeading.classList.add('text-green-500');
});

for (let index = 0; index < heading.length; index++) {
  const singleHeading = heading[index];
  console.log(singleHeading.textContent);
  singleHeading.classList.add('text-red-500');
}

heading[0].setAttribute('class', 'bg-red-500'); // h1.bg-red-500

heading[0].classList.add('m-4'); // ERROR - Wo ist heading mit p-4?

button.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

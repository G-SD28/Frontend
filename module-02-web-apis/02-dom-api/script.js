// console.log(document);
// * Einzelne Elemente holen
const subHeading = document.getElementById('sub-heading');
console.log('getElemetById:', subHeading);

// Query Selector
const subHeadingUsingQS = document.querySelector('#sub-heading');
console.log('querySelector:', subHeadingUsingQS);

const firstParaUsingQS = document.querySelector('.para');
console.log('querySelector:', firstParaUsingQS);

const paraContainer = document.querySelector('.para-container');

// const changeColorBtn = document.getElementById('change-color-btn');
const changeColorBtn = document.querySelector('#change-color-btn');

// * Mehrere Elemente holen
const paras = document.getElementsByClassName('para');
console.log('getElementsByClassName:', paras);
// console.log(paras[1]);

// Query Selectors
const parasUsingQS = document.querySelectorAll('.para');
console.log('querySelectorAll:', parasUsingQS);

// const parasByTagName = document.getElementsByTagName('p');
// console.log('getElementsByTagName:', parasByTagName);

// * Erstellen von Elementen
const createPara = (text) => {
  const newPara = document.createElement('p');
  newPara.textContent = text;
  newPara.setAttribute('class', 'para');
  // newPara.classList.add('para');
  paraContainer.appendChild(newPara);
  // paraContainer.prepend(newPara);
};

createPara('<b>JS created this para</b>');
createPara('JS created this para again');

// Sicher:
// Element.textContent = userInput
// Unsicher (nur bei user input):
// Element.innerHTML = userInput

// const htmlExample = document.createElement('div');
// htmlExample.innerHTML = '<strong>Hello</strong> World';
// paraContainer.appendChild(htmlExample);

// * innerHTML example
const name = 'Ada';

const htmlStuff = `
  <h3 class="text-lg font-bold" >Hello ${name}</h3>
  <p class="italic">Welcome to this side.</p>
`;

subHeading.insertAdjacentHTML('beforebegin', htmlStuff);

// * Edit Elements
subHeading.innerText = 'JavaScript ist super cool!';
subHeading.style.color = 'red';
// subHeading.classList.add('m-2', 'bg-blue-500');
// subHeading.classList.remove('m-2');

// Ueber eine HTMLCollection iterieren
for (let index = 0; index < paras.length; index++) {
  console.log(paras[index]);
}

// In ein Array umwandeln
const parasArray = [...paras];
// const parasArray = Array.from(paras);
// console.log(parasArray);
parasArray.forEach((i) => {
  console.log(i);
});

// # Event Listener
const handleClick = () => {
  const newColor = subHeading.style.color === 'blue' ? 'red' : 'blue';
  console.log(newColor);
  subHeading.style.color = newColor;
};
// handleClick, handleSubmit, onSubmit, onClick
changeColorBtn.addEventListener('click', handleClick);

window.addEventListener('load', () => {
  // console.log(chicken);
  console.log('Page has been loaded');
});

// # Forms
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
  const newParagraph = event.target['new-paragraph'].value.trim();

  // if (newParagraph === '') {
  if (!newParagraph) {
    alert('Please enter a text');
    return;
  }

  if (newParagraph.length < 3) {
    alert('Text must be at least 3 char long');
    return;
  }

  if (newParagraph.length > 100) {
    alert('Text must be at less than 100 3 char');
    return;
  }

  if (newParagraph.includes('<script>')) {
    alert('Invalid input detected');
    return;
  }

  createPara(newParagraph);

  // event.target['new-paragraph'].value = '';
  form.reset();

  console.log('Form has submitted');
});

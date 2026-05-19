// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

// Select the buttons and the ul element
const addBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const logBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

const taskArray = [];

// Attach event to add a new li to the ul
addBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  const randomTask = tasks[randomIndex];

  const li = document.createElement('li');
  li.textContent = randomTask;

  itemList.append(li);
  li.scrollIntoView({ behavior: 'smooth' });
  taskArray.push(li.textContent);
});

// Attach event to display an alert
function handleClickAlert() {
  if (taskArray.length > 0) {
    alert(`Warnung: ${taskArray.join(', ')}`);
  } else {
    alert('Keine To-Dos');
  }
}

alertBtn.addEventListener('click', handleClickAlert);

// Attach event to output a message to the console
logBtn.addEventListener('click', () => {
  console.log('Hehe');
});
// logBtn.onclick = () => console.log("Hehe");

// Discussion: addEventListener vs onEvent
console.log(`Discussion:
1. addEventListener:
   - Allows multiple event listeners of the same type to be added to an element.
   - Syntax: element.addEventListener('event', callback);
   - More flexible, can specify options like 'capture', 'once', and 'passive'.
   
2. onEvent properties:
   - Only one event handler can be assigned to an event property at a time.
   - Syntax: element.onevent = callback;
   - Simpler, but less flexible as it overrides any existing event handlers of the same type on the element.
`);

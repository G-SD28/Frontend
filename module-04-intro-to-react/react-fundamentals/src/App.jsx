import Card from './components/Card';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  // react Hooks

  // JS
  const name = 'Sebastian';

  const add = (num1, num2) => {
    return num1 + num2;
  };

  const students = ['Sebastian', 'Nikita', 'Mira', 'Victoria', 'Marinel', 'Philipp', 'Jamal'];
  function handleDelete() {}

  // JSX
  return (
    <>
      <NavBar
        title='React Fundamentals'
        user='Morle'
        // admin={true}
        // age={31}
        // students={students}
        // function={add}
        // onClick={handleDelete}
      />
      <NavBar title='Dashboard' user='Arne' />
      <NavBar title='Katzenfutter' user='Renke' />
      <h1>Hello, {name.toLocaleUpperCase()}</h1>
      <h2>Sum of 4 and 5 is: {add(4, 5)}</h2>
      <h2 className='whitespace-pre-line'>{students.join('\n')}</h2>
      <Card>
        <h2>Hello!</h2>
        <p>This test is inside the card.</p>
      </Card>
      <Footer />
    </>
  );
}

export default App;

// # Props = Properties

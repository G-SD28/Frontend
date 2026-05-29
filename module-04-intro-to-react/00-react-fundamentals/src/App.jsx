import Card from './components/Card';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import StudentList from './components/StudentList';

const App = () => {
  // * react Hooks

  // * JS
  const name = 'Sebastian';

  const add = (num1, num2) => {
    return num1 + num2;
  };

  /**
   * Represents a book.
   *
   * @class
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   */
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target['user-email'].value);
  }

  // * JSX
  return (
    <>
      {/* * Props = Properties */}
      {/* <NavBar
        title='React Fundamentals'
        user='Morle'
        // admin={true}
        // age={31}
        // students={students}
        // function={add}
        onClick={handleDelete}
      /> */}
      {/* <NavBar title='Dashboard' user='Arne' /> */}
      <NavBar title='Katzenfutter' user='Renke' />
      <h1>Hello, {name.toLocaleUpperCase()}</h1>
      {/* <h2>Sum of 4 and 5 is: {add(4, 5)}</h2> */}
      {/* <h2 className='whitespace-pre-line'>{students.join('\n')}</h2> */}
      {/* <Card> */}
      {/* <h2>Hello!</h2> */}
      {/* <p>This test is inside the card.</p> */}
      {/* </Card> */}
      <StudentList />
      <button
        onClick={() => {
          alert('Button was clicked');
        }}
        className='m-7 cursor-grab rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      >
        Alert
      </button>

      {/* <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target['user-email'].value);
          }}
          > */}
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='email' name='user-email' className='border-2' />
        <button className='m-7 cursor-crosshair rounded bg-gray-700 px-4 py-2 font-bold text-white'>
          Submit email
        </button>
      </form>
      <Footer />
    </>
  );
};

export default App;

// 1. das Element aus dem DOM holen
// 2. `.addEventListener("click", () => {})`   -- alternative: `onclick`
// 3. Callback Funktion definieren

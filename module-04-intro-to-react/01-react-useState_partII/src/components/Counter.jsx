import { useState } from 'react';

// {
// darkTheme: true
// text : "Hello"
// }

const Counter = ({ darkTheme, text }) => {
  // const darkTheme = props.darkTheme;
  // const text = props.text;

  const [counter, setCounter] = useState(0);
  // 1. Ändert den Wert (counter)
  // 2. sagt der React componente zu re-render mit dem neuen Wert

  const handleClick = (e) => {
    console.log(e);
    const operation = e.target.value;

    if (operation === '+') {
      setCounter((prev) => prev + 1);
    } else if (operation === '-') {
      setCounter((prev) => (prev <= 0 ? 0 : prev - 1));
    }
  };

  // const increaseCounter = () => {
  //   setCounter((prev) => prev + 1);
  // };

  // const decreaseCounter = () => {
  //   setCounter((prev) => prev - 1);
  // };

  const textcolor = darkTheme ? 'text-white' : 'text-black';

  return (
    <>
      <div
        className={`flex w-36 justify-between border-2 ${darkTheme ? 'border-gray-100' : 'border-black'}`}
      >
        <button
          value='+'
          onClick={handleClick}
          className={'cursor-pointer bg-green-400 p-4 font-bold ' + textcolor}
        >
          +
        </button>
        <span className={`p-4 ${textcolor}`}>{counter}</span>
        <button
          disabled={counter <= 0}
          value='-'
          onClick={handleClick}
          className={`p-4 font-bold ${counter === 0 ? 'bg-gray-400' : 'cursor-pointer bg-red-400'} ${textcolor}`}
        >
          -
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
        className='mt-1 cursor-pointer bg-gray-300 p-2'
      >
        Reset
      </button>
    </>
  );
};
export default Counter;

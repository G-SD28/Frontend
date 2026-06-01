import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  // 1. Ändert den Wert (counter)
  // 2. sagt der React componente zu re-render mit dem neuen Wert

  const handleClick = async () => {
    // * Direct State Update - Wenn der vorherige Wert einfach überschrieben werden soll
    setCounter(counter + 1); // 1
    // * Functional State Update - Wenn der vorherige Wert relevant ist
    setCounter((previousValue) => previousValue + 1); // 1 + 1 = 1
  };

  return (
    <>
      <div className='flex w-36 justify-between border-2'>
        <button onClick={handleClick} className='cursor-pointer bg-green-400 p-4 font-bold'>
          +
        </button>
        <span className='p-4'>{counter}</span>
        <button onClick={handleClick} className='cursor-pointer bg-red-400 p-4 font-bold'>
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

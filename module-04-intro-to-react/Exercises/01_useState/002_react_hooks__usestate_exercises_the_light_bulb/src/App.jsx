import { useState } from 'react';

import LightBulb from './components/LightBulb';

import './index.css';

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [counter, setCounter] = useState(0);

  function handleClick() {
    if (counter < 10) {
      setIsOn((i) => !i);
    }
    if (isOn) {
      setCounter((c) => c + 1);
    }
    // setCounter((c) => (isOn ? c + 1 : c));
  }

  console.log(counter);

  return (
    <>
      <button disabled={counter >= 10} onClick={handleClick}>
        {isOn ? 'Switch off' : 'Switch on'}
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <LightBulb isOn={isOn} />
    </>
  );
};

export default App;

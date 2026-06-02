import { useState } from 'react';

import Counter from './components/Counter';

import './index.css';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div>
      <h1>React: useState</h1>
      <div style={{ display: 'flex' }}>
        <Counter state={count1} setter={setCount1} />
        <Counter state={count2} setter={setCount2} />
        <Counter state={count3} setter={setCount3} />
        {/* { state:  0, setter: setCount() } */}
      </div>
    </div>
  );
};

export default App;

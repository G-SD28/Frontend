import { useEffect } from 'react';
import { useState } from 'react';

function Effect() {
  const [todo, setTodo] = useState(null);
  const [count, setCount] = useState(0);
  const [myObj, setMyObj] = useState({ test: 42 });

  // * useEffect(callbackFunction, dependencyArray);

  // * [] - leeres dependency Array = nur beim ersten render / mount
  // * [count] - Array mit Dependency
  // * - Kein Array = wird bei jedem Render ausgeführt - das selbe wie kein useEffect zu verwenden

  useEffect(() => {
    console.log('Effect wird beim ersten Render ausgeführt');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  // primitive Datentypen, numbers, integer, null, etc.
  useEffect(() => {
    console.log(count);
    console.log(`Wird immer ausgeführt, nachdem sich "count" geändert hat`);
  }, [count]);

  // Objekte - Reference Object Type - [], {}, etc.
  useEffect(() => {
    console.log(myObj);
    console.log(`Wird immer ausgeführt, nachdem sich "myObj" geändert hat`);
  }, [myObj]);

  useEffect(() => {
    const handleRezise = (e) => {
      console.log(e.target.innerWidth);
    };
    window.addEventListener('resize', handleRezise);

    // * Cleanup - wird ausgeführt, sobald die Component umounted wird
    return () => {
      window.removeEventListener('resize', handleRezise);
    };
  }, []);

  return (
    <div>
      {todo && <p>{todo.title}</p>}
      <button onClick={() => setCount((c) => c + 1)}>Zähler: {count}</button>
    </div>
  );
}

export default Effect;

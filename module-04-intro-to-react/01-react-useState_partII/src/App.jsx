import { useState } from 'react';

import Counter from './components/Counter';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    // * Direct state update - vorheriger Wert ist nicht relevant
    // setDarkTheme(!darkTheme); // Kann zu Fehlern führen
    // * Functional state update - vorheriger Wert ist relevant für meinen neuen Wert
    setDarkTheme((prev) => !prev);
  };

  const labelTextColor = darkTheme ? 'bg-slate-800' : 'bg-white';
  const styles = darkTheme ? 'text-white' : 'text-black';

  return (
    <main className={`min-h-screen ${labelTextColor}`}>
      <label className={styles}>
        <input type='checkbox' onChange={toggleTheme} />
        Dark mode
      </label>
      <Counter darkTheme={darkTheme} text='Hello' />
      <Counter darkTheme={darkTheme} text='Hello' />
      <Counter darkTheme={darkTheme} text='Hello' />
    </main>
  );
};
export default App;

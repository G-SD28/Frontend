import { use } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {
  const { theme } = use(ThemeContext);

  return (
    <main
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      <p>Lorem ipsum dolor sit amet.</p>
    </main>
  );
};

export default Content;

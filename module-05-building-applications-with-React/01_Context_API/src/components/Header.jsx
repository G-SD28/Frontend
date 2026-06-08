import { useTheme } from '../context/ThemeContext';

const Header = () => {
  //   const { theme, toggleTheme } = use(ThemeContext);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      <p>Aktuelles Theme: {theme} </p>
      <button onClick={toggleTheme}>Switch</button>
    </div>
  );
};

export default Header;

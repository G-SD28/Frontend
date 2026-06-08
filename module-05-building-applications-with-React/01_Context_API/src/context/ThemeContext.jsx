import { createContext, use, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = use(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export const ThemeProdiver = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // prettier-ignore
    <ThemeContext value={{theme, toggleTheme}}>
        {children}
    </ThemeContext>
  );
};

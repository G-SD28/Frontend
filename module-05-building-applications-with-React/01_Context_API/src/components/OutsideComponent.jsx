import { useTheme } from '../context/ThemeContext';

const OutsideComponent = () => {
  const { theme } = useTheme();
  return (
    <div>
      <p>Theme: {theme}</p>
    </div>
  );
};

export default OutsideComponent;

import Content from './components/Content';
import GrandChildComponent from './components/GrandChildComponent';
import Header from './components/Header';
import Layout from './components/Layout';
import OutsideComponent from './components/OutsideComponent';
import { ThemeProdiver } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const user = { name: 'Jamal' };

  return (
    <div style={{ border: '2px solid #ccc', padding: '16px' }}>
      <h2>HOME</h2>
      {/* <Layout user={user} /> */}

      {/* <UserContext value={user}>
        <GrandChildComponent />
      </UserContext> */}

      <ThemeProdiver>
        <Header />
        <Content />
      </ThemeProdiver>
      {/* <OutsideComponent /> => Fehler! */}
    </div>
  );
}

export default App;

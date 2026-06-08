import { use } from 'react';
import { UserContext } from '../context/UserContext';
import Test from './Test';

const GrandChildComponent = () => {
  const user = use(UserContext);

  return (
    <div style={{ border: '2px solid #ccc', padding: '16px' }}>
      <p>GrandChild</p>
      <p>Hello, {user.name}</p>

      <Test />
    </div>
  );
};

export default GrandChildComponent;

import { use } from 'react';
import { UserContext } from '../context/UserContext';

const Test = () => {
  const user = use(UserContext);

  return (
    <div>
      <p>TEST</p>
      <p>Hello, {user.name}</p>
    </div>
  );
};

export default Test;

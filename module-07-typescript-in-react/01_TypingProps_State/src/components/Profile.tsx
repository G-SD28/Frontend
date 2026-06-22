import { useState } from 'react';

const Profile = () => {
  //   const [count, setCount] = useState(0); // inferred: number
  //   const [name, setName] = useState('Wei'); // inferred: string
  //   const [isOpen, setIsOpen] = useState(false); // inferred: boolean

  //   const [user, setUser] = useState(null);
  const [user, setUser] = useState<string | null>(null);

  return (
    <div>
      <button onClick={() => setUser('Wei')}>set user</button>
      <p>{user}</p>
    </div>
  );
};

export default Profile;

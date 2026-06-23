import { useEffect, useState } from 'react';

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

type User = { id: number; name: string };

const TitleUpdater = () => {
  //   const [count, setCount] = useState(0); // inferred as number
  //   const [name, setName] = useState('Victoria'); // inferred as string
  //   const [open, setOpen] = useState(false); // inferred as boolean

  //   const [error, setError] = useState<string | null>(null);
  //   const [posts, setPosts] = useState<Post[]>([]);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      document.title = `Welcome, ${user.name}`;
    } else {
      document.title = '';
    }
  }, [user]);

  return (
    <>
      <p>{user ? user.name : 'not logged in'}</p>
      <button onClick={() => setUser({ id: 1, name: 'Jamal' })}>Login</button>
      <button onClick={() => setUser(null)}>Logout</button>
    </>
  );
};

export default TitleUpdater;

import { Link } from 'react-router';
import { users } from '../data/users';
import Navbar from '../components/Navbar';

const Users = () => {
  return (
    <div>
      <Navbar />
      <h2>Users List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.slug}>
            <Link to={`/users/${user.slug}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

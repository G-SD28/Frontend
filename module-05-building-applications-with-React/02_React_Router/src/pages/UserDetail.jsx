import { useNavigate, useParams } from 'react-router';
import { users } from '../data/users';

const UserDetail = () => {
  const { slug } = useParams();
  console.log(slug);

  const navigate = useNavigate();

  const user = users.find((u) => u.slug === slug);

  return (
    <div>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>{user.role}</p>
          <p>{user.bio}</p>
        </>
      ) : (
        <p>User not found: {slug}</p>
      )}

      <button onClick={() => navigate(-1)}>GO BACK</button>
    </div>
  );
};

export default UserDetail;

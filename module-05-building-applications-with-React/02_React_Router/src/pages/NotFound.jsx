import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>404 Page not found</h2>
      <button onClick={() => navigate(-1)}>GO BACK</button>
    </div>
  );
};

export default NotFound;

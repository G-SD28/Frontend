import { useState } from 'react';
import { Navigate } from 'react-router';

const Login = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  console.log(loggedIn);

  if (loggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <h2>LOGIN</h2>
      <button onClick={() => setIsLoggedIn(true)}>LOGIN</button>
    </>
  );
};

export default Login;

import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    alert('please log in as admin to access this page');
    return <Navigate to='/login' />;
  }
  return children;
};

export default ProtectedRoute;

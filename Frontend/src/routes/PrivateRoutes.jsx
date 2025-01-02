import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user?.authorities?.[0]?.authority !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;

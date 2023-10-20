import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'redux/auth/selectors';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isAuth = useSelector(authSelector);
  return !isAuth ? component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
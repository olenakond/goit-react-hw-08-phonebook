import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';

const Navigation = () => {
  const isAuth = useSelector(authSelector);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuth && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;

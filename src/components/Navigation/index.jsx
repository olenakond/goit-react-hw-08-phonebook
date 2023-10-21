import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';
import { List } from './Navigation.styled';

const Navigation = () => {
  const isAuth = useSelector(authSelector);
  return (
    <nav>
      <List>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{isAuth && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </List>
    </nav>
  );
};

export default Navigation;

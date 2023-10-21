import { NavLink } from 'react-router-dom';
import { List } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <nav>
      <List>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </List>
    </nav>
  );
};

export default AuthNav;

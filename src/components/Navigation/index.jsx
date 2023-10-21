import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';
import { List, StyledLink } from './Navigation.styled';

const Navigation = () => {
  const isAuth = useSelector(authSelector);
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>{isAuth && <StyledLink to="/contacts">Contacts</StyledLink>}</li>
      </List>
    </nav>
  );
};

export default Navigation;

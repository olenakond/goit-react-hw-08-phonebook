import { List, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="/register">Registration</StyledLink>
        </li>
        <li>
          <StyledLink to="/login">Log in</StyledLink>
        </li>
      </List>
    </nav>
  );
};

export default AuthNav;

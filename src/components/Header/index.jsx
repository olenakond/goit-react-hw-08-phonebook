import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { authSelector } from 'redux/auth/selectors';
import { Container } from './Header.styled';

const Header = () => {
  const isAuth = useSelector(authSelector);
  return (
    <Container>
      <Navigation />
      {!isAuth ? <AuthNav /> : <UserMenu />}
    </Container>
  );
};

export default Header;

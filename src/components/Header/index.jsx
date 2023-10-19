import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';

const Header = () => {
  const isAuth = useSelector(authSelector);
  
  return (
    <header>
      <Navigation />
      {!isAuth ?  <AuthNav/> : <UserMenu/>}
    </header>
  );
};

export default Header;

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { userNameSelector, userEmailSelector } from 'redux/auth/selectors';
import { Container } from './UserMenu.styled';

const UserMenu = () => {
  const userName = useSelector(userNameSelector);
  const userEmail = useSelector(userEmailSelector);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <Container>
      <p>Welcome {userName}</p>
      <p>{userEmail}</p>
      <button type="submit" onClick={handleClick}>
        Log out
      </button>
    </Container>
  );
};

export default UserMenu;

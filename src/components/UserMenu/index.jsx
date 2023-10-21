import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { userNameSelector, userEmailSelector } from 'redux/auth/selectors';
import { Container } from './UserMenu.styled';
import { Button, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

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
      <Typography variant="body1" component="p" mt={'auto'} mb={'auto'} sx={{ color: blueGrey[900]}}>Welcome {userName}</Typography>
      <Typography variant="body1" component="p" mt={'auto'} mb={'auto'} sx={{ color: blueGrey[700]}}>{userEmail}</Typography>
      <Button variant="outlined" size="small" type="submit" onClick={handleClick}>
        Log out
      </Button>
    </Container>
  );
};

export default UserMenu;

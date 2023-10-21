import { useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import { Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <main>
      <Typography variant="h5" component="h1" sx={{ textAlign: 'center', mt: 3, color: blueGrey[900]}}>Log in</Typography>
      <LoginForm />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Please, try again.</p>}
    </main>
  );
};

export default LoginPage;

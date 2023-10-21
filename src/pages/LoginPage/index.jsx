import { useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import { LinearProgress, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <main>
      {isLoading && <LinearProgress />}
      <Typography
        variant="h5"
        component="h1"
        sx={{ textAlign: 'center', mt: 3, color: blueGrey[900] }}
      >
        Log in
      </Typography>
      <LoginForm />
      {error && (
        <Typography
          variant="body2"
          component="p"
          sx={{ textAlign: 'center', mt: 3, color: blueGrey[900] }}
        >
          Something went wrong. Please, try again.
        </Typography>
      )}
    </main>
  );
};

export default LoginPage;

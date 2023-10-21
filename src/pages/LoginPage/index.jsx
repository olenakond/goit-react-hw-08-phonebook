import { useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1> Login</h1>
      <LoginForm />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Please, try again.</p>}
    </div>
  );
};

export default LoginPage;

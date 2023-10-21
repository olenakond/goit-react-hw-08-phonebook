import { useSelector } from 'react-redux';
import RegisterForm from 'components/RegisterForm';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

const RegisterPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1> Registration</h1>
      <RegisterForm />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Please, try again.</p>}
    </div>
  );
};

export default RegisterPage;

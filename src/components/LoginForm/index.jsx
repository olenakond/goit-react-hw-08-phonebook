import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={emailInputId}>Email</label>
      <input type="email" id={emailInputId} name="email" required />
      <label htmlFor={passwordInputId}>Password</label>
      <input type="password" id={passwordInputId} name="password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

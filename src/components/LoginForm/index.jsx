import { nanoid } from 'nanoid';

const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  return (
    <form>
      <label htmlFor={emailInputId}>Email</label>
      <input type="email" id={emailInputId} required />
      <label htmlFor={passwordInputId}>Password</label>
      <input type="password" id={passwordInputId} required />
    </form>
  );
};

export default LoginForm;

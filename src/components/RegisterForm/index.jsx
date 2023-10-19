import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const userInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
dispatch(register({
  name: e.currentTarget.elements.name.value,
  email: e.currentTarget.elements.email.value,
  password: e.currentTarget.elements.password.value,
}));
    console.log(e.currentTarget.elements.name.value);
    console.log(e.currentTarget.elements.email.value);
    console.log(e.currentTarget.elements.password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={userInputId}>Name</label>
      <input type="text" name="name" id={userInputId} required />
      <label htmlFor={emailInputId}>Email</label>
      <input type="email" name="email" id={emailInputId} required />
      <label htmlFor={passwordInputId}>Password</label>
      <input type="password" name="password" id={passwordInputId} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

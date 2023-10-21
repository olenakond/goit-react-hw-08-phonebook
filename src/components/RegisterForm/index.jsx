import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const userInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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

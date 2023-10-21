import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/operations';
import { Container } from './RegisterForm.styled';
import { Button, InputLabel, TextField } from '@mui/material';

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
    <Container>
      <form onSubmit={handleSubmit}>
      <InputLabel htmlFor={userInputId}>Name</InputLabel>
      <TextField
          variant="outlined"
          fullWidth type="text" name="name" id={userInputId} required />
      <InputLabel sx={{ mt: 2 }} htmlFor={emailInputId}>Email</InputLabel>
      <TextField
          variant="outlined"
          fullWidth type="email" name="email" id={emailInputId} required />
      <InputLabel sx={{ mt: 2 }} htmlFor={passwordInputId}>Password</InputLabel>
      <TextField
          variant="outlined"
          fullWidth type="password" name="password" id={passwordInputId} required />
      <Button variant="outlined" sx={{ mt: 2 }} type="submit">Register</Button>
    </form>
    </Container>
  );
};

export default RegisterForm;

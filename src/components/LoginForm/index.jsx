import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/auth/operations';
import { InputLabel, TextField, Button } from '@mui/material';
import { Container } from './LoginForm.styled';

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
    <Container>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor={emailInputId}>Email</InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          type="email"
          id={emailInputId}
          name="email"
          required
        />
        <InputLabel sx={{ mt: 2 }} htmlFor={passwordInputId}>
          Password
        </InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          type="password"
          id={passwordInputId}
          name="password"
          required
        />
        <Button variant="outlined" sx={{ mt: 2 }} type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;

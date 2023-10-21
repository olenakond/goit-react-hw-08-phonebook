import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import {
  Container,
  ContactContainer,
  ListContainer,
} from './ContactsPage.styled';
import { LinearProgress, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      {isLoading && <LinearProgress />}
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: 'center', mt: 3, color: blueGrey[900] }}
      >
        Phone book
      </Typography>
      <Container>
        <ContactContainer>
          <ContactForm />
          {error && (
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: 'center', mt: 5, color: blueGrey[900] }}
            >
              Something went wrong. Please, try again.
            </Typography>
          )}
        </ContactContainer>
        <ListContainer>
          <Filter />
          <ContactList />
        </ListContainer>
      </Container>
    </main>
  );
};

export default ContactsPage;

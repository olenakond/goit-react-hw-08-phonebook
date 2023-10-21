import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/filter/selectors';
import Contact from '../Contact';
import { List } from './ContactList.styled';
import { Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const ContactList = () => {
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <>
      {contactsList.length > 0 && (
        <>
          <Typography
            variant="body1"
            component="h2"
            sx={{ mt: 2, color: blueGrey[800] }}
          >
            Contacts
          </Typography>
          <List>
            {contactsList.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </List>
        </>
      )}
      {contactsList.length === 0 && (
        <Typography
          variant="body1"
          component="h2"
          sx={{ mt: 2, color: blueGrey[800] }}
        >
          Create your contacts...
        </Typography>
      )}
    </>
  );
};

export default ContactList;

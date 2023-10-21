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
    <Typography variant="body1" component="h2" sx={{  mt: 2, color: blueGrey[800]}}>Contacts</Typography>
      {contactsList && (
        <List>
          {contactsList.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;

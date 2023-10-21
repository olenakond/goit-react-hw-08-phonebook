import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Element, Button, Name } from './Contact.styled';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (

  //   <ListItem
  //   secondaryAction={
  //     <IconButton edge="end" aria-label="delete">
  //       <DeleteIcon />
  //     </IconButton>
  //   }
  // >
  //   <ListItemAvatar>
  //     <Avatar>

  //     </Avatar>
  //   </ListItemAvatar>
  //   <ListItemText
  //     primary="Single-line item"
  //     secondary={'Secondary text'}
  //   />
  // </ListItem>
    <Element>
      <Name>
        {contact.name}: {contact.number}
      </Name>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Element>
  );
};

export default Contact;



  
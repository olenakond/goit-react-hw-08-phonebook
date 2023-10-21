import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { blueGrey } from '@mui/material/colors';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            type="button"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blueGrey[500] }}>
            {contact.name.at(0).toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={contact.name} secondary={contact.number} />
      </ListItem>
    </>
  );
};

export default Contact;

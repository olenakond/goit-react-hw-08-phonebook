import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { InputLabel, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const createContact = dataFromForm => {
    const isContactExist = contacts.find(
      contact => contact.name === dataFromForm.name
    );
    if (isContactExist) {
      return alert(`${dataFromForm.name} is already in contacts.`);
    }
    dispatch(addContact(dataFromForm));
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel htmlFor={nameInputId}>Name</InputLabel>
      <TextField
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={name}
        id={nameInputId}
        type="text"
        name="name"
        pattern="[A-Za-z]{1,32}"
        placeholder="Name"
        title="Name may contain only letters. For example Adrian, Jacob."
        required
      />
      <InputLabel sx={{ mt: 2 }} htmlFor={numberInputId}>
        Number
      </InputLabel>
      <TextField
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={number}
        id={numberInputId}
        type="tel"
        name="number"
        pattern="[0-9]{1,32}"
        placeholder="123456789"
        title="Phone number must be digits"
        required
      />
      <Button variant="outlined" sx={{ mt: 2 }} type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;

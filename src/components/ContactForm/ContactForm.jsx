import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
import MUI from 'components/MUI';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (contacts.find(el => el.name === name)) {
      Notiflix.Notify.warning('Name "' + name + '" is already in contacts');
      e.target.reset();
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <MUI.Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <MUI.Grid container spacing={2}>
        <MUI.Grid item xs={12}>
          <MUI.TextField
            autoComplete="name"
            id="name"
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            fullWidth
          />
        </MUI.Grid>
        <MUI.Grid item xs={12}>
          <MUI.TextField
            autoComplete="phone"
            id="tel"
            label="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            fullWidth
          />
        </MUI.Grid>
      </MUI.Grid>
      <MUI.Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Add contact
      </MUI.Button>
    </MUI.Box>
  );
};

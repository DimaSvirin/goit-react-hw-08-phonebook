import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';

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
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name </Label>
      <Input
        autoComplete='email'
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label htmlFor="tel">Number </Label>
      <Input
        autoComplete='new-password'
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
import { ContactStyle } from './ContactList.styled';
import { ContactItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts  } from 'redux/contacts/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactStyle>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem
          id={id}
          key={id}
          number={number}
          name={name}
        />
      ))}
    </ContactStyle>
  );
}

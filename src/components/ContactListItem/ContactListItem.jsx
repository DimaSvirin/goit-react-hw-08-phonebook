import PropTypes from 'prop-types';
import { Contact, Name } from "./ContactListItem.styled";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import MUI from 'components/MUI';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteRec = () => {
    dispatch(deleteContact(id));
  } 
  return (
    <Contact>
      <Name>
        {name}: {number}
      </Name>
      
      <MUI.Button
        startIcon={<DeleteIcon />}
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        onClick={deleteRec}
      >
        Delete
      </MUI.Button>
    </Contact>
    
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
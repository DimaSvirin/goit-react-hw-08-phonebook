import { SearchWrap, SearchLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import MUI from 'components/MUI';


export const Filter = () => {
  const dispatch = useDispatch();
  const handlerChangeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()))
  }
  return (
    <SearchWrap>
      <SearchLabel htmlFor="filter">Find contacts by name:</SearchLabel>
      <MUI.TextField
          fullWidth
          id="filter"
          type="text"
          name="filter"
          label='Find contacts'
          onChange={handlerChangeFilter}
        />
    </SearchWrap>
  );
}



import { SearchWrap, Input, SearchLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';



export const Filter = () => {
  const dispatch = useDispatch();
  const handlerChangeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()))
  }
  return (
    <SearchWrap>
      <SearchLabel htmlFor="filter">Find contacts by name:</SearchLabel>
      <Input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerChangeFilter}
      />
    </SearchWrap>
  );
}



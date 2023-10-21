import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/filter/slice';
import { InputLabel, TextField } from '@mui/material';

const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div>
      <InputLabel htmlFor={filterInputId}>Find contacts by name</InputLabel>
      <TextField
          variant="outlined"
          fullWidth onChange={handleFilter} id={filterInputId} type="text" />
    </div>
  );
};

export default Filter;

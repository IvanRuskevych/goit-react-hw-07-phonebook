import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';

import { getFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filtersSlice';

import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(setFilterValue(e.target.value));
  };
  const filter = useSelector(getFilter);

  return (
    <label className={css.filter}>
      Find contacts by name
      <TextField
        id="standard-basic"
        label="Print name ..."
        variant="standard"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
}

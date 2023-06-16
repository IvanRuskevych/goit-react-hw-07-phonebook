// import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import css from './ContactForm.module.css';
import { addContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    dispatch(addContacts({ name, phone }));

    form.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={css.list}>
      <label>
        <TextField
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <TextField
          inputProps={{
            // inputMode: 'numeric',
            pattern:
              '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
          }}
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          type="tel"
          name="phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
}
//

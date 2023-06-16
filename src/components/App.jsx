import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section ';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Section>
  );
}

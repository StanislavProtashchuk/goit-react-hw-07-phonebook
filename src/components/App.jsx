import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

export const App = () => {
  const { status, error } = useSelector(state => state.contacts);

  return (
    <div
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   flexDirection: 'column',
      // }}
    >
      {error && alert(error)}
      {status === 'loading' && <Loader />}
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};
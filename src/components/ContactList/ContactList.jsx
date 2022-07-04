import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './ContactList.module.css';
import { fetchContacts, removeContact } from '../../redux/phoneBookOperation';

const Contacts = () => {
  const dispatch = useDispatch();
  const { entities, filter } = useSelector(state => state.contacts);
  const contacts = entities.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={s.list}>
              
              {contact.name}: {contact.phone}
              <button
                key={contact.id}
                name={contact.name}
                className={s.button}
                type="button"
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
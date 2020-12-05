import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';

function ContactsList({ contacts }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactsList;

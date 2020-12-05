import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ name, number }) {
  return (
    <li className={s.item}>
      <p className={s.name}>{name}:</p>
      <p className={s.number}>{number}</p>
      <button className={s.button}>Del</button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

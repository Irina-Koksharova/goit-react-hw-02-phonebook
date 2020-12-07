import PropTypes from 'prop-types';
// import { Component } from 'react';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

// class ContactsList extends Component {
//   render() {
//     return (
//       <ul className={s.list}>
//         {this.props.contacts.map(({ id, name, number }) => (
//           <ContactItem key={id} id={id} name={name} number={number} onDelete={this.props.onDelete} />
//         ))}
//       </ul>
//     );
//   }
// }

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;

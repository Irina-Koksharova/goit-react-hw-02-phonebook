import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactsForm.module.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeForm = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmitForm}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={this.handleChangeForm}
          autoComplete="off"
          id="name"
        ></input>
        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChangeForm}
          autoComplete="off"
          id="number"
        ></input>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;

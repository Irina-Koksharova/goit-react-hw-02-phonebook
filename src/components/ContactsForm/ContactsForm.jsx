import { Component } from 'react';
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
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmitForm}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={this.state.name}
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
          value={this.state.number}
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

export default ContactsForm;

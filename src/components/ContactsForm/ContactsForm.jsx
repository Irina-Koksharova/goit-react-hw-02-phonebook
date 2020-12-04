import { Component } from 'react';
import s from './ContactsForm.module.css';

class ContactsForm extends Component {
  state = {
    name: '',
  };

  handleChangeForm = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmitForm}>
        <label className={s.label} htmlFor="">
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChangeForm}
          autoComplete="off"
        ></input>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsForm;

import { Component } from 'react';
import shortid from 'shortid';
import Container from '../../components/Container';
import Section from '../Section/Section';
import ContactsForm from '../ContactsForm';
import ContactsList from '../ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  onHandleSubmit = ({ name, number }) => {
    console.log(name, number);
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state.contacts.length);
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactsForm onSubmit={this.onHandleSubmit} />
        </Section>

        {contacts.length > 0 && (
          <Section>
            <h2>Contacts</h2>
            <ContactsList contacts={contacts}></ContactsList>
          </Section>
        )}
      </Container>
    );
  }
}

export default App;

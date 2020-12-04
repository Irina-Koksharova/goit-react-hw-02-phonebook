import { Component } from 'react';
import Container from '../../components/Container';
import Section from '../Section/Section';
import ContactsForm from '../ContactsForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onHandleSubmitForm = contactsName => {
    console.log(contactsName);
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactsForm onSubmit={this.onHandleSubmitForm} />
        </Section>
      </Container>
    );
  }
}

export default App;

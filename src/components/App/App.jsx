import { Component } from 'react';
import Container from '../../components/Container';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <Container />;
  }
}

export default App;

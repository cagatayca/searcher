import { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';


class App extends Component {
  
  
  
  constructor(props)
  {
    super(props);
    this.addContact=this.addContact.bind(this);
  }

  state = {
    contacts: [
      {
        
        name: "Ozzy Osbourne",
        phone: "+90 555 555 55 55"
      },
      {
        
        name: "Alice Cooper",
        phone: "+90 555 555 55 54"
      },
        {
        
        name: "Lemmy Kilmister",
        phone: "+90 555 555 55 53"
      }
    ]
  }

  addContact(contact)
  {
    console.log(contact);
    const{contacts} = this.state;
    contacts.push(contact)

    this.setState(
      {
        contacts:contacts
      });
  }
  render() {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );

  }
}

export default App;

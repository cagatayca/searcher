import React, { Component } from 'react'
import Form from './Form';
import List from './List';
import propTypes from 'prop-types'
import './Contacts.css'


class Contacts extends Component {
  static propTypes =
  {
    contacts:propTypes.array.isRequired,
    addContact:propTypes.func
  }
  render() {
    return (
      <div className='card'>
        <List contacts={this.props.contacts}/>
        <Form addContact={this.props.addContact}/>
      </div>
    )
  }
}
export default Contacts;
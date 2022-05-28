import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }
  state =
    {
      name: "",
      phone: ""
    };
  onChange(e) {
    this.setState(
      {
        [e.target.name]:e.target.value
        
      })
  };
  onSubmit(event)
  {
    event.preventDefault();
      this.props.addContact(
        {
          ...this.state
        }
      );

    this.setState(
      {
        name:"",
        phone:""
      })  
    
  }


  render() {
    return (
      <div className='form'>
        <form onSubmit={this.onSubmit}>
          <input name="name" id='name' onChange={this.onChange} value={this.state.name} placeholder='What is your name ?' />
          <br />
          <input name="phone" id='phone' onChange={this.onChange} value={this.state.phone} placeholder='What is your phone number ?' />
          <button>Add</button>
        </form>
      </div>
    )
  }
}
export default Form;
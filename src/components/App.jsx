import React from 'react';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleName = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addNumber = numberData => {
    console.log('numberData', numberData);
    this.setState(prevState => {
      return {
        numberData: [...prevState.name],
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const numberData = {
      contacts: this.state.contacts,
      name: this.state.name,
      number: this.state.number,
    };
    this.addNumber(numberData);
    this.setState({
      contacts: [],
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name
          <div>
            <input
              numberData={this.numberData}
              onChange={this.handleName}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <p>Number</p>
          <div>
            <input
              onChange={this.handleName}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div>
            <button addNumber={this.addNumber}>Save</button>
          </div>
          <div>
            <h1>Contacts</h1>
            <p></p>
          </div>
        </form>
      </div>
    );
  }
}

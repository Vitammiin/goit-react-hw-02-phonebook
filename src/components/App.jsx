import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, name, number } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { name, number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  handFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filterNum = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  handleDeleteContact = contactName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== contactName
      ),
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleName}
              value={this.state.name}
              type="text"
              C
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleName}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Save</button>
        </form>
        <div>
          <h1>Contacts</h1>
          <input
            onChange={this.handleFilterChange}
            value={this.state.filter}
            type="text"
            placeholder="Search contacts"
          />
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.name}>
                {contact.name}: {contact.number}
                <button
                  style={{
                    color: 'white',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => this.handleDeleteContact(contact.name)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

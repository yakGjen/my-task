import React, {Component} from 'react';

import './Form.scss';

class Form extends Component {
  state = {
    inputValue: ''
  }

  handleInputValue = (event) => {
    this.setState({inputValue: event.target.value});
  }

  sendData = async (event) => {
    event.preventDefault();

    if (this.state.inputValue === '') {
      alert('Enter word or sentence in a text field');
      return;
    }

    const sendData = JSON.stringify(this.state);

    const data = await fetch('http://localhost:4200/main', {
      method: 'POST',
      body: sendData,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await data.json();

    this.setState({inputValue: ''});
    console.log(result);
  }

  showData = async () => {
    const data = await fetch('http://localhost:4200/main');
    const result = await data.json();

    console.log('all data:', result);
  };

  render() {
    return (
      <form className='form' onSubmit={this.sendData}>
        <input 
          type='name' 
          placeholder='Enter your request'
          className='form__input'
          onChange={this.handleInputValue}
          value={this.state.inputValue}
        />
        <button type='button' className='form__button' onClick={this.showData}>show all requests</button>
        <button type='submit' className='form__button'>send data</button>
      </form>
    );
  }
}

export default Form;

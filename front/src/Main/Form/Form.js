import React, {Component} from 'react';

import './Form.scss';

class Form extends Component {
  state = {
    inputValue: ''
  }

  handleInputValue = (event) => {
    console.log(event.target.value);
    this.setState({inputValue: event.target.value});
  }

  sendData = (event) => {
    event.preventDefault();
    this.setState({inputValue: ''});

    fetch('').then((response) => {
      console.log(response);
    });
  }

  // componentDidMount() {
  //   console.log(this.state);
  // }

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
        <button className='form__button'>send data</button>
      </form>
    );
  }
}

export default Form;
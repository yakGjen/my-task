import React, {useState} from 'react';

import './Form.scss';

const sendData = async (dataStr, e) => {
  e.preventDefault();

  if (dataStr === '') {
    alert('Enter word or sentence in a text field');
    return;
  }

  const sendData = JSON.stringify({inputValue: dataStr});

  const data = await fetch('http://localhost:4200/main', {
    method: 'POST',
    body: sendData,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const result = await data.json();

  console.log(result);
};

const showData = async () => {
  const data = await fetch('http://localhost:4200/main');
  const result = await data.json();

  console.log('all data:', result);
};

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <section>
      <h2 className='form-header'>Simple form</h2>
      <form className='form' onSubmit={(e) => {
        setInputValue('');
        return sendData(inputValue, e);
      }}>
        <input 
          type='name' 
          placeholder='Enter your request'
          className='form__input'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type='button' className='form__button' onClick={showData}>show all requests</button>
        <button type='submit' className='form__button'>send data</button>
      </form>
    </section>
  );
};

export default Form;

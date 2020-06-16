import React from 'react';
import logo from './logo.svg';
import 'reset-css';
import './App.scss';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

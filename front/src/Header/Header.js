import React from 'react';

import './Header.scss';

const Header = () => (
  <header className='header'>
    <p>Evgeniy Yakimchuk</p>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">item-1</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">item-2</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">item-3</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">item-3</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">item-5</a>
        </li>
      </ul>
      <i className="fas fa-bars nav__badge"></i>
    </nav>
  </header>
);

export default Header
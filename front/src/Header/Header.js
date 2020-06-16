import React, {useState} from 'react';

import './Header.scss';

const Header = () => {
  const [show, showMenu] = useState(false);

  return (
    <header className='header'>
      <p>Evgeniy Yakimchuk</p>
      <nav className="nav">
        <ul className={`nav__list ${show ? 'nav__list_show' : null}`}>
          {Array.of(1, 2, 3, 4, 5).map((item, i) => {
            return (
              <li className="nav__item" key={`item-${i + 1}`}>
                <a href="#" className="nav__link">{`item-${i + 1}`}</a>
              </li>
            );
          })}
        </ul>
        <i 
          onClick={() => showMenu(!show)} 
          className={`fas fa-bars nav__badge ${show ? 'nav__badge_rotate' : null}`}></i>
      </nav>
    </header>
  );
}

export default Header
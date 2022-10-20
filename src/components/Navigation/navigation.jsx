import React from 'react';
import './navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <a className="navigation__link" href="./somelink.com" target="_blank">
        Форма
      </a>
      <a className="navigation__link" href="./somelink.com" target="_blank">
        Палитра
      </a>
    </div>
  );
}

export default Navigation;

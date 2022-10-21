import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/form" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
        Форма
      </NavLink>
      <NavLink to="/palette" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
        Палитра
      </NavLink>
    </nav>
  );
}

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/categories',
    name: 'Categories',
  },
  {
    to: '/checkout',
    name: 'Checkout',
  },
];

function Navbar() {
  return (
    <div>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;

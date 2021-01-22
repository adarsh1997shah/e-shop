import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartProduct } from '../cart.context';

import { NavBar } from '../styles/navbar.style';

const navItems = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/checkout',
    name: 'Checkout',
  },
];

function Navbar() {
  const [cartProductsId] = useCartProduct();

  return (
    <NavBar>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink exact to={item.to} activeClassName="selected">
              {item.name}
              {item.name === 'Checkout' && cartProductsId.length > 0 && (
                <span>{cartProductsId.length}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavBar>
  );
}

export default memo(Navbar);

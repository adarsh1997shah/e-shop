import React, { createContext, useContext } from 'react';
import { useCartReducer } from './lib/cartReducer';

const CartProductContext = createContext();

export function CartProductContextProvider({ children }) {
  const data = useCartReducer();

  return (
    <CartProductContext.Provider value={data}>
      {children}
    </CartProductContext.Provider>
  );
}

export const useCartProduct = () => useContext(CartProductContext);

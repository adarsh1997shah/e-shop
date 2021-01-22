import React, { useEffect, useReducer, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { getFormatCurrency } from '../helper';
import data from '../datasets/products.json';
import { useCartProduct } from '../cart.context';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      prevState += 1;
      break;
    case 'DECREMENT':
      prevState -= 1;
      break;
    default:
      throw new Error('invalid operation');
  }

  return prevState;
};

function Checkout() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductsId, cartDispatch] = useCartProduct();
  const [productCount, productCountDispatch] = useReducer(reducer, 1);

  useEffect(() => {
    const products = data.filter(item => cartProductsId.includes(item.id));
    setCartProducts(products);
  }, [cartProductsId]);

  const handleRemoveFromCart = e => {
    const el = e.target;

    cartDispatch({ type: 'REMOVE', id: el.id });
  };

  return (
    <MainPageLayout>
      {cartProductsId.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{getFormatCurrency(item.currency, item.price)}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => productCountDispatch({ type: 'INCREMENT' })}
                  >
                    +
                  </button>
                  <span>{productCount}</span>
                  <button
                    type="button"
                    onClick={() => productCountDispatch({ type: 'DECREMENT' })}
                    disabled={productCount === 1}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    id={item.id}
                    type="button"
                    onClick={handleRemoveFromCart}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>No products added to cart</h3>
      )}
    </MainPageLayout>
  );
}

export default Checkout;

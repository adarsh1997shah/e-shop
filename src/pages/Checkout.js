import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { getFormatCurrency, getTotalProductAmount } from '../helper';
import data from '../datasets/products.json';
import { useCartProduct } from '../cart.context';

import { CartTable } from '../styles/checkout.style';

function Checkout() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductsId, cartDispatch] = useCartProduct();

  useEffect(() => {
    const products = data
      .filter(item => cartProductsId.includes(item.id))
      .map(item => ({ ...item, quantity: 1, quantityPrice: item.price }));

    setCartProducts(products);
  }, [cartProductsId]);

  const handleProductQuantity = (id, action) => {
    let newState = [];
    switch (action) {
      case 'INCREMENT':
        newState = cartProducts.map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                quantityPrice: item.quantityPrice + item.price,
              }
            : item
        );
        break;
      case 'DECREMENT':
        newState = cartProducts.map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                quantityPrice: item.quantityPrice - item.price,
              }
            : item
        );
        break;
      default:
        throw new Error('invalid operation');
    }

    setCartProducts(newState);
  };

  // Product quantity increase
  const handleDecrement = e => {
    handleProductQuantity(e.target.id, 'DECREMENT');
  };

  // Product quantity decrease
  const handleIncrement = e => {
    handleProductQuantity(e.target.id, 'INCREMENT');
  };

  // Remove product from cart.
  const handleRemoveFromCart = e => {
    const el = e.target;

    cartDispatch({ type: 'REMOVE', id: el.id });
  };

  // Get formatted total according to currency.
  const getFormatProductTotal = () => {
    const total = getTotalProductAmount(
      cartProducts.map(item => item.quantityPrice)
    );

    return getFormatCurrency('USD', total);
  };

  return (
    <MainPageLayout>
      {cartProductsId.length > 0 ? (
        <CartTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{getFormatCurrency(item.currency, item.quantityPrice)}</td>
                <td>
                  <button
                    type="button"
                    id={item.id}
                    className="quantity-control decrease"
                    onClick={handleDecrement}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>

                  <button
                    className="quantity-control increase"
                    id={item.id}
                    type="button"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="remove-cart-product"
                    id={item.id}
                    type="button"
                    onClick={handleRemoveFromCart}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <h3>Total</h3>
              </td>
              <td>
                <h3>{getFormatProductTotal()}</h3>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </CartTable>
      ) : (
        <h2>No products added to cart</h2>
      )}
    </MainPageLayout>
  );
}

export default Checkout;

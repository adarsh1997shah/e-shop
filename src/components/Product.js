import React from 'react';
import { getFormatCurrency } from '../helper';

function Product({
  name,
  id,
  handleAddToCart,
  isAddedToCart,
  thumbnail,
  price,
  currency,
}) {
  return (
    <li>
      <img src={thumbnail} alt={name} />
      <div>
        <h2>{name}</h2>
        <h3>{getFormatCurrency(currency, price)}</h3>
        {isAddedToCart ? (
          <button id={id} type="button">
            Added to cart
          </button>
        ) : (
          <button id={id} type="button" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
      </div>
    </li>
  );
}

export default Product;

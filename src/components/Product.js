import React from 'react';

function Product({ name, id, handleAddToCart, isAddedToCart }) {
  return (
    <li>
      <h2>{name}</h2>
      {isAddedToCart ? (
        <button id={id} type="button">
          Added to cart
        </button>
      ) : (
        <button id={id} type="button" onClick={handleAddToCart}>
          Add to cart
        </button>
      )}
    </li>
  );
}

export default Product;

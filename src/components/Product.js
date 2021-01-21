import React from 'react';

function Product({ name, id, handleAddToCart, isAddedToCart }) {
  return (
    <li>
      <h4>{name}</h4>
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
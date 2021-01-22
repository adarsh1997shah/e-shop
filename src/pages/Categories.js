import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainPageLayout from '../components/MainPageLayout';
import Product from '../components/Product';
import data from '../datasets/products.json';
import { useCartReducer, useFilterReducer } from '../helper';

const filters = [
  { text: 'Delivery', name: 'delivery' },
  { text: 'InStock', name: 'inStock' },
];

function Categories() {
  const [products, setProducts] = useState(null);
  const [filterOptions, filterDispatch] = useFilterReducer([]);
  const [cartProduct, cartDispatch] = useCartReducer();
  const { categoryId } = useParams();

  useEffect(() => {
    const categoryProduct = data.filter(item => item.categoryId === categoryId);

    setProducts(categoryProduct);

    if (filterOptions.length > 0) {
      let filterProducts = [...categoryProduct];

      filterOptions.forEach(option => {
        filterProducts = filterProducts.filter(item => item[option]);
      });

      setProducts(filterProducts);
    }
  }, [categoryId, filterOptions]);

  // Adding products to cart.
  const handleAddToCart = e => {
    const el = e.target;

    cartDispatch({ type: 'ADD', id: el.id });
  };
  console.log(cartProduct);
  // Adding number of filter option.
  const handleFilter = e => {
    const el = e.target;

    if (el.checked) {
      filterDispatch({ type: 'ADD', id: el.name });
    } else {
      filterDispatch({ type: 'REMOVE', id: el.name });
    }
  };

  // For Loading when components mounts
  if (!products) {
    return <div>loading...</div>;
  }

  return (
    <MainPageLayout>
      <div>
        <h3>Filter</h3>
        <ul>
          {filters.map((filter, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name={filter.name}
                onClick={handleFilter}
              />
              {filter.text}
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {filterOptions.length === 0 && products.length === 0 && (
          <li>Sorry no product for this category</li>
        )}
        {filterOptions.length > 0 && products.length === 0 && (
          <li>Sorry no product for these filter</li>
        )}
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            id={product.id}
            handleAddToCart={handleAddToCart}
            isAddedToCart={cartProduct.includes(product.id)}
          />
        ))}
      </ul>
    </MainPageLayout>
  );
}

export default Categories;

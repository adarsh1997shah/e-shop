import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartProduct } from '../cart.context';
import MainPageLayout from '../components/MainPageLayout';
import Product from '../components/Product';
import data from '../datasets/products.json';
import categoriesdb from '../datasets/categories.json';
import { useFilterReducer } from '../lib/filterReducer';

import {
  FilterList,
  ProductList,
  ProductWrapper,
} from '../styles/categories.style';

const initialFilterState = {
  delivery: false,
  inStock: false,
};

const getFilteredProducts = (products, filterOptions) => {
  let filterProducts = [...products];

  if (filterOptions.delivery) {
    filterProducts = filterProducts.filter(p => p.delivery);
  }

  if (filterOptions.inStock) {
    filterProducts = filterProducts.filter(p => p.inStock);
  }

  return filterProducts;
};

const filters = [
  { text: 'Delivery', name: 'delivery' },
  { text: 'InStock', name: 'inStock' },
];

function Category({ category }) {
  const [products] = useState(
    data.filter(item => item.categoryId === category.id)
  );
  const [filterOptions, filterDispatch] = useFilterReducer(initialFilterState);
  const [cartProduct, cartDispatch] = useCartProduct();

  // Getting filtered products
  const filteredProducts = getFilteredProducts(products, filterOptions);

  // Adding products to cart.
  const handleAddToCart = (e, IsinStock) => {
    const el = e.target;

    if (!IsinStock) {
      console.log('Product is not in the stock');
      return;
    }

    cartDispatch({ type: 'ADD', id: el.id });
  };

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
    <>
      <div>
        <h2>Filter</h2>
        <FilterList>
          {filters.map((filter, index) => (
            <li key={index}>
              <label htmlFor={index}>
                <input
                  id={index}
                  type="checkbox"
                  name={filter.name}
                  onChange={handleFilter}
                  checked={filterOptions[filter.name]}
                />
                <span>{filter.text}</span>
              </label>
            </li>
          ))}
        </FilterList>
      </div>
      <ProductWrapper>
        <h2>
          <span>{category.name}</span>{' '}
          <small>
            (Showing {filteredProducts.length} out of {products.length})
          </small>
        </h2>

        <ProductList>
          {filteredProducts.length === 0 && (
            <h3 className="product-list-none">
              Sorry no product for these filter
            </h3>
          )}
          {filteredProducts.map(product => (
            <Product
              key={product.id}
              name={product.name}
              thumbnail={product.thumbnail}
              price={product.price}
              currency={product.currency}
              id={product.id}
              inStock={product.inStock}
              handleAddToCart={e => handleAddToCart(e, product.inStock)}
              isAddedToCart={cartProduct.includes(product.id)}
            />
          ))}
        </ProductList>
      </ProductWrapper>
    </>
  );
}

const Categories = () => {
  const { categoryId } = useParams();

  const category = categoriesdb.find(item => item.id === categoryId);

  return (
    <MainPageLayout>
      {!category && (
        <h3 className="product-list-none">
          Sorry no product for this category id {categoryId}
        </h3>
      )}
      {category && <Category category={category} />}
    </MainPageLayout>
  );
};

export default Categories;

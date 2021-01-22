import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartProduct } from '../cart.context';
import MainPageLayout from '../components/MainPageLayout';
import Product from '../components/Product';
import data from '../datasets/products.json';
import { useFilterReducer } from '../helper';

import {
  FilterList,
  ProductList,
  ProductWrapper,
} from '../styles/categories.style';

const filters = [
  { text: 'Delivery', name: 'delivery' },
  { text: 'InStock', name: 'inStock' },
];

function Categories() {
  const [products, setProducts] = useState(null);
  const [filterOptions, filterDispatch] = useFilterReducer([]);
  const [cartProduct, cartDispatch] = useCartProduct();
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
        <h2>Filter</h2>
        <FilterList>
          {filters.map((filter, index) => (
            <li key={index}>
              <label htmlFor={index}>
                <input
                  id={index}
                  type="checkbox"
                  name={filter.name}
                  onClick={handleFilter}
                />
                <span>{filter.text}</span>
              </label>
            </li>
          ))}
        </FilterList>
      </div>
      <ProductWrapper>
        <h2 className="product-heading">Products</h2>

        <ProductList>
          {filterOptions.length === 0 && products.length === 0 && (
            <h3>Sorry no product for this category</h3>
          )}
          {filterOptions.length > 0 && products.length === 0 && (
            <h3>Sorry no product for these filter</h3>
          )}
          {products.map(product => (
            <Product
              key={product.id}
              name={product.name}
              thumbnail={product.thumbnail}
              price={product.price}
              currency={product.currency}
              id={product.id}
              handleAddToCart={handleAddToCart}
              isAddedToCart={cartProduct.includes(product.id)}
            />
          ))}
        </ProductList>
      </ProductWrapper>
    </MainPageLayout>
  );
}

export default Categories;

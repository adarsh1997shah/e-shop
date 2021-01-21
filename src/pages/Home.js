import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainPageLayout from '../components/MainPageLayout';
import data from '../datasets/categories.json';

function Home() {
  const [categories] = useState(data);

  return (
    <MainPageLayout>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <NavLink to={`categories/${category.id}`}>{category.name}</NavLink>
          </li>
        ))}
      </ul>
    </MainPageLayout>
  );
}

export default Home;

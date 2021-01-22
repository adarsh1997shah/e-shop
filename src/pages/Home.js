import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainPageLayout from '../components/MainPageLayout';
import data from '../datasets/categories.json';
import { HomeLayout } from '../styles/home.style';

function Home() {
  const [categories] = useState(data);

  return (
    <MainPageLayout>
      <HomeLayout>
        {categories.map(category => (
          <li key={category.id}>
            <NavLink to={`categories/${category.id}`}>
              <h2>{category.name}</h2>
              <span>{category.description}</span>
            </NavLink>
          </li>
        ))}
      </HomeLayout>
    </MainPageLayout>
  );
}

export default Home;

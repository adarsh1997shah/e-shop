import React from 'react';
import Navbar from './Navbar';

import { Wrapper } from '../styles/styles';

function MainPageLayout({ children }) {
  return (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default MainPageLayout;

import React from 'react';
import Navbar from './Navbar';

function MainPageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default MainPageLayout;

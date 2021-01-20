import React from 'react';
import Navbar from './Navbar';

function MainPageLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default MainPageLayout;

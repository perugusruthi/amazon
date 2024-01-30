import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Landingpage = () => {
  return (
    <div>
      {/* Display the Navbar component */}
      <Navbar />

      {/* Display the Products component */}
      <Products />
    </div>
  );
};

export default Landingpage;
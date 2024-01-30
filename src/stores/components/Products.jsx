import React from 'react';
import Computers from './Computers'; // Import the `Computers` component from the `./Computers` file
import Mobiles from './Mobiles'; // Import the `Mobiles` component from the `./Mobiles` file

const Products = () => {
  // Return a container element that will house the `Computers` and `Mobiles` components
  return (
    <div>
      {/* Render the `Mobiles` component */}
      <Mobiles />

      {/* Render the `Computers` component */}
      <Computers />
    </div>
  );
};

export default Products;
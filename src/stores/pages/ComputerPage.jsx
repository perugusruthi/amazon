import React from 'react'; // Import the React library for component creation
import { Link } from 'react-router-dom'; // Import the `Link` component from `react-router-dom` for creating clickable links
import Navbar from '../components/Navbar'; // Import the `Navbar` component from the `components` directory
import { createClient } from 'contentful'; // Import the `createClient` function from the `contentful` package for interacting with Contentful
import { useEffect, useState } from 'react'; // Import the `useEffect` and `useState` hooks from React to manage component lifecycle and state management

const ComputerPage = () => {
  const [computers, setComputers] = useState([]); // Initialize a state variable `computers` to store fetched computer data
  const client = createClient({ // Create a Contentful client instance using the specified space and access token
    space: "1hpql9axh35z",
    accessToken: "P-6bxwPG4QP_exx2Z4WVzprCxpPTasaIjOMXbGCfW5Q"
  });

  // UseEffect hook to fetch computers from Contentful on the component's mount
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({ content_type: 'computers' }); // Fetch all entries of the 'computers' content type
        setComputers(entries); // Update the `computers` state variable with the fetched data
      } catch (error) {
        console.error(`Error fetching Computers: ${error}`); // Log error to the console
      }
    };
    getAllEntries();
  }, []); // Empty dependency array indicates that this effect should only run on component mount

  return (
    <>
      {/* Display the Navbar component */}
      <Navbar />

      {/* Display a section for listing computers */}
      <div className='pageSection'>
        {/* Loop through each computer item and render a card */}
        {computers?.items?.map((item) => (
          <div>
            <Link to={`/computers/${item.sys.id}`} className='item'>
              {/* Display a product image and link to the product detail page */}
              <div className="pageImg">
                <img src={item.fields.image.fields.file.url} alt='' />
              </div>
            </Link>
            <div className="proModel">
              {/* Display product details (company and model) */}
              {item.fields.company}, {item.fields.model}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ComputerPage;
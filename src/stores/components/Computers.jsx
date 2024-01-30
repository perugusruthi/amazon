import React from 'react'; // Import the React library for component creation
import { Link } from 'react-router-dom'; // Import the `Link` component for creating clickable links
import { createClient } from 'contentful'; // Import the `createClient` function from the `contentful` package for interacting with Contentful
import { useEffect, useState } from 'react'; // Import the `useEffect` and `useState` hooks from React to manage component lifecycle and state management

const Computers = () => {
  // Initialize a state variable `computers` to store fetched computer data from Contentful
  const [computers, setComputers] = useState([]);

  // Create a Contentful client instance using the specified space and access token
  const client = createClient({
    space: '1hpql9axh35z', // Your Contentful Space ID
    accessToken: 'P-6bxwPG4QP_exx2Z4WVzprCxpPTasaIjOMXbGCfW5Q' // Your Contentful Access Token
  });

  // UseEffect hook to fetch computers on the component's mount
  useEffect(() => {
    // Function to fetch all computers from Contentful
    const getAllEntries = async () => {
      try {
        // Fetch all entries of the 'computers' content type
        const entries = await client.getEntries({ content_type: 'computers' });

        // Update the `computers` state variable with the fetched data
        setComputers(entries);
      } catch (error) {
        // Log error to the console
        console.error(`Error fetching Computers: ${error}`);
      }
    };

    // Call the getAllEntries function to fetch computers
    getAllEntries();
  }, []); // Empty dependency array indicates that this effect should only run on component mount

  // Function to render a computer card
  const renderComputerCard = (computer) => (
    <>
      <Link to={`/computers/${computer.sys.id}`} className='imgBox'>
        <img className='proImage' src={computer.fields.image.fields.file.url} alt='' />
      </Link>
    </>
  );

  // Display the list of computers
  return (
    <div className='proSection'>
      {/* Iterate over each computer item in the `computers` state array */}
      {computers?.items?.map((computer) => renderComputerCard(computer))}
    </div>
  );
};

export default Computers; // Export the `Computers` component for usage elsewhere in the application
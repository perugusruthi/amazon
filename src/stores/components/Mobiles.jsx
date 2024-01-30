import React from 'react'; // Import the React library for component creation
import { Link } from 'react-router-dom'; // Import the `Link` component for creating clickable links
import { createClient } from 'contentful'; // Import the `createClient` function from the `contentful` package for interacting with Contentful
import { useEffect, useState } from 'react'; // Import the `useEffect` and `useState` hooks from React to manage component lifecycle and state management

const Mobiles = () => {
  // Initialize a state variable `mobiles` to store fetched mobile data
  const [mobiles, setMobiles] = useState([]);

  // Create a Contentful client instance using the specified space and access token
  const client = createClient({
    space: '1hpql9axh35z', // Your Contentful Space ID
    accessToken: 'P-6bxwPG4QP_exx2Z4WVzprCxpPTasaIjOMXbGCfW5Q' // Your Contentful Access Token
  });

  // UseEffect hook to fetch mobiles on the component's mount
  useEffect(() => {
    // Function to fetch all mobiles from Contentful
    const getAllEntries = async () => {
      try {
        // Fetch all entries of the 'mobiles' content type
        const entries = await client.getEntries({ content_type: 'mobile' });

        // Update the `mobiles` state variable with the fetched data
        setMobiles(entries);

        // Log the fetched mobile data
        console.log(entries);
      } catch (error) {
        // Log error to the console
        console.error(`Error fetching Mobiles: ${error}`);
      }
    };

    // Call the getAllEntries function to fetch mobiles
    getAllEntries();
  }, []); // Empty dependency array indicates that this effect should only run on component mount

  // Function to render a mobile card
  const renderMobileCard = (mobile) => (
    <>
      <Link to={`/mobiles/${mobile.sys.id}`} className='imgBox'>
        <img className='proImage' src={mobile.fields.image.fields.file.url} alt='' />
      </Link>
    </>
  );

  // Display the list of mobiles
  return (
    <div className='proSection'>
      {/* Iterate over each mobile item in the `mobiles` state array */}
      {mobiles?.items?.map((mobile) => renderMobileCard(mobile))}
    </div>
  );
};

export default Mobiles; // Export the `Mobiles` component for usage elsewhere in the application
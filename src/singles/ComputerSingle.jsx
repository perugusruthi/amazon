import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar'; // Import the `Navbar` component from the `./Navbar` file
import { createClient } from 'contentful'; // Import the `createClient` function from the `contentful` package
import { useEffect, useState } from 'react'; // Import the `useEffect` and `useState` hooks from React

const ComputerSingle = () => {
  const [singleComputer, setSingleComputer] = useState([]); // Initialize a state variable `singleComputer` to store fetched computer data

  // Extract the computer ID from the URL using `useParams`
  let { id } = useParams();

  // Create a Contentful client instance using the specified space and access token
  const client = createClient({
    space: '1hpql9axh35z', // Your Contentful Space ID
    accessToken: 'P-6bxwPG4QP_exx2Z4WVzprCxpPTasaIjOMXbGCfW5Q' // Your Contentful Access Token
  });

  // UseEffect hook to fetch the computer data based on the ID
  useEffect(() => {
    const getEntryById = async () => {
      try {
        // Fetch the computer entry by ID from Contentful
        const entry = await client.getEntry(id);

        // Update the `singleComputer` state variable with the fetched entry data
        setSingleComputer(entry);
      } catch (error) {
        console.error(`Error fetching Computer: ${error}`);
      }
    };

    // Call the getEntryById function to fetch the computer data
    getEntryById();
  }, [id]); // The dependency array `[id]` ensures that the effect only runs when the `id` prop changes

  // Return the computer details section
  return (
    <>
      <Navbar /> // Render the `Navbar` component
      <div className="ind-section">
        {/* Display the computer image */}
        <div className="ind-image">
          <img src={singleComputer?.fields?.image.fields.file.url} alt="" />
        </div>

        {/* Display the computer details */}
        <div className="ind-details space">
          {/* Display the company name */}
          <div className="ind-company">
            <h2>{singleComputer?.fields?.company}</h2>
          </div>

          {/* Display the model name */}
          <div className="ind-model space">
            <h3>{singleComputer?.fields?.model}</h3>
          </div>

          {/* Display the computer price */}
          <div className="ind-price space">
            <h2>{singleComputer?.fields?.price}</h2>
          </div>

          {/* Display the computer description */}
          <div className="ind-desc space">
            <p>{singleComputer?.fields?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerSingle;
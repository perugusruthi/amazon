import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar'; // Import the `Navbar` component from the `./Navbar` file
import { createClient } from 'contentful'; // Import the `createClient` function from the `contentful` package
import { Link } from 'react-router-dom'; // Import the `Link` component for creating clickable links
import { useEffect, useState } from 'react'; // Import the `useEffect` and `useState` hooks from React

const MobileSignle = () => {
  const [singleMobile, setSingleMobile] = useState([]); // Initialize a state variable `singleMobile` to store fetched mobile data

  // Extract the mobile ID from the URL using `useParams`
  let { id } = useParams();
  console.log("***id**", id); // Log the retrieved ID to the console

  // Create a Contentful client instance using the specified space and access token
  const client = createClient({
    space: '1hpql9axh35z', // Your Contentful Space ID
    accessToken: 'P-6bxwPG4QP_exx2Z4WVzprCxpPTasaIjOMXbGCfW5Q' // Your Contentful Access Token
  });

  // UseEffect hook to fetch the mobile data based on the ID
  useEffect(() => {
    const getEntryById = async () => {
      try {
        // Fetch the mobile entry by ID from Contentful
        const entry = await client.getEntry(id);

        // Update the `singleMobile` state variable with the fetched entry data
        console.log("***entries**", entry); // Log the retrieved mobile entry to the console
        setSingleMobile(entry);
      } catch (error) {
        console.log(`Error fetching Mobiles ${error}`);
      }
    };

    // Call the getEntryById function to fetch the mobile data
    getEntryById();
  }, [id]); // The dependency array `[id]` ensures that the effect only runs when the `id` prop changes

  console.log("*****", singleMobile); // Log the retrieved mobile data to the console
  // const product = singleMobile.fields;

  // Return the mobile details section
  return (
    <>
      <Navbar /> // Render the `Navbar` component
      <div className="ind-section">
        {/* Display the mobile image */}
        <div className="ind-image">
          <img src={singleMobile?.fields?.image.fields.file.url} alt="" />
        </div>

        {/* Display the mobile details */}
        <div className="ind-details space">
          {/* Display the company name */}
          <div className="ind-company">
            <h2>{singleMobile?.fields?.company}</h2>
          </div>

          {/* Display the mobile model name */}
          <div className="ind-model space">
            <h3>{singleMobile?.fields?.model}</h3>
          </div>

          {/* Display the mobile price */}
          <div className="ind-price space">
            <h2>{singleMobile?.fields?.price}</h2>
          </div>

          {/* Display the mobile description */}
          <div className="ind-desc space">
            <p>{singleMobile?.fields?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSignle
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const MobilePage = () => {
  const [mobiles, setMobiles] = useState([]); // Initialize a state variable `mobiles` to store fetched mobile data
  const client = createClient({ // Create a Contentful client instance using the specified space and access token
    space: "1hpql9axh35z", // Your Contentful Space ID
    accessToken: "P-6bxwPG4QP_exx2Z4WVzprCxpPTasaIjOMXbGCfW5Q" // Your Contentful Access Token
  });

  // UseEffect hook to fetch mobile devices from Contentful on the component's mount
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({ content_type: 'mobile' }); // Fetch all entries of the 'mobile' content type
        setMobiles(entries); // Update the `mobiles` state variable with the fetched data
      } catch (error) {
        console.error(`Error fetching Mobiles: ${error}`); // Log error to the console
      }
    };
    getAllEntries();
  }, []); // Empty dependency array indicates that this effect should only run on component mount

  return (
    <>
      {/* Display the Navbar component */}
      <Navbar />

      {/* Display a section for listing mobile devices */}
      <div className='pageSection'>
        {/* Loop through each mobile device item and render a card */}
        {mobiles?.items?.map((item) => (
          <div>
            <Link to={`/mobiles/${item.sys.id}`} className='item'>
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

export default MobilePage;
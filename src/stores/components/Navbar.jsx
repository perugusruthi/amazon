import React from 'react';
import { Link } from 'react-router-dom'; // Import the `Link` component for creating clickable links

const Navbar = () => {
  return (
    <>
      {/* Create a navigation bar component with a title, search bar, user profile, cart icon, and submenu */}
      <div className='navSection'>
        {/* Link to the home page */}
        <Link to='/'>
          <div className="title">
            <h2>Amazon</h2>
          </div>
        </Link>

        {/* Search bar */}
        <div className='search'>
          <input type="text" placeholder="Search...." />
        </div>

        {/* User profile */}
        <div className="user">
          <div className="user-detail">
            {/* Sign in/Sign up link */}SignIn/SignUp
          </div>
        </div>

        {/* Cart icon */}
        <div className="cart">
          Cart
        </div>
      </div>

      {/* Submenu for navigation to different product categories */}
      <div className="subMenu">
        <ul>
          {/* Mobiles link */}
          <Link to='/mobiles'>
            <li>Mobiles</li>
          </Link>

          {/* Computers link */}
          <Link to='/computers'>
            <li>Computers</li>
          </Link>

          {/* Furniture link */}
          <li>Furniture</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
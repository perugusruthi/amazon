import React from 'react'; // Import the React library for component creation
import ReactDOM from 'react-dom/client'; // Import the `ReactDOM` library for rendering React components to the DOM
import './index.css'; // Import the CSS file for styling the application
import App from './App'; // Import the `App` component, which represents the main application layout
import { BrowserRouter } from 'react-router-dom'; // Import the `BrowserRouter` component for routing between different pages

// Create a root DOM element using `document.getElementById('root')`
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application to the DOM
root.render(
  // Wrap the application in `React.StrictMode` for stricter React warnings
  <React.StrictMode>
    <BrowserRouter>
         {/*Render the `App` component, which will render the application's UI*/} 
      <App />
    </BrowserRouter>
  </React.StrictMode>

);
import './App.css'; // Import the CSS file for styling the application

import Landingpage from './stores/pages/Landingpage'; // Import the `Landingpage` component from the `stores/pages` directory

import { Routes, Route } from 'react-router-dom'; // Import the `Routes` and `Route` components from `react-router-dom` for routing functionality

import MobilePage from './stores/pages/MobilePage'; // Import the `MobilePage` component from the `stores/pages` directory

import MobileSignle from './singles/MobileSignle'; // Import the `MobileSignle` component from the `singles` directory

import ComputerPage from './stores/pages/ComputerPage'; // Import the `ComputerPage` component from the `stores/pages` directory

import ComputerSingle from './singles/ComputerSingle'; // Import the `ComputerSingle` component from the `singles` directory

function App() { // Define the `App` component
  return (
    <div className="App"> {/*Create a container element with the class `App` */} 
      <Routes> {/*Create a `Routes` component for managing routing */} 
        <Route path='/' element={<Landingpage />} /> {/* Route to the `Landingpage` component for the root path ('/')*/}
        <Route path='/mobiles' element={<MobilePage />} /> {/* Route to the `MobilePage` component for the path `/mobiles`*/}
        <Route path='/mobiles/:id' element={<MobileSignle />} /> {/* Route to the `MobileSignle` component for the path `/mobiles/:id`, where `:id` represents a dynamic parameter*/}
        <Route path='/computers' element={<ComputerPage />} /> {/* Route to the `ComputerPage` component for the path `/computers`*/}
        <Route path='/computers/:id' element={<ComputerSingle />} /> {/* Route to the `ComputerSingle` component for the path `/computers/:id`, where `:id` represents a dynamic parameter*/}
      </Routes>
    </div>
  );
}

export default App; // Export the `App` component for usage throughout the application
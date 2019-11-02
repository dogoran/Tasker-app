import React from 'react';

import Routes from './Routes';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <Routes />
    </div>
  </>
);

export default App;

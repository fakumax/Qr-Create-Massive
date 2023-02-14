import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';

import Navbar from '../components/Navbar.jsx';
import QrInput from '../components/QrInput';
import Sidebar from '../components/Sidebar';
const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <QrInput />
        <Sidebar />
      </div>
    </>
  );
};

export default App;

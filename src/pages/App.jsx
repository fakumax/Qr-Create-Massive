import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';

import Navbar from '../components/Navbar.jsx';
import QrInput from '../components/QrInput';

function App() {
  return (
    <>
      <Navbar />

      <QrInput />
    </>
  );
}

export default App;

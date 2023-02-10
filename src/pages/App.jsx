import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';
import QRCode from 'qrcode.react';

import Navbar from '../components/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className='divo'>
        <h1 className='divo2'>Hello world!</h1>
        <input type='text' />
        <div>
          <QRCode
            value='https://wara.com/'
            renderAs='canvas'
            size={172}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
          />
        </div>
      </div>
    </>
  );
}

export default App;

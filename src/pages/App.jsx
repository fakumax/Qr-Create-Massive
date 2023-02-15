import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';
import Navbar from '../components/Navbar.jsx';
import QrInput from '../components/QrInput';
import Sidebar from '../components/Sidebar';

const App = () => {
  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: 'svg',
    data: 'https://www.fakumax.dev/',
    // image: '/favicon.ico',
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q',
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
    },
    dotsOptions: {
      color: '#222222',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
      // },
      type: 'rounded',
    },
    backgroundOptions: {
      color: '#5FD4F3',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
      // },
    },
    cornersSquareOptions: {
      color: '#222222',
      type: 'extra-rounded',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
      // },
    },
    cornersDotOptions: {
      color: '#222222',
      type: 'dot',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
      // },
    },
  });

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: 50,
        }}
      >
        <Sidebar options={options} setOptions={setOptions} />
        <QrInput options={options} setOptions={setOptions} />
      </div>
    </>
  );
};

export default App;

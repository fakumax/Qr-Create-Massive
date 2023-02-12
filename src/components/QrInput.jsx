import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './QrInput.module.css';

const QrInput = () => {
  const [qrValue, setQrValue] = useState('');

  const handleOnChange = (e) => {
    const { value } = e.target;
    setQrValue(value);
  };
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById('qr-gen');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className={styles.container}>
      <input onChange={handleOnChange} placeholder='Ingrese un texto...' />
      <div className={styles.qr}>
        <QRCodeSVG
          id='qr-gen'
          value={qrValue}
          size={128}
          bgColor={'#ffffff'}
          fgColor={'#000000'}
          level={'L'}
          includeMargin={false}
          imageSettings={{
            src: 'https://static.zpao.com/favicon.png',
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
        <button type='button' onClick={downloadQRCode}>
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default QrInput;

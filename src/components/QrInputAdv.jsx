import React, { useEffect, useRef, useState, ChangeEvent } from 'react';
import styles from './QrInput.module.css';

import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Extension,
  Options,
} from 'qr-code-styling';

const QrInputAdv = ({ options, setOptions }) => {
  console.log('qrInputAdv');

  const [fileExt, setFileExt] = useState('svg');
  const [qrCode] = useState(new QRCodeStyling(options));
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt,
    });
  };

  const onDataChange = (event) => {
    setOptions((options) => ({
      ...options,
      data: event.target.value,
    }));
  };
  return (
    <div className={styles.App}>
      <div className={styles.inputWrapper}>
        <input
          value={options.data}
          onChange={onDataChange}
          className={styles.inputBox}
        />
        <select onChange={onExtensionChange} value={fileExt}>
          <option value='svg'>SVG</option>
          <option value='png'>PNG</option>
          <option value='jpeg'>JPEG</option>
          <option value='webp'>WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
      <div ref={ref} />
    </div>
  );
};

export default QrInputAdv;

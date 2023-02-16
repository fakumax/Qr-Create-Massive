import React from 'react';
import Input from './commons/Input';

const Sidebar = ({ options, setOptions }) => {
  const onDataChange = (e) => {
    setOptions((options) => ({
      ...options,
      [e.target.name]: e.target.value,
    }));
  };
  const handlechange = (e) => {
    setOptions((options) => ({
      ...options,
      [e.target.getAttribute('field')]: {
        ...options[e.target.getAttribute('field')],
        [e.target.getAttribute('property')]: e.target.value,
      },
    }));
  };
  // const handleQrOptions = (e) => {
  //   setOptions((options) => ({
  //     ...options,
  //     qrOptions: {
  //       ...options.qrOptions,
  //       [e.target.name]: e.target.value,
  //     },
  //   }));
  // };
  const handleQrOptions = (e) => {
    setOptions((options) => ({
      ...options,
      qrOptions: {
        ...options.qrOptions,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const handleCornerStyle = (e) => {
    console.log('e', e.target.id);
    // setOptions((options) => ({
    //   ...options,
    //   qrOptions: {
    //     ...options.qrOptions,
    //     [e.target.name]: e.target.value,
    //   },
    // }));
  };

  return (
    <div>
      <div>
        <label htmlFor='files'>Image File : </label>
        <input type='file' id='files' />
      </div>

      <Input
        type='number'
        text='Width : '
        name='width'
        options={options}
        setOptions={setOptions}
      />
      <Input
        type='number'
        text='Height : '
        name='height'
        options={options}
        setOptions={setOptions}
      />
      <Input
        type='number'
        text='Margin : '
        name='margin'
        options={options}
        setOptions={setOptions}
      />
      <div>
        <h3>Dots Options</h3>
        <label htmlFor='type'>Dots Style: </label>
        <select
          id='dot-type'
          name='dot-type'
          property='type'
          field='dotsOptions'
          onChange={handlechange}
        >
          <option value='square'>Square</option>
          <option value='dots'>Dots</option>
          <option value='rounded'>Rounded</option>
          <option value='extrarounded'>Extra Rounded</option>
          <option value='classy'>Classy</option>
          <option value='classyrounded'>Classy Rounded</option>
        </select>
      </div>
      <div>
        <label htmlFor='color'>Dots Color : </label>
        <input
          type='color'
          id='dot-color'
          name='dot-color'
          property='color'
          field='dotsOptions'
          onChange={handlechange}
        />
      </div>
      {/*********************/}
      <div>
        <h3>Corners Square Options</h3>
        <label htmlFor='cornerSquare'>Corners Square Style : </label>
        <select
          name='cornerSquare'
          id='cornerSquaress'
          onChange={handleCornerStyle}
        >
          <option value=''>None</option>
          <option value='square'>Square</option>
          <option value='dot'>Dot</option>
          <option value='extra-rounded'>Extra rounded</option>
        </select>
      </div>
      <div>
        <label htmlFor='color'>Corners Square Color : </label>
        <input type='color' id='color' name='color' onChange={handlechange} />
      </div>
      {/*********************/}

      <div>
        <label htmlFor=''>Background color : </label>
        <input type='file' />
      </div>
      <div>
        <h3>Background Options</h3>
        <label htmlFor=''>Background color : </label>
        <input type='color' />
      </div>
      <div>
        <h3>QR Options</h3>
        <label htmlFor='mode'>Mode: </label>
        <select name='mode' id='mode' onChange={handleQrOptions}>
          <option value='Numeric'>numeric</option>
          <option value='Alphanumeric'>Alphanumeric</option>
          <option value='Byte'>Byte</option>
          <option value='Kanji'>Kanji</option>
        </select>
      </div>
      <div>
        <label htmlFor='errorCorrectionLevel'>Error Correction Level :</label>
        <select
          id='errorCorrectionLevel'
          name='errorCorrectionLevel'
          onChange={handleQrOptions}
        >
          <option value='L'>L</option>
          <option value='M'>M</option>
          <option value='Q'>Q</option>
          <option value='H'>H</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;

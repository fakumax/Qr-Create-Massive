import React from 'react';
import Input from './commons/Input';

const Sidebar = ({ options, setOptions }) => {
  const onDataChange = (event) => {
    setOptions((options) => ({
      ...options,
      [event.target.name]: event.target.value,
    }));
  };
  const handlechange = (e) => {
    console.log('event', e);
    setOptions((options) => ({
      ...options,
      [e.target.text]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label htmlFor='files'>Image File : </label>
        <input type='file' id='files' />
      </div>
      {/* <div>
        <label htmlFor='width'>Width :</label>
        <input type='number' id='width' name='width' onChange={onDataChange} />
      </div> */}
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
        <h3>Dots Option</h3>
        <label htmlFor='dotsOptions'>Dots Style: </label>
        <select name='dotsOptions' id='dotsOptions' onChange={handlechange}>
          <option value='square'>Square</option>
          <option value='dots'>Dots</option>
          <option value='rounded'>Rounded</option>
          <option value='extrarounded'>Extra Rounded</option>
          <option value='classy'>Classy</option>
          <option value='classyrounded'>Classy Rounded</option>
        </select>
      </div>
      <div>
        <label htmlFor='dotscolor'>Dots Color : </label>
        <input type='color' id='dotscolor' />
      </div>
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
        <select>
          <option value='numeric'>numeric</option>
          <option value='alphanumeric'>Alphanumeric</option>
          <option value='byte'>Byte</option>
          <option value='kanji'>Kanji</option>
        </select>
      </div>
      <div>
        <label
          htmlFor='correctionlevel'
          name='qrOptions'
          onChange={onDataChange}
        >
          Error Correction Level :
        </label>
        <select id='qrOptions' onChange={onDataChange}>
          <option value='l'>L</option>
          <option value='m'>M</option>
          <option value='q'>Q</option>
          <option value='h'>H</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;

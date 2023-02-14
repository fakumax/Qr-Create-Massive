import React from 'react';

const Sidebar = () => {
  return (
    <>
      <div>
        <label htmlFor='files'>Image File : </label>
        <input type='file' id='files' />
      </div>
      <div>
        <label htmlFor='width'>Width :</label>
        <input type='number' id='width' />
      </div>
      <div>
        <label htmlFor='height'>Height : </label>
        <input type='number' id='height' />
      </div>
      <div>
        <label htmlFor='margin'>Margin : </label>
        <input type='number' id='margin' />
      </div>
      <div>
        <h3>Dots Option</h3>
        <label htmlFor=''>Dots Style: </label>
        <select>
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
        <label htmlFor='correctionlevel'>Error Correction Level : </label>
        <select>
          <option value='l'>L</option>
          <option value='m'>M</option>
          <option value='q'>Q</option>
          <option value='h'>H</option>
        </select>
      </div>
    </>
  );
};

export default Sidebar;

import React from 'react';
import Input from './commons/Input';
import styles from './Sidebar.module.css';

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

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setOptions((options) => ({
      ...options,
      [e.target.name]: base64,
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor='imageLoad'>Image File : </label>
        <input type='file' id='imageLoad' name='image' onChange={uploadImage} />
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
      <h3>Dots Options</h3>
      <div className={styles.SelectDiv}>
        <label htmlFor='type'>Dots Style: </label>
        <select
          id='dot-type'
          name='dot-type'
          property='type'
          field='dotsOptions'
          onChange={handlechange}
          className={styles.stylesSelector}
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
      <h3>Corners Square Options</h3>
      <div className={styles.SelectDiv}>
        <label htmlFor='corner-square'>Corners Square Style : </label>
        <select
          name='corner-square'
          id='corner-square'
          property='type'
          field='cornersSquareOptions'
          onChange={handlechange}
          className={styles.stylesSelector}
        >
          <option value=''>None</option>
          <option value='square'>Square</option>
          <option value='dot'>Dot</option>
          <option value='extra-rounded'>Extra rounded</option>
        </select>
      </div>
      <div>
        <label htmlFor='color-square'>Corners Square Color : </label>
        <input
          type='color'
          id='color-square'
          name='color-square'
          property='color'
          field='cornersSquareOptions'
          onChange={handlechange}
        />
      </div>
      {/*********************/}
      <h3>Corners Dots Options</h3>
      <div className={styles.SelectDiv}>
        <label htmlFor='corner-dots'>Corners Dots Style : </label>
        <select
          name='corner-dots'
          id='corner-dots'
          property='type'
          field='cornersDotOptions'
          onChange={handlechange}
          className={styles.stylesSelector}
        >
          <option value=''>None</option>
          <option value='square'>Square</option>
          <option value='dot'>Dot</option>
        </select>
      </div>
      <div>
        <label htmlFor='color-dots'>Corners Dot Color : </label>
        <input
          type='color'
          id='color-dots'
          name='color-dots'
          property='color'
          field='cornersDotOptions'
          onChange={handlechange}
        />
      </div>
      {/*********************/}

      <div>
        <h3>Background Options</h3>
        <label htmlFor=''>Background color : </label>
        <input
          type='color'
          id='bg-color'
          name='bg-color'
          property='color'
          field='backgroundOptions'
          onChange={handlechange}
        />
      </div>
      <h3>QR Options</h3>
      <div className={styles.SelectDiv}>
        <label htmlFor='mode'>Mode: </label>
        <select
          name='mode'
          id='mode'
          onChange={handlechange}
          className={styles.stylesSelector}
        >
          <option disabled value='Numeric'>
            numeric
          </option>
          <option disabled value='Alphanumeric'>
            Alphanumeric
          </option>
          <option value='Byte'>Byte</option>
          <option disabled value='Kanji'>
            Kanji
          </option>
        </select>
      </div>
      <div className={styles.SelectDiv}>
        <label htmlFor='errorCorrection'>Error Correction Level :</label>
        <select
          id='errorCorrection'
          name='errorCorrection'
          property='errorCorrectionLevel'
          field='qrOptions'
          onChange={handlechange}
          className={styles.stylesSelector}
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

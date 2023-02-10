import React from 'react';
import SwitchDark from './SwitchDark';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className='headerTest'>
      <nav className={styles.navigation}>
        <div>
          <h1 className={styles.title}>QR Massive Generator</h1>
          <small className='name'>by Facundo Vergara</small>
        </div>
        <div className={styles.icon}>
          <SwitchDark />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';
import SwitchDark from './SwitchDark';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <div className={styles.name}>
          <h1 className={styles.title}>QR Massive Generator</h1>
          <small>by Facundo Vergara</small>
        </div>
        <div className={styles.icon}>
          <SwitchDark />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

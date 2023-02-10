import React from 'react';
import SwitchDark from './SwitchDark'; 
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <div>
          <h1 className={styles.title}>QR Massive Generator</h1>
          <small className='name'>by Facundo Vergara</small>
        </div>

        <SwitchDark className={styles.icon} />
      </nav>
    </header>
  );
};

export default Navbar;

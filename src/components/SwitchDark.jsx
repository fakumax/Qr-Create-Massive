import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const SwitchDark = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={120}
    />
  );
};

export default SwitchDark;

/* eslint-disable react/prop-types */
import { useState } from 'react';

import ThemeContext from './ThemeContext';

function ThemeState(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((mode) => (mode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode: theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeState;

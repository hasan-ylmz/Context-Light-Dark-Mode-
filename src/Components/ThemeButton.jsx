import React, { useState } from 'react';
import "../index.css";
import useTheme from '../contexts/theme';

function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  const onChangeBtn = () => {
    setDarkMode(prevDarkMode => !prevDarkMode); 
    darkMode ? lightTheme() : darkTheme(); 
  };

  return (
    <button type="button" className="mb-10" onClick={onChangeBtn}>
      Change Theme
    </button>
  );
}

export default ThemeButton;

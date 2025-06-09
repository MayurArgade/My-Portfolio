import React from 'react';
import './styles/themeToggle.css'; // move inline styles here

const ThemeToggle = ({ toggleTheme, dark }) => {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;
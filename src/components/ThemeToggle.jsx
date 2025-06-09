import React from 'react';

const ThemeToggle = ({ toggleTheme, dark }) => {
  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '15px',
        right: '20px',
        background: 'none',
        border: '1px solid #aaa',
        padding: '8px 14px',
        borderRadius: '20px',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;

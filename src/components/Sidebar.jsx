import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide after leaving Hero section (~90% of screen height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`floating-sidebar ${visible ? 'visible' : 'hidden'}`}>
      <a href="https://github.com/mayurargade" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/mayur-argade-031b71271" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="mailto:mayurargade423@gmail.com"><FaEnvelope /></a>
    </div>
  );
};

export default Sidebar;

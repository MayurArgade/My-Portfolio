import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="floating-sidebar">
      <a href="https://github.com/mayurargade" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com/in/mayurargade" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="mailto:mayurargade423@gmail.com"><FaEnvelope /></a>
    </div>
  );
};

export default Sidebar;

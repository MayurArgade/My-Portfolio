import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <ul>
        {['hero', 'about', 'projects', 'skills', 'contact'].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'nav-active' : ''}
            >
              {id.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

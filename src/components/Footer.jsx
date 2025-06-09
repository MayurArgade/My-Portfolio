import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center text-sm text-gray-500 border-t border-gray-200">
      <p>
        © 2025 <span className="font-medium text-gray-700">Mayur Argade</span> &middot; Built with 💻 + ☕
      </p>
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-9 right-9 p-5 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all text-gray-700"
>
  ↑
</button>

    </footer>
  );
};

export default Footer;

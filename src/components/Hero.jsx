// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['Full Stack Developer', 'Anime Otaku', 'Tech Enthusiast'];

const Hero = ({ darkMode }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
  className="hero-section min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <div className="max-w-3xl w-full">
        <h1 className={`text-4xl md:text-6xl font-semibold tracking-tight leading-tight`}>
          こんにちは、<span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>私は Mayur</span> です。
        </h1>
       <h1 className={`text-2l md:text-2l font-mid tracking-tight leading-tight`}>
          I build animated <span className={darkMode ? 'text-gray-300' : 'text-gray-400'}>scroll-triggered landing pages using React + Gsap</span> that make your brand look premium.
        </h1>
        <p className={`mt-6 text-xl md:text-2xl min-h-[2.5rem] transition-all ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {words[index]}
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#projects"
          className={`
            mt-10 inline-block px-6 py-3 border rounded-full transition-all duration-300
            ${darkMode
              ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900'
              : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'}
          `}
        >
          View My Projects
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;

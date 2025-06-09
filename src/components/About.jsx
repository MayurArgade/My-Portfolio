import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper delay={0.1}>
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <p>
          こんにちは！僕は <strong>Mayur Argade</strong> です 🇯🇵 <br /><p>趣味：アニメ、コードを書く、テクノロジーを学ぶ。</p><br />
          I'm a passionate Full Stack Developer from Mumbai. I specialize in responsive UIs,
          ReactJS, and clean frontend work. I'm inspired by anime, Japanese aesthetics, and American tech.
          I'm currently studying BSc IT and planning my Master's in cybersecurity.
        </p>
      </section>
    </SectionWrapper>
  );
};

export default About;

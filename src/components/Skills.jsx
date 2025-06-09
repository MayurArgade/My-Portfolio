import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiPython,
  SiMysql, SiGit
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import SectionWrapper from './SectionWrapper';

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "ReactJS", icon: <SiReact /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <DiJava /> },           // ✅ fixed
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git/GitHub", icon: <SiGit /> }
];


const Skills = () => {
  return (
    <SectionWrapper delay={0.3}>
      <section id="skills">
        <h2 className="section-title">スキル / Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Skills;

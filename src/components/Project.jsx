import React from 'react';

const projects = [
  {
    title: "Gemini AI Clone",
    tech: "ReactJS, CSS",
    link: "https://mayurargade.github.io/Geminiclone/",
  },
  {
    title: "Wallpaper App (API)",
    tech: "HTML, CSS, JS",
    link: "https://wallpaper-app-dun.vercel.app/",
  },
  {
    title: "To-Do List App",
    tech: "HTML, CSS, JS",
    link: "https://mayurargade.github.io/To-Do-List/",
  },
  {
    title: "Responsive Website",
    tech: "Bootstrap",
    link: "https://mayurargade.github.io/bootstrap-/",
  },
  {
    title: "E-Commerce Website",
    tech: "HTML, CSS, JS",
    link: "https://mayurargade.github.io/multi-page-website-/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 style={{ fontSize: '2rem' }}>Projects</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects.map((project, i) => (
          <li key={i} style={{ margin: '15px 0' }}>
            <div className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <strong>{project.title}</strong> — <span>{project.tech}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

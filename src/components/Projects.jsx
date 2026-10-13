function Projects() {
  const myProjects = [
    {
      id: '01',
      title: 'Extra Hours',
      description: 'A team effort cafe-based retail website built with React, and MongoDB.',
      tags: ['React', 'MongoDB'],
      link: 'https://github.com/KARUUUUUU/Finals_Website-register-popup-main',
    },
    {
      id: '02',
      title: 'Hydro-Scout',
      icon: 'station',
      description:
        'A team-built centralized GIS with spatial decision support for optimizing firefighter response time through hydrant status monitoring and Haversine-based water resource mapping.',
      tags: ['Thesis', 'React', 'QA', 'Firebase', 'Cloudinary'],
      link: 'https://hivemind-hydro-scout.vercel.app/',
    },
    {
      id: '03',
      title: 'Automated POS Testing',
      description: 'Web automation scripts for a Point of Sale system using Selenium.',
      tags: ['JavaScript', 'Selenium', 'QA'],
      link: 'https://github.com/KARUUUUUU/Cafe_Baruda_Copy',
    },
    {
      id: '04',
      title: 'TARA! Design Prototype',
      description: "Visual Design of a startup travel app's overall branding and UI/UX using Figma.",
      tags: ['Design', 'Figma', 'Branding'],
      link: 'https://www.figma.com/proto/NHUgftrrFL7xoOnB9IIcsz/Tara-Prototype-Design?node-id=0-1&t=9Y0vpnN1PmMS80o0-1',
    },
  ];

  return (
    <section id="projects" className="editorial-section projects-section">
      <div className="section-label">
        <span>Selected Work</span>
        <strong>Featured Projects</strong>
      </div>

      <div className="projects-heading">
        <h2>Projects with development, testing, and design in the same frame.</h2>
        <a href="/archive">More Projects</a>
      </div>

      <div className="project-list">
        {myProjects.map((project) => (
          <article key={project.id} className="project-row">
            <span className="project-index">{project.id}</span>
            <div>
              <h3 className={project.icon === 'station' ? 'project-title with-station-mark' : 'project-title'}>
                {project.icon === 'station' && (
                  <span className="station-mark" aria-hidden="true">
                    <svg viewBox="0 0 48 48" role="img">
                      <path d="M8 21L24 10l16 11v21H8V21Z" />
                      <path d="M17 42V27h14v15" />
                      <path d="M19 31h10M19 36h10" />
                      <path d="M14 23h6M28 23h6" />
                      <path d="M20 15h8" />
                      <path d="M24 5v5" />
                    </svg>
                  </span>
                )}
                {project.title}
              </h3>
              <p>{project.description}</p>
            </div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

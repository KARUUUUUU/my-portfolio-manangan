import ButtonOrbit from './ButtonOrbit';
function Projects() {
  const myProjects = [
    {
      id: '01',
      title: 'Hydro-Scout Wireframe Prototype',
      description: 'A Figma wireframe prototype exploring the layout and user flow of Hydro-Scout.',
      tags: ['Figma', 'Wireframing', 'UI/UX', 'Hivemind'],
      link: 'https://www.figma.com/proto/rbhEArgc9AMs52ZR3JM22l/Hydro-Scout-Prototype?node-id=10-2&p=f&t=GxesLKQ0CoQ5KVc3-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A2',
    },
    {
      id: '02',
      title: 'Hydro-Scout',
      icon: 'station',
      description:
        'A team-built centralized GIS with spatial decision support for optimizing firefighter response time through hydrant status monitoring and Haversine-based water resource mapping.',
      tags: ['Thesis', 'React', 'QA', 'Firebase', 'Cloudinary', 'Hivemind'],
      link: 'https://hivemind-hydro-scout.vercel.app/',
    },
    {
      id: '03',
      title: 'Petshoppe',
      description: 'A fullstack e-commerce website for a pet shop, developed by Hivemind, the same team behind Hydro-Scout.',
      tags: ['Fullstack', 'E-commerce', 'Hivemind'],
      link: 'https://petshoppee.vercel.app/',
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
        <a className="has-button-orbit" href="/archive"><ButtonOrbit />More Projects</a>
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
            <a className="has-button-orbit" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}><ButtonOrbit />
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

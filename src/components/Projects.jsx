// src/components/Projects.jsx
function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Mobile Event Booking App",
      description: "A scrum-based project focused on seamless event discovery and booking.",
      tags: ["React Native", "Firebase", "Scrum"],
    },
    {
      id: 2,
      title: "Automated POS Testing",
      description: "Web automation scripts for a Point of Sale system using Selenium.",
      tags: ["JavaScript", "Selenium", "QA"],
    },
    {
      id: 3,
      title: "Y2K Fashion Graphics",
      description: "Visual design and branding for an upcycled garment collection.",
      tags: ["Design", "Y2K Aesthetic", "Branding"],
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24 md:px-12 border-t border-zinc-900">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
        <div className="w-1 h-12 bg-red-600"></div> {/* The vertical line from the image */}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div key={project.id} className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold bg-zinc-800/50 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            <a href="#" className="text-white text-xs font-bold uppercase tracking-widest border-b border-red-600 pb-1 hover:text-red-500 transition-colors duration-300">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
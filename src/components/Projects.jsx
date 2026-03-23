// src/components/Projects.jsx

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Extra Hours",
      description: "A team effort cafe-based retail website built with React, and MongoDB.",
      tags: ["React", "MongoDB"],
      link: "https://github.com/KARUUUUUU/Finals_Website-register-popup-main" // Add link here when ready
    },
    {
      id: 2,
      title: "Automated POS Testing",
      description: "Web automation scripts for a Point of Sale system using Selenium.",
      tags: ["JavaScript", "Selenium", "QA"],
      link: "https://github.com/KARUUUUUU/Cafe_Baruda_Copy" 
    },
    {
      id: 3,
      title: "TARA! Design Prototype",
      description: "Visual Design of a startup travel app's overall branding and UI/UX using Figma.",
      tags: ["Design", "Figma", "Branding"],
      /* UPDATED FIGMA LINK BELOW */
      link: "https://www.figma.com/proto/NHUgftrrFL7xoOnB9IIcsz/Tara-Prototype-Design?node-id=0-1&t=9Y0vpnN1PmMS80o0-1" 
    }
  ];

  return (
    <section id="projects" className="max-w-[1440px] mx-auto px-6 py-24 md:px-12 border-t border-zinc-900">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter text-white">Featured Projects</h2>
        <div className="w-1 h-12 bg-[#ff0a54] shadow-[0_0_15px_rgba(255,10,84,0.5)]"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-zinc-900/40 rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 border border-zinc-800 hover:border-transparent flex flex-col"
          >
            
            {/* Gradient Background (Visible on Hover) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff0a54] to-[#ff7b00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            
            {/* Content Layer */}
            <div className="relative z-10 p-8 h-full flex flex-col flex-grow">
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-500 group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-300">
                {project.description}
              </p>
              
              {/* Bottom Link Area */}
              <div className="mt-auto">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest group/link"
                >
                  <span className="border-b border-[#ff0a54] group-hover:border-white pb-1 transition-colors">
                    View Project
                  </span>
                  <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Subtle Outer Glow */}
            <div className="absolute inset-0 bg-[#ff0a54]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
      <a 
        href="/archive" 
        className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300"
      >
        <span className="text-sm font-bold uppercase tracking-[0.3em] border-b border-zinc-800 group-hover:border-[#ff0a54] pb-1">
          More Projects
        </span>
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
      </a>
    </div>
    </section>
  );
}

export default Projects;
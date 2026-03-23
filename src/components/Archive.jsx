import { useNavigate } from 'react-router-dom';

function Archive() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Programming",
      subtitle: "Development & Logic",
      description: "Full-stack applications, Selenium automation scripts, and technical documentation.",
      icon: "code",
      tags: ["React", "Node.js", "Selenium", "Python"],
      // Feature Added: Link to GitHub
      link: "https://github.com/KARUUUUUU?tab=repositories" 
    },
    {
      id: 2,
      title: "Non-Programming",
      subtitle: "Design & Creatives, Documentation",
      description: "UI/UX Case studies, brand identity designs, and photography projects.",
      icon: "palette",
      tags: ["Figma", "Documentation"],
      // Feature Added: Link to Google Drive
      link: "https://drive.google.com/drive/folders/1ZHVLu4jwa3iRRD5qn7F9GCo3wfkjPfxC?usp=sharing" 
    }
  ];

  // Helper function to handle external vs internal navigation
  const handleNavigation = (item) => {
    if (item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-[#ff0a54] selection:text-white pb-24">
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-all font-medium text-sm"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
          </button>
          <h1 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500">Project Archive</h1>
        </div>
      </nav>

      {/* Hero Section of Archive */}
      <br />
      <br />
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-16">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0a54] to-[#ff7b00]">Vault.</span>
          </h2>
          <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
            A comprehensive collection of my technical builds and creative explorations throughout my 4-year journey at CIIT.
          </p>
          <div className="mt-8 w-1 h-16 bg-gradient-to-b from-[#ff0a54] to-transparent"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => handleNavigation(cat)}
              className="group relative bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#ff0a54]/50 hover:-translate-y-2 flex flex-col"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff0a54]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl group-hover:border-[#ff0a54] transition-colors shadow-xl">
                    {cat.icon === "code" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff0a54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff7b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656L15 13" />
                      </svg>
                    )}
                  </div>
                  {/* Updated Text to reflect external redirect */}
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-white transition-colors">
                    Leave Site ↗
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-[#ff0a54] text-xs font-bold uppercase tracking-widest mb-4 opacity-80">{cat.subtitle}</p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
                  {cat.description}
                </p>

                {/* Directory Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800/50 group-hover:border-[#ff0a54]/20 transition-colors">
                  {cat.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-tighter text-zinc-600 px-2 py-1 bg-zinc-950/50 rounded-md border border-zinc-900 group-hover:text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Red-to-Orange Bar at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ff0a54] to-[#ff7b00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Archive;
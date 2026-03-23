import ProfileImg from '../assets/profile_image.png';

function Hero() {
  const techStack = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];

  return (
    <section id="home" className="relative w-full min-h-screen bg-zinc-950 px-4 md:px-8 py-24 flex flex-col justify-center">
      
      {/* Navbar - Fixed to top */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-900 px-6 md:px-10 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter text-white">Karl Andrei M. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Manangan</span></h1>
          <div className="hidden md:flex gap-8 md:gap-10 text-sm font-medium text-zinc-400">
            {['Home', 'About', 'Projects', 'Contacts'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-[10px] font-bold">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-16 md:pt-24">
        
        {/* Left Side: Text */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-zinc-500 mb-2 text-sm md:text-base font-medium">Hello, I'm</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="border-b-4 border-red-600">Karl Andrei</span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            4th Year Computer Science Student
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/Manangan_Certifications.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 hover:scale-105 text-white rounded font-bold transition-all duration-300 flex items-center justify-center shadow-lg shadow-red-500/20"
            >
              Certificates
            </a>
            <a 
              href="/Manangan_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 hover:scale-105 text-white rounded font-bold transition-all duration-300 flex items-center justify-center shadow-lg shadow-red-500/20"
            >
              My resume
            </a>
          </div>
        </div>

        {/* Right Side: 3D Flipping Card */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end perspective-1000">
          <div className="relative w-full max-w-[350px] md:max-w-[400px] aspect-square transition-transform duration-700 preserve-3d group cursor-pointer hover:[transform:rotateY(180deg)]">
            
            {/* FRONT SIDE */}
            <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-[2px] bg-gradient-to-br from-red-500 via-rose-500 to-orange-500 shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-950">
                <img 
                  src={ProfileImg} 
                  alt="Profile" 
                  className="w-full h-full object-cover object-center transform scale-105" 
                />
              </div>
            </div>

            {/* BACK SIDE - UPDATED TO MATCH BUTTON GRADIENT */}
            <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-red-500 via-rose-500 to-orange-500 p-8 flex flex-col justify-center items-start shadow-2xl overflow-hidden">
              {/* Decorative light flare */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
              
              <div className="relative z-10 space-y-6 text-left">
                <div>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Education</p>
                  <h4 className="text-white font-bold text-xl leading-tight">CIIT College of Arts and Technology</h4>
                  <p className="text-white/80 text-sm">BS Computer Science (4th Year)</p>
                </div>

                <div>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Location</p>
                  <h4 className="text-white font-bold text-xl">Caloocan City, PH</h4>
                </div>

                <div>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Current Focus</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['React', 'Selenium', 'UI/UX'].map(item => (
                      <span key={item} className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-[10px] text-white font-black uppercase tracking-widest">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Bottom accent glass bar */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Footer */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-10 border-t border-zinc-900">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-70">
          {techStack.map(skill => (
            <span key={skill} className="text-[15px] font-black tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
// src/components/Hero.jsx
import ProfileImg from '../assets/profile_image.png'; // Assuming you named it this

function Hero() {
  const techStack = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];

  return (
    <section className="relative px-6 py-12 md:px-12 md:py-16 xl:py-24">
      {/* 1. The Header/Navbar (Jensen Omega) */}
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between py-6 mb-12 border-b border-zinc-800">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Jensen Omega
        </h1>
        
        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-10 text-zinc-400 text-sm font-medium">
          {['Home', 'About', 'Projects', 'Contacts'].map(item => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Icon (Placeholder, visible only on small screens) */}
        <button className="md:hidden text-zinc-400 p-2 border border-zinc-800 rounded">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* 2. The Hero Content Block */}
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-[1fr,minmax(300px,450px)] items-center gap-x-16 gap-y-12">
        
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col items-start space-y-4 md:space-y-6">
          <p className="text-zinc-500 font-medium">Hello.</p>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-200">
            I'm <span className="border-b-2 border-zinc-200 pb-1">Jensen</span>
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
            Software Developer
          </h2>
          
          <div className="flex gap-4 pt-6">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-500 rounded-md font-semibold text-white transition-all text-sm md:text-base">
              Got a project?
            </button>
            <button className="px-8 py-3 border border-zinc-700 hover:border-zinc-500 rounded-md font-semibold text-zinc-300 transition-all text-sm md:text-base">
              My resume
            </button>
          </div>
        </div>

        {/* Right Column: The Portrait and Accent Circles */}
        <div className="relative aspect-square flex items-center justify-center p-6 bg-zinc-900 rounded-3xl group">
          
          {/* Accent red circles in background (using group-hover for a subtle animation) */}
          <div className="absolute inset-0 rounded-3xl border border-red-900 scale-100 group-hover:scale-110 transition-transform duration-500 opacity-20"></div>
          <div className="absolute inset-0 rounded-3xl border border-red-900 scale-90 group-hover:scale-105 transition-transform duration-500 delay-75 opacity-20"></div>
          
          {/* Main Image */}
          <img 
            src={ProfileImg} 
            alt="Jensen Omega Portrait" 
            className="w-full h-full object-cover rounded-2xl z-10"
          />
        </div>
      </div>

      {/* 3. The Tech Stack/Skills list (Lower section) */}
      <div className="max-w-[1440px] mx-auto mt-24 pt-10 border-t border-zinc-800">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:flex md:flex-wrap md:justify-center gap-6 md:gap-x-12 md:gap-y-6 text-sm text-zinc-600 font-medium tracking-wide uppercase">
          {techStack.map(skill => (
            <span key={skill} className="px-3 py-1 bg-zinc-900 md:bg-transparent rounded-md flex items-center justify-center">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
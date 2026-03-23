// src/components/Hero.jsx
import ProfileImg from '../assets/profile_image.png';

function Hero() {
  const techStack = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];

  return (
    <section id="home" className="relative w-full min-h-screen bg-zinc-950 px-4 md:px-8 py-24 flex flex-col justify-center">
      
      {/* Navbar - Fixed to top */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-900 px-6 md:px-10 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter">Jensen Omega</h1>
          <div className="hidden md:flex gap-8 md:gap-10 text-sm font-medium text-zinc-400">
            {['Home', 'About', 'Projects', 'Contacts'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-zinc-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container: Split Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-16 md:pt-24">
        
        {/* Left Side: Text */}
        <div className="order-2 md:order-1 flex flex-col items-start">
          <p className="text-zinc-500 mb-2 text-sm md:text-base">Hello, I'm</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="border-b-4 border-red-600">Jensen</span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 md:mb-8">
            Software Developer
          </h3>
          
          <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
            I build digital experiences that are fast, accessible, and visually appealing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded font-bold transition-all duration-300 transform hover:-translate-y-1">
              Got a project?
            </button>
            <button className="px-6 py-3 border border-zinc-700 hover:bg-zinc-800 text-white rounded font-bold transition-all duration-300">
              My resume
            </button>
          </div>
        </div>

        {/* Right Side: Image with size constraints */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[350px] md:max-w-[400px] aspect-square bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img 
              src={ProfileImg} 
              alt="Profile" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
            />
            {/* Red accent circles */}
            <div className="absolute inset-0 border-[20px] border-red-600/10 rounded-full scale-110 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Skills Footer */}
      <div className="max-w-7xl mx-auto w-full mt-16 md:mt-20 pt-10 border-t border-zinc-900">
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 opacity-70">
          {techStack.map(skill => (
            <span key={skill} className="text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
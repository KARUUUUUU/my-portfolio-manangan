// src/components/About.jsx
function About() {
  const services = [
    { id: 1, title: "Frontend Development", icon: "🌐" },
    { id: 2, title: "Automated Testing", icon: "📱" },
    { id: 3, title: "UI/UX Design", icon: "🎨" },
  ];

  return (
    // CRITICAL FIX: Added id="about" here
    <section id="about" className="relative max-w-[1440px] mx-auto px-6 py-32 md:px-12 grid md:grid-cols-2 gap-16 items-start overflow-hidden">
      
      {/* Decorative Background Glow (Optional - adds depth) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff0a54]/5 blur-[120px] -z-10"></div>

      {/* Left Side: Services List */}
      <div className="space-y-10 border-l-2 border-zinc-900 pl-8 relative">
        {/* Vertical Accent Line - Swapped purple for red */}
        <div className="absolute left-[-2px] top-0 w-[2px] h-20 bg-gradient-to-b from-[#ff0a54] to-transparent"></div>
        
        {services.map((service) => (
          <div key={service.id} className="group flex items-center gap-6 cursor-default">
            {/* Service Icon Border - Swapped purple for red/50 */}
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-900/50 border border-zinc-800 group-hover:border-[#ff0a54]/50 group-hover:bg-zinc-900 transition-all duration-500 text-2xl shadow-xl">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight text-zinc-500 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              {/* Animated Underline - Swapped purple for red */}
              <div className="w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-[#ff0a54] to-transparent transition-all duration-500 mt-1"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side: Bio and Stats */}
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl font-black text-white tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0a54] to-[#ff7b00]">Me</span>
          </h2>
          
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg max-w-xl">
            <p>
              A <span className="text-white font-bold italic">4th-year Computer Science student</span> at 
              <span className="text-white font-semibold"> CIIT College of Arts and Technology</span>, 
              I am a versatile Front-end Developer and QA Specialist dedicated to building 
              high-performance, user-centric digital solutions. 
            </p>
            
            <p>
              I specialize in crafting seamless interfaces with <span className="text-[#ff0a54] font-bold">React</span> and 
              ensuring rock-solid reliability through automated testing with <span className="text-[#ff7b00] font-bold">Selenium</span>. 
              With experience as a Product Owner and a sharp eye for design in 
              <span className="text-white font-medium underline decoration-[#ff0a54]/30"> Figma</span>, I ensure technical excellence 
              aligns perfectly with product strategy.
            </p>
          </div>
        </div>

        {/* Action Call for the Bio section */}
        <div className="pt-4">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 border-b border-zinc-800 pb-2">
              Currently open to Internship 2026
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
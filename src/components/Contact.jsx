// src/components/Contact.jsx
function Contact() {
  return (
    <footer id="contacts" className="relative max-w-[1440px] mx-auto px-6 py-24 md:px-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-12 overflow-hidden">
      
      {/* Subtle Background Glow - Switched to Red */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/5 blur-[120px] -z-10"></div>

      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-black text-white tracking-tighter">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Connect.</span>
        </h2>
        <p className="text-zinc-500 text-sm font-medium max-w-xs tracking-wide">
          Currently seeking <span className="text-zinc-300">Internship 2026</span> opportunities and creative collaborations.
        </p>
      </div>

      {/* Social Links with hover effects */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-10">
        {[
          { name: 'GitHub', url: 'https://github.com/KARUUUUUU' },
          { name: 'Instagram', url: 'https://instagram.com/kairunaught._' },
          { name: 'Email', url: 'mailto:k.a.manangann@gmail.com' }
        ].map((link) => (
          <a 
            key={link.name}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all duration-300"
          >
            {link.name}
            {/* Switched underline to Red */}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center md:items-end gap-2">
        <p className="text-zinc-600 text-[9px] font-black tracking-[0.4em] uppercase text-right">
          © 2026 Karl Andrei M. Manangan <br />
          <span className="normal-case tracking-normal opacity-50 font-medium">CIIT Student Portfolio</span>
        </p>
        {/* Switched bar to Red-to-Orange gradient */}
        <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
      </div>
    </footer>
  );
}

export default Contact;
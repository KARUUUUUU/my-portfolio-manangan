function Contact() {
  return (
    <footer className="max-w-[1440px] mx-auto px-6 py-20 md:px-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-white">Let's connect</h2>
        <p className="text-zinc-500 text-sm">Open for internship opportunities and collaborations.</p>
      </div>

      <div className="flex gap-6">
        {/* Replace '#' with your actual social links */}
        <a href="https://github.com/karlmanangan" target="_blank" className="text-zinc-400 hover:text-white transition-colors font-medium hover:scale-110 duration-300">GitHub</a>
        <a href="https://instagram.com/Kairunaught" target="_blank" className="text-zinc-400 hover:text-white transition-colors font-medium hover:scale-110 duration-300">Instagram</a>
        <a href="mailto:your-email@example.com" className="text-zinc-400 hover:text-white transition-colors font-medium hover:scale-110 duration-300">Email</a>
      </div>

      <p className="text-zinc-600 text-xs tracking-widest uppercase">
        © 2026 Jensen Omega
      </p>
    </footer>
  );
}

export default Contact;
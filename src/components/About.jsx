// src/components/About.jsx
function About() {
  const services = [
    { id: 1, title: "Website Development", icon: "🌐" },
    { id: 2, title: "App Development", icon: "📱" },
    { id: 3, title: "Website Hosting", icon: "☁️" },
  ];

  const stats = [
    { label: "Completed Projects", value: "120 +" },
    { label: "Client satisfaction", value: "95 %" },
    { label: "Years of experience", value: "10 +" },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20 md:px-12 grid md:grid-cols-2 gap-16 items-start">
      
      {/* Left Side: Services List */}
      <div className="space-y-8 border-l border-zinc-800 pl-6">
        {services.map((service) => (
          <div key={service.id} className="group flex items-center gap-6 cursor-default">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-red-600 transition-colors text-xl">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Right Side: Bio and Stats */}
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white tracking-tight">About me</h2>
          <p className="text-zinc-400 leading-relaxed text-lg max-w-xl">
            I started my software journey from photography. Through that, I learned to 
            love the process of creating from scratch. Since then, this has led me to 
            software development as it fulfills my love for learning and building things.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-900">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
              <p className="text-xs md:text-sm uppercase tracking-widest text-zinc-500 font-bold leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
import ProfileImg from '../assets/profile_image.png';

function Hero() {
  const services = ['Frontend Development', 'Automated Testing', 'UI/UX Design'];
  const techStack = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];
  const socials = [
    { label: 'GH', href: 'https://github.com/KARUUUUUU' },
    { label: 'IG', href: 'https://instagram.com/kairunaught._' },
    { label: 'IN', href: 'https://www.linkedin.com/' },
  ];

  return (
    <section id="home" className="portfolio-hero">
      <nav className="hero-nav" aria-label="Primary navigation">
        <div className="hero-logo">
          <img src="/Kairunaughtrans.png" alt="Kairunaught" />
        </div>

        <div>
          <span>Based in</span>
          <strong>Caloocan City, PH</strong>
        </div>

        <div className="hero-menu">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contacts">Contact</a>
        </div>
      </nav>

      <div className="hero-stage">
        <div className="hero-copy">
          <p className="hero-kicker">Hello, I'm</p>
          <h1 aria-label="Karl Andrei Manangan">
            <span>Karl</span>
            <span>Andrei</span>
            <span>Manangan</span>
          </h1>
          <p className="hero-summary">
            5th Year Computer Science Student bringing interfaces, testing, and product ideas to life with React,
            Selenium, and UI/UX design.
          </p>
        </div>

        <div className="hero-portrait" aria-hidden="true">
          <img src={ProfileImg} alt="" />
        </div>

        <aside className="hero-services" aria-label="Services">
          <span>Services</span>
          {services.map((service) => (
            <a key={service} href="#about">
              {service}
            </a>
          ))}
        </aside>
      </div>

      <div className="hero-bottom">
        <div className="hero-socials" aria-label="Social links">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </div>

        <div className="hero-stack" aria-label="Technology stack">
          {techStack.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a href="/Manangan_Certifications.pdf" target="_blank" rel="noopener noreferrer">
            Certificates
          </a>
          <a href="/Manangan_Resume.pdf" target="_blank" rel="noopener noreferrer">
            My resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

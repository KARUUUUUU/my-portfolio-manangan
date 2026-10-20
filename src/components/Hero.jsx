import ButtonOrbit from './ButtonOrbit';
import ProfileImg from '../assets/profile_image.png';
import RocketLines from './RocketLines';

function Hero() {
  const techStack = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];
  const socials = [
    { label: 'GitHub', href: 'https://github.com/KARUUUUUU', icon: '/github-logo.png' },
    { label: 'Instagram', href: 'https://instagram.com/kairunaught._', icon: '/instagram.png' },
    { label: 'Email', href: 'mailto:k.a.manangann@gmail.com', icon: '/mail.png' },
  ];

  return (
    <section id="home" className="portfolio-hero">
      <nav className="hero-nav" aria-label="Primary navigation">
        <div className="hero-logo">
          <img src="/Kairunaught.png" alt="Kairunaught" />
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
        <h1 className="hero-poster-title" aria-label="Karl Andrei Manangan">
          <span>Karl</span><span>Andrei</span><span>Manangan</span>
        </h1>
        <div className="hero-copy">
          <p className="hero-kicker"><span>Design. Develop. Discover.</span></p>
          <RocketLines />
          <p className="hero-summary">
            5th Year Computer Science Student bringing interfaces, testing, and product ideas to life with React,
            Selenium, and UI/UX design.
          </p>


        </div>

        <div className="hero-portrait" aria-hidden="true">
          <span className="hero-orbit">
            <span className="hero-orbit-planet">
              <span className="hero-moon-orbit hero-moon-orbit--inner"><span /></span>
              <span className="hero-moon-orbit hero-moon-orbit--outer"><span /></span>
            </span>
          </span>
          <span className="hero-orbit hero-orbit--inner">
            <span className="hero-orbit-planet hero-orbit-planet--inner">
              <span className="hero-moon-orbit hero-moon-orbit--single"><span /></span>
            </span>
          </span>
          <span className="hero-photo-label">FRONT-END DEVELOPER / UI/UX DESIGNER</span>
          <img src={ProfileImg} alt="" />

        </div>

      <div className="hero-bottom">
        <div className="hero-socials" aria-label="Social links">
          {socials.map((social) => (
            <a className="has-button-orbit" key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer"><ButtonOrbit />
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>

        <div className="hero-stack" aria-label="Technology stack">
          {techStack.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="has-button-orbit" href="/Manangan_Certifications.pdf" target="_blank" rel="noopener noreferrer"><ButtonOrbit />
            Certificates
          </a>
          <a className="has-button-orbit" href="/Manangan_Resume.pdf" target="_blank" rel="noopener noreferrer"><ButtonOrbit />
            My resume
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;

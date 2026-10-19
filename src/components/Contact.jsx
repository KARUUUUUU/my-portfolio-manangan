function Contact() {
  const links = [
    { name: 'GitHub', url: 'https://github.com/KARUUUUUU', icon: '/github-logo.png' },
    { name: 'Instagram', url: 'https://instagram.com/kairunaught._', icon: '/instagram.png' },
    { name: 'Email', url: 'mailto:k.a.manangann@gmail.com', icon: '/mail.png' },
  ];

  return (
    <footer id="contacts" className="contact-footer">
      <div className="contact-marquee" aria-hidden="true">
        Connect
      </div>

      <div className="contact-content">
        <div>
          <span>Contact</span>
          <h2>Let's Connect.</h2>
        </div>

        <div className="contact-links">
          {links.map((link) => (
            <a key={link.name} href={link.url} aria-label={link.name} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt="" />
              {link.name}
            </a>
          ))}
        </div>

        <p className="copyright">
          © 2026 Karl Andrei M. Manangan
          <span>CIIT Student Portfolio</span>
        </p>
      </div>
    </footer>
  );
}

export default Contact;

function Contact() {
  const links = [
    { name: 'GitHub', url: 'https://github.com/KARUUUUUU' },
    { name: 'Instagram', url: 'https://instagram.com/kairunaught._' },
    { name: 'Email', url: 'mailto:k.a.manangann@gmail.com' },
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
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
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

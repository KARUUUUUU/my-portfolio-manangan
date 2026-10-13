function About() {
  const services = [
    { id: '01', title: 'Frontend Development', detail: 'High-performance React interfaces with clear user flows.' },
    { id: '02', title: 'Automated Testing', detail: 'Selenium scripts and QA coverage for reliable releases.' },
    { id: '03', title: 'UI/UX Design', detail: 'Figma-led product thinking, branding, and interaction design.' },
  ];

  return (
    <section id="about" className="editorial-section about-section">
      <div className="section-label">
        <span>About</span>
        <strong>Karl Andrei M. Manangan</strong>
      </div>

      <div className="about-grid">
        <div className="about-lede">
          <h2>5th-year Computer Science student building useful digital products.</h2>
          <p>
            A 5th-year Computer Science student at CIIT College of Innovation and Integrated Technology, I am a versatile
            Front-end Developer and UI/UX Designer dedicated to building high-performance, user-centric
            digital solutions.
          </p>
          <p>
            I specialize in crafting seamless interfaces with React and ensuring rock-solid reliability
            through automated testing with Selenium. With experience as a Product Owner and a sharp eye
            for design in Figma, I ensure technical excellence aligns perfectly with product strategy.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article key={service.id} className="service-row">
              <span>{service.id}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </div>
            </article>
          ))}
          <div className="availability">Currently open to Part-Time Jobs</div>
        </div>
      </div>
    </section>
  );
}

export default About;

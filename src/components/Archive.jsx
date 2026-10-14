import { useNavigate } from 'react-router-dom';

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 18 18 6M8 6h10v10" />
  </svg>
);

const CodeMark = () => (
  <svg viewBox="0 0 72 72" aria-hidden="true">
    <path d="m27 20-16 16 16 16M45 20l16 16-16 16M41 12 31 60" />
  </svg>
);

const CreativeMark = () => (
  <svg viewBox="0 0 72 72" aria-hidden="true">
    <circle cx="36" cy="36" r="24" />
    <circle cx="36" cy="36" r="8" />
    <path d="M36 12v16M36 44v16M12 36h16M44 36h16" />
  </svg>
);

function Archive() {
  const navigate = useNavigate();

  const categories = [
    {
      id: '01',
      code: 'DEV.LOG',
      title: 'Programming',
      subtitle: 'Development & Logic',
      description: 'Full-stack applications, Selenium automation scripts, and technical documentation.',
      tags: ['React', 'Node.js', 'Selenium', 'Python'],
      link: 'https://github.com/KARUUUUUU?tab=repositories',
      cta: 'Explore repositories',
      className: 'archive-card--dark',
      mark: <CodeMark />,
    },
    {
      id: '02',
      code: 'ART.DIR',
      title: 'Non-Programming',
      subtitle: 'Design, Creatives & Documentation',
      description: 'UI/UX case studies, brand identity designs, documentation, and photography projects.',
      tags: ['Figma', 'Documentation', 'Photography'],
      link: 'https://drive.google.com/drive/folders/1ZHVLu4jwa3iRRD5qn7F9GCo3wfkjPfxC?usp=sharing',
      cta: 'Open creative archive',
      className: 'archive-card--paper',
      mark: <CreativeMark />,
    },
  ];

  return (
    <main className="archive-page">
      <nav className="archive-nav" aria-label="Archive navigation">
        <button onClick={() => navigate('/')}>
          <span aria-hidden="true">←</span> Back to Portfolio
        </button>
        <div className="archive-nav-mark" aria-hidden="true">KM</div>
        <span>Project Archive / Index</span>
      </nav>

      <section className="archive-hero">
        <div className="archive-hero-copy">
          <div className="archive-eyebrow">
            <span>Independent work</span>
            <span>CIIT project collection</span>
          </div>
          <h1>
            <span>The</span>
            <span>Vault<span className="archive-dot">.</span></span>
          </h1>
          <div className="archive-intro">
            <span className="archive-intro-index">[ A—Z ]</span>
            <p>
              A curated collection of technical builds and creative explorations from my five-year
              journey at CIIT—built, tested, designed, and documented.
            </p>
          </div>
        </div>

        <div className="archive-object" aria-hidden="true">
          <div className="archive-sheet archive-sheet--back">
            <span>Selected works</span>
            <strong>05 YEARS</strong>
          </div>
          <div className="archive-sheet archive-sheet--middle">
            <span>Creative / Code</span>
            <div className="archive-barcode" />
          </div>
          <div className="archive-sheet archive-sheet--front">
            <span>KM—001</span>
            <strong>ARCHIVE</strong>
            <div className="archive-disc"><span /></div>
            <small>Open file ↓</small>
          </div>
        </div>

        <div className="archive-stats" aria-label="Archive overview">
          <div><strong>05</strong><span>Years of<br />exploration</span></div>
          <div><strong>02</strong><span>Curated<br />collections</span></div>
          <div><strong>∞</strong><span>Room to<br />keep making</span></div>
        </div>
      </section>

      <section className="archive-collection" aria-labelledby="collection-title">
        <div className="archive-section-heading">
          <span>01 / Browse the archive</span>
          <h2 id="collection-title">Choose a collection</h2>
          <p>Two sides of the same practice: systems that work and stories that connect.</p>
        </div>

        <div className="archive-grid">
          {categories.map((category) => (
            <article key={category.id} className={`archive-card ${category.className}`}>
              <div className="archive-card-topline">
                <span>{category.id} / 02</span>
                <span>{category.code}</span>
              </div>

              <div className="archive-card-mark">{category.mark}</div>

              <div className="archive-card-copy">
                <p>{category.subtitle}</p>
                <h3>{category.title}</h3>
                <span>{category.description}</span>
              </div>

              <div className="archive-tags">
                {category.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <a href={category.link} target="_blank" rel="noreferrer">
                <span>{category.cta}</span>
                <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="archive-footer">
        <span>End of index</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>
      </footer>
    </main>
  );
}

export default Archive;

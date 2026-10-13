import { useNavigate } from 'react-router-dom';

function Archive() {
  const navigate = useNavigate();

  const categories = [
    {
      id: '01',
      title: 'Programming',
      subtitle: 'Development & Logic',
      description: 'Full-stack applications, Selenium automation scripts, and technical documentation.',
      tags: ['React', 'Node.js', 'Selenium', 'Python'],
      link: 'https://github.com/KARUUUUUU?tab=repositories',
    },
    {
      id: '02',
      title: 'Non-Programming',
      subtitle: 'Design & Creatives, Documentation',
      description: 'UI/UX Case studies, brand identity designs, and photography projects.',
      tags: ['Figma', 'Documentation'],
      link: 'https://drive.google.com/drive/folders/1ZHVLu4jwa3iRRD5qn7F9GCo3wfkjPfxC?usp=sharing',
    },
  ];

  const handleNavigation = (item) => {
    window.open(item.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="archive-page">
      <nav className="archive-nav">
        <button onClick={() => navigate('/')}>Back to Portfolio</button>
        <span>Project Archive</span>
      </nav>

      <section className="archive-hero">
        <div className="section-label">
          <span>The Vault</span>
          <strong>CIIT Project Collection</strong>
        </div>
        <h1>The Vault.</h1>
        <p>
          A comprehensive collection of my technical builds and creative explorations throughout my
          5-year journey at CIIT.
        </p>
      </section>

      <section className="archive-grid" aria-label="Archive categories">
        {categories.map((cat) => (
          <button key={cat.id} className="archive-card" onClick={() => handleNavigation(cat)}>
            <span className="archive-index">{cat.id}</span>
            <div>
              <p>{cat.subtitle}</p>
              <h2>{cat.title}</h2>
              <span>{cat.description}</span>
            </div>
            <div className="archive-tags">
              {cat.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <strong>Leave Site</strong>
          </button>
        ))}
      </section>
    </main>
  );
}

export default Archive;

const projects = [
  {
    name: 'Speedtest',
    type: 'Outil numérique',
    description: 'Mesurer la qualité d’une connexion en quelques secondes, avec une expérience claire et immédiate.',
    url: 'https://www.speedtest.net/fr',
    accent: 'coral', number: '01', status: 'En ligne',
  },
  {
    name: 'Kiwi House Sitters',
    type: 'Communauté',
    description: 'Mettre en relation propriétaires et gardiens de maison autour d’une communauté de confiance.',
    url: 'https://www.kiwihousesitters.co.nz/',
    accent: 'gold', number: '02', status: 'Actif',
  },
  {
    name: 'Voilà',
    type: 'Commerce local',
    description: 'Simplifier l’épicerie en ligne et rapprocher les produits du quotidien des foyers canadiens.',
    url: 'https://voila.ca/',
    accent: 'berry', number: '03', status: 'En ligne',
  },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function ProjectPreview({ accent, name }: { accent: string; name: string }) {
  return (
    <div className={`project-preview preview-${accent}`} aria-hidden="true">
      <div className="preview-browser">
        <div className="preview-bar"><i /><i /><i /></div>
        {accent === 'coral' && <div className="speed-art"><span className="speed-label">GO</span><span className="speed-ring" /></div>}
        {accent === 'gold' && <div className="kiwi-art"><span className="sun" /><span className="hill hill-back" /><span className="hill hill-front" /><b>Find your happy place.</b></div>}
        {accent === 'berry' && <div className="voila-art"><div className="voila-copy"><b>Voilà!</b><span>L’épicerie, simplement.</span></div><div className="grocery-bag">V</div></div>}
      </div>
      <span className="preview-name">{name}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Newida, accueil"><span className="brand-mark">N</span><span>Newida</span></a>
        <nav aria-label="Navigation principale">
          <a href="#projets">Projets</a><a href="#manifeste">Manifeste</a>
          <a className="nav-pill" href="mailto:bonjour@newida.studio">Nous écrire <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <p className="eyebrow"><span /> Notre terrain de jeu collectif</p>
        <h1>Des idées qui vivent.<em> Une maison pour les réunir.</em></h1>
        <p className="hero-copy">Nous imaginons, construisons et faisons grandir des produits utiles. Newida est la porte d’entrée vers tout ce que notre équipe crée.</p>
        <a className="primary-cta" href="#projets">Découvrir nos projets <span aria-hidden="true">↓</span></a>
        <div className="hero-meta" aria-label="Quelques chiffres">
          <div><strong>03</strong><span>projets à découvrir</span></div><div><strong>01</strong><span>équipe curieuse</span></div><div><strong>∞</strong><span>idées en mouvement</span></div>
        </div>
      </section>

      <section className="projects" id="projets">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Le portfolio</p><h2>Ce sur quoi<br />nous travaillons.</h2></div>
          <p>Une sélection de produits, services et terrains d’exploration — passés, présents et bientôt futurs.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline"><span>{project.number}</span><span className="status"><i /> {project.status}</span></div>
              <ProjectPreview accent={project.accent} name={project.name} />
              <div className="project-body">
                <p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noreferrer">Visiter le projet <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="manifeste">
        <p className="eyebrow eyebrow-light"><span /> Notre manière de faire</p>
        <div className="manifesto-grid">
          <h2>Petit groupe.<br /><em>Grand terrain.</em></h2>
          <div className="manifesto-copy"><p>Nous croyons aux équipes compactes, aux prototypes tangibles et aux idées qui gagnent leur place dans le quotidien.</p>
            <div className="principles"><span>01 — Faire simple</span><span>02 — Tester tôt</span><span>03 — Construire ensemble</span></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">Newida<span>✦</span></div><p>Le point de départ de nos prochaines idées.</p>
        <a href="mailto:bonjour@newida.studio">bonjour@newida.studio <Arrow /></a><small>© 2026 Newida — Montréal, QC</small>
      </footer>
    </main>
  );
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Newida, accueil"><span className="brand-mark">N</span><span>Newida</span></a>
        <nav aria-label="Navigation principale">
          <a href="#projets">Projets</a><a href="#manifeste">Manifeste</a>
          <a className="nav-pill" href="mailto:paul@newida.ca">Nous écrire <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <p className="eyebrow"><span /> Notre terrain de jeu</p>
        <h1>Des idées qui vivent.<em> Une maison pour les réunir.</em></h1>
        <p className="hero-copy">Nous imaginons, construisons et faisons grandir des produits utiles. Newida est la porte d’entrée vers tout ce que notre équipe crée.</p>
        <a className="primary-cta" href="#projets">Découvrir nos projets <span aria-hidden="true">↓</span></a>
        <div className="hero-meta" aria-label="Quelques chiffres">
          <div><strong>01</strong><span>projet en développement</span></div><div><strong>01</strong><span>équipe curieuse</span></div><div><strong>∞</strong><span>idées en mouvement</span></div>
        </div>
      </section>

      <section className="projects" id="projets">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Le portfolio</p><h2>Ce sur quoi<br />nous travaillons.</h2></div>
          <p>Une sélection de produits, services et terrains d’exploration — passés, présents et bientôt futurs.</p>
        </div>
        <div className="development-card">
          <span className="development-dot" aria-hidden="true" />
          <p>En cours de développement</p>
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
        <a href="mailto:paul@newida.ca">paul@newida.ca <Arrow /></a><small>© 2026 Newida — Montréal, QC</small>
      </footer>
    </main>
  );
}

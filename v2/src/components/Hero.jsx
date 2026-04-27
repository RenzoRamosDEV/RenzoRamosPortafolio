import { SCHEMES } from '../constants/schemes';

export function Hero({ scheme, onScrollTo }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];
  const gradText = `linear-gradient(135deg, ${s.a} 0%, ${s.b} 100%)`;
  const gradBtn = `linear-gradient(135deg, ${s.a}, ${s.b})`;

  return (
    <section className="hero" id="hero">
      <div
        className="hero-blob-1"
        style={{ background: `radial-gradient(circle, rgba(${s.aRgb},0.9), transparent)` }}
      />
      <div
        className="hero-blob-2"
        style={{ background: `radial-gradient(circle, rgba(${s.bRgb},0.8), transparent)` }}
      />
      <div className="hero-blob-3" />

      <div className="hero-pill fade-up fade-up-1">
        <div className="hero-pill-dot" style={{ background: s.a }} />
        <span className="hero-pill-text">Desarrollador Multiplataforma · Madrid</span>
      </div>

      <h1 className="hero-name fade-up fade-up-2">
        <span className="hero-name-line1">Renzo</span>
        <span className="hero-name-line2" style={{ backgroundImage: gradText }}>
          Ramos
        </span>
      </h1>

      <p className="hero-desc fade-up fade-up-3">
        Full Stack Developer en <em>SEIDOR</em>. Especializado en <em>Java</em>, <em>Spring Boot</em> y ecosistemas JVM.{' '}
        Construyendo software escalable e integrando <em>IA</em> en flujos reales de producción.
      </p>

      <div className="hero-actions fade-up fade-up-4">
        <a
          href="https://linkedin.com/in/renzo-ramos"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ textDecoration: 'none' }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:renzoramosivan@gmail.com"
          className="btn-secondary"
          style={{ textDecoration: 'none' }}
        >
          Correo
        </a>
        <a
          href="https://gitlab.com/renzo-ramos"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ textDecoration: 'none' }}
        >
          GitLab
        </a>
      </div>

    </section>
  );
}

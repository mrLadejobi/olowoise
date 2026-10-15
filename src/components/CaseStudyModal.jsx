import { useEffect } from 'react';

export default function CaseStudyModal({ project, onClose, onCommission }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(9, 9, 11, 0.96)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        zIndex: 2000,
        overflowY: 'auto',
        padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4rem)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--hairline)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem' }}>
            <span className="micro-meta" style={{ color: 'var(--accent-brass)' }}>
              [ MONOGRAPH // {project.index} ]
            </span>
            <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
              {project.discipline} &middot; {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="micro-meta"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-brass)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            [ CLOSE &times; ]
          </button>
        </div>

        {/* Monograph Title */}
        <h2
          className="font-editorial"
          style={{
            fontSize: 'clamp(3rem, 6vw, 5.2rem)',
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            marginBottom: '1rem'
          }}
        >
          {project.title}
        </h2>

        <div
          className="font-editorial-italic"
          style={{
            fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
            color: 'var(--accent-brass-light)',
            marginBottom: '3rem'
          }}
        >
          {project.tagline}
        </div>

        {/* High-Resolution Media Frame */}
        <div
          className="editorial-img-frame"
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            maxHeight: '640px',
            marginBottom: '3rem'
          }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="editorial-img"
          />
        </div>

        {/* Narrative & Specifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 0.9fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
            marginBottom: '4rem'
          }}
          className="monograph-details-grid"
        >
          {/* Left: Deep Storytelling Narrative */}
          <div>
            <span className="micro-meta" style={{ color: 'var(--accent-brass)', display: 'block', marginBottom: '1rem' }}>
              CURATORIAL OVERVIEW
            </span>
            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--text-primary)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '2rem'
              }}
            >
              {project.monograph.narrative}
            </p>

            <span className="micro-meta" style={{ color: 'var(--accent-brass)', display: 'block', marginBottom: '1rem' }}>
              COMMISSIONED DELIVERABLES
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {project.monograph.deliverables.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontSize: '0.98rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span style={{ color: 'var(--accent-brass)', fontSize: '0.8rem' }}>&sect;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Technical Metadata & Client Provenance */}
          <div
            style={{
              padding: '2rem',
              border: '1px solid var(--hairline)',
              background: 'rgba(238, 234, 227, 0.02)'
            }}
          >
            <div className="micro-meta" style={{ color: 'var(--accent-brass)', marginBottom: '1rem' }}>
              COMMISSION DOSSIER
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
              <div>
                <span className="micro-meta" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                  PATRON / CLIENT
                </span>
                <span style={{ fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                  {project.monograph.client}
                </span>
              </div>

              <div>
                <span className="micro-meta" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                  COMPLETION SOLAR CYCLE
                </span>
                <span style={{ fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                  {project.year} &middot; RELEASE
                </span>
              </div>
            </div>

            <div className="micro-meta" style={{ color: 'var(--accent-brass)', marginBottom: '1rem' }}>
              ARCHITECTURAL TELEMETRY
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {project.specs.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid var(--hairline)'
                  }}
                >
                  <span className="micro-meta" style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>
                    {s.label}
                  </span>
                  <span className="micro-meta" style={{ color: 'var(--text-primary)', fontSize: '0.65rem' }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--hairline)' }}>
              <button
                onClick={() => {
                  onClose();
                  onCommission();
                }}
                className="micro-meta"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  border: '1px solid var(--accent-brass)',
                  color: 'var(--accent-brass)',
                  textAlign: 'center',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-brass)';
                  e.currentTarget.style.color = 'var(--bg-obsidian)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--accent-brass)';
                }}
              >
                Inquire For Similar Mandate &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .monograph-details-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

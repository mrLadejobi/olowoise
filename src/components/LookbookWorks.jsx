import { projects } from '../data/projects';

export default function LookbookWorks({ onSelectProject }) {
  return (
    <section
      id="works"
      className="editorial-section"
      style={{
        borderBottom: '1px solid var(--hairline)',
        background: 'var(--bg-obsidian)'
      }}
    >
      <div className="lookbook-container">
        {/* Top Folio Line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--hairline)',
            marginBottom: 'clamp(4rem, 8vw, 7rem)'
          }}
        >
          <span className="micro-meta">[ 03 // CURATED MASTERWORKS ]</span>
          <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
            ARCHITECTURAL MONOGRAPHS ({projects.length})
          </span>
        </div>

        {/* Project Spreads Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(6rem, 12vw, 11rem)' }}>
          {projects.map((project, idx) => {
            if (project.layout === 'full-bleed' || project.layout === 'full-bleed-compact') {
              return (
                <article
                  key={project.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem'
                  }}
                >
                  {/* Full Bleed Image Frame */}
                  <div
                    className="editorial-img-frame"
                    style={{
                      width: '100%',
                      aspectRatio: '21 / 9',
                      maxHeight: '620px',
                      cursor: 'pointer'
                    }}
                    onClick={() => onSelectProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="editorial-img"
                    />
                  </div>

                  {/* Editorial Typographic Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1.2fr 1fr 0.8fr',
                      gap: 'clamp(2rem, 4vw, 4rem)',
                      alignItems: 'baseline',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--hairline)'
                    }}
                    className="project-spread-row"
                  >
                    <div>
                      <div
                        className="micro-meta"
                        style={{
                          color: 'var(--accent-brass)',
                          marginBottom: '0.6rem'
                        }}
                      >
                        [ {project.index} // {project.discipline} ] &middot; {project.year}
                      </div>
                      <h3
                        className="font-editorial"
                        style={{
                          fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                          lineHeight: 1.05,
                          marginBottom: '0.8rem',
                          letterSpacing: '-0.02em',
                          cursor: 'pointer'
                        }}
                        onClick={() => onSelectProject(project)}
                      >
                        {project.title}
                      </h3>
                      <div className="font-editorial-italic" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        {project.tagline}
                      </div>
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.7,
                          fontWeight: 300,
                          marginBottom: '1.5rem'
                        }}
                      >
                        {project.synopsis}
                      </p>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="micro-meta editorial-link"
                        style={{
                          color: 'var(--accent-brass)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.7rem'
                        }}
                      >
                        Inspect Monograph &amp; Case Study &rarr;
                      </button>
                    </div>

                    {/* Specs / Precision Telemetry */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {project.specs.map((spec) => (
                        <div
                          key={spec.label}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingBottom: '0.6rem',
                            borderBottom: '1px solid var(--hairline)'
                          }}
                        >
                          <span className="micro-meta" style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                            {spec.label}
                          </span>
                          <span
                            className="micro-meta"
                            style={{
                              fontSize: '0.65rem',
                              color: 'var(--text-primary)',
                              letterSpacing: '0.1em'
                            }}
                          >
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            }

            // Asymmetric Left (Image Left, Text Right)
            if (project.layout === 'asymmetric-left') {
              return (
                <article
                  key={project.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '0.9fr 1.1fr',
                    gap: 'clamp(3rem, 6vw, 7rem)',
                    alignItems: 'center'
                  }}
                  className="project-asymmetric-grid"
                >
                  <div
                    className="editorial-img-frame"
                    style={{
                      aspectRatio: '3 / 4',
                      maxHeight: '680px',
                      cursor: 'pointer'
                    }}
                    onClick={() => onSelectProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="editorial-img"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div
                      className="micro-meta"
                      style={{
                        color: 'var(--accent-brass)',
                        marginBottom: '1rem'
                      }}
                    >
                      [ {project.index} // {project.discipline} ] &middot; {project.year}
                    </div>

                    <h3
                      className="font-editorial"
                      style={{
                        fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
                        lineHeight: 1.05,
                        marginBottom: '1.2rem',
                        letterSpacing: '-0.02em',
                        cursor: 'pointer'
                      }}
                      onClick={() => onSelectProject(project)}
                    >
                      {project.title}
                    </h3>

                    <div
                      className="font-editorial-italic"
                      style={{
                        fontSize: '1.35rem',
                        color: 'var(--accent-brass-light)',
                        marginBottom: '1.8rem'
                      }}
                    >
                      {project.tagline}
                    </div>

                    <p
                      style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.75,
                        fontWeight: 300,
                        maxWidth: '52ch',
                        marginBottom: '2.5rem'
                      }}
                    >
                      {project.synopsis}
                    </p>

                    {/* Specs List */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        paddingTop: '1.5rem',
                        borderTop: '1px solid var(--hairline)',
                        marginBottom: '2.5rem'
                      }}
                    >
                      {project.specs.map((spec) => (
                        <div key={spec.label}>
                          <div
                            className="font-editorial"
                            style={{
                              fontSize: '1.8rem',
                              color: 'var(--text-primary)',
                              marginBottom: '0.2rem'
                            }}
                          >
                            {spec.value}
                          </div>
                          <div className="micro-meta" style={{ fontSize: '0.58rem', color: 'var(--text-muted)' }}>
                            {spec.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="micro-meta editorial-link"
                        style={{
                          color: 'var(--accent-brass)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          fontSize: '0.72rem'
                        }}
                      >
                        Inspect Full Atelier Monograph &rarr;
                      </button>
                    </div>
                  </div>
                </article>
              );
            }

            // Asymmetric Right (Text Left, Image Right)
            return (
              <article
                key={project.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 0.9fr',
                  gap: 'clamp(3rem, 6vw, 7rem)',
                  alignItems: 'center'
                }}
                className="project-asymmetric-grid"
              >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div
                    className="micro-meta"
                    style={{
                      color: 'var(--accent-brass)',
                      marginBottom: '1rem'
                    }}
                  >
                    [ {project.index} // {project.discipline} ] &middot; {project.year}
                  </div>

                  <h3
                    className="font-editorial"
                    style={{
                      fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
                      lineHeight: 1.05,
                      marginBottom: '1.2rem',
                      letterSpacing: '-0.02em',
                      cursor: 'pointer'
                    }}
                    onClick={() => onSelectProject(project)}
                  >
                    {project.title}
                  </h3>

                  <div
                    className="font-editorial-italic"
                    style={{
                      fontSize: '1.35rem',
                      color: 'var(--accent-brass-light)',
                      marginBottom: '1.8rem'
                    }}
                  >
                    {project.tagline}
                  </div>

                  <p
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      fontWeight: 300,
                      maxWidth: '52ch',
                      marginBottom: '2.5rem'
                    }}
                  >
                    {project.synopsis}
                  </p>

                  {/* Specs List */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '1.5rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--hairline)',
                      marginBottom: '2.5rem'
                    }}
                  >
                    {project.specs.map((spec) => (
                      <div key={spec.label}>
                        <div
                          className="font-editorial"
                          style={{
                            fontSize: '1.8rem',
                            color: 'var(--text-primary)',
                            marginBottom: '0.2rem'
                          }}
                        >
                          {spec.value}
                        </div>
                        <div className="micro-meta" style={{ fontSize: '0.58rem', color: 'var(--text-muted)' }}>
                          {spec.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="micro-meta editorial-link"
                      style={{
                        color: 'var(--accent-brass)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.72rem'
                      }}
                    >
                      Inspect Full Atelier Monograph &rarr;
                    </button>
                  </div>
                </div>

                <div
                  className="editorial-img-frame"
                  style={{
                    aspectRatio: '3 / 4',
                    maxHeight: '680px',
                    cursor: 'pointer'
                  }}
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="editorial-img"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .project-spread-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .project-asymmetric-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

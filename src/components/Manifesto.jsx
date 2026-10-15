import { creedTenets } from '../data/creed';

export default function Manifesto() {
  return (
    <section
      id="creed"
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
            marginBottom: 'clamp(3rem, 6vw, 5rem)'
          }}
        >
          <span className="micro-meta">[ 02 // PHILOSOPHICAL CANON ]</span>
          <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
            THE SOVEREIGN CREED
          </span>
        </div>

        {/* Two-Column Editorial Spread */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.35fr',
            gap: 'clamp(3rem, 8vw, 8rem)',
            alignItems: 'start'
          }}
          className="manifesto-grid"
        >
          {/* Sticky Left Column: Studio Manifesto */}
          <div style={{ position: 'sticky', top: '7rem' }}>
            <span
              className="micro-meta"
              style={{
                color: 'var(--accent-brass)',
                marginBottom: '1rem',
                display: 'block'
              }}
            >
              CANON &middot; ETHOS
            </span>

            <h2
              className="font-editorial"
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
                lineHeight: 1.05,
                marginBottom: '1.8rem',
                letterSpacing: '-0.02em'
              }}
            >
              The Architecture <br />
              <span className="font-editorial-italic" style={{ color: 'var(--accent-brass-light)' }}>
                of Composure.
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '42ch',
                fontWeight: 300
              }}
            >
              We reject disposable templates and mechanical assembly. Every digital artifact commissioned through our studio honors the three sacred tenets of Yoruba artisanship.
            </p>

            <div
              style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--hairline)'
              }}
            >
              <span className="micro-meta" style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                ATELIER POLICY // STRICT PURSUIT OF PERFECTION
              </span>
            </div>
          </div>

          {/* Right Column: The Three Sacred Tenets (Clean Editorial Monograph) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {creedTenets.map((tenet, idx) => (
              <div
                key={tenet.numeral}
                style={{
                  paddingTop: idx === 0 ? 0 : 'clamp(2.5rem, 5vw, 4rem)',
                  paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
                  borderBottom: idx === creedTenets.length - 1 ? 'none' : '1px solid var(--hairline)'
                }}
              >
                {/* Tenet Index & Term */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1.5rem',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: '1.2rem',
                      color: 'var(--accent-brass)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {tenet.numeral}.
                  </span>
                  <h3
                    className="font-editorial"
                    style={{
                      fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {tenet.yorubaTerm}
                  </h3>
                </div>

                {/* Subtitle / English Translation */}
                <div
                  className="micro-meta"
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '1.2rem',
                    fontSize: '0.72rem'
                  }}
                >
                  {tenet.englishTranslation}
                </div>

                {/* Aphorism */}
                <div
                  className="font-editorial-italic"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--accent-brass-light)',
                    marginBottom: '1.2rem'
                  }}
                >
                  “{tenet.aphorism}”
                </div>

                {/* Narrative Paragraph */}
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    maxWidth: '58ch',
                    fontWeight: 300
                  }}
                >
                  {tenet.narrative}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .manifesto-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .manifesto-grid > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

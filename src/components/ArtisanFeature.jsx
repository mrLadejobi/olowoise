export default function ArtisanFeature({ onOpenInquiry }) {
  return (
    <section
      id="craftsman"
      className="editorial-section"
      style={{
        borderBottom: '1px solid var(--hairline)',
        background: 'var(--bg-obsidian)'
      }}
    >
      <div className="lookbook-container">
        {/* Top Folio Header */}
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
          <span className="micro-meta">[ 05 // PROVENANCE &amp; LINEAGE ]</span>
          <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
            THE MASTER CRAFTSMAN'S CHAMBER
          </span>
        </div>

        {/* Editorial Two-Column Feature */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 'clamp(3rem, 8vw, 8rem)',
            alignItems: 'center'
          }}
          className="artisan-feature-grid"
        >
          {/* Left: Candid Portrait of the Master Craftsman */}
          <div>
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: '4 / 5',
                maxHeight: '620px'
              }}
            >
              <img
                src="/images/craftsman_portrait.jpg"
                alt="The Master Craftsman — Candid Studio Portrait"
                className="editorial-img"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--hairline)'
              }}
            >
              <span className="micro-meta" style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>
                ATELIER DIRECTOR // CREATIVE TECHNOLOGIST
              </span>
              <span className="micro-meta" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>
                LAGOS &middot; LONDON
              </span>
            </div>
          </div>

          {/* Right: The Lineage & Editorial Thesis */}
          <div>
            <span
              className="micro-meta"
              style={{
                color: 'var(--accent-brass)',
                marginBottom: '1.2rem',
                display: 'block'
              }}
            >
              HISTORICAL INHERITANCE
            </span>

            <h2
              className="font-editorial"
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                marginBottom: '2rem'
              }}
            >
              Bespoke Code is <br />
              <span className="font-editorial-italic" style={{ color: 'var(--accent-brass-light)' }}>
                Modern Bronze.
              </span>
            </h2>

            {/* Editorial Pull Quote */}
            <blockquote
              style={{
                paddingLeft: '1.8rem',
                borderLeft: '1px solid var(--accent-brass)',
                marginBottom: '2.5rem'
              }}
            >
              <p
                className="font-editorial-italic"
                style={{
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                  fontWeight: 300
                }}
              >
                “When an artisan cast molten bronze in ancient Benin or carved palace doors in Ìsẹ̀-Èkìtì, every single strike carried eternity. We write software with that exact same sacred reverence.”
              </p>
            </blockquote>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                fontWeight: 300,
                marginBottom: '1.8rem'
              }}
            >
              Named in homage to <strong style={{ color: 'var(--text-primary)', fontWeight: 400 }}>Ọlọ́wẹ̀ of Ìsẹ̀</strong>—the legendary 20th-century Yoruba master woodcarver whose palace verandas and high-relief doors revolutionized spatial depth—our studio approaches computer science as high craft.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                fontWeight: 300,
                marginBottom: '2.5rem'
              }}
            >
              We operate not as a high-volume agency, but as an exclusive guild. We accept strictly <strong>six commissions per solar cycle</strong> to ensure that every line of code, every render curve, and every typography token receives unhurried master mastery.
            </p>

            <div>
              <button
                onClick={onOpenInquiry}
                className="micro-meta"
                style={{
                  padding: '0.85rem 1.8rem',
                  border: '1px solid var(--accent-brass)',
                  color: 'var(--accent-brass)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.22em',
                  transition: 'all 0.3s var(--ease-editorial)'
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
                Request Studio Audience &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .artisan-feature-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

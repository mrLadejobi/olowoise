export default function CoverSpread({ onOpenInquiry }) {
  return (
    <section
      className="editorial-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(8rem, 14vw, 12rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        borderBottom: '1px solid var(--hairline)'
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
            marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)'
          }}
        >
          <span className="micro-meta">
            [ 01 // PROVENANCE & MANIFESTO ]
          </span>
          <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
            FOLIO VOL. I &middot; DIGITAL ATELIER
          </span>
        </div>

        {/* Asymmetric Editorial Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.85fr',
            gap: 'clamp(2.5rem, 6vw, 6rem)',
            alignItems: 'start'
          }}
          className="cover-spread-grid"
        >
          {/* Left Column: Monumental Typographic Spread */}
          <div>
            <h1
              className="font-editorial"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 6.8rem)',
                lineHeight: 0.96,
                letterSpacing: '-0.025em',
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                textTransform: 'uppercase'
              }}
            >
              The Hands <br />
              That Sculpt <br />
              <span className="font-editorial-italic" style={{ textTransform: 'none', color: 'var(--accent-brass-light)' }}>
                Digital
              </span>{' '}
              Permanence.
            </h1>

            {/* Yoruba Aphorism */}
            <div
              style={{
                paddingLeft: '1.5rem',
                borderLeft: '1px solid var(--accent-brass)',
                marginBottom: '2.5rem'
              }}
            >
              <div
                className="font-editorial-italic"
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  color: 'var(--text-primary)',
                  marginBottom: '0.4rem'
                }}
              >
                Ọwọ́ tó mọṣẹ́ kì í tọrọ.
              </div>
              <div
                className="micro-meta"
                style={{
                  fontSize: '0.66rem',
                  color: 'var(--accent-brass)',
                  letterSpacing: '0.18em'
                }}
              >
                The hand endowed with mastery builds sovereign empires.
              </div>
            </div>

            {/* Editorial Lead Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '56ch',
                marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: 300
              }}
            >
              In the Yoruba tradition, an <em style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>Ọlọ́wọ́ Iṣẹ́</em> is a master artisan whose craft transcends ordinary labor. We engineer bespoke web flagships, creative systems, and luxury digital architecture with unyielding pedigree.
            </p>

            {/* Quiet Action Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
                flexWrap: 'wrap'
              }}
            >
              <a
                href="#works"
                className="micro-meta editorial-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.72rem'
                }}
              >
                <span>Explore Curated Masterworks</span>
                <span style={{ color: 'var(--accent-brass)' }}>&darr;</span>
              </a>

              <button
                onClick={onOpenInquiry}
                className="micro-meta editorial-link"
                style={{
                  color: 'var(--accent-brass)',
                  fontSize: '0.72rem'
                }}
              >
                Commission Dialogue &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Museum Bronze Specimen */}
          <div>
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: '3 / 4',
                width: '100%',
                maxHeight: '620px'
              }}
            >
              <img
                src="/images/hero_bronze.jpg"
                alt="Authentic historical bronze sculpture casting"
                className="editorial-img"
              />
            </div>

            {/* Specimen Caption */}
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
                FIG. 01 // BRONZE SPECIMEN
              </span>
              <span className="micro-meta" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>
                EST. LAGOS &middot; ARCHIVAL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Grid Override */}
      <style>{`
        @media (max-width: 900px) {
          .cover-spread-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

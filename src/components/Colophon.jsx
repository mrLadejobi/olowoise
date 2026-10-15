export default function Colophon() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-obsidian)',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(3rem, 5vw, 5rem)',
        borderTop: '1px solid var(--hairline)'
      }}
    >
      <div className="lookbook-container">
        {/* Top Colophon Line */}
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
          <span className="micro-meta">[ COLOPHON &middot; ARCHIVAL REGISTRY ]</span>
          <button
            onClick={scrollToTop}
            className="micro-meta editorial-link"
            style={{ color: 'var(--accent-brass)', fontSize: '0.68rem' }}
          >
            Back to Apex &uarr;
          </button>
        </div>

        {/* Monolithic Brand Display */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 9vw, 9.5rem)',
              lineHeight: 0.92,
              letterSpacing: '0.02em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase'
            }}
          >
            ỌLỌ́WỌ́ IṢẸ́
          </h2>
          <div
            className="font-editorial-italic"
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 2.2rem)',
              color: 'var(--text-secondary)',
              marginTop: '1rem'
            }}
          >
            Haute Digital Atelier &middot; Ancestral Precision &middot; Sovereign Systems
          </div>
        </div>

        {/* Four Column Editorial Colophon Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--hairline)',
            marginBottom: '4rem'
          }}
          className="colophon-grid"
        >
          <div>
            <span className="micro-meta" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.8rem' }}>
              01 // LAGOS ATELIER
            </span>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
              Ikoyi Crescent &middot; Victoria Island <br />
              Lagos State, Nigeria <br />
              GMT+1
            </p>
          </div>

          <div>
            <span className="micro-meta" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.8rem' }}>
              02 // LONDON ATELIER
            </span>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
              Mayfair Chambers <br />
              London W1K, United Kingdom <br />
              GMT
            </p>
          </div>

          <div>
            <span className="micro-meta" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.8rem' }}>
              03 // TYPOGRAPHY &amp; ART
            </span>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
              Set in Italiana, Cormorant Garamond, and Plus Jakarta Sans. Verified archival imagery.
            </p>
          </div>

          <div>
            <span className="micro-meta" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.8rem' }}>
              04 // ALLIANCE
            </span>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
              Member of the Contemporary Digital Craft Guild. Strict six-commission annual cap.
            </p>
          </div>
        </div>

        {/* Bottom Rights Line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid var(--hairline)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <span className="micro-meta" style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} ỌLỌ́WỌ́ IṢẸ́ ATELIER. ALL SOVEREIGN RIGHTS RESERVED.
          </span>
          <span className="micro-meta" style={{ fontSize: '0.62rem', color: 'var(--accent-brass)' }}>
            PRODUCED WITH UNYIELDING CRAFTSMANSHIP
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .colophon-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .colophon-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

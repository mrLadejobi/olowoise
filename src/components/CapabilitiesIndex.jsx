import { disciplines } from '../data/disciplines';

export default function CapabilitiesIndex({ onOpenInquiry }) {
  return (
    <section
      id="disciplines"
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
          <span className="micro-meta">[ 04 // CAPABILITIES CATALOG ]</span>
          <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
            THE FOUR GRAND DISCIPLINES
          </span>
        </div>

        {/* Section Intro Heading */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            marginBottom: 'clamp(3rem, 6vw, 5rem)'
          }}
          className="capabilities-intro-grid"
        >
          <h2
            className="font-editorial"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em'
            }}
          >
            Disciplines of <br />
            <span className="font-editorial-italic" style={{ color: 'var(--accent-brass-light)' }}>
              Sovereign Execution.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              fontWeight: 300,
              alignSelf: 'end'
            }}
          >
            We do not accept generic commissions. Our studio is dedicated exclusively to projects requiring uncompromising craftsmanship across web architecture, spatial computing, and luxury systems.
          </p>
        </div>

        {/* Catalog Table */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Table Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1.4fr 1.2fr 1fr',
              gap: '2rem',
              paddingBottom: '1.2rem',
              borderBottom: '1px solid var(--hairline)'
            }}
            className="catalog-table-header"
          >
            <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>INDEX</span>
            <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>DISCIPLINE &amp; SYNOPSIS</span>
            <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>CORE ARCHITECTURAL FOCUS</span>
            <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>DELIVERABLES</span>
          </div>

          {/* Table Rows */}
          {disciplines.map((item) => (
            <div
              key={item.index}
              className="catalog-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1.4fr 1.2fr 1fr',
                gap: '2rem',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid var(--hairline)',
                alignItems: 'baseline',
                transition: 'background 0.3s ease, padding-left 0.3s ease'
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--accent-brass)',
                  letterSpacing: '0.05em'
                }}
              >
                {item.index}.
              </span>

              <div>
                <h3
                  className="font-editorial"
                  style={{
                    fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)',
                    color: 'var(--text-primary)',
                    marginBottom: '0.8rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    fontWeight: 300,
                    maxWidth: '48ch'
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div>
                <span className="micro-meta" style={{ color: 'var(--accent-brass)', display: 'block', marginBottom: '0.4rem' }}>
                  FOCUS
                </span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                  {item.focus}
                </p>
              </div>

              <div>
                <span className="micro-meta" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  ARTIFACTS
                </span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 300 }}>
                  {item.deliverables}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '3rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
            COMMISSIONS LIMITED TO 6 MANDATES ANNUALLY
          </span>
          <button
            onClick={onOpenInquiry}
            className="micro-meta editorial-link"
            style={{
              color: 'var(--accent-brass)',
              fontSize: '0.72rem'
            }}
          >
            Inquire For Current Solar Cycle &rarr;
          </button>
        </div>
      </div>

      <style>{`
        .catalog-row:hover {
          background: rgba(197, 168, 105, 0.035);
          padding-left: 1rem;
        }
        @media (max-width: 900px) {
          .capabilities-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .catalog-table-header {
            display: none !important;
          }
          .catalog-row {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

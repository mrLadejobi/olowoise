import { useState } from 'react';

export default function CommissionInquiry({ isModal = false, onClose = () => {} }) {
  const [discipline, setDiscipline] = useState('flagship');
  const [scale, setScale] = useState('boutique');
  const [cadence, setCadence] = useState('meticulous');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const disciplinesMap = {
    flagship: { title: 'Digital Flagship & Web Architecture', timeline: '8–12 Weeks' },
    webgl: { title: 'Spatial WebGL & Interactive 3D', timeline: '10–14 Weeks' },
    commerce: { title: 'Haute Commerce Infrastructure', timeline: '8–12 Weeks' },
    systems: { title: 'Algorithmic Identity & Architecture', timeline: '6–10 Weeks' }
  };

  const scaleMap = {
    boutique: 'Prestige Boutique Flagship',
    institutional: 'Institutional Scale Architecture',
    enterprise: 'Global Enterprise Network'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const content = (
    <div>
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
        <span className="micro-meta">[ 06 // COMMISSION PROTOCOL ]</span>
        <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
          {isModal ? 'STUDIO AUDIENCE REQUEST' : 'BESPOKE ENGAGEMENT'}
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 'clamp(3rem, 8vw, 8rem)',
          alignItems: 'start'
        }}
        className="commission-grid"
      >
        {/* Left Column: Inquiry Protocol Form */}
        <div>
          <span
            className="micro-meta"
            style={{
              color: 'var(--accent-brass)',
              marginBottom: '1rem',
              display: 'block'
            }}
          >
            CONFIDENTIAL DIALOGUE
          </span>

          <h2
            className="font-editorial"
            style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            Initiate a <br />
            <span className="font-editorial-italic" style={{ color: 'var(--accent-brass-light)' }}>
              Commission.
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: '3rem'
            }}
          >
            We partner with sovereign institutions, visionary founders, and luxury houses globally. Configure your parameters below for studio review.
          </p>

          {submitted ? (
            <div
              style={{
                padding: '3rem 2rem',
                border: '1px solid var(--accent-brass)',
                background: 'rgba(197, 168, 105, 0.04)'
              }}
            >
              <div
                className="font-editorial"
                style={{
                  fontSize: '2.2rem',
                  color: 'var(--accent-brass-light)',
                  marginBottom: '1rem'
                }}
              >
                Audience Request Received
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '1.5rem'
                }}
              >
                Your dossier has been registered in our private studio ledger. The Atelier Director will review your parameters and initiate correspondence within 24 business hours.
              </p>
              <div className="micro-meta" style={{ color: 'var(--text-muted)' }}>
                DISPATCHED TO: ATELIER@OLOWOISE.COM &middot; PRIVATE REGISTRY
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Step 1: Desired Discipline */}
              <div>
                <label className="micro-meta" style={{ display: 'block', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  01. CRAFT DISCIPLINE
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {[
                    { id: 'flagship', label: 'Digital Flagship' },
                    { id: 'webgl', label: 'Spatial WebGL' },
                    { id: 'commerce', label: 'Haute Commerce' },
                    { id: 'systems', label: 'Algorithmic Systems' }
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setDiscipline(item.id)}
                      className="micro-meta"
                      style={{
                        padding: '0.65rem 1.2rem',
                        border: '1px solid',
                        borderColor: discipline === item.id ? 'var(--accent-brass)' : 'var(--hairline)',
                        background: discipline === item.id ? 'rgba(197, 168, 105, 0.1)' : 'transparent',
                        color: discipline === item.id ? 'var(--accent-brass-light)' : 'var(--text-secondary)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.18em',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Scale */}
              <div>
                <label className="micro-meta" style={{ display: 'block', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  02. ARCHITECTURAL SCOPE
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {[
                    { id: 'boutique', label: 'Prestige Boutique' },
                    { id: 'institutional', label: 'Institutional Platform' },
                    { id: 'enterprise', label: 'Global Enterprise' }
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setScale(item.id)}
                      className="micro-meta"
                      style={{
                        padding: '0.65rem 1.2rem',
                        border: '1px solid',
                        borderColor: scale === item.id ? 'var(--accent-brass)' : 'var(--hairline)',
                        background: scale === item.id ? 'rgba(197, 168, 105, 0.1)' : 'transparent',
                        color: scale === item.id ? 'var(--accent-brass-light)' : 'var(--text-secondary)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.18em',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <div>
                  <label className="micro-meta" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                    03. PRINCIPAL NAME &amp; TITLE
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Adebayo Vance, Managing Partner"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid var(--hairline)',
                      padding: '0.75rem 0',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent-brass)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--hairline)')}
                  />
                </div>

                <div>
                  <label className="micro-meta" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                    04. DIRECT EMAIL CORRESPONDENCE
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="principal@institution.com"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid var(--hairline)',
                      padding: '0.75rem 0',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent-brass)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--hairline)')}
                  />
                </div>

                <div>
                  <label className="micro-meta" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                    05. PROJECT BRIEF &amp; OBJECTIVES
                  </label>
                  <textarea
                    rows={3}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Outline your vision, timeline, and architectural ambition..."
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid var(--hairline)',
                      padding: '0.75rem 0',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent-brass)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--hairline)')}
                  />
                </div>
              </div>

              {/* Submit Action */}
              <div>
                <button
                  type="submit"
                  className="micro-meta"
                  style={{
                    padding: '1rem 2.2rem',
                    border: '1px solid var(--accent-brass)',
                    background: 'var(--accent-brass)',
                    color: 'var(--bg-obsidian)',
                    fontWeight: 600,
                    letterSpacing: '0.24em',
                    fontSize: '0.68rem',
                    transition: 'all 0.3s var(--ease-editorial)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--accent-brass)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--accent-brass)';
                    e.currentTarget.style.color = 'var(--bg-obsidian)';
                  }}
                >
                  Transmit Dossier &rarr;
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Atelier Parameters & Direct Channels */}
        <div style={{ paddingLeft: 'clamp(0rem, 3vw, 2rem)' }}>
          <div
            style={{
              padding: '2.5rem',
              border: '1px solid var(--hairline)',
              background: 'rgba(238, 234, 227, 0.015)'
            }}
          >
            <div className="micro-meta" style={{ color: 'var(--accent-brass)', marginBottom: '0.8rem' }}>
              ENGAGEMENT LEDGER
            </div>
            <div
              className="font-editorial"
              style={{
                fontSize: '1.9rem',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}
            >
              Current Selection Parameters
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid var(--hairline)' }}>
                <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>DISCIPLINE</span>
                <span className="micro-meta" style={{ color: 'var(--text-primary)' }}>{disciplinesMap[discipline].title}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid var(--hairline)' }}>
                <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>SCALE TIER</span>
                <span className="micro-meta" style={{ color: 'var(--text-primary)' }}>{scaleMap[scale]}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid var(--hairline)' }}>
                <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>DELIVERY CADENCE</span>
                <span className="micro-meta" style={{ color: 'var(--accent-brass)' }}>{disciplinesMap[discipline].timeline}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid var(--hairline)' }}>
                <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>ALLOCATION</span>
                <span className="micro-meta" style={{ color: 'var(--text-primary)' }}>2 OF 6 MANDATES REMAINING</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '1.8rem' }}>
              <span className="micro-meta" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.6rem' }}>
                DIRECT PRIVATE CORRESPONDENCE
              </span>
              <a
                href="mailto:atelier@olowoise.com"
                className="font-editorial"
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--accent-brass-light)',
                  display: 'inline-block',
                  marginBottom: '0.8rem'
                }}
              >
                atelier@olowoise.com
              </a>
              <div className="micro-meta" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                IKOYI, LAGOS &middot; MAYFAIR, LONDON &middot; BY PRIVATE INVITATION
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .commission-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </div>
  );

  if (isModal) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(9, 9, 11, 0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 2000,
          overflowY: 'auto',
          padding: '5rem 5vw 4rem 5vw'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative' }}>
          <button
            onClick={onClose}
            className="micro-meta"
            style={{
              position: 'absolute',
              top: '-3rem',
              right: 0,
              color: 'var(--accent-brass)',
              fontSize: '0.72rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            CLOSE PROTOCOL [ &times; ]
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section
      id="commission"
      className="editorial-section"
      style={{
        borderBottom: '1px solid var(--hairline)',
        background: 'var(--bg-obsidian)'
      }}
    >
      <div className="lookbook-container">{content}</div>
    </section>
  );
}

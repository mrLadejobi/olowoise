import { useState, useEffect } from 'react';

export default function Navigation({ onOpenInquiry }) {
  const [lagosTime, setLagosTime] = useState('');
  const [londonTime, setLondonTime] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  // Live clocks for Lagos & London
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setLagosTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now)
      );
      setLondonTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now)
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for subtle masthead border styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio Harmonic Chime (Gentle luxury bell)
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, ctx.currentTime); // 528 Hz Solfeggio frequency
      osc.frequency.exponentialRampToValueAtTime(1056, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.8);
      setSoundActive(true);
      setTimeout(() => setSoundActive(false), 1800);
    } catch {
      // Audio not permitted without interaction
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          background: scrolled ? 'rgba(9, 9, 11, 0.94)' : 'rgba(9, 9, 11, 0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(238, 234, 227, 0.12)' : 'var(--hairline)',
          transition: 'all 0.4s var(--ease-editorial)'
        }}
      >
        <div
          className="lookbook-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: scrolled ? '1.1rem' : '1.6rem',
            paddingBottom: scrolled ? '1.1rem' : '1.6rem',
            transition: 'padding 0.4s var(--ease-editorial)'
          }}
        >
          {/* Brand Signature */}
          <a href="#" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <span
              className="font-display"
              style={{
                fontSize: '1.45rem',
                letterSpacing: '0.04em',
                color: 'var(--text-primary)'
              }}
            >
              ỌLỌ́WỌ́ IṢẸ́
            </span>
            <span
              className="micro-meta"
              style={{
                fontSize: '0.58rem',
                letterSpacing: '0.2em',
                color: 'var(--text-muted)'
              }}
            >
              ATELIER DE CRÉATION DIGITALE // EST. LAGOS &middot; LONDON
            </span>
          </a>

          {/* Center Coordinates & Dual Live Clocks */}
          <div
            className="nav-clocks-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--accent-brass)',
                  display: 'inline-block'
                }}
              />
              <span className="micro-meta" style={{ fontSize: '0.62rem', color: 'var(--text-secondary)' }}>
                LAGOS <span style={{ color: 'var(--text-primary)' }}>{lagosTime || '13:00'}</span> GMT+1
              </span>
            </div>

            <span style={{ color: 'var(--text-faint)', fontSize: '0.7rem' }}>/</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--text-muted)',
                  display: 'inline-block'
                }}
              />
              <span className="micro-meta" style={{ fontSize: '0.62rem', color: 'var(--text-secondary)' }}>
                LONDON <span style={{ color: 'var(--text-primary)' }}>{londonTime || '12:00'}</span> GMT
              </span>
            </div>
          </div>

          {/* Right Navigation Links & Sound Trigger */}
          <nav
            className="nav-links-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.4rem'
            }}
          >
            <a href="#creed" className="micro-meta editorial-link">
              Manifesto
            </a>
            <a href="#works" className="micro-meta editorial-link">
              Selected Works
            </a>
            <a href="#disciplines" className="micro-meta editorial-link">
              Capabilities
            </a>
            <a href="#craftsman" className="micro-meta editorial-link">
              Provenance
            </a>

            {/* Subtle Chime Harmonic Trigger */}
            <button
              onClick={playChime}
              title="Acoustic Gold Chime"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.6rem',
                border: '1px solid var(--hairline)',
                borderRadius: '2px',
                color: soundActive ? 'var(--accent-brass-light)' : 'var(--text-secondary)',
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span className="micro-meta" style={{ fontSize: '0.58rem' }}>
                {soundActive ? 'Resonating' : 'Harmonic'}
              </span>
            </button>

            {/* Initiate Project */}
            <button
              onClick={onOpenInquiry}
              className="micro-meta"
              style={{
                padding: '0.5rem 1.1rem',
                border: '1px solid var(--accent-brass)',
                color: 'var(--accent-brass)',
                letterSpacing: '0.22em',
                fontSize: '0.62rem',
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
              Commission
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-trigger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--text-primary)'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Minimal Fullscreen Overlay) */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-obsidian)',
            zIndex: 999,
            padding: '6rem 2rem 3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <span className="micro-meta" style={{ color: 'var(--text-muted)' }}>
              INDEX // NAVIGATION
            </span>
            <a
              href="#creed"
              onClick={() => setMobileOpen(false)}
              className="font-editorial"
              style={{ fontSize: '2.4rem', color: 'var(--text-primary)' }}
            >
              The Manifesto
            </a>
            <a
              href="#works"
              onClick={() => setMobileOpen(false)}
              className="font-editorial"
              style={{ fontSize: '2.4rem', color: 'var(--text-primary)' }}
            >
              Selected Works
            </a>
            <a
              href="#disciplines"
              onClick={() => setMobileOpen(false)}
              className="font-editorial"
              style={{ fontSize: '2.4rem', color: 'var(--text-primary)' }}
            >
              Capabilities
            </a>
            <a
              href="#craftsman"
              onClick={() => setMobileOpen(false)}
              className="font-editorial"
              style={{ fontSize: '2.4rem', color: 'var(--text-primary)' }}
            >
              Provenance
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '2rem', borderTop: '1px solid var(--hairline)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="micro-meta">LAGOS {lagosTime}</span>
              <span className="micro-meta">LONDON {londonTime}</span>
            </div>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenInquiry();
              }}
              className="micro-meta"
              style={{
                padding: '0.9rem',
                border: '1px solid var(--accent-brass)',
                color: 'var(--accent-brass)',
                textAlign: 'center'
              }}
            >
              Initiate Commission Protocol
            </button>
          </div>
        </div>
      )}

      {/* Responsive Styles for Nav */}
      <style>{`
        @media (max-width: 1024px) {
          .nav-clocks-desktop {
            display: none !important;
          }
        }
        @media (max-width: 860px) {
          .nav-links-desktop {
            display: none !important;
          }
          .mobile-menu-trigger {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

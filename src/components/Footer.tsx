import { Link } from 'react-router-dom'
import logoImg from '../assets/hero-reference.jpg'

const navSections = [
  {
    label: 'MUN CARAVAN',
    links: [
      { to: '/about', label: 'About' },
      { to: '/programs', label: 'Programs' },
      { to: '/events', label: 'Events' },
      { to: '/network', label: 'Network' },
      { to: '/resources', label: 'Resources' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    label: 'EVENTS',
    links: [
      { to: '/events/samarkand-icj', label: 'Samarkand ICJ' },
      { to: '/events', label: 'All Events' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0F1F3D',
      color: '#F5F1E8',
      borderTop: '3px solid #7A1A2E',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px 48px' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, marginBottom: 64 }}>
          <div>
            {/* Logo + brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <img src={logoImg} alt="MUN Caravan" style={{ width: 44, height: 44, objectFit: 'contain', filter: 'brightness(10)' }} />
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, letterSpacing: '0.12em', color: '#F5F1E8' }}>
                  MUN CARAVAN
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.08em', color: '#8A867C', marginTop: 2 }}>
                  AN INITIATIVE OF NEW RENAISSANCE BUILDERS
                </div>
              </div>
            </div>
            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', fontSize: 18, color: '#C8C2B8', maxWidth: 400, lineHeight: 1.5 }}>
              Building the MUN ecosystem.
            </p>
          </div>

          {/* Nav columns */}
          <div style={{ display: 'flex', gap: 64 }}>
            {navSections.map(section => (
              <div key={section.label}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 16 }}>
                  {section.label}
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {section.links.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#C8C2B8', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F5F1E8')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#C8C2B8')}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #2A3D5A', marginBottom: 32 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6B6560' }}>
            © 2026 MUN Caravan. All rights reserved. An initiative of New Renaissance Builders.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Use', 'Contact'].map(label => (
              <span key={label} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6B6560', cursor: 'pointer', letterSpacing: '0.05em' }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
          footer > div > div:first-child > div:last-child { flex-direction: column !important; gap: 32px !important; }
          footer > div > div:last-child { flex-direction: column !important; }
        }
      `}</style>
    </footer>
  )
}

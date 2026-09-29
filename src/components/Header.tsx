import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoImg from '../assets/hero-reference.jpg'

const APPLY_URL = '#apply'

const navLinks = [
  { to: '/about', label: 'ABOUT' },
  { to: '/programs', label: 'PROGRAMS' },
  { to: '/events', label: 'EVENTS' },
  { to: '/network', label: 'NETWORK' },
  { to: '/resources', label: 'RESOURCES' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(245,241,232,0.97)' : '#F5F1E8',
        borderBottom: scrolled ? '1px solid #D4CEBD' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src={logoImg}
              alt="MUN Caravan"
              style={{ width: 40, height: 40, objectFit: 'contain' }}
            />
            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: '0.12em',
                color: '#1B3058',
                lineHeight: 1.1,
              }}>
                MUN CARAVAN
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 9,
                letterSpacing: '0.08em',
                color: '#8A867C',
                lineHeight: 1,
                marginTop: 2,
              }}>
                BY NEW RENAISSANCE BUILDERS
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => ({
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  color: isActive ? '#1B3058' : '#8A867C',
                  textDecoration: 'none',
                  borderBottom: isActive ? '1px solid #1B3058' : '1px solid transparent',
                  paddingBottom: 2,
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href={APPLY_URL}
              className="hidden-mobile"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: '0.12em',
                color: '#F5F1E8',
                backgroundColor: '#1B3058',
                padding: '10px 24px',
                textDecoration: 'none',
                border: '1px solid #1B3058',
              }}
            >
              APPLY
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 4, display: 'flex', flexDirection: 'column', gap: 5,
              }}
              aria-label="Toggle menu"
            >
              <span style={{ display: 'block', width: 22, height: 1.5, backgroundColor: menuOpen ? '#7A1A2E' : '#1B3058', transition: 'all 0.2s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 1.5, backgroundColor: menuOpen ? '#7A1A2E' : '#1B3058', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 1.5, backgroundColor: menuOpen ? '#7A1A2E' : '#1B3058', transition: 'all 0.2s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#F5F1E8',
          borderTop: '1px solid #D4CEBD',
          padding: '24px 32px 32px',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => ({
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  color: isActive ? '#1B3058' : '#2A2A2A',
                  textDecoration: 'none',
                  padding: '14px 0',
                  borderBottom: '1px solid #D4CEBD',
                })}
              >
                {label}
              </NavLink>
            ))}
            <a
              href={APPLY_URL}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.12em',
                color: '#F5F1E8',
                backgroundColor: '#1B3058',
                padding: '14px 24px',
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: 20,
                display: 'block',
              }}
            >
              APPLY
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}

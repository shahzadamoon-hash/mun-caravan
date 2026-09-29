import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <div>
      <section style={{ backgroundColor: '#0F1F3D', padding: '80px 32px 64px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#7A1A2E' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#A8895A', marginBottom: 16 }}>
            03 — EVENTS
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#F5F1E8',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Programs & Events
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#C8C2B8', maxWidth: 560, lineHeight: 1.7 }}>
            MUN Caravan organizes and supports Model United Nations conferences and specialized simulations. This is the current program calendar.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Current event */}
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 48 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#7A1A2E' }}>
              CURRENT — APPLICATIONS OPEN
            </div>
          </div>

          <div style={{
            border: '2px solid #1B3058',
            padding: '48px',
            marginBottom: 48,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 48,
            alignItems: 'center',
          }}>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 12 }}>
                INTERNATIONAL COURT OF JUSTICE SIMULATION
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3.5vw, 44px)',
                color: '#1B3058',
                lineHeight: 1.1,
                marginBottom: 8,
              }}>
                SAMARKAND ICJ
              </h2>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontStyle: 'italic',
                fontSize: 20,
                color: '#7A1A2E',
                marginBottom: 24,
              }}>
                Nicaragua v. United States
              </div>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 24 }}>
                {[
                  ['LOCATION', 'Samarkand, Uzbekistan'],
                  ['PARTICIPANTS', '40–50'],
                  ['OBSERVERS', '10–15'],
                ].map(([label, val]) => (
                  <div key={label as string}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#2A2A2A' }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 180 }}>
              <Link to="/events/samarkand-icj" style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600,
                fontSize: 11, letterSpacing: '0.12em',
                color: '#F5F1E8', backgroundColor: '#1B3058',
                padding: '14px 24px', textDecoration: 'none',
                textAlign: 'center',
              }}>
                VIEW EVENT
              </Link>
              <a href="#apply" style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 500,
                fontSize: 11, letterSpacing: '0.12em',
                color: '#7A1A2E',
                padding: '14px 24px', textDecoration: 'none',
                textAlign: 'center',
                border: '1px solid #7A1A2E',
              }}>
                APPLY NOW
              </a>
            </div>
          </div>

          {/* Upcoming placeholders */}
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 32 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              UPCOMING
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, backgroundColor: '#D4CEBD' }}>
            {[1, 2].map(i => (
              <div key={i} style={{
                backgroundColor: '#EDE9DF',
                padding: '40px',
              }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#A8895A', marginBottom: 16 }}>
                  ANNOUNCEMENT SOON
                </div>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, color: '#B8B0A0', fontStyle: 'italic', marginBottom: 12 }}>
                  Upcoming Event
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8A867C', lineHeight: 1.6 }}>
                  Details will be announced. Follow MUN Caravan for updates.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

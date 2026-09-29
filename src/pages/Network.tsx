import { Link } from 'react-router-dom'

const collaborationTypes = [
  'Universities and academic institutions',
  'Schools and secondary institutions',
  'Youth organizations',
  'MUN communities and clubs',
  'Debate organizations',
  'Law faculties and institutes',
  'International affairs communities',
  'Conference organizers',
  'International partners',
]

export default function Network() {
  return (
    <div>
      <section style={{ backgroundColor: '#0F1F3D', padding: '80px 32px 64px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#A8895A' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#A8895A', marginBottom: 16 }}>
            04 — NETWORK
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#F5F1E8',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Institutions build<br />ecosystems together.
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#C8C2B8', maxWidth: 560, lineHeight: 1.7 }}>
            MUN Caravan seeks collaboration with organizations that share a commitment to developing the MUN ecosystem.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 32, marginBottom: 32 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
                  WHO WE WORK WITH
                </div>
              </div>
              {collaborationTypes.map((type, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '14px 0',
                  borderBottom: '1px solid #EDE9DF',
                }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.1em', color: '#A8895A', minWidth: 24 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#2A2A2A' }}>
                    {type}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <div style={{ borderTop: '3px solid #1B3058', paddingTop: 32, marginBottom: 32 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#1B3058' }}>
                  BECOME A PARTNER
                </div>
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 28,
                color: '#1B3058',
                lineHeight: 1.3,
                marginBottom: 20,
              }}>
                Build the ecosystem with us.
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#6B6560', lineHeight: 1.8, marginBottom: 16 }}>
                MUN Caravan is actively building a network of institutional partners across Uzbekistan and beyond. We welcome collaboration with organizations at any stage — from informal engagement to formal partnership.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#6B6560', lineHeight: 1.8, marginBottom: 36 }}>
                Partnership inquiries are reviewed by the MUN Caravan team. There is no fixed template — collaboration is shaped around what is meaningful and useful for both parties.
              </p>
              <Link to="/contact" style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600,
                fontSize: 11, letterSpacing: '0.12em',
                color: '#F5F1E8', backgroundColor: '#1B3058',
                padding: '16px 36px', textDecoration: 'none',
                display: 'inline-block',
              }}>
                BECOME A PARTNER
              </Link>

              {/* Partner placeholder area */}
              <div style={{ marginTop: 56 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 20 }}>
                  CURRENT PARTNERS
                </div>
                <div style={{
                  border: '1px dashed #D4CEBD',
                  padding: '32px',
                  textAlign: 'center',
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#B8B0A0', fontStyle: 'italic' }}>
                    Partner information will be listed here as the network develops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

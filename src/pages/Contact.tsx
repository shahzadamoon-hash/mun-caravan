export default function Contact() {
  return (
    <div>
      <section style={{ backgroundColor: '#0F1F3D', padding: '80px 32px 64px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#7A1A2E' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#A8895A', marginBottom: 16 }}>
            CONTACT
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#F5F1E8',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Contact MUN Caravan
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#C8C2B8', maxWidth: 560, lineHeight: 1.7 }}>
            For inquiries regarding participation, partnerships, or organizational collaboration.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>

            {[
              {
                label: '01',
                title: 'FOR PARTICIPANTS',
                subtitle: 'Applications & participant questions',
                body: 'For questions about the Samarkand ICJ application process, roles, fees, or preparation.',
                cta: 'APPLY TO SAMARKAND ICJ',
                href: '/events/samarkand-icj',
              },
              {
                label: '02',
                title: 'FOR ORGANIZATIONS',
                subtitle: 'Partnerships & institutional collaboration',
                body: 'For universities, schools, youth organizations, MUN communities, or other institutions interested in collaborating with MUN Caravan.',
                cta: 'VIEW NETWORK',
                href: '/network',
              },
              {
                label: '03',
                title: 'FOR ORGANIZERS',
                subtitle: 'MUN incubation & conference support',
                body: 'For teams developing or planning an MUN conference and interested in support, frameworks, or the incubation program.',
                cta: 'VIEW PROGRAMS',
                href: '/programs',
              },
            ].map((item, i) => (
              <div key={item.label} style={{
                padding: '48px 40px',
                borderTop: '1px solid #D4CEBD',
                borderLeft: i === 0 ? '1px solid #D4CEBD' : 'none',
                borderRight: '1px solid #D4CEBD',
                borderBottom: '1px solid #D4CEBD',
              }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#A8895A', marginBottom: 20 }}>
                  {item.label}
                </div>
                <h2 style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: 13, letterSpacing: '0.1em',
                  color: '#1B3058', marginBottom: 6,
                }}>
                  {item.title}
                </h2>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#7A1A2E', marginBottom: 20 }}>
                  {item.subtitle}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#6B6560', lineHeight: 1.7, marginBottom: 32 }}>
                  {item.body}
                </p>
                <a href={item.href} style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: 10, letterSpacing: '0.12em',
                  color: '#1B3058', textDecoration: 'none',
                  borderBottom: '1px solid #1B3058', paddingBottom: 2,
                }}>
                  {item.cta} →
                </a>
              </div>
            ))}
          </div>

          {/* Contact details placeholder */}
          <div style={{ marginTop: 64, borderTop: '1px solid #D4CEBD', paddingTop: 40 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C', marginBottom: 32 }}>
              OFFICIAL CONTACT CHANNELS
            </div>
            <div style={{
              border: '1px dashed #D4CEBD',
              padding: '40px',
              backgroundColor: '#EDE9DF',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', fontSize: 16, color: '#B8B0A0' }}>
                Official contact information — including email address and social channels — will be listed here once established.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

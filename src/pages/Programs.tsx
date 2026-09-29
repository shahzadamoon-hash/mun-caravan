import { Link } from 'react-router-dom'

const programs = [
  {
    num: '01',
    title: 'MUN CONFERENCES',
    body: 'Organizing and supporting Model United Nations conferences and specialized simulations. From concept to closing ceremony, MUN Caravan provides infrastructure and institutional support.',
    status: 'ACTIVE',
  },
  {
    num: '02',
    title: 'ICJ & SPECIALIZED SIMULATIONS',
    body: 'Creating specialized formats that move beyond conventional committee-based MUN. The International Court of Justice simulation is the first such specialized format — with more to follow.',
    status: 'ACTIVE',
    link: '/events/samarkand-icj',
    linkLabel: 'VIEW SAMARKAND ICJ →',
  },
  {
    num: '03',
    title: 'TRAINING',
    body: 'Developing delegates, chairs, judges, speakers, researchers, and organizers. Training programs are designed to build real capability — not just conference participation.',
    status: 'IN DEVELOPMENT',
  },
  {
    num: '04',
    title: 'MUN INCUBATION',
    body: 'Helping emerging teams turn an MUN idea into a functioning conference. The incubation program provides structured guidance, frameworks, and support for new organizers.',
    status: 'IN DEVELOPMENT',
  },
  {
    num: '05',
    title: 'ORGANIZER SUPPORT',
    body: 'Frameworks, systems, templates, operational guidance, program development, and institutional support. Designed to help conference teams operate more effectively.',
    status: 'IN DEVELOPMENT',
  },
  {
    num: '06',
    title: 'NETWORK',
    body: 'Connecting MUN communities, universities, schools, organizers, and international partners. The network program is the long-term connective tissue of the MUN ecosystem.',
    status: 'BUILDING',
  },
]

export default function Programs() {
  return (
    <div>
      <section style={{ backgroundColor: '#1B3058', padding: '80px 32px 64px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#7A1A2E' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#A8895A', marginBottom: 16 }}>
            02 — PROGRAMS
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#F5F1E8',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            From participation<br />to infrastructure.
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#C8C2B8', maxWidth: 560, lineHeight: 1.7 }}>
            MUN Caravan operates across the full spectrum of MUN ecosystem needs — from individual development to institutional frameworks.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {programs.map((p, i) => (
            <div key={p.num} style={{
              borderTop: '1px solid #D4CEBD',
              padding: '48px 0',
              display: 'grid',
              gridTemplateColumns: '80px 1fr auto',
              gap: 40,
              alignItems: 'start',
            }}>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 400,
                fontSize: 40,
                color: '#D4CEBD',
                lineHeight: 1,
                paddingTop: 4,
              }}>
                {p.num}
              </div>
              <div>
                <h2 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: '0.1em',
                  color: '#1B3058',
                  marginBottom: 16,
                }}>
                  {p.title}
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#6B6560', lineHeight: 1.7, maxWidth: 600 }}>
                  {p.body}
                </p>
                {p.link && (
                  <div style={{ marginTop: 20 }}>
                    <Link to={p.link} style={{
                      fontFamily: 'Inter, sans-serif', fontWeight: 600,
                      fontSize: 11, letterSpacing: '0.1em',
                      color: '#7A1A2E', textDecoration: 'none',
                      borderBottom: '1px solid #7A1A2E', paddingBottom: 2,
                    }}>
                      {p.linkLabel}
                    </Link>
                  </div>
                )}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 9,
                letterSpacing: '0.15em',
                color: p.status === 'ACTIVE' ? '#1B3058' : '#8A867C',
                fontWeight: 600,
                border: `1px solid ${p.status === 'ACTIVE' ? '#1B3058' : '#D4CEBD'}`,
                padding: '6px 14px',
                whiteSpace: 'nowrap',
                marginTop: 4,
              }}>
                {p.status}
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #D4CEBD' }} />
        </div>
      </section>

      <section style={{ backgroundColor: '#0F1F3D', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 28, color: '#F5F1E8', marginBottom: 8 }}>
              Ready to participate?
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#8A867C' }}>
              Applications are currently open for the Samarkand ICJ.
            </p>
          </div>
          <Link to="/events/samarkand-icj" style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 600,
            fontSize: 11, letterSpacing: '0.12em',
            color: '#F5F1E8', backgroundColor: '#7A1A2E',
            padding: '16px 36px', textDecoration: 'none',
          }}>
            VIEW SAMARKAND ICJ
          </Link>
        </div>
      </section>
    </div>
  )
}

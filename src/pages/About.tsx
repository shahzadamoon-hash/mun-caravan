import { Link } from 'react-router-dom'

const faqItems = [
  {
    q: 'What is MUN Caravan?',
    a: 'MUN Caravan is an initiative of New Renaissance Builders focused on building and strengthening the Model United Nations ecosystem. It works across conferences, training, incubation, and network development — with a long-term vision of connecting Uzbekistan\'s MUN community with the wider international ecosystem.',
  },
  {
    q: 'Is MUN Caravan an MUN conference?',
    a: 'MUN Caravan is more than a conference organizer. It is designed as an ecosystem platform — organizing and supporting conferences, developing training programs, incubating new MUN initiatives, and building institutional frameworks for the MUN community.',
  },
  {
    q: 'Who can participate?',
    a: 'MUN Caravan programs are open to students, delegates, researchers, debaters, and professionals interested in international affairs, law, diplomacy, and public speaking. Specific eligibility details are provided for each program.',
  },
  {
    q: 'Who organizes MUN Caravan?',
    a: 'MUN Caravan is an initiative of New Renaissance Builders, a youth-driven initiative focused on intellectual development, research, leadership, and civic contribution.',
  },
  {
    q: 'How can an organization collaborate with MUN Caravan?',
    a: 'MUN Caravan welcomes collaboration with universities, schools, youth organizations, MUN communities, law faculties, and international affairs institutions. Contact the team through the Network or Contact pages.',
  },
]

export default function About() {
  return (
    <div>
      <section style={{ backgroundColor: '#0F1F3D', padding: '80px 32px 64px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#A8895A' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#A8895A', marginBottom: 16 }}>
            01 — ABOUT MUN CARAVAN
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#F5F1E8',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            More than a conference organizer.
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#C8C2B8', maxWidth: 560, lineHeight: 1.7 }}>
            An initiative of New Renaissance Builders focused on strengthening the Model United Nations ecosystem.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 80 }}>
            <div>
              <div style={{ borderTop: '3px solid #7A1A2E', paddingTop: 32, marginBottom: 32 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#7A1A2E' }}>
                  MISSION
                </div>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 20 }}>
                MUN Caravan works across the full lifecycle of MUN initiatives — from developing teams and programs to supporting conferences, training participants, building institutional frameworks, and creating connections between organizers.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 20 }}>
                We believe the MUN ecosystem can become a serious platform for developing research, diplomacy, public speaking, negotiation, leadership, international affairs, and civic responsibility.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#2A2A2A', lineHeight: 1.8 }}>
                Our long-term vision is to help create a stronger, more connected MUN community in Uzbekistan and build bridges between Uzbek MUN participants and the wider international community.
              </p>
            </div>
            <div style={{ paddingTop: 80 }}>
              {[
                ['ORGANIZATION', 'MUN Caravan'],
                ['PARENT BODY', 'New Renaissance Builders'],
                ['TYPE', 'Ecosystem Platform'],
                ['FOCUS', 'MUN Development, Uzbekistan'],
              ].map(([label, val]) => (
                <div key={label as string} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #D4CEBD' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1B3058', fontWeight: 500 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NRB Section */}
      <section style={{ backgroundColor: '#EDE9DF', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              THE PARENT ORGANIZATION
            </div>
          </div>
          <div style={{ maxWidth: 760 }}>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 36px)',
              color: '#1B3058',
              marginBottom: 8,
            }}>
              NEW RENAISSANCE BUILDERS
            </h2>
            <p style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontStyle: 'italic',
              fontSize: 20,
              color: '#7A1A2E',
              marginBottom: 24,
            }}>
              "Build people capable of building the future."
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 16 }}>
              New Renaissance Builders is an initiative built around the idea that a new generation should not merely consume knowledge, opportunities, and institutions — it should develop the capability to build them.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 32 }}>
              Its work spans education, debate, research, youth development, conferences, innovation, and civic initiatives. MUN Caravan is one part of this wider ecosystem.
            </p>
            <a href="#" style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 600,
              fontSize: 11, letterSpacing: '0.12em',
              color: '#1B3058', textDecoration: 'none',
              borderBottom: '1px solid #1B3058', paddingBottom: 2,
            }}>
              EXPLORE NEW RENAISSANCE BUILDERS →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 48 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              FREQUENTLY ASKED QUESTIONS
            </div>
          </div>
          {faqItems.map(({ q, a }) => (
            <div key={q} style={{ borderBottom: '1px solid #D4CEBD', padding: '28px 0' }}>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600, fontSize: 17, color: '#1B3058', marginBottom: 12 }}>
                {q}
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#6B6560', lineHeight: 1.7, maxWidth: 720 }}>
                {a}
              </p>
            </div>
          ))}
          <div style={{ paddingTop: 40 }}>
            <Link to="/contact" style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 600,
              fontSize: 11, letterSpacing: '0.12em',
              color: '#1B3058', textDecoration: 'none',
              borderBottom: '1px solid #1B3058', paddingBottom: 2,
            }}>
              MORE QUESTIONS? CONTACT US →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

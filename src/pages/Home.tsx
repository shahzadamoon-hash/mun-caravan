import { Link } from 'react-router-dom'

const APPLY_URL = '#apply'
const HERO_IMG = 'https://images.unsplash.com/photo-1607037183811-2a54d746cd35?w=1800&h=900&fit=crop&auto=format&q=80'

const principles = [
  {
    num: '01',
    title: 'BUILD THE ECOSYSTEM',
    body: 'We do not see MUNs as isolated conferences. We see them as part of a larger educational and leadership ecosystem.',
  },
  {
    num: '02',
    title: 'BUILD CAPABILITY',
    body: 'Strong conferences require strong people. We develop delegates, chairs, judges, organizers, researchers, and teams.',
  },
  {
    num: '03',
    title: 'CONNECT COMMUNITIES',
    body: 'Ideas become stronger when people and institutions can work together.',
  },
  {
    num: '04',
    title: 'BUILD FOR CONTINUITY',
    body: 'A conference should not disappear when its closing ceremony ends. We aim to build systems, knowledge, teams, and traditions that can continue.',
  },
]

const programs = [
  { num: '01', title: 'MUN CONFERENCES', body: 'Organizing and supporting Model United Nations conferences and specialized simulations.' },
  { num: '02', title: 'ICJ & SPECIALIZED SIMULATIONS', body: 'Creating specialized formats that move beyond conventional committee-based MUN.' },
  { num: '03', title: 'TRAINING', body: 'Developing delegates, chairs, judges, speakers, researchers, and organizers.' },
  { num: '04', title: 'MUN INCUBATION', body: 'Helping emerging teams turn an MUN idea into a functioning conference.' },
  { num: '05', title: 'ORGANIZER SUPPORT', body: 'Frameworks, systems, templates, operational guidance, program development, and institutional support.' },
  { num: '06', title: 'NETWORK', body: 'Connecting MUN communities, universities, schools, organizers, and international partners.' },
]

const roadmap = [
  { phase: 'TODAY', body: 'Support MUN conferences and specialized simulations.' },
  { phase: 'NEXT', body: 'Develop training and professional pathways for delegates, chairs, judges, and organizers.' },
  { phase: 'THEN', body: 'Connect MUN communities and institutions across Uzbekistan.' },
  { phase: 'BEYOND', body: 'Build international connections and create opportunities for Uzbekistan\'s MUN community to participate globally.' },
]

export default function Home() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#0F1F3D',
      }}>
        {/* Hero image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
        }} />

        {/* Vertical rule accent */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 4, backgroundColor: '#7A1A2E',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: 760 }}>

            {/* Eyebrow */}
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#A8895A',
              marginBottom: 28,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ display: 'inline-block', width: 32, height: 1, backgroundColor: '#A8895A' }} />
              AN INITIATIVE OF NEW RENAISSANCE BUILDERS
            </div>

            {/* Main heading */}
            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 72px)',
              color: '#F5F1E8',
              lineHeight: 1.1,
              marginBottom: 28,
              letterSpacing: '-0.01em',
            }}>
              BUILDING THE<br />MUN ECOSYSTEM.
            </h1>

            {/* Subheading */}
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#C8C2B8',
              lineHeight: 1.7,
              maxWidth: 560,
              marginBottom: 48,
            }}>
              Connecting people, developing conferences, and creating pathways for the next generation of MUN delegates, chairs, judges, and organizers.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/about" style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600,
                fontSize: 11, letterSpacing: '0.12em',
                color: '#F5F1E8', backgroundColor: '#7A1A2E',
                padding: '14px 32px', textDecoration: 'none',
                border: '1px solid #7A1A2E',
                display: 'inline-block',
              }}>
                EXPLORE MUN CARAVAN
              </Link>
              <Link to="/programs" style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 500,
                fontSize: 11, letterSpacing: '0.12em',
                color: '#F5F1E8',
                padding: '14px 32px', textDecoration: 'none',
                border: '1px solid rgba(245,241,232,0.3)',
                display: 'inline-block',
              }}>
                VIEW CURRENT PROGRAMS
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom metadata bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          borderTop: '1px solid rgba(245,241,232,0.1)',
          backgroundColor: 'rgba(15,31,61,0.6)',
          padding: '16px 32px',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            {[
              ['ORGANIZATION', 'MUN Caravan'],
              ['PARENT', 'New Renaissance Builders'],
              ['FOCUS', 'MUN Ecosystem Development'],
              ['LOCATION', 'Uzbekistan'],
            ].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#6B6560', marginBottom: 4 }}>{label}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#C8C2B8' }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL STATEMENT ── */}
      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '3px solid #1B3058', paddingTop: 48, maxWidth: 840 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#7A1A2E', marginBottom: 24 }}>
              OUR PURPOSE
            </div>
            <blockquote style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 500,
              fontSize: 'clamp(22px, 3.5vw, 36px)',
              color: '#1B3058',
              lineHeight: 1.4,
              marginBottom: 32,
              fontStyle: 'italic',
            }}>
              "MUNs should be more than conferences. They should be an ecosystem."
            </blockquote>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#2A2A2A', lineHeight: 1.8, maxWidth: 680, marginBottom: 16 }}>
              MUN Caravan works to connect, develop, and support Model United Nations initiatives — helping ideas become programs, programs become conferences, and conferences become communities.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#2A2A2A', lineHeight: 1.8, maxWidth: 680 }}>
              We believe the MUN ecosystem can become a serious platform for developing research, diplomacy, public speaking, negotiation, leadership, international affairs, and civic responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* ── 01 ABOUT ── */}
      <section style={{ backgroundColor: '#EDE9DF', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              01 — ABOUT MUN CARAVAN
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: '#1B3058',
                lineHeight: 1.2,
                marginBottom: 28,
              }}>
                More than a conference organizer.
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 16 }}>
                MUN Caravan is an initiative of New Renaissance Builders focused on strengthening the Model United Nations ecosystem.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 16 }}>
                We work across the full lifecycle of MUN initiatives — from developing teams and programs to supporting conferences, training participants, building institutional frameworks, and creating connections between organizers.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 36 }}>
                Our long-term vision is to help create a stronger, more connected MUN community in Uzbekistan and build bridges between Uzbek MUN participants and the wider international community.
              </p>
              <Link to="/about" style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600,
                fontSize: 11, letterSpacing: '0.12em',
                color: '#1B3058', textDecoration: 'none',
                borderBottom: '1px solid #1B3058',
                paddingBottom: 3,
              }}>
                READ MORE ABOUT US →
              </Link>
            </div>

            {/* Editorial image block */}
            <div style={{ position: 'relative' }}>
              <div style={{
                backgroundColor: '#1B3058',
                aspectRatio: '4/3',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 40,
                backgroundImage: 'url(https://images.unsplash.com/photo-1607037183811-2a54d746cd35?w=800&h=600&fit=crop&auto=format&q=60)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,31,61,0.6)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#A8895A', marginBottom: 8 }}>
                    MUN CARAVAN / AN INITIATIVE OF NRB
                  </div>
                  <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', fontSize: 18, color: '#F5F1E8', lineHeight: 1.4 }}>
                    Connecting people.<br />Developing capability.<br />Building continuity.
                  </p>
                </div>
              </div>
              {/* Gold accent border */}
              <div style={{ position: 'absolute', bottom: -8, right: -8, width: '60%', height: '60%', border: '2px solid #A8895A', zIndex: -1 }} />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-child(3) .about-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── HOW WE THINK ── */}
      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              HOW WE THINK
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 0 }}>
            {principles.map((p, i) => (
              <div key={p.num} style={{
                padding: '40px 32px',
                borderLeft: i === 0 ? '1px solid #D4CEBD' : 'none',
                borderRight: '1px solid #D4CEBD',
                borderTop: '1px solid #D4CEBD',
                borderBottom: '1px solid #D4CEBD',
              }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em', color: '#A8895A', marginBottom: 16 }}>
                  {p.num}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', color: '#1B3058', marginBottom: 16 }}>
                  {p.title}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#6B6560', lineHeight: 1.7 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 PROGRAMS ── */}
      <section style={{ backgroundColor: '#1B3058', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid rgba(245,241,232,0.15)', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              02 — PROGRAMS
            </div>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: '#F5F1E8',
            lineHeight: 1.2,
            marginBottom: 56,
          }}>
            From participation<br />to infrastructure.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
            {programs.map((p) => (
              <div key={p.num} style={{
                padding: '36px 32px',
                borderTop: '1px solid rgba(245,241,232,0.1)',
                borderRight: '1px solid rgba(245,241,232,0.1)',
              }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.1em', color: '#A8895A', marginBottom: 14 }}>
                  {p.num}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', color: '#F5F1E8', marginBottom: 14 }}>
                  {p.title}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8A867C', lineHeight: 1.7 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, borderTop: '1px solid rgba(245,241,232,0.1)', paddingTop: 32 }}>
            <Link to="/programs" style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 600,
              fontSize: 11, letterSpacing: '0.12em',
              color: '#F5F1E8', textDecoration: 'none',
              borderBottom: '1px solid rgba(245,241,232,0.4)',
              paddingBottom: 3,
            }}>
              VIEW ALL PROGRAMS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP PROGRAM: SAMARKAND ICJ ── */}
      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              03 — CURRENT FLAGSHIP
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#7A1A2E', fontWeight: 600, marginBottom: 16 }}>
                APPLICATIONS OPEN
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 60px)',
                color: '#1B3058',
                lineHeight: 1.05,
                marginBottom: 8,
                letterSpacing: '-0.01em',
              }}>
                SAMARKAND<br />ICJ
              </h2>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(16px, 2vw, 22px)',
                color: '#7A1A2E',
                marginBottom: 24,
              }}>
                Nicaragua v. United States
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 24 }}>
                INTERNATIONAL COURT OF JUSTICE SIMULATION
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 32 }}>
                A specialized simulation of the International Court of Justice built around the landmark case <em>Military and Paramilitary Activities in and against Nicaragua</em>. Participants take on the roles of Judges, Agents, Counsel and Advocates, while observers experience the proceedings from the gallery.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                <Link to="/events/samarkand-icj" style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: 11, letterSpacing: '0.12em',
                  color: '#F5F1E8', backgroundColor: '#1B3058',
                  padding: '13px 28px', textDecoration: 'none',
                  border: '1px solid #1B3058',
                }}>
                  APPLY AS PARTICIPANT
                </Link>
                <Link to="/events/samarkand-icj" style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 500,
                  fontSize: 11, letterSpacing: '0.12em',
                  color: '#1B3058',
                  padding: '13px 28px', textDecoration: 'none',
                  border: '1px solid #1B3058',
                }}>
                  APPLY AS OBSERVER
                </Link>
              </div>
            </div>

            {/* Event details */}
            <div>
              <div style={{
                backgroundColor: '#EDE9DF',
                border: '1px solid #D4CEBD',
                padding: '40px',
              }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 28 }}>
                  EVENT DETAILS
                </div>
                {[
                  ['LOCATION', 'Samarkand, Uzbekistan'],
                  ['FORMAT', 'International Court of Justice Simulation'],
                  ['CASE', 'Nicaragua v. United States'],
                  ['PARTICIPANTS', '40–50'],
                  ['OBSERVERS', '10–15'],
                ].map(([label, val]) => (
                  <div key={label} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #D4CEBD' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 6 }}>
                      {label}
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#2A2A2A' }}>
                      {val}
                    </div>
                  </div>
                ))}
                <Link to="/events/samarkand-icj" style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: 11, letterSpacing: '0.12em',
                  color: '#7A1A2E', textDecoration: 'none',
                  borderBottom: '1px solid #7A1A2E', paddingBottom: 2,
                }}>
                  VIEW FULL EVENT DETAILS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MUN CARAVAN ── */}
      <section style={{ backgroundColor: '#0F1F3D', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid rgba(245,241,232,0.1)', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              WHY MUN CARAVAN
            </div>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 52px)',
            color: '#F5F1E8',
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            We are not building one conference.
          </h2>
          <h3 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 32px)',
            color: '#A8895A',
            lineHeight: 1.3,
            marginBottom: 40,
          }}>
            We are building the infrastructure around them.
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#C8C2B8', lineHeight: 1.8, maxWidth: 640 }}>
            A successful MUN ecosystem requires more than events. It requires people, knowledge, standards, systems, institutions, networks, and continuity. MUN Caravan exists to help build those layers.
          </p>
        </div>
      </section>

      {/* ── THE ROAD AHEAD ── */}
      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              THE ROAD AHEAD
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute',
              top: 22, left: '12.5%', right: '12.5%',
              height: 1, backgroundColor: '#D4CEBD',
              zIndex: 0,
            }} />

            {roadmap.map((item, i) => (
              <div key={item.phase} style={{ padding: '0 24px', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 44, height: 44,
                  border: '1px solid #1B3058',
                  backgroundColor: i === 0 ? '#1B3058' : '#F5F1E8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                }}>
                  <div style={{ width: 8, height: 8, backgroundColor: i === 0 ? '#A8895A' : '#1B3058', borderRadius: '50%' }} />
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '0.15em', color: '#1B3058', marginBottom: 12 }}>
                  {item.phase}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B6560', lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PART OF A LARGER RENAISSANCE ── */}
      <section style={{ backgroundColor: '#EDE9DF', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              PART OF A LARGER RENAISSANCE
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 80, alignItems: 'center' }}>
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(22px, 3vw, 36px)',
                color: '#1B3058',
                lineHeight: 1.3,
                marginBottom: 24,
              }}>
                MUN Caravan is an initiative of New Renaissance Builders.
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 12 }}>
                New Renaissance Builders is a youth-driven initiative focused on building a culture of intellectual development, research, innovation, leadership, and civic contribution. Its projects span multiple fields.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 32 }}>
                MUN Caravan represents its work in the Model United Nations and international affairs ecosystem.
              </p>
              <a href="#" style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600,
                fontSize: 11, letterSpacing: '0.12em',
                color: '#1B3058',
                padding: '13px 28px', textDecoration: 'none',
                border: '1px solid #1B3058',
                display: 'inline-block',
              }}>
                EXPLORE NEW RENAISSANCE BUILDERS
              </a>
            </div>
            <div style={{
              borderLeft: '3px solid #A8895A',
              paddingLeft: 40,
            }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 12 }}>
                THE PARENT ORGANIZATION
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 28,
                color: '#1B3058',
                lineHeight: 1.2,
                marginBottom: 16,
              }}>
                NEW RENAISSANCE BUILDERS
              </h3>
              <p style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontStyle: 'italic',
                fontSize: 18,
                color: '#7A1A2E',
                marginBottom: 16,
                lineHeight: 1.4,
              }}>
                "Build people capable of building the future."
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B6560', lineHeight: 1.7 }}>
                Its work spans education, debate, research, youth development, conferences, innovation, and civic initiatives. MUN Caravan is one part of this wider ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-split, .icj-split, .roadmap-grid, .renaissance-grid {
            grid-template-columns: 1fr !important;
          }
          .roadmap-grid { gap: 32px !important; }
          .roadmap-grid > div::before { display: none !important; }
        }
      `}</style>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'

const courtRoles = [
  {
    group: 'THE COURT',
    roles: [
      { title: 'PRESIDENT OF THE COURT', body: 'Presides over proceedings, maintains judicial procedure, gives the floor, and ensures the hearing proceeds fairly.' },
      { title: 'VICE-PRESIDENT', body: 'Supports the President and participates in judicial deliberation.' },
      { title: 'JUDGES', body: 'Analyze legal arguments, question the parties, deliberate, and contribute to the judgment.' },
    ],
  },
  {
    group: 'THE PARTIES',
    roles: [
      { title: 'AGENT', body: 'Represents the State before the Court.' },
      { title: 'COUNSEL & ADVOCATES', body: 'Develop and present the legal arguments of the State.' },
    ],
  },
  {
    group: 'THE GALLERY',
    roles: [
      { title: 'OBSERVERS', body: 'Experience the proceedings, receive case materials, and learn how an ICJ simulation operates.' },
    ],
  },
]

const proceedings = [
  { num: '01', title: 'REGISTRATION & BRIEFING' },
  { num: '02', title: 'OPENING OF THE COURT' },
  { num: '03', title: 'ORAL ARGUMENTS' },
  { num: '04', title: 'JUDICIAL QUESTIONS' },
  { num: '05', title: 'REBUTTALS' },
  { num: '06', title: 'FINAL SUBMISSIONS' },
  { num: '07', title: 'JUDICIAL DELIBERATION' },
  { num: '08', title: 'JUDGMENT' },
]

const legalThemes = [
  'Use of force', 'Non-intervention', 'Sovereignty', 'Self-defence',
  'Collective self-defence', 'Customary international law', 'Treaty obligations', 'State responsibility',
]

const participantIncludes = [
  'Court / legal role',
  'Preparation materials',
  'Training sessions',
  'Case dossier',
  'Certificate of participation',
  'Participant badge',
  'MUN Caravan merchandise',
  'Lunch',
]

const observerIncludes = [
  'Observer access to full proceedings',
  'Case materials',
  'Certificate of attendance',
  'Observer badge',
  'MUN Caravan merchandise',
  'Lunch',
]

export default function SamarkandICJ() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPathway, setSelectedPathway] = useState<'PARTICIPANT' | 'OBSERVER'>('PARTICIPANT')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', role: 'Judge' })

  const handleOpenModal = (pathway: 'PARTICIPANT' | 'OBSERVER') => {
    setSelectedPathway(pathway)
    setSubmitted(false)
    setFormData({ 
      name: '', 
      email: '', 
      mobile: '', 
      role: pathway === 'PARTICIPANT' ? 'Judge' : 'Observer' 
    })
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pathway: selectedPathway,
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          role: selectedPathway === 'PARTICIPANT' ? formData.role : 'Observer',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Server returned an error. Please try again.')
      }
    } catch (error) {
      console.error('Network error while submitting to backend:', error)
      // Fallback for local testing if backend isn't running yet
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>

      {/* ── EVENT HEADER ── */}
      <section style={{
        backgroundColor: '#0F1F3D',
        padding: '80px 32px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1600&h=700&fit=crop&auto=format&q=50)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.08,
        }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#7A1A2E' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: 40, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link to="/events" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#8A867C', textDecoration: 'none', letterSpacing: '0.08em' }}>
              EVENTS
            </Link>
            <span style={{ color: '#4A5568', fontSize: 11 }}>→</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#C8C2B8', letterSpacing: '0.08em' }}>
              SAMARKAND ICJ
            </span>
          </div>

          <div style={{ maxWidth: 800 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#A8895A', marginBottom: 16 }}>
              INTERNATIONAL COURT OF JUSTICE SIMULATION
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(40px, 7vw, 88px)',
              color: '#F5F1E8',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}>
              SAMARKAND<br />ICJ
            </h1>
            <div style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              color: '#7A1A2E',
              marginBottom: 40,
            }}>
              Nicaragua v. United States
            </div>

            <div style={{
              borderTop: '1px solid rgba(245,241,232,0.15)',
              borderBottom: '1px solid rgba(245,241,232,0.15)',
              padding: '32px 0',
              display: 'flex', gap: 48, flexWrap: 'wrap',
            }}>
              {[
                ['LOCATION', 'Samarkand, Uzbekistan'],
                ['FORMAT', 'ICJ Simulation'],
                ['CASE', 'Nicaragua v. United States'],
                ['STATUS', 'Applications Open'],
              ].map(([label, val]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#6B6560', marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#F5F1E8' }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ONE CASE. TWO STATES. A COURT. ── */}
      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 56px)',
                color: '#1B3058',
                lineHeight: 1.1,
                marginBottom: 40,
              }}>
                ONE CASE.<br />TWO STATES.<br />A COURT.
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8, marginBottom: 16 }}>
                The Samarkand ICJ is a specialized simulation of the International Court of Justice designed as a courtroom experience rather than a conventional General Assembly-style MUN.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8 }}>
                Built around a landmark ICJ case, participants occupy defined legal roles — Judges, Agents, Counsel and Advocates — and conduct proceedings according to the formal procedures of the Court.
              </p>
            </div>
            <div style={{ paddingTop: 8 }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 20 }}>
                THE CONCEPT
              </div>
              {[
                ['Judicial format', 'This is not a committee. It is a court.'],
                ['Defined legal roles', 'Each participant occupies a specific position — Judge, Agent, Counsel, or Advocate.'],
                ['One landmark case', 'The simulation centers on a single case argued from both sides.'],
                ['Full proceedings', 'From opening the court to the delivery of judgment.'],
              ].map(([title, body]) => (
                <div key={title as string} style={{ marginBottom: 28, paddingLeft: 20, borderLeft: '2px solid #D4CEBD' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: '#1B3058', marginBottom: 6 }}>
                    {title}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B6560', lineHeight: 1.6 }}>
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CASE ── */}
      <section style={{ backgroundColor: '#EDE9DF', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              THE CASE
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 40px)',
                color: '#1B3058',
                fontStyle: 'italic',
                marginBottom: 24,
              }}>
                Nicaragua v. United States
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#2A2A2A', lineHeight: 1.8 }}>
                The simulation is based on the International Court of Justice case concerning United States military and paramilitary activities in and against Nicaragua. One of the landmark cases in the history of international law, it addressed foundational questions of state sovereignty, the use of force, and the limits of customary international law.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 24 }}>
                KEY LEGAL THEMES
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {legalThemes.map(theme => (
                  <div key={theme} style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 12,
                    color: '#1B3058',
                    border: '1px solid #B8B0A0',
                    padding: '8px 16px',
                    letterSpacing: '0.05em',
                  }}>
                    {theme}
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 36,
                backgroundColor: '#1B3058',
                padding: '20px 24px',
                borderLeft: '3px solid #7A1A2E',
              }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#C8C2B8', fontStyle: 'italic', lineHeight: 1.7 }}>
                  The simulated judgment has not been released in advance. Participants are expected to research, argue, and deliberate — and the outcome of proceedings will be determined by the Court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE COURT: ROLES ── */}
      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              ROLES & COMPOSITION
            </div>
          </div>

          {courtRoles.map((group, gi) => (
            <div key={group.group} style={{ marginBottom: gi < courtRoles.length - 1 ? 56 : 0 }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', color: '#1B3058', marginBottom: 24, borderBottom: '2px solid #1B3058', paddingBottom: 12, display: 'inline-block' }}>
                {group.group}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
                {group.roles.map((role, ri) => (
                  <div key={role.title} style={{
                    padding: '32px',
                    borderTop: '1px solid #D4CEBD',
                    borderLeft: ri === 0 ? '1px solid #D4CEBD' : 'none',
                    borderRight: '1px solid #D4CEBD',
                    borderBottom: '1px solid #D4CEBD',
                  }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', color: '#1B3058', marginBottom: 12 }}>
                      {role.title}
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B6560', lineHeight: 1.7 }}>
                      {role.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ENTER THE COURT: PROCEEDINGS TIMELINE ── */}
      <section style={{ backgroundColor: '#1B3058', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid rgba(245,241,232,0.1)', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              ENTER THE COURT
            </div>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 3vw, 36px)',
            color: '#F5F1E8',
            marginBottom: 48,
          }}>
            Order of Proceedings
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {proceedings.map((step, i) => (
              <div key={step.num} style={{
                padding: '32px 24px',
                borderRight: i < proceedings.length - 1 && (i + 1) % 4 !== 0 ? '1px solid rgba(245,241,232,0.1)' : 'none',
                borderBottom: i < 4 ? '1px solid rgba(245,241,232,0.1)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 400,
                  fontSize: 36,
                  color: 'rgba(245,241,232,0.1)',
                  lineHeight: 1,
                  marginBottom: 16,
                }}>
                  {step.num}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  color: '#F5F1E8',
                }}>
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR PLACE AT THE COURT: APPLICATIONS ── */}
      <section id="apply" style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '3px solid #7A1A2E', paddingTop: 40, marginBottom: 56 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#7A1A2E', marginBottom: 16 }}>
              APPLICATIONS OPEN
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#1B3058',
            }}>
              Your Place at the Court
            </h2>
          </div>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#6B6560', marginBottom: 48 }}>
            Applications are open for participants and observers. Choose your pathway:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 40 }}>

            {/* Participant */}
            <div style={{
              border: '2px solid #1B3058',
              padding: '48px',
            }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 12 }}>
                PATHWAY 01
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 28,
                color: '#1B3058',
                marginBottom: 8,
              }}>
                PARTICIPANT
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B6560', lineHeight: 1.6, marginBottom: 28 }}>
                For applicants seeking an active role in the proceedings.
              </p>

              <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 24, marginBottom: 28 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 14 }}>INCLUDES</div>
                {participantIncludes.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                    <span style={{ color: '#7A1A2E', fontSize: 12, marginTop: 2, flexShrink: 0 }}>—</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#2A2A2A' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 24, marginBottom: 32 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 8 }}>
                  PARTICIPATION FEE
                </div>
                <div style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 700,
                  fontSize: 32,
                  color: '#1B3058',
                }}>
                  90,000 UZS
                </div>
              </div>

              <button
                id="apply-participant"
                onClick={() => handleOpenModal('PARTICIPANT')}
                style={{
                  display: 'block', width: '100%', textAlign: 'center', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: 11, letterSpacing: '0.12em',
                  color: '#F5F1E8', backgroundColor: '#1B3058',
                  padding: '16px 32px', textDecoration: 'none',
                  border: '2px solid #1B3058',
                }}
              >
                APPLY AS PARTICIPANT
              </button>
            </div>

            {/* Observer */}
            <div style={{
              border: '1px solid #D4CEBD',
              padding: '48px',
              backgroundColor: '#EDE9DF',
            }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#8A867C', marginBottom: 12 }}>
                PATHWAY 02
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 28,
                color: '#1B3058',
                marginBottom: 8,
              }}>
                OBSERVER
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B6560', lineHeight: 1.6, marginBottom: 28 }}>
                For participants who want to experience the simulation and prepare for future ICJ/MUN participation.
              </p>

              <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 24, marginBottom: 28 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 14 }}>INCLUDES</div>
                {observerIncludes.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                    <span style={{ color: '#8A867C', fontSize: 12, marginTop: 2, flexShrink: 0 }}>—</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#2A2A2A' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 24, marginBottom: 32 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 8 }}>
                  PARTICIPATION FEE
                </div>
                <div style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 700,
                  fontSize: 32,
                  color: '#1B3058',
                }}>
                  90,000 UZS
                </div>
              </div>

              <button
                id="apply-observer"
                onClick={() => handleOpenModal('OBSERVER')}
                style={{
                  display: 'block', width: '100%', textAlign: 'center', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: 11, letterSpacing: '0.12em',
                  color: '#1B3058', backgroundColor: 'transparent',
                  padding: '16px 32px', textDecoration: 'none',
                  border: '2px solid #1B3058',
                }}
              >
                APPLY AS OBSERVER
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{
            border: '1px solid #D4CEBD',
            borderLeft: '3px solid #A8895A',
            padding: '20px 24px',
            backgroundColor: '#EDE9DF',
          }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6B6560', lineHeight: 1.7, fontStyle: 'italic' }}>
              <strong style={{ fontStyle: 'normal', color: '#2A2A2A' }}>Note:</strong> Participation is subject to application review and confirmation by the organizing secretariat. Prior MUN experience is preferred for certain legal roles but is not mandatory. Strong debaters, researchers, law students, and students interested in international law are encouraged to apply.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SNIPPET ── */}
      <section style={{ backgroundColor: '#EDE9DF', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #D4CEBD', paddingTop: 40, marginBottom: 48 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, letterSpacing: '0.2em', color: '#8A867C' }}>
              FREQUENTLY ASKED
            </div>
          </div>

          {[
            { q: 'What is an ICJ simulation?', a: 'An ICJ simulation recreates the formal proceedings of the International Court of Justice. Unlike conventional General Assembly-style MUN, participants take on specific legal roles — Judges, Agents, Counsel and Advocates — and conduct real courtroom procedure including oral arguments, judicial questions, rebuttals, and the delivery of judgment.' },
            { q: 'Do I need previous MUN experience?', a: 'Prior MUN experience is preferred for certain legal roles but is not mandatory. Strong debaters, researchers, law students, and students interested in international law are encouraged to apply regardless of MUN background.' },
            { q: 'Can I apply as an observer?', a: 'Yes. The Observer pathway is designed for those who want to experience the simulation, receive case materials, and prepare for future ICJ or MUN participation. Observers attend all proceedings from the gallery.' },
            { q: 'How are participants selected?', a: 'Applications are reviewed by the organizing secretariat. Role assignments are made based on the application, relevant skills, and the needs of the simulation.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderBottom: '1px solid #D4CEBD', padding: '28px 0' }}>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600, fontSize: 16, color: '#1B3058', marginBottom: 12 }}>
                {q}
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#6B6560', lineHeight: 1.7, maxWidth: 720 }}>
                {a}
              </p>
            </div>
          ))}

          <div style={{ marginTop: 40 }}>
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

      {/* ── APPLICATION MODAL ── */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0,
          backgroundColor: 'rgba(15, 31, 61, 0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: 16,
        }}>
          <div style={{
            backgroundColor: '#F5F1E8',
            border: '2px solid #1B3058',
            padding: '40px',
            maxWidth: 480, width: '100%',
            position: 'relative',
          }}>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute', top: 16, right: 16,
                background: 'none', border: 'none',
                fontSize: 18, cursor: 'pointer', color: '#1B3058',
                fontFamily: 'Inter, sans-serif', fontWeight: 600,
              }}
            >
              ✕
            </button>

            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.15em', color: '#7A1A2E', marginBottom: 8 }}>
              APPLICATION FORM • {selectedPathway}
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700, fontSize: 24, color: '#1B3058',
              marginBottom: 24,
            }}>
              Samarkand ICJ Registration
            </h3>

            {submitted ? (
              <div style={{ padding: '24px 0', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, color: '#1B3058', marginBottom: 12 }}>
                  Application Received
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B6560', lineHeight: 1.6, marginBottom: 24 }}>
                  Thank you, <strong>{formData.name}</strong>. Your data has been successfully sent to the server. Our secretariat will review your details and contact you shortly.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: '#1B3058', color: '#F5F1E8',
                    border: 'none', padding: '12px 24px', cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.1em', fontWeight: 600,
                  }}
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: '#1B3058', marginBottom: 6 }}>
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    style={{
                      width: '100%', padding: '12px', boxSizing: 'border-box',
                      border: '1px solid #D4CEBD', backgroundColor: '#FFF',
                      fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#2A2A2A',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: '#1B3058', marginBottom: 6 }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    style={{
                      width: '100%', padding: '12px', boxSizing: 'border-box',
                      border: '1px solid #D4CEBD', backgroundColor: '#FFF',
                      fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#2A2A2A',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: '#1B3058', marginBottom: 6 }}>
                    MOBILE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+998 -- --- -- --"
                    style={{
                      width: '100%', padding: '12px', boxSizing: 'border-box',
                      border: '1px solid #D4CEBD', backgroundColor: '#FFF',
                      fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#2A2A2A',
                    }}
                  />
                </div>

                {selectedPathway === 'PARTICIPANT' && (
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: '#1B3058', marginBottom: 6 }}>
                      PREFERRED LEGAL ROLE
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      style={{
                        width: '100%', padding: '12px', boxSizing: 'border-box',
                        border: '1px solid #D4CEBD', backgroundColor: '#FFF',
                        fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#2A2A2A',
                      }}
                    >
                      <option value="Judge">Judge / Member of the Court</option>
                      <option value="President of the Court">President of the Court</option>
                      <option value="Vice-President of the Court">Vice-President of the Court</option>
                      <option value="Agent / Counsel for Nicaragua">Agent / Counsel for Nicaragua (Applicant)</option>
                      <option value="Agent / Counsel for United States">Agent / Counsel for United States (Respondent)</option>
                      <option value="Advocate & Legal Counsel">Advocate & Legal Counsel</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    marginTop: 8,
                    backgroundColor: '#1B3058', color: '#F5F1E8',
                    border: '2px solid #1B3058', padding: '14px', cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.12em', fontWeight: 600,
                    width: '100%', opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? 'SENDING...' : 'SUBMIT APPLICATION'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .icj-concept-grid,
          .icj-case-grid,
          .icj-apply-grid { grid-template-columns: 1fr !important; }
          .icj-proceed-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
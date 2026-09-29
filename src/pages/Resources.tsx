const resourceCategories = [
  {
    title: 'MUN GUIDES',
    items: [
      { name: 'Introduction to Model United Nations', status: 'COMING SOON' },
      { name: 'How to Research a Position Paper', status: 'COMING SOON' },
      { name: 'Rules of Procedure: A Practical Guide', status: 'COMING SOON' },
    ],
  },
  {
    title: 'CHAIR RESOURCES',
    items: [
      { name: 'Chairing a Committee: Fundamentals', status: 'COMING SOON' },
      { name: 'Managing Debate and Procedure', status: 'COMING SOON' },
    ],
  },
  {
    title: 'DELEGATE RESOURCES',
    items: [
      { name: 'Writing an Effective Position Paper', status: 'COMING SOON' },
      { name: 'Negotiation and Caucusing', status: 'COMING SOON' },
      { name: 'Public Speaking for MUN', status: 'COMING SOON' },
    ],
  },
  {
    title: 'ICJ & INTERNATIONAL LAW',
    items: [
      { name: 'Introduction to ICJ Procedure', status: 'COMING SOON' },
      { name: 'Key Concepts in International Law', status: 'COMING SOON' },
      { name: 'Customary International Law: An Overview', status: 'COMING SOON' },
    ],
  },
  {
    title: 'CONFERENCE FRAMEWORKS',
    items: [
      { name: 'Organizing Your First MUN Conference', status: 'COMING SOON' },
      { name: 'Secretariat Structure and Roles', status: 'COMING SOON' },
    ],
  },
  {
    title: 'ORGANIZER TEMPLATES',
    items: [
      { name: 'Conference Planning Timeline', status: 'COMING SOON' },
      { name: 'Committee Agenda Template', status: 'COMING SOON' },
      { name: 'Application Form Framework', status: 'COMING SOON' },
    ],
  },
]

export default function Resources() {
  return (
    <div>
      <section style={{ backgroundColor: '#0F1F3D', padding: '80px 32px 64px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#7A1A2E' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#A8895A', marginBottom: 16 }}>
            05 — RESOURCES
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#F5F1E8',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            A growing knowledge base<br />for the MUN community.
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#C8C2B8', maxWidth: 560, lineHeight: 1.7 }}>
            MUN Caravan is building an institutional knowledge base — guides, frameworks, templates, and reference materials for delegates, chairs, organizers, and researchers.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F1E8', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{
            border: '1px solid #D4CEBD',
            borderLeft: '3px solid #A8895A',
            padding: '20px 24px',
            backgroundColor: '#EDE9DF',
            marginBottom: 64,
          }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B6560', fontStyle: 'italic', lineHeight: 1.7 }}>
              The Resources library is currently under development. Materials will be published as they are completed and reviewed. Subscribe to MUN Caravan updates to be notified when new resources are released.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 0 }}>
            {resourceCategories.map((cat, ci) => (
              <div key={cat.title} style={{
                padding: '40px 32px',
                borderTop: '1px solid #D4CEBD',
                borderLeft: ci % 3 === 0 ? '1px solid #D4CEBD' : 'none',
                borderRight: '1px solid #D4CEBD',
                borderBottom: '1px solid #D4CEBD',
              }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '0.12em', color: '#1B3058', marginBottom: 24 }}>
                  {cat.title}
                </div>
                {cat.items.map(item => (
                  <div key={item.name} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    gap: 12, padding: '12px 0',
                    borderBottom: '1px solid #EDE9DF',
                  }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8A867C' }}>
                      {item.name}
                    </span>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 8,
                      letterSpacing: '0.1em', color: '#B8B0A0',
                      whiteSpace: 'nowrap', border: '1px solid #D4CEBD',
                      padding: '3px 8px',
                    }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

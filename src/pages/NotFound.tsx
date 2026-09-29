import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 72px)',
      backgroundColor: '#F5F1E8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 32px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: '#8A867C', marginBottom: 16 }}>
          ERROR — 404
        </div>
        <h1 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 700,
          fontSize: 64,
          color: '#1B3058',
          lineHeight: 1,
          marginBottom: 20,
        }}>
          Not Found
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#6B6560', lineHeight: 1.7, marginBottom: 40 }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 600,
          fontSize: 11, letterSpacing: '0.12em',
          color: '#F5F1E8', backgroundColor: '#1B3058',
          padding: '14px 32px', textDecoration: 'none',
          display: 'inline-block',
        }}>
          RETURN TO HOME
        </Link>
      </div>
    </div>
  )
}

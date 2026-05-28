import { personal } from '../data'

export default function Footer() {
  return (
    <footer style={{
      padding: '24px 5%',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      textAlign: 'center',
      color: 'var(--subtle)',
      fontSize: '0.8rem',
    }}>
      <p>
        Built by{' '}
        <span className="gradient-text" style={{ fontWeight: 700 }}>{personal.name}</span>
        {' '}— {new Date().getFullYear()}
        <span style={{ margin: '0 10px', opacity: 0.3 }}>·</span>
        <span style={{ opacity: 0.4 }}>React · Vite · localStorage</span>
      </p>
    </footer>
  )
}

import { useRef } from 'react'
import { personal } from '../data'
import { useScrollReveal } from '../context'

export default function Contact() {
  const ref = useRef()
  useScrollReveal(ref)

  return (
    <div ref={ref} style={{ paddingTop: 'var(--nav-h)' }}>
      <section className="section">
        <div className="inner" style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>

          <h1 className="sec-title sr" style={{ display: 'inline-block' }}>Get in Touch</h1>

          <p className="sr d1" style={{ color: 'var(--subtle)', lineHeight: 1.85, margin: '18px 0 38px', fontSize: '0.97rem' }}>
            I'm open to internships, research collaborations, and team projects — especially in software architecture, distributed systems, or ML applications. If you're building something interesting, I'd love to hear about it.
          </p>

          {/* Buttons */}
          <div className="sr d2" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <a href={`mailto:${personal.email}`} className="btn btn-primary" style={{ padding: '13px 32px' }}>
              📧 Send Email
            </a>
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '13px 26px' }}>
                LinkedIn
              </a>
            )}
            {personal.github && (
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '13px 26px' }}>
                GitHub
              </a>
            )}
          </div>

          {/* Email pill */}
          <div className="sr d3 glass" style={{ display: 'inline-block', padding: '13px 26px', marginBottom: 56 }}>
            <span className="mono" style={{ color: 'var(--muted)', fontSize: '0.87rem' }}>{personal.email}</span>
          </div>

          {/* Info cards */}
          <div className="sr d4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 14, textAlign: 'left' }}>
            {[
              { icon: '📍', title: 'Location', body: 'Ibagué, Colombia' },
              { icon: '🌍', title: 'Languages', body: 'Spanish (native) · English (professional)' },
              { icon: '✈️', title: 'Availability', body: 'Open to remote or on-site opportunities' },
              { icon: '📚', title: 'Status', body: 'Current Systems Engineering student' },
            ].map(c => (
              <div key={c.title} className="glass" style={{ padding: '18px 20px' }}>
                <p style={{ fontSize: '1.3rem', marginBottom: 8 }}>{c.icon}</p>
                <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.82rem', marginBottom: 4 }}>{c.title}</p>
                <p style={{ color: 'var(--subtle)', fontSize: '0.79rem', lineHeight: 1.55 }}>{c.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

import { useRef } from 'react'
import { skills, certifications } from '../data'
import { useApp, useScrollReveal } from '../context'
import { CertAdmin } from '../components/Admin'

export default function Skills() {
  const { adminMode, store } = useApp()
  const ref = useRef()
  useScrollReveal(ref)

  return (
    <div ref={ref} style={{ paddingTop: 'var(--nav-h)' }}>
      <section className="section">
        <div className="inner">
          <h1 className="sec-title sr">Skills</h1>
          <p className="sr d1" style={{ color: 'var(--subtle)', marginBottom: 48, maxWidth: 560, marginTop: 8 }}>
            Software architecture and design patterns are the foundation. Machine learning, game systems, and web development build on top of it.
          </p>

          {/* Skills grid — architecture listed first in data.js */}
          <div className="skills-grid sr d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 16 }}>
            {Object.entries(skills).map(([category, items], i) => (
              <div
                key={category}
                className="glass"
                style={{
                  padding: '22px',
                  // Make the Architecture card slightly more prominent
                  ...(i === 0 ? { border: '1px solid rgba(99,102,241,0.28)', background: 'rgba(99,102,241,0.04)' } : {}),
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 13 }}>
                  <span className="gradient-text">{category}</span>
                  {i === 0 && <span style={{ marginLeft: 8, fontSize: '0.65rem', color: '#818cf8', background: 'rgba(99,102,241,0.12)', padding: '2px 8px', borderRadius: 10, verticalAlign: 'middle' }}>Primary</span>}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {items.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="sr d3" style={{ marginTop: 56 }}>
            <h2 style={{ fontWeight: 700, color: 'var(--muted)', marginBottom: 20, fontSize: '1rem', letterSpacing: '0.04em' }}>
              Certifications
            </h2>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {certifications.map(cert => {
                const cd     = store.certs?.[cert.id] || {}
                const imgSrc = cd.image || cd.imageUrl

                return (
                  <div key={cert.id} className="glass" style={{ padding: 22, maxWidth: 480, flex: 1, minWidth: 270 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.7rem', flexShrink: 0 }}>📜</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem' }}>{cert.name}</p>
                        <p style={{ color: 'var(--subtle)', fontSize: '0.77rem', marginTop: 2 }}>{cert.issuer}</p>
                        <p style={{ color: 'var(--muted)', fontSize: '0.83rem', marginTop: 8, lineHeight: 1.65 }}>{cert.note}</p>

                        {imgSrc && (
                          <div style={{ marginTop: 14 }}>
                            <img
                              src={imgSrc}
                              alt="Certificate"
                              style={{ width: '100%', borderRadius: 8, border: '1px solid var(--border)', cursor: 'pointer', transition: 'transform 0.2s' }}
                              onClick={() => window.open(imgSrc, '_blank')}
                              onMouseEnter={e => { e.target.style.transform = 'scale(1.015)' }}
                              onMouseLeave={e => { e.target.style.transform = 'scale(1)' }}
                            />
                            <p style={{ fontSize: '0.7rem', color: 'var(--subtle)', marginTop: 4 }}>Click to view full size</p>
                          </div>
                        )}

                        {adminMode && <CertAdmin certId={cert.id} />}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

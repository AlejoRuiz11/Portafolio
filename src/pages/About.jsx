import { useRef } from 'react'
import { personal, education, adaptability, hobbies } from '../data'
import { useScrollReveal } from '../context'

export default function About() {
  const ref = useRef()
  useScrollReveal(ref)

  return (
    <div ref={ref} style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── Bio ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="inner about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>

          <div>
            <h1 className="sec-title sr">About Me</h1>

            <p className="sr d1" style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 16, fontSize: '0.97rem', marginTop: 22 }}>
              I'm a Systems Engineering student from Ibagué, Colombia — holding the Talento Tolima full scholarship at Universidad de Ibagué. My focus is on software architecture and principled system design: I want to understand not just how to build things, but why certain structures hold up better under change and complexity.
            </p>
            <p className="sr d2" style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 16, fontSize: '0.97rem' }}>
              I've built 3D simulation systems in Unity, multi-tier enterprise applications with Spring Boot and Django, and machine learning pipelines in R. In every project, architectural thinking comes first — clean separation of concerns, the right pattern for the right problem.
            </p>
            <p className="sr d3" style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 28, fontSize: '0.97rem' }}>
              I also have a solid foundation in probability and Bayesian statistics — developed through formal coursework, certification, and projects like SearchMe. I work with PyTorch and have hands-on experience with PyMC for probabilistic programming and Bayesian modeling.
            </p>

            <div className="sr d4" style={{ display: 'flex', gap: 11, flexWrap: 'wrap' }}>
              <a href={`mailto:${personal.email}`} className="btn btn-primary">Contact Me</a>
              {personal.github   && <a href={personal.github}   target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>}
              {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>}
            </div>
          </div>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13, marginTop: 52 }}>
            {[
              { icon: '🏗️', val: '14+', label: 'Design Patterns'  },
              { icon: '🌍', val: '3',   label: 'Countries'         },
              { icon: '📦', val: '8+',  label: 'Projects Built'    },
              { icon: '💻', val: '9+',  label: 'Languages'         },
              { icon: '🤖', val: '5+',  label: 'ML Algorithms'     },
              { icon: '📊', val: 'Cert', label: 'Bayesian Stats'   },
            ].map((s, i) => (
              <div key={s.label} className={`stat-card sr d${i + 1}`}>
                <div style={{ fontSize: '1.7rem', marginBottom: 7 }}>{s.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', marginBottom: 3 }}>{s.val}</div>
                <div style={{ color: 'var(--subtle)', fontSize: '0.74rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Adaptability ──────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="inner">
          <h2 className="sec-title sr" style={{ fontSize: '1.5rem' }}>International Experience &amp; Soft Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: 12, marginTop: 28 }}>
            {adaptability.map((a, i) => (
              <div key={i} className={`glass sr d${i + 1}`} style={{ padding: '16px 18px', display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: 1 }}>{a.icon}</span>
                <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.72 }}>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="inner">
          <h2 className="sec-title sr" style={{ fontSize: '1.5rem' }}>Education</h2>
          <p className="sr d1" style={{ color: 'var(--subtle)', marginBottom: 36, marginTop: 8 }}>Three countries, two scholarships, one engineering degree in progress.</p>

          <div className="tl-wrap" style={{ maxWidth: 780 }}>
            <div className="tl-line" />
            {education.map((e, i) => (
              <div key={e.id} className={`sr d${i + 1}`} style={{ position: 'relative', marginBottom: 20, paddingTop: 8 }}>
                <div className="tl-dot" style={{ top: 16 }} />
                <div className="glass" style={{ padding: '19px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text)' }}>{e.institution}</span>
                    <span className="mono" style={{ color: '#818cf8', fontSize: '0.77rem', fontWeight: 500 }}>{e.period}</span>
                  </div>
                  <p style={{ color: '#06b6d4', fontWeight: 600, marginTop: 5, fontSize: '0.89rem' }}>{e.degree}</p>
                  {e.note && <p style={{ color: 'var(--subtle)', fontSize: '0.79rem', marginTop: 5 }}>📌 {e.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hobbies ───────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 90 }}>
        <div className="inner">
          <h2 className="sec-title sr" style={{ fontSize: '1.5rem' }}>Outside of Code</h2>
          <p className="sr d1" style={{ color: 'var(--subtle)', marginBottom: 32, marginTop: 8 }}>
            When I'm not building software or reading about it.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: 12 }}>
            {hobbies.map((h, i) => (
              <div key={h.name} className={`hobby-card sr d${(i % 5) + 1}`}>
                <span style={{ fontSize: '2rem' }}>{h.icon}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.8rem', fontWeight: 600 }}>{h.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

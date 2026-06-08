import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { personal, projects, archPatterns } from '../data'
import { useApp, useScrollReveal } from '../context'

const CAT_CLASS = { arch: 'badge-arch', sim: 'badge-sim', ml: 'badge-ml', web: 'badge-web' }
const CAT_LABEL = { arch: '🏗️ Architecture', sim: '🎮 Simulation', ml: '🤖 ML / AI', web: '🌐 Web' }

export default function Home() {
  const { setModal } = useApp()
  const ref = useRef()
  useScrollReveal(ref)

  const featured = projects.filter(p => p.highlight)

  return (
    <div ref={ref}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 5% 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 580, height: 580, left: -110, top: -70, background: 'rgba(99,102,241,0.1)' }} />
        <div className="blob" style={{ width: 420, height: 420, right: -70, top: '10%', background: 'rgba(6,182,212,0.07)' }} />
        <div className="blob" style={{ width: 300, height: 300, left: '35%', bottom: -40, background: 'rgba(99,102,241,0.06)' }} />

        <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 56, alignItems: 'center' }}>

            {/* Left */}
            <div>
              <div className="pill" style={{ marginBottom: 26, animation: 'pageIn .4s ease both' }}>
                🏗️ Systems Engineering · Software Architecture
              </div>

              <h1 style={{ fontSize: 'clamp(2.6rem,6vw,4.8rem)', fontWeight: 900, lineHeight: 1.06, marginBottom: 14, animation: 'pageIn .45s .06s ease both' }}>
                I'm <span className="gradient-text">{personal.name}</span>
              </h1>

              <h2 style={{ fontSize: 'clamp(0.95rem,2vw,1.2rem)', fontWeight: 500, color: 'var(--muted)', marginBottom: 20, animation: 'pageIn .45s .12s ease both' }}>
                {personal.tagline}
              </h2>

              <p style={{ color: 'var(--subtle)', lineHeight: 1.85, maxWidth: 570, marginBottom: 34, fontSize: '0.97rem', animation: 'pageIn .45s .18s ease both' }}>
                {personal.bio}
              </p>

              <div style={{ display: 'flex', gap: 11, flexWrap: 'wrap', marginBottom: 44, animation: 'pageIn .45s .24s ease both' }}>
                <Link to="/projects" className="btn btn-primary">View Projects</Link>
                <Link to="/about"    className="btn btn-ghost">About Me</Link>
                <a href={`mailto:${personal.email}`} className="btn btn-ghost">Contact</a>
              </div>

              {/* Stats */}
              <div className="stats-row" style={{ display: 'flex', gap: 28, flexWrap: 'wrap', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.05)', animation: 'pageIn .45s .3s ease both' }}>
                {[
                  { icon: '🏗️', val: '14+', label: 'Patterns' },
                  { icon: '🌍', val: '3',   label: 'Countries' },
                  { icon: '📦', val: '8+',  label: 'Projects'  },
                  { icon: '💻', val: '9+',  label: 'Languages' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: 3 }}>{s.icon}</div>
                    <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text)' }}>{s.val}</div>
                    <div style={{ color: 'var(--subtle)', fontSize: '0.7rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="hero-visual float" style={{ textAlign: 'center' }}>
              <div style={{ width: 290, height: 290, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(99,102,241,.2),rgba(6,182,212,.14))', border: '2px solid rgba(99,102,241,.22)', boxShadow: '0 0 90px rgba(99,102,241,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 96, position: 'relative', margin: '0 auto' }}>
                🧑‍💻
                <div style={{ position: 'absolute', bottom: 18, right: 18, width: 50, height: 50, borderRadius: 13, background: 'linear-gradient(135deg,#6366f1,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '0 0 24px rgba(99,102,241,.5)' }}>🏗️</div>
                <div style={{ position: 'absolute', top: 22, left: 14, width: 40, height: 40, borderRadius: 10, background: 'rgba(6,182,212,.13)', border: '1px solid rgba(6,182,212,.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>🌍</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Architecture Patterns Showcase ────────────────────── */}
      <section className="section" style={{ background: 'rgba(99,102,241,0.02)', borderTop: '1px solid rgba(99,102,241,0.08)', borderBottom: '1px solid rgba(99,102,241,0.08)', paddingTop: 60, paddingBottom: 60 }}>
        <div className="inner">
          <p className="sr mono" style={{ fontSize: '0.76rem', color: '#818cf8', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
            Core Competency — Software Architecture &amp; Design Patterns
          </p>
          <div className="sr d1" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {archPatterns.map((p, i) => (
              <span key={p} className="sr" style={{ transitionDelay: `${i * 0.04}s`, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(99,102,241,0.09)', border: '1px solid rgba(99,102,241,0.22)', color: '#a5b4fc', padding: '6px 14px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600 }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────── */}
      <section className="section">
        <div className="inner">
          <h2 className="sec-title sr">Featured Projects</h2>
          <p className="sr d1" style={{ color: 'var(--subtle)', marginBottom: 44, maxWidth: 560, marginTop: 8 }}>
            Highlighted work spanning software architecture, simulation systems, and probabilistic modeling.
          </p>

          <div className="sr d2" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Hero card — SearchMe spotlight */}
            {featured[0] && (() => { const p = featured[0]; return (
              <div key={p.id} className="hov" onClick={() => setModal(p)} style={{
                padding: '40px 44px',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.13) 0%, rgba(6,182,212,0.07) 100%)',
                border: '1px solid rgba(99,102,241,0.45)',
                borderRadius: 18,
                boxShadow: '0 0 0 1px rgba(99,102,241,0.1), 0 8px 60px rgba(99,102,241,0.18)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}>
                {/* Glow blobs */}
                <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(99,102,241,0.1)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -60, left: '40%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(6,182,212,0.07)', pointerEvents: 'none' }} />

                {/* Top label */}
                <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <span className={`badge ${CAT_CLASS[p.cat]}`}>{CAT_LABEL[p.cat]}</span>
                  {p.star && <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#c084fc', background: 'rgba(192,132,252,.09)', border: '1px solid rgba(192,132,252,.2)', padding: '3px 11px', borderRadius: 12 }}>⭐ {p.star}</span>}
                </div>

                <h3 style={{ fontWeight: 900, fontSize: 'clamp(1.3rem,3vw,1.7rem)', color: 'var(--text)', marginBottom: 12, lineHeight: 1.2 }}>{p.short}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.85, marginBottom: 24, maxWidth: 700 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {p.tech.map(t => <span key={t} className="tag" style={{ fontSize: '0.78rem', padding: '5px 13px' }}>{t}</span>)}
                </div>

                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#818cf8', fontSize: '0.82rem', fontWeight: 700, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', padding: '7px 16px', borderRadius: 10 }}>
                  View details →
                </span>
              </div>
            )})()}

            {/* Remaining featured projects */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(330px,1fr))', gap: 20 }}>
              {featured.slice(1).map(p => (
                <div key={p.id} className="glass hov" onClick={() => setModal(p)} style={{ padding: 26 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 13, flexWrap: 'wrap', gap: 6 }}>
                    <span className={`badge ${CAT_CLASS[p.cat]}`}>{CAT_LABEL[p.cat]}</span>
                    {p.star && <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#c084fc', background: 'rgba(192,132,252,.09)', border: '1px solid rgba(192,132,252,.2)', padding: '2px 10px', borderRadius: 12 }}>⭐ {p.star}</span>}
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.02rem', color: 'var(--text)', marginBottom: 9 }}>{p.short}</h3>
                  <p style={{ color: 'var(--subtle)', fontSize: '0.87rem', lineHeight: 1.75, marginBottom: 18 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 14 }}>
                    {p.tech.slice(0, 5).map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <span style={{ color: '#818cf8', fontSize: '0.75rem', fontWeight: 600 }}>View details →</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sr d3" style={{ marginTop: 36, textAlign: 'center' }}>
            <Link to="/projects" className="btn btn-ghost">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 60, paddingBottom: 80, background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="inner" style={{ textAlign: 'center' }}>
          <h2 className="sr" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, marginBottom: 14 }}>
            Open to <span className="gradient-text">new opportunities</span>
          </h2>
          <p className="sr d1" style={{ color: 'var(--subtle)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.8 }}>
            Internships, research collaborations, or team projects — if you're building something technically interesting, let's talk.
          </p>
          <div className="sr d2" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${personal.email}`} className="btn btn-primary">📧 Get in Touch</a>
            <Link to="/skills" className="btn btn-ghost">View Skills</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

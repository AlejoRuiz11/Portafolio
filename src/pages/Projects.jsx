import { useRef, useState } from 'react'
import { useApp, useScrollReveal } from '../context'
import { projects } from '../data'

const CAT_CLASS = { arch: 'badge-arch', sim: 'badge-sim', ml: 'badge-ml', web: 'badge-web' }
const CAT_LABEL = { arch: '🏗️ Architecture', sim: '🎮 Simulation', ml: '🤖 ML / AI', web: '🌐 Web' }

const FILTERS = [
  { id: 'all',  label: '✦ All'           },
  { id: 'arch', label: '🏗️ Architecture'  },
  { id: 'sim',  label: '🎮 Simulation'    },
  { id: 'ml',   label: '🤖 ML / AI'       },
  { id: 'web',  label: '🌐 Web'           },
]

export default function Projects() {
  const { setModal, adminMode } = useApp()
  const [filter, setFilter] = useState('all')
  const ref = useRef()
  useScrollReveal(ref)

  const visible = projects.filter(p => filter === 'all' || p.cat === filter)

  return (
    <div ref={ref} style={{ paddingTop: 'var(--nav-h)' }}>
      <section className="section">
        <div className="inner">
          <h1 className="sec-title sr">Projects</h1>
          <p className="sr d1" style={{ color: 'var(--subtle)', marginBottom: 30, maxWidth: 580, marginTop: 8 }}>
            From enterprise-grade multi-tier systems and VR simulations to probabilistic engines and ML research — each project driven by architectural thinking.
          </p>

          {/* Filter tabs */}
          <div className="sr d2" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {FILTERS.map(f => (
              <button key={f.id} className={`ftab ${filter === f.id ? 'on' : 'off'}`} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="proj-grid sr d3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
            {visible.map(p => (
              <div key={p.id} className="card-wrap">
                {adminMode && (
                  <button className="card-edit-btn" onClick={e => { e.stopPropagation(); setModal(p) }}>
                    ✏️ Edit
                  </button>
                )}
                <div
                  className="glass hov"
                  style={{ padding: 22, height: '100%', display: 'flex', flexDirection: 'column', opacity: p.minor ? 0.82 : 1 }}
                  onClick={() => setModal(p)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 5 }}>
                    <span className={`badge ${CAT_CLASS[p.cat]}`}>{CAT_LABEL[p.cat]}</span>
                    {p.star && (
                      <span style={{ fontSize: '0.67rem', fontWeight: 700, color: '#c084fc', background: 'rgba(192,132,252,.08)', border: '1px solid rgba(192,132,252,.18)', padding: '2px 9px', borderRadius: 12 }}>
                        ⭐ {p.star}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontWeight: 800, fontSize: p.minor ? '0.88rem' : '0.97rem', color: 'var(--text)', marginBottom: 9 }}>
                    {p.title}
                  </h3>

                  <p style={{ color: 'var(--subtle)', fontSize: p.minor ? '0.81rem' : '0.85rem', lineHeight: 1.72, flex: 1, marginBottom: 14 }}>
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {(p.minor ? p.tech.slice(0, 3) : p.tech).map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <p style={{ marginTop: 12, color: '#818cf8', fontSize: '0.74rem', fontWeight: 600, opacity: 0.72 }}>
                    Click for full details →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

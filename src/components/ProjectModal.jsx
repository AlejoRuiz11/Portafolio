import { useState, useEffect } from 'react'
import { useApp, extractYtId } from '../context'
import { ProjectEditForm } from './Admin'

const CAT_LABEL = { arch: '🏗️ Architecture', sim: '🎮 Simulation', ml: '🤖 ML / AI', web: '🌐 Web' }
const CAT_CLASS = { arch: 'badge-arch', sim: 'badge-sim', ml: 'badge-ml', web: 'badge-web' }

export default function ProjectModal() {
  const { modal, setModal, adminMode, store } = useApp()
  const [tab, setTab] = useState('overview')

  // Reset tab whenever modal opens
  useEffect(() => { if (modal) setTab('overview') }, [modal])

  // Close on Escape
  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') setModal(null) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [setModal])

  if (!modal) return null

  const extras = store.projects[modal.id] || {}
  const ytId   = extractYtId(extras.videoUrl || modal.video || '')
  const imgs   = (extras.imageUrls || []).filter(Boolean)
  const hasMedia = !!(ytId || imgs.length)

  const tabs = [
    { id: 'overview', label: 'Overview' },
    ...(hasMedia ? [{ id: 'media', label: 'Media' }] : []),
    ...(adminMode  ? [{ id: 'edit',  label: '✏️ Edit'  }] : []),
  ]

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setModal(null) }}>
      <div className="modal-box">
        <button className="modal-close" onClick={() => setModal(null)}>✕</button>

        {/* ── Header ── */}
        <div style={{ padding: '26px 26px 0', clear: 'both' }}>
          <div style={{ display: 'flex', gap: 9, alignItems: 'center', marginBottom: 11, flexWrap: 'wrap' }}>
            <span className={`badge ${CAT_CLASS[modal.cat]}`}>{CAT_LABEL[modal.cat]}</span>
            {modal.star && (
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#c084fc', background: 'rgba(192,132,252,0.09)', border: '1px solid rgba(192,132,252,0.2)', padding: '2px 10px', borderRadius: 12 }}>
                ⭐ {modal.star}
              </span>
            )}
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>{modal.title}</h2>

          {/* External links */}
          <div style={{ display: 'flex', gap: 9, marginTop: 13, flexWrap: 'wrap' }}>
            {(extras.github || modal.github) && <a href={extras.github || modal.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">⎈ GitHub</a>}
            {(extras.demo   || modal.demo)   && <a href={extras.demo   || modal.demo}   target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">▶ Live Demo</a>}
          </div>
        </div>

        {/* ── Tabs ── */}
        {tabs.length > 1 && (
          <div className="modal-tabs" style={{ marginTop: 20 }}>
            {tabs.map(t => (
              <button key={t.id} className={`modal-tab${tab === t.id ? ' active' : ''}`} onClick={() => setTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
        )}

        <div style={{ padding: '22px 26px 28px' }}>

          {/* ── Overview ── */}
          {tab === 'overview' && (
            <div>
              <p style={{ color: 'var(--muted)', lineHeight: 1.88, marginBottom: 20, fontSize: '0.93rem', whiteSpace: 'pre-line' }}>
                {modal.longDesc || modal.desc}
              </p>
              {extras.notes && (
                <div style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.18)', borderRadius: 10, padding: '13px 17px', marginBottom: 20 }}>
                  <p style={{ color: '#a5b4fc', fontSize: '0.87rem', lineHeight: 1.72 }}>{extras.notes}</p>
                </div>
              )}
              <p style={{ fontSize: '0.74rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 9 }}>Tech Stack</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {modal.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          )}

          {/* ── Media ── */}
          {tab === 'media' && (
            <div>
              {ytId && (
                <div style={{ marginBottom: 22 }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Video Demo</p>
                  <div className="video-wrap">
                    <iframe
                      src={`https://www.youtube.com/embed/${ytId}`}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      title="Project video"
                    />
                  </div>
                </div>
              )}
              {imgs.length > 0 && (
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Screenshots</p>
                  <div className="gallery">
                    {imgs.map((src, i) => (
                      <img key={i} src={src} alt={`Screenshot ${i + 1}`}
                        onClick={() => window.open(src, '_blank')}
                        onError={e => { e.target.style.display = 'none' }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Edit (admin only) ── */}
          {tab === 'edit' && adminMode && <ProjectEditForm projectId={modal.id} />}
        </div>
      </div>
    </div>
  )
}

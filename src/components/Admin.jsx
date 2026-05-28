import { useState } from 'react'
import { useApp } from '../context'
import { personal } from '../data'

/* ── Admin Bar ───────────────────────────────────────────────── */
export function AdminBar({ onExit }) {
  return (
    <div className="admin-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div className="admin-dot" />
        <span>Admin Mode — click any project card to edit its links &amp; media</span>
      </div>
      <button
        onClick={onExit}
        className="btn btn-sm"
        style={{ background: 'rgba(255,255,255,0.14)', color: 'white', padding: '4px 14px', fontSize: '0.71rem' }}
      >
        Exit Admin
      </button>
    </div>
  )
}

/* ── Admin Toggle ─────────────────────────────────────────────── */
export function AdminToggle() {
  const { adminMode, setAdminMode } = useApp()

  function handle() {
    if (adminMode) { setAdminMode(false); return }
    const pw = window.prompt('Admin password:')
    if (pw === null) return
    if (pw === personal.adminPass) setAdminMode(true)
    else alert('Incorrect password.')
  }

  return (
    <button className="admin-toggle" onClick={handle} title={adminMode ? 'Exit admin' : 'Admin login'}>
      {adminMode ? '🔓' : '🔧'}
    </button>
  )
}

/* ── Project Edit Form (rendered inside ProjectModal) ─────────── */
export function ProjectEditForm({ projectId, onClose }) {
  const { store, updateStore } = useApp()
  const saved = store.projects[projectId] || {}

  const [form, setForm] = useState({
    github:    saved.github    || '',
    demo:      saved.demo      || '',
    videoUrl:  saved.videoUrl  || '',
    imageUrls: saved.imageUrls?.length ? saved.imageUrls : [''],
    notes:     saved.notes     || '',
  })
  const [status, setStatus] = useState('')   // '' | 'saved'

  function set(key, val) { setForm(f => ({ ...f, [key]: val })) }

  function setImageUrl(i, val) {
    setForm(f => { const a = [...f.imageUrls]; a[i] = val; return { ...f, imageUrls: a } })
  }
  function addImageUrl()       { setForm(f => ({ ...f, imageUrls: [...f.imageUrls, '']  })) }
  function removeImageUrl(i)   { setForm(f => ({ ...f, imageUrls: f.imageUrls.filter((_, j) => j !== i) })) }

  function handleUpload(e) {
    Array.from(e.target.files).forEach(file => {
      const reader = new FileReader()
      reader.onload = ev =>
        setForm(f => ({ ...f, imageUrls: [...f.imageUrls.filter(Boolean), ev.target.result] }))
      reader.readAsDataURL(file)
    })
  }

  function save() {
    updateStore(prev => ({
      ...prev,
      projects: {
        ...prev.projects,
        [projectId]: { ...form, imageUrls: form.imageUrls.filter(Boolean) },
      },
    }))
    setStatus('saved')
    setTimeout(() => setStatus(''), 2200)
  }

  return (
    <div>
      <div style={{ background: 'rgba(109,40,217,0.07)', border: '1px solid rgba(109,40,217,0.22)', borderRadius: 9, padding: '12px 15px', marginBottom: 20, fontSize: '0.81rem', color: '#c084fc' }}>
        🔧 Changes are saved to your browser (localStorage) and persist across sessions.
      </div>

      <div className="form-group">
        <label className="form-label">GitHub / Repository URL</label>
        <input className="form-input" placeholder="https://github.com/..." value={form.github} onChange={e => set('github', e.target.value)} />
      </div>

      <div className="form-group">
        <label className="form-label">Live Demo URL</label>
        <input className="form-input" placeholder="https://..." value={form.demo} onChange={e => set('demo', e.target.value)} />
      </div>

      <div className="form-group">
        <label className="form-label">YouTube Video URL (auto-embedded)</label>
        <input className="form-input" placeholder="https://youtube.com/watch?v=..." value={form.videoUrl} onChange={e => set('videoUrl', e.target.value)} />
      </div>

      <div className="form-group">
        <label className="form-label">Images (URLs or file uploads)</label>
        {form.imageUrls.map((url, i) => (
          <div key={i} style={{ display: 'flex', gap: 7, marginBottom: 7 }}>
            <input className="form-input" placeholder="Image URL…" value={url} onChange={e => setImageUrl(i, e.target.value)} />
            {form.imageUrls.length > 1 && (
              <button className="btn btn-sm btn-danger" onClick={() => removeImageUrl(i)}>✕</button>
            )}
          </div>
        ))}
        <div style={{ display: 'flex', gap: 8, marginTop: 5, flexWrap: 'wrap' }}>
          <button className="btn btn-ghost btn-sm" onClick={addImageUrl}>+ Add URL</button>
          <label className="btn btn-ghost btn-sm" style={{ cursor: 'pointer' }}>
            📁 Upload Image(s)
            <input type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handleUpload} />
          </label>
        </div>
        <p style={{ fontSize: '0.7rem', color: 'var(--subtle)', marginTop: 6 }}>
          💡 Uploads are stored locally in your browser. For large images, prefer a hosted URL.
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">Additional Notes (shown in project overview)</label>
        <textarea className="form-textarea" placeholder="Extra context, achievements, or notes…" value={form.notes} onChange={e => set('notes', e.target.value)} />
      </div>

      <button className="btn btn-primary" onClick={save} style={{ marginTop: 4 }}>
        {status === 'saved' ? '✓ Saved!' : 'Save Changes'}
      </button>
    </div>
  )
}

/* ── Certificate Admin Panel ──────────────────────────────────── */
export function CertAdmin({ certId }) {
  const { store, updateStore } = useApp()
  const cd = store.certs?.[certId] || {}
  const [urlInput, setUrlInput] = useState(cd.imageUrl || '')

  function saveUrl() {
    updateStore(prev => ({
      ...prev,
      certs: { ...prev.certs, [certId]: { ...prev.certs?.[certId], imageUrl: urlInput } },
    }))
  }

  function handleUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev =>
      updateStore(prev => ({
        ...prev,
        certs: { ...prev.certs, [certId]: { ...prev.certs?.[certId], image: ev.target.result } },
      }))
    reader.readAsDataURL(file)
  }

  return (
    <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(109,40,217,0.22)' }}>
      <p style={{ fontSize: '0.7rem', color: '#a78bfa', fontWeight: 700, marginBottom: 9 }}>🔧 ADMIN — Certificate Image</p>
      <div style={{ display: 'flex', gap: 7, marginBottom: 7 }}>
        <input className="form-input" placeholder="Image URL…" value={urlInput} onChange={e => setUrlInput(e.target.value)} style={{ fontSize: '0.8rem', padding: '7px 11px' }} />
        <button className="btn btn-sm btn-purple" onClick={saveUrl}>Save</button>
      </div>
      <label className="btn btn-ghost btn-sm" style={{ cursor: 'pointer', fontSize: '0.73rem' }}>
        📁 Upload File
        <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpload} />
      </label>
    </div>
  )
}

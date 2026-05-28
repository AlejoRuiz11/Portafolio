import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import { personal } from './data'

/* ── Storage helpers ─────────────────────────────────────────── */
const STORE_KEY = 'portfolio_data_v1'

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY)
    return raw ? JSON.parse(raw) : { projects: {}, certs: {} }
  } catch {
    return { projects: {}, certs: {} }
  }
}

function persistStore(data) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(data))
  } catch (e) {
    console.warn('localStorage full — could not persist data.', e)
  }
}

/* ── Context definition ──────────────────────────────────────── */
const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [adminMode, setAdminMode]   = useState(false)
  const [store,     setStore]       = useState(loadStore)
  const [modal,     setModal]       = useState(null)   // selected project or null

  /** Immutable update helper — saves to localStorage after every change */
  const updateStore = useCallback((updater) => {
    setStore(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      persistStore(next)
      return next
    })
  }, [])

  /** Lock body scroll while a modal is open */
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  return (
    <AppContext.Provider value={{ adminMode, setAdminMode, store, updateStore, modal, setModal }}>
      {children}
    </AppContext.Provider>
  )
}

/** Hook to consume context — throws if used outside provider */
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>')
  return ctx
}

/* ── Scroll-reveal hook ──────────────────────────────────────── */
/**
 * Attaches an IntersectionObserver to all .sr elements inside `ref`.
 * When they enter the viewport, the `vis` class is added which
 * triggers the CSS fade-up transition defined in index.css.
 */
export function useScrollReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.sr')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.1 }
    )
    targets.forEach(t => io.observe(t))
    return () => io.disconnect()
  }, [ref])
}

/* ── YouTube helper ──────────────────────────────────────────── */
export function extractYtId(url) {
  if (!url) return null
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
  return m ? m[1] : null
}

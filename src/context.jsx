import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import { personal } from './data'

/* Storage helpers */
const STORE_KEY = 'portfolio_data_v1'

const DEFAULT_STORE = {
  projects: {},
  certs: {
    bayesian: { imageUrl: './certs/bayesian.png' },
    pytorch:  { imageUrl: './certs/pytorch.png'  },
    scrum:    { imageUrl: './certs/scrum.png'    },
  },
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY)
    if (!raw) return DEFAULT_STORE
    const saved = JSON.parse(raw)
    return {
      ...DEFAULT_STORE,
      ...saved,
      certs: { ...DEFAULT_STORE.certs, ...saved.certs },
    }
  } catch {
    return DEFAULT_STORE
  }
}

function persistStore(data) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(data))
  } catch (e) {
    console.warn('localStorage full', e)
  }
}

/* Context */
const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [adminMode, setAdminMode] = useState(false)
  const [store,     setStore]     = useState(loadStore)
  const [modal,     setModal]     = useState(null)

  const updateStore = useCallback((updater) => {
    setStore(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      persistStore(next)
      return next
    })
  }, [])

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

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>')
  return ctx
}

/* Scroll-reveal hook */
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

/* YouTube helper */
export function extractYtId(url) {
  if (!url) return null
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
  return m ? m[1] : null
}

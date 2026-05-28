import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { personal } from '../data'

const NAV_LINKS = [
  { label: 'Home',     to: '/'        },
  { label: 'Projects', to: '/projects' },
  { label: 'About',    to: '/about'   },
  { label: 'Skills',   to: '/skills'  },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 55)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  // Close mobile menu on route change
  const handleLinkClick = () => setMobileOpen(false)

  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active' : ''}`

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Brand */}
          <NavLink to="/" className="mono gradient-text" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
            &lt;AR /&gt;
          </NavLink>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map(l => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}
            <a href={`mailto:${personal.email}`} className="btn btn-primary" style={{ padding: '7px 18px', fontSize: '0.82rem' }}>
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="nav-burger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`} style={{ top: scrolled ? 64 : 64 }}>
        {NAV_LINKS.map(l => (
          <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'} onClick={handleLinkClick}>
            {l.label}
          </NavLink>
        ))}
        <a href={`mailto:${personal.email}`} className="btn btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }} onClick={handleLinkClick}>
          Hire Me
        </a>
      </div>
    </>
  )
}

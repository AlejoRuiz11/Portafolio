import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AppProvider, useApp } from './context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import { AdminBar, AdminToggle } from './components/Admin'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

/** Inner layout — consumes context and location for page transitions */
function Layout() {
  const { adminMode, setAdminMode, modal } = useApp()
  const location = useLocation()

  return (
    <div className={adminMode ? 'root-wrap has-admin' : 'root-wrap'}>
      {adminMode && <AdminBar onExit={() => setAdminMode(false)} />}
      <Navbar />

      {/* key forces remount → triggers page-enter CSS animation */}
      <main key={location.pathname} className="page-enter">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about"   element={<About />} />
          <Route path="/skills"  element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      {modal && <ProjectModal />}
      <AdminToggle />
    </div>
  )
}

/** Root component — provides Router + Context */
export default function App() {
  return (
    <Router>
      <AppProvider>
        <Layout />
      </AppProvider>
    </Router>
  )
}

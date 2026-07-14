import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './layout/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import CalendarioPage from './pages/CalendarioPage.jsx'
import PortalPage from './pages/PortalPage.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendario" element={<CalendarioPage />} />
        <Route path="/portal" element={<PortalPage />} />
      </Routes>
    </>
  )
}

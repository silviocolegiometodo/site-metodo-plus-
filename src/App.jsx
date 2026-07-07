import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CalendarioPage from './pages/CalendarioPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calendario" element={<CalendarioPage />} />
    </Routes>
  )
}

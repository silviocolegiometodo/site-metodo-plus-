import { Link } from 'react-router-dom'
import '../styles/portal.css'
import { PORTAL_LINKS } from '../data/portalLinks.js'
import CalendarioHeader from '../components/calendario/CalendarioHeader.jsx'
import CalendarioFooter from '../components/calendario/CalendarioFooter.jsx'

export default function PortalPage() {
  return (
    <div className="portal-page">
      <CalendarioHeader />

      <section className="portal-hero">
        <div className="container">
          <div className="portal-hero-inner">
            <Link to="/" className="back-btn"><i className="fas fa-arrow-left"></i> Voltar ao site</Link>
            <div><span className="section-tag">Acessos Rápidos</span></div>
            <h1>Portal do <span>Aluno</span></h1>
            <p>Reunimos aqui os principais acessos para alunos e famílias do Colégio Método Plus</p>
          </div>
        </div>
      </section>

      <section className="portal-links">
        <div className="container">
          <div className="portal-grid">
            {PORTAL_LINKS.map((link) => (
              <a
                className="portal-card"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
              >
                <div className="portal-card-icon"><i className={`fas ${link.icon}`}></i></div>
                <h3>{link.title}</h3>
                <p>{link.text}</p>
                <span className="portal-card-cta">{link.cta} <i className="fas fa-arrow-right"></i></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CalendarioFooter />
    </div>
  )
}

import { Link, useLocation } from 'react-router-dom'
import useScrolledHeader from '../hooks/useScrolledHeader.js'
import useMobileNav from '../hooks/useMobileNav.js'

const NAV_LINKS = [
  { hash: '#apresentacao', label: 'Sobre Nós' },
  { hash: '#metodo', label: 'Metodologia' },
  { hash: '#segmentos', label: 'Segmentos' },
  { hash: '#parceiros', label: 'Parceiros' },
]

const MOBILE_NAV_LINKS = [
  { hash: '#apresentacao', label: 'Sobre Nós', icon: 'fa-school' },
  { hash: '#metodo', label: 'Metodologia', icon: 'fa-book-open' },
  { hash: '#segmentos', label: 'Segmentos', icon: 'fa-users' },
  { hash: '#diferenciais', label: 'Diferenciais', icon: 'fa-star' },
  { hash: '#estrutura', label: 'Estrutura', icon: 'fa-building' },
  { hash: '#parceiros', label: 'Parceiros', icon: 'fa-handshake' },
  { hash: '#depoimentos', label: 'Depoimentos', icon: 'fa-comments' },
]

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const scrolled = useScrolledHeader()
  const { isOpen, open, close } = useMobileNav()

  const hrefFor = (hash) => (isHome ? hash : `/${hash}`)

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav className="nav-inner">
            {isHome ? (
              <a href="#hero" className="nav-logo">
                <img src="/logo-metodo.svg" alt="Colégio Método Plus" style={{ width: 135, height: 'auto' }} />
              </a>
            ) : (
              <Link to="/" className="nav-logo">
                <img src="/logo-metodo.svg" alt="Colégio Método Plus" style={{ width: 135, height: 'auto' }} />
              </Link>
            )}

            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.hash}>
                  <a href={hrefFor(link.hash)}>{link.label}</a>
                </li>
              ))}
              <li>
                <Link to="/calendario">
                  <i className="fas fa-calendar-alt" style={{ marginRight: 4 }}></i>Calendário
                </Link>
              </li>
              <li>
                <a href={hrefFor('#contato')}>Contato</a>
              </li>
            </ul>

            <a
              href="https://wa.me/553132218003?text=Olá!%20Gostaria%20de%20fazer%20minha%20matrícula%20no%20Colégio%20Método%20Plus."
              className="btn btn-accent nav-cta ihb"
              target="_blank"
              rel="noopener"
            >
              <span className="ihb-default"><i className="fab fa-whatsapp"></i> Matricule-se</span>
              <span className="ihb-hover">Matricule-se <i className="fas fa-arrow-right"></i></span>
            </a>

            <button
              className={`hamburger${isOpen ? ' open' : ''}`}
              id="hamburger"
              aria-label="Abrir menu"
              aria-expanded={isOpen}
              aria-controls="mobileNav"
              onClick={open}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      <div className={`mobile-nav${isOpen ? ' active' : ''}`} id="mobileNav">
        <div className="mobile-nav-header">
          <img src="/logo-metodo.svg" alt="Colégio Método Plus" style={{ width: 100, height: 'auto' }} />
          <button className="mobile-close" id="mobileClose" aria-label="Fechar menu" onClick={close}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {MOBILE_NAV_LINKS.map((link) => (
          <a key={link.hash} href={hrefFor(link.hash)} onClick={close}>
            <i className={`fas ${link.icon}`} style={{ width: 20, marginRight: 10 }}></i>
            {link.label}
          </a>
        ))}
        <Link to="/calendario" style={{ color: 'var(--blue)', fontWeight: 700 }} onClick={close}>
          <i className="fas fa-calendar-alt" style={{ width: 20, marginRight: 10 }}></i>Calendário 2026
        </Link>
        <a href={hrefFor('#noticias')} onClick={close}>
          <i className="fas fa-newspaper" style={{ width: 20, marginRight: 10 }}></i>Notícias
        </a>
        <a href={hrefFor('#contato')} onClick={close}>
          <i className="fas fa-envelope" style={{ width: 20, marginRight: 10 }}></i>Contato
        </a>
      </div>
    </>
  )
}

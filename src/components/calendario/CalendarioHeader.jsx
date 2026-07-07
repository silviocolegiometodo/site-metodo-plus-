import { Link } from 'react-router-dom'

export default function CalendarioHeader() {
  return (
    <header id="header">
      <div className="container">
        <nav className="nav-inner">
          <Link to="/" className="nav-logo">
            <img src="/logo-metodo.svg" alt="Colégio Método Plus" style={{ width: 135, height: 'auto' }} />
          </Link>
          <ul className="nav-links">
            <li><a href="/#apresentacao">Sobre Nós</a></li>
            <li><a href="/#metodo">Metodologia</a></li>
            <li><a href="/#segmentos">Segmentos</a></li>
            <li><a href="/#parceiros">Parceiros</a></li>
            <li><Link to="/calendario"><i className="fas fa-calendar-alt" style={{ marginRight: 4 }}></i>Calendário</Link></li>
            <li><a href="/#contato">Contato</a></li>
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
        </nav>
      </div>
    </header>
  )
}

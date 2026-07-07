import { Link } from 'react-router-dom'

export default function CalendarioFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ marginBottom: 16 }}>
              <img src="/logo-metodo.svg" alt="Colégio Método Plus" style={{ width: 100, height: 'auto' }} />
            </div>
            <p>Fundado em 1989, há mais de 37 anos formando cidadãos com turmas reduzidas e atenção individualizada.</p>
          </div>
          <div className="footer-col">
            <h4>Links Rápidos</h4>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><a href="/#apresentacao">Sobre Nós</a></li>
              <li><a href="/#metodo">Metodologia</a></li>
              <li><a href="/#segmentos">Segmentos</a></li>
              <li><a href="/#parceiros">Parceiros</a></li>
              <li><Link to="/calendario">Calendário 2026</Link></li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h4>Contato</h4>
            <p><i className="fas fa-map-marker-alt"></i> R. Manoel Gomes Pereira, 91 – Serra, BH</p>
            <p><i className="fas fa-phone"></i> (31) 3221-8003</p>
            <p><i className="fas fa-envelope"></i> colegiometodobh@gmail.com</p>
            <p><i className="fas fa-clock"></i> Seg–Sex: 7h–15h</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Colégio Método Plus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

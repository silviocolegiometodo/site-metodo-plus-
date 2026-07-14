import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ marginBottom: 16 }}>
              <img src="/logo-metodo.svg" alt="Colégio Método Plus" style={{ width: 100, height: 'auto' }} />
            </div>
            <p>Fundado em 1989, há mais de 37 anos formando cidadãos e preparando talentos com turmas reduzidas, atenção individualizada e parceria família-escola.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/colegiometodo_plus/" aria-label="Instagram" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#apresentacao">Sobre Nós</a></li>
              <li><a href="#metodo">Metodologia</a></li>
              <li><a href="#segmentos">Segmentos</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#estrutura">Estrutura</a></li>
              <li><a href="#parceiros">Parceiros</a></li>
              <li><a href="#noticias">Notícias</a></li>
              <li><a href="#matricula">Matrículas</a></li>
              <li><Link to="/portal">Portal do Aluno</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Segmentos</h4>
            <ul>
              <li><a href="#segmentos">Fund. II — 6º ao 9º ano</a></li>
              <li><a href="#segmentos">Ensino Médio</a></li>
              <li><a href="#segmentos">Ensino Bilíngue</a></li>
              <li><a href="#parceiros">Sistema Positivo</a></li>
              <li><a href="#parceiros">Clube Olympico</a></li>
              <li><a href="#metodo">Ensino Híbrido</a></li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contato</h4>
            <p><i className="fas fa-map-marker-alt"></i> R. Manoel Gomes Pereira, 91 – Serra<br />Belo Horizonte, MG</p>
            <p><i className="fas fa-phone"></i> (31) 3221-8003</p>
            <p><i className="fab fa-whatsapp"></i> (31) 3221-8003</p>
            <p><i className="fas fa-envelope"></i> colegiometodobh@gmail.com</p>
            <p><i className="fas fa-clock"></i> Seg–Sex: 7h–15h | Sáb e Dom: Fechado</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Colégio Método Plus. Todos os direitos reservados.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

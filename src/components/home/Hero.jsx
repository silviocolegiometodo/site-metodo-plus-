import IhbLink from '../IhbLink.jsx'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-bg-pattern"></div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge" data-aos="fade-down">
              <i className="fas fa-star"></i> Referência em Educação
            </div>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Preparando alunos<br />para o <span className="highlight">futuro</span>
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              Educação de excelência com metodologia inovadora, tecnologia de ponta e acompanhamento individual de cada aluno.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
              <IhbLink href="#metodo" className="btn-accent btn-lg" icon="fas fa-book-open">
                Conheça Nossa Metodologia
              </IhbLink>
              <a href="https://wa.me/553132218003?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20no%20Colégio%20Método%20Plus." className="btn btn-outline btn-lg" target="_blank" rel="noopener">
                <i className="fab fa-whatsapp"></i> Agende uma Visita
              </a>
            </div>
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="hero-stat">
                <strong>+37</strong>
                <span>Anos de Experiência</span>
              </div>
              <div className="hero-stat">
                <strong>17–25</strong>
                <span>Alunos por Turma</span>
              </div>
              <div className="hero-stat">
                <strong>6º–3EM</strong>
                <span>Anos Finais e Médio</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-img-wrapper">
              <picture>
                <source srcSet="/images/sala-de-aula.webp" type="image/webp" />
                <img
                  src="/images/sala-de-aula.jpeg"
                  alt="Alunos assistindo aula no Colégio Método Plus"
                  className="hero-img-photo"
                  width="1280"
                  height="849"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <div className="hero-floating-card card-1">
              <div className="card-icon"><i className="fas fa-trophy"></i></div>
              <div className="card-text">
                <strong>Top Aprovações</strong>
                <span>Vestibulares 2025</span>
              </div>
            </div>
            <div className="hero-floating-card card-2">
              <div className="card-icon"><i className="fas fa-award"></i></div>
              <div className="card-text">
                <strong>Escola 5 Estrelas</strong>
                <span>Prêmio Educação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

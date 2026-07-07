import IhbLink from '../IhbLink.jsx'

const MVV_CARDS = [
  { icon: 'fa-flag', title: 'Nossa Missão', text: 'Primar pela educação de qualidade considerando os aspectos individuais de cada aluno e seu ritmo de aprendizagem, objetivando a aquisição do conhecimento pela participação ativa do aluno.' },
  { icon: 'fa-eye', title: 'Nossa Visão', text: 'Chegar ao reconhecimento como instituição inovadora, fundamentada no atendimento individualizado, promovendo a excelência humana e acadêmica e formando cidadãos críticos, conscientes e empreendedores.' },
  { icon: 'fa-star', title: 'Nossos Valores', text: 'Autonomia, criticidade, criatividade e amorosidade. Ética, comprometimento, responsabilidade social, informação transparente, inovação e inclusão social.' },
]

const VALOR_CARDS = [
  { icon: 'fa-medal', title: 'Excelência Acadêmica', text: 'Currículo robusto alinhado às principais universidades do país.' },
  { icon: 'fa-users', title: 'Desenvolvimento Humano', text: 'Formação integral: intelectual, emocional e social do aluno.' },
  { icon: 'fa-lightbulb', title: 'Inovação Pedagógica', text: 'Metodologias ativas e tecnologia como aliadas do aprendizado.' },
  { icon: 'fa-rocket', title: 'Compromisso com o Futuro', text: 'Preparamos líderes e profissionais para o mundo moderno.' },
]

export default function Apresentacao() {
  return (
    <section id="apresentacao">
      <div className="container">
        <div className="apresentacao-grid">
          <div className="apresentacao-img" data-aos="fade-right">
            <img src="/images/fachada-escola.jpeg" alt="Fachada do Colégio Método Plus" className="apresentacao-photo" width="1024" height="768" />
            <div className="badge-anos">
              <strong>+37</strong>
              <span>Anos de história</span>
            </div>
          </div>

          <div className="apresentacao-content">
            <span className="section-tag" data-aos="fade-up">Nossa Escola</span>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
              Bem-vindo ao Colégio<br /><span>Método Plus</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              Fundado em 1989, o Colégio Método há mais de 37 anos colabora com a educação e a evolução da sociedade Belo-Horizontina. Fomos pioneiros no atendimento qualitativo, levando nossos estudantes ao êxito em seus projetos de vida.
            </p>

            <div className="mvv-grid" data-aos="fade-up" data-aos-delay="200">
              {MVV_CARDS.map((card) => (
                <div className="mvv-card" key={card.title}>
                  <h4><i className={`fas ${card.icon}`} style={{ marginRight: 6 }}></i>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              ))}
              <div className="mvv-card">
                <h4><i className="fas fa-heart" style={{ marginRight: 6 }}></i>Nossa Filosofia</h4>
                <p>Somos voltados para a <strong>Filosofia da Liberdade</strong> — para pensar, comunicar e agir — com responsabilidade e autonomia, porque assim é a vida e assim são os bons cursos superiores.</p>
              </div>
            </div>

            <IhbLink href="#metodo" className="btn-primary" icon="fas fa-arrow-right" dataAos="fade-up" dataAosDelay="300">
              Conheça Nossa Metodologia
            </IhbLink>
          </div>
        </div>

        <div className="valores-cards" style={{ marginTop: 72 }}>
          {VALOR_CARDS.map((card, i) => (
            <div className="valor-card" key={card.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="valor-icon"><i className={`fas ${card.icon}`}></i></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

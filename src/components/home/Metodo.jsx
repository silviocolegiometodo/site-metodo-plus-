const METODO_CARDS = [
  { icon: 'fa-laptop-house', title: 'Ensino Híbrido', text: 'Disponível quando há necessidade real e amparo legal (laudo de profissional de saúde ou atletas profissionais). Do 6º ano ao Ensino Médio.' },
  { icon: 'fa-exchange-alt', title: 'Aceleração e Reclassificação', text: 'Processos baseados na LDB 9394/96 para alunos com atraso escolar ou alto desempenho, com PDI e orientação personalizada desde a matrícula.' },
  { icon: 'fa-user-graduate', title: 'Atenção Individualizada', text: 'Cada estudante é atendido em suas especificidades. Turmas de 17 a 25 alunos permitem que o professor conheça e potencialize cada um sem prejuízo ao grupo.' },
  { icon: 'fa-laptop-code', title: 'Sistema Positivo de Ensino', textNode: (
    <>Conveniados ao <strong>Sistema Positivo</strong>, oferecemos livros didáticos, livros de atividades, ambiente digital OnLivro, livros digitais e videoaulas assíncronas.</>
  ) },
  { icon: 'fa-file-alt', title: 'PDI para Alunos com TDAH', text: 'Plano de Desenvolvimento Individualizado para alunos com TDAH, garantindo currículo adaptado e estratégias diferenciadas de aprendizagem.' },
  { icon: 'fa-star', title: 'Altas Habilidades e Superdotação', text: 'Identificação e atendimento educacional especializado para alunos com altas habilidades/superdotação, com enriquecimento curricular e desafios compatíveis com seu potencial.' },
  { icon: 'fa-feather-alt', title: 'Filosofia da Liberdade', text: 'Nossa base pedagógica — liberdade para pensar, comunicar e agir com responsabilidade e autonomia, preparando para a vida real e os bons cursos superiores.', gridColumn: 2 },
]

export default function Metodo() {
  return (
    <section id="metodo">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Como Ensinamos</span>
          <h2 className="section-title">Nossa <span>Metodologia</span></h2>
          <p className="section-subtitle">Uma abordagem pedagógica única que combina tradição e inovação para potencializar o aprendizado de cada aluno.</p>
        </div>

        <div className="metodo-grid">
          {METODO_CARDS.map((card, i) => (
            <div
              className="metodo-card"
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              style={card.gridColumn ? { gridColumn: card.gridColumn } : undefined}
            >
              <div className="metodo-card-icon"><i className={`fas ${card.icon}`}></i></div>
              <h3>{card.title}</h3>
              <p>{card.textNode ?? card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

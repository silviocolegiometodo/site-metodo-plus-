const STATS = [
  { value: '37+', label: 'Anos de Experiência' },
  { value: '25', label: 'Máx. Alunos por Turma' },
  { value: '1989', label: 'Ano de Fundação' },
]

const DIFERENCIAL_CARDS = [
  { icon: 'fa-users', title: 'Turmas Reduzidas', text: 'Entre 17 e 25 alunos por turma, garantindo interação qualitativa e acompanhamento próximo de cada estudante no processo de aprendizagem.' },
  { icon: 'fa-brain', title: 'Psicólogos na Escola', text: 'Equipe de psicólogos atua nas dimensões psicoeducativa e psicossocial, coordenando o trabalho pedagógico e apoiando alunos, famílias e professores.' },
  { icon: 'fa-book-open', title: 'Sistema Positivo de Ensino', text: 'Convênio com o Sistema Positivo garante material didático atualizado, plataforma digital OnLivro, videoaulas e conteúdos exclusivos para os alunos.' },
  { icon: 'fa-language', title: 'Diploma Cambridge', text: 'Programa Bilíngue (PES English/Arco Educação) para o Fundamental II. Alunos do 9º ano recebem diploma de proficiência de Cambridge.' },
  { icon: 'fa-running', title: 'Parceria Clube Olympico', text: 'Aulas de Educação Física nas quadras do Clube Olympico. Em parceria, oferecemos 5 bolsas de estudo integrais para atletas conveniados ao clube.' },
  { icon: 'fa-user-tie', title: 'Acesso Direto à Direção', textNode: (
    <>Pais e alunos têm acesso direto à Diretora Pedagógica <strong>Márcia Laurico</strong> (Pedagoga e Psicóloga), eliminando a burocracia e resolvendo questões com agilidade.</>
  ) },
  { icon: 'fa-exchange-alt', title: 'Aceleração e Reclassificação de Estudos', text: 'Processos baseados na LDB 9394/96 para alunos com atraso escolar ou alto desempenho, com PDI e orientação personalizada desde a matrícula.', gridColumn: 2 },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais">
      <div className="container">
        <div className="stats-bar" data-aos="fade-up">
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Por que Escolher o Método Plus</span>
          <h2 className="section-title">Nossos <span>Diferenciais</span></h2>
          <p className="section-subtitle">Infraestrutura e recursos pedagógicos de alto nível para garantir a melhor experiência de aprendizado.</p>
        </div>

        <div className="diferenciais-grid">
          {DIFERENCIAL_CARDS.map((card, i) => (
            <div
              className="diferencial-card"
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              style={card.gridColumn ? { gridColumn: card.gridColumn } : undefined}
            >
              <div className="diferencial-card-icon"><i className={`fas ${card.icon}`}></i></div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.textNode ?? card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

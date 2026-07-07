const SEGMENTO_CARDS = [
  { emoji: '🔬', title: 'Anos Finais', age: '6º ao 9º ano', delay: 0, text: (
    <>Turmas reduzidas com metodologia ativa, acompanhamento individualizado e, a partir de 2025, <strong>Programa Bilíngue</strong> com diploma Cambridge no 9º ano.</>
  ) },
  { emoji: '🎓', title: 'Ensino Médio', age: '1ª à 3ª série', delay: 150, text: 'Preparação sólida para o ENEM e vestibulares. Filosofia da Liberdade, protagonismo do aluno e desenvolvimento de competências para a vida.' },
  { emoji: '🌍', title: 'Ensino Bilíngue', age: '6º ao 9º ano · Novidade 2025', delay: 300, text: (
    <>Convênio com o <strong>PES English da Arco Educação</strong> (Sistema Positivo). Inglês aprofundado com certificação de proficiência <strong>Cambridge</strong> no 9º ano.</>
  ) },
]

export default function Segmentos() {
  return (
    <section id="segmentos">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Segmentos Atendidos</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Do <span style={{ color: 'var(--yellow)' }}>6º ano</span> ao Ensino Médio</h2>
          <p className="section-subtitle">Atuamos no turno da manhã com turmas reduzidas de 17 a 25 alunos, garantindo atenção individualizada a cada estudante.</p>
        </div>

        <div className="segmentos-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {SEGMENTO_CARDS.map((card) => (
            <div className="segmento-card" key={card.title} data-aos="fade-up" data-aos-delay={card.delay}>
              <div className="segmento-icon">{card.emoji}</div>
              <h3>{card.title}</h3>
              <span className="age-range">{card.age}</span>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

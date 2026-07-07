import IhbLink from '../IhbLink.jsx'

const FEATURES = [
  'Vagas Limitadas',
  'Sem Prova de Seleção',
  '5 Bolsas para Atletas',
  'Atendimento Individualizado',
]

export default function Matricula() {
  return (
    <section id="matricula">
      <div className="container">
        <div className="matricula-inner">
          <span className="section-tag" data-aos="fade-up">Matrículas Abertas</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Garanta o futuro<br />do seu filho
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            As vagas são limitadas! Faça sua matrícula agora e assegure que seu filho terá acesso à melhor educação da região, com toda a estrutura e metodologia que ele merece.
          </p>

          <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: -8, marginBottom: 8 }} data-aos="fade-up" data-aos-delay="250">
            <i className="fas fa-info-circle" style={{ marginRight: 6, color: 'var(--yellow)' }}></i>
            A matrícula se dá por <strong>entrevista</strong> com pais/responsável e aluno — com a psicóloga ou a diretora pedagógica. Sem prova de seleção.
          </p>

          <div className="matricula-actions" data-aos="fade-up" data-aos-delay="300">
            <IhbLink href="#contato" className="btn-accent btn-lg" icon="fas fa-calendar-check">
              Agendar Entrevista
            </IhbLink>
            <a href="tel:+553132218003" className="btn btn-outline btn-lg">
              <i className="fas fa-phone"></i> (31) 3221-8003
            </a>
          </div>

          <div className="matricula-features" data-aos="fade-up" data-aos-delay="400">
            {FEATURES.map((f) => (
              <div className="matricula-feature" key={f}><i className="fas fa-check-circle"></i> {f}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

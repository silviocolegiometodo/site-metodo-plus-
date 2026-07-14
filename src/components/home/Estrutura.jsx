import GaleriaCarouselItem from './GaleriaCarouselItem.jsx'

const ESTRUTURA_CARDS = [
  { icon: 'fa-chalkboard', title: '7 Salas de Aula', text: 'Acomodações arejadas e aconchegantes' },
  { icon: 'fa-flask', title: 'Laboratório', text: 'Para atividades práticas e experimentais' },
  { icon: 'fa-users', title: 'Espaço de Convivência', text: 'Ambiente acolhedor para socialização' },
  { icon: 'fa-running', title: 'Clube Olympico', text: 'Quadras para Educação Física (parceria)' },
  { icon: 'fa-sun', title: 'Turno Matutino', text: 'Funcionamento exclusivo pela manhã' },
]

export default function Estrutura({ onPhotoClick }) {
  return (
    <section id="estrutura">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Conheça Nossa Escola</span>
          <h2 className="section-title">Nossa <span>Estrutura</span></h2>
          <p className="section-subtitle">Um ambiente moderno, seguro e pensado para estimular o aprendizado e o bem-estar dos alunos.</p>
        </div>

        <div
          className="estrutura-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16, marginBottom: 48 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {ESTRUTURA_CARDS.map((card) => (
            <div className="estrutura-card" key={card.title}>
              <div className="estrutura-card-icon"><i className={`fas ${card.icon}`}></i></div>
              <div><strong>{card.title}</strong><span>{card.text}</span></div>
            </div>
          ))}
        </div>

        <div className="galeria-grid">
          <GaleriaCarouselItem
            aosDelay={0}
            caption="7 Salas de Aula"
            onPhotoClick={onPhotoClick}
            photos={[
              { src: '/images/sala-de-aula.jpeg', alt: 'Alunos assistindo aula no Colégio Método Plus', width: 1280, height: 849 },
            ]}
          />
          <GaleriaCarouselItem
            aosDelay={100}
            caption="Laboratório"
            onPhotoClick={onPhotoClick}
            photos={[
              { src: '/images/laboratorio-1.jpeg', alt: 'Vidrarias e microscópio do laboratório do Colégio Método Plus', width: 768, height: 1024 },
              { src: '/images/laboratorio-2.jpeg', alt: 'Bancada de laboratório com microscópio e balões volumétricos', width: 1024, height: 768 },
            ]}
          />
          <GaleriaCarouselItem
            aosDelay={200}
            caption="Clube Olympico"
            onPhotoClick={onPhotoClick}
            photos={[
              { src: '/images/clube-olympico-1.jpeg', alt: 'Alunos jogando vôlei na quadra do Clube Olympico', width: 1200, height: 1600 },
              { src: '/images/clube-olympico-2.jpeg', alt: 'Alunos jogando tênis de mesa no Clube Olympico', width: 1280, height: 960 },
            ]}
          />
          <GaleriaCarouselItem
            aosDelay={300}
            caption="Espaço de Convivência"
            onPhotoClick={onPhotoClick}
            photos={[
              { src: '/images/convivencia-1.jpeg', alt: 'Alunos fazendo atividade de artes ao ar livre no Colégio Método Plus', width: 960, height: 1280 },
              { src: '/images/convivencia-2.jpeg', alt: 'Alunos reunidos em atividade prática no pátio do Colégio Método Plus', width: 1024, height: 768 },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

import useGaleriaCarousel from '../../hooks/useGaleriaCarousel.js'

const DOACAO_PHOTOS = [
  { src: '/images/doacao-agasalhos-1.jpeg', alt: 'Alunos do Método Plus com sacolas de agasalhos arrecadados para doação', width: 960, height: 1280 },
  { src: '/images/doacao-agasalhos-2.jpeg', alt: 'Alunos reunidos na igreja parceira com as doações de agasalhos', width: 960, height: 1280 },
  { src: '/images/doacao-agasalhos-3.jpeg', alt: 'Aluna entregando sacola de agasalhos para representante da igreja', width: 960, height: 1280 },
]

const EXCURSAO_PHOTOS = [
  { src: '/images/excursao-ccbb-1.jpeg', alt: 'Alunos do Método Plus reunidos na exposição MEME do CCBB', width: 1280, height: 960 },
  { src: '/images/excursao-ccbb-2.jpeg', alt: 'Alunos na instalação de emojis do CCBB', width: 1280, height: 719 },
  { src: '/images/excursao-museu-1.jpeg', alt: 'Alunos e professora na farmácia antiga do Museu de Artes e Ofícios', width: 963, height: 1280 },
  { src: '/images/excursao-museu-2.jpeg', alt: 'Alunos observando exposição de tropeiros no Museu de Artes e Ofícios', width: 963, height: 1280 },
]

function DoacaoCarousel({ onPhotoClick }) {
  const activeIndex = useGaleriaCarousel(DOACAO_PHOTOS.length)
  return (
    <div
      className="noticia-img galeria-carousel galeria-item--photo"
      onClick={() => onPhotoClick(DOACAO_PHOTOS, activeIndex)}
    >
      {DOACAO_PHOTOS.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className={`galeria-photo${i === activeIndex ? ' active' : ''}`}
          loading="lazy"
          width={photo.width}
          height={photo.height}
        />
      ))}
      <div className="galeria-overlay"><i className="fas fa-expand"></i></div>
      <span className="noticia-cat">Projetos</span>
    </div>
  )
}

function ExcursaoCarousel({ onPhotoClick }) {
  const activeIndex = useGaleriaCarousel(EXCURSAO_PHOTOS.length)
  return (
    <div
      className="noticia-img galeria-carousel galeria-item--photo"
      onClick={() => onPhotoClick(EXCURSAO_PHOTOS, activeIndex)}
    >
      {EXCURSAO_PHOTOS.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className={`galeria-photo${i === activeIndex ? ' active' : ''}`}
          loading="lazy"
          width={photo.width}
          height={photo.height}
        />
      ))}
      <div className="galeria-overlay"><i className="fas fa-expand"></i></div>
      <span className="noticia-cat">Passeios</span>
    </div>
  )
}

export default function Noticias({ onPhotoClick }) {
  return (
    <section id="noticias">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Fique Atualizado</span>
          <h2 className="section-title">Notícias e <span>Eventos</span></h2>
          <p className="section-subtitle">Acompanhe as novidades, projetos, feiras e eventos do Colégio Método Plus.</p>
        </div>

        <div className="noticias-grid">
          <div className="noticia-card" data-aos="fade-up" data-aos-delay="0">
            <ExcursaoCarousel onPhotoClick={onPhotoClick} />
            <div className="noticia-body">
              <div className="noticia-date"><i className="fas fa-calendar"></i> 10 de Julho, 2026</div>
              <h3 className="noticia-title">Alunos visitam o Museu de Artes e Ofícios e o CCBB em excursão cultural</h3>
              <p className="noticia-excerpt">Estudantes do Método Plus conheceram de perto a história do trabalho brasileiro no Museu de Artes e Ofícios e viveram uma experiência imersiva na exposição do Centro Cultural Banco do Brasil.</p>
            </div>
          </div>

          <div className="noticia-card" data-aos="fade-up" data-aos-delay="100">
            <DoacaoCarousel onPhotoClick={onPhotoClick} />
            <div className="noticia-body">
              <div className="noticia-date"><i className="fas fa-calendar"></i> 2 de Julho, 2026</div>
              <h3 className="noticia-title">Alunos promovem campanha solidária e arrecadam agasalhos para quem precisa</h3>
              <p className="noticia-excerpt">Estudantes do Método Plus organizaram uma arrecadação de agasalhos e entregaram as doações pessoalmente a uma igreja parceira, levando conforto a famílias em situação de vulnerabilidade.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

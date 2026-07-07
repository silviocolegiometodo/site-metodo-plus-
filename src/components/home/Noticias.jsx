import useGaleriaCarousel from '../../hooks/useGaleriaCarousel.js'
import IhbLink from '../IhbLink.jsx'

const DOACAO_PHOTOS = [
  { src: '/images/doacao-agasalhos-1.jpeg', alt: 'Alunos do Método Plus com sacolas de agasalhos arrecadados para doação', width: 960, height: 1280 },
  { src: '/images/doacao-agasalhos-2.jpeg', alt: 'Alunos reunidos na igreja parceira com as doações de agasalhos', width: 960, height: 1280 },
  { src: '/images/doacao-agasalhos-3.jpeg', alt: 'Aluna entregando sacola de agasalhos para representante da igreja', width: 960, height: 1280 },
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
            <div className="noticia-img">
              <div className="noticia-img-placeholder"><i className="fas fa-trophy"></i></div>
              <span className="noticia-cat">Conquistas</span>
            </div>
            <div className="noticia-body">
              <div className="noticia-date"><i className="fas fa-calendar"></i> 10 de Junho, 2025</div>
              <h3 className="noticia-title">Alunos do Método Plus conquistam top 10 na Olimpíada Nacional de Matemática</h3>
              <p className="noticia-excerpt">Três estudantes do Ensino Médio representam o colégio e alcançam posições de destaque no maior torneio acadêmico do Brasil.</p>
              <a href="#" className="noticia-link">Ler mais <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="noticia-card" data-aos="fade-up" data-aos-delay="100">
            <DoacaoCarousel onPhotoClick={onPhotoClick} />
            <div className="noticia-body">
              <div className="noticia-date"><i className="fas fa-calendar"></i> 2 de Julho, 2026</div>
              <h3 className="noticia-title">Alunos promovem campanha solidária e arrecadam agasalhos para quem precisa</h3>
              <p className="noticia-excerpt">Estudantes do Método Plus organizaram uma arrecadação de agasalhos e entregaram as doações pessoalmente a uma igreja parceira, levando conforto a famílias em situação de vulnerabilidade.</p>
              <a href="#" className="noticia-link">Ler mais <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="noticia-card" data-aos="fade-up" data-aos-delay="200">
            <div className="noticia-img">
              <div className="noticia-img-placeholder"><i className="fas fa-star"></i></div>
              <span className="noticia-cat">Vestibulares</span>
            </div>
            <div className="noticia-body">
              <div className="noticia-date"><i className="fas fa-calendar"></i> 15 de Maio, 2025</div>
              <h3 className="noticia-title">Taxa de aprovação no ENEM 2024 supera 95% — melhor resultado da história</h3>
              <p className="noticia-excerpt">Com metodologia focada e acompanhamento individualizado, o Colégio Método Plus atinge a maior aprovação de sua história.</p>
              <a href="#" className="noticia-link">Ler mais <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: 48 }} data-aos="fade-up">
          <IhbLink href="#" className="btn-primary" icon="fas fa-newspaper">
            Ver Todas as Notícias
          </IhbLink>
        </div>
      </div>
    </section>
  )
}

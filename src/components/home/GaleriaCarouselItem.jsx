import useGaleriaCarousel from '../../hooks/useGaleriaCarousel.js'

export default function GaleriaCarouselItem({ photos, caption, onPhotoClick, aosDelay }) {
  const activeIndex = useGaleriaCarousel(photos.length)
  const isCarousel = photos.length > 1

  return (
    <div
      className={`galeria-item galeria-item--photo${isCarousel ? ' galeria-carousel' : ''}`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      onClick={() => onPhotoClick(photos, activeIndex)}
    >
      {photos.map((photo, i) => (
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
      <div className="galeria-overlay">
        <i className="fas fa-expand"></i>
      </div>
      <div className="galeria-caption">{caption}</div>
    </div>
  )
}

export default function Lightbox({ isOpen, group, index, close, go, onTouchStart, onTouchEnd }) {
  const photo = group[index]
  const hasMultiple = group.length > 1

  return (
    <div className={`lightbox${isOpen ? ' active' : ''}`} id="lightbox" aria-hidden={!isOpen}>
      <div className="lightbox-overlay" id="lightboxOverlay" onClick={close}></div>
      <button className="lightbox-close" id="lightboxClose" aria-label="Fechar" onClick={close}>
        <i className="fas fa-times"></i>
      </button>
      <button
        className="lightbox-nav lightbox-prev"
        id="lightboxPrev"
        aria-label="Foto anterior"
        style={{ display: hasMultiple ? 'flex' : 'none' }}
        onClick={() => go(-1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="lightbox-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <img id="lightboxImg" src={photo?.src} alt={photo?.alt ?? ''} />
        <div className="lightbox-caption" id="lightboxCaption">{photo?.alt ?? ''}</div>
      </div>
      <button
        className="lightbox-nav lightbox-next"
        id="lightboxNext"
        aria-label="Próxima foto"
        style={{ display: hasMultiple ? 'flex' : 'none' }}
        onClick={() => go(1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  )
}

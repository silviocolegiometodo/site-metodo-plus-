import useScrollTopButton from '../hooks/useScrollTopButton.js'

export default function ScrollTopButton() {
  const { visible, scrollToTop } = useScrollTopButton()

  return (
    <button
      className={`scroll-top${visible ? ' visible' : ''}`}
      id="scrollTop"
      aria-label="Voltar ao topo"
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  )
}

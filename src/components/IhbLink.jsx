export default function IhbLink({ href, className = '', icon, children, target, rel, style, dataAos, dataAosDelay }) {
  return (
    <a
      href={href}
      className={`btn ${className} ihb`}
      target={target}
      rel={rel}
      style={style}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <span className="ihb-default">{icon && <i className={icon}></i>} {children}</span>
      <span className="ihb-hover">{children} <i className="fas fa-arrow-right"></i></span>
    </a>
  )
}

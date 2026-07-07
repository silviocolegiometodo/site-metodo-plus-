import { useState } from 'react'

export default function Depoimentos() {
  const [nota, setNota] = useState(0)
  const [hoverNota, setHoverNota] = useState(0)
  const [comentario, setComentario] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = () => {
    if (!nota) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    const estrelas = '⭐'.repeat(nota) + '☆'.repeat(5 - nota)
    const texto =
      `*Avaliação pelo Site — Colégio Método Plus*\n\n` +
      `*Nota:* ${estrelas} (${nota}/5)\n` +
      (comentario.trim() ? `*Comentário:*\n${comentario.trim()}` : '*Comentário:* Não informado')
    const url = `https://wa.me/553132218003?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('success')
    setTimeout(() => setStatus('idle'), 4000)
  }

  let buttonContent = <><i className="fab fa-whatsapp"></i> Enviar Avaliação pelo WhatsApp</>
  let buttonBg = ''
  if (status === 'error') {
    buttonContent = <><i className="fas fa-exclamation-circle"></i> Escolha uma nota de 1 a 5 estrelas</>
    buttonBg = '#dc2626'
  } else if (status === 'success') {
    buttonContent = <><i className="fas fa-check"></i> Redirecionando para o WhatsApp!</>
    buttonBg = '#16a34a'
  }

  return (
    <section id="depoimentos">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">O que Dizem Sobre Nós</span>
          <h2 className="section-title">Depoimentos de <span>Quem Confia</span></h2>
          <p className="section-subtitle">Pais, alunos e ex-alunos compartilham suas experiências com o Colégio Método Plus.</p>
        </div>

        <div className="avaliacao-box" data-aos="fade-up" data-aos-delay="50">
          <div className="avaliacao-box-icon"><i className="fas fa-star"></i></div>
          <div className="avaliacao-box-content">
            <h3>Avalie sua Experiência</h3>
            <p>Sua opinião é muito importante para nós. Escolha uma nota e envie sua avaliação direto pelo WhatsApp.</p>
            <div className="avaliacao-stars" id="avaliacaoStars" role="radiogroup" aria-label="Nota de 1 a 5 estrelas">
              {[1, 2, 3, 4, 5].map((v) => {
                const classes = ['avaliacao-star']
                if (v <= nota) classes.push('selected')
                if (hoverNota && v <= hoverNota) classes.push('hovered')
                return (
                  <button
                    key={v}
                    type="button"
                    className={classes.join(' ')}
                    data-value={v}
                    aria-label={`${v} estrela${v > 1 ? 's' : ''}`}
                    onMouseEnter={() => setHoverNota(v)}
                    onMouseLeave={() => setHoverNota(0)}
                    onClick={() => setNota(v)}
                  >
                    <i className="fas fa-star"></i>
                  </button>
                )
              })}
            </div>
            <textarea
              id="avaliacaoComentario"
              placeholder="Conte um pouco sobre sua experiência (opcional)"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
            <button type="button" className="btn btn-primary" id="avaliacaoSubmit" style={{ background: buttonBg }} onClick={handleSubmit}>
              {buttonContent}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

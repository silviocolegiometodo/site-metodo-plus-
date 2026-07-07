import { useState } from 'react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const nome = form.nome.trim()
    const email = form.email.trim()
    const telefone = form.telefone.trim()
    const assunto = form.assunto.trim()
    const mensagem = form.mensagem.trim()

    if (!nome || !email || !mensagem) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const texto =
      `*Contato pelo Site — Colégio Método Plus*\n\n` +
      `*Nome:* ${nome}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${telefone || 'Não informado'}\n` +
      `*Assunto:* ${assunto || 'Não informado'}\n\n` +
      `*Mensagem:*\n${mensagem}`

    const url = `https://wa.me/553132218003?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setStatus('success')
    setForm({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  let buttonContent = <><i className="fab fa-whatsapp"></i> Enviar pelo WhatsApp</>
  let buttonBg = ''
  if (status === 'error') {
    buttonContent = <><i className="fas fa-exclamation-circle"></i> Preencha os campos obrigatórios</>
    buttonBg = '#dc2626'
  } else if (status === 'success') {
    buttonContent = <><i className="fas fa-check"></i> Redirecionando para o WhatsApp!</>
    buttonBg = '#16a34a'
  }

  return (
    <section id="contato">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Fale Conosco</span>
          <h2 className="section-title">Entre em <span>Contato</span></h2>
          <p className="section-subtitle">Tire suas dúvidas, agende uma visita ou solicite informações sobre matrículas. Nossa equipe está pronta para te atender.</p>
        </div>

        <div className="contato-grid">
          <div className="contato-info" data-aos="fade-right">
            <h3>Informações de Contato</h3>
            <p>Visite-nos, ligue ou envie uma mensagem. Teremos prazer em recebê-lo!</p>

            <div className="contato-items">
              <div className="contato-item">
                <div className="contato-item-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contato-item-text">
                  <strong>Endereço</strong>
                  <span>R. Manoel Gomes Pereira, 91 – Serra<br />Belo Horizonte, MG – CEP 30220-220</span>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-item-icon"><i className="fas fa-phone"></i></div>
                <div className="contato-item-text">
                  <strong>Telefone</strong>
                  <span><a href="tel:+553132218003">(31) 3221-8003</a></span>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-item-icon"><i className="fab fa-whatsapp"></i></div>
                <div className="contato-item-text">
                  <strong>WhatsApp</strong>
                  <span><a href="https://wa.me/553132218003">(31) 3221-8003</a></span>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-item-icon"><i className="fas fa-envelope"></i></div>
                <div className="contato-item-text">
                  <strong>E-mail</strong>
                  <span><a href="mailto:colegiometodobh@gmail.com">colegiometodobh@gmail.com</a></span>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-item-icon"><i className="fas fa-clock"></i></div>
                <div className="contato-item-text">
                  <strong>Horário de Funcionamento</strong>
                  <span>
                    Segunda-feira: 07:00 – 15:00<br />
                    Terça-feira: 07:00 – 15:00<br />
                    Quarta-feira: 07:00 – 15:00<br />
                    Quinta-feira: 07:00 – 15:00<br />
                    Sexta-feira: 07:00 – 15:00<br />
                    Sábado: Fechado<br />
                    Domingo: Fechado
                  </span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/colegiometodo_plus/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>

            <div style={{ marginTop: 32 }}>
              <iframe
                src="https://maps.google.com/maps?q=Col%C3%A9gio+M%C3%A9todo+Plus+BH&output=embed&hl=pt-BR"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: 12 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Colégio Método Plus"
              ></iframe>
            </div>
          </div>

          <div className="contato-form" data-aos="fade-left">
            <h3><i className="fas fa-paper-plane" style={{ color: 'var(--blue)', marginRight: 10 }}></i>Envie uma Mensagem</h3>
            <form id="contactForm" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo *</label>
                  <input type="text" id="nome" name="nome" placeholder="Seu nome" required value={form.nome} onChange={handleChange('nome')} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input type="email" id="email" name="email" placeholder="seu@email.com" required value={form.email} onChange={handleChange('email')} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" placeholder="(31) 3221-8003" value={form.telefone} onChange={handleChange('telefone')} />
                </div>
                <div className="form-group">
                  <label htmlFor="assunto">Assunto</label>
                  <select id="assunto" name="assunto" value={form.assunto} onChange={handleChange('assunto')}>
                    <option value="">Selecione um assunto</option>
                    <option>Informações sobre Matrículas</option>
                    <option>Agendar Visita</option>
                    <option>Dúvidas Pedagógicas</option>
                    <option>Financeiro</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea id="mensagem" name="mensagem" placeholder="Como podemos ajudar você?" required value={form.mensagem} onChange={handleChange('mensagem')}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: buttonBg }}>
                {buttonContent}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

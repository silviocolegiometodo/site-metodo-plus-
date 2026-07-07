import { useState } from 'react'
import ParceiroModal from './ParceiroModal.jsx'

const CARDS = [
  {
    key: 'positivo',
    icon: 'fa-graduation-cap',
    gradient: 'linear-gradient(135deg,#0B3D91,#3b82f6)',
    shadow: 'rgba(11,61,145,0.30)',
    title: 'Sistema Positivo de Ensino',
    linkColor: '#0B3D91',
    delay: 0,
    text: 'Material didático sempre atualizado, plataforma digital OnLivro, livro digital e videoaulas assíncronas com professores do Positivo. Sem depender de reimpressões ou descontinuação de autores.',
  },
  {
    key: 'pes',
    icon: 'fa-globe',
    gradient: 'linear-gradient(135deg,#0d9488,#34d399)',
    shadow: 'rgba(13,148,136,0.30)',
    title: 'PES English · Arco Educação',
    linkColor: '#0d9488',
    delay: 100,
    text: (
      <>A partir de 2025, parceira integrante do Sistema Positivo, o PES English amplia a grade do Fundamental II com o Programa Bilíngue. Nossos alunos do 9º ano podem receber o diploma de proficiência de <strong>Cambridge</strong>.</>
    ),
  },
  {
    key: 'clube',
    icon: 'fa-medal',
    gradient: 'linear-gradient(135deg,#ea580c,#fbbf24)',
    shadow: 'rgba(234,88,12,0.30)',
    title: 'Clube Olympico',
    linkColor: '#ea580c',
    delay: 200,
    text: (
      <>Utilizamos as quadras do Clube Olympico para as aulas de Educação Física. Em parceria, oferecemos <strong>5 bolsas de estudo integrais</strong> para atletas conveniados ao clube.</>
    ),
  },
  {
    key: 'classapp',
    icon: 'fa-mobile-alt',
    gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    shadow: 'rgba(124,58,237,0.30)',
    title: 'ClassApp',
    linkColor: '#7c3aed',
    delay: 300,
    gridColumn: 2,
    text: 'Plataforma de comunicação escolar que conecta escola, alunos e famílias em um ambiente digital seguro, facilitando o acompanhamento da rotina acadêmica e fortalecendo a participação dos responsáveis na educação.',
  },
]

function ParceiroCard({ card, onOpen }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="parceiro-card"
      data-parceiro={card.key}
      data-aos="fade-up"
      data-aos-delay={card.delay}
      onClick={() => onOpen(card.key)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--white)',
        borderRadius: 16,
        padding: '32px 28px',
        boxShadow: hover ? '0 12px 36px rgba(11,61,145,0.15)' : '0 4px 24px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        cursor: 'pointer',
        transition: 'transform .25s ease, box-shadow .25s ease',
        transform: hover ? 'translateY(-6px)' : '',
        gridColumn: card.gridColumn,
      }}
    >
      <div style={{
        width: 56, height: 56, background: card.gradient, borderRadius: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4,
        boxShadow: `0 6px 16px ${card.shadow}`,
      }}>
        <i className={`fas ${card.icon}`} style={{ fontSize: '1.45rem', color: '#fff' }}></i>
      </div>
      <h3 style={{ fontSize: '1.1rem', color: 'var(--blue-dark)', margin: 0 }}>{card.title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>{card.text}</p>
      <span style={{
        marginTop: 'auto', paddingTop: 12, fontSize: '0.82rem', fontWeight: 600,
        color: card.linkColor, display: 'flex', alignItems: 'center', gap: 6,
        fontFamily: "'Poppins',sans-serif",
      }}>
        Saiba mais <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
      </span>
    </div>
  )
}

export default function Parceiros() {
  const [activeKey, setActiveKey] = useState(null)

  return (
    <section id="parceiros" style={{ padding: '64px 0', background: 'var(--bg-light)' }}>
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Ecossistema de Qualidade</span>
          <h2 className="section-title">Nossos <span>Parceiros</span></h2>
          <p className="section-subtitle">Convênios estratégicos que ampliam as oportunidades educacionais dos nossos alunos.</p>
        </div>

        <div className="parceiros-grid" style={{ marginTop: 48 }}>
          {CARDS.map((card) => (
            <ParceiroCard key={card.key} card={card} onOpen={setActiveKey} />
          ))}
        </div>
      </div>

      <ParceiroModal activeKey={activeKey} onClose={() => setActiveKey(null)} />
    </section>
  )
}

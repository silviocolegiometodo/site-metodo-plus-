import { Link } from 'react-router-dom'
import '../styles/calendario.css'
import { MONTHS } from '../data/calendarEvents.js'
import CalendarioHeader from '../components/calendario/CalendarioHeader.jsx'
import CalendarioFooter from '../components/calendario/CalendarioFooter.jsx'
import MonthCard from '../components/calendario/MonthCard.jsx'
import EventsList from '../components/calendario/EventsList.jsx'
import Seo from '../components/Seo.jsx'
import { PAGE_SEO, breadcrumbJsonLd } from '../data/seoConfig.js'

const BREADCRUMB = breadcrumbJsonLd([
  { name: 'Início', path: '/' },
  { name: 'Calendário Escolar', path: '/calendario' },
])

export default function CalendarioPage() {
  return (
    <div className="cal-page">
      <Seo {...PAGE_SEO.calendario} jsonLd={BREADCRUMB} />
      <CalendarioHeader />

      <main>
      <section className="cal-hero">
        <div className="container">
          <div className="cal-hero-inner">
            <Link to="/" className="back-btn"><i className="fas fa-arrow-left"></i> Voltar ao site</Link>
            <div><span className="section-tag">Planejamento Letivo</span></div>
            <h1>Calendário Escolar <span>2026</span></h1>
            <p>Colégio Método Plus — Ano Letivo 2026 completo com feriados, etapas e eventos</p>
            <div className="cal-summary">
              <div className="cal-sum-item"><strong>200</strong><span>Dias Letivos</span></div>
              <div className="cal-sum-item"><strong>4</strong><span>Etapas</span></div>
              <div className="cal-sum-item"><strong>02/fev</strong><span>Início</span></div>
              <div className="cal-sum-item"><strong>11/dez</strong><span>Encerramento</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="cal-legend-section">
        <div className="container">
          <div className="cal-legend">
            <div className="legend-item"><span className="legend-dot feriado"></span>Feriado</div>
            <div className="legend-item"><span className="legend-dot ferias"></span>Férias / Recesso</div>
            <div className="legend-item"><span className="legend-dot letivo-sat"></span>Sábado Letivo</div>
            <div className="legend-item"><span className="legend-dot simulado"></span>Simulado</div>
            <div className="legend-item"><span className="legend-dot provas"></span>Provas Discursivas</div>
            <div className="legend-item"><span className="legend-dot recuperacao"></span>Recuperação</div>
            <div className="legend-item"><span className="legend-dot etapa"></span>Início / Fim de Etapa</div>
            <div className="legend-item"><span className="legend-dot especial"></span>Data Especial</div>
          </div>
        </div>
      </div>

      <section className="cal-months">
        <div className="container">
          <div className="months-grid" id="monthsGrid">
            {MONTHS.map((month) => (
              <MonthCard key={month.n} {...month} />
            ))}
          </div>
        </div>
      </section>

      <section className="cal-events-section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Agenda Completa</span>
            <h2 className="section-title">Eventos e Datas <span>Importantes</span></h2>
          </div>
          <EventsList />
        </div>
      </section>
      </main>

      <CalendarioFooter />
    </div>
  )
}

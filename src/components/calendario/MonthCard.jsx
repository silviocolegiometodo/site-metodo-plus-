import { DAY_NAMES, EVENTS } from '../../data/calendarEvents.js'

export default function MonthCard({ n, name, days, start, letivos }) {
  const today = new Date()

  const emptyCells = Array.from({ length: start })
  const dayCells = []
  for (let d = 1; d <= days; d++) {
    const key = `2026-${n}-${d}`
    const ev = EVENTS[key]
    const dow = (start + d - 1) % 7

    let cls = 'day-cell'
    if (ev) cls += ` ${ev.type}`
    else if (dow === 0) cls += ' sunday'
    else if (dow === 6) cls += ' saturday'

    if (today.getFullYear() === 2026 && today.getMonth() + 1 === n && today.getDate() === d) cls += ' today'

    dayCells.push(
      <div key={d} className={cls} data-tip={ev ? ev.label : undefined}>
        {d}
      </div>
    )
  }

  return (
    <div className="month-card">
      <div className="month-header">
        <span className="month-name">{name} 2026</span>
        {letivos > 0 ? (
          <span className="month-dias">{letivos} dias letivos</span>
        ) : (
          <span className="month-dias">Férias</span>
        )}
      </div>
      <div className="month-body">
        <div className="day-names">
          {DAY_NAMES.map((d, i) => (
            <div key={d} className={`day-name${i === 0 || i === 6 ? ' weekend' : ''}`}>{d}</div>
          ))}
        </div>
        <div className="days-grid">
          {emptyCells.map((_, i) => (
            <div key={`empty-${i}`} className="day-cell empty"></div>
          ))}
          {dayCells}
        </div>
      </div>
    </div>
  )
}

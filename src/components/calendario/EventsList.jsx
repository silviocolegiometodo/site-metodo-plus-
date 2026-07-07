import { useState } from 'react'
import { EVENTS, TYPE_LABELS } from '../../data/calendarEvents.js'
import computeEventRanges from '../../utils/computeEventRanges.js'

const eventRanges = computeEventRanges(EVENTS)

export default function EventsList() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <div className="cal-toolbar">
        <button type="button" className="btn-toggle-cal" id="toggleEventsBtn" onClick={() => setCollapsed((c) => !c)}>
          {collapsed ? (
            <><i className="fas fa-chevron-down"></i> Expandir Eventos</>
          ) : (
            <><i className="fas fa-chevron-up"></i> Minimizar Eventos</>
          )}
        </button>
      </div>
      <div className={`events-timeline${collapsed ? ' collapsed' : ''}`} id="eventsList">
        {eventRanges.map((r, i) => {
          const dateStr = r.startD === r.endD
            ? `${String(r.startD).padStart(2, '0')}/${String(r.startM).padStart(2, '0')}`
            : `${String(r.startD).padStart(2, '0')} a ${String(r.endD).padStart(2, '0')}/${String(r.endM).padStart(2, '0')}`
          return (
            <div className={`event-row ${r.type}`} key={`${r.id}-${i}`}>
              <span className="event-date">{dateStr}</span>
              <div>
                <div className="event-label">{r.label}</div>
                <span className="event-type-badge">{TYPE_LABELS[r.type] || r.type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

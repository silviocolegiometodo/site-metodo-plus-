export default function computeEventRanges(events) {
  const eventRanges = []
  let current = null

  const allKeys = Object.keys(events).sort((a, b) => {
    const [, am, ad] = a.split('-').map(Number)
    const [, bm, bd] = b.split('-').map(Number)
    return am !== bm ? am - bm : ad - bd
  })

  allKeys.forEach((key) => {
    const [, m, d] = key.split('-').map(Number)
    const ev = events[key]
    const id = `${m}-${ev.label}`

    if (current && current.id === id && current.endM === m && current.endD === d - 1) {
      current.endD = d
    } else {
      if (current) eventRanges.push(current)
      current = { id, type: ev.type, label: ev.label, startM: m, startD: d, endM: m, endD: d }
    }
  })
  if (current) eventRanges.push(current)

  return eventRanges
}

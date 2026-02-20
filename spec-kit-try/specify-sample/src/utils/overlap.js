export const hasOverlap = (blocks) => {
  const sorted = [...blocks].sort((a, b) => a.startTime.localeCompare(b.startTime))
  for (let i = 1; i < sorted.length; i += 1) {
    if (sorted[i].startTime < sorted[i - 1].endTime) return true
  }
  return false
}

export const overlapWarningsByDate = (blocks) => {
  const byDate = new Map()
  blocks.forEach((block) => {
    if (!byDate.has(block.date)) byDate.set(block.date, [])
    byDate.get(block.date).push(block)
  })

  const warnings = new Set()
  byDate.forEach((items, date) => {
    if (hasOverlap(items)) warnings.add(date)
  })

  return warnings
}

export const todayISO = () => new Date().toISOString().slice(0, 10)

export const formatTimeRange = (start, end) => `${start} - ${end}`

export const toDateInputValue = (date) => {
  if (!date) return todayISO()
  return date
}

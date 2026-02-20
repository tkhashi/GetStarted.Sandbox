export const renderOverlapWarning = (date) => {
  const alert = document.createElement('div')
  alert.className = 'warning'
  alert.textContent = `警告: ${date} のタイムブロックが重複しています`
  return alert
}

export const renderLayout = () => {
  const app = document.getElementById('app')
  app.innerHTML = ''

  const header = document.createElement('header')
  const title = document.createElement('h1')
  title.textContent = 'TaskFlow'
  const subtitle = document.createElement('span')
  subtitle.textContent = 'タイムブロックで1日を設計'
  subtitle.style.color = 'var(--muted)'
  header.append(title, subtitle)

  const main = document.createElement('main')
  main.className = 'grid two'

  app.append(header, main)
  return { main }
}

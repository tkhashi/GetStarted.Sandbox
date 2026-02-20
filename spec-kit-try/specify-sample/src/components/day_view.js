import { formatTimeRange } from '../utils/datetime.js'

export const renderDayView = ({ date, timeBlocks, tasks, onEdit }) => {
  const section = document.createElement('section')
  section.className = 'section day-view'

  const heading = document.createElement('h2')
  heading.textContent = `日次ビュー (${date})`
  section.append(heading)

  if (timeBlocks.length === 0) {
    const empty = document.createElement('div')
    empty.className = 'day-view-empty'
    empty.textContent = 'この日のタイムブロックはありません'
    section.append(empty)
    return section
  }

  timeBlocks
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .forEach((block) => {
      const item = document.createElement('div')
      item.className = 'day-view-item'

      const time = document.createElement('div')
      time.textContent = formatTimeRange(block.startTime, block.endTime)

      const task = tasks.find((t) => t.id === block.taskId)
      const taskTitle = document.createElement('div')
      taskTitle.textContent = task ? task.title : '不明なタスク'

      const action = document.createElement('button')
      action.className = 'button secondary'
      action.type = 'button'
      action.textContent = '編集'
      action.addEventListener('click', () => onEdit(block))

      item.append(time, taskTitle, action)
      section.append(item)
    })

  return section
}

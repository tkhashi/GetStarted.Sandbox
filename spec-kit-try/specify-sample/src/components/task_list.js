export const renderTaskList = ({ tasks, onToggle, onDelete }) => {
  const section = document.createElement('section')
  section.className = 'section'
  const heading = document.createElement('h2')
  heading.textContent = 'タスク一覧'

  const list = document.createElement('ul')
  list.className = 'task-list'

  tasks.forEach((task) => {
    const item = document.createElement('li')
    item.className = 'task-item'

    const meta = document.createElement('div')
    meta.className = 'task-meta'
    const title = document.createElement('div')
    title.className = 'task-title'
    title.textContent = task.title
    const status = document.createElement('div')
    status.className = 'task-status'
    status.textContent = task.status === 'done' ? '完了' : '未完了'

    meta.append(title, status)

    const actions = document.createElement('div')
    actions.className = 'task-actions'
    const toggle = document.createElement('button')
    toggle.className = 'button secondary'
    toggle.type = 'button'
    toggle.textContent = task.status === 'done' ? '戻す' : '完了にする'
    toggle.addEventListener('click', () => onToggle(task))

    const remove = document.createElement('button')
    remove.className = 'button secondary'
    remove.type = 'button'
    remove.textContent = '削除'
    remove.addEventListener('click', () => onDelete(task.id))

    actions.append(toggle, remove)
    item.append(meta, actions)
    list.append(item)
  })

  if (tasks.length === 0) {
    const empty = document.createElement('div')
    empty.className = 'task-status'
    empty.textContent = 'まだタスクがありません'
    section.append(heading, empty)
    return section
  }

  section.append(heading, list)
  return section
}

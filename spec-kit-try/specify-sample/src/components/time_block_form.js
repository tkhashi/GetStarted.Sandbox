import { todayISO } from '../utils/datetime.js'

export const createTimeBlockForm = ({ tasks, onSubmit }) => {
  const form = document.createElement('form')
  form.className = 'section'

  const taskOptions = tasks
    .map((task) => `<option value="${task.id}">${task.title}</option>`)
    .join('')

  form.innerHTML = `
    <h2>タイムブロック</h2>
    <div class="form-row">
      <label for="block-task">タスク</label>
      <select id="block-task" name="taskId" required>
        <option value="">選択してください</option>
        ${taskOptions}
      </select>
    </div>
    <div class="form-row">
      <label for="block-date">日付</label>
      <input id="block-date" type="date" name="date" value="${todayISO()}" required />
    </div>
    <div class="form-row">
      <label for="block-start">開始</label>
      <input id="block-start" type="time" name="startTime" required />
    </div>
    <div class="form-row">
      <label for="block-end">終了</label>
      <input id="block-end" type="time" name="endTime" required />
    </div>
    <button class="button" type="submit">追加</button>
  `

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(form)
    onSubmit({
      taskId: data.get('taskId'),
      date: data.get('date'),
      startTime: data.get('startTime'),
      endTime: data.get('endTime')
    })
  })

  return form
}

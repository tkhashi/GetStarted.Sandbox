export const createTaskForm = ({ onSubmit }) => {
  const form = document.createElement('form')
  form.className = 'section'

  form.innerHTML = `
    <h2>タスクを追加</h2>
    <div class="form-row">
      <label for="task-title">タイトル</label>
      <input id="task-title" name="title" required maxlength="100" />
    </div>
    <div class="form-row">
      <label for="task-desc">説明</label>
      <textarea id="task-desc" name="description" maxlength="1000"></textarea>
    </div>
    <div class="form-row">
      <label for="task-priority">優先度</label>
      <select id="task-priority" name="priority">
        <option value="low">低</option>
        <option value="medium" selected>中</option>
        <option value="high">高</option>
      </select>
    </div>
    <button class="button" type="submit">追加</button>
  `

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    onSubmit({
      title: formData.get('title'),
      description: formData.get('description'),
      priority: formData.get('priority')
    })
    form.reset()
  })

  return form
}

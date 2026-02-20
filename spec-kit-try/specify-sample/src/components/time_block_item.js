export const renderTimeBlockEditor = ({ block, onSave }) => {
  const wrapper = document.createElement('div')
  wrapper.className = 'time-block-item'

  wrapper.innerHTML = `
    <div class="time-block-header">
      <div>編集</div>
    </div>
    <div class="form-row">
      <label>開始</label>
      <input type="time" name="startTime" value="${block.startTime}" required />
    </div>
    <div class="form-row">
      <label>終了</label>
      <input type="time" name="endTime" value="${block.endTime}" required />
    </div>
    <button class="button" type="button">保存</button>
  `

  const button = wrapper.querySelector('button')
  button.addEventListener('click', () => {
    const startTime = wrapper.querySelector('input[name="startTime"]').value
    const endTime = wrapper.querySelector('input[name="endTime"]').value
    onSave({ startTime, endTime })
  })

  return wrapper
}

import { createTaskForm } from '../../components/task_form.js'
import { renderTaskList } from '../../components/task_list.js'
import { addTask, toggleTaskStatus, removeTask } from '../state/task_actions.js'
import { getState, subscribe } from '../state/store.js'

export const mountTaskView = (container) => {
  const wrapper = document.createElement('div')
  wrapper.className = 'grid'

  const form = createTaskForm({
    onSubmit: async (payload) => {
      try {
        await addTask(payload)
      } catch (error) {
        alert(error.message)
      }
    }
  })

  const listSlot = document.createElement('div')

  const render = () => {
    const { tasks } = getState()
    listSlot.innerHTML = ''
    listSlot.append(
      renderTaskList({
        tasks,
        onToggle: toggleTaskStatus,
        onDelete: removeTask
      })
    )
  }

  wrapper.append(form, listSlot)
  container.append(wrapper)

  render()
  return subscribe(render)
}

import { createTimeBlockForm } from '../../components/time_block_form.js'
import { renderDayView } from '../../components/day_view.js'
import { renderOverlapWarning } from '../../components/overlap_warning.js'
import { renderTimeBlockEditor } from '../../components/time_block_item.js'
import { addTimeBlock, editTimeBlock } from '../state/time_block_actions.js'
import { getState, subscribe } from '../state/store.js'
import { computeDerived } from '../state/sync.js'
import { todayISO } from '../../utils/datetime.js'

export const mountDayView = (container) => {
  const wrapper = document.createElement('div')
  wrapper.className = 'grid'

  const header = document.createElement('section')
  header.className = 'section'
  header.innerHTML = `
    <h2>日付を選択</h2>
    <input type="date" id="day-view-date" value="${todayISO()}" />
  `

  const formSlot = document.createElement('div')
  const viewSlot = document.createElement('div')
  const editorSlot = document.createElement('div')

  const render = () => {
    const { tasks, timeBlocks } = getState()
    const { overlapWarnings } = computeDerived()
    const date = header.querySelector('#day-view-date').value

    formSlot.innerHTML = ''
    formSlot.append(
      createTimeBlockForm({
        tasks,
        onSubmit: async (payload) => {
          try {
            await addTimeBlock(payload)
          } catch (error) {
            alert(error.message)
          }
        }
      })
    )

    viewSlot.innerHTML = ''
    const blocksForDate = timeBlocks.filter((block) => block.date === date)

    if (overlapWarnings.has(date)) {
      viewSlot.append(renderOverlapWarning(date))
    }

    viewSlot.append(
      renderDayView({
        date,
        timeBlocks: blocksForDate,
        tasks,
        onEdit: (block) => {
          editorSlot.innerHTML = ''
          editorSlot.append(
            renderTimeBlockEditor({
              block,
              onSave: async (updates) => {
                try {
                  await editTimeBlock(block, updates)
                  editorSlot.innerHTML = ''
                } catch (error) {
                  alert(error.message)
                }
              }
            })
          )
        }
      })
    )
  }

  header.querySelector('#day-view-date').addEventListener('change', render)

  wrapper.append(header, formSlot, viewSlot, editorSlot)
  container.append(wrapper)

  render()
  return subscribe(render)
}

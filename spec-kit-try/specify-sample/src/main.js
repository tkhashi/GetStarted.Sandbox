import { renderLayout } from './app/ui/layout.js'
import { mountTaskView } from './app/ui/task_view.js'
import { mountDayView } from './app/ui/day_view.js'
import { hydrate } from './app/state/store.js'
import { mark, measure } from './utils/perf.js'

const { main } = renderLayout()

const left = document.createElement('div')
const right = document.createElement('div')
main.append(left, right)

mountTaskView(left)
mountDayView(right)

mark('hydrate')
hydrate().then(() => {
  const elapsed = measure('hydrate')
  if (elapsed !== null) {
    console.info(`Hydrate completed in ${elapsed}ms`)
  }
})

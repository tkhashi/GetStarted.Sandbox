import { getState } from './store.js'
import { overlapWarningsByDate } from '../../utils/overlap.js'

export const computeDerived = () => {
  const { tasks, timeBlocks } = getState()
  const tasksWithBlocks = new Set(timeBlocks.map((b) => b.taskId))
  const unassignedTasks = tasks.filter((task) => !tasksWithBlocks.has(task.id))
  const overlapWarnings = overlapWarningsByDate(timeBlocks)
  return { unassignedTasks, overlapWarnings }
}

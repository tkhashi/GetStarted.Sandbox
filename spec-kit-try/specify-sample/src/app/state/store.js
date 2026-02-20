import { listTasks } from '../storage/task_store.js'
import { listTimeBlocks } from '../storage/time_block_store.js'

const state = {
  tasks: [],
  timeBlocks: [],
  listeners: new Set()
}

export const getState = () => ({
  tasks: state.tasks,
  timeBlocks: state.timeBlocks
})

export const subscribe = (listener) => {
  state.listeners.add(listener)
  return () => state.listeners.delete(listener)
}

export const notify = () => {
  state.listeners.forEach((listener) => listener(getState()))
}

export const hydrate = async () => {
  state.tasks = await listTasks()
  state.timeBlocks = await listTimeBlocks()
  notify()
}

export const setTasks = (tasks) => {
  state.tasks = tasks
  notify()
}

export const setTimeBlocks = (blocks) => {
  state.timeBlocks = blocks
  notify()
}

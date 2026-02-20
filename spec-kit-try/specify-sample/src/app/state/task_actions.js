import { listTasks, saveTask, deleteTask } from '../storage/task_store.js'
import { createTask, updateTask, validateTask } from './task_model.js'
import { setTasks } from './store.js'

export const refreshTasks = async () => {
  const tasks = await listTasks()
  setTasks(tasks)
}

export const addTask = async (payload) => {
  const task = createTask(payload)
  const error = validateTask(task)
  if (error) throw new Error(error)
  await saveTask(task)
  await refreshTasks()
  return task
}

export const editTask = async (task, updates) => {
  const next = updateTask(task, updates)
  const error = validateTask(next)
  if (error) throw new Error(error)
  await saveTask(next)
  await refreshTasks()
  return next
}

export const toggleTaskStatus = async (task) => {
  const next = updateTask(task, { status: task.status === 'done' ? 'todo' : 'done' })
  await saveTask(next)
  await refreshTasks()
  return next
}

export const removeTask = async (taskId) => {
  await deleteTask(taskId)
  await refreshTasks()
}

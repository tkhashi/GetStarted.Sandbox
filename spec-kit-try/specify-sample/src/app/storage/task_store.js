import { withStore } from './db.js'

export const listTasks = () =>
  withStore('tasks', 'readonly', (store) => store.getAll())

export const getTask = (id) =>
  withStore('tasks', 'readonly', (store) => store.get(id))

export const saveTask = (task) =>
  withStore('tasks', 'readwrite', (store) => store.put(task))

export const deleteTask = (id) =>
  withStore('tasks', 'readwrite', (store) => store.delete(id))

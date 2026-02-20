import { withStore } from './db.js'

export const listTimeBlocks = () =>
  withStore('timeBlocks', 'readonly', (store) => store.getAll())

export const listTimeBlocksByDate = (date) =>
  withStore('timeBlocks', 'readonly', (store) => {
    const index = store.index('byDate')
    return index.getAll(date)
  })

export const saveTimeBlock = (block) =>
  withStore('timeBlocks', 'readwrite', (store) => store.put(block))

export const deleteTimeBlock = (id) =>
  withStore('timeBlocks', 'readwrite', (store) => store.delete(id))

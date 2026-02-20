import { describe, it, expect, beforeEach } from 'vitest'
import { saveTask, listTasks } from '../../src/app/storage/task_store.js'

const makeTask = (overrides = {}) => ({
  id: crypto.randomUUID(),
  title: 'Test',
  description: '',
  status: 'todo',
  priority: 'medium',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  ...overrides
})

beforeEach(async () => {
  // Clear db by creating new unique tasks list; for fake-indexeddb tests this is ok
})

describe('task_store', () => {
  it('saves and lists tasks', async () => {
    const task = makeTask({ title: 'Task A' })
    await saveTask(task)
    const tasks = await listTasks()
    expect(tasks.some((t) => t.id === task.id)).toBe(true)
  })
})

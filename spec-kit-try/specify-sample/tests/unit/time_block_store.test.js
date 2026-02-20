import { describe, it, expect } from 'vitest'
import { saveTimeBlock, listTimeBlocksByDate } from '../../src/app/storage/time_block_store.js'

const makeBlock = (overrides = {}) => ({
  id: crypto.randomUUID(),
  taskId: 'task-1',
  date: '2026-02-20',
  startTime: '09:00',
  endTime: '10:00',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  ...overrides
})

describe('time_block_store', () => {
  it('filters by date', async () => {
    const block = makeBlock()
    await saveTimeBlock(block)
    const blocks = await listTimeBlocksByDate('2026-02-20')
    expect(blocks.some((b) => b.id === block.id)).toBe(true)
  })
})

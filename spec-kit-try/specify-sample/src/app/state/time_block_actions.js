import {
  listTimeBlocks,
  listTimeBlocksByDate,
  saveTimeBlock,
  deleteTimeBlock
} from '../storage/time_block_store.js'
import { createTimeBlock, updateTimeBlock, validateTimeBlock } from './time_block_model.js'
import { setTimeBlocks } from './store.js'

export const refreshTimeBlocks = async () => {
  const blocks = await listTimeBlocks()
  setTimeBlocks(blocks)
}

export const addTimeBlock = async (payload) => {
  const block = createTimeBlock(payload)
  const error = validateTimeBlock(block)
  if (error) throw new Error(error)
  await saveTimeBlock(block)
  await refreshTimeBlocks()
  return block
}

export const editTimeBlock = async (block, updates) => {
  const next = updateTimeBlock(block, updates)
  const error = validateTimeBlock(next)
  if (error) throw new Error(error)
  await saveTimeBlock(next)
  await refreshTimeBlocks()
  return next
}

export const removeTimeBlock = async (id) => {
  await deleteTimeBlock(id)
  await refreshTimeBlocks()
}

export const loadBlocksForDate = async (date) => {
  return listTimeBlocksByDate(date)
}

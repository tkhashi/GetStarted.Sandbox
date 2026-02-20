export const createTimeBlock = ({ taskId, date, startTime, endTime }) => {
  const now = new Date().toISOString()
  return {
    id: crypto.randomUUID(),
    taskId,
    date,
    startTime,
    endTime,
    createdAt: now,
    updatedAt: now
  }
}

export const updateTimeBlock = (block, updates) => ({
  ...block,
  ...updates,
  updatedAt: new Date().toISOString()
})

export const validateTimeBlock = (block) => {
  if (!block.taskId) return 'タスクを選択してください'
  if (!block.date) return '日付を入力してください'
  if (!block.startTime || !block.endTime) return '開始と終了時刻が必要です'
  if (block.startTime >= block.endTime) return '終了時刻は開始時刻より後にしてください'
  return null
}

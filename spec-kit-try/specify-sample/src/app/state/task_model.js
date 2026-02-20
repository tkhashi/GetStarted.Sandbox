export const createTask = ({ title, description = '', priority = 'medium' }) => {
  const now = new Date().toISOString()
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    description: description.trim(),
    status: 'todo',
    priority,
    createdAt: now,
    updatedAt: now
  }
}

export const updateTask = (task, updates) => {
  const next = { ...task, ...updates }
  next.title = (next.title || '').trim()
  next.description = (next.description || '').trim()
  next.updatedAt = new Date().toISOString()
  return next
}

export const validateTask = (task) => {
  if (!task.title || task.title.length > 100) {
    return 'タイトルは1〜100文字で入力してください'
  }
  if (task.description.length > 1000) {
    return '説明は1000文字以内で入力してください'
  }
  return null
}

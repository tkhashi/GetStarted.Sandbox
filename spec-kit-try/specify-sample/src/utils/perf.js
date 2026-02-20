const marks = new Map()

export const mark = (name) => {
  marks.set(name, performance.now())
}

export const measure = (name) => {
  if (!marks.has(name)) return null
  const delta = performance.now() - marks.get(name)
  marks.delete(name)
  return Math.round(delta)
}

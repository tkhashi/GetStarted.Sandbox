const DB_NAME = 'taskflow'
const DB_VERSION = 1

export const openDb = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains('tasks')) {
        db.createObjectStore('tasks', { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains('timeBlocks')) {
        const store = db.createObjectStore('timeBlocks', { keyPath: 'id' })
        store.createIndex('byDate', 'date', { unique: false })
        store.createIndex('byTask', 'taskId', { unique: false })
      }
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export const withStore = async (storeName, mode, handler) => {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, mode)
    const store = tx.objectStore(storeName)
    const request = handler(store)
    const isRequest =
      request && typeof request === 'object' && 'onsuccess' in request && 'onerror' in request
    const requestPromise = isRequest
      ? new Promise((res, rej) => {
          request.onsuccess = () => res(request.result)
          request.onerror = () => rej(request.error)
        })
      : Promise.resolve(request)
    tx.oncomplete = () => {
      requestPromise.then(resolve).catch(reject)
    }
    tx.onerror = () => reject(tx.error)
  })
}

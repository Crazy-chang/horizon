const Storage = {
  /**
   * 保存数据到 localStorage
   * @param {string} key - 存储的键名
   * @param {any} value - 存储的值，可以是任何类型
   */
  set(key: string, value: any) {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error('localStorage set error:', error)
    }
  },

  /**
   * 从 localStorage 中读取数据
   * @param {string} key - 存储的键名
   * @returns {any|null} - 返回解析后的值，如果键不存在返回 null
   */
  get(key: string) {
    try {
      const serializedValue = localStorage.getItem(key)
      return serializedValue ? JSON.parse(serializedValue) : null
    } catch (error) {
      console.error('localStorage get error:', error)
      return null
    }
  },

  /**
   * 从 localStorage 中删除数据
   * @param {string} key - 存储的键名
   */
  remove(key: string) {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('localStorage remove error:', error)
    }
  },

  /**
   * 清空 localStorage 中的所有数据
   */
  clear() {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('localStorage clear error:', error)
    }
  },
}

export default Storage

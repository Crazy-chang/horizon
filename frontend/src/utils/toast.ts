import { ToastOptions } from '@/layouts/toast'

let addToastFunction: any

export const setToastFunction = (
  func: (message: string, options?: ToastOptions) => void,
) => {
  addToastFunction = func
}

/**
 * 全局 toast 组件
 * @param message 消息内容
 * @param options 配置项
 * @example
 * import { toast } from '@/utils'
 * toast('Hello World')
 */
export const toast = (message: string, options?: ToastOptions) => {
  if (addToastFunction) {
    addToastFunction(message, options)
  } else {
    console.warn('Toast function is not initialized.')
  }
}

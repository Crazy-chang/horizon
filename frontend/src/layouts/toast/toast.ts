import { ToastOptions } from './toastProvider'

let addToastFunction: any

export const setToastFunction = (
  func: (message: string, options?: ToastOptions) => void,
) => {
  addToastFunction = func
}

export const toast = (message: string, options?: ToastOptions) => {
  if (addToastFunction) {
    addToastFunction(message, options)
  } else {
    console.warn('Toast function is not initialized.')
  }
}

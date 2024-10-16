type httpResultSuccess = {
  code: number
  data: { [key: string]: any }
  msg: string
}

type httpResultError = {
  code: number
  msg: string
}

export type { httpResultSuccess, httpResultError }

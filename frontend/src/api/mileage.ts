import { httpRequest } from '@/utils'
import { responseType } from '@/types/response'

const api = {
  mileageGet: '/mileage_get',
}

/** 查询收听数据概览 */
export const mileageGet = (): Promise<responseType> =>
  httpRequest.post(api.mileageGet)

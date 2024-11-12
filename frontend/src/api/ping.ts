import { httpRequest } from '@/utils'
import { responseType } from '@/types/response'

export const ping = (): Promise<responseType> => httpRequest.get(`/ping`)

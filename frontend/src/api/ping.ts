import { httpRequest } from '@/utils'

export const ping = () => httpRequest.get('/ping')

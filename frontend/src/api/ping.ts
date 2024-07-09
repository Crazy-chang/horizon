import { httpRequest } from '@/utils'

export const ping = () => httpRequest.post('/ping')

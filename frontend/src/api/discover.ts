import { httpRequest } from '@/utils'
import { responseType } from '@/types/response'

const api = {
  discovery: 'discovery',
}

type discoveryType = {
  loadMoreKey: '' | 'mediumDiscoveryPictorial' | 'discoveryTopic' | 'pick'
}

/** 获取首页榜单、推荐 */
export const discovery = (params: discoveryType): Promise<responseType> =>
  httpRequest.post(api.discovery, params)

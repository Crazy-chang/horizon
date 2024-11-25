import { httpRequest } from '@/utils'
import { responseType } from '@/types/response'

const api = {
  userStats: 'user_stats',
}

type userStatsType = {
  uid: string
}

/** 查询用户统计数据 */
export const getUserStats = (params: userStatsType): Promise<responseType> =>
  httpRequest.post(api.userStats, params)
